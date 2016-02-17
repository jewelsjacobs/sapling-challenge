# [Sapling Coding Challenge](docs/CHALLENGE.md)

## Includes:
> [Cycle-React-Hot-Boilerplate](https://github.com/cycle-react-examples/react-hot-boilerplate) using [Cycle-React](https://github.com/pH200/cycle-react),
> [Rx.js](https://github.com/Reactive-Extensions/RxJS) the [reactive extensions](http://reactivex.io) for JavaScript 
> [React](https://baconjs.github.io/) library, [Bootstrap](http://getbootstrap.com/),
> [Immutable](https://facebook.github.io/immutable-js/) to make our model collections immutable,
> [Cuid](https://github.com/ericelliott/cuid) for scalable ids and
> [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server

## Architecture

Uses Model | View | Intent pattern with separate UI components.
You can learn more about this pattern by watching these awesome vids from the creator of Cycle.js:

- ["What if the user was a function?"](https://youtu.be/1zj7M1LnJV4)
- [egghead.io series on Cycle.js Fundamentals](https://egghead.io/series/cycle-js-fundamentals)

## BDD / TDD / Testing with Tape + Testem
- [Boilerplate here](https://github.com/Cmdv/React-Testing-Webpack-Tape)

## Installation

```javascript
npm install //install dependencies
```

## Usage

### Development

```javascript
npm start //start webpack-dev-server with react-hot-loader and babel ES6 / jsx compiler
```

### Run Tests
Open another terminal tab and then for BDD + TDD:

```javascript 
npm test //start testem + tape
```

For linting:

```javascript 
npm run lint //start eslint
```

### Build

```javascript 
npm run build //uses webpack production configuration
```

## TODO (if I wasn't trying to get this done ASAP)

- Actually write Tests
- Cool UI components
- Cool CSS transitions
- API documentation
