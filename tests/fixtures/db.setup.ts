import "dotenv/config";

import { test as setup } from "@playwright/test";
import { execSync } from "child_process";
import { generateTestDatabaseUrl } from "~/db/generate-test-url";

setup("db setup", async ({ page }) => {
  const prismaBinary = require.resolve("prisma/build/index.js");
  const databaseUrl = generateTestDatabaseUrl(process.env.DATABASE_URL!);

  process.env.DATABASE_URL = databaseUrl;

  execSync(`node ${prismaBinary} db push --skip-generate`, {
    env: {
      ...process.env,
      DATABASE_URL: databaseUrl,
    },
  });

  execSync(`node ${prismaBinary} db seed -- --environment test`, {
    env: {
      ...process.env,
      DATABASE_URL: databaseUrl,
    },
  });
});
