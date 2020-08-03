TAG_VERSION=1.0.0


build: goaccess goaccess-nginx

goaccess:
	touch .dockerignore
	mv .dockerignore{,.backup}
	cp .{goaccess_,}dockerignore
	docker build -t currikidev-goaccess:${TAG_VERSION} -f Dockerfile.goaccess .; mv .dockerignore{.backup,}

goaccess-nginx:
	touch .dockerignore
	mv .dockerignore{,.backup}
	cp .{goaccess_nginx_,}dockerignore
	docker build -t currikidev-goaccess_nginx:${TAG_VERSION} -f Dockerfile.goaccess_nginx .; mv .dockerignore{.backup,}


.PHONY: goaccess goaccess-nginx
