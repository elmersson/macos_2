import { test, expect } from '@playwright/test';

test.describe('E2E Tests for Website', () => {
  test('Verify Homepage Title and Content', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Rasmus Elmersson/);

    const progressBar = await page.$('.h-1');
    expect(progressBar).not.toBeNull();

    const headerText = await page.getByText('Rasmus Elmersson');
    expect(headerText).toBeDefined();
  });
});
