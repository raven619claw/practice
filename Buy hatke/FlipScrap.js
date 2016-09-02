var arrayToSendAPI = [];
var till = 0;
var tillDone = 0;
var ssid = "iuft75d68040gsgk";
var sqid = "qxy2b4yja8gsscck";

function sendPairs(){
  arrayToSend = [];
  if($('._2kSfQ4').length > 0){
    var slider = $('._2kSfQ4');
    var sliderLength = slider.length;
    var link;
    var price = 0;
    var prod = "";
    var image = "";
    var oos = 100;
    var PID;
    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      image = "";
      oos = 100;
      prod = "";
      link = "";
      PID = "";
      if($('._2kSfQ4:eq('+ i +') a').length > 0){
        link = $('._2kSfQ4:eq('+ i +') a:eq(0)').attr('href');
        if(link.split("/p/").length < 2){
          link = "";
        }

        if(link != ""){
          PID = returnPID(link);
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        //price
        if($('._2kSfQ4:eq('+ i +')').find('._2EOB0J').length > 0 && $('._2kSfQ4:eq('+ i +')').find('._2EOB0J ._3RTCM2').length > 0){
          price = $('._2kSfQ4:eq('+ i +')').find('._2EOB0J ._3RTCM2:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        else if($('._2kSfQ4:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('._2kSfQ4:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }
        //image
        // console.log("image1: "+$('._3liAhj:eq('+ i +')').html());
        if($('._2kSfQ4:eq('+ i +')').find('img').attr("src")){
          image = $('._2kSfQ4:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._2kSfQ4:eq('+ i +')').find('img').attr("data-src")){
          image = $('._2kSfQ4:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        // prod
        if($('._2kSfQ4:eq('+ i +')').find('._1Jd8bY').length > 0){
          prod = $('._2kSfQ4:eq('+ i +')').find('._1Jd8bY:eq(0)').text();

        }
        else if($('._2kSfQ4:eq('+ i +')').find('._1ib7_Y').length > 0){
          prod = $('._2kSfQ4:eq('+ i +')').find('._1ib7_Y a:eq(0)').attr("title");

        }

        //oos
        if($('._2kSfQ4:eq('+ i +')').find('._1GJ2ZM').length > 0){
          oos1 = $('._2kSfQ4:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else{
            oos = 0;
          }
        }
        else{
          oos = 0;
        }
        if(PID != "" && price != "" && price != 0){
          arrayToSend.push([PID, price, prod, image, oos]);
        }

    } // for ends

  }
}

if($('._3liAhj').length > 0){
  var slider = $('._3liAhj');
  var sliderLength = slider.length;
  var link;
  var price = 0;
  var prod = "";
  var image = "";
  var oos = 100;
  var PID;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    image = "";
    oos = 100;
    prod = "";
    link = "";
    PID = "";
    if($('._3liAhj:eq('+ i +')').length > 0 && $('._3liAhj:eq('+ i +') a:eq(0)').length > 0){

      link = $('._3liAhj:eq('+ i +') a:eq(0)').attr('href');
      if(link.split("/p/").length < 2){
        link = "";
      }

      if(link != ""){
        PID = returnPID(link);
      }
      else{
        PID = "";
      }
    }
    if(PID != ""){
        //price
        if($('._3liAhj:eq('+ i +')').find('._1vC4OE').length > 0){
          price = $('._3liAhj:eq('+ i +')').find('._1vC4OE:eq(0)').text().trim();
          price = price.split(",").join("").trim();
          price = filter_price(price);

        }

        //image
        // console.log("image2: "+$('._3liAhj:eq('+ i +')').html());
        if($('._3liAhj:eq('+ i +')').find('img').attr("src")){
          image = $('._3liAhj:eq('+ i +')').find('img:eq(0)').attr("src");
        }
        else if($('._3liAhj:eq('+ i +')').find('img').attr("data-src")){
          image = $('._3liAhj:eq('+ i +')').find('img:eq(0)').attr("data-src");
        }
        else{
          image = "";
        }
        // prod
        if($('._3liAhj:eq('+ i +')').find('._2cLu-l').length > 0){
          prod = $('._3liAhj:eq('+ i +')').find('._2cLu-l:eq(0)').attr("title");

        }
        //oos
        if($('._3liAhj:eq('+ i +')').find('._1GJ2ZM').length > 0){
          oos1 = $('._3liAhj:eq('+ i +')').find('._1GJ2ZM:eq(0)').text();
          if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
            oos = 1;
          }
          else{
            oos = 0
          }
        }
        else{
          oos = 0;
        }
        if(PID != "" && price != "" && price != 0){
          arrayToSend.push([PID, price, prod, image, oos]);
        }

    } // for ends

  }
}
var slider = $('.product-unit');
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
  var link = $('.product-unit:eq(' + i + ')').find('a:eq(0)').attr("href");
  if(link != undefined){
    if(link.split("flipkart.com").length < 2){
      link = "flipkart.com" + link;
    }
    if(link != undefined){
      PID = returnPID(link);
      if($('.product-unit:eq(' + i + ')').find('.pu-title a').length > 0){
        prod = $('.product-unit:eq(' + i + ')').find('.pu-title a:eq(0)').attr("title").trim();
      }
      if($('.product-unit:eq(' + i + ')').find('.pu-image img').length > 0){
        image = $('.product-unit:eq(' + i + ')').find('.pu-image img:eq(0)').attr("src").trim();
      }
      if($('.product-unit:eq(' + i + ')').find('.pu-status.oos').length > 0){
        oos = 1;
      }
      else{
        oos = 0;
      }

      if($('.product-unit:eq(' + i + ')').find('.more-listing-options .fk-bold').length > 0){
        price = $('.product-unit:eq(' + i + ')').find('.more-listing-options .fk-bold:eq(0)').text().trim();
        if(price.split("Rs.").length > 1){
          price = price.split("Rs.")[1];
        }
        if(price.split("Rs").length > 1){
          price = price.split("Rs")[1];
        }
        price = price.split(",").join("").trim();
      }
      else if($('.product-unit:eq(' + i + ')').find('.pu-final').length > 0){
       price = $('.product-unit:eq(' + i + ')').find('.pu-final').text().split(",").join("").trim();
       if(price.split("Rs.").length > 1){
        price = price.split("Rs.")[1];
      }
      else if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
    }
    else{
      price = "";
    }

    price = parseFloat(price);
    if(isNaN(price)){
      price = 0;
    }
    PID = PID.trim();
    arrayToSend.push([PID, price, prod, image, oos]);
  }
}
} 
var slider = $('.fk-large-item-carousel');
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
  var link = $('.fk-large-item-carousel:eq(' + i + ')').find('a:eq(0)').attr("href");
  if(link.split("flipkart.com").length < 2){
    link = "flipkart.com" + link;
  }
  if(link != undefined){
    PID = returnPID(link);
    if($('.fk-large-item-carousel:eq(' + i + ')').find('.fk-product-title').length > 0){
      var prod = $('.fk-large-item-carousel:eq(' + i + ')').find('.fk-product-title').text().trim();
    }
    if($('.fk-large-item-carousel:eq(' + i + ')').find('.pp-img-box img').length > 0){
      var image = $('.fk-large-item-carousel:eq(' + i + ')').find('.pp-img-box img:eq(0)').attr('src').split(",").join("");
    }
    var price = $('.fk-large-item-carousel:eq(' + i + ')').find('.final-price').text().split(",").join("");
    price = filter_price(price);
    if(isNaN(price)){
      price = "";
    }
    PID = PID.trim();
    arrayToSend.push([PID, price, prod, image, oos]);
  }
}
if($('.DOTDHpWidget').length > 0) {
  var slider = $('.DOTDHpWidget li');
  var sliderLength = $('.DOTDHpWidget li').length;
  var link;
  var price;
  var PID;
  for(i=0;i<sliderLength;i++){
    if($('.DOTDHpWidget li:eq('+ i +')').find('a').length > 0){
     link = $('.DOTDHpWidget li:eq('+ i +')').find('a').attr('href');
     if(link.split("flipkart.com").length < 2){
      link = "flipkart.com" + link;
    }
    PID = returnPID(link);
  }
  else{
    link = "";
    PID = "";
  }
  if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }
  }
  if(PID != ""){
    if($('.DOTDHpWidget li:eq('+ i +')').find('.newPrice').length > 0){
     price = $('.DOTDHpWidget li:eq('+ i +')').find('.newPrice').text();
     if(price.split("Rs.").length > 1){
      price = price.split("Rs.")[1];
    }
    if(price.split("Rs").length > 1){
      price = price.split("Rs")[1];
    }
    price = price.split(",").join("");
  }
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}
if($('.mprod-similar-prod-table').length > 0){
  var slider = $('.mprod-similar-prod-table a');
  var sliderLength = $('.mprod-similar-prod-table a').length;
  var PID;
  var link;
  var price;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    link = $('.mprod-similar-prod-table a:eq('+ i +')').attr('href');
    if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }
    if(PID != ""){
      if(PID != PID.toUpperCase()){
        PID = "";
      }
    }
    if(PID != ""){
      if($('.mprod-similar-prod-table').find('.sim-price-td:eq('+ i +')').length > 0){
       price = $('.mprod-similar-prod-table').find('.sim-price-td:eq('+ i +')').text();
       if(price.split("Rs.").length > 1){
        price = price.split("Rs.")[1];
      }
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
      if(price.split("/-").length > 1){
        price = price.split("/-")[0];
      }
      price = price.split(",").join("").trim();
    }
    else{
     price = "";
   }
 }
 if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}
if($('.productModule').length > 0){
  var slider = $('.productModule');
  var sliderLength = $('.productModule').length;
  var PID;
  var link;
  var price;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.productModule:eq('+ i +')').find('a').length > 0){
     link = $('.productModule:eq('+ i +')').find('a:eq(0)').attr('href');
     if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }
  }
  else{
   link = "";
   PID = "";
 }
 if(PID != ""){
  if(PID != PID.toUpperCase()){
    PID = "";
  }
}
if(PID != ""){
  if($('.productModule:eq('+ i +')').find('.beforeDiscount').length > 0){
    if($('.productModule:eq('+ i +')').find('.price:eq(1)').length > 0){
     price = $('.productModule:eq('+ i +')').find('.price:eq(1)').text();
     if(price.split("Rs.").length > 1){
      price = price.split("Rs.");
      price = price[1];
    }
    if(price.split("Rs").length > 1){
      price = price.split("Rs")[1];
    }
  }
}
else if($('.productModule:eq('+ i +')').find('.price').length > 0){
 price = $('.productModule:eq('+ i +')').find('.price:eq(0)').text();
 if(price.split("Rs.").length > 1){
  price = price.split("Rs.");
  price = price[1];
}
}
price = price.split(",").join("").trim();
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('.dotdProductModuleNew').length > 0){
  var slider = $('.dotdProductModuleNew');
  var sliderLength = $('.dotdProductModuleNew').length;
  var PID;
  var link;
  var price;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.dotdProductModuleNew:eq('+ i +') a').length > 0){
     link = $('.dotdProductModuleNew:eq('+ i +') a:eq(0)').attr('href');
     if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }
    else{
     link = "";
     PID = "";
   }
 }
 if(PID != ""){
  if(PID != PID.toUpperCase()){
    PID = "";
  }
}
if(PID != ""){
  if($('.dotdProductModuleNew:eq('+ i +')').find('.old').length > 0){
    if($('.dotdProductModuleNew:eq('+ i +')').find('.price').length > 0){
     price = $('.dotdProductModuleNew:eq('+ i +')').find('.price:eq(1)').text();
     if(price.split("Rs.").length > 1){
      price = price.split("Rs.");
      price = price[1];
    }
    if(price.split("Rs").length > 1){
      price = price.split("Rs")[1];
    }
  }
}
else if($('.dotdProductModuleNew:eq('+ i +')').find('.price').length > 0){
 price = $('.dotdProductModuleNew:eq('+ i +')').find('.price:eq(0)').text();
 if(price.split("Rs.").length > 1){
  price = price.split("Rs.");
  price = price[1];
}
}
price = price.split(",").join("").trim();
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('.singleProductModule').length > 0){
  var slider = $('.singleProductModule');
  var sliderLength = $('.singleProductModule').length;
  var PID;
  var link;
  var price;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.singleProductModule:eq('+ i +')').find('.priceInfo').length > 0){
     link = $('.singleProductModule:eq('+ i +')').find('.priceInfo a:eq(2)').attr('href');
     if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }
  }
  else{
   link = "";
   PID = "";
 }
 if(PID != ""){
  if(PID != PID.toUpperCase()){
    PID = "";
  }
}
if(PID != ""){
  if($('.singleProductModule:eq('+ i +')').find('.beforeDiscount').length > 0){
    if($('.singleProductModule:eq('+ i +')').find('.price').length > 0){
     price = $('.singleProductModule:eq('+ i +')').find('.price').text();
     if(price.split("Rs.").length > 1){
      price = price.split("Rs.");
      price = price[1];
    }
    if(price.split("Rs").length > 1){
      price = price.split("Rs")[1];
    }
  }
}
else if($('.singleProductModule:eq('+ i +')').find('.price').length > 0){
 price = $('.singleProductModule:eq('+ i +')').find('.price').text();
 if(price.split("Rs.").length > 1){
  price = price.split("Rs.");
  price = price[1];
}
}
price = price.split(",").join("").trim();
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('.list-unit').length > 0){
  var slider = $('.list-unit');
  var sliderLength = slider.length;
  var PID;
  var link;
  var price;

  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.list-unit:eq('+ i +') a').length > 0){
     link = $('.list-unit:eq('+ i +') a').attr('href');
     if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }

    else{
     link = "";
     PID = "";
   }
   if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }

  }
  if(PID != ""){
    if($('.list-unit:eq(' + i + ')').find('.more-listing-options .fk-bold').length > 0){
      price = $('.list-unit:eq(' + i + ')').find('.more-listing-options .fk-bold:eq(0)').text().trim();
      if(price.split("Rs.").length > 1){
        price = price.split("Rs.")[1];
      }
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
      price = price.split(",").join("").trim();
    }
    else if($('.list-unit:eq('+ i +')').find('.pu-final').length > 0){
     price = $('.list-unit:eq('+ i +')').find('.pu-final').text();
     if(price.split("Rs.").length > 1){
      price = price.split("Rs.");
      price = price[1];
    }
    if(price.split("Rs").length > 1){
      price = price.split("Rs")[1];
    }
  }
  price = price.split(",").join("").trim();
}
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('.brand-products-section li').length > 0){
  var slider = $('.brand-products-section li');
  var sliderLength = slider.length;
  var PID;
  var link;
  var price;

  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.brand-products-section li:eq('+ i +')').find('a').length > 0){
     link = $('.brand-products-section li:eq('+ i +')').find('a').attr('href');
     if(link != ""){
       if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }

    else{
     link = "";
     PID = "";
   }
   if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }

  }
  if(PID != ""){
    if($('.brand-products-section li:eq('+ i +') a').length > 0){
      price = $('.brand-products-section li:eq('+ i +') a').text();
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
      if(price.split("Rs.").length > 1){
        price = price.split("Rs.");
        price = price[1];
        price = price.split(",").join("").trim();
      }
      if(price.split("Price:").length > 1){
       price = price.split("Price:");
       price = price[1];
       price = price.split(",").join("").trim();
     }
   }
 }
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('.combo-unit').length > 0){
  var slider = $('.combo-unit');
  var sliderLength = slider.length;
  var PID;
  var link;
  var price;

  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('.combo-unit a').length > 0){
     link = $('.combo-unit:eq('+ i +') a:eq(0)').attr('href');
     if(link != ""){
      if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }

    else{
     link = "";
     PID = "";
   }
   if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }

  }
  if(PID != ""){
    if($('.combo-unit:eq('+ i +')').find('label').length > 0){
      price = $('.combo-unit:eq('+ i +')').find('label span:eq(1)').text();
      if(price.split("Rs.").length > 1){
        price = price.split("Rs.");
        price = price[1];
      }
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
    }
    price = price.split(",").join("").trim();
  }
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('#accessory-carousel').length > 0){
  var slider = $('#accessory-carousel li');
  var sliderLength = slider.length;
  var PID;
  var link;
  var price;

  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    if($('#accessory-carousel li:eq('+ i +')').length > 0){
     link = $('#accessory-carousel li:eq('+ i +')').find('a').attr('href');
     if(link != ""){
       if(link.split("flipkart.com").length < 2){
        link = "flipkart.com" + link;
      }
      PID = returnPID(link);
    }

    else{
     link = "";
     PID = "";
   }
   if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }

  }
  if(PID != ""){
    if($('#accessory-carousel li:eq('+ i +')').find('.history_our_price').length > 0){
      price = $('#accessory-carousel li:eq('+ i +')').find('.history_our_price').text();
      if(price.split("Rs.").length > 1){
        price = price.split("Rs.");
        price = price[1];
      }
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
    }
    else if($('#accessory-carousel li:eq('+ i +')').find('.history_list_price').length > 0){
      price = $('#accessory-carousel li:eq('+ i +')').find('.history_list_price').text();
      if(price.split("Rs.").length > 1){
        price = price.split("Rs.");
        price = price[1];
      }
      if(price.split("Rs").length > 1){
        price = price.split("Rs")[1];
      }
    }
    price = price.split(",").join("").trim();
  }
}

