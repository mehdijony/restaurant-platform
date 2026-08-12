# Next Build Tasks

The first coding milestone should be intentionally small.

## Milestone A

Create:

```text
pnpm workspace
NestJS service template
Next.js admin template
React Native mobile template
Docker local infrastructure
PostgreSQL/PostGIS
RabbitMQ
Valkey
Keycloak
Traefik
Prometheus
Grafana
OpenTelemetry Collector
```

## Milestone B

Create these two services only:

```text
auth-service
restaurant-service
```

Deliver:

```text
Keycloak login
    -> access token
    -> auth-service
    -> restaurant membership
    -> branch selection
    -> admin dashboard
```

## Milestone C

Add:

```text
catalog-service
inventory-service
```

Deliver:

```text
Create ingredient/product
    -> receive stock
    -> view stock
    -> create menu item
    -> publish menu
```

## Milestone D

Add:

```text
order-service
kitchen-service
```

Deliver:

```text
POS
 -> create order
 -> kitchen ticket
 -> preparing
 -> ready
 -> completed
```

## Milestone E

Add:

```text
delivery-service
tracking-service
driver-mobile
```

Deliver:

```text
Order ready
 -> create delivery
 -> assign driver
 -> driver accepts
 -> driver sends GPS
 -> customer watches live location
 -> driver completes delivery
```

## Milestone F

Add:

```text
notification-service
integration-service
reporting-service
```

Then build the external courier adapter layer.
