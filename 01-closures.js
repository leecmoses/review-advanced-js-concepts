// Source: https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=1
console.log("Closures Explained");

// // Global Scope
// let x = 1;

// const parentFunction = () => {
//   // Local Scope
//   let myValue = 2;
//   console.log(x);
//   console.log(myValue);

//   const childFunction = () => {
//     console.log((x += 5));
//     console.log((myValue += 1));
//   };

//   // childFunction();
//   // childFunction modified the parentFunction variables using lexical scope
//   // console.log(x);
//   // console.log(myValue);

//   return childFunction;
// };

// const result = parentFunction();
// console.log(result);

// result();
// result();
// result();
// console.log(x); // Public variable
// // console.log(myValue); // Private variable

/*************************************************
 * IIFE (Immediately Invoked Function Expression) *
 *************************************************/

// const privateCounter = (() => {
//   let count = 0;
//   console.log(`initial value: ${count}`);
//   // The following function is not immediate invoked but instead returned
//   return () => {
//     count += 1;
//     console.log(count);
//   }; // This anonymous child function has closure over the privateCounter function
// })();

/******************
 * Another Example *
 *******************/
const play = ((num) => {
  let credits = num;
  console.log(`Initialized: You have ${credits} credit(s)`);

  return () => {
    credits -= 1;
    credits > 0
      ? console.log(`You have ${credits} credit(s) remaing`)
      : console.log(`Not enought credits`);
  };
})(3);

// play();
// play();
// play();
