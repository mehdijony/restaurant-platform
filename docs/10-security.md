# Security

## Identity

Keycloak is the identity provider.

Use OpenID Connect / OAuth 2.0 for client authentication. Services validate access tokens and enforce authorization based on restaurant/branch membership and role.

## Roles

Initial roles:

```text
SUPER_ADMIN
OWNER
RESTAURANT_MANAGER
BRANCH_MANAGER
CASHIER
KITCHEN_STAFF
WAITER
INVENTORY_MANAGER
ACCOUNTANT
DRIVER
CUSTOMER
```

Roles are not enough for multi-branch access. Authorization must also consider organization and branch scope.

## Tenant boundary

Every business request should resolve:

```text
user -> organization -> restaurant -> branch -> resource
```

Never trust `organizationId` supplied only by the client.

## API security

- short-lived access tokens
- refresh token rotation where applicable
- rate limiting at the edge
- input validation
- request size limits
- secure headers
- CORS policy
- CSRF protection where browser cookie authentication is used
- webhook signature verification
- idempotency keys for retryable commands

## Audit

Audit sensitive actions:

```text
who
what
when
where
resource
before
after
requestId
```

Examples:

- price change
- stock adjustment
- order cancellation
- delivery reassignment
- user role change
- branch configuration change
