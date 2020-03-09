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

/* Click to add the item section */
var price;
var floatedPrice;
var itemInfo;
var beforeLast;
var total = 0;
$(".coffee_pics").on("click", function(e) {
  price = $(e.currentTarget).data("price");
  floatedPrice = parseFloat(price); //price of the item
  total += price;

  $(".total_price").text(total);
  itemInfo = $(e.currentTarget).data("info"); //Name of the item
  beforeLast = $("li:last-child");

  $("#order_selected");
  beforeLast
    .after("<li class='added_item'></li>")
    .text(itemInfo + " $" + floatedPrice);
});
