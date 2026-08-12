# Services

Each directory under `services/` is a deployable NestJS application.

A service must own:

- its Prisma schema
- its migrations
- its domain rules
- its public API
- its event consumers/producers
- its health checks
- its telemetry
- its tests
- its Dockerfile

Avoid a shared "global database service" or shared Prisma client across domain services.
