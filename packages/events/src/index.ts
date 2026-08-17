export const EventPatterns = {
  ORDER_CREATED: 'order.created',
  ORDER_CONFIRMED: 'order.confirmed',
  ORDER_CANCELLED: 'order.cancelled',
  ORDER_READY: 'order.ready',
  INVENTORY_UPDATED: 'inventory.updated',
  INVENTORY_LOW_STOCK: 'inventory.low_stock',
  DELIVERY_ASSIGNED: 'delivery.assigned',
  DELIVERY_PICKED_UP: 'delivery.picked_up',
  DELIVERY_COMPLETED: 'delivery.completed',
  DELIVERY_LOCATION_UPDATED: 'delivery.location.updated',
  NOTIFICATION_SEND: 'notification.send',
} as const;

export type EventPattern = (typeof EventPatterns)[keyof typeof EventPatterns];

export interface BaseEvent {
  eventId: string;
  eventType: EventPattern;
  timestamp: string;
  version: string;
  source: string;
}

export interface OrderCreatedEvent extends BaseEvent {
  eventType: 'order.created';
  payload: {
    orderId: string;
    branchId: string;
    customerId: string;
    items: Array<{
      menuItemId: string;
      quantity: number;
      price: number;
    }>;
    totalAmount: number;
  };
}

export interface OrderConfirmedEvent extends BaseEvent {
  eventType: 'order.confirmed';
  payload: {
    orderId: string;
    branchId: string;
    estimatedPrepTime: number;
  };
}

export interface InventoryUpdatedEvent extends BaseEvent {
  eventType: 'inventory.updated';
  payload: {
    itemId: string;
    branchId: string;
    previousQuantity: number;
    newQuantity: number;
    reason: string;
  };
}

export interface DeliveryLocationUpdatedEvent extends BaseEvent {
  eventType: 'delivery.location.updated';
  payload: {
    deliveryId: string;
    driverId: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    timestamp: string;
  };
}
