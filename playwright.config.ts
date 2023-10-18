import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";
import { generateTestDatabaseUrl } from "~/generate-test-url";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    { name: "db-setup", testMatch: /db.setup\.ts/, teardown: "db-teardown" },
    { name: "db-teardown", testMatch: /db.teardown\.ts/ },
    {
      name: "auth-setup",
      testMatch: /auth.setup\.ts/,
      dependencies: ["db-setup"],
    },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /.*\.spec\.ts/,
      dependencies: ["auth-setup"],
    },
  ],

  webServer: {
    command: "yarn dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    env: {
      DATABASE_URL: process.env.DATABASE_URL!,
    },
    stdout: "pipe",
  },
});
