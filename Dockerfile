FROM node:carbon-alpine

MAINTAINER David Routhieau "rootio@protonmail.com"

RUN mkdir -p /srv/tree-server

COPY . /srv/tree-server

WORKDIR /srv/tree-server

RUN npm install --production

CMD ["node", "app.js"]

EXPOSE 3000
