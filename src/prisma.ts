import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const options: Prisma.PrismaClientOptions = {
  log: [
    { emit: "stdout", level: "warn" },
  ],
};

export const db = globalForPrisma.prisma || new PrismaClient(options);

// Non-production Prisma Client should get reused.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
