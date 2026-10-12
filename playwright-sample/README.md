# Playwright Sample (fictional demo app)
These tests target a fictional login page. They have NOT been run against a real system.
Set `BASE_URL`, `DEMO_USER`, `DEMO_PASS` to a demo app you control (never real credentials).
```powershell
cd playwright-sample
npm install
npx playwright install chromium
$env:BASE_URL="http://localhost:3000"; $env:DEMO_USER="demo@example.com"; $env:DEMO_PASS="demo-pass"
npm test
```
TODO: add tests for dashboard navigation validation.
