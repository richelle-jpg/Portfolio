import { Section } from './Sections.jsx';

const sample = `// tests/login.spec.js  (fictional demo app, not run against a real system)
import { test, expect } from '@playwright/test';

test('valid login opens dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill(process.env.DEMO_USER);
  await page.getByLabel('Password').fill(process.env.DEMO_PASS);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(/dashboard/);
});

test('invalid login shows error', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('wrong@example.com');
  await page.getByLabel('Password').fill('bad');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('alert')).toContainText(/invalid/i);
});`;

export default function CodeSamples() {
  return (
    <Section id="code" title="Playwright Code Samples">
      <p className="muted">Representative sample. Full runnable project with setup instructions is in <code>playwright-sample/</code>.</p>
      <pre className="code" tabIndex={0}><code>{sample}</code></pre>
    </Section>
  );
}
