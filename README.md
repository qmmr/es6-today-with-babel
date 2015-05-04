# ES6-today-with-babel

## How to write ES6 today using Babel.js transpiler

This repository is hosting materials for the blog post
http://qmmr.me/es6-today-with-babel

## Requirements

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org)

Babel.js is installed as a project dependency. If you wish to install it
globally follow the [official documentation](http://babeljs.io/docs/using-babel/#babel_cli)

## How to use

Open the Terminal and clone this repository.

```
git clone https://github.com/qmmr/es6-today-with-babel
```

Navigate into `es6-today-with-babel` and install npm dependencies.

```bash
npm install
```

After that just run `npm run watch`. This task will run babel transpiler and watch `src/` dir and transpile all `.js` files into `dist/` dir.``

To see the example working you can run the compiled version of `main.js`
in node.js

```bash
node dist/main.js
```
