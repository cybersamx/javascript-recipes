# Compose

Many of the recipes in this project are oriented around functional programming. And Composition is a crucial design pattern in functional programming where the logic is broken up into smaller pure functions. First, a bit of a primer.

## Pure Function

Pure function is defined as a function that returns a value that is computed based on its arguments. Some characteristics and benefits of pure functions:

* Doesn't cause side effects. It doesn't change any state outside the scope of the function. So it doesn't change any global variables nor change parameters that are passed into the function.
* Are testable. In tests, you have full control of the function. Simply pass the conditions needed as arguments to the function and evaluate the output. 

```javascript
let account = {
  name: 'Sam',
  balance: 100.0
};

const withdraw = amount => {
  account.balance -= amount;
};

withdraw(25.0);

console.log(`balance: ${account.balance}`);
```

Function `withdraw` isn't a pure function as it mutates a variable that outside its scope. The following is a pure function as it takes in at least a parameter and return a value.

```javascript
const withdraw = (account, amount) => ({
  ...account,
  balance: account.balance - amount
});

account = withdraw(account, 25.0);

console.log(`balance: ${account.balance}`);
```

## Reduce

The `Array.reduce()` function that reduces an array down into a single value with the provided closure. The return value of the closure is stored in an accumulator and the final value is the aggregation computed from the accumulator. See the [map-reduce pattern](../map-reduce) for details.

## Compose Function

A higher-order function executes many smaller pure functions (each focused on a specific task) serially or concurrently to return a value at the end.

This recipe implements a `compose` function that takes in an array of functions for execution and returns an "accumulative" result back to the caller. 

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

* [Main](index.js)