else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price]);
}
}
}

if($('#compatible-acc-container .carousel-item').length > 0) {
  var slider = $('#compatible-acc-container .carousel-item');
  var sliderLength = $('#compatible-acc-container .carousel-item').length;
  var link = "";
  var price = "";
  var PID = "";
  var image = "";
  var oos = 100;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    prod = "";
    image = "";
    oos = 100;
    if($('#compatible-acc-container .carousel-item:eq('+ i +')').find('a').length > 0){
     link = $('#compatible-acc-container .carousel-item:eq('+ i +')').find('a').attr('href');
     if(link.split("flipkart.com").length < 2){
      link = "flipkart.com" + link;
    }
    PID = returnPID(link);
  }
  else{
    link = "";
    PID = "";
  }
  if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }
  }
  if(PID != ""){
    if($('#compatible-acc-container .carousel-item:eq('+ i +')').find('img').length > 0){
     image = $('#compatible-acc-container .carousel-item:eq('+ i +')').find('img').attr("src");
   }

   if($('#compatible-acc-container .carousel-item:eq('+ i +')').find('.fk-recom-item-details').length > 0){

    if($('#compatible-acc-container .carousel-item:eq('+ i +')').find('.fk-recom-item-details .final-price').length > 0){
     price = $('#compatible-acc-container .carousel-item:eq('+ i +')').find('.fk-recom-item-details:eq(0) .final-price').text();
     price = filter_price(price);
   }

   if($('#compatible-acc-container .carousel-item:eq('+ i +')').find('.fk-recom-item-details .fk-product-title').length > 0){
     prod = $('#compatible-acc-container .carousel-item:eq('+ i +')').find('.fk-recom-item-details:eq(0) .fk-product-title').attr("title").trim();
   }
 }
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price, prod, image, oos]);
}
}
}
if($('.ccarousel-item .carousel-item').length > 0) {
  var slider = $('.ccarousel-item .carousel-item');
  var sliderLength = $('.ccarousel-item .carousel-item').length;
  var link = "";
  var price = "";
  var PID = "";
  var image = "";
  var oos = 100;
  for(i=0;i<sliderLength;i++){
    price = "";
    PID = "";
    prod = "";
    image = "";
    oos = 100;
    if($('.ccarousel-item .carousel-item:eq('+ i +')').find('a').length > 0){
      link = $('.ccarousel-item .carousel-item:eq('+ i +')').find('a').attr('href');
     if(link.split("flipkart.com").length < 2){
      link = "flipkart.com" + link;
    }
    PID = returnPID(link);
  }
  else{
    link = "";
    PID = "";
  }
  if(PID != ""){
    if(PID != PID.toUpperCase()){
      PID = "";
    }
  }
  if(PID != ""){
    if($('.ccarousel-item .carousel-item:eq('+ i +') a:eq(0)').find('img').length > 0){
      image = $('.ccarousel-item .carousel-item:eq('+ i +') a:eq(0)').find('img').attr("src");
   }
   if($('.ccarousel-item .carousel-item:eq('+ i +')').find('.fk-price .final-price').length > 0){
    price = $('.ccarousel-item .carousel-item:eq('+ i +')').find('.fk-price:eq(0) .final-price').text();
    price = filter_price(price);
  }
  prod = $('.ccarousel-item .carousel-item:eq('+ i +')').find('a:eq(0)').attr("title").trim();
}
else{
 price = "";
}
if(isNaN(price)){
  price = "";
}
PID = PID.trim();
if(PID != "" && price != ""){
  arrayToSend.push([PID, price, prod, image, oos]);
}
}
}
arrayToSend = JSON.stringify(arrayToSend);
var jsonArr = [{'pairsFlip': arrayToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(0, jsonArr, 0, doNothing, []); 
}
function sendCurrent(){
 curData = [];
 var prod = getProd();
 var image = getImage();
 var myPrice = getPrice();
 var cur_url = "";
 var avail = getAvailability();
 if(avail == 0){
  var current_status = 1;
}
else if(avail == 1){
  current_status = 0;
}
else if(avail == -1){
  current_status = 2;
}
var pidFlipkart = getPID();
var pr = "";
var breadcrumb_str = getBreadCrumb();
cur_url = window.location.href;
curData.push([prod, image, myPrice, cur_url, current_status, pidFlipkart, breadcrumb_str]);
curData = JSON.stringify(curData);
var jsonArr = [{'curDataFlip': curData}];
jsonArr = JSON.stringify(jsonArr);
if(cur_url.split("/p/").length > 1){
  sendMessage(0, jsonArr, 0, doNothing, []);
}
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

function getProd(){
  var prod = "";

  if($('.top-section').length > 0){
    if($('.top-section').find('[itemprop="name"]').length > 0){
      prod = $('.top-section').find('[itemprop="name"]').text().trim();
    }
    else if($('.top-section').find('h1').length > 0){
      prod = $('.top-section').find('h1:eq(0)').text().trim();
    }
  }
  else if($('._3eAQiD').length > 0){
    prod = $('._3eAQiD').text().trim();
  }
  else if($('h1').length > 0){
    prod = $('h1:eq(0)').text().trim();
  }
  var cur_url = window.location.href;

  if(cur_url.split("/p/").length < 2){
    prod = "";
  }
  return prod;
}

function getImage(){
  var image = "";
  if($('.top-section').length > 0){
    if($('.top-section').find('.mainImage img').length > 0){
      image = $('.top-section').find('.mainImage img:eq(0)').attr('src').trim();
    }
  }
  else if($('.sfescn').length > 0){
    image = $('.sfescn').attr('src').trim();
  }
  if(image.split("data:image").length > 1){
    image  = "";
  }
  return image;
}

function getPrice(){
  price = "";
  price_sel = "";

  if($('.top-section').length > 0){
    if($('.top-section').find('.shop-section-wrap').length > 0){
      price = $('.top-section').find('.shop-section-wrap .selling-price:eq(0)').text().trim();
    }
  }
  price = filter_price(price);

  if($('.seller-table .t-row').find('.price-wrap .selling-price').length > 0){
    sel_len = $('.seller-table .t-row').length;
    for(i=1;i<sel_len;i++){
      if($('.seller-table .t-row:eq('+ i +')').find('.price-wrap .selling-price').length > 0){
        price_sel = $('.seller-table .t-row:eq('+ i +')').find('.price-wrap .selling-price').text().trim();
        price_sel = filter_price(price_sel);
        if( (price_sel != 0 && price_sel < price) || (price_sel != "" && price_sel < price) ){
          price = price_sel;
        }
      }
    }
  }
  if(isNaN(price)){
    price = 0;
  }
  if(price == "" || price == 0){
    if($('._18Zlgn').length > 0){
      price = $('._18Zlgn').text().trim();
      price = filter_price(price);
    }
    else if($('._1vC4OE._37U4_g').length > 0){
      price = $('._1vC4OE._37U4_g').text().trim();
      price = filter_price(price);
    }
  }
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.top-section').length > 0 && $('.top-section').find('.out-of-stock').length > 0){
    avail = 0;
  }
  else if($('.top-section').find('.listing-obsolete-status').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("SOLD OUT").length > 1){
    avail = 0;
  }
  else if($('.row._3FV-Hc').text().toUpperCase().split("PERMANENTLY DISCONTINUED").length > 1){
    avail = -1;
  }
  return avail;
}

function getPID(){
  var pid = "";
  var pid1 = "";
  if($('#ourSearchKey_pid').length > 0 && $('#ourSearchKey_pid').text().trim() != ""){
    pid = $('#ourSearchKey_pid').text().trim();
  }
  else{
    var link = window.location.href;
    pid = link;

    if(pid.split("?pid=").length > 1){
      pid = pid.split("?pid=")[1].trim();
    }
    else if($('.write-review').length > 0){
      pid = $('.write-review').attr('href').trim();
    }
    else if($('.add-to-wishlist').length > 0){
      pid = $('.add-to-wishlist').attr('data-product-id').trim();
    }
    if(pid.split("?pid=").length > 1){
      pid = pid.split("?pid=")[1].trim();
    }
    if(pid.split("&pid=").length > 1){
      pid = pid.split("&pid=")[1].trim();
    }
    if(pid.split("#").length > 1){
      pid = pid.split("#")[0].trim();
    }
    if(pid.split("&").length > 1){
      pid = pid.split("&")[0].trim();
    }
    // if(pid.split("/").length > 1){
    //   pid = pid.split("/")[pid.length - 1];
    // }
  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  else{
    pid = pid.trim();
  }
  if(pid == ""){
    if($("#criteo-tags-div").length > 0){
      pid1 = $("#criteo-tags-div").html();
      pid1 = pid1.split('src="');
      pid1 = pid1[1];
      pid1 = pid1.split('"');
      pid1 = pid1[0];

      pid1 = decodeURIComponent(pid1);
      pid1 = pid1.split("&p=");
      pid1 = pid1[1];
      if(pid1 != undefined && pid1.split("&").length > 1){
        pid1 = pid1.split("&")[0].trim();

        if(pid1 == pid1.toUpperCase()){
          pid = pid1;
        }
      }

    }
  }
  return pid;
}

function returnPID(link){
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
    pid = pid.trim();

  }

  if(pid.split("?pid=").length > 1){
    pid = pid.split("?pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&pid=").length > 1){
    pid = pid.split("&pid=")[1];
    pid = pid.trim();

  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
    pid = pid.trim();

  }
  if(pid.split("ppid=").length > 1){
    pid = pid.split("ppid=")[0];
    pid = pid.trim();

  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];
    pid = pid.trim();

  }
  if(pid != pid.toUpperCase()){
    pid = "";
  }
  if(link == "" || link.split("/p/").length < 2){
    pid = "";
  }

  return pid;

}

