import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', heading: 'An early-stage fund run by entrepreneurs.' },
  { path: '/portfolio/', heading: 'The companies we have built and backed.' },
  { path: '/approach/', heading: 'We work inside the business, not beside it.' },
  { path: '/team/', heading: 'Operators first, investors second.' },
  { path: '/contact/', heading: 'Pitch us, or just say hello.' },
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

test('pitch email is reachable from the home page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Pitch your company' }).click();
  await expect(page).toHaveURL(/\/contact\/$/);
  await expect(page.getByRole('link', { name: 'info@teamafricaventures.com' }).first()).toHaveAttribute(
    'href',
    /^mailto:info@teamafricaventures\.com/,
  );
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
