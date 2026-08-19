-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('RECEIPT', 'ADJUSTMENT', 'TRANSFER_OUT', 'TRANSFER_IN', 'WASTE', 'CONSUMPTION', 'RETURN');

-- CreateEnum
CREATE TYPE "MovementStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "isBase" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitConversion" (
    "id" TEXT NOT NULL,
    "fromUnitId" TEXT NOT NULL,
    "toUnitId" TEXT NOT NULL,
    "factor" DECIMAL(18,8) NOT NULL,

    CONSTRAINT "UnitConversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "taxId" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "unitId" TEXT NOT NULL,
    "sku" TEXT,
    "barcode" TEXT,
    "reorderPoint" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "reorderQuantity" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "branchId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockLevel" (
    "id" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "quantity" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "reservedQty" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lot" (
    "id" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "manufacturedAt" TIMESTAMP(3),
    "quantity" DECIMAL(12,4) NOT NULL,
    "remainingQty" DECIMAL(12,4) NOT NULL,
    "costPerUnit" DECIMAL(12,4) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockMovement" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "type" "MovementType" NOT NULL,
    "status" "MovementStatus" NOT NULL DEFAULT 'PENDING',
    "referenceId" TEXT,
    "referenceType" TEXT,
    "fromWarehouseId" TEXT,
    "toWarehouseId" TEXT,
    "notes" TEXT,
    "performedById" TEXT,
    "confirmedById" TEXT,
    "confirmedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockMovementLine" (
    "id" TEXT NOT NULL,
    "movementId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "quantity" DECIMAL(12,4) NOT NULL,
    "unitCost" DECIMAL(12,4),
    "lotId" TEXT,
    "notes" TEXT,

    CONSTRAINT "StockMovementLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseReceipt" (
    "id" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "movementId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "invoiceNo" TEXT,
    "invoiceDate" TIMESTAMP(3),
    "totalAmount" DECIMAL(12,4) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchaseReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Unit_restaurantId_idx" ON "Unit"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit_restaurantId_abbreviation_key" ON "Unit"("restaurantId", "abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "UnitConversion_fromUnitId_toUnitId_key" ON "UnitConversion"("fromUnitId", "toUnitId");

-- CreateIndex
CREATE INDEX "Supplier_restaurantId_idx" ON "Supplier"("restaurantId");

-- CreateIndex
CREATE INDEX "Ingredient_restaurantId_idx" ON "Ingredient"("restaurantId");

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_restaurantId_sku_key" ON "Ingredient"("restaurantId", "sku");

-- CreateIndex
CREATE INDEX "Warehouse_restaurantId_idx" ON "Warehouse"("restaurantId");

-- CreateIndex
CREATE INDEX "Warehouse_restaurantId_branchId_idx" ON "Warehouse"("restaurantId", "branchId");

-- CreateIndex
CREATE INDEX "StockLevel_warehouseId_idx" ON "StockLevel"("warehouseId");

-- CreateIndex
CREATE UNIQUE INDEX "StockLevel_ingredientId_warehouseId_key" ON "StockLevel"("ingredientId", "warehouseId");

-- CreateIndex
CREATE INDEX "Lot_ingredientId_warehouseId_idx" ON "Lot"("ingredientId", "warehouseId");

-- CreateIndex
CREATE INDEX "Lot_expiresAt_idx" ON "Lot"("expiresAt");

-- CreateIndex
CREATE INDEX "StockMovement_restaurantId_idx" ON "StockMovement"("restaurantId");

-- CreateIndex
CREATE INDEX "StockMovement_restaurantId_type_idx" ON "StockMovement"("restaurantId", "type");

-- CreateIndex
CREATE INDEX "StockMovement_referenceId_referenceType_idx" ON "StockMovement"("referenceId", "referenceType");

-- CreateIndex
CREATE INDEX "StockMovementLine_movementId_idx" ON "StockMovementLine"("movementId");

-- CreateIndex
CREATE INDEX "StockMovementLine_ingredientId_idx" ON "StockMovementLine"("ingredientId");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseReceipt_movementId_key" ON "PurchaseReceipt"("movementId");

-- CreateIndex
CREATE INDEX "PurchaseReceipt_restaurantId_idx" ON "PurchaseReceipt"("restaurantId");

-- CreateIndex
CREATE INDEX "PurchaseReceipt_supplierId_idx" ON "PurchaseReceipt"("supplierId");

-- AddForeignKey
ALTER TABLE "UnitConversion" ADD CONSTRAINT "UnitConversion_fromUnitId_fkey" FOREIGN KEY ("fromUnitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnitConversion" ADD CONSTRAINT "UnitConversion_toUnitId_fkey" FOREIGN KEY ("toUnitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockLevel" ADD CONSTRAINT "StockLevel_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockLevel" ADD CONSTRAINT "StockLevel_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_fromWarehouseId_fkey" FOREIGN KEY ("fromWarehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_toWarehouseId_fkey" FOREIGN KEY ("toWarehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovementLine" ADD CONSTRAINT "StockMovementLine_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "StockMovement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovementLine" ADD CONSTRAINT "StockMovementLine_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseReceipt" ADD CONSTRAINT "PurchaseReceipt_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "StockMovement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseReceipt" ADD CONSTRAINT "PurchaseReceipt_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
