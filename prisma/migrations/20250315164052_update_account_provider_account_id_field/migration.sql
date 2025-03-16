-- AlterTable
ALTER TABLE "account" ALTER COLUMN "providerAccountId" DROP NOT NULL,
ALTER COLUMN "providerAccountId" SET DEFAULT 'credential';
