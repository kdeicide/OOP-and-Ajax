function getTarget(e) {
  // Declare function

  return e.target || e.srcElement; // Get the target of event
}

// write the code here

var el = document.getElementById("shoppingList");
el.addEventListener(
  "click",
  function(e) {
    test(e);
  },
  false
);

function test(e) {
  var element = getTarget(e);
  var par = element.parentNode;
  var grandPar = par.parentNode;

  grandPar.removeChild(element);
}
