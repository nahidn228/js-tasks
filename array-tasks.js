/**  
1. Declare an array
  Declare an array with 5 elements containing fruits
  console log the 3rd index element
  change the value of the 2nd index element to jambura
  console log the final array
2. Add or remove elements
  Declare an array of 3 tourist destinations
  Add a new tourist destination to your tourist array
  Add two more to your array
  Remove the last tourist destination you have added
  display the final array as output
3. Checking Array Membership with ‘includes’ Instructions:

  Create an array of books containing different book.

  Use the includes method to check if the array contains a javascript book.

  Print a message to the console indicating whether the element is present in the array or not.

4. Checking if it's an Array Instructions:

  Create different variables, each containing either an array or a non-array value.

  Now use isArray to check if each variable is an array.

  Print a message to the console indicating whether each variable is an array or not.

5. Combining Arrays Instructions:

  Create two arrays of your choice.
  Use the concat method to combine the two arrays into a new array.
  Print both the original arrays and the combined array using console.log().

*/

/*
1. Declare an array
  Declare an array with 5 elements containing fruits
  console log the 3rd index element
  change the value of the 2nd index element to jambura
  console log the final array

//solve

let fruits = ["aam", "jam", "kathal", "lichu", "anaros"];
let fruitValue = fruits[3];
fruits[2] = "jambura";
console.log(fruitValue);
console.log(fruits);
*/
/*2. Add or remove elements
  Declare an array of 3 tourist destinations
  Add a new tourist destination to your tourist array
  Add two more to your array
  Remove the last tourist destination you have added
  display the final array as output

//solve
let destinations = ["sylhet", "rangamati", "bandorban"];
destinations.push("coxs bazar");
console.log(destinations);
destinations.push("lalakhal", "sajek");
console.log(destinations);
destinations.pop();
console.log(destinations);

*/

/*
3. Checking Array Membership with ‘includes’ Instructions:

  Create an array of books containing different book.

  Use the includes method to check if the array contains a javascript book.

  Print a message to the console indicating whether the element is present in the array or not.


let books = ["html", "css", "java", "php"];
let book = books.includes("javascript");
console.log("is the array contains a javascript book? ans: = ", book);

  */
/* 
4. Checking if it's an Array Instructions:

  Create different variables, each containing either an array or a non-array value.

  Now use isArray to check if each variable is an array.

  Print a message to the console indicating whether each variable is an array or not.
 

let number = 20;
let numbers = [20, 30, 40, 50, 60];
let names = ["nahid", "hasan", "mahbub"];
let checkArray = Array.isArray(number);
let checkArray1 = Array.isArray(numbers);
let checkArray2 = Array.isArray(names);
console.log(checkArray, checkArray1, checkArray2);

 */

/* 5. Combining Arrays Instructions:

  Create two arrays of your choice.
  Use the concat method to combine the two arrays into a new array.
  Print both the original arrays and the combined array using console.log(). 


//solve
let numbers = [20, 30, 40, 50, 60];
let names = ["nahid", "hasan", "mahbub"];
console.log(numbers, names);
let concatArray = numbers.concat(names);
console.log(concatArray);

  */