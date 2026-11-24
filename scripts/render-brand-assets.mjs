// Regenerates public/og.png, public/apple-touch-icon.png and public/favicon-32.png
// from scripts/brand-assets.html. Run: node scripts/render-brand-assets.mjs
// Needs a Playwright Chromium (npx playwright install chromium) or CHROME_PATH.
import { chromium } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const html = new URL('./brand-assets.html', import.meta.url).href;
const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url));

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {},
);
const page = await browser.newPage({ viewport: { width: 1300, height: 1300 } });
await page.goto(html);
await page.evaluate(() => document.fonts.ready);
await page.locator('#og').screenshot({ path: out('og.png') });
await page.locator('#icon').screenshot({ path: out('apple-touch-icon-512.png') });
// Then downscale apple-touch-icon-512.png to apple-touch-icon.png (180px) and favicon-32.png (32px).
await browser.close();
console.log('Rendered og.png and apple-touch-icon-512.png');