function getBreadCrumb(){
  var breadcrumb = "";
  var bread_final = "";
  if($('.breadcrumb-wrap').length > 0){
    var len_bread = $('.breadcrumb-wrap li').length;
  }
  else if($('._1joEet').length > 0){
    var len_bread = $('._1joEet a').length;
  }

  for(i=0;i<len_bread-1;i++){

    if($('.breadcrumb-wrap').length > 0){
      breadcrumb = $('.breadcrumb-wrap li:eq('+ i +')').text().trim();
    }

    else if($('._1joEet a').length > 0){
      breadcrumb = $('._1joEet a:eq('+ i +')').text().trim();
    }
    bread_final += breadcrumb + "*~";

  }
  return bread_final;
}



// function getDataFlipAPI(){
//   if(typeof(getPID) == "function" && getPID() != ""){
//     var PID = getPID();
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": "https://www.flipkart.com/api/3/page/dynamic/product",
//       "method": "POST",
//       "headers": {
//         "x-user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 FKUA/website/41/website/Desktop",
//         "origin": "https://www.flipkart.com",
//         "x-devtools-emulate-network-conditions-client-id": "4ca472c3-95a7-4d2f-a436-b6e4e40f43dc",
//         "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
//         "content-type": "application/json",
//         "accept": "*/*",
//         "referer": "https://www.flipkart.com/wings-fire-autobiography-english-1st/p/itmdyu8fezqmmvhe?pid="+PID,
//         "accept-encoding": "gzip, deflate, br",
//         "accept-language": "en-US,en;q=0.8",
//         "cache-control": "no-cache",
//         "postman-token": "4e0882e0-cfea-0bb9-4dc4-68f5ea018dfd"
//       },
//       "data": '{"requestContext":{"productId": "'+PID+'","sessionContext":{"pids":["'+PID+'"]}}}'
//     }
//     $.ajax(settings).done(function (data) {

