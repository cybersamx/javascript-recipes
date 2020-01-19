# Spread

ES6 introduces the spread operator ie. `...`, which not only provides better ways but new, novel ways to doing things in Javascript. 

## Usages

### Variadic Function

Variadic functions are functions that takes in a variable number of variables, common in other languages like C, Java, etc.

Old way of passing an array is to use `apply`.

```javascript
const variadic = (a, b, c) => {
  return a + b + c;
};

// result = 15
params = [4, 5, 6];
let result = variadic.apply(null, params);
```

With the spread operator:

```javascript
let result = variadic(...params);
```

### Prepend and Append Array

With the spread operator, appending and prepending an array is easy.

```javascript
// 1, 2, 3, 4, 5, 6
let pre = [1, 2, 4, ...params];

// 4, 5, 6, 7, 8 , 9
let post = [...params, 7, 8, 9];
```

In fact, you can apply the spread operator in any order you like.

```javascript
// 1, 2, 3, 4, 5, 6, 7, 8, 9
let newParams = [1, 2, 3, ...params, 7, 8, 9];
```

### Clone an Array

The old way of cloning an array looks like this:

```javascript
let cloned = params.slice();
```

With the spread operator:

```javascript
let cloned = [...params]; 
```

### Clone an Object and Destructuring

Consider the following object:

```javascript
const order = {
  customer: "Sam",
  ship: {
    address: "1 Main St",
    zip: "02139"
  }
};
```

The old way of doing this is to use `Object.assign` to create a new object and copy the original object over.

```javascript
// Old way of cloning an object using assign.
console.log(Object.assign({}, order));

// With spread operator.
console.log({...order});
```
 
If you need to assign new values to specific properties in the object, just do the following. Note: When the attribute name and the value variable are the same, instead of writing `customer: customer`, just use ES6 destructuring and write customer.

```javascript
const changeOrderSpread = (order, customer) => ({
  ...order,
  customer
});

console.log(changeOrderSpread(order, "Susan"));
```

### Convert string to array

The spread operator expands an iterable, which in Javascript, means strings, arrays, and sets. So we can convert a string into an array of characters using the spread operator enclosed in a [] to signify the target type of array.

```javascript
const word = 'recipe';
console.log([...word]); // Prints [ 'r', 'e', 'c', 'i', 'p', 'e' ]
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