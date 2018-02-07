FROM alpine:3.7

MAINTAINER David Routhieau "rootio@protonmail.com"

RUN apk add --no-cache \
      build-base \
      git \
      nodejs \
      nodejs-npm

RUN mkdir -p /srv/tree-server

COPY . /srv/tree-server

WORKDIR /srv/tree-server

RUN npm install --production

CMD ["node", "app.js"]

EXPOSE 3000
