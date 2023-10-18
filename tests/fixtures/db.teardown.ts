import { test as teardown } from "./db.fixture";

teardown("db teardown", async ({ prisma }) => {
  console.log("db teardown: test-leaps");
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "test-leaps" CASCADE;`);
  await prisma.$disconnect();
});
