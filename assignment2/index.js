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

$(".coffee_list").on("click", function(e) {
  price = $(e.currentTarget).val();
  price1 = price / 100;
  alert(price1);
});
