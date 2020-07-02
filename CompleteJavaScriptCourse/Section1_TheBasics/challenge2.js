/* Coding Challenge 2
*
* Conditional Statements
*
*/

//Variable declaration and initialization
var johnG1, johnG2, johnG3;
var mikeG1, mikeG2, mikeG3;
var maryG1, maryG2, maryG3;

johnG1 = 110;
johnG2 = 120;
johnG3 = 104;

mikeG1 = 116;
mikeG2 = 94;
mikeG3 = 123;

maryG1 = 97;
maryG2 = 134;
maryG3 = 105;

//Calculating the averages.
var avgScoreJohn, avgScoreMike, avgScoreMary;

avgScoreJohn = (johnG1 + johnG2 + johnG3) / 3;
avgScoreMike = (mikeG1 + mikeG2 + mikeG3) / 3;
avgScoreMary = (maryG1 + maryG2 + maryG3) / 3;

console.log(avgScoreJohn, avgScoreMary, avgScoreMike);

//Comparing scores of only John and Mike
if(avgScoreJohn > avgScoreMike) {
  console.log("John's team has a higher average score over 3 games.");
}
else {
  console.log("Mikes's team has a higher average score over 3 games.");
}

//Comparing scores of all 3.
if(avgScoreJohn > avgScoreMike && avgScoreJohn > avgScoreMary) {
  console.log("John's team has a higher average score over 3 games.");
}
else if(avgScoreMike > avgScoreJohn && avgScoreMike > avgScoreMary) {
  console.log("Mikes's team has a higher average score over 3 games.");
}
else {
  console.log("Mary's team has a higher average score over 3 games.");
}

//Using ternary operators.
var highestScorer = avgScoreJohn > avgScoreMike ? "John" : "Mike";
console.log(highestScorer + "'s team has a higher average score over 3 games.");
