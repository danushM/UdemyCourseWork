/* Coding Challenge 4
*
* Objects, their methods and properties.
*
*/

//Object creation.
var john = {
  fullName: 'John Smith',
  height: 1.95,
  weight: 92,
  calculateBMI: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};

var mike = {
  fullName: 'Mike Smith',
  height: 1.95,
  weight: 92,
  calculateBMI: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};

//Performing a BMI comparison.
if (john.calculateBMI() > mike.calculateBMI()) {
  console.log (john.fullName + ' with a BMI of ' + john.bmi + ' has the highest BMI.');
} else if (mike.bmi > john.bmi) {
  console.log (mike.fullName + ' with a BMI of ' + mike.bmi + ' has the highest BMI.');
} else {
  console.log (john.fullName + ' and ' + mike.fullName + ' have equal BMIs: ' + john.bmi);
}
