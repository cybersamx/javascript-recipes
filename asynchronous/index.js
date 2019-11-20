import {callbackEcho, promiseEcho} from "./common";

// Case 1: Promise with .then() handler
// then() handles both the resolve and reject callbacks.
promiseEcho('Hello case 1', 2000)
  .then(
    (result) => console.log(`Case 1 (resolve): ${result}`),
    (error) => console.log(`Case 1 (reject): ${error}`)
  );

// Case 2: Promise with .then().catch().finally() handlers
// Separate then() and catch(), finally() placed last.
promiseEcho('Hello case 2', 2000)
  .then((result) => console.log(`Case 2 (resolve): ${result}`))
  .catch((error) => console.log(`Case 2 (reject): ${error}`))
  .finally(() => console.log('Case 2: finally called'));

// Case 3: Promise with .then().catch().finally() handlers
// Separate then() and catch(), finally() placed first.
promiseEcho('Hello case 3', 2000)
  .finally(() => console.log('Case 3: finally called'))
  .then((result) => console.log(`Case 3 (resolve): ${result}`))
  .catch((error) => console.log(`Case 3 (reject): ${error}`));

// Case 4: Promise with reject callback
// Only catch() is called. Pass a bad parameter to invoke error.
promiseEcho('Hello case 4', '1000')
  .then((result) => console.log(`Case 4 (resolve): ${result}`))
  .catch((error) => console.log(`Case 4 (reject): ${error}`));

// Case 5: Successful callback
callbackEcho('Hello case 5', 2000, (result, error) => {
  if (error) {
    console.log(`Case 5 (failed): ${error}`)
    return;
  }

  console.log(`Case 5 (success): ${result}`);
});

// Case 6: Failed callback
callbackEcho('Hello case 6', '1000', (result, error) => {
  if (error) {
    console.log(`Case 6 (failed): ${error}`)
    return;
  }

  console.log(`Case 6 (success): ${result}`)
});
