import { test as setup } from "@playwright/test";

const adminFile = "playwright/.auth/admin.json";

setup("authenticate as admin", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Email address").fill("admin@example.org");
  await page.getByRole("button", { name: "Enter your email" }).click();
  await page.getByPlaceholder("Password").fill("password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Sign Out" }).waitFor({ state: "visible" });
  await page.context().storageState({ path: adminFile });
});

const teacherFile = "playwright/.auth/user.json";

setup("authenticate as user", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Email address").fill("user@example.org");
  await page.getByRole("button", { name: "Enter your email" }).click();
  await page.getByPlaceholder("Password").fill("password");
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.getByRole("button", { name: "Sign Out" }).waitFor({ state: "visible" });
  await page.context().storageState({ path: teacherFile });
});
