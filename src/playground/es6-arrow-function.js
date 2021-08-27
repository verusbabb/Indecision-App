// const square = function (x) {
//   return x * x;
// };

// console.log(square(8));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

const fullName = "Steve Babb";
let firstName;

// if (fullName) {
//   firstName = fullName.split(" ")[0];
// }

// console.log(firstName);

// const getFirstName = (fullName) => {
//   firstName = fullName.split(" ")[0];
//   return firstName;
// };

const getFirstName = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("steve babb"));
