# Database Strategy

## PostgreSQL + PostGIS

PostgreSQL is the transactional source of truth. PostGIS is enabled where geographic operations are required, primarily for delivery/tracking and address-related features.

## Ownership model

Recommended initial structure:

```text
PostgreSQL server
├── auth_db
├── restaurant_db
├── catalog_db
├── inventory_db
├── order_db
├── kitchen_db
├── delivery_db
├── tracking_db
├── notification_db
└── reporting_db
```

Move a database to a dedicated instance only when operational or scaling requirements justify it.

## Core inventory model

Inventory should behave as a ledger.

```text
StockItem
  -> StockMovement (+/-)
       RECEIVE
       SALE_CONSUMPTION
       TRANSFER_OUT
       TRANSFER_IN
       WASTE
       ADJUSTMENT
       RETURN
```

Do not treat a mutable `quantity` column as the only historical source of truth.

Maintain a current balance for fast reads, but preserve movements for audit and reconstruction.

## Core order model

```text
Order
├── OrderItem
├── PaymentReference
├── Fulfillment
├── DeliveryReference
├── StatusHistory
└── AuditReference
```

Never put courier-specific fields directly into the base Order model.

## Tracking model

```text
Driver
Delivery
TrackingSession
CurrentLocation
LocationPoint
```

`CurrentLocation` is optimized for latest position. `LocationPoint` is historical and should have retention rules.

## Prisma rule

Each service owns its Prisma schema and migration history. Shared TypeScript types should be generated from contracts or events, not by importing another service's Prisma client.
