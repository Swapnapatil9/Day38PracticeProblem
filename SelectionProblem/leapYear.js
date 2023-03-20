// Check the given year is leap year or not.

var year = 1800;
if (year%400==0 || (year%4==0 && year%100!=0))
    console.log("Enter year is Leap year");
else
    console.log("Enter year is not Leap year");