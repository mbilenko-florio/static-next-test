import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/en');
  await page.click('text=Dashboard');
  await expect(page).toHaveURL('/en/dashboard');
  await expect(page.locator('h1')).toContainText('Dashboard');
});
