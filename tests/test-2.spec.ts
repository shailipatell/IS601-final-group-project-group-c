import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  let page;

  // Set up the common test environment
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('http://localhost:3001/home');
  });

  // Clean up after all tests have run
  test.afterAll(async () => {
    await page.close();
  });

  test('Click Join Now Button', async () => {
    await page.getByRole('button', { name: 'Join Now' }).click();
    // Add assertions to verify the expected outcome of clicking the button
  });

  test('Click Mission and Core Values Headings', async () => {
    await page.getByRole('heading', { name: 'Our Mission' }).click();
    await page.getByRole('heading', { name: 'Our Core Values' }).click();
    // Add assertions to verify the expected outcome of clicking the headings
  });

  test('Click About Link and Heading', async () => {
    await page.getByRole('link', { name: 'About' }).click();
    await page.getByRole('heading', { name: 'About TechFit Gym' }).click();
    // Add assertions to verify the expected outcome of clicking the link and heading
  });

  test('Click Copyright Text and Privacy Policy Link', async () => {
    await page.getByText('© 2023 TechFit Gym. All rights reserved.').click();
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    // Add assertions to verify the expected outcome of clicking the text and link
  });

  test('Click Home Link', async () => {
    await page.getByRole('link', { name: 'Home' }).click();
    // Add assertions to verify the expected outcome of clicking the link
  });
});
