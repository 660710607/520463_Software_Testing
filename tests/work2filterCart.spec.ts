import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  //1 item
  await page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .getByRole('button', { name: 'Add to cart' })
    .click();
  //assert
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

  //2 item
  await page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .getByRole('button', { name: 'Add to cart' })
    .click();
  //assert
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

  //remove item
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  //assert
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
   
});