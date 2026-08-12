# Event Contracts

## Event envelope

Every event should carry a stable envelope.

```json
{
  "eventId": "evt_uuid",
  "eventType": "order.created",
  "eventVersion": 1,
  "occurredAt": "2026-08-12T07:00:00.000Z",
  "producer": "order-service",
  "correlationId": "req_uuid",
  "causationId": "evt_uuid_or_null",
  "tenantId": "restaurant_uuid",
  "payload": {}
}
```

## Important design rules

- Event names use past tense for facts.
- Commands and events are different concepts.
- Consumers must be idempotent.
- Event payloads should contain the minimum stable data needed by consumers.
- Schema changes must be backward compatible or versioned.
- Do not expose internal database row shapes as event contracts.

## Outbox pattern

Inside the same local database transaction:

```text
BEGIN
  update order
  insert outbox_event
COMMIT

publisher reads outbox_event
      -> RabbitMQ
      -> mark published
```

Use retry and dead-letter handling for failed publishing/consumption.
