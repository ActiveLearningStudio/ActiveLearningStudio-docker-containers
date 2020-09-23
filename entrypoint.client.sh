#!/bin/sh

cp /var/app/current/env/.env.local /var/app/current/.env.local
npm run start:dev
while true; do sleep 10000000 ; done
