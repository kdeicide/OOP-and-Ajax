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

/* Click to add the item section and calculation */
var price;
var floatedPrice;
var itemInfo;
var beforeLast;
var total = 0;
$(".coffee_pics").on("click", function calculate (e) {
  price = $(e.currentTarget).data("price");
  floatedPrice = parseFloat(price); //price of the item
  total += floatedPrice;
  totalFixed = total.toFixed(2);
  $(".total_price").text(' $'+totalFixed);

  itemInfo = $(e.currentTarget).data("info"); //Name of the item
  beforeLast = $("li:last-child");

  $("#order_selected");
  beforeLast
    .after("<li class='added_item'></li>")
    .text(itemInfo + " $" + floatedPrice);
});


/* clearing the selected items */
$("#clean").on("click", function() {
  $(".added_item").remove();
  $("#order_selected").append("<li class='added_item'></li>");
  $(".total_price").remove();
  $("#total_h").append("<p class='total_price'></p>");
  total = 0;
});


/* redirecting to ordered page */
$("#submitted").on('click', function () {
  window.location.href =
    "checkout.html";
});