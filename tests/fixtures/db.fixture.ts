import { test as base, expect } from "@playwright/test";
import { PrismaClient } from "@prisma/client";
import { generateTestDatabaseUrl } from "~/generate-test-url";

export interface DBFixtures {
  prisma: PrismaClient;
}

export const test = base.extend<{}, DBFixtures>({
  prisma: [
    async ({}, use) => {
      await use(
        new PrismaClient({
          datasources: {
            db: { url: generateTestDatabaseUrl(process.env.DATABASE_URL!) },
          },
        })
      );
    },
    {
      scope: "worker",
    },
  ],
});

export { expect };
