var sratCal = document.getElementById("main_table");
sratCal.addEventListener("click", calculate);

function calculate() {
  var checkedValue = 0;
  var inputElements = document.getElementsByClassName("selected_box");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue += parseFloat(inputElements[i].value);
    }
  }

  /* Value before tax */
  document.getElementById("selected_price").innerHTML = checkedValue;

  /* value of the tax */
  var taxAmount = parseFloat((checkedValue * 15) / 100);
  var roundedTax = taxAmount.toFixed(2);
  document.getElementById("tax_rate").innerHTML = roundedTax;

  /* total cost */
  var totalCost = checkedValue + taxAmount;
  var roundedTotalCost = totalCost.toFixed(2);
  document.getElementById("full_price").innerHTML = roundedTotalCost;
}
/* Display message function */
var showMsg = document.getElementById("my_btn");
showMsg.addEventListener("click", msg);

function msg() {
  var message = 'You don\'t need to click "Calculate" :)';
  document.getElementById("the_msg").innerText = message;
}
