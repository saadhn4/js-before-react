//Terenary operators

// 1. Simple If-Else Replacement

const age = 18;
console.log(age >= 18 ? "You can vote" : "You cannot vote");

//2. Using Ternary Operator in a Function

const isOddEven = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(isOddEven(5));
console.log(isOddEven(2));

//3. Ternary Operator in Objects

const object = {
  name: "Saad",
  admin: true,
};

let check = object.admin ? "Can Make changes" : "Cannot make changes";
console.log(check);

//4. Ternary Operator in JSX (Useful in React)

const isLoggedIn = true;
let confirm = isLoggedIn ? "Welcome back" : "Please log in";
console.log(confirm);

//Write a function checkEligibility using the ternary operator.

/*
"Eligible for driving" if the age is 18 or above.
"Not eligible for driving" otherwise.
*/

const ageOfDriver = 18;

let checkAge = ageOfDriver >= 18 ? "Can drive" : "Cannot drive";

console.log(checkAge);
