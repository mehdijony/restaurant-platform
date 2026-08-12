# Local Development

## Philosophy

Run business services directly on the host for fast iteration. Run infrastructure dependencies through Docker Compose.

## Infrastructure compose

```text
infra/local/
├── postgres
├── rabbitmq
├── valkey
├── keycloak
├── traefik
├── prometheus
├── grafana
├── loki
└── otel-collector
```

## Start infrastructure

```bash
docker compose -f compose.local.yml up -d
```

## Start one service

```bash
pnpm --filter order-service dev
```

## Start all services

```bash
pnpm dev:services
```

Use independent processes during development. This makes debugging, hot reload, logs, and profiling much simpler.

## Environment files

```text
.env.example
.env.local
.env.test
.env.production.example
```

Never commit real credentials.

## Local service ports

Keep a documented range, for example:

```text
3000 gateway
3001 auth
3002 restaurant
3003 catalog
3004 inventory
3005 order
3006 kitchen
3007 delivery
3008 tracking
3009 notification
3010 integration
3011 reporting
```

Infrastructure:

```text
5432 PostgreSQL
5672 RabbitMQ
15672 RabbitMQ Management
6379 Valkey
8080 Keycloak
80/443 Traefik
9090 Prometheus
3000 Grafana
```

Adjust actual ports if a client already occupies them.

## Local quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm prisma:validate
```

No PR should merge with a broken migration, failing contract test, or missing event schema.
