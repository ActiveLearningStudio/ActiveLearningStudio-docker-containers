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
FRONT_MAIN_PORT=8082
```

## Create volumes
For persistent databases 

> docker volume create mongodbdata

> docker volume create mysqldata

## Create network

> docker network create internet

## Run composer install inside Laravel containers
> docker-compose run --rm currikidev-laravel-api composer install && docker-compose run --rm currikidev-lti-provider composer install && docker-compose run --rm currikidev-h5p-api composer install

## Cached Configs inside laravel

> docker-compose run --rm currikidev-laravel-api php artisan config:cache && docker-compose run --rm currikidev-lti-provider php artisan config:cache && docker-compose run --rm currikidev-h5p-api php artisan config:cache

## SQL setup

- Create file ActiveLearningStudio-docker-containers/tmp/database/setup.sql with the following content. (Change database name according to your /.env file)

```
CREATE DATABASE IF NOT EXISTS currikiserver;

USE currikiserver;
```

## Server Configurations
- create .env file inside /ActiveLearningStudio-laravel-api. Sample is given here. Change variables accroding to the .env of root directorys
- Give read/write permission to server storage directory: chmod 777 -R ActiveLearningStudio-laravel-api/storage


## Running and building application

> docker-compose up --build

## URLS

- http://localhost:8082 - React
- http://localhost:8082/api - Server
- http://localhost:8082/lti/provider - PhpMyAdmin
- http://localhost:8082/phpmyadmin/ - PhpMyAdmin
