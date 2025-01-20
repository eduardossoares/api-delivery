/*
  Warnings:

  - You are about to drop the column `adress` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `order-items` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number_adress` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street_adress` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order-items" DROP CONSTRAINT "order-items_order_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "adress",
ADD COLUMN     "number_adress" TEXT NOT NULL,
ADD COLUMN     "reference_adress" TEXT,
ADD COLUMN     "street_adress" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT false,
ALTER COLUMN "draft" SET DEFAULT true;

-- DropTable
DROP TABLE "order-items";

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
