# Open-Source Cloud Alternatives

This document defines the default self-hosted direction. It is a reference architecture, not a requirement to adopt every component immediately.

| Cloud-managed capability | Self-hosted baseline | Reason |
|---|---|---|
| IAM / Cognito / Entra-style identity | Keycloak | OIDC/OAuth2, users, SSO, roles |
| Managed PostgreSQL | PostgreSQL | Primary transactional database |
| Geospatial DB | PostGIS | Delivery/tracking geospatial operations |
| ElastiCache / managed Redis | Valkey | Cache, ephemeral state, streams |
| SQS / Service Bus | RabbitMQ | Commands/events, retries, DLQ-style workflows |
| Cloud load balancer / ingress | Traefik | Edge routing and Docker discovery |
| Cloud metrics | Prometheus | Metrics and alert rules |
| APM instrumentation | OpenTelemetry | Vendor-neutral telemetry |
| Dashboards | Grafana | Metrics/log/traces visualization |
| Central logs/search | Loki / OpenSearch | Logs or searchable analytics depending on scale |
| Object storage | S3-compatible storage | Files, receipts, proof-of-delivery media |

## Object storage

Keep an `ObjectStorage` interface in the application. The initial implementation can be any S3-compatible self-hosted object store. This prevents the domain from depending on a particular cloud API.

## Event bus choice

RabbitMQ is the initial broker because the platform primarily needs reliable application messaging, routing, retries, and consumer workflows. Kafka can be evaluated later for high-volume durable event streams and analytical/event-platform requirements.

## Observability choice

Instrument services with OpenTelemetry, then export to the observability stack. This makes the application less coupled to any particular telemetry backend.
