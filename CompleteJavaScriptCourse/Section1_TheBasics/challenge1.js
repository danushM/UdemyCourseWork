/* Coding Challenge 1
*
*/

//Variable declaration and initialization.
var heightJohn, heightMark, weightJohn, weightMark;
heightJohn = 1.95;
heightMark = 1.69;
weightJohn = 92;
weightMark = 78;

// Calculating John and Mark's BMIs
var bmiJohn, bmiMark;
bmiJohn = weightJohn / (heightJohn * heightJohn);
bmiMark = weightMark / (heightMark * heightMark);
console.log(bmiJohn, bmiMark);
var isBmiGreater = bmiJohn > bmiMark;

console.log("Is John's BMI greater than Mark's? " + isBmiGreater);
