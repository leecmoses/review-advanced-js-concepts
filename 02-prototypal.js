// Source: https://www.youtube.com/watch?v=mQ4oCgcgHOA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=2

// Object literals
const person = {
  alive: true,
};

const musician = {
  plays: true,
};

musician.__proto__ = person;
// console.log(musician.plays);
// console.log(musician.alive);

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__
// Object.setPrototypeOf(musician, person);
// console.log(Object.getPrototypeOf(musician));
// console.log(musician.__proto__);
// console.log(Object.getPrototypeOf(musician) === musician.__proto__);

// console.log(musician.plays);
// missing property => go to person
// console.log(musician.alive);

// Extending the prototype chain => general to specific to more specific
// const guitarist = {
//   strings: 6,
//   __proto__: musician,
// };

// console.log(guitarist.alive);
// console.log(guitarist.plays);
// console.log(guitarist.strings);
// console.log(guitarist);

// No circular references allowed (person.__proto__ can't be guitarist);
// person.__proto__ = guitarist; // Throws a TypeError

/*****************************************
 * Object with Getter and Setter Methods *
 *****************************************/
// const car = {
//   doors: 2,
//   seats: "vinyl",
//   get seatMaterial() {
//     return this.seats;
//   },
//   set changeMaterial(material) {
//     this.seats = material;
//   },
// };

// const luxuryCar = {};
// Object.setPrototypeOf(luxuryCar, car);
// luxuryCar.changeMaterial = "leather"; // Note keyword 'this'
// console.log(luxuryCar);
// console.log(luxuryCar.doors);
// console.log(luxuryCar);

// console.log(luxuryCar.valueOf());

// // Getting the keys of an object
// console.log(Object.keys(luxuryCar));
// // Loop through each object key
// Object.keys(luxuryCar).forEach((key) => console.log(key));

// // But a for...in loop includes inherited props
// for (let key in luxuryCar) {
//   console.log(key);
// }

/***********************
 * Object Constructors *
 **********************/
// function Animal(species) {
//   this.species = species;
//   this.eats = true;
// }

// // The prototype property is where inheritable props and methods are
// Animal.prototype.walks = function () {
//   return `A ${this.species} is walking.`;
// };

// const Bear = new Animal("bear");

// console.log(Bear.species);
// console.log(Bear);
// console.log(Bear.walks());

// console.log(Bear.__proto__);
// console.log(Bear.__proto__ === Animal.prototype);
// console.log(Animal.prototype);
// console.log(Bear);

/***************
 * ES6 Classes *
 ***************/
class Vehicle {
  constructor() {
    this.wheels = 4;
    this.motorized = true;
  }

  ready() {
    return "Ready to go!";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(); // Used to call the constructor of the super class
    this.wheels = 2;
  }

  wheelie() {
    return "one one wheel now!";
  }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(Object.getPrototypeOf(myBike));
