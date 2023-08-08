import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await new Promise(resolve => setTimeout(resolve, 220000)); // Wait for 2 seconds
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByPlaceholder('Enter your email to get started').click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('heading', { name: 'About TechFit Gym' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('heading', { name: 'Privacy Policy' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
});