//       var image = data.RESPONSE.pageContext.imageUrl;
//       image = image.split("@height}");
//       image = "http://img5a.flixcart.com/image"+image[1];
//       image = image.split("?");
//       image = image[0];

//       var prod = data.RESPONSE.pageContext.titles.title;
//       price = data.RESPONSE.pageContext.pricing.minPrice.value;

//       var oos = 0;
//       var oos1 = "";
//       oos1 = data.RESPONSE.data.product_state_default;
//       if(oos1 != "" && oos1 != null){
//         oos1 = data.RESPONSE.data.product_state_default.data[0].value.state;
//         if(oos1 == "OUT_OF_STOCK"){
//           oos = 1;
//         }
//         else  if(oos1 == "NO_AVAILABLE_LISTING"){
//           oos = 1;
//         }
//       }

//       // shippingCost1 = "";
//       // shippingCost1 = 0;
//       // shippingCost1 = data.RESPONSE.data.product_seller_detail_1.data[0].value.deliveryInfo;
//       // if(shippingCost1 != "" && shippingCost1 != undefined && shippingCost1 != null){
//       //   shippingCost = data.RESPONSE.data.product_seller_detail_1.data[0].value.deliveryInfo.primaryOption.charge.value;
//       // }

//     });
// }
// else{
//   setTimeout(getDataFlipAPI, 800);
// }
// }
// setTimeout(getDataFlipAPI, 1000);

