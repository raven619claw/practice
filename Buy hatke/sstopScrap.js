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

  if($('.pro-box').length > 0){
    var slider = $('.pro-box');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var brand = "";
    var prod = "";
    var image = "";
    var oos = 100;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      brand = "";
      prod = "";
      image = "";
      oos = 100;

      if($('.pro-box:eq('+ i +') a').length > 0){
        link = $('.pro-box:eq('+ i +') a:eq(0)').attr("href");
        if(link.split("shoppersstop.com").length < 2){
          link = "https://www.shoppersstop.com" + link;
        }
        if(link != ""){
          PID = returnPID(link);

        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.pro-box:eq('+ i +')').find('.pro-info .mat-name').length > 0){
          brand = $('.pro-box:eq('+ i +')').find('.pro-info .mat-name:eq(0)').text().trim();
        }
        if($('.pro-box:eq('+ i +')').find('.pro-info .pro-name').length > 0){
          prod = $('.pro-box:eq('+ i +')').find('.pro-info .pro-name:eq(0)').text().trim();
        }
        if(prod != ""){
          prod = brand + prod;
          prod = prod.trim();
        }

        if($('.pro-box:eq('+ i +')').find('.pro-img img').length > 0){
          image = $('.pro-box:eq('+ i +')').find('.pro-img img:eq(0)').attr("src").trim();
        }

        if($('.pro-box:eq('+ i +')').find('.pro-info .price_div').length > 0){
          price = $('.pro-box:eq('+ i +')').find('.pro-info .price_div:eq(0)').text().trim();
          price = filter_price(price);
        }
        else{
          price = "";
        }
        if(isNaN(price)){
          price = 0;
        }
      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends1

  }

  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsShop': arrayToSend}];
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
  prod = getProd();
  image = getImage();
  myPrice = getPrice();
  PID = getPID();
  var avail = getAvailability();
  if(avail == 0){
    current_status = 1;
  }
  
  cur_url = window.location.href;
  var breadcrumbF = getBreadCrumb();
  curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumbF]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataShop': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('.product_details_main').length > 0){
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
  var brand = "";
  if($('.product_description').length > 0){
    if($('.product_description h2').length > 0){
      brand = $('.product_description:eq(0) h2:eq(0)').text().trim();
    }
    if($('.product_description h1').length > 0){
      prod = $('.product_description:eq(0) h1:eq(0)').text().trim();
    }
    prod = brand + " " + prod;
    prod = prod.trim();

  }
  if($('.product_details_main').length > 0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";

  if($('.product_details_main .product_center').length > 0){
    image = $('.product_details_main .product_center img').attr('src');
  }
  if(image.split("ximageComingSoon").length > 1){
    image  = "";
  }
  return image;
}

function getPrice(){
  price = "";
  
  if($(".product_rightside").length > 0){
    price = $('.product_rightside').find('[itemprop="price"]:eq(0)').text().trim();
  }
  price = filter_price(price);

  if(price == "" || price == undefined || price == 0 || isNaN(price)){
    if($(".product_rightside").length > 0){
      price = $('.product_rightside').find('.price_div:eq(1)').text().trim();
    }
    price = filter_price(price);
  }
  if(isNaN(price) == true){
    price = 0;
  }

  return price;
}

function getAvailability(){
  var avail = 1;
  if($(".product_details_main .outOfStock").length > 0 && $("#addToCartButton").length == 0){
    avail = 0;
  }
  return avail;

}
function getPID(){

  var link = window.location.href;
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#");
    pid = pid[0];
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&");
    pid = pid[0];
  }
  if(pid.split("?").length > 1){
    pid = pid.split("?");
    pid = pid[0];
  }
  if(pid.split("/p-").length > 1){
    pid = pid.split("/p-");
    pid = pid[1];

    if(pid.split("/").length > 1){
      pid = pid.split("/");
      pid = pid[0];
    }
  }
  else{
    pid = "";
  }
  return pid;

}

function returnPID(link){

  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#");
    pid = pid[0];
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&");
    pid = pid[0];
  }
  if(pid.split("?").length > 1){
    pid = pid.split("?");
    pid = pid[0];
  }
  if(pid.split("/p-").length > 1){
    pid = pid.split("/p-");
    pid = pid[1];

    if(pid.split("/").length > 1){
      pid = pid.split("/");
      pid = pid[0];
    }
  }
  else{
    pid = "";
  }
  
  if(link.split('shoppersstop.com').length < 2){
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
  var len_bread = $('.breadcrumb').find('li').length;

  for(i=0;i<len_bread - 1;i++){
    span_count = $('.breadcrumb').find('li:eq('+ i +') span').length;
    if(span_count > 1){
      breadcrumb = $('.breadcrumb').find('li:eq('+ i +') span:eq(0)').text().trim();
    }
    else{
      breadcrumb = $('.breadcrumb').find('li:eq('+ i +') a:eq(0)').text().trim();
    }
    bread_final += breadcrumb + "*~";
    bread_final = bread_final.trim();
  }

  return bread_final;


}

