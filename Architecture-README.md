# Restaurant Operations Platform

A multi-device restaurant management platform built as a modular microservice system.

## Product scope

The platform supports:

- Restaurant/company management
- Branch management
- Menu and product management
- Inventory and stock movement management
- Purchasing and supplier management
- Customer and order management
- Kitchen Order Ticket (KOT) / kitchen workflow
- Delivery and food-parcel management
- Internal courier/driver mobile application
- Live parcel location tracking
- Customer-facing delivery tracking
- Future external courier integrations through provider adapters
- Role-based access control
- Notifications
- Audit logs
- Reporting and operational dashboards

## Client applications

| Client | Technology | Primary users |
|---|---|---|
| Web Admin | Next.js / React | Owner, manager, accountant, administrator |
| POS/Web Terminal | Next.js / React | Cashier, counter staff |
| Mobile/Tablet | React Native | Manager, kitchen, waiter, driver |
| Driver App | React Native | Internal delivery staff |
| Customer Tracking | React Native / Web | Customer |

React Native should be treated as the mobile/tablet client. The computer-facing administration and POS surfaces should be web applications rather than forcing desktop behavior into React Native.

## Backend

- NestJS + TypeScript
- REST + GraphQL hybrid API
- Prisma ORM
- PostgreSQL
- PostGIS
- RabbitMQ
- Valkey
- WebSocket / Socket.IO for live tracking
- Keycloak
- OpenTelemetry
- Prometheus
- Grafana
- Loki
- OpenSearch when full-text search/log analytics becomes necessary
- Traefik
- Docker Compose for local development and the initial production deployment

## Architectural principle

Use synchronous APIs for user-facing reads and commands where immediate feedback is required. Use asynchronous domain events for cross-service side effects.

```text
                         +----------------------+
                         |    Client Apps       |
                         | Web / POS / RN       |
                         +----------+-----------+
                                    |
                            HTTPS / WebSocket
                                    |
                              +-----v-----+
                              |  Traefik  |
                              +-----+-----+
                                    |
                 +------------------+------------------+
                 |                                     |
              REST/GraphQL                         WebSocket
                 |                                     |
       +---------v----------+                 +--------v---------+
       | API / BFF services |                 | Tracking Service |
       +---------+----------+                 +--------+---------+
                 |                                     |
       +---------v----------+                   +------v------+
       | Domain services    |                   | Event Bus   |
       | Auth                |                   | RabbitMQ    |
       | Restaurant          |                   +------+------+
       | Catalog             |                          |
       | Inventory           |             +------------+------------+
       | Orders              |             |                         |
       | Delivery            |          Tracking                Notifications
       | Payments            |             |                         |
       | Reporting           |          PostGIS                   Email/SMS/etc
       +---------+----------+
                 |
          +------v-------+
          | PostgreSQL   |
          | per service* |
          +--------------+

* Start with logical database/schema isolation where operational simplicity matters; move to separate database instances only when required.
```

## API boundary

### REST

Prefer REST for commands, lifecycle transitions, uploads, webhooks, and operational endpoints.

Examples:

```text
POST   /auth/*
POST   /orders
PATCH  /orders/:id/status
POST   /inventory/receipts
POST   /inventory/adjustments
POST   /inventory/transfers
POST   /deliveries/:id/assign
POST   /deliveries/:id/status
POST   /tracking/location
POST   /integrations/couriers/:provider/webhook
POST   /files/presign
```

### GraphQL

Prefer GraphQL for complex UI-driven reads and aggregates where the client needs nested data.

Examples:

```text
query dashboard
query order(id)
query kitchenBoard(branchId)
query inventoryDashboard(branchId)
query delivery(id)
query customerOrderHistory(customerId)
query stockMovementSummary(filters)
```

### WebSocket

Use WebSocket only for state that must arrive in real time:

- Driver location updates
- Delivery status updates
- New KOT notifications
- Order status changes
- Operational alerts

Do not use WebSocket as the primary persistence protocol.

## Repository layout

