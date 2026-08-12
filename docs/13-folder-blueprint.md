# Folder Blueprint

```text
restaurant-platform/
│
├── apps/
│   ├── admin-web/                 # Next.js administration
│   ├── pos-web/                   # Counter/POS web application
│   ├── mobile/                    # React Native manager/waiter/kitchen app
│   └── driver-mobile/             # React Native driver app
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
│   ├── contracts/                # event/API contracts only
│   ├── config/                   # typed configuration helpers
│   ├── logging/                  # structured logger adapter
│   ├── observability/            # OpenTelemetry setup
│   ├── auth-client/              # Keycloak/OIDC helpers
│   ├── event-bus/                # RabbitMQ abstraction
│   └── testing/                  # test utilities
│
├── infra/
│   ├── docker/
│   │   ├── postgres/
│   │   ├── rabbitmq/
│   │   ├── valkey/
│   │   └── ...
│   ├── keycloak/
│   ├── observability/
│   └── traefik/
│
├── docs/
├── tests/
│   ├── contract/
│   ├── integration/
│   └── e2e/
│
├── compose.local.yml
├── compose.prod.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Service example

```text
services/inventory-service/
├── src/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   │   └── prisma/
│   ├── interfaces/
│   │   ├── rest/
│   │   └── graphql/
│   └── main.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── test/
├── Dockerfile
├── package.json
└── README.md
```