function getFlipIDs(){
  return new Promise(function(resolve, reject){

    var db;
    var request = window.indexedDB.open("sw-toolbox-filters1", 1);
    request.onsuccess = function(event) {
      db = request.result;
      var objectStore = db.transaction("store").objectStore("store");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if(cursor) {
          url = cursor.value.url;
          if(url.split("ssid=").length > 1){
            ssid = url.split("ssid=");
            ssid = ssid[1];
            ssid = ssid.split("&");
            ssid = ssid[0];
          }

          if(url.split("sqid=").length > 1){
            sqid = url.split("sqid=");
            sqid = sqid[1];
            sqid = sqid.split("&");
            sqid = sqid[0];
          }
          // console.log(ssid+"~~"+sqid); 
        } 
      }
    };
    resolve(ssid+"~~"+sqid); 
  });
}


function getCatPIDs(start, ssid, sqid){
  // console.log("getCatPIDs was called with "+ssid+" ~ "+sqid );
  var len = $("._1KHd47").length - 1;
  var curr_win = window.location.href;
  var prod_cat = curr_win.split("/pr?");
  prod_cat = prod_cat[1];
  // console.log("prod_cat: "+prod_cat);
  var store = prod_cat.split("sid=");
  store = store[1].trim();
  if(store.split("&").length > 1){
    store = store.split("&");
    store = store[0].trim();
  }
  if(store.split("#").length > 1){
    store = store.split("#");
    store = store[0].trim();
  }
  if(store.split("%").length > 1){
    store = decodeURIComponent(store).trim();
  }
  // console.log("store: "+store);
  // console.log("ssid: "+ssid);
  // console.log("sqid: "+sqid);
  var header = JSON.stringify({"requestContext":{"store": store,"start":start,"disableProductData":false,"count":60,"ssid": ssid,"sqid": sqid}});
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.flipkart.com/api/3/product/browse?http-method=POST&http-body="+header,
    "method": "GET",
    "headers": {
      "accept": "*/*", 
      "x-user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 FKUA/website/41/website/Desktop",
      "x-devtools-emulate-network-conditions-client-id": "67af0782-f425-4e4a-a1a9-cc7ffb4f02c0",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
      "content-type": "application/json",
      "referer": "https://www.flipkart.com/mens-footwear/pr?"+prod_cat,
      "accept-encoding": "gzip, deflate, sdch, br",
      "accept-language": "en-US,en;q=0.8",
      "cache-control": "no-cache",
      "postman-token": "754483df-969b-1910-7e9c-6db412978ae4"
    }
  }

  $.ajax(settings).done(function (data) {
    var PID = "";    
    var resp = data.RESPONSE.data.product_listview.data;
    if(resp){
      // $.each(resp, function(index, value1) {
        for(var d=0;d<resp.length;d++){
          var value1 = resp[d];
          var PID = value1.value.id;
          var oos = 100;
          if(value1.value.pricing){
            var price = value1.value.pricing.finalPrice.value;
          }
          if(value1.value.titles){
            var prod = value1.value.titles.title;
          }
          if(value1.value.media.images[0]){
            image = value1.value.media.images[0].url;
            image = image.split("@height}");
            image = "http://img5a.flixcart.com/image"+image[1];
            image = image.split("?");
            image = image[0];
          }
          else{
            image = "";
          }
          if(PID != "" && price != "" && price != 0){
            arrayToSendAPI.push([PID, price, prod, image, oos]);
          }
        }
      }
      tillDone++;
      if(tillDone == till && tillDone != 0){
        arrayToSendAPI = JSON.stringify(arrayToSendAPI);
        // console.log("arrayToSendAPI: "+arrayToSendAPI);
        var jsonArr = [{'pairsFlip': arrayToSendAPI}];
        jsonArr = JSON.stringify(jsonArr);
        sendMessage(0, jsonArr, 0, doNothing, []);
      }
    // var products = "";
    // for(var p=0;p<PIDs.length;p++){
    //   PID = data.RESPONSE.pageContext.searchMetaData.productContext[p].productId;
    //   // products = {};
    //   if(PID != "" && products != ""){
    //     products += ',{"productId": "'+PID+'"}';
    //   }
    //   else if(PID != ""){
    //     products += '{"productId": "'+PID+'"}';
    //   }
    // }
    // if(products != ""){
    //   getCatFlipAPI(products, prod_cat);
    // }
  });
}

