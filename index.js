const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient;
let remainder;

if (num2 !== 0) {
  quotient = num1 / num2;
  remainder = num1 % num2;
} else {
  quotient = "Cannot divide by zero";
  remainder = "Cannot divide by zero";
}

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);