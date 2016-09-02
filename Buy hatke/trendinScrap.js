$ = jQuery.noConflict();
//avail (1 = available, 0 = oos, -1 = permanently disconnected )
function getCategory(){
  var categories = getBreadCrumb();
  var index = 2;
  var category = "";
  if(categories != "" && categories != undefined){
    categories = categories.split("*~");
    category = categories[index];
  }
  return category;
}
function sendPairs(){
  arrayToSend = [];

  $ = jQuery.noConflict();

  if($('.ca-item-main').length > 0){
    var slider = $('.ca-item-main');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.ca-item-main:eq('+ i +') a').length > 0){
        link = $('.ca-item-main:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          if(link.split(".htm").length > 1){
            link = link.split(".htm");
            PID = link[0];
          }
          if(PID.split("-").length > 1){
            PID = PID.split("-");
            PID = PID[PID.length - 1];
          }
        }
        else{
          PID = "";
        }
      }


      if(PID != ""){

        if($('.ca-item-main:eq('+ i +')').find('.price').length > 0){
          price = $('.ca-item-main:eq('+ i +')').find('.price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }
        }
        else{
          price = "";
        }
        price =price.split(",").join("").trim();


      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }
    } // for ends1

  }

  if($('.product_wrap').length > 0){
    var slider = $('.product_wrap');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.product_wrap:eq('+ i +') a').length > 0){
        link = $('.product_wrap:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          if(link.split(".htm").length > 1){
            link = link.split(".htm");
            PID = link[0];
          }
          if(PID.split("-").length > 1){
            PID = PID.split("-");
            PID = PID[PID.length - 1];
          }
        }
        else{
          PID = "";
        }
      }


      if(PID != ""){

        if($('.product_wrap:eq('+ i +')').find('.off_price').length > 0){
          price = $('.product_wrap:eq('+ i +')').find('.off_price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }
        }
        else{
          price = "";
        }
        price =price.split(",").join("").trim();


      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }
    } // for ends1

  }

  if($('.product_list li').length > 0){
    var slider = $('.product_list li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.product_list li:eq('+ i +') a').length > 0){
        link = $('.product_list li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          if(link.split(".htm").length > 1){
            link = link.split(".htm");
            PID = link[0];
          }
          if(PID.split("-").length > 1){
            PID = PID.split("-");
            PID = PID[PID.length - 1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){

        if($('.product_list li:eq('+ i +')').find('.price').length > 0){
          price = $('.product_list li:eq('+ i +')').find('.price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }
        }
        else{
          price = "";
        }
        price =price.split(",").join("").trim();
        

      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }
    } // for ends1

  }


  if($('.slide_block').length > 0){
    var slider = $('.slide_block');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.slide_block:eq('+ i +') a').length > 0){
        link = $('.slide_block:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          if(link.split(".htm").length > 1){
            link = link.split(".htm");
            PID = link[0];
          }
          if(PID.split("-").length > 1){
            PID = PID.split("-");
            PID = PID[PID.length - 1];
          }
        }
        else{
          PID = "";
        }
      }
      

      if(PID != ""){

        if($('.slide_block:eq('+ i +')').find('.price').length > 0){
          price = $('.slide_block:eq('+ i +')').find('.price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }
        }
        else{
          price = "";
        }
        price =price.split(",").join("").trim();
        

      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }
    } // for ends1

  }

  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsTrendin': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  

}


function sendCurrent(){
  $ = jQuery.noConflict();
  curData = [];   
  var prod = "";
  var image = "";
  var myPrice = "";
  var PID = "";
  var cur_url = "";
  var current_status = 0;
  
  prod = getProd();
  if($('.out_stock_container').length > 0){
    current_status = 1;
  }
  if(current_status == 0){
    myPrice = getPrice();
  }
  else{
    myPrice = "0";
  }
  image = $('meta[property="og:image"]').attr('content').trim();
  var link = window.location.href;

  if(link != ""){
    if(link.split(".htm").length > 1){
      link = link.split(".htm");
      PID = link[0];
    }
    if(PID.split("-").length > 1){
      PID = PID.split("-");
      PID = PID[PID.length - 1];
    }
  }
  else{
    PID = "";
  }

  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataTrendin': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#product_detail_wrapper').length>0 || $(".product_main_info").length > 0 || $(".product_detail_view").length > 0){
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

var check_prod_pg = 1;

function getProd(){
  $ = jQuery.noConflict();
  
  var prod = "";
  prod = $('.product_rhs_col').find('h2').text().trim();
  if(prod == ""){
    if($(".product_main_info").length > 0){
      prod = $(".product_main_info").find('h2').text().trim();
    }
    else if($(".product_detail_view .product_title_row").length > 0){
      prod = $(".product_detail_view .product_title_row").find("h4").text().trim();
      if($(".product_detail_view .product_title_row").find("h5").length > 0){
        prod = $(".product_detail_view .product_title_row").find("h5").text().trim() + " " + prod;
      }
      prod = prod.trim();
    }
  }

  if($('#product_detail_wrapper').length>0 || $(".product_main_info").length > 0 || $(".product_detail_view").length > 0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  $ = jQuery.noConflict();
  
  var image = "";
  image = $('meta[property="og:image"]').attr('content').trim();
  return image;
}

function getPrice(){
  $ = jQuery.noConflict();
  
  price = "";
  myPrice = "";
  if($("#old_price_display").length > 0)
  {
    myPrice = $('#our_price_display').text().trim();
    myPrice = filter_price(myPrice);
  }
  else if($('.price .our_price_display').length > 0)
  {
    myPrice = $('.price .our_price_display').text().trim();
    myPrice = filter_price(myPrice);
  }
  else if($('.price_block').length > 0){
    myPrice = $('.price_block').find('h1').text().trim();
    myPrice = filter_price(myPrice);
  }
  else
  {
    myPrice = $('.price .our_price_display').text().trim();
    myPrice = filter_price(myPrice);
  }
  if(myPrice == "" || myPrice == 0 || isNaN(myPrice) || myPrice == undefined){
    if($('#divProductPriceBlock h1').length > 0){
      myPrice = $('#divProductPriceBlock').find('h1:eq(0)').text().trim();
      myPrice = filter_price(myPrice);
    }
  }
  price = myPrice;
  return price;
}

function getAvailability(){
  $ = jQuery.noConflict();
  
  var avail = 1;
  if($('.out_stock_container').length > 0){
    avail = 0;
  }
  return avail;
}
function getPID(){
  $ = jQuery.noConflict();
  

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
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];

  }
  if(pid.split("-").length > 1){
    pid = pid.split("-");
    pid =pid[pid.length - 1];

  }
  return pid;



}

function returnPID(link){
  $ = jQuery.noConflict();
  

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
  // if(pid.split(".htm").length > 1){
  //   pid = pid.split(".htm")[0];

  // }
  // if(pid.split("-").length > 1){
  //   pid = pid.split("-");
  //   pid = pid[pid.length - 1];

  // }
  if(link.split('trendin.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  
  return pid;



}


function getBreadCrumb(){
  $ = jQuery.noConflict();
  
  var breadcrumb = "";
  var bread_final = "";
  var len_bread = $('.breadcrumb').find('a').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('.breadcrumb').find('a:eq('+ i +')').text().trim();
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
  var couponAt = 431;
  couponUrl = "http://www.trendin.com/";
  couponCode = "";
  couponText = "";
  couponDesc = "";

  slider = "";
  sliderLength = 0;

  slider = $(".offers_header .offer_col");
  sliderLength = slider.length;

  for(i=0;i<sliderLength;i++){
    couponUrl = "http://www.trendin.com/";
    couponCode = "NO CODE REQUIRED";
    couponText = "";
    couponDesc = "";
    
    couponUrl = $(".offers_header .offer_col:eq("+i+") a:eq(0)").attr('href').trim();
    if(couponUrl.split("?").length > 1){
      couponUrl = couponUrl.split("?");
      couponUrl = couponUrl[0].trim();
    }
    couponText = $(".offers_header .offer_col:eq("+i+") a:eq(0)").text().trim();
    if($(".offers_header .offer_col:eq("+i+") a").length > 1){
      couponText = couponText + " " +$(".offers_header .offer_col:eq("+i+") a:eq(1)").text().trim();
    }
    
    if(couponCode != ""){
      couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
    }
  }

  slider = "";
  sliderLength = 0;

  slider = $("#demo li");
  sliderLength = slider.length;

  for(i=0;i<sliderLength;i++){
    couponUrl = "http://prettysecrets.com/";
    couponCode = "NO CODE REQUIRED";
    couponCode1 = "";
    couponText = "";
    couponText1 = "";
    couponText2 = "";
    couponDesc = "";
    couponUrl = $("#demo li:eq("+i+") a:eq(0)").attr("href");

    if(couponUrl.split("?").length > 1){
      couponUrl = couponUrl.split("?");
      couponUrl = couponUrl[0].trim();
    }

    couponText1 = $("#demo li:eq("+i+")").attr("data-thumb");

    if(couponText1.split(">").length > 1){
      couponText1 = couponText1.split(">");
      
      for(j=1;j<couponText1.length;j++){
        couponText2 = couponText1[j].trim();
        couponText2 = couponText2.split("<");
        couponText2 = couponText2[0].trim();
        couponText += couponText2 + " "; 
        console.log(couponText);
      }
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
