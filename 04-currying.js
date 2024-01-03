// Source: https://www.youtube.com/watch?v=I4MebkHvj8g&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=4

// Currying

// Named after Haskell B. Curry

// Concept from lambda calculus

// Currying takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions
// Therefore, a curried function only takes one parameter at a time

// Currying can look like this:
const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

// It works but that's getting ugly and nested the further we go

// Let's refactor:
const buildSammy = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy = buildSammy("Turkey")("Cheese")("Lettuce");
console.log(mySammy);

// Another example of a curried function
const multiply = (x, y) => x * y;

const curriedMultiply = (x) => (y) => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Partially applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

// Another example
const updateElemText = (id) => (content) =>
  (document.getElementById(id).textContent = content);

const updateHeaderText = updateElemText("header");

updateHeaderText("Sup Mo?");

// Another common use of currying is function composition
// Allows calling small functions in a specific order
const addCustomer =
  (fn) =>
  (...args) => {
    console.log("Saving customer info...");
    return fn(...args);
  };

const processOrder =
  (fn) =>
  (...args) => {
    console.log(`Processing order #${args[0]}`);
    return fn(...args);
  };

let completeOrder = (...args) => {
  console.log(`Order #${[...args][0].toString()} completed.`);
};

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addCustomer(completeOrder);
completeOrder("1000");
// completeOrder("1000", "1001");

// If written in a more standard way it would look like the following
// function addCustomer(...args) {
//   return function processOrder(...args) {
//     return function completeOrder(...args) {
//       // end
//     };
//   };
// }

// MOST IMPORTANT
// Requires a function with a fixed number of parameters
const curry = (fn) => {
  return (curried = (...args) => {
    if (fn.length !== args.length) {
      console.log(...args);
      return curried.bind(null, ...args); // bind creates a new function
    }
    return fn(...args);
  });
};

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
