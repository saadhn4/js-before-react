//Arrow functions

//1. Arrow function without parameters
const sayHello = () => {
  console.log("Hello");
};

sayHello();

//2. Arrow function with one parameter
const square = (num) => {
  return num * num;
};

console.log(square(5));

//3. Arrow function with many parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(4, 5));

// 4. Arrow function with multiple lines

const multiply = (a, b) => {
  let result = a * b;
  return result;
};

console.log(multiply(1, 2));

//5. Arrow function inside an array method

const mappedArray = (arr) => {
  return arr.map((x) => x * 2);
};

console.log(mappedArray([1, 2, 3, 4]));

//Write an arrow function called filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

const evenNumbers = (arr) => {
  return arr.filter((x) => x % 2 === 0);
};

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
