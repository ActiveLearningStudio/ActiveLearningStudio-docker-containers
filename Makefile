TAG_VERSION=test1.0.0  # TODO: Do something less dumb than this

build: goaccess goaccess-nginx nginx laravel-api auth-api h5p-api lti-provider phpmyadmin mongodb client

goaccess:
	cp .{goaccess_,}dockerignore
	docker build -t currikidev/goaccess:${TAG_VERSION} -f Dockerfile.goaccess .

goaccess-nginx:
	cp .{goaccess_nginx_,}dockerignore
	docker build -t currikidev/goaccess-nginx:${TAG_VERSION} -f Dockerfile.goaccess_nginx .

nginx:
	cp .{nginx_,}dockerignore
	docker build -t currikidev/nginx:${TAG_VERSION} -f Dockerfile.nginx ./nginx/

mysql:
	cp .{mysql_,}dockerignore
	# to ensure COPY doesn't fail:
	mkdir -p currikidev-mysqldata; touch currikidev-mysqldata/.ignoreMe
	docker build -t currikidev/mysql:${TAG_VERSION} -f Dockerfile.mysql .

auth-api:
	cp .{auth_api_,}dockerignore
	docker build -t currikidev/auth-api:${TAG_VERSION} -f Dockerfile.auth_api .

laravel-api:
	cp .{laravel_api_,}dockerignore
	docker build -t curriki/laravel-api:${TAG_VERSION} -f Dockerfile.laravel_api .

h5p-api:
	cp .{h5p_api_,}dockerignore
	docker build -t currikidev/h5p-api:${TAG_VERSION} -f Dockerfile.h5p_api .

lti-provider:
	cp .{lti_provider_,}dockerignore
	docker build -t currikidev/lti-provider:${TAG_VERSION} -f Dockerfile.lti_provider .

phpmyadmin:
	cp .{phpmyadmin_,}dockerignore
	docker build -t currikidev/phpmyadmin:${TAG_VERSION} -f Dockerfile.phpmyadmin .

mongodb:
	cp .{mongodb_,}dockerignore
	docker build -t currikidev/mongodb:${TAG_VERSION} -f Dockerfile.mongodb .

client:
	cp .{client_,}dockerignore
	docker build -t currikidev/client:${TAG_VERSION} -f Dockerfile.client .


kompose-create-yamls:
	mkdir yamls; touch yamls/foo; rm yamls/*
	kompose convert -f docker-compose.k8s.yml -o yamls/
	cd yamls; sed -i '' 's/imagePullPolicy: \"\"/imagePullPolicy: IfNotPresent/g' *.yaml

.PHONY: goaccess goaccess-nginx nginx mysql laravel-api auth-api h5-api lti-provider phpmyadmin mongodb client
