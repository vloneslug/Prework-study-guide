var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
/* LETS STUDY...
var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
*/
/* examples of arrays 
var shapes = ["triangle", "square", "pentagon", "circle"];
this array only contains strings
var studentInfo = ["lu", 54, true];
this array contains a string, a number, and a Boolean value
only the student's name, "Lu", is surrounded by quotation marks. 
That is because Lu is a string, and strings need to be contained within quotation marks. 
Since 54 is a number and true is a Boolean value, no quotation marks are necessary
arrays are zero-indexed and sequential. This means that the first item in any array has an index of 0, not 1
var shapes = ["triangle", "square", "pentagon", "circle"];
triable = 0
square = 1
pentagon = 2
circle = 3
ex.. console.log(shapes[3]);   will print/log circle
*/
/*ignore this is obly a demo
var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);

var shapes = ["triangle", "square", "pentagon", "circle"];
for(var x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}
*/
/*
for loops
A for loop starts with for
A for loop contains the following three important statements:
FIRST STATEMENT determines the starting point for our loop
start at the beginning of the array and declare a variable x and give it a value of 0 (because the first index of an array is always 0), 
as shown in the following line of code:
var x = 0;
SECOND STATEMENT is the condition
As long as the number in the variable x is less than the length of the array, 
the loop will keep running. This will allow the loop to execute one time for each item in the array
use the length built-in array property on our shapes array to express that condition, 
as shown in the following line of code:
x < shapes.length;
FINAL STATEMENT allows the array to iterate over each item
Since indices follow a predictable pattern, we know the number increases by 1 each time
The code x++ is a shortcut way of writing x+1
Now every time the code loops, x will increase by 1, as shown in the following line of code:
x++
*/
