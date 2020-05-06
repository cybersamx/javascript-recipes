// --- Loop Generator ---

// The following generator continuously loop.
function* loopGenerator() {
  for (let i=0; ; i++) {
    yield i;
  }
};

// Doesn't complete.
const loop = loopGenerator();
console.log('--- Loop Generator ---');
console.log(loop.next());   // { value: 0, done: false }
console.log(loop.next());   // { value: 1, done: false }
console.log(loop.next());   // { value: 2, done: false }
console.log(loop.next());   // { value: 3, done: false }
console.log(loop.next());   // { value: 4, done: false }
console.log(loop.next());   // { value: 5, done: false }

// --- Yield and Return ---

// The following generator pass a value back to the iterator (static).
function* staticGenerator() {
  yield 'foo';
  return 'bar';   // Return value is returned once the generator completes
};

// Completes after 1 yield.
const simple = staticGenerator();
console.log('--- Yield and Return ---');
console.log(simple.next()); // { value: 'foo', done: false }
console.log(simple.next()); // { value: 'bar', done: true }

// --- Multiple Yields ---

// Multiple yields.
function* multiYieldGenerator() {
  yield 'Sam';
  yield 'I';
  yield 'am';
}

// Use for to iterate a generator.
const multiYields = multiYieldGenerator();
console.log('--- Multiple Yields ---');
for (let item of multiYields) {
  console.log(item);
}
