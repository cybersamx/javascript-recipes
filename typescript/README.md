# TypeScript

This recipe is based on the [Microsoft TypeScript Babel Starter](https://github.com/microsoft/TypeScript-Babel-Starter). It's meant to be a simple starter project for using TypeScript and ES6 code for Node.js.

The following packages are added to the project.

```bash
$ npm install --save-dev \
    typescript \
    @babel/core \
    @babel/cli \
    @babel/plugin-proposal-class-properties \
    @babel/plugin-proposal-object-rest-spread \
    @babel/preset-env \
    @babel/preset-typescript
```

We also need to define a `tsconfig.json` file and a `babel.config.json` (or `.babelrc`) file. Additional build scripts are also added to the `package.json` file.

## Setup

1. Install packages

   ```bash
   $ npm install
   ```
   
1. Run the program

   ```bash
   $ npm start
   ```

## Sample Code

* [Main](src/index.js)

## Reference

* [Microsoft TypeScript Babel Starter](https://github.com/microsoft/TypeScript-Babel-Starter)
* [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)