# Generator

ES6 introduces the 2 constructs for implementing Generators in JavaScript:

* `function*` - A construct that is used to declare a generator function.
* `yield` - An operator that tells the enclosing generator function to pause.

In addition, the object returned from a generator function has a method `next()` that is used to resumes execution of the "execution thread". Here's a simple example to illustrate the core concept:

```javascript
function* generator() {
  console.log('Before pause');
  yield;
  console.log('Resume pause');
}

const process = generator();
process.next();
process.next();
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

* [Main](index.js)

## References

* [Exploring JS: Generators](https://exploringjs.com/es6/ch_generators.html#sec_overview-generators) - this article has a deep and extensive coverage of ES6 generators.
