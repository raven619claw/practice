$ = jQuery.noConflict();
function getCategory(){
  var category = "";
  return category;
}
function sendPairs(){
  arrayToSend = [];

  if($('.designs:eq(0) li').length > 0){
    var slider = $('.designs:eq(0) li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.designs:eq(0) li:eq('+ i +') a').length > 0){
        link = $('.designs:eq(0) li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("?design=").length < 2){
            PID = PID.split("?")[0];
          }
        }
        else{
          PID = "";
        }

        if(PID != ""){

          if($('.designs:eq(0) li:eq('+ i +') a').find('.description_wrap .price').length > 0){
            price = $('.designs:eq(0) li:eq('+ i +') a:eq(0)').find('.description_wrap .price').text();
            if(price.split("INR").length > 1){
              price = price.split("INR");
              price =price[1];
            }
            if(price.split("nbsp;").length > 1){
              price = price.split("nbsp;");
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
        price = filter_price(price);
        if(isNaN(price)){
          price = "";
        }
        if(PID != "" && price != ""){
          arrayToSend.push([PID, price]);
        }
      }
    } // for ends1

  }

  if($('.products-grid .item').length > 0){
    var slider = $('.products-grid .item');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.products-grid .item:eq('+ i +') a').length > 0){
        link = $('.products-grid .item:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("?design=").length < 2){
            PID = PID.split("?")[0];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.products-grid .item:eq('+ i +')').find('.special-price').length > 0){

          price = $('.products-grid .item:eq('+ i +')').find('.special-price .price').text();

        }
        else if($('.products-grid .item:eq('+ i +')').find('.regular-price').length > 0){
          price = $('.products-grid .item:eq('+ i +')').find('.regular-price .price').text();

        }
        else if($('.products-grid .item:eq('+ i +')').find('.price').length > 0){
          price = $('.products-grid .item:eq('+ i +')').find('.price').text();

        }
        else{
          price = "";
        }
        if(price.split("INR").length > 1){
          price = price.split("INR");
          price =price[1];
        }
        if(price.split("nbsp;").length > 1){
          price = price.split("nbsp;");
          price =price[1];
        }
        
        price = price.split(",").join("").trim();


      }
      else{
        price = "";
      }
      price = filter_price(price);
      if(isNaN(price)){
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  if($('.people_bought li').length > 0){
    var slider = $('.people_bought li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.people_bought li:eq('+ i +') a').length > 0){
        link = $('.people_bought li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;

          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("?design=").length < 2){
            PID = PID.split("?")[0];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){

        if($('.people_bought li:eq('+ i +')').find('.special-price').length > 0){

          price = $('.people_bought li:eq('+ i +')').find('.special-price .price').text();

        }
        else if($('.people_bought li:eq('+ i +')').find('.regular-price').length > 0){
          price = $('.people_bought li:eq('+ i +')').find('.regular-price .price').text();

        }
        else if($('.people_bought li:eq('+ i +')').find('.price').length > 0){
          price = $('.people_bought li:eq('+ i +')').find('.price').text();

        }
        else{
          price = "";
        }
        if(price.split("INR").length > 1){
          price = price.split("INR");
          price =price[1];
        }
        if(price.split("nbsp;").length > 1){
          price = price.split("nbsp;");
          price =price[1];
        }
        
        price = price.split(",").join("").trim();



      }
      else{
        price = "";
      }
      price = filter_price(price);
      if(isNaN(price)){
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  if($('.you_also_like li').length > 0){
    var slider = $('.you_also_like li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.you_also_like li:eq('+ i +') a').length > 0){
        link = $('.you_also_like li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;

          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("?design=").length < 2){
            PID = PID.split("?")[0];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){

        if($('.you_also_like li:eq('+ i +')').find('.special-price').length > 0){

          price = $('.you_also_like li:eq('+ i +')').find('.special-price .price').text();

        }
        else if($('.you_also_like li:eq('+ i +')').find('.regular-price').length > 0){
          price = $('.you_also_like li:eq('+ i +')').find('.regular-price .price').text();

        }
        else if($('.you_also_like li:eq('+ i +')').find('.price').length > 0){
          price = $('.you_also_like li:eq('+ i +')').find('.price').text();

        }
        else{
          price = "";
        }
        if(price.split("INR").length > 1){
          price = price.split("INR");
          price =price[1];
        }
        if(price.split("nbsp;").length > 1){
          price = price.split("nbsp;");
          price =price[1];
        }
        
        price = price.split(",").join("").trim();
      }
      else{
        price = "";
      }
      price = filter_price(price);
      if(isNaN(price)){
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  if($('.store_product_grid li').length > 0){
    var slider = $('.store_product_grid li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.store_product_grid li:eq('+ i +') a').length > 0){
        link = $('.store_product_grid li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;

          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("?design=").length < 2){
            PID = PID.split("?")[0];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){

        if($('.store_product_grid li:eq('+ i +')').find('.special-price').length > 0){

          price = $('.store_product_grid li:eq('+ i +')').find('.special-price .price').text();

        }
        else if($('.store_product_grid li:eq('+ i +')').find('.regular-price').length > 0){
          price = $('.store_product_grid li:eq('+ i +')').find('.regular-price .price').text();

        }
        else if($('.store_product_grid li:eq('+ i +')').find('.price').length > 0){
          price = $('.store_product_grid li:eq('+ i +')').find('.price').text();

        }
        else{
          price = "";
        }
        if(price.split("INR").length > 1){
          price = price.split("INR");
          price =price[1];
        }
        if(price.split("nbsp;").length > 1){
          price = price.split("nbsp;");
          price =price[1];
        }
        if(price.split("/").length > 1){
          price = price.split("/");
          price = price[0].trim();
        }

        
        price = price.split(",").join("").trim();



      }
      else{
        price = "";
      }
      price = filter_price(price);
      if(isNaN(price)){
        price = "";
      }
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsFree': arrayToSend}];
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

  if($('.breadcrumbs .product strong').length > 0){
    prod = $('.breadcrumbs .product strong:eq(0)').text().trim();
  }
  else if($('.product-view .product-name h1').length > 0){
    prod = $('.product-view .product-name h1').text().trim();
  }
  else if($('.product-view .product-name h2').length > 0){
    prod = $('.product-view .product-name h2').text().trim();

  }
  if($("#size").length > 0){
    size = $("#size").find("li").length;
  }
  if($('.notfound404_bg').length > 0){
    current_status = 1;
  }
  else if(($("#add_to_cart_button").length > 0) && ($("#add_to_cart_button").css("display") == "none")){
    current_status = 1;
  }

  else if(($("#size").length > 0) && ($("#size").find(".sold").length == size)){
    current_status = 1;
  }

  else if(($("#notify_me_button").length > 0) && ($("#notify_me_button").css("display") != "none")){
    current_status = 1;
  }
  else{
    current_status = 0;
  }
  if(current_status == 0){
    if($(".product-shop .special-price").length > 0){
      myPrice = $('.product-shop .special-price .price').text().trim();
    }
    else if($('.product-shop .price').length > 0)
    {
      myPrice = $('.product-shop .price').text().trim();
    }
    if($('.product-view .add-to-box-price').length>0){
      myPrice = $('.product-view .add-to-box-price').text().trim();
    }
    myPrice = filter_price(myPrice);
  }
  else{
    myPrice = "0";
  }
  image = $('.product-img-box img').attr('src');
  var link = window.location.href;
  if(link != ""){
    PID = link;
    
    if(PID.split("#").length > 1){
      PID = PID.split("#");
      PID = PID[0];
    }
    if(PID.split("?design=").length < 2){
      PID = PID.split("?")[0];
    }
  }
  else{
    PID = "";
  }


  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataFree': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('.product-view').length > 0){
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
  if($('.breadcrumbs .product strong').length > 0){
    prod = $('.breadcrumbs .product strong:eq(0)').text().trim();
  }
  else if($('.product-view .product-name h1').length > 0){
    prod = $('.product-view .product-name h1').text().trim();
  }
  else if($('.product-view .product-name h2').length > 0){
    prod = $('.product-view .product-name h2').text().trim();

  }
  if($('.product-view').length > 0){
    return prod;
  }
  else{
    return "";
  }
}

function getImage(){
  var image = "";

  image = $('.product-img-box img').attr('src');
  
  return image;
}

function getPrice(){
  price = "";
  if($(".product-shop .special-price").length > 0){
    price = $('.product-shop .special-price .price').text().trim();
  }
  else if($('.product-shop .price').length > 0)
  {
    price = $('.product-shop .price').text().trim();
  }
  if($('.product-view .add-to-box-price').length>0){
    price = $('.product-view .add-to-box-price').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.notfound404_bg').length > 0){
    avail = 0;
  }

  else if(($("#add_to_cart_button").length > 0) && ($("#add_to_cart_button").css("display") == "none")){
    avail = 0;
  }

  else if(($("#size").length > 0) && ($("#size").find(".sold").length == size)){
    avail = 0;
  }

  else if(($("#notify_me_button").length > 0) && ($("#notify_me_button").css("display") != "none")){
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
  if(pid.split("?design=").length < 2){
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
  if(pid.split("?design=").length < 2){
    pid = pid.split("?")[0];
  }
  if(link.split('freecultr.com').length < 2){
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
    if((breadcrumb.split(">").length < 2) && (breadcrumb != "")){
      bread_final += breadcrumb + "*~";

    }
  }

  return bread_final;


}