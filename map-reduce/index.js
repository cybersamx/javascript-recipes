// A simple array.
let numbers = [1, 2, 3, 4];

// The imperative way.
let transformed = [];

for (let i=0; i<numbers.length; i++) {
  transformed.push(numbers[i]*numbers[i]);
}

console.log(`The square of ${numbers} are ${transformed}`);

// --- Map a logic to ech element ---

transformed = numbers.map((n) => {
    return n*n;
});

console.log(`The square of ${numbers} are ${transformed}`);

// This is identical to the above except it is in short form.
transformed = numbers.map(n => n*n);

console.log(`The square of ${numbers} are ${transformed}`);

// --- Perform cumulative work at each iteration ---

transformed = numbers.reduce((accum, n) => {
    return accum + n;
});

console.log(`The sum of ${numbers} are ${transformed}`);

// --- Filtering and find first element ---

// Apply the same logic to filter and find with different output.
const oddFunc = (n) => {
  return n%2 === 0;
};

console.log(`The odd numbers of ${numbers} are ${numbers.filter(oddFunc)}`);
console.log(`The first odd number of ${numbers} is ${numbers.find(oddFunc)}`);

// --- Remove an element ---

// You can use Array.splice() or Array.pop() to remove an element but these
// functions are mutable, while filter() is immutable.
const remove = (index, array) => {
  return array.filter((n, i) => i !== index);
};

transformed = remove(1, numbers);

console.log(`The new array with the 2nd element removed from ${numbers} is ${transformed}`);

// --- Skip over an element ---

// The problem with filter is that you are forced to return a boolean true or false and
// the return value is the element itself. Chain this with map.

transformed = numbers.
  filter((n) => n%2 === 0).
  map((n) => `element: ${n}`);

console.log(`The filtered array is ${transformed}`);

// The above isn't efficient. Use the reduce() to make it more efficient.

// The params to reduce are: the closure and the initial value for the first iteration.
// So at the first iteration, we pass [] to result.
transformed = numbers.reduce((accum, n) => {
  if (n%2 === 0) {
    accum.push(`element: ${n}`);
  }

  return accum;
}, []);

console.log(`The filtered array is ${transformed}`);

// --- Transform objects in an aray. ---

// More complex array.
let orders = [
  { order: 1, customer: 'Sam', ship: { address: '123 Main St', zip: '02140' } },
  { order: 2, customer: 'Susan', ship: { address: '456 Sunny Court', zip: '10345' } },
  { order: 3, customer: 'Tom', ship: { address: '1 30th St', zip: '02140' } },
  { order: 4, customer: 'George', ship: { address: '34 Star Lane', zip: '30320' } },
];

console.log('');
console.log('Chaining with a more complex array');

// Get customers in zip code 02140
let customers = orders.
  filter((order) => order.ship.zip === '02140').
  map(({ order, customer }) => ({ order, customer }));

console.log(`customers in 02140 zip code are ${JSON.stringify(customers)}`);

// Append additional attributes to the filtered result.
let sam = orders.
  filter((order) => order.customer === 'Sam').
  map((order) => ({...order, hasShipped: true}));

console.log(`customer Sam who has his ordered shipped: ${JSON.stringify(sam)}`);