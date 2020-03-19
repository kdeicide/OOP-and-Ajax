$(document).ready(function() {
  $("#page p").text("Koorosh Goodarzi");
});

function addMovie() {
  var movieName = $("#itemDescription").val();
  if (movieName) {
    var beforeLast = $("li:last-child");
    beforeLast.after('<li class="the_item"></li>');
    var last = $("li:last-child");
    last.text(movieName);
    $("#itemDescription").val("");
  } else {
    alert("Pleas add a name of a movie");
  }
}

$("input:eq(1)").on("click", addMovie);
