import { test, expect } from '@playwright/test';

test('Add, complete and clear todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  const todoInput = page.getByRole('textbox', { name: 'What needs to be done?' });
  const todoItems = page.getByRole('listitem');


  await todoInput.fill('Learn Playwright');
  await todoInput.press('Enter');

  await expect(todoItems).toHaveCount(1);
  await expect(todoItems.first()).toContainText('Learn Playwright');


  await todoItems.first().getByRole('checkbox').check();
  await expect(todoItems.first()).toHaveClass(/completed/);

  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(todoItems).toHaveCount(0);
});