export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

export const databaseConfig = {
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
  user: process.env.POSTGRES_USER ?? 'restaurant',
  password: process.env.POSTGRES_PASSWORD ?? 'restaurant',
  database: process.env.POSTGRES_DB ?? 'restaurant_platform',
};

export const rabbitmqConfig = {
  url:
    process.env.RABBITMQ_URL ??
    `amqp://${process.env.RABBITMQ_USER ?? 'restaurant'}:${process.env.RABBITMQ_PASSWORD ?? 'restaurant'}@localhost:${process.env.RABBITMQ_PORT ?? '5672'}`,
};

export const valkeyConfig = {
  url: `redis://localhost:${process.env.VALKEY_PORT ?? '6379'}`,
};

export const keycloakConfig = {
  url: process.env.KEYCLOAK_URL ?? 'http://localhost:8080',
  realm: process.env.KEYCLOAK_REALM ?? 'restaurant',
  clientId: process.env.KEYCLOAK_CLIENT_ID ?? 'api',
};
