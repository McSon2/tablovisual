-- AlterTable
ALTER TABLE "session" ALTER COLUMN "expires" DROP NOT NULL,
ALTER COLUMN "expires" SET DEFAULT NOW() + interval '1 day';
