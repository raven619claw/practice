function hitAPI(){
  var coupons = "NET07";
  $.post("https://pizzaonline.dominos.co.in/redeem/coupon", {coupon_code: coupons})
  .success(function(data){
    console.log("data: " + data );
  })
  .fail(function(data){
    console.log("Sorry! Something Went Wrong");
  });
}
hitAPI();