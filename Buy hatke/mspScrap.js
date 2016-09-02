//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;
function getProd(){
  var prod = "";
  prod = $(".dealhead h3:eq(0)").text().trim();
  if(prod.split("@").length > 1){
    prod = prod.split("@")[0].trim();
  }
  else if($('.singlePageTitle').length > 0){
    prod = $('.singlePageTitle').text().trim();
  }
  else{
    prod = $('h1:eq(0)').text().trim();
  }
  if( ($('.dealsinglecont').length > 0) || ($('.singleItemData').length > 0) || ($('.product_topsec').length > 0) ){
    return prod;
  }
  else {
    return "";
  }
}

function getPrice(){
  price = "";
  if($('.dealsnglprice .new').length > 0)
  {
    price = $('.dealsnglprice .new').text().trim();
  }
  else if($('.singleItemData .afterOfferPrice').length > 0){
    price = $('.singleItemData .afterOfferPrice').text().trim();
  }
  else if($('.product_topsec .price_val').length > 0){
    price = $('.product_topsec .price_val').text().trim();
  }
  price = filter_price(price);
  return price;
}

