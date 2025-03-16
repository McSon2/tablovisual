-- AlterTable
ALTER TABLE "account" ALTER COLUMN "provider" DROP NOT NULL,
ALTER COLUMN "provider" SET DEFAULT 'credential';
