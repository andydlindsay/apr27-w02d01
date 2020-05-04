const sayHello = (name) => {
  return `hello ${name}`;
};

const anotherFn = () => {};
const GLOBAL_CONSTANT = 42;

module.exports = {
  sayHello,
  anotherFn: anotherFn,
  GLOBAL_CONSTANT: GLOBAL_CONSTANT
};

// module.exports = sayHello;
