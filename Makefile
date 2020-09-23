TAG_VERSION=test1.0.0  # TODO: Do something less dumb than this

build: laravel-api client

laravel-api:
	cp .{laravel_api_,}dockerignore
	docker build -t curriki/laravel-api:${TAG_VERSION} -f Dockerfile.laravel_api .

client:
	cp .{client_,}dockerignore
	docker build -t curriki/client:${TAG_VERSION} -f Dockerfile.client .

kompose-create-yamls:
	mkdir yamls; touch yamls/foo; rm yamls/*
	kompose convert -f docker-compose.k8s.yml -o yamls/
	cd yamls; sed -i '' 's/imagePullPolicy: \"\"/imagePullPolicy: IfNotPresent/g' *.yaml

.PHONY: laravel-api client
