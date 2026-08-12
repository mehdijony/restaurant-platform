# Infrastructure

The infrastructure directory contains repeatable local and production support configuration.

Recommended open-source baseline:

| Need | Tool |
|---|---|
| Identity | Keycloak |
| Database | PostgreSQL + PostGIS |
| Message broker | RabbitMQ |
| Cache/ephemeral state | Valkey |
| Edge proxy | Traefik |
| Metrics | Prometheus |
| Visualization | Grafana |
| Instrumentation | OpenTelemetry |
| Logs | Loki |
| Search/analytics | OpenSearch |

Do not add every tool on day one. Start with the minimum infrastructure required by the current vertical slice.
