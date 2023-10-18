import { test as teardown } from "./db.fixture";

teardown("db teardown", async ({ prisma }) => {
  console.log("db teardown: test");
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "test" CASCADE;`);
  await prisma.$disconnect();
});
