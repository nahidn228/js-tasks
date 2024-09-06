/**
Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:['orange', 'yellow', 'green', 'blue', 'red']


Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:[12, 98, 76, 46]


Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik'

Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:'person working hard a am I'

 */

/**
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:['orange', 'yellow', 'green', 'blue', 'red']

//Solve
const colors = ["red", "blue", "green", "yellow", "orange"];
let reversed = [];
for (let i = colors.length - 1; i >= 0; i--) {
  //console.log(colors[i]);
  reversed.push(colors[i]);
  
}
console.log(reversed);

*/

/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:[12, 98, 76, 46] 

//solve
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for (i = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);
*/

/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik' 

//solve

var numbers = ["Tom", "Tim", "Tin", "Tik"];
var numArray = [];
//console.log(numbers.join(""));
numArray.push(numbers.join(""));
console.log(numArray);
*/

/*
Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:'person working hard a am I' 

//solve
const statement = "I am a hard working person";
console.log(statement);
console.log(statement.split(" ").reverse().join(" "));
*/