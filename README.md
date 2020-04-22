# Curriki React

## Installation

- Clone the repository

> git clone --recursive https://github.com/ActiveLearningStudio/ActiveLearningStudio-docker-containers.git

- cd /path/to/root

> cd ActiveLearningStudio-docker-containers


## Env file sample

- Create .env file in the root of project
- Add following content. Change variables according to your environement

```
MYSQL_DATABASE=currikiserver
MYSQL_USER=currikireact
MYSQL_PASSWORD=secret123
MYSQL_ROOT_PASSWORD=secret
MYSQL_LOCAL_PORT=3307
PHP_LOCAL_PORT=9001
CLIENT_LOCAL_PORT=3001
```

## Create volumes
For persistent databases 

> docker volume create mongodbdata

> docker volume create mysqldata

## SQL setup

- Create file ActiveLearningStudio-docker-containers/tmp/database/setup.sql with the following content. (Change database name according to your /.env file)

```
CREATE DATABASE IF NOT EXISTS currikiserver;

USE currikiserver;
```

## Server Configurations
- create .env file inside /ActiveLearningStudio-laravel-api. Sample is given here. Change variables accroding to the .env of root directorys

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8082/api

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=currikiserver
DB_USERNAME=currikireact
DB_PASSWORD=secret123

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

```
- Run command `docker-compose run --rm composer install --ignore-platform-reqs` to install server dependencies
- Run command `docker-compose run --rm artisan key:generate` to install server dependencies
- Run command `docker-compose run --rm artisan storage:link` to create storage link
- Run command `docker-compose run --rm artisan config:cache` to install server dependencies
- Give read/write permission to server storage directory: chmod 777 -R ActiveLearningStudio-laravel-api/storage


## Running and building application

> docker-compose up --build

## URLS

- http://localhost:8082 - React
- http://localhost:8082/api - Server
- http://localhost:8082/phpmyadmin/ - PhpMyAdmin
