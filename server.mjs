// Minimal production server for the static build in ./dist.
// No dependencies: Node's http, fs and zlib only. Listens on $PORT (Railway sets it).
import { createServer } from 'node:http';
import { createReadStream, statSync, existsSync } from 'node:fs';
import { join, normalize, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.webmanifest': 'application/manifest+json',
};
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.json', '.xml', '.txt', '.svg']);

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy':
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:",
};

function fileFor(urlPath) {
  let p;
  try {
    p = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  const safe = normalize(p).replace(/^([/\\])+/, '');
  const full = join(ROOT, safe);
  if (full !== ROOT && !full.startsWith(ROOT + sep)) return null; // path traversal guard
  return full;
}

function isFile(p) {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
}

function send(req, res, status, filePath, extra = {}) {
  const ext = extname(filePath).toLowerCase();
  const headers = {
    ...SECURITY_HEADERS,
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': req.url.startsWith('/_astro/')
      ? 'public, max-age=31536000, immutable'
      : ext === '.html'
        ? 'no-cache'
        : 'public, max-age=86400',
    Vary: 'Accept-Encoding',
    ...extra,
  };
  const gzip = COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gzip) headers['Content-Encoding'] = 'gzip';
  else headers['Content-Length'] = statSync(filePath).size;
  res.writeHead(status, headers);
  if (req.method === 'HEAD') return res.end();
  const stream = createReadStream(filePath);
  stream.on('error', () => res.destroy());
  if (gzip) stream.pipe(createGzip()).pipe(res);
  else stream.pipe(res);
}

const server = createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  const url = new URL(req.url || '/', 'http://localhost');
  const path = url.pathname;

  if (path === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Cache-Control': 'no-store' });
    return res.end('ok');
  }

  const full = fileFor(path);
  if (!full) {
    res.writeHead(400);
    return res.end();
  }

  if (isFile(full)) return send(req, res, 200, full);

  // /about -> /about/ when a directory index exists
  if (!path.endsWith('/') && isFile(join(full, 'index.html'))) {
    res.writeHead(301, { Location: path + '/' + url.search });
    return res.end();
  }
  if (path.endsWith('/') && isFile(join(full, 'index.html'))) {
    return send(req, res, 200, join(full, 'index.html'));
  }

  const notFound = join(ROOT, '404.html');
  if (existsSync(notFound)) return send(req, res, 404, notFound);
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(PORT, HOST, () => {
  console.log(`Team Africa Ventures site listening on http://${HOST}:${PORT}`);
});

const shutdown = () => server.close(() => process.exit(0));
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
