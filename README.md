## Development server

```shell
$ npm install
$ node app.js
```

## Tests

```shell
$ mocha test.js
```

## Docker

```shell
$ docker build -t tree-server .
$ docker run --name tree-server -p 3000:3000 -it tree-server
```

## Linter

```shell
$ ./node_modules/.bin/eslint .
```
