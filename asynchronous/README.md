# Callback vs Promise

The simplest way to constructing a Promise is:

```javascript
// Producer
// Create a promise object by properly defining the callbacks
// resolve and reject.
const promise = new Promise((resolve, reject) => {
  anAsyncFunc(param, (err, value) => {
    // Do some async work

    if (err) {
      return reject(new Error('failure'));;
    }

    return resolve('success');
  });
});

// Consumer
promise
  .then((result) => success(result)) // then to handle the resolve callback
  .catch((error) => failure(error))  // catch to handle the reject callback
  .finally(() => cleanup());         // Always run
```

The order of then-catch-finally chaining matters. For example:

Here `finally()` is run first before `then()` or `catch()`.

```javascript
promise
  .finally(() => cleanup())
  .then((result) => success(result))
  .catch((error) => failure(error));
```

Whereas `then()` or `catch()` is run first before finally.

```javascript
promise
  .then((result) => success(result))
  .catch((error) => failure(error))
  .finally(() => cleanup());
```

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

* [Promise vs callback](index.js)