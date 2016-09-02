$ = jQuery.noConflict();
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

  if($('#relatedProducts td').length > 0){
    var slider = $('#relatedProducts td');
    var sliderLength = slider.length;
    var link;
    var price;
    var prod = "";
    var image = "";
    var oos = 100;
    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      prod = "";
      image = "";
      oos = 100;
      if($('#relatedProducts td:eq('+ i +') a').length > 0){
        link = $('#relatedProducts td:eq('+ i +') a:eq(0)').attr('href');
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
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0];
          }
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){

        if($('#relatedProducts td:eq('+ i +')').find('.product-name').length > 0){
          prod = $('#relatedProducts td:eq('+ i +')').find('.product-name:eq(0)').text().trim();
        }
        if($('#relatedProducts td:eq('+ i +')').find('.product-image1 img').length > 0){
          image = $('#relatedProducts td:eq('+ i +')').find('.product-image1 img:eq(0)').attr("src").trim();
        }
        if($('#relatedProducts td:eq('+ i +')').find('.special-price .price').length > 0){
          price = $('#relatedProducts td:eq('+ i +')').find('.special-price .price:eq(0)').text();
          price = filter_price(price);
        }
        if($('#relatedProducts td:eq('+ i +')').find('.special-price .price').length > 0){
          price = $('#relatedProducts td:eq('+ i +')').find('.special-price .price:eq(0)').text();
          price = filter_price(price);
        }
        else if($('#relatedProducts td:eq('+ i +')').find('.regular-price .price').length > 0){
          price = $('#relatedProducts td:eq('+ i +')').find('.regular-price .price:eq(0)').text();
          price = filter_price(price);
        }
        else if($('#relatedProducts td:eq('+ i +')').find('.price').length > 0){
          price = $('#relatedProducts td:eq('+ i +')').find('.price:eq(0)').text();
          price = filter_price(price);
        }
      }

      else{
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

      } // for ends
    }

    if($('#product_grid_container td').length > 0){
      var slider = $('#product_grid_container td');
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
        if($('#product_grid_container td:eq('+ i +') a').length > 0){
          link = $('#product_grid_container td:eq('+ i +') a:eq(0)').attr('href');
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
          }
          else{
            PID = "";
          }


        }
        if(PID != ""){
         if($('#product_grid_container td:eq('+ i +')').find('.product-name').length > 0){
          prod = $('#product_grid_container td:eq('+ i +')').find('.product-name:eq(0)').text().trim();
        }
        if($('#product_grid_container td:eq('+ i +')').find('.product-image img').length > 0){
          image = $('#product_grid_container td:eq('+ i +')').find('.product-image img:eq(0)').attr("data-original").trim();
        }

        if($('#product_grid_container td:eq('+ i +')').find('.price-box .special-price .price').length > 0){
          price = $('#product_grid_container td:eq('+ i +')').find('.price-box .special-price .price').text();
          price = filter_price(price);
        }
        else if($('#product_grid_container td:eq('+ i +')').find('.price-box .regular-price .price').length > 0){
          price = $('#product_grid_container td:eq('+ i +')').find('.price-box .regular-price .price').text();
          price = filter_price(price);

        }
        else if($('#relatedProducts .price-box:eq('+ i +')').find('.price').length > 0){
          price = $('#relatedProducts .price-box:eq('+ i +')').find('.price:eq(0)').text();
          price = filter_price(price);
        }
      }
      else{
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

      } // for ends
    }
    arrayToSend = JSON.stringify(arrayToSend);
    var jsonArr = [{'pairsPrettySecrets': arrayToSend}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(0, jsonArr, 0, doNothing, []);  
  }

  function sendCurrent(){
    curData = [];   
    var prod = "";
    var image = "";
    var myPrice = "";
    var PID = "";
    var cur_url = "";
    var current_status = 0;
    
    if($('#product-info h1').length > 0){
      prod = $('#product-info h1:eq(0)').text().trim();
    }
    if($('.out-of-stock').length > 0){
      current_status = 1;
    }
    else{
      current_status = 0;
    }
    if(current_status == 0){
     if($("#product-info .price-box .special_price").length > 0)
     {
      myPrice = $('#product-info .price-box .special_price').find('.price:eq(0)').text().trim();
    }
    else if($("#product-info .price-box .special-price").length > 0)
    {
      myPrice = $('#product-info .price-box .special-price').find('.price:eq(0)').text().trim();
    }
    else if($('#product-info .price-box .regular-price').length > 0)
    {
      myPrice = $('#product-info .price-box .regular-price').find('.price:eq(0)').text().trim();
    }
    else if($('#product-info .price-box').length > 0)
    {
      myPrice = $('#product-info .price-box').find('.price:eq(0)').text().trim();
    }
    myPrice = filter_price(myPrice);
  }
  else{
    myPrice = "0";
  }
  if($('#product-media #wrap').length > 0){
    image = $('#product-media #wrap img').attr('src').trim();
  }
  var link = window.location.href;
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
    if(PID.split("&").length > 1){
      PID = PID.split("&");
      PID = PID[0];
    }
  }
  else{
    PID = "";
  }


  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataPrettySecrets': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#product-header').length>0){
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
  if($('#product-header h1').length > 0){
    prod = $('#product-header h1:eq(0)').text().trim();
  }
  if($('#product-header').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  if($('#product-media #wrap').length > 0){
    image = $('#product-media #wrap img').attr('src').trim();
  }
  return image;
}

function getPrice(){
  price = "";
  if($("#product-info .price-box .special_price").length > 0)
  {
    price = $('#product-info .price-box .special_price').find('.price:eq(0)').text().trim();
  }
  else if($("#product-info .price-box .special-price").length > 0)
  {
    price = $('#product-info .price-box .special-price').find('.price:eq(0)').text().trim();
  }
  else if($('#product-info .price-box .regular-price').length > 0)
  {
    price = $('#product-info .price-box .regular-price').find('.price:eq(0)').text().trim();
  }
  else if($('#product-info .price-box').length > 0)
  {
    price = $('#product-info .price-box').find('.price:eq(0)').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.out-of-stock').length > 0){
    avail = 0;
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
  return pid;
}

function returnPID(link){

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
  if(link.split('prettysecrets.com').length < 2){
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
  var len_bread = $('.breadcrumbs').find('a').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('.breadcrumbs').find('a:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }

  return bread_final;


}


function sendCoupon(){
  $ = jQuery.noConflict();
  couponToSend = [];
  var cur_link = window.location.href;
  var couponUrl = "";
  var couponCode = "";
  var couponText = "";
  var couponDesc = "";
  var couponExp = 0;
  var couponAt = 433;
  couponUrl = "http://prettysecrets.com/";
  couponCode = "";
  couponText = "";
  couponDesc = "";


  if($(".success-msg li").length > 0){
   couponUrl = "http://prettysecrets.com/";
   couponCode = "";
   couponCode1 = "";
   couponText = "";
   couponDesc = "";
   slider = "";
   sliderLength = 0;

   slider = $(".success-msg li");
   sliderLength = slider.length;

   for(i=0;i<sliderLength;i++){
    couponUrl = "http://prettysecrets.com/";
    couponCode = "";
    couponCode1 = "";
    couponText = "";
    couponDesc = "";
    
    couponCode1 = $(".success-msg li:eq("+i+")").text().trim();

    if(couponCode1.split("code ").length > 1){
      couponCode = couponCode1.split("code ");
      couponCode = couponCode[1].trim();

      if(couponCode.split(" ").length > 1){
        couponCode = couponCode.split(" ");
        couponCode = couponCode[0].trim();
      }

      if(couponCode.split(".").length > 1){
        couponCode = couponCode.split(".");
        couponCode = couponCode[0].trim();
      }

      if(couponCode.split("'").length > 1){
        couponCode = couponCode.split("'");
        couponCode = couponCode[1].trim();
      }
      if(couponCode.split('"').length > 1){
        couponCode = couponCode.split('"');
        couponCode = couponCode[1].trim();
      }
    }

    if(couponCode != couponCode.toUpperCase() && couponCode.length > 3){
      couponCode = "";
    }

    if(couponCode != ""){
      couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
    }
  }

}

if($(".ui-dialog-content").length > 0){
 couponUrl = "http://prettysecrets.com/";
 couponCode = "";
 couponText = "";
 couponDesc = "";
 couponText = $(".ui-dialog-content span:eq(0)").text().trim();
 couponDesc = $(".ui-dialog-content li:eq(0)").text().trim();
 couponDesc = couponDesc + " " + $(".ui-dialog-content li:eq(1)").text().trim();
 couponDesc = couponDesc + " " + $(".ui-dialog-content li:eq(2)").text().trim();

 if(couponDesc.split("code ").length > 1){
  couponCode = couponDesc.split("code ");
  couponCode = couponCode[1].trim();

  if(couponCode.split(" ").length > 1){
    couponCode = couponCode.split(" ");
    couponCode = couponCode[0].trim();
  }

  if(couponCode.split(".").length > 1){
    couponCode = couponCode.split(".");
    couponCode = couponCode[0].trim();
  }

  if(couponCode.split("'").length > 1){
    couponCode = couponCode.split("'");
    couponCode = couponCode[1].trim();
  }
}

if(couponCode != couponCode.toUpperCase() && couponCode.length > 3){
  couponCode = "";
}

if(couponCode != ""){
  couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
}

}

couponToSend = JSON.stringify(couponToSend);
var jsonArr = [{'couponsExt': couponToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon()
