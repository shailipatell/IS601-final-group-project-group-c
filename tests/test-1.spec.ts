import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
  await page.goto('http://localhost:3001/home/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('button', { name: 'Join Now' }).click();
  await page.getByPlaceholder('Enter your email to get started').click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('heading', { name: 'About TechFit Gym' }).click();
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('heading', { name: 'Privacy Policy' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
});