# API Strategy

## REST

Use REST for state-changing operations, uploads, integrations, and webhooks.

Examples:

```http
POST /v1/orders
PATCH /v1/orders/{id}/status
POST /v1/inventory/receipts
POST /v1/inventory/adjustments
POST /v1/deliveries/{id}/assign
POST /v1/deliveries/{id}/status
POST /v1/tracking/location
POST /v1/integrations/couriers/{provider}/webhook
```

## GraphQL

Use GraphQL for UI-centric reads.

Example:

```graphql
query BranchDashboard($branchId: ID!) {
  branch(id: $branchId) {
    name
    activeOrders {
      id
      status
      total
      items {
        name
        quantity
      }
    }
    kitchen {
      pendingTickets
      overdueTickets
    }
    inventory {
      lowStockCount
    }
  }
}
```

## WebSocket

Use authenticated WebSocket channels such as:

```text
tracking:delivery:{deliveryId}
kitchen:branch:{branchId}
orders:branch:{branchId}
notifications:user:{userId}
```

Do not expose arbitrary subscription topics directly to clients. Authorize membership before joining a channel.

## API versioning

REST: `/v1/...`

GraphQL: evolve the schema using additive changes and deprecations. Avoid breaking fields unless a coordinated major client change is planned.

## Idempotency

For commands that can be retried, support an idempotency key:

```http
Idempotency-Key: 1a4b4d2b-...
```

Store the result for a bounded period in the service that owns the command.