function initProcessFlip(){
  // getFlipIDs();
  // console.log("I am here");
  var pollInterval = 1000 * 15;
  window.setTimeout(sendCurrent, 5000);
  window.setTimeout(sendPairs, 5000);
  window.setTimeout(sendPairs, pollInterval);

  getFlipIDs().then(function(args){
    // console.log("args: "+args);
    args = args.split("~~");
    ssid = args[0].trim();
    sqid = args[1].trim();
    var crawlTill = 60;
    if($(".C5rIv_").length > 0){
      crawlTill = $(".C5rIv_:eq(0)").text().trim();
      crawlTill = crawlTill.split("products of");
      crawlTill = crawlTill[1];
      crawlTill = crawlTill.split("product");
      crawlTill = crawlTill[0].trim();
      crawlTill = crawlTill.split(",").join("").trim();
      crawlTill = parseInt(crawlTill);
      if(crawlTill >= 300){
        crawlTill = 300;
      }
      if(crawlTill != 0){
        var start = 0;
        till = crawlTill/60;
        if(till < 1 && till > 0){
          till = 1;
        }
        else{
          till = Math.round(till);
        }
        
        // console.log("till: "+till);
        for(var t=0;t<till;t++){
          start = t * 60;
          getCatPIDs(start, ssid, sqid);
        }
      }
    }
  });
}


