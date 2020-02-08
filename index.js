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
  var rounded_number = taxAmount.toFixed(2);
  document.getElementById("tax_rate").innerHTML = rounded_number;
  /* total cost */
  var totalCost = checkedValue + rounded_number;
  //document.getElementById("full_price").innerHTML = totalCost;
  console.log(totalCost);
}
