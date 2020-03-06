//var theArray = document.getElementById('user_number').value;
var numberArray = [];



function calculate() {
    var givenNumber = parseInt(document.getElementById('user_number').value);

    for (i = 0; i < givenNumber; i++) {
        numberArray[i] = parseInt(Math.random()*100);
    }
    document.getElementById('the_display').innerHTML = numberArray;
}



function doAv() {
   var total = 0;
    for (i = 0; i < numberArray.length; i++) {
      total+=numberArray[i];
    }


}


