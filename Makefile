TAG_VERSION=test2.0.0  # TODO: Do something less dumb than this

build: api client

api:
	cp .api_dockerignore .dockerignore
	docker build -t curriki/api:${TAG_VERSION} -f Dockerfile.api .

client:
	cp .client_dockerignore .dockerignore
	docker build -t curriki/client:${TAG_VERSION} -f Dockerfile.client .

kompose-create-yamls:
	mkdir yamls; touch yamls/foo; rm yamls/*
	kompose convert -f docker-compose.k8s.yml -o yamls/
	cd yamls; sed -i '' 's/imagePullPolicy: \"\"/imagePullPolicy: IfNotPresent/g' *.yaml

.PHONY: api client
