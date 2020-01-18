// This isn't efficient code. Strictly for demonstrating composition.

const compose = (...funcs) => {
  return (arg) => {
    return funcs.reduce((composed, func) => func(composed), arg);
  };
};

const add30Minutes = (date) => {
  return new Date(date.getTime() + 30 * 60000);
};

const add45Seconds = (date) => {
  return new Date(date.getTime() + 45000);
};

const transform = compose(
  add30Minutes,
  add45Seconds
);

const date = transform(new Date());

console.log(date);
