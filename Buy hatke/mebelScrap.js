$ = jQuery.noConflict();
function getCategory(){
  var category = "";
  return category;
}
function sendPairs(){
  arrayToSend = [];
  
  if($('.viewedProductsRightColumn .owl-similar-product').length > 0){
    var slider = $('.viewedProductsRightColumn .owl-similar-product');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var prod = "";
    var image = "";
    var oos = 100;
    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.viewedProductsRightColumn .owl-similar-product:eq('+ i +') .productImage a').length > 0){
        link = $('.viewedProductsRightColumn .owl-similar-product:eq('+ i +') .productImage:eq(0) a:eq(0)').attr('href');
        if(link != ""){
          if(link.split("mebelkart.com").length < 2){
            link = "http://www.mebelkart.com/"+link;
          }
          PID = returnPID(link);
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productImage img').length > 0){
          image = $('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productImage:eq(0) img:eq(0)').attr("data-src");
          
        }
        if($('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productDetail h5').length > 0){
          prod = $('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productDetail h5:eq(0)').text().trim();
        }

        if($('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productDetail .price').length > 0){
          price = $('.viewedProductsRightColumn .owl-similar-product:eq('+ i +')').find('.productDetail .price:eq(0)').text().trim();
          price = filter_price(price);
        }
      }
      if(PID != "" && price != ""  && price != 0 && !isNaN(price)){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends

  }

  if($('.mk-featured-item-block').length > 0){
    var slider = $('.mk-featured-item-block');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var prod = "";
    var image = "";
    var oos = 100;
    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      prod = "";
      image = "";
      oos = 0;
      if($('.mk-featured-item-block:eq('+ i +') .product_img_link').length > 0){
        link = $('.mk-featured-item-block:eq('+ i +') .product_img_link:eq(0)').attr('href');
        if(link != ""){
          if(link.split("mebelkart.com").length < 2){
            link = "http://www.mebelkart.com/"+link;
          }
          PID = returnPID(link);
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.mk-featured-item-block:eq('+ i +')').find('.product_img_link img').length > 0){
          image = $('.mk-featured-item-block:eq('+ i +')').find('.product_img_link:eq(0) img:eq(0)').attr("data-src");
          
        }
        if($('.mk-featured-item-block:eq('+ i +')').find('.product-name').length > 0){
          prod = $('.mk-featured-item-block:eq('+ i +')').find('.product-name:eq(0)').attr('title').trim();
        }
        if($('.mk-featured-item-block:eq('+ i +').sold-out-opaque').length > 0){
          oos = 1;
        }
        if($('.mk-featured-item-block:eq('+ i +')').find('.selling-price').length > 0){
          price = $('.mk-featured-item-block:eq('+ i +')').find('.selling-price:eq(0)').text().trim();
          price = filter_price(price);
        }
      }
      if(PID != "" && price != "" && !isNaN(price)){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends

  }
  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsMebel': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}


function sendCurrent(){
  curData = [];   
  var prod = getProd();
  var image = getImage();
  var myPrice = getPrice();
  var PID = getPID();
  var cur_url = "";
  var current_status = 0;
  var avail = getAvailability();
  if(avail == 1){
    current_status = 0;
  }
  else if(avail == 0){
    current_status = 1;
  }
  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataMebel': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#wishlist_button').length > 0 || $('#pincode_block').length > 0){
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

var check_prod_pg = 1;

function getProd(){
  var prod = "";
  if($('.product-detail').length > 0){
    prod = $('.product-detail:eq(0) .product-name-header:eq(0)').text().trim();
    prod = prod.split("   ").join("").trim();
  }
  if($('#wishlist_button').length > 0 || $('#pincode_block').length > 0){
    return prod;
  }
  else{
    return "";
  }
}

function getImage(){
  var image = "";
  var image1 = "";
  if($('#product-big-img .product-img').length > 0){
    image = $('#product-big-img .product-img:eq(0)').attr('data-src');
  }
  return image;
}

function getPrice(){
  price = "";
  if($('#our_price_display').length > 0)
  {
    price = $('#our_price_display').text().trim();
    price = filter_price(price);
  }
  return price;
}

function getAvailability(){
  var avail = 1;
  var price = getPrice();
  if($(".not-available").length > 0 && price == ""){
    avail = 0;
  }
  return avail;

}
function getPID(){

  var link = window.location.href;
  //console.log("link: "+link);
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];

  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];

  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];

  }
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];
    if(pid.split("/").length > 1){
      pid = pid.split("/");
      pid = pid[pid.length - 1];

    }
    if(pid.split("-").length > 1){
      pid = pid.split("-")[0];
    }

  }
  else{
    pid = "";
  }
  return pid;
}

function returnPID(link){

  var pid = link;
  if(link == ""){
    pid = 0;
  }
  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];
  }
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];
    if(pid.split("/").length > 1){
      pid = pid.split("/");
      pid = pid[pid.length - 1];

    }
    if(pid.split("-").length > 1){
      pid = pid.split("-")[0];
    }

  }
  else{
    pid = "";
  }
  if(link.split('mebelkart.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  return pid;



}

function getBreadCrumb(){
  var breadcrumb = "";
  var bread_final = "";
  if($('.breadcrumbs').length > 0){
    var len_bread = $('.breadcrumbs').find('a').length;

    for(i=0;i<len_bread;i++){
      breadcrumb = $('.breadcrumbs').find('a:eq('+ i +')').text().trim();
      bread_final += breadcrumb + "*~";
    }
  }
  return bread_final;
}
