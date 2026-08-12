# Production Deployment

## First production target

Use Docker Compose as the initial deployment orchestrator.

```text
Linux host
└── Docker Compose
    ├── Traefik
    ├── Web apps
    ├── API gateway
    ├── Domain services
    ├── Workers
    ├── PostgreSQL
    ├── RabbitMQ
    ├── Valkey
    ├── Keycloak
    └── Observability
```

The objective is not to pretend Docker Compose is a full cluster orchestrator. The objective is to make the first production environment reproducible and understandable.

## Production requirements

- TLS termination
- encrypted backups
- persistent volumes
- database backup verification
- secret management
- resource limits
- health checks
- restart policies
- log rotation
- monitoring and alerts
- disaster recovery procedure
- migration rollback plan

## Reverse proxy

Traefik should expose the public services and discover Docker services using labels.

Public routes should look like:

```text
app.example.com
api.example.com
tracking.example.com
auth.example.com
```

Never expose PostgreSQL, RabbitMQ, Valkey, Prometheus, or internal administration ports directly to the public internet.

## Scaling path

Stage 1:

```text
One host + Docker Compose
```

Stage 2:

```text
Multiple hosts / managed database / external object storage
```

Stage 3:

```text
Kubernetes or another orchestrator
```

The application should not require Kubernetes-specific code.
