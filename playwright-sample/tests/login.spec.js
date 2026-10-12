import { test, expect } from '@playwright/test';
import { login } from '../helpers/auth.js';

test('valid login opens dashboard', async ({ page }) => {
  await login(page, process.env.DEMO_USER, process.env.DEMO_PASS);
  await expect(page).toHaveURL(/dashboard/);
});
test('invalid login shows error', async ({ page }) => {
  await login(page, 'wrong@example.com', 'bad-password');
  await expect(page.getByRole('alert')).toContainText(/invalid/i);
});
test('required fields are validated', async ({ page }) => {
  await page.goto('/login');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText(/required/i).first()).toBeVisible();
});
