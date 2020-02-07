function calculate() {
  var checkedValue = 0;
  var inputElements = document.getElementsByClassName("selected_box");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
        checkedValue += parseFloat(inputElements[i].value); 
    }
  }
    document.getElementById('selected_price').innerHTML = checkedValue

    
}
