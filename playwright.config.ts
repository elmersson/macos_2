import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './__e2e__',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: [['json', { outputFile: 'results.json' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    },
    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    },
    {
      name: 'Safari',
      use: {
        ...devices['Desktop Safari'],
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    }
  ],

  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI
  },
  reporter: [
    ['dot'],

    [
      'json',
      {
        outputFile: 'jsonReports/jsonReport.json'
      }
    ],

    [
      'html',
      {
        open: 'on-failure'
      }
    ]
  ]
};
export default config;
