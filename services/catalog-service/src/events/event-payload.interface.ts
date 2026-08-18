// services/catalog-service/src/events/event-payload.interface.ts
export interface EventEnvelope<T = unknown> {
  eventId: string;
  eventType: string;
  version: number;
  occurredAt: string;
  restaurantId: string;
  payload: T;
}

export interface CategoryEventPayload {
  categoryId: string;
  name: string;
  restaurantId: string;
}

export interface ItemEventPayload {
  itemId: string;
  name: string;
  categoryId: string;
  restaurantId: string;
  isActive?: boolean;
}

export interface MenuEventPayload {
  menuId: string;
  restaurantId: string;
  branchId?: string | null;
  status: string;
}

export interface PriceEventPayload {
  menuItemId: string;
  restaurantId: string;
  priceId: string;
  amount: string;
  currency: string;
}
