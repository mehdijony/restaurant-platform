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
- npm >= 10
- Docker

### Install dependencies

npm install

### Start infrastructure

docker compose up -d

### Start a service

npm --filter @restaurant/api-gateway dev

## Tab progress

- [x] TAB 01 — Repository + monorepo + tooling
- [x] TAB 02 — Docker infrastructure
- [x] TAB 03 — Keycloak + authentication
- [x] TAB 04 — Restaurant Service + Prisma
- [x] TAB 05 — Catalog Service
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
