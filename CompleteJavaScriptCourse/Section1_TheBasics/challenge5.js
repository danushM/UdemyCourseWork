/* Coding Challenge 5
*
* Section 2 All Concepts.
*
*/

//Part 1.

//Creating John's Object.
var johnsBills = {
  billArray: [124, 48, 268, 180, 42],
  tipArray: [],
  finalBills: [],
  calculateTip: function() {
    var arrayIndex;
    for(var arrayIndex = 0; arrayIndex < this.billArray.length; arrayIndex++) {
      if (this.billArray[arrayIndex] < 50) {
        this.tipArray[arrayIndex] = this.billArray[arrayIndex] * 0.2;
      }
      else if (this.billArray[arrayIndex] >= 50 && this.billArray[arrayIndex] < 200) {
        this.tipArray[arrayIndex] = this.billArray[arrayIndex] * 0.15;
      }
      else if (this.billArray[arrayIndex] >= 200) {
        this.tipArray[arrayIndex] = this.billArray[arrayIndex] * 0.1;
      }
      this.finalBills[arrayIndex] = this.billArray[arrayIndex] + this.tipArray[arrayIndex];
    }
  }
};

//Calling the calculateTip() method.
johnsBills.calculateTip();

//Logging the results
console.log(johnsBills.tipArray);
console.log(johnsBills.finalBills);

/*----------------------------------------------------------*/

/*
* Part 2: Calculating Average tips paid by Mark on his holiday
*/

//Creating Mark's Object.
var marksBills = {
  mBillArray: [77, 375, 110, 45],
  mTipArray: [],
  mFinalBills: [],
  calculateTip: function() {
    for(var arrayIndex = 0; arrayIndex < this.mBillArray.length; arrayIndex++) {
      if (this.mBillArray[arrayIndex] < 100) {
        this.mTipArray[arrayIndex] = this.mBillArray[arrayIndex] * 0.2;
      }
      else if (this.mBillArray[arrayIndex] >= 100 && this.mBillArray[arrayIndex] < 300) {
        this.mTipArray[arrayIndex] = this.mBillArray[arrayIndex] * 0.10;
      }
      else if (this.mBillArray[arrayIndex] >= 300) {
        this.mTipArray[arrayIndex] = this.mBillArray[arrayIndex] * 0.25;
      }
      this.mFinalBills[arrayIndex] = this.mBillArray[arrayIndex] + this.mTipArray[arrayIndex];
    }
  }
};

//Calling calculateTip() method.
marksBills.calculateTip();
console.log(marksBills.mTipArray);

function avgTips(tips) {
  var tipSum = 0;
  for (var arrayIndex = 0; arrayIndex < tips.length; arrayIndex++) {
    tipSum += tips[arrayIndex];
  }
  avgTip = tipSum / tips.length;

  console.log("Mark paid an average of $" + avgTip + " on his holiday." );
}

//Calling the avgTips function.
avgTips(marksBills.mTipArray);
