# Observability

## Stack

```text
Application
   |
OpenTelemetry SDK
   |
OpenTelemetry Collector
   +--> Prometheus-compatible metrics
   +--> Loki logs
   +--> tracing backend
   |
Grafana
```

OpenTelemetry is the instrumentation layer. It should not be treated as the storage backend.

## Metrics

Every service should expose:

- HTTP request count
- HTTP latency
- HTTP error count
- GraphQL operation count/latency
- message publish count
- message consume count
- message failure count
- database query latency
- database connection pool state
- cache hit/miss
- active WebSocket connections
- tracking update rate

Business metrics:

- orders per minute
- order preparation time
- delivery assignment time
- delivery duration
- failed deliveries
- stock adjustment count
- low-stock items
- KOT overdue count

## Logging

Use structured JSON logs.

Every log should carry:

```text
timestamp
level
service
environment
requestId
correlationId
userId (when appropriate)
tenantId
message
error
```

Never log passwords, tokens, payment secrets, or raw sensitive location history unnecessarily.

## Tracing

Trace a complete order path:

```text
Client
 -> gateway
 -> order-service
 -> inventory-service
 -> RabbitMQ
 -> kitchen-service
 -> delivery-service
 -> tracking-service
 -> notification-service
```

This is one of the main reasons to introduce OpenTelemetry early rather than after the system becomes large.
