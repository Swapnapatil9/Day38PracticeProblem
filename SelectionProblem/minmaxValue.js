// Find the minimum and maximum number in 5 random 3 digit numbers.

var x1 = Math.floor(100 + Math.random()*999);
var x2 = Math.floor(100 + Math.random()*999);
var x3 = Math.floor(100 + Math.random()*999);
var x4 = Math.floor(100 + Math.random()*999);
var x5 = Math.floor(100 + Math.random()*999);
console.log("The 5 random numbers are ::"+x1,+x2,+x3,+x4,+x5);
if(x1>x2 && x1>x3 && x1>x4 && x1>x5)
console.log("Maximum number is: "+x1);

else if(x2>x1 && x2>x3 && x2>x4 && x2>x5)
console.log("Maximum number is: "+x2);

else if(x3>x1 && x3>x2 && x3>x4 && x3>x5)
console.log("Maximum number is: "+x3);

else if(x4>x1 && x4>x2 && x4>x3 && x4>x5)
console.log("Maximum number is: "+x4);

else 
console.log("Maximum number is: "+x5);

console.log("minimum number is::"+Math.min(x1,x2,x3,x4,x5));
