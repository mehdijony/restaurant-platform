// services/catalog-service/src/events/catalog-events.enum.ts
export enum CatalogEvent {
  // Category events
  CATEGORY_CREATED = 'catalog.category.created',
  CATEGORY_UPDATED = 'catalog.category.updated',
  CATEGORY_DELETED = 'catalog.category.deleted',

  // Item events
  ITEM_CREATED = 'catalog.item.created',
  ITEM_UPDATED = 'catalog.item.updated',
  ITEM_DELETED = 'catalog.item.deleted',
  ITEM_AVAILABILITY_CHANGED = 'catalog.item.availability_changed',

  // Modifier events
  MODIFIER_GROUP_CREATED = 'catalog.modifier_group.created',
  MODIFIER_GROUP_UPDATED = 'catalog.modifier_group.updated',
  MODIFIER_GROUP_DELETED = 'catalog.modifier_group.deleted',

  // Menu events
  MENU_CREATED = 'catalog.menu.created',
  MENU_PUBLISHED = 'catalog.menu.published',
  MENU_ARCHIVED = 'catalog.menu.archived',

  // Price events
  PRICE_UPDATED = 'catalog.price.updated',
}
