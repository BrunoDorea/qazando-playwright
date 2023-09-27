// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.brunodorea.com.br/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Bruno Dórea/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.brunodorea.com.br/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Blog' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Artigos' })).toBeVisible();
});

test('automation pratice - teste login com sucesso @login', async ({ page }) => {
  test.setTimeout(20000)
  await page.goto('https://automationpratice.com.br/');
  await page.screenshot({ path: 'screenshot/screenshot'+ Date.now() + '.png' });
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('1233456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.screenshot({ path: 'screenshot/screenshot'+ Date.now() +'.png' });
});

// test('', async ({ page }) => {

// });
