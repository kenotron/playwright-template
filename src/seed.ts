import { parseArgs } from "node:util";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seed() {
  try {
    console.log(`Start seeding ...`);

    // do seeding

    console.log(`Seeding finished.`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function testSeed() {
  try {
    console.log(`Start seeding for test...`);

    // do seeding

    console.log(`Seeding finished.`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  const args = parseArgs({
    options: {
      environment: { type: "string" },
    },
  });

  const environment = args.values.environment;

  if (environment === "test") {
    testSeed();
  } else {
    seed();
  }
}
