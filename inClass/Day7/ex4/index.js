function focusOnE1() {
  $("#repeated_email").after("<span id='red1'>It must match above</span>");
}
function focusOffE1() {
  $("#red1").remove();
}
$("#repeated_email").on("focus", focusOnE1);
$("#first_name").on("focus", focusOffE1);
