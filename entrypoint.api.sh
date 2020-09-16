#!/bin/bash

cp /var/www/html/env/.env /var/www/html/.env
service apache2 restart
while true; do sleep 10000000 ; done
