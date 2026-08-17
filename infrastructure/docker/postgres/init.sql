-- Create separate databases for each service
-- All on one PostgreSQL instance, logically separated

CREATE DATABASE keycloak;
CREATE DATABASE restaurant_service;
CREATE DATABASE catalog_service;
CREATE DATABASE inventory_service;
CREATE DATABASE order_service;
CREATE DATABASE kitchen_service;
CREATE DATABASE delivery_service;
CREATE DATABASE notification_service;
CREATE DATABASE tracking_service;

-- Grant all privileges to the restaurant user
GRANT ALL PRIVILEGES ON DATABASE keycloak TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE restaurant_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE catalog_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE inventory_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE order_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE kitchen_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE delivery_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE notification_service TO restaurant;
GRANT ALL PRIVILEGES ON DATABASE tracking_service TO restaurant;