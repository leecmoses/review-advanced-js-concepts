// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem where the solution depends on solutions of smaller instances of the same problem

// Unofficial Definition of Recursion:
// "Any situtation where you do something, and depending on the results, you might do it again."

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead

// iterator func
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

countToTen();

// Recursive functions have 2 parts:
// 1. The recursive call to the function
// 2. At least one condition to exit

const recurToTen = (num = 1) => {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

recurToTen();

// Reasons to use (not abuse) Recursion
// 1) Less code
// 2) Elegant code (aka Pleaseing to look at)
// 3) Increased readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?

// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without Recursion:
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num--; // num -= 1
  }
  return array;
};

console.log(fibonacci(12));

// With Recursion:
const fib = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};

console.log(fib(12));

// Without Recursion:
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibonacciPos(8));

// With Recursion:
// Much more elegant and concise
const fibPos = (pos) => {
  if (pos < 2) return pos;
  return fibPos(pos - 1) + fibPos(pos - 2);
};

// Same function written as one line
// Know your audience that is reading your code, this may not have the best readability
// const fibPos = (pos) => (pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2));
console.log(fibPos(8));

// Real-life Examples:
// 1) Continuation Token from an API pseudo code

const getAWSProductIdImages = async () => {
  // get the data with await fetch request

  if (data.IsTruncated) {
    // recursive
    return await getAWSProductIdImages(
      productId,
      s3, // connection to s3
      resultArray, // accumulator
      data.NextContinuationToken
    );
  }

  return resultArray;
};

// 2) A Parser:
// a company directory
// a file directory
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"],
    },
  },
  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"],
  },
};

const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }
    getArtistNames(dataObj[key], arr);
  });
  return arr;
};

console.log(getArtistNames(artistsByGenre));
