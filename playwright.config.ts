import { defineConfig, devices } from '@playwright/test';

const chrome = process.env.CHROME_PATH ? { launchOptions: { executablePath: process.env.CHROME_PATH } } : {};

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://127.0.0.1:4322', ...chrome },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, ...chrome } },
    { name: 'mobile', use: { ...devices['Pixel 7'], viewport: { width: 390, height: 844 }, ...chrome } },
  ],
  webServer: {
    command: 'PORT=4322 node server.mjs',
    url: 'http://127.0.0.1:4322/healthz',
    reuseExistingServer: !process.env.CI,
  },
});
