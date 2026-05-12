# idsairnav-cronos — Playwright Test Framework

A BDD-based test automation framework built with [Playwright](https://playwright.dev) and [playwright-bdd](https://vitalets.github.io/playwright-bdd), using Gherkin feature files to describe test scenarios in plain language. Supports both UI (browser) and API (HTTP) tests.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Playwright | ^1.52.0 | Test runner & browser automation |
| playwright-bdd | ^8.5.0 | Gherkin/BDD integration |
| TypeScript | ^6.0.3 | Type safety |
| dotenv | ^17.4.2 | Environment variable management |

---

## Project Structure

```
tests/
├── api/
│   └── clients/            # API client classes (per resource)
├── credentials/            # Environment-derived credentials (UI & API)
├── features/               # Gherkin feature files
│   ├── api/
│   │   ├── regression/
│   │   └── sanity/
│   └── ui/
│       ├── regression/
│       └── sanity/
├── pages/
│   ├── locators/           # Playwright locators per page
│   └── page/               # Page classes with actions & getters
├── steps/
│   ├── api/                # API step definitions
│   └── ui/                 # UI step definitions
└── support/
    ├── fixtures.ts         # Custom Playwright fixtures
    ├── globalSetup.ts      # One-time setup (storageState login)
    └── hooks.ts            # BDD hooks
playwright.config.ts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- [Playwright browsers](https://playwright.dev/docs/browsers) installed

### Installation

```bash
npm install
npx playwright install
```

### Environment Setup

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

```env
BASE_URL=https://thedummysite.com
USER1_USERNAME=
USER1_PASSWORD=
USER2_USERNAME=
USER2_PASSWORD=
API_BASE_URL=
API_USERNAME=
API_PASSWORD=
```

> `.env` is git-ignored and must never be committed.

---

## Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests across all projects |
| `npm run test:regression` | Run regression tests only |
| `npm run test:smoke` | Run smoke tests only |
| `npm run test:e2e` | Run E2E tests only |
| `npm run test:api` | Run API tests only |
| `npm run test:headed` | Run all tests in headed (visible) mode |
| `npm run test:report` | Open the last HTML report manually |

---

## Test Projects & Tags

Tests are organised into Playwright projects, filtered by Gherkin tags:

| Project | Tag | Description |
|---------|-----|-------------|
| Regression Tests | `@regression` | Full UI regression suite |
| Smoke Tests | `@smoke` | Critical UI path checks |
| E2E Tests | `@e2e` | End-to-end user journeys |
| Authenticated Tests | `@authenticated` | UI tests that reuse a saved login session |
| API Tests | `@api` | HTTP/API tests (no browser) |

Tag your feature files accordingly:

```gherkin
@regression
Feature: Sign In
  ...
```

---

## Architecture

### Page Object Model (UI)

The `pages/` folder is split into two layers:

- **`locators/`** — defines Playwright locators for each page (what elements exist)
- **`page/`** — defines actions and getters for each page (what you can do)

All page classes extend `BasePage`, which provides shared behaviour such as cookie banner dismissal.

Step definitions only interact with page classes — never with the locators layer directly.

### Authenticated UI Tests

Tests tagged `@authenticated` reuse a saved browser session instead of logging in through the UI each time:

- `tests/support/globalSetup.ts` runs once before any test — it launches a browser, signs in via `LoginPage`, and saves the session to `storageState.json` (git-ignored).
- The `Authenticated Tests` project loads `storageState.json` as the browser's starting state, so any test tagged `@authenticated` begins already logged in.
- `storageState.json` is regenerated on every `npm test` run, so it never goes stale.

### API Architecture

The API testing layer mirrors the page-object pattern, with three pieces:

**1. Clients (`tests/api/clients/`)** — one class per API resource, wrapping HTTP calls:

- `SessionClient` → endpoints under `/session/*` (e.g. `login()`)
- `LayoutClient` → endpoints under `/layout/*` (e.g. `getSidebar()`)

Each client receives an `APIRequestContext` via constructor and returns raw `APIResponse` objects. Step files own the assertions; clients only know what URL to hit and what method to use.

**2. Worker-scoped sign-in (`apiAuth` fixture)** — defined in `tests/support/fixtures.ts`:

- Runs **once per worker** (not per test), so the sign-in cost is paid only once.
- Calls `SessionClient.login()` and extracts the `X-CSRF-TOKEN` from the response headers.
- Exposes `{ csrfToken }` to any test or fixture that depends on `apiAuth`.

**3. Authenticated client fixtures (e.g. `layoutClient`)** — also in `fixtures.ts`:

- Depend on `apiAuth`, so requesting one triggers the sign-in if it hasn't happened yet.
- Create a request context with the CSRF token baked into headers via `extraHTTPHeaders`.
- Provide a ready-to-use client whose every call automatically carries the auth header — step files never thread the token manually.

Step files use the per-test `apiContext` fixture to share response state between `When` and `Then`.

### Credentials

`tests/credentials/` holds environment-derived credentials for both UI and API:

- `users.ts` → UI users (`USER1_USERNAME`, `USER2_USERNAME`, …)
- `apiCredentials.ts` → API user (`API_USERNAME`, `API_PASSWORD`)

Values are exposed via **lazy getters**, so a missing env var only fails the run that actually accesses it (a UI-only run won't crash if `API_USERNAME` isn't set, and vice versa).

### BDD Flow

1. Feature files (`.feature`) describe scenarios in Gherkin
2. `bddgen` generates spec files into `.features-gen/`
3. Playwright runs the generated specs using step definitions and fixtures

**Data tables** can be passed to a step to assert multiple fields on a single response without repeating `And` lines:

```gherkin
Then the response should contain:
  | field                      | value                            |
  | localizedStatusDescription | Operation completed successfully |
```

---

## Reporting

After every test run:
- **Terminal** — live results via the `list` reporter
- **HTML report** — opens automatically in the browser after the run

To manually open the last report:

```bash
npm run test:report
```

---

## CI / GitHub Actions

Every push to `main` automatically triggers the pipeline which:
1. Installs dependencies and Playwright browsers
2. Runs all tests
3. Publishes the HTML report to GitHub Pages

The pipeline **passes** only if all tests pass. If any test fails, it is retried up to 2 times before the pipeline is marked as **failed**.

### Viewing the pipeline

Go to the repository → **Actions** to see all pipeline runs, step-by-step logs, and pass/fail status.

### Viewing the report

The latest test report is always available at:

```
https://aleksandarsergiev.github.io/idsairnav-cronos
```

The report is updated automatically after every pipeline run.

### Downloading screenshots and videos on failure

When a test fails, screenshots and videos are automatically uploaded as a pipeline artifact and kept for 7 days. To access them:

1. Go to the repository → **Actions**
2. Select the failed pipeline run
3. Scroll to the **Artifacts** section at the bottom
4. Download **test-results**

> Artifacts are only uploaded when the pipeline fails — no artifacts are produced on a passing run.

### GitHub Secrets

The pipeline reads credentials from GitHub Repository Secrets. To set them up:

1. Go to repository → **Settings** → **Secrets and variables** → **Actions**
2. Add the following **Repository secrets**:

```
BASE_URL
USER1_USERNAME
USER1_PASSWORD
USER2_USERNAME
USER2_PASSWORD
API_BASE_URL
API_USERNAME
API_PASSWORD
```

