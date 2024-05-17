//Task-1
let number1 = prompt("Enter the number");

if (number1 % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//Task-2

let number2 = prompt("Enter the number");
if (number2 > 0) {
  console.log("Positive");
} else if (number2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
//Task-3
let n1 = prompt("Enter the first number");
let n2 = prompt("Enter the second number");
if (n1 > n2) {
  console.log("n1 is greater");
} else {
  console.log("n2 is greater");
}
//Task-4
let year = prompt("Enter the year");
if (year % 4 == 0) {
  console.log("LeapYear");
} else {
  console.log("notLeapYear");
}
//Task-5
let letter = prompt("Enter the letter");
if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u" ||
  letter === "A" ||
  letter === "E" ||
  letter === "I" ||
  letter === "O" ||
  letter === "U"
) {
  console.log("The letter is vowel");
} else {
  console.log("the letter is  not a vowel");
}
//Task-6
let side1 = prompt("Enter the first side");
let side2 = prompt("Enter the second side");
let side3 = prompt("Enter the third side");
if (side1 === side2 === side3) {
  console.log("its an Equilateral triangle");
} else if (((side1 === side2 ) !== side3 ) || ((side1 === side3) !== side2) || ((side2 === side3)!== side1)){
  console.log("its an isoceles triangle");
} else {
  console.log("its an scalene triangle");
}
//Task-7

let subject1 = parseInt(prompt("Enter the mark"));
let subject2 = parseInt(prompt("Enter the mark"));
let subject3 = parseInt(prompt("Enter the mark"));
let subject4 = parseInt(prompt("Enter the mark"));
let subject5 = parseInt(prompt("Enter the mark"));
let Total = (subject1 + subject2 + subject3 + subject4 + subject5);
console.log(Total,"Total");
let Average = Total / 5;
console.log(Average,"Average");
if (Average >= 90) {
  console.log("you have obtained s grade");
} else if (Average >= 80 && Average < 90) {
  console.log("you have obtained A grade");
} else if (Average >= 70 && Average < 80) {
  console.log("you have obtained B grade");
} else if (Average >= 60 && Average < 70) {
  console.log("you have obtained B grade");
} else if (Average >= 50 && Average < 60) {
  console.log("you have obtained c grade");
} else if (Average >= 40 && Average < 50) {
  console.log("you have obtained D grade");
} else {
  console.log("Sorry you have failed");
}
//Task-8
let Username1 ="Hemanth"
let Password1 ="Hemanth29@"
let Username = prompt("Enter your Username");
let Password = prompt("Enter your password");
if((Username === Username1) && (Password === Password1)){
  console.log("Login sucessful");
}
else if (((Username === Username1) && (Password !== Password1))){
  console.log("Recheck your password");
}
else if (((Username !== Username1) && (Password === Password1))){
  console.log("Recheck your username");
}
else{
  console.log("The Username and Password is incorrect");
}




