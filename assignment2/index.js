/* mouse over section */
var defaultImg;
$(".coffee_pics")
  .on("mouseenter", function(e) {
    defaultImg = $(e.currentTarget).attr("src");
    $(e.currentTarget).attr("src", $(this).data("nextimage"));
  })
  .on("mouseleave", function(e) {
    $(e.currentTarget).attr("src", defaultImg);
  });
/* End of mouse over section */

$(".coffee_pics").on("click", function(e) {
  var price = $(e.currentTarget).data("price");
  var price1 = parseFloat(price); //price of the item

  var itemInfo = $(e.currentTarget).data("info"); //Name of the item
  $("#order_selected")
    .append("<p class='added_item'></p>")
    .text(itemInfo + " " + price1);
});
