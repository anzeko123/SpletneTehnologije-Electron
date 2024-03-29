
const { _electron: electron, test, expect} = require('@playwright/test');

let window;
let electronApp;

test.beforeAll(async () => {

    electronApp = await electron.launch({ args: ['main.js'] });

    window = await electronApp.firstWindow();
});

test("Check window title.", async () => {
  const windowName = await window.title();
  await expect(windowName).toBe("Gis Desktop");
});

test("Check for dark mode.", async () => {
  //await window.click('text=Dark Mode');
  //await window.locator('Button:text("Dark mode")').click();
  //await window.getByRole('Button').click();
  await window.click('#toggle-dark-mode');
  await window.screenshot({path: 'screenshots/dark-mode.png'});
  //await expect(windowName.locator("#toggle-dark-mode")).toHaveCount(0)
  //await expect(window.locator(".header")).toHaveCSS("color: #f1f1f1 !important")
  //await window.emulateMedia({ colorScheme: 'light' });
  //await window.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches);
  //await window.evaluate(() => matchMedia('(prefers-color-scheme: light)').matches);
  
})


