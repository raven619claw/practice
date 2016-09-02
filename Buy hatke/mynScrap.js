function getCategory(){
  var category = "";
  return category;
}
function sendPairs(){
  var arrayToSend = [];

  if(document.getElementsByClassName('product-list-list').length > 0){
    var sideLen = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li').length;
    for(i=0;i<sideLen;i++){
      var price = "";
      var PID = "";
      var prod = "";
      var image = "";
      oos = 100;
      var link = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getAttribute("href");
      var PID = returnPID(link);
      var price = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByClassName('product-item-selling-price')[0].innerText;

      brand = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByClassName('product-item-brand')[0].innerText;
      prod = brand.trim() + " " + document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByClassName('product-item-title')[0].innerText;
      prod = prod.trim();
      image = document.getElementsByClassName('product-list-list')[0].getElementsByTagName('li')[i].getElementsByClassName('product-item-image')[0].getAttribute("src");
      image = image.trim();

      price = price.trim();
      price = price.split("Rs.");
      price = price[price.length-1];
      price = price.trim();

      if(price.split("(").length > 1){
      price = price.split("(");//
        price = price[0].trim();  

      }
      price = price.split(",").join("");
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }
    }
  }


  if(document.getElementsByClassName('results').length > 0){
    var sideLen = document.getElementsByClassName('results')[0].getElementsByTagName('li').length;
    for(i=0;i<sideLen;i++){
      var price = "";
      var PID = "";
      var prod = "";
      var image = "";
      oos = 100;
      var link = document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getAttribute("href");
      var PID = returnPID(link);
      var price = document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getElementsByClassName('price')[0].innerText;

      brand = document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getElementsByClassName('brand')[0].innerText;
      prod = brand.trim() + " " + document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getElementsByClassName('product')[0].innerText;
      prod = prod.trim();
      image = document.getElementsByClassName('results')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].getElementsByTagName('img')[0].getAttribute("_src");
      image = image.trim();

      price = price.trim();
      price = price.split("Rs.");
      price = price[price.length-1];
      price = price.trim();

      if(price.split("(").length > 1){
      price = price.split("(");//
        price = price[0].trim();  

      }
      price = price.split(",").join("");
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }
    }
  }

  // if($('.results li').length > 0){
  //   var slider = $('.results li');
  //   var sliderLength = slider.length;
  //   var link;
  //   var price;
  //   var PID;
  //   var flag;
  //   for(i=0;i<sliderLength;i++){
  //     price = "";
  //     PID = "";
  //     flag = 0;
  //     if($('.results li:eq('+ i +') a').length > 0){
  //       link = $('.results li:eq('+ i +') a:eq(0)').attr('href');
  //       if(link != ""){
  //         if(link.split("/buy").length > 1){
  //           link = link.split("/buy")[0];
  //           if(link.split("/").length > 1){
  //             link = link.split("/");
  //             PID = link[link.length - 1];
  //           }
  //         }
  //         else{
  //           PID = "";
  //         }
  //       }
  //       else{
  //         PID = "";
  //       }
  //     }
  //     if(PID != ""){
  //       if($('.results li:eq('+ i +')').find('.price').length > 0){
  //         price = $('.results li:eq('+ i +')').find('.price').html();
  //         if($('.results li:eq('+ i +')').find('.price .strike').length > 0){
  //           price = price.split("</span>");
  //           price = price[1];
  //           flag = 1;
  //         }
  //         if($('.results li:eq('+ i +')').find('.price .discount').length > 0){
  //           price = price.split("<span");
  //           price = price[0];
  //           flag = 1;
  //         }
  //         if(flag == 0){
  //           price = $('.results li:eq('+ i +')').find('.price').text();
  //         }
  //         if(price.split("Rs.").length > 1){
  //           price = price.split("Rs.");
  //           price = price[1];
  //         }
  //         price = price.split(",").join("").trim();
  //       }
  //     }
  //     else{
  //       price = "";
  //     }
  //     if(PID != "" && price != ""){
  //       arrayToSend.push([PID, price]);
  //     }

  //   } // for ends

  // }

  // if($('.productsCont li').length > 0){
  //   var slider = $('.productsCont li');
  //   var sliderLength = slider.length;
  //   var link;
  //   var price;
  //   var PID;
  //   var flag;
  //   for(i=0;i<sliderLength;i++){
  //     price = "";
  //     PID = "";
  //     flag = 0;
  //     if($('.productsCont li:eq('+ i +') a').length > 0){
  //       link = $('.productsCont li:eq('+ i +') a:eq(0)').attr('href');
  //       if(link != ""){
  //         if(link.split("/buy").length > 1){
  //           link = link.split("/buy")[0];
  //           if(link.split("/").length > 1){
  //             link = link.split("/");
  //             PID = link[link.length -1];
  //           }
  //         }
  //         else{
  //           PID = "";
  //         }
  //       }
  //       else{
  //         PID = "";
  //       }
  //     }
  //     if(PID != ""){
  //       if($('.productsCont li:eq('+ i +')').find('.price').length > 0){
  //         price = $('.productsCont li:eq('+ i +')').find('.price').html();
  //         if($('.productsCont li:eq('+ i +')').find('.price .strike').length > 0){
  //           price = price.split("</span>")[1];
  //           flag = 1;
  //         }
  //         if($('.productsCont li:eq('+ i +')').find('.price .discount').length > 0){
  //           price = price.split("<span")[0];
  //           flag = 1;
  //         }
  //         if(flag == 0){
  //           price = $('.productsCont li:eq('+ i +')').find('.price').text();
  //         }
  //         if(price.split("Rs.").length > 1){
  //           price = price.split("Rs.");
  //           price = price[1];
  //         }
  //         price = price.split(",").join("").trim();
  //       }
  //     }
  //     else{
  //       price = "";
  //     }
  //     if(PID != "" && price != ""){
  //       arrayToSend.push([PID, price]);
  //     }

  //   } // for ends

  // }

  // if($('.alsopopular li').length > 0){
  //   var slider = $('.alsopopular li');
  //   var sliderLength = slider.length;
  //   var link;
  //   var price;
  //   var PID;
  //   var flag;
  //   for(i=0;i<sliderLength;i++){
  //     price = "";
  //     PID = "";
  //     flag = 0;
  //     if($('.alsopopular li:eq('+ i +') a').length > 0){
  //       link = $('.alsopopular li:eq('+ i +') a:eq(0)').attr('href');
  //       if(link != ""){
  //         if(link.split("/buy").length > 1){
  //           link = link.split("/buy")[0];
  //           if(link.split("/").length > 1){
  //             link = link.split("/");
  //             PID = link[link.length -1];
  //           }
  //         }
  //         else{
  //           PID = "";
  //         }
  //       }
  //       else{
  //         PID = "";
  //       }
  //     }
  //     if(PID != ""){
  //       if($('.alsopopular li:eq('+ i +')').find('.price').length > 0){
  //         price = $('.alsopopular li:eq('+ i +')').find('.price').html();
  //         if($('.alsopopular li:eq('+ i +')').find('.price .strike').length > 0){
  //           price = price.split("</span>")[1];
  //           flag = 1;
  //         }
  //         if($('.alsopopular li:eq('+ i +')').find('.price .discount').length > 0){
  //           price = price.split("<span")[0];
  //           flag = 1;
  //         }
  //         if(flag == 0){
  //           price = $('.alsopopular li:eq('+ i +')').find('.price').text();
  //         }
  //         if(price.split("Rs.").length > 1){
  //           price = price.split("Rs.");
  //           price = price[1];
  //         }
  //         price = price.split(",").join("").trim();
  //       }
  //     }
  //     else{
  //       price = "";
  //     }
  //     if(PID != "" && price != ""){
  //       arrayToSend.push([PID, price]);
  //     }

  //   } // for ends

  // }
  // if($('.recentlyviewed li').length > 0){
  //   var slider = $('.recentlyviewed li');
  //   var sliderLength = slider.length;
  //   var link;
  //   var price;
  //   var PID;
  //   var flag;
  //   for(i=0;i<sliderLength;i++){
  //     price = "";
  //     PID = "";
  //     flag = 0;
  //     if($('.recentlyviewed li:eq('+ i +') a').length > 0){
  //       link = $('.recentlyviewed li:eq('+ i +') a:eq(0)').attr('href');
  //       if(link != ""){
  //         if(link.split("/buy").length > 1){
  //           link = link.split("/buy")[0];
  //           if(link.split("/").length > 1){
  //             link = link.split("/");
  //             PID = link[link.length -1];
  //           }
  //         }
  //         else{
  //           PID = "";
  //         }
  //       }
  //       else{
  //         PID = "";
  //       }
  //     }
  //     if(PID != ""){
  //       if($('.recentlyviewed li:eq('+ i +')').find('.price').length > 0){
  //         price = $('.recentlyviewed li:eq('+ i +')').find('.price').html();
  //         if($('.recentlyviewed li:eq('+ i +')').find('.price .strike').length > 0){
  //           price = price.split("</span>")[1];
  //           flag = 1;
  //         }
  //         if($('.recentlyviewed li:eq('+ i +')').find('.price .discount').length > 0){
  //           price = price.split("<span")[0];
  //           flag = 1;
  //         }
  //         if(flag == 0){
  //           price = $('.recentlyviewed li:eq('+ i +')').find('.price').text();
  //         }
  //         if(price.split("Rs.").length > 1){
  //           price = price.split("Rs.");
  //           price = price[1];
  //         }
  //         price = price.split(",").join("").trim();
  //       }
  //     }
  //     else{
  //       price = "";
  //     }
  //     if(PID != "" && price != ""){
  //       arrayToSend.push([PID, price]);
  //     }

  //   } // for ends

  // }
  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsMyn': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  
}

function sendProdCpn(){
  var couponCode = "";
  var couponText = "";
  var couponExp = 0;
  var couponDesc = "";
  var found = 0;
  var couponAt = 111;
  var couponUrl = "http://www.myntra.com/";
  var couponToSend = [];
  var cur_link = window.location.href;
  if($(".allOptions").length > 0 && $(".allOptions ul").length > 0){
    var tot_filters = $(".allOptions ul").length;
    for(var t=0;t<tot_filters;t++){
      if($(".allOptions ul:eq("+t+")").attr("data-filter") == "tag_coupon"){
        for(var i=0;i<$(".allOptions ul:eq("+t+") li").length;i++){
          found = 1;
          couponCode = $(".allOptions ul:eq("+t+") li:eq("+i+")").attr("data-option").trim().toUpperCase();
          couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
        }
      }
    }
  }
  if($(".coupon-wrapper").length > 0 && $(".coupon").length > 0){
    found = 1;
    couponCode = $(".coupon-wrapper .coupon:eq(0) td:eq(1)").text().trim();
    couponText = $(".coupon-wrapper .coupon:eq(0) tr:eq(1)").text().trim();
    console.log("couponCode: "+couponCode);
    if(couponCode.toUpperCase() == couponCode && couponCode != ""){
      couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
    }
  }
  if(couponToSend.length > 0 && found == 1){
    couponToSend = JSON.stringify(couponToSend);
    var jsonArr = [{'couponsExt': couponToSend}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 15, doNothing, []);
  }
  else {
    setTimeout(sendProdCpn, 2000);
  }
}

sendProdCpn();

function sendCurrent(){
  if(document.getElementsByClassName('summary').length>0 || document.getElementsByClassName('pdp-details').length>0){
    curData = [];
    var prod = getProd();
    var image = getImage();
    var myPrice = getPrice();
    var cur_url = "";
    var current_status = 0;
    var breadcrumb_str = getBreadCrumb();
    if(getAvailability() == 0){
      current_status = 1;
    }
    var link = "";
    image = getImage();
    link = window.location.href;
    var PID = returnPID(link);
    cur_url = window.location.href;
    curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumb_str, 1]);
    curData = JSON.stringify(curData);
    var jsonArr = [{'curDataMyn': curData}];
    jsonArr = JSON.stringify(jsonArr);
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
  if(document.getElementsByClassName("pdp-title").length > 0){
    prod = document.getElementsByClassName("pdp-title")[0].innerText.trim();
  }
  else if(document.getElementsByTagName("h1").length > 0){
    prod = document.getElementsByTagName("h1")[0].innerText.trim();
  }
  // //console.log("prod: "+prod);
  if(document.getElementsByClassName('summary').length>0 || document.getElementsByClassName('pdp-details').length>0 ){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  if(document.getElementsByClassName("blowup").length > 0){
    image = document.getElementsByClassName("blowup")[0].getElementsByTagName("img")[0].getAttribute("src");
  }
  else  if(document.getElementsByClassName("pdp-image-container").length > 0){
    image = document.getElementsByClassName("pdp-image-container")[0].getElementsByClassName("thumbnails-selected-image")[0].getAttribute("src");
  }
  return image;
}

