/*
  Warnings:

  - You are about to drop the column `tierId` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the `Tier` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `treeId` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `position` on the `Branch` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `position` to the `Leaf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_tierId_fkey";

-- DropForeignKey
ALTER TABLE "Tier" DROP CONSTRAINT "Tier_treeId_fkey";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "tierId",
ADD COLUMN     "treeId" TEXT NOT NULL,
DROP COLUMN "position",
ADD COLUMN     "position" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Leaf" ADD COLUMN     "position" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Tier";

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "Tree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
