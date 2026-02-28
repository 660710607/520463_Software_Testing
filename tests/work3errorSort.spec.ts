import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('sec');
  await page.locator('[data-test="login-button"]').click();

  //assert error message box
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toHaveText(/do not match/);

  // assert username field error css
  await expect(page.locator('[data-test="username"]')).toHaveClass(/error/);

    
  await page.locator('[data-test="error-button"]').click();
  //assert error message box is closed
  await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  
  
  //loginNsort
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  //assert first item is 7.99
  await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
});
   