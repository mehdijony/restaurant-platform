# Service Boundaries

| Service | Owns | Main clients |
|---|---|---|
| api-gateway | Edge routing, rate limiting, API composition policy | All clients |
| auth-service | User profile, membership, app authorization mapping | Admin, web, mobile |
| restaurant-service | Company, branches, tables, settings | Admin, POS |
| catalog-service | Menu, products, categories, recipes, modifiers | Admin, POS, mobile |
| inventory-service | Stock ledger, warehouses, lots, suppliers, purchasing | Admin, POS |
| order-service | Orders, order state, totals | POS, admin, customer |
| kitchen-service | KOT and kitchen workflow | Kitchen tablet |
| delivery-service | Deliveries, drivers, assignments, delivery state | Admin, driver |
| tracking-service | Location ingestion, current locations, subscriptions | Driver, admin, customer |
| notification-service | Push/email/SMS/in-app notifications | All |
| integration-service | Courier/payment/maps provider adapters | Delivery, payment |
| reporting-service | Read models and analytics queries | Admin |

## Optional later services

Do not create these until the domain requires them:

- payment-service
- loyalty-service
- accounting-service
- customer-service as a separate bounded context
- search-service
- promotion-service
- scheduling-service

## Rule

A service should be split because ownership, scaling, deployment, failure isolation, or team boundaries justify it. Do not split because a folder has become large.