function getPrice(){
  price = "";
  if(document.getElementsByClassName("price").length > 0 && document.getElementsByClassName("price")[0].getElementsByClassName("final").length > 0)
  {
    price = document.getElementsByClassName("price")[0].getElementsByClassName("final")[0].innerText;
  }
  else if(document.getElementsByClassName("pdp-selling-price").length > 0 && document.getElementsByClassName("pdp-selling-price")[0].getElementsByClassName("pdp-price").length > 0)
  {
    price = document.getElementsByClassName("pdp-selling-price")[0].getElementsByClassName("pdp-price")[0].innerText.trim();
  }
  
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if(document.getElementsByClassName('oos')[0]){
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
  if(pid.split("/buyhatke/buyhatke").length > 1){
    pid = pid.split("/buyhatke/buyhatke")[1];
  }
  if(pid.split("/buyhatke").length > 1){
    pid = pid.split("/buyhatke")[1];
  }

  if(pid.split("/buy").length > 1){
    pid = pid.split("/buy")[0];
  }

  if(pid.split("/").length > 1){
    pid = pid.split("/");
    pid = pid[pid.length - 1];
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
  if(pid.split("/buyhatke/buyhatke").length > 1){
    pid = pid.split("/buyhatke/buyhatke")[1];
  }
  if(pid.split("/buyhatke").length > 1){
    pid = pid.split("/buyhatke")[1];
  }

  if(pid.split("/buy").length > 1){
    pid = pid.split("/buy")[0];
  }

  if(pid.split("/").length > 1){
    pid = pid.split("/");
    pid = pid[pid.length - 1];
  }
  // if(link.split('myntra.com').length < 2){
  //   pid = 0;
  // }
  if(link == ""){
    pid = 0;
  }
  
  return pid;



}


function getBreadCrumb(){
  var breadcrumb = "";
  var bread_final = "";
  if(document.getElementsByClassName('breadcrumb').length > 0){
    var len_bread = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('a').length;

    for(i=0;i<len_bread;i++){
      breadcrumb = document.getElementsByClassName('breadcrumb')[0].getElementsByTagName('a')[i].innerText.trim();
      bread_final += breadcrumb + "*~";
    }
  }
  else if(document.getElementsByClassName('breadcrumbs-link').length > 0){
    var len_bread = document.getElementsByClassName('breadcrumbs-link').length;

    for(i=0;i<len_bread;i++){
      breadcrumb = document.getElementsByClassName('breadcrumbs-link')[i].innerText.trim();
      bread_final += breadcrumb + "*~";
    }
  }
  return bread_final;
}



