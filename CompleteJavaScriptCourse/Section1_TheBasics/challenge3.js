/* Coding Challenge 3
*
* Functions
*
*/


//Declaring and initializing bills.
var bill1, bill2, bill3;
bill1 = 124;
bill2 = 48;
bill3 = 268;

//Declaring arrays.
var tipArray = [];
var totalBillArray = [];

//Method 1
function tipCalculator(billAmount, tipAmounts) {
  if(billAmount < 50 ) {
    var tip = billAmount * 0.20;
    tipAmounts.push(tip);
  }
  if(billAmount >= 50 && billAmount < 200) {
    var tip = billAmount * 0.15;
    tipAmounts.push(tip);
  }
  if(billAmount >= 200 ) {
    var tip = billAmount * 0.10;
    tipAmounts.push(tip);
  }
  console.log(tipAmounts)
}

function finalBill(billAmount, finalValue) {
  if(billAmount < 50 ) {
    var totalBill = billAmount + (billAmount * 0.20);
    finalValue.push(totalBill);
  }
  if(billAmount >= 50 && billAmount < 200) {
    var totalBill = billAmount + (billAmount * 0.15);
    finalValue.push(totalBill);
  }
  if(billAmount >= 200 ) {
    var totalBill = billAmount + (billAmount * 0.10);
    finalValue.push(totalBill);
  }
  console.log(finalValue)
}

tipCalculator(bill1, tipArray);
tipCalculator(bill2, tipArray);
tipCalculator(bill3, tipArray);

finalBill (bill1, totalBillArray);
finalBill (bill2, totalBillArray);
finalBill (bill3, totalBillArray);


/*
//Method 2
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else if (bill > 200) {
    percentage = 0.1;
  }
  return percentage * bill;
}

function totalBillCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else if (bill > 200) {
    percentage = 0.1;
  }
  return bill + (percentage * bill);
}

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
console.log(tips);

var totalBills = [totalBillCalculator(bills[0]),
                  totalBillCalculator(bills[1]),
                  totalBillCalculator(bills[2])];
console.log(totalBills);
*/
