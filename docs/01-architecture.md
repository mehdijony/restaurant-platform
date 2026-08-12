# Architecture

## Goal

Create a restaurant operations platform that can start as a single Docker-hosted production stack but has clear service boundaries for later independent scaling.

## Architectural layers

```text
Client
  -> Edge / API Gateway
    -> Transport layer (REST / GraphQL / WebSocket)
      -> Application layer
        -> Domain layer
          -> Repository / integration ports
            -> Database / event broker / external providers
```

Keep the business domain independent from NestJS transport details.

## Recommended NestJS service shape

```text
src/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── events/
│   └── policies/
├── application/
│   ├── commands/
│   ├── queries/
│   ├── handlers/
│   └── services/
├── infrastructure/
│   ├── prisma/
│   ├── messaging/
│   ├── cache/
│   └── integrations/
├── interfaces/
│   ├── rest/
│   ├── graphql/
│   └── websocket/
└── main.ts
```

Use a simplified clean/hexagonal structure rather than forcing textbook DDD into every class.

## Data ownership

Each service owns its write model. Other services receive information through events and public APIs.

For the first production version, it is acceptable to run multiple PostgreSQL databases in the same PostgreSQL server, with each service using a distinct database/schema. This preserves ownership while keeping infrastructure manageable.

## Sync vs async

Use synchronous REST/GraphQL when:

- the caller needs an immediate result
- validation must happen before continuing
- the request is inherently query/command oriented

Use RabbitMQ events when:

- multiple services react to one business event
- processing can happen after the user request
- retries are required
- an external integration should not block the main transaction

Use WebSocket when:

- the UI needs a real-time state change
- a driver location is changing
- a kitchen screen should update without polling

## Avoid distributed transaction coupling

Do not attempt a cross-service SQL transaction.

Use:

- local database transaction
- outbox record
- message publisher
- consumer idempotency
- compensating action when necessary

## Initial deployment topology

```text
                        Internet / LAN
                              |
                           Traefik
                              |
                 +------------+-------------+
                 |                          |
              Web apps                  API layer
                 |                          |
                 +------------+-------------+
                              |
              +---------------+---------------+
              |               |               |
          Domain services   Workers       Tracking
              |               |               |
              +---------------+---------------+
                              |
                +-------------+-------------+
                |             |             |
             Postgres      RabbitMQ       Valkey
                |             |             |
                +-------------+-------------+
                              |
                    Observability stack
```
