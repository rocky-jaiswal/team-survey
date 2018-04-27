CREATE ROLE postgresdev WITH LOGIN PASSWORD 'postgresdev';

CREATE DATABASE heartbeat_dev;
CREATE DATABASE heartbeat_test;

GRANT ALL PRIVILEGES ON DATABASE heartbeat_dev TO postgresdev;
GRANT ALL PRIVILEGES ON DATABASE heartbeat_test TO postgresdev;