```text
restaurant-platform/
├── apps/
│   ├── admin-web/
│   ├── pos-web/
│   ├── mobile/
│   └── driver-mobile/
│
├── services/
│   ├── api-gateway/
│   ├── auth-service/
│   ├── restaurant-service/
│   ├── catalog-service/
│   ├── inventory-service/
│   ├── order-service/
│   ├── kitchen-service/
│   ├── delivery-service/
│   ├── tracking-service/
│   ├── notification-service/
│   ├── integration-service/
│   └── reporting-service/
│
├── packages/
│   ├── contracts/
│   ├── config/
│   ├── logging/
│   ├── observability/
│   ├── auth-client/
│   ├── event-bus/
│   └── testing/
│
├── infra/
│   ├── docker/
│   ├── keycloak/
│   ├── observability/
│   └── traefik/
│
├── docs/
├── tests/
├── compose.local.yml
├── compose.prod.yml
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Service boundaries

### Auth Service

Owns application-level identity mapping, sessions/authorization integration, user profile, restaurant memberships, and permissions. Keycloak remains the identity provider.

### Restaurant Service

Owns organizations, restaurants, branches, tables, operating hours, tax settings, and configuration.

### Catalog Service

Owns categories, menu items, recipes, modifiers, pricing, availability, and menu publication.

### Inventory Service

Owns ingredients, units, warehouses, stock, lots, recipes/material consumption, stock movements, purchase receipts, transfers, waste, and adjustments.

### Order Service

Owns customer orders, order items, order totals, order status, payments references, order channels, and order history.

### Kitchen Service

Owns KOT tickets, kitchen stations, preparation states, SLA timestamps, and kitchen display views.

### Delivery Service

Owns delivery jobs, internal drivers, assignments, delivery state machine, addresses, delivery attempts, proof of delivery, and external courier references.

### Tracking Service

Owns location ingestion, current driver location, delivery location streams, location history retention policy, geospatial queries, and live subscriptions.

### Notification Service

Consumes events and delivers push notifications, email, SMS, and in-app notifications.

### Integration Service

Provides adapters for third-party courier services, payment providers, maps/geocoding, and future external systems. External provider-specific code must not leak into Order or Delivery domain models.

### Reporting Service

Builds read models / aggregates for business reports. It should not become the source of truth for transactional state.

## Domain event examples

```text
order.created
order.confirmed
order.cancelled
order.ready_for_delivery
kitchen.ticket.created
kitchen.ticket.ready
inventory.stock.reserved
inventory.stock.consumed
inventory.stock.low
inventory.stock.adjusted
delivery.created
delivery.assigned
delivery.picked_up
delivery.out_for_delivery
delivery.delivered
delivery.failed
tracking.location.updated
notification.requested
courier.webhook.received
```

## Development strategy

Do not start by implementing every microservice.

Build the platform in vertical slices:

```text
Slice 1: Identity + Restaurant + one database + one working client
Slice 2: Catalog + Inventory
Slice 3: Order + Kitchen
Slice 4: Delivery + Driver App
Slice 5: Live Tracking
Slice 6: Notifications
Slice 7: External Courier Adapter
Slice 8: Reporting + Observability hardening
Slice 9: Production deployment hardening
```

A service is considered complete only when the API, database, tests, event contracts, logging, health checks, metrics, and deployment configuration exist.

## Local development

Local development runs services individually while shared infrastructure runs in Docker.

```text
Developer machine
├── auth-service       localhost:xxxx
├── restaurant-service localhost:xxxx
├── catalog-service    localhost:xxxx
├── inventory-service  localhost:xxxx
├── order-service      localhost:xxxx
├── delivery-service   localhost:xxxx
├── tracking-service   localhost:xxxx
│
└── Docker Compose
    ├── PostgreSQL/PostGIS
    ├── RabbitMQ
    ├── Valkey
    ├── Keycloak
    ├── Traefik
    ├── Prometheus
    ├── Grafana
    ├── Loki
    └── OpenTelemetry Collector
```

## Production deployment

The first production target is Docker Compose on a dedicated Linux host or small cluster. The repository should contain one production composition that starts the platform as a repeatable stack.

Kubernetes should be a later deployment target, not an early development dependency.

## Important constraints

1. No service directly writes another service's tables.
2. Prisma schema ownership is per service/domain.
3. Cross-service communication uses APIs or events.
4. Events are versioned.
5. Every command is idempotent where retries are possible.
6. External courier providers are adapters behind a stable internal interface.
7. GPS data has explicit retention and privacy rules.
8. Money is stored using decimal-safe database types, never floating-point arithmetic.
9. Inventory movements are immutable ledger records; corrections create compensating movements.
10. Audit logs are append-only.
11. Secrets never live in Git.
12. Every service exposes health and metrics endpoints.

## Documentation map

- [Architecture](docs/01-architecture.md)
- [Service boundaries](docs/02-services.md)
- [Database strategy](docs/03-database.md)
- [API strategy](docs/04-api.md)
- [Live tracking](docs/05-live-tracking.md)
- [Event contracts](docs/06-events.md)
- [Local development](docs/07-local-development.md)
- [Production](docs/08-production.md)
- [Observability](docs/09-observability.md)
- [Security](docs/10-security.md)
- [Implementation roadmap](docs/11-roadmap.md)
- [Definition of done](docs/12-definition-of-done.md)

## Technology references

- Keycloak: https://www.keycloak.org/
- PostgreSQL: https://www.postgresql.org/
- PostGIS: https://postgis.net/docs/
- Prisma: https://www.prisma.io/docs/
- RabbitMQ: https://www.rabbitmq.com/docs
- Valkey: https://valkey.io/docs/
- Traefik: https://doc.traefik.io/traefik/
- OpenTelemetry: https://opentelemetry.io/docs/
- Prometheus: https://prometheus.io/docs/
- Grafana: https://grafana.com/docs/grafana/latest/
- OpenSearch: https://docs.opensearch.org/latest/
