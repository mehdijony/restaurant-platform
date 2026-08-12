# Restaurant Platform

A multi-tenant restaurant management platform.

## Architecture

| Layer          | Technology           |
| -------------- | -------------------- |
| Mobile         | React Native + Expo  |
| Backend        | NestJS               |
| Database       | PostgreSQL + PostGIS |
| Authentication | Keycloak             |
| Messaging      | RabbitMQ             |
| Cache          | Valkey               |
| API Gateway    | Traefik              |
| Metrics        | Prometheus + Grafana |
| Tracing        | OpenTelemetry        |

## Local development

### Prerequisites

- Node.js >= 20
- pnpm >= 10
- Docker

### Install dependencies

pnpm install

### Start infrastructure

docker compose up -d

### Start a service

pnpm --filter @restaurant/api-gateway dev

## Tab progress

- [x] TAB 01 — Repository + monorepo + tooling
- [ ] TAB 02 — Docker infrastructure
- [ ] TAB 03 — Keycloak + authentication
- [ ] TAB 04 — Restaurant Service + Prisma
- [ ] TAB 05 — Catalog Service
- [ ] TAB 06 — Inventory Service
- [ ] TAB 07 — Order Service
- [ ] TAB 08 — Kitchen Service
- [ ] TAB 09 — Delivery Service
- [ ] TAB 10 — Driver mobile + GPS tracking
- [ ] TAB 11 — Customer application
- [ ] TAB 12 — Notifications
- [ ] TAB 13 — External courier adapters
- [ ] TAB 14 — Observability
- [ ] TAB 15 — Production deployment
