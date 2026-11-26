import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', heading: 'We build AI-first companies.' },
  { path: '/portfolio/', heading: 'The companies we have built and backed.' },
  { path: '/approach/', heading: 'We build inside the company, not beside it.' },
  { path: '/team/', heading: 'Operators first, investors second.' },
  { path: '/contact/', heading: 'Start a build with us.' },
];

for (const p of pages) {
  test(`${p.path} loads with its heading and no horizontal scroll`, async ({ page }) => {
    const res = await page.goto(p.path);
    expect(res?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: p.heading })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}

test('unknown pages return the 404 page', async ({ page }) => {
  const res = await page.goto('/does-not-exist');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1, name: 'That page is not here.' })).toBeVisible();
});

test('founder path from the home page pre-selects the founder role', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Start here' }).getByRole('link', { name: /Founders/ }).click();
  await expect(page).toHaveURL(/\/contact\/#founders$/);
  await expect(page.getByRole('radio', { name: 'founder' })).toBeChecked();
});

test('operator path pre-selects the operator role', async ({ page }) => {
  await page.goto('/contact/#operators');
  await expect(page.getByRole('radio', { name: 'operator' })).toBeChecked();
});

test('email composer asks for a name before opening the mail app', async ({ page }) => {
  await page.goto('/contact/');
  await page.getByRole('button', { name: 'Open in my email app' }).click();
  await expect(page.getByText('Add your name so we know who is writing.')).toBeVisible();
  await expect(page.getByLabel('Your name')).toHaveAttribute('aria-invalid', 'true');
});

test('contact email links to the studio inbox', async ({ page }) => {
  await page.goto('/contact/');
  await expect(page.getByRole('link', { name: 'info@teamafricaventures.com' }).first()).toHaveAttribute(
    'href',
    /^mailto:info@teamafricaventures\.com/,
  );
});

test('theme toggle switches and remembers the theme', async ({ page }) => {
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Dark theme' });
  const before = await toggle.getAttribute('aria-pressed');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', before === 'true' ? 'false' : 'true');
  await page.goto('/team/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', before === 'true' ? 'light' : 'dark');
});

test('track record shows the current figures', async ({ page }) => {
  await page.goto('/');
  for (const v of ['8', '1,000+', '$50m+', '$250m+']) {
    await expect(page.locator('.ledger dd', { hasText: v }).first()).toBeVisible();
  }
});

test('llms.txt is served for AI assistants', async ({ request }) => {
  const res = await request.get('/llms.txt');
  expect(res.status()).toBe(200);
  expect(await res.text()).toContain('venture studio');
});

test('portfolio filter shows only exits', async ({ page }) => {
  await page.goto('/portfolio/');
  const rows = page.locator('.index__row');
  const all = await rows.count();
  await page.getByRole('button', { name: /Exits/ }).click();
  const visible = page.locator('.index__row:not([hidden])');
  const exits = await visible.count();
  expect(exits).toBeGreaterThan(0);
  expect(exits).toBeLessThan(all);
  await expect(page.getByRole('button', { name: /Exits/ })).toHaveAttribute('aria-pressed', 'true');
});

test('mobile menu opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'menu button only shows on small screens');
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menu' });
  await toggle.click();
  await expect(page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Portfolio' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Portfolio' })).toBeHidden();
});

test('health check responds', async ({ request }) => {
  const res = await request.get('/healthz');
  expect(res.status()).toBe(200);
  expect(await res.text()).toBe('ok');
});

test('team bios describe outside businesses generically, without naming them', async ({ page }) => {
  await page.goto('/team/');
  await expect(page.getByText('an AI consultancy that builds AI operating layers')).toBeVisible();
  await expect(page.locator('main')).not.toContainText('Automaiq');
});

test('email signature logo is served as a PNG for mail clients', async ({ request }) => {
  const res = await request.get('/email/tav-logo.png');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toBe('image/png');
});

test('portfolio filter buttons use the sans display face', async ({ page }) => {
  await page.goto('/portfolio/');
  const family = await page.getByRole('button', { name: /Exits/ }).evaluate((el) => getComputedStyle(el).fontFamily);
  expect(family).toContain('Urbanist');
});

test('track record list pairs each label (dt) before its value (dd)', async ({ page }) => {
  await page.goto('/');
  const firstTags = await page.locator('.ledger > div').evaluateAll((groups) =>
    groups.map((g) => g.firstElementChild?.tagName),
  );
  expect(firstTags.length).toBeGreaterThan(0);
  for (const tag of firstTags) expect(tag).toBe('DT');
});

test('browser theme colour follows light and dark', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('meta[name="theme-color"][media="(prefers-color-scheme: light)"]')).toHaveAttribute('content', '#ffffff');
  await expect(page.locator('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]')).toHaveAttribute('content', '#111030');
  await page.evaluate(() => localStorage.setItem('tav-theme', 'dark'));
  await page.reload();
  for (const meta of await page.locator('meta[name="theme-color"]').all()) {
    await expect(meta).toHaveAttribute('content', '#111030');
  }
});

test('signature template uses absolute https image URLs so mail clients can load them', async () => {
  const { readFileSync } = await import('node:fs');
  const html = readFileSync(new URL('../docs/email-signature/template.html', import.meta.url), 'utf8');
  const srcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  expect(srcs.length).toBeGreaterThan(0);
  for (const src of srcs) expect(src).toMatch(/^https:\/\//);
});

test('Bulbshare is listed as an exit to SMG, and Latimer is gone', async ({ page }) => {
  await page.goto('/portfolio/');
  const row = page.locator('.index__row', { hasText: 'Bulbshare' });
  await expect(row).toHaveCount(1);
  await expect(row).toHaveAttribute('data-exited', 'true');
  await expect(row).toContainText('Acquired by Service Management Group (SMG), 2024');
  await expect(page.locator('main')).not.toContainText('Latimer');
});

test('JinPay is listed as an exit to Coindirect in 2022', async ({ page }) => {
  await page.goto('/portfolio/');
  const row = page.locator('.index__row', { hasText: 'JinPay' });
  await expect(row).toHaveCount(1);
  await expect(row).toHaveAttribute('data-exited', 'true');
  await expect(row).toContainText('Acquired by Coindirect, 2022');
  await expect(row).toContainText('foreign exchange');
});
