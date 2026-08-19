// services/inventory-service/src/events/inventory-events.enum.ts
export enum InventoryEvent {
  STOCK_RECEIVED = 'inventory.stock.received',
  STOCK_ADJUSTED = 'inventory.stock.adjusted',
  STOCK_TRANSFERRED = 'inventory.stock.transferred',
  STOCK_WASTED = 'inventory.stock.wasted',
  STOCK_CONSUMED = 'inventory.stock.consumed',
  STOCK_LOW = 'inventory.stock.low',
  STOCK_RESERVED = 'inventory.stock.reserved',
  INGREDIENT_CREATED = 'inventory.ingredient.created',
  INGREDIENT_UPDATED = 'inventory.ingredient.updated',
  SUPPLIER_CREATED = 'inventory.supplier.created',
  RECEIPT_CREATED = 'inventory.receipt.created',
  RECEIPT_CONFIRMED = 'inventory.receipt.confirmed',
  MOVEMENT_CANCELLED = 'inventory.movement.cancelled',
}
