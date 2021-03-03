# Introduction

CurrikiStudio enables you to create interactive learning content and publish them anywhere like Google Classroom, LMSs etc

# Components

## Applications

1. [React Frontend application](https://github.com/ActiveLearningStudio/ActiveLearningStudio-react-client)
2. [Backend API](https://github.com/ActiveLearningStudio/ActiveLearningStudio-API)
3. [Admin Panel](https://github.com/ActiveLearningStudio/ActiveLearningStudio-admin-panel)
4. [Tsugi for LTI](https://github.com/tsugiproject/tsugi)
5. [Trax LRS](https://github.com/trax-project/trax-lrs)

## Databases

1. External Postgres (For API, For LRS)
2. External MySQL (For Tsugi)

## Searching

1. Elastic Search (For API)

# Infrastructure

Our Minimal Infrastructure is composed of 3 Linux VMs. All are running docker containers inside those

1. VM1: CurrikiStudio Application (From Application Part above)
2. VM2: Databases: Postgres + MySQL
3. VM3: Elastic Search

# Purpose

The purpose of this repository is to enable users run CurrikiStudio Application on VM1 and install through docker-compose

# Minimum Requirements
1. 8GB RAM
2. 2 VCPUs
3. Tried on Ubuntu, Amaozon Linux, Oracle Linux. This list can grow after testing

# Pre-Requisites

1. You should have [docker-compose](https://docs.docker.com/compose/install/) installed on your Linux VM
2. Docker version 19 or above
3. Route 53 entries of site, admin, trax, tsugi

# Installation

## Create DNS record

Create entries in route 53 or any of the hosted zone in which site is added. Enteries can be like the following

1. demo.currikistudio.org
2. demo-admin.currikistudio.org
3. demo-tsugi.currikistudio.org
4. demo-trax.currikistudio.org

These entries are required because of lets-encrypt ssl generation

## Clone Main Repo

> git clone https://github.com/ActiveLearningStudio/ActiveLearningStudio-docker-containers.git

> cd ActiveLearningStudio-docker-containers
 
## SSL Setup with Lets encrypt
1. In `init-letsencrypt.sh ` update the domains according to your settings
2. In `data/nginx/certbot-conf/app.conf`, update the domains according to your settings
3. In `data/nginx/prod-conf/app.conf`, update the domains according to your settings
4. Run `./init-letsencrypt` from root folder to generate certificates. This might require sudo rights

## Repos cloning and configurations

Once ssl is generated, it is time to configure and run the applications

1. Clone the repos mentioned in the `Components` section of the project, inside the root of this project
```
git clone https://github.com/ActiveLearningStudio/ActiveLearningStudio-react-client client
git clone https://github.com/ActiveLearningStudio/ActiveLearningStudio-API api
git clone https://github.com/ActiveLearningStudio/ActiveLearningStudio-admin-panel admin
git clone https://github.com/tsugiproject/tsugi
git clone https://github.com/trax-project/trax-lrs
```
2. Copy .env.example to .env and change variables accordingly
3. Inside api folder copy .env.example to .env and change env variables accordingly
4. Inside client folder create .env.local and add env variables (Further TODO)
5. Inside admin folder copy .env.example to .env and change env varialbes accordingly
6. Inside tsugi folder update config.php database configurations
7. Inside trax-lrs folder copy .env.example to .env and change env varialbes accordingly


## Running application

J. Run following commands to create the application

> docker-compose up -d

It will take almost 40 minutes to run the containers. When the containers are up you will be able to see CurrikiStudio on your provided entry of Route53 (demo.currikistudio.org in our case)


# Assumptions

This installation assumes that you have external postgres and mysql databases setup and those credentials are being used in the environments of the project

# TODO

1. API Storage Setup
2. Database setups


# OCI Implementation Marketplace

Instance + External Volume (Block Storage)

Configurations

Terraform script will get the image, configure the instance and run the application

There will be three images
- CurrikiStudio
- Image for database (Postgres + MySQL)



Diagram

CurrikiStudio
 ---------------------------
| 		Application			|
| 		Database			|
| 		Elastic Search		|
 ---------------------------
 
We can resize them in - small, medium large


small = 3VMs @ 2CPUs, 1TB disk

1. We fetch up these images, and spin them up

2. Configurations: And once that is done we can take the user to some URL (say currikistudio.org/oci/setup) for configurations, like mail settings, Domain names onto which installation will point (demo.currikistudio.org) etc
3. Once that is complete. User will be able to use currikistudio on the provided domain
