// --- Variadic parameters ---

const variadic = (a, b, c) => {
  return a + b + c;
};

const params = [4, 5, 6];

// Old way of passing an array is to use `apply`.
let result = variadic.apply(null, params);
console.log(result);

// New way.
result = variadic(...params);
console.log(result);

// --- Prepend and append an array ---

let pre = [1, 2, 4, ...params];
let post = [...params, 7, 8, 9];

console.log(pre);
console.log(post)

// --- Clone an array ---

console.log(params.slice());
console.log([...params]);

// --- Clone an object ---

const order = {
  customer: "Sam",
  ship: {
    address: "1 Main St",
    zip: "02139"
  }
};

// Old way of cloning an object using assign.
console.log(Object.assign({}, order));

// With spread operator.
console.log({...order});

// Cloning plus assignment.
const changeOrder = (order, newCust) => {
  return Object.assign({}, order, { customer: newCust });
};

// When the attribute name and the value variable are the same, instead of writing
// `customer: customer`, just use ES6 destructuring and write customer.
const changeOrderSpread = (order, customer) => ({
  ...order,
  customer
});

console.log(changeOrder(order, "Dave"));
console.log(changeOrderSpread(order, "Susan"));

// --- Expand a string ---

const word = 'recipe';
console.log([...word]);

// NOTE: The following are not the same. First form, we are passing an array.
// The second form, we are using multiple parameters.
// console.log([...word]);
// console.log(...word);