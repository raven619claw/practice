function getCategory(){
  var categories = getBreadCrumb();
  var index = 1;
  var category = "";
  if(categories != "" && categories != undefined){
    categories = categories.split("*~");
    category = categories[index];
  }
  return category;
}

function sendPairs(){
  arrayToSend = [];

  if($('#clipProductList .grid-view').length > 0){
    var slider = $('#clipProductList .grid-view');
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
      if($('#clipProductList .grid-view:eq('+ i +') a').length > 0){
        link = $('#clipProductList .grid-view:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;
          if(PID.split("?").length > 1){
            PID = PID.split("?");
            PID = PID[0];
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split(".com/").length > 1){
            PID = PID.split(".com/");
            PID = PID[1];
          }

        }
        else{
          PID = "";
        }
      }
      else{
        PID = "";
      }

      if(PID != ""){

        if($('#clipProductList .grid-view:eq('+ i +') .card-body-title').length > 0){
          prod = $('#clipProductList .grid-view:eq('+ i +') .card-body-title:eq(0)').text().trim();
        }
        if($('#clipProductList .grid-view:eq('+ i +') .card-header-img img').attr('data-src')){
          image = $('#clipProductList .grid-view:eq('+ i +') .card-header-img:eq(0) img:eq(0)').attr('data-src').trim();
        }
        else if($('#clipProductList .grid-view:eq('+ i +') .card-header-img img').attr('src')){
          image = $('#clipProductList .grid-view:eq('+ i +') .card-header-img:eq(0) img:eq(0)').attr('src').trim();
        }

        if(image.split("grey.gif").length > 1){
          image = "";
        }

        if($('#clipProductList .grid-view:eq('+ i +') .card-body-price.txt-red').length > 0){
          price = $('#clipProductList .grid-view:eq('+ i +') .card-body-price.txt-red').text().trim();
          price = filter_price(price);
        }
        else{
          price = "";
        }


    } //PID ends

    else{
      price = "";
    }

    if(PID != "" && price != ""){
      arrayToSend.push([PID, price, prod, image, oos]);
    }

    } // for ends1

  }


  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsPepp': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  
}


function sendCurrent(){
  curData = [];   
  var prod = getProd();
  var image = getImage();
  var myPrice = getPrice();
  var cur_url = "";
  var current_status = 0;
  var PID = getPID();
  var link = window.location.href;

  if(getAvailability() == 0){
    current_status = 1;
  }
  cur_url = window.location.href;
  var breadcrumbF = getBreadCrumb();
  curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumbF]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataPepp': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#vip_wrapper').length > 0 || $(".vip-product-content").length > 0){
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;

function getProd(){
  var prod = "";
  if($('[itemprop="name"]').length > 0){
    prod = $('[itemprop="name"]').text().trim();
  }
  else if($('.vip_heading_1').length > 0){
    prod = $('.vip_heading_1').text().trim();
  }
  else if($('.vip-product-title').length > 0){
    prod = $('.vip-product-title:eq(0)').text().trim();
  }

  if($('#vip_wrapper').length > 0 || $(".vip-product-content").length > 0){
    return prod;
  }
  else {
    return "";
  }
  // //console.log("prod: "+prod);
}

function getImage(){
  var image = "";

  if($('meta[property="og:image"]').length > 0){
    image = $('meta[property="og:image"]').attr('content').trim();

  }
  
  return image;
}

function getPrice(){
  price = "";
  if($('#price-val').length > 0){
    price = $('#price-val').text().split(",").join("");
  }
  if(price=="" || price == undefined || price == "undefined"){
    if($('[itemprop="price"]').length > 0){
      price = $('[itemprop="price"]:eq(0)').text().trim();
    }
  }
  
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($(".oos_notify_box").length > 0){
    avail = 0;
  }
  else if($(".out_of_stock_box").length > 0){
    avail = 0;
  }
  else if($(".out-of-stock-box").length > 0){
    avail = 0;
  }
  else if($("#container-img #container-heading img").eq(0).attr("src") == "/img/shucks_img.jpg"){
    avail = -1;
  }
  
  return avail;

}
function getPID(){

  var link = window.location.href;
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
  if(pid.split(".com/").length > 1){
    pid = pid.split(".com/")[1];

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
  if(pid.split(".com/").length > 1){
    pid = pid.split(".com/")[1];

  }
  if(link.split('pepperfry.com').length < 2){
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
  var len_bread = $('.breadcrumb').find('a').length;

  for(i=0;i<len_bread-1;i++){
    breadcrumb = $('.breadcrumb').find('a:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }

  return bread_final;


}

// function sendCoupon(){
//   $ = jQuery.noConflict();
//   couponToSend = [];
//   var cur_link = window.location.href;
//   var couponUrl = "";
//   var couponCode = "";
//   var couponText = "";
//   var couponDesc = "";
//   var couponExp = 0;
//   var couponAt = 333;

//   var breadcrumb = "";
//   var bread_final = [];

//   couponUrl = "http://www.pepperfry.com/";
//   couponCode = "";
//   couponText = "";
//   couponDesc = "";


//   if($('.vip_price .text_2').length > 0){
//     couponCode = $('.vip_price .text_2:eq(0)').text().trim();
//     if(couponCode.split('"').length > 1){
//       couponCode = couponCode.split('"');
//       couponCode = couponCode[1].trim();
//       if(couponCode != couponCode.toUpperCase()){
//         couponCode = "";
//       }
//     }
//     if($(".vip_offer_group span").length > 0){
//       couponText = $(".vip_offer_group:eq(0) span").text().trim();
//     }
//   }

//   if(couponCode != ""){
//     var len_bread = $('.breadcrumb').find('a').length;
//     for(i=0;i<len_bread;i++){
//       breadcrumb = $('.breadcrumb').find('a:eq('+ i +')').text().trim();
//       breadcrumb_url = $('.breadcrumb').find('a:eq('+ i +')').attr('href').trim();
//       if(breadcrumb_url.split("www.pepperfry.com").length < 2){
//         breadcrumb_url = "http://www.pepperfry.com/"+breadcrumb_url;
//       }
//       bread_final.push([encodeURIComponent(couponCode), encodeURIComponent(breadcrumb), encodeURIComponent(breadcrumb_url), encodeURIComponent(cur_link)]);
//     }

//     couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
//   }     
//   couponToSend = JSON.stringify(couponToSend);
//   var jsonArr = [{'couponsExt': couponToSend}];
//   jsonArr = JSON.stringify(jsonArr);
//   sendMessage(1, jsonArr, 15, doNothing, []); 

//   bread_final = JSON.stringify(bread_final);
//   var jsonArr = [{'pepperBread': bread_final}];
//   jsonArr = JSON.stringify(jsonArr);
//   sendMessage(1, jsonArr, 16, doNothing, []); 
// }
// sendCoupon()