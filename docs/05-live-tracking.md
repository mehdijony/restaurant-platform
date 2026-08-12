# Live Food Parcel Tracking

## First-party courier flow

```text
Driver Mobile App
      |
      | GPS updates
      v
Tracking Service
      |
      +--> Current location store
      |
      +--> Historical location store
      |
      +--> RabbitMQ: tracking.location.updated
      |
      +--> WebSocket broadcast
              |
       +------+------+
       |             |
Customer app     Admin/manager
```

## Location update payload

```json
{
  "deliveryId": "del_123",
  "driverId": "drv_123",
  "latitude": 1.3001,
  "longitude": 103.8001,
  "accuracyMeters": 8,
  "speedMps": 5.2,
  "heading": 120,
  "capturedAt": "2026-08-12T07:00:00.000Z"
}
```

## Frequency

Do not blindly stream GPS every second. Start with an adaptive policy, for example:

- moving: roughly every 3-10 seconds
- stationary: roughly every 30-60 seconds
- background/no active delivery: no continuous tracking

The actual interval should be controlled by driver-app battery behavior, delivery SLA requirements, and network conditions.

## Location security

A driver can publish only for the delivery assigned to that driver.

A customer can read only the delivery assigned to their order.

A branch manager can read only deliveries belonging to authorized restaurants/branches.

## External courier future

Create an internal interface:

```ts
export interface CourierProvider {
  createDelivery(input: CreateCourierDelivery): Promise<CourierDelivery>;
  cancelDelivery(externalId: string): Promise<void>;
  getTracking(externalId: string): Promise<CourierTracking>;
  parseWebhook(input: unknown): CourierWebhookEvent;
}
```

Adapters:

```text
integration-service
├── internal-courier.provider.ts
├── provider-a/
├── provider-b/
└── provider-c/
```

The Delivery domain sees only the internal interface and normalized status model.

## Recommended normalized statuses

```text
CREATED
ASSIGNED
ACCEPTED
PICKED_UP
OUT_FOR_DELIVERY
ARRIVED
DELIVERED
FAILED
CANCELLED
```
