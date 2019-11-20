
export const promiseEcho = (text, duration) => {
  const promise = new Promise((resolve, reject) => {
    if (!Number.isInteger(duration)) {
      reject(`Promise error: ${text}`);
    }

    // Do some async work
    setTimeout(() => {
      resolve(`Promise completed: ${text}`);
    }, duration);
  });

  return promise;
}

export const callbackEcho = (text, duration, cb) => {
  if (!Number.isInteger(duration)) {
    cb(null, new Error(`Callback error: ${text}`));
  }

  // Do some async work
  setTimeout(() => {
    cb(`Callback completed: ${text}`, null);
  }, duration);
}