all: goaccess

goaccess:
	touch .dockerignore
	mv .dockerignore{,.backup}
	cp .{goaccess_,}dockerignore
	docker build -t 'currikidev-goaccess' -f Dockerfile.goaccess .; mv .dockerignore{.backup,}

.PHONY: goaccess