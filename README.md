# mongo-mysql benchmark using koa
koa react serverside rendering with redis and mongo, dockerized with compose.yaml

# dependencies
install docker, docker-compose

# usage :

docker build -t bench .

change docker-compose.yml volumes to match your local dir

docker-compose up

create table in mysql :

CREATE TABLE benchmark (
username VARCHAR(100) NOT NULL PRIMARY KEY UNIQUE,
email VARCHAR(100) NOT NULL UNIQUE,
PASSWORD VARCHAR(100),
address VARCHAR(100) NOT NULL,
postcode VARCHAR(100) NOT NULL UNIQUE
);