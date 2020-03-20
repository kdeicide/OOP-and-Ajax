/* On load seation */
$(document).ready(function() {
  $("#page p").text("Koorosh Goodarzi");
});

/* adding the movie section */
function addMovie() {
  var movieName = $("#itemDescription").val();
  if (movieName) {
    var beforeLast = $("li:last-child");
    beforeLast.after("<li></li>");
    var last = $("li:last-child");
    last.text(movieName);
    $("#itemDescription").val("");
  } else {
    alert("Pleas add a name of a movie");
  }
}

/* mouse over on the title section */
function mouseEnter(e) {
  $(e.currentTarget)
    .css("padding-left", "80px")
    .css("font-size", "+=1em");
}

function mouseLeft(e) {
  $(e.currentTarget)
    .css("padding-left", "")
    .css("font-size", "");
}
/* removing the item section */
function removeElement(e) {
  $(e.currentTarget).remove();
}

/* Event listiners */
$("li").on("click", removeElement);
$("li").on("mouseenter", mouseEnter);
$("li").on("mouseleave", mouseLeft);
$("input:eq(1)").on("click", addMovie);


