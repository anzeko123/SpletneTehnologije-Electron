//const { _electron: electron } = require('playwright')
//const { test } = require('@playwright/test')

//test('get isPackaged', async () => {
  //const electronApp = await electron.launch({ args: ['main.js'] })
  /* 
  // Get the first window that the app opens, wait if necessary.
    const window = await electronApp.firstWindow();
    // Print the title.
    console.log(await window.title());
    // Capture a screenshot.
    await window.screenshot({ path: 'intro.png' });
    // Direct Electron console to Node terminal.
    window.on('console', console.log);
    // Click button.
    //await window.click('text=Click me');
    // Exit app.
    await electronApp.close();
    */
  /*
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    // This runs in Electron's main process, parameter here is always
    // the result of the require('electron') in the main app script.
    expect(app.isPackaged).toBe(false);
    return app.isPackaged
  })
  console.log(isPackaged) // false (because we're in development mode)
  // close app
  await electronApp.close()
  */
//})


// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: '../electron-tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

