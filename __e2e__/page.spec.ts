import { test, expect } from '@playwright/test'

test('navigates to page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('progressbar')).toBeVisible();
  await expect(page.getByText('Rasmus Elmersson')).toBeVisible();
})