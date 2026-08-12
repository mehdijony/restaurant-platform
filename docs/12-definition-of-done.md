# Definition of Done

A feature is not done when a controller returns data.

## Backend

- domain rules implemented
- REST/GraphQL boundary defined
- Prisma migration created
- repository tests
- service tests
- integration tests
- authorization checks
- input validation
- transaction handling
- idempotency where needed
- event emitted if required
- event consumer implemented if required
- health check
- metrics
- structured logging
- tracing
- API documentation

## Frontend

- loading state
- empty state
- error state
- optimistic UI only where safe
- authorization-aware navigation
- offline/error recovery where relevant
- responsive layout for target form factor

## Delivery/tracking

- location permission handling
- battery-conscious updates
- reconnect behavior
- last-known-location behavior
- authorization of subscriptions
- stale location indication

## Production

- Docker image
- resource limits
- health check
- persistent data requirements documented
- environment variables documented
- backup implications documented
- rollback path documented