// function getCatFlipAPI(products, prod_cat){
//   console.log("getCatFlipAPI was called with "+products+ " prod_cat: "+prod_cat);
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://www.flipkart.com/api/3/product/summary",
//     "method": "POST",
//     "headers": {
//       "x-user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 FKUA/website/41/website/Desktop",
//       "origin": "https://www.flipkart.com",
//       "x-devtools-emulate-network-conditions-client-id": "0c1c9fa6-a6cc-4e55-9952-035e3c1746ca",
//       "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
//       "content-type": "application/json",
//       "accept": "*/*",
//       "referer": "https://www.flipkart.com/mens-footwear/pr?"+prod_cat,
//       "accept-encoding": "gzip, deflate, br",
//       "accept-language": "en-US,en;q=0.8",
//       "cache-control": "no-cache",
//       "postman-token": "b372443d-da0b-1759-ff3b-f4c12ebd526e"
//     },
//     "data": '{"requestContext":{"products":['+products+']}}'
//   }

//   $.ajax(settings).done(function (data) {
//     var resp = data.RESPONSE;
//     if(resp){
//       $.each(resp, function(index, value1) {
//         var PID = index;
//         var oos = 100;
//         if(value1.value.pricing){
//           var price = value1.value.pricing.finalPrice.value;
//         }
//         if(value1.value.titles){
//           var prod = value1.value.titles.title;
//         }
//         if(value1.value.media.images[0]){
//           image = value1.value.media.images[0].url;
//           image = image.split("@height}");
//           image = "http://img5a.flixcart.com/image"+image[1];
//           image = image.split("?");
//           image = image[0];
//         }
//         else{
//           image = "";
//         }
//         if(PID != "" && price != "" && price != 0){
//           arrayToSendAPI.push([PID, price, prod, image, oos]);
//         }
//       });
//     }
//     tillDone++;
//     if(tillDone == till && tillDone != 0){
//       arrayToSendAPI = JSON.stringify(arrayToSendAPI);
//       console.log("arrayToSendAPI: "+arrayToSendAPI);
//       var jsonArr = [{'pairsFlip': arrayToSendAPI}];
//       jsonArr = JSON.stringify(jsonArr);
//       sendMessage(0, jsonArr, 0, doNothing, []);
//     }

//   });
// }
