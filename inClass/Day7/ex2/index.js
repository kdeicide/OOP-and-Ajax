// Adding Items
$("#my_btn").click(function addItem() {
  var $addedElement = $("#add_list").val();
  var beforeLast = $("li:last-child");
  beforeLast.after('<li class="the_item"></li>');
  var last = $("li:last-child");
  last.text($addedElement);
});

// Removing the last
$("#my_btn_remove").click(function deleteItem() {
  var beforeLast = $("li:last-child").remove();
});

//Make the font larger
$("#larger").click(function makeLarger() {
    
  var larger = $(".the_item").css("font-size", "+=2px");
});


