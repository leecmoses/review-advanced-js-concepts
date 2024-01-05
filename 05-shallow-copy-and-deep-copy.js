// Source: https://www.youtube.com/watch?v=4Ej0LwjCDZQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=5

// Primitive:
// 1. Undefined
// 2. Null
// 3. Boolean
// 4. Number
// 5. String
// 6. BigInt
// 7. Symbol

// Structural:
// 1. Object: (new) Object, Array, Map, Set, WeakMap, Date
// 2. Function

// Value vs Reference
// Primitives pass values:
let x = 2;
let y = x;
y += 1;

console.log(y);
console.log(x);

// Structural types use references:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);

// Mutable vs Immutable

// Primitives are immutable
let myName = "Mo";
myName[0] = "W"; // nope!
console.log(myName);
console.log(myName[0]);

// Reassignment is not the same as mutable
myName = "Moses";
console.log(myName);

// Structural types contain mutable data
yArray[0] = 9;
console.log(yArray);

// Pure Functions require you to avoid mutating data
// Impure function that mutates the data
const addToScoreHistory = (arr, score) => {
  arr.push(score);
  return arr;
};

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));
// This mutates the original array
// This is considered to be a side-effect

// Notice: 'const' does not make the array immutable

// Shallow copy vs Deep copy (clones)
// Shallow copy
// With the spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray); // true
console.log(yArray === zArray); // false

// With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray); // false
tArray.push(11);
console.log(zArray);
console.log(tArray);

// But if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
// nested structural data types still share a reference!
// Note: Array.from() and slice() create shallow copies, too!

// When it comes to objects, what about Object.freeze()?
const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 },
};

Object.freeze(scoreObj);

scoreObj.first = 21;
console.log(scoreObj);

scoreObj.third.a = 8;
console.log(scoreObj);
// still mutates - it is a shallow freeze

// How do we avoid these mutations?
// Deep copy is needed to avoid this
// Several libraries like loads, Ramda, and others have this feature built-in
// Here is a one line vanilla JS solution, but it does not work with Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, and other complex data types

const deepScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(deepScoreObj);
console.log(deepScoreObj === scoreObj); // false

// Instead of using a library, here is a Vanilla JS function
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // Recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }

  return newObject;
};

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray); // false
const newScoreObj = deepClone(scoreObj);
console.log(newScoreObj);
console.log(newScoreObj === scoreObj); // false

// Now we can make a pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);

console.log(pureScoreHistory);
console.log(scoreArray);

// Review:

// Primitive vs Structural Data Types

// Primitive data types pass values
// Structural data types pass references

// Primitive data types are immutable
// Reassignment is not the same as mutable
// Structural data types contain mutable data

// Shallow copy vs Deep copy (clones of data structures)

// Shallow copies still share references of nested structures which allows for mutation of the original data

// Object.freeze() creates a shallow freeze

// Deep copies share no references

// All of this is important to know when constructing pure functions because they require you to avoid mutating the original data
