# Implementation Roadmap

The project is deliberately broken into vertical slices. Each stage produces an executable system.

## Phase 0 — Foundation

Deliver:

- monorepo
- pnpm workspace
- NestJS service template
- Next.js web template
- React Native template
- shared TypeScript config
- ESLint/Prettier
- commit hooks
- Docker Compose infrastructure
- PostgreSQL/PostGIS
- Keycloak
- RabbitMQ
- Valkey
- Traefik
- basic OpenTelemetry
- Prometheus/Grafana

Exit criteria:

- a new service can be created from the template
- local infrastructure starts with one command
- one service is visible in Grafana
- Keycloak can issue a token

## Phase 1 — Identity and organization

Implement:

- organization
- restaurant
- branch
- user membership
- role mapping
- login
- logout
- token validation
- authorization guards

Vertical slice:

```text
Login -> select restaurant -> select branch -> dashboard
```

## Phase 2 — Catalog

Implement:

- categories
- ingredients/products
- menu items
- modifiers
- recipes
- price list
- availability

Vertical slice:

```text
Manager creates menu item -> POS reads menu -> order can reference item
```

## Phase 3 — Inventory

Implement:

- warehouse
- stock item
- units
- supplier
- purchase receipt
- stock movement
- adjustment
- transfer
- low-stock rule

Important:

Inventory should be a ledger, not merely CRUD quantity updates.

## Phase 4 — Orders and POS

Implement:

- dine-in
- takeaway
- parcel/delivery order
- order items
- discounts/tax
- payment references
- order state machine
- receipt generation

Vertical slice:

```text
POS -> create order -> reserve/consume inventory -> kitchen -> complete
```

## Phase 5 — Kitchen

Implement:

- KOT creation
- kitchen stations
- queue ordering
- preparing
- ready
- overdue state
- kitchen tablet interface

## Phase 6 — Internal delivery

Implement:

- driver
- driver availability
- delivery job
- assignment
- pickup
- out-for-delivery
- delivered
- failed delivery
- proof of delivery

## Phase 7 — Live tracking

Implement:

- driver mobile location permission
- location ingestion API
- current location
- location history
- WebSocket subscription
- customer tracking screen
- manager map
- tracking privacy rules

Vertical slice:

```text
Driver accepts job -> starts delivery -> GPS updates -> customer sees movement -> delivery completed
```

## Phase 8 — Notifications

Implement:

- in-app notifications
- push notifications
- email adapter
- notification preferences
- event-driven delivery

## Phase 9 — External courier adapters

Implement:

- provider interface
- provider credentials/configuration
- create delivery
- cancel delivery
- tracking polling/webhook
- normalized statuses
- retry/dead-letter

Do not begin by implementing five courier providers. Implement one fake provider and one real provider adapter.

## Phase 10 — Reporting

Implement read models for:

- sales
- inventory usage
- waste
- delivery performance
- kitchen performance
- branch comparison

## Phase 11 — Hardening

Implement:

- load tests
- failure tests
- backup/restore drill
- event replay strategy
- security testing
- dependency scanning
- observability alerts
- rate limits
- migration rollback procedures
- production incident runbooks

## Phase 12 — Scale decision

Only after realistic load tests decide whether to move from:

```text
Docker Compose
```

to:

```text
Kubernetes / another orchestrator
```

The decision should be based on deployment frequency, availability requirements, service scaling, host failure recovery, and operational workload.
