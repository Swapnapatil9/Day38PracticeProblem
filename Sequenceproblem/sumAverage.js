// Calculate Sum and Average of 5 random 2 digit numbers.

let x1 = Math.floor(10 + Math.random()*99);
let x2 = Math.floor(10 + Math.random()*99);
let x3 = Math.floor(10 + Math.random()*99);
let x4 = Math.floor(10 + Math.random()*99);
let x5 = Math.floor(10 + Math.random()*99);
let sum = x1+x2+x3+x4+x5;
console.log("Sum of 5 random Numbers :"+sum);
let average = sum/5;
console.log("Average of 5 random Numbers :"+average);