FROM gregyankovoy/alpine-base

ARG build_deps="build-base ncurses-dev autoconf automake git gettext-dev libmaxminddb-dev"
ARG runtime_deps="nginx tini ncurses libintl"

WORKDIR /goaccess

# Build goaccess with mmdb geoip
RUN wget -q -O - https://github.com/allinurl/goaccess/archive/v1.3.tar.gz | tar --strip 1 -xzf - && \
    apk add --update --no-cache ${build_deps} && \
    autoreconf -fiv && \
    ./configure --enable-utf8 && \
    make && \
    make install && \
    rm -rf /tmp/goaccess/* /goaccess && \
    apk del $build_deps



COPY /root /

# RUN chmod +x /usr/local/bin/goaccess.sh && \
#     chmod -R 777 /var/tmp/nginx
RUN chmod +x /usr/local/bin/goaccess.sh

EXPOSE 7889
VOLUME [ "/config", "/opt/log" ]

CMD [ "sh", "/usr/local/bin/goaccess.sh" ]