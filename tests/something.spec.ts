import { test, expect } from "@playwright/test";

test("admin can login", async ({ browser }) => {
  const adminContext = await browser.newContext({
    storageState: "playwright/.auth/admin.json",
  });

  const adminPage = await adminContext.newPage();

  // ... do some admin auth stuff ...

  await adminContext.close();
});
