/***

1. Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
2. BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

3. Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

4. if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else

5. you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

6. Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

/*
1. Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk

//solve

let amount = 550;
if (amount > 500) {
  console.log("free Coke");
} else {
  console.log("Coke: 30tk");
}
*/

/*
2. BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
//solve

let BMI = 30;
if (BMI < 18.5) {
  console.log("you are underweight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("you are normal.");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("you are overweight.");
} else {
  console.log("you are obese.");
}

*/
/*
3. Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

// Solve
let score = 80;
if (score <= 59) {
  console.log("Your grade is: F");
} else if (score >= 60 && score <= 69) {
  console.log("Your grade is: D");
} else if (score >= 70 && score <= 79) {
  console.log("Your grade is: C");
} else if (score >= 80 && score <= 89) {
  console.log("Your grade is: B");
} else if (score >= 90 && score <= 100) {
  console.log("Your grade is: A");
} else{
  console.log("Please type the valid score")
}
*/
/*
4. if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else

//solve 

let myScore = 100;
let fndScore = 40;

if (myScore < 80) {
  console.log("go to home and sleep and act sad");
} else if (myScore > 100) {
  console.log("please type valid score");
} else if (fndScore < 40) {
  console.log("block");
} else if (fndScore >= 40 && fndScore < 60) {
  console.log("message unseen");
} else if (fndScore >= 60 && fndScore < 80) {
  console.log("good luck next time.");
} else if (fndScore >= 80 && fndScore <= 100) {
  console.log("go for a lunch");
}
*/
/*
5. you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

//solve 

let num1 = 20;
let num2 = 50;
let result = 0;
if (num1 > num2) {
  console.log(num1 * 2);
} else {
  console.log(num1 + num2);
}

/*
6. Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
 */

//solve
let childAge = 9;
let isStudent = false;
let seniorAge = 60;
let ticket = 800;
if (childAge < 10) {
  console.log("Ticket is free");
} else if (isStudent) {
  console.log("You have got 50% Discount.");
} else if (seniorAge >= 60) {
  console.log("You have got 15% Discount");
} else {
  console.log("Regular ticket fare 800 tk");
}
