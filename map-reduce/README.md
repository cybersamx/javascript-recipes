# Map-Reduce-Filter-Find Patterns

The imperative way to doing things in array looks something like this:

```javascript
let numbers = [1, 2, 3, 4];
let squaredNums = [];

for (let i=0; i<numbers.length; i++) {
    squaredNums.push(numbers[i]*numbers[i]);
}
```

We are telling the system how to do it.

With better functional programming support in newer versions of Javascript, let's implement the above declaratively.

```javascript
let numbers = [1, 2, 3, 4];
let squaredNums = numbers.map(n => n*n);
```

Now it looks cleaner and we are expressing what we want it to do.

The `map`, `reduce`, `filter`, and `find` are powerful methods for manipulating array content. The beauty is that you can very easily chain them together for even more ways of changing the content. 

Here's a summary of what the methods do:

| Method   | Description | Closure Param 1 | Closure Param 2 | Closure Param 3 | Return Type |
|----------|-------------|-----------------|-----------------|-----------------|-------------|
| map()    | Map the content of an array to a new array by mutating each element in the array. | array element | current iteration index | | array |
| reduce() | Reduces an array down to one value. | the value that is returned from the previous iteration | array element | current iteration index | value (it can a primitive, an object, or an array) |
| filter() | Apply a conditional to each element of an array. If the conditional is true, is "kept" or passed to the new array. | array element | current iteration index | | array |
| find()   | Apply a conditional to each elemnt of an array and return the first element that satisfies the conditional. | array element | current iteration index | | element from the array |

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