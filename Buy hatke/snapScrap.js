function sendPairs(){
  arrayToSend = [];

  if($('.similar-widget-wrapper .col-xs-7').length > 0){
    var slider = $('.similar-widget-wrapper .col-xs-7');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('a').length > 0){
        link = $('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
          // if($('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('.product-price').length > 0){

            if($('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('.product-title').length > 0){
              prod = $('.similar-widget-wrapper .col-xs-7:eq('+  i +')').find('.product-title:eq(0)').text().trim();
              if(prod.split("...").length > 1){
                prod = "";
              }
            }
            if($('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('.tileImg').length > 0){
              image = $('.similar-widget-wrapper .col-xs-7:eq('+  i +')').find('.tileImg:eq(0)').attr("src").trim();
            }
            if(image.split("default-img").length > 1){
              image = "";
            }
            if(image == "" && $('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('.tileImg').attr("data-src")){
              image = $('.similar-widget-wrapper .col-xs-7:eq('+  i +')').find('.tileImg:eq(0)').attr("data-src").trim();
            }
            if(image.split("default-img").length > 1){
              image = "";
            }
            if($('.similar-widget-wrapper .col-xs-7:eq('+ i +')').find('.product-offer-price').length > 0){
              price = $('.similar-widget-wrapper .col-xs-7:eq('+  i +')').find('.product-offer-price:eq(0)').text();
              price = filter_price(price);
            }
            else{
              price = "";
            }

          // }
        }
        else{
          price = "";
        }
      }
      PID = PID.trim();
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('#freq .product_grid_cont').length > 0){
    var slider = $('#freq .product_grid_cont');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('#freq .product_grid_cont:eq('+ i +')').find('a').length > 0){
        link = $('#freq .product_grid_cont:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
         if($('#freq .product_grid_cont:eq('+ i +')').find('.product-title').length > 0){
          prod = $('#freq .product_grid_cont:eq('+  i +')').find('.product-title:eq(0)').text().trim();
          if(prod.split("...").length > 1){
            prod = "";
          }
        }
        if($('#freq .product_grid_cont:eq('+ i +')').find('.product-image').length > 0){
          image = $('#freq .product_grid_cont:eq('+  i +')').find('.product-image:eq(0) img:eq(0)').attr("src");
        }
        if(image.split("default-img").length > 1){
          image = "";
        }
        if($('#freq .product_grid_cont:eq('+ i +')').find('.product-image').attr("data-src")){
          image = $('#freq .product_grid_cont:eq('+  i +')').find('.product-image:eq(0) img:eq(0)').attr("data-src");
        }
        if(image.split("default-img").length > 1){
          image = "";
        }
        if($('#freq .product_grid_cont:eq('+ i +')').find('.product-price.displayPrice').length > 0){
          price = $('#freq .product_grid_cont:eq('+  i +')').find('.product-price.displayPrice:eq(0)').text();
          price = filter_price(price);
        }
        else{
          price = 0;
        }
      }
      else{
        price = "";
      }
    }
    PID = PID.trim();

    if(PID != "" && price != ""){
      arrayToSend.push([PID, price, prod, image, oos]);
    }


    } //for loop ends
    
  } //1st if ends

  if($('.recent-viewed-widget-wrapper .recent-viewed-product').length > 0){
    var slider = $('.recent-viewed-widget-wrapper .recent-viewed-product');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('a').length > 0){
        link = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link.split("void(0)").length > 1){
          link = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('a:eq(1)').attr('href');

        }
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){

          if($('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('.bx-caption').length > 0){
            prod = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+  i +')').find('.bx-caption:eq(0)').text().trim();
            if(prod.split("...").length > 1){
              prod = "";
            }
          }
          if($('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('.recentimg').length > 0){
            image = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+  i +')').find('.recentimg:eq(0)').attr("src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('.recentimg').attr("data-src")){
            image = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+  i +')').find('.recentimg:eq(0)').attr("data-src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }

          if($('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+ i +')').find('.recentPrice').length > 0){
            price = $('.recent-viewed-widget-wrapper .recent-viewed-product:eq('+  i +')').find('.recentPrice:eq(0)').text();

            price = filter_price(price);
          }
          else{
            price = "";
          }
        }
        else{
          price = "";
        }
      }
      PID = PID.trim();

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends


  if($('.csf-trending-widget .col-xs-6').length > 0){
    var slider = $('.csf-trending-widget .col-xs-6');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.csf-trending-widget .col-xs-6:eq('+ i +')').find('a').length > 0){
        link = $('.csf-trending-widget .col-xs-6:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
          if($('.csf-trending-widget .col-xs-6:eq('+ i +')').find('.product-title').length > 0){
            prod = $('.csf-trending-widget .col-xs-6:eq('+  i +')').find('.product-title:eq(0)').text().trim();
            if(prod.split("...").length > 1){
              prod = "";
            }
          }
          if($('.csf-trending-widget .col-xs-6:eq('+ i +')').find('.tileImages').length > 0){
            image = $('.csf-trending-widget .col-xs-6:eq('+  i +')').find('.tileImages:eq(0) img:eq(0)').attr("src").trim();
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.csf-trending-widget .col-xs-6:eq('+ i +')').find('.tileImages').attr("data-src")){
            image = $('.csf-trending-widget .col-xs-6:eq('+  i +')').find('.tileImages:eq(0) img:eq(0)').attr("data-src").trim();
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if($('.csf-trending-widget .col-xs-6:eq('+ i +')').find('.product-offer-price').length > 0){
            price = $('.csf-trending-widget .col-xs-6:eq('+  i +')').find('.product-offer-price:eq(0)').text();
            price = filter_price(price);
            
          }
          else{
            price = "";
          }

        }
        else{
          price = "";
        }
      }
      PID = PID.trim();

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends


  if($('.product_grid_cont').length > 0){
    var slider = $('.product_grid_cont');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";


    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.product_grid_cont:eq('+ i +')').find('a').length > 0){
        link = $('.product_grid_cont:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
          if($('.product_grid_cont:eq('+ i +')').find('.product-title').length > 0){
            prod = $('.product_grid_cont:eq('+  i +')').find('.product-title:eq(0)').text().trim();
            if(prod.split("...").length > 1){
              prod = "";
            }
          }
          if($('.product_grid_cont:eq('+ i +')').find('.product-image').length > 0){
            image = $('.product_grid_cont:eq('+  i +')').find('.product-image:eq(0) img:eq(0)').attr("src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.product_grid_cont:eq('+ i +')').find('.product-image').attr("data-src")){
            image = $('.product_grid_cont:eq('+  i +')').find('.product-image:eq(0) img:eq(0)').attr("data-src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if($('.product_grid_cont:eq('+ i +')').find('.product-image.prodSoldout').length > 0){
            oos = 1;
          }
          else{
            oos = 0;
          }
          
          if($('.product_grid_cont:eq('+ i +')').find('.product-price #price').length > 0){
            price = $('.product_grid_cont:eq('+  i +')').find('.product-price #price').text();
            price = filter_price(price);

          }
          else if($('.product_grid_cont:eq('+ i +')').find('.product-price p').length > 0){
            price = $('.product_grid_cont:eq('+  i +')').find('.product-price p:eq(0)').text();
            if(price.split("Rs").length > 1){
              price = price.split("Rs");
              price = price[1];
            }
          }
          else{
            price = "";
          }

        }
        else{
          price = "";
        }
      }
      PID = PID.trim();

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.product-tuple-listing').length > 0){
    var slider = $('.product-tuple-listing');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";


    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.product-tuple-listing:eq('+ i +')').find('a').length > 0){
        link = $('.product-tuple-listing:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
          if($('.product-tuple-listing:eq('+ i +')').find('.product-title').length > 0){
            prod = $('.product-tuple-listing:eq('+  i +')').find('.product-title:eq(0)').text().trim();
            if(prod.split("...").length > 1){
              prod = "";
            }
          }

          if($('.product-tuple-listing:eq('+ i +')').find('.product-image').attr("data-src")){
            image = $('.product-tuple-listing:eq('+  i +')').find('.product-image:eq(0)').attr("data-src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.product-tuple-listing:eq('+ i +')').find('.product-image').attr("src")){
            image = $('.product-tuple-listing:eq('+  i +')').find('.product-image:eq(0)').attr("src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.product-tuple-listing:eq('+ i +')').find('.compareImg').attr("value")){
            image = $('.product-tuple-listing:eq('+  i +')').find('.compareImg:eq(0)').attr("value");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          // if($('.product-tuple-listing:eq('+ i +')').find('.product-image.prodSoldout').length > 0){
          //   oos = 1;
          // }
          // else{
          //   oos = 0;
          // }
          
          if($('.product-tuple-listing:eq('+ i +')').find('.product-price').length > 0){
            price = $('.product-tuple-listing:eq('+  i +')').find('.product-price').text();
            price = filter_price(price);

          }
          else{
            price = "";
          }

        }
        else{
          price = "";
        }
      }
      PID = PID.trim();


      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends


  if($('.hp-product-carousel-wrapper li').length > 0){
    var slider = $('.hp-product-carousel-wrapper li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var oos = 100; // no info abt oos
    var image = "";
    var prod = "";


    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.hp-product-carousel-wrapper li:eq('+ i +')').find('a').length > 0){
        link = $('.hp-product-carousel-wrapper li:eq('+ i +')').find('a:eq(0)').attr('href');
        ////console.log(link);
        if(link != ""){ 
          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }
          else{
            link = "";
            PID = "";
          }
        }

        if(PID != ""){
          if(PID != parseInt(PID)){
            PID = "";
          }
        }


        if(PID != ""){
          if($('.hp-product-carousel-wrapper li:eq('+ i +')').find('.bx-caption-title').length > 0){
            prod = $('.hp-product-carousel-wrapper li:eq('+  i +')').find('.bx-caption-title:eq(0)').text().trim();
            if(prod.split("...").length > 1){
              prod = "";
            }
          }
          if($('.hp-product-carousel-wrapper li:eq('+ i +')').find('.bx-img').length > 0){
            image = $('.hp-product-carousel-wrapper li:eq('+  i +')').find('.bx-img:eq(0) img:eq(0)').attr("data-src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if(image == "" && $('.hp-product-carousel-wrapper li:eq('+ i +')').find('.bx-img').attr("src")){
            image = $('.hp-product-carousel-wrapper li:eq('+  i +')').find('.bx-img:eq(0) img:eq(0)').attr("src");
          }
          if(image.split("default-img").length > 1){
            image = "";
          }
          if($('.hp-product-carousel-wrapper li:eq('+ i +')').find('.recentPrice').length > 0){
            price = $('.hp-product-carousel-wrapper li:eq('+  i +')').find('.recentPrice').text();
            price = filter_price(price);
          }
        }
        else{
          price = "";
        }
      }
      PID = PID.trim();

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price, prod, image, oos]);
      }


    } //for loop ends
    
  } //1st if ends


  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsSnap': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  
 // //console.log(arrayToSend);
}


function sendCurrent(){

  curData = [];
  var prod = "";
  var image = "";
  var myPrice = "";
  var cur_url = "";
  var link = "";
  var current_status = 0;
  var PID = "";

  var breadcrumb_str = getBreadCrumb();
  prod = getProd();

  if($('.soldDiscontAlert').length > 0){
    current_status = 1;
  }
  else if($('.noLongerProduct').length > 0){
    current_status = 1;
  }
  else if($('.notifyMe-soldout').length > 0){
    current_status = 1;
  }
  if($('.product-detail .discontImage').length > 0){
    current_status = 1; //discontinued
  }


  myPrice = getPrice();
  image = getImage();


  link = window.location.href;
  if(link.split("#").length > 1){
    link = link.split("#")[0];
  }
  if(link.split("?").length > 1){
    link = link.split("?")[0];
  }
  if(link.split("/").length > 1){
    link = link.split("/");
    PID = link[link.length - 1];
  }
  cur_url = window.location.href;

  if(PID!=parseFloat(PID)){
    PID = "";
  }
  PID = PID.trim();

  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumb_str]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataSnap': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if( ($('.pdpPage').length>0) || ($('.product-detail').length>0) || ($('[itemtype="http://schema.org/Product"]').length > 0) && ($("#categoryTopSection").length == 0)){
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);


//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = "";

if($('#pdp').length > 0){
  check_prod_pg = 1; //product page
}
else{
  check_prod_pg = 0;
}


function getProd(){
  var prod = "";

  if($('.pdpName').length > 0){
    if($('.pdpName').find('h1').length > 0){
      prod = $('.pdpName').find('h1').text().trim();
    }
    else if($('.pdpName').find('p').length > 0){
      prod = $('.pdpName').find('p').text().trim();
    }
    
  }
  if(prod == "") {
    if($('.comp-product-description').find('h1').length > 0){
      prod = $('.comp-product-description').find('h1:eq(0)').text().trim();
    }
    else{
      prod = $('h1:eq(0)').text().trim();
    }
  }

  // //console.log("prod: "+prod);
  if( ($('.pdpPage').length>0) || ($('.product-detail').length>0) || ($('[itemtype="http://schema.org/Product"]').length > 0) && ($("#categoryTopSection").length == 0)){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  if($('.image_gallery li').length > 0){
    image = $('.image_gallery li').eq(1).find('img').attr('src');
  }
  else if($('img[itemprop="image"]').length > 0)
  {
    image = $('img[itemprop="image"]').attr('src');
  }
  else if($(".zoomPad").length >0 )
  {
    image = $(".zoomPad").attr("src");
  }
  else if($("#panel_img_1").length > 0)
  {
    image = $("#panel_img_1").attr("src");
  }

  // //console.log("image: "+image);
  return image;
}

function getPrice(){
  price = "0";
  if($("#selling-price-id").length > 0){
    price = $("#selling-price-id").text().trim();
  }
  else if($(".selling-price").length > 0)
  {
    price = $(".selling-price .pdp_newprice").text().trim();

  }
  else if($("#mrp").length > 0)
  {
    price = $("#mrp").text().trim();

  }
  else if ($("#mvfrstVisible").length > 0) {
    price = $("#mvfrstVisible .redText:eq(0)").text().trim();
  }
  else if ($('[itemprop="price"]').length > 0) {
    price = $('[itemprop="price"]:eq(0)').text().trim();
  }
  price = filter_price(price);
  if(isNaN(price) == true){
    price = "0";
  }
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.soldDiscontAlert').length > 0){
    avail = 0;
  }
  else if($('.noLongerProduct').length > 0){
    avail = 0;
  }
  else if($('.notifyMe-soldout').length > 0){
    avail = 0;
  }
  if($('.product-detail .discontImage').length > 0){
    avail = -1; //discontinued
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
  if(pid.split("/").length > 1){
    pid = pid.split("/");
    pid = pid[pid.length - 1];
  }
  pid = pid.trim();

  
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
  if(pid.split("/").length > 1){
    pid = pid.split("/");
    pid = pid[pid.length - 1];
  }
  pid = pid.trim();
  if(link.split('snapdeal.com').length < 2){
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
  var len_bread = $('#breadCrumbWrapper').find('[itemprop="title"]').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('#breadCrumbWrapper').find('[itemprop="title"]:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }
  if(bread_final.split("Search:").length > 1){
    bread_final = "";
  }
  return bread_final;


}



function getModel(){
  var model = "";
  if($(".product-spec").length > 0){
    var spec_len = $(".product-spec").length;
    for(var i=0;i<spec_len;i++){
      if($(".product-spec:eq("+i+") tr:eq(0)").text().trim().toUpperCase() == "GENERAL"){
        var key_len = $(".product-spec:eq("+i+") tr").length;

        for(var j=1;j<key_len;j++){
          if($(".product-spec:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "MODEL"){
            var model = $(".product-spec:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
          }
        }
        break;
      }
    }
  }
  return model;
}

function getColor(){
  var color = "";
  if($(".product-spec").length > 0){
    var spec_len = $(".product-spec").length;
    for(var i=0;i<spec_len;i++){
      if($(".product-spec:eq("+i+") tr:eq(0)").text().trim().toUpperCase() == "GENERAL"){
        var key_len = $(".product-spec:eq("+i+") tr").length;

        for(var j=1;j<key_len;j++){
          if($(".product-spec:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "COLOUR"){
            var color = $(".product-spec:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
          }
        }
        break;
      }
    }
  }
  if(color == ""){
    if($(".colorMenu li").length > 0){
      var col_len = $(".colorMenu li").length;
      for(var c=0;c<col_len;c++){
        if($(".colorMenu li:eq("+c+")").attr("attrid").length > 0){
          color += $(".colorMenu li:eq("+c+")").attr("attrid") + "/";
        }
        else if($(".colorMenu li:eq("+c+")").attr("data-val").length > 0){
          color += $(".colorMenu li:eq("+c+")").attr("data-val") + "/";
        }
      }
    }
  }
  return color;
}

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

function getIntStorage(){
  var intMem = "";
  if($(".product-spec").length > 0){
    var spec_len = $(".product-spec").length;
    for(var i=0;i<spec_len;i++){
      if($(".product-spec:eq("+i+") tr:eq(0)").text().trim().toUpperCase() == "MEMORY & STORAGE"){
        var key_len = $(".product-spec:eq("+i+") tr").length;

        for(var j=1;j<key_len;j++){
          if($(".product-spec:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "INTERNAL MEMORY"){
            var intMem = $(".product-spec:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
          }
        }
        break;
      }
    }
  }
  return intMem;
}

function sendMobile(){
  var breadCrumb = getBreadCrumb();
  // console.log("getBreadCrumb: " + breadCrumb);
  if(breadCrumb.split("*~").length > 1 && breadCrumb.split("*~")[2].trim().toUpperCase() == "MOBILE PHONES" && getProd() != ""){
    var PID = getPID();
    var pos = 129;
    var price = getPrice();
    var image = getImage();
    var avail = getAvailability();
    var mainTitle = getProd();
    var modelName = getModel();
    var color = getColor();
    var intStorage = getIntStorage();
    var link = window.location.href;

    var jsonArr = [{'PID': encodeURIComponent(PID), 'pos': pos, 'price': price, 'image': image, 'avail': avail, 'mainTitle': encodeURIComponent(mainTitle), 'modelName': encodeURIComponent(modelName), 'color': encodeURIComponent(color), 'intStorage': encodeURIComponent(intStorage), 'link': encodeURIComponent(link) }];
    jsonArr = JSON.stringify(jsonArr);
    // console.log("jsonArr: "+jsonArr);
    sendMessage(1, jsonArr, 19, doNothing, []);

  }
}
sendMobile();

function sendCoupon(){
  couponToSend = [];
  var cur_link = window.location.href;
  var couponUrl = "";
  var couponCode = "";
  var couponText = "";
  var couponDesc = "";
  var couponExp = 0;
  var couponAt = 129;
  couponUrl = "http://www.snapdeal.com/";
  couponCode = "";
  couponText = "";
  couponDesc = "";
  last_bread = 0;
  slider = $("#offersWrap").find(".offer-data");
  sliderLength = slider.length;

  for(i=0;i<sliderLength;i++){
    couponUrl = "http://www.snapdeal.com/";
    couponCode = "";
    couponText = "";
    couponDesc = "";
    couponExp = 0;
    bread_link = "";

    couponText1 = $("#offersWrap .offer-data:eq("+i+")").find(".inner-box:eq(0)").text().trim();
    couponText = couponText1+" - "+$("#offersWrap .offer-data:eq("+i+")").find(".offer-title:eq(0)").text().trim();
    // couponText = couponText.split("<");
    // couponText = couponText[0].trim();

    couponCode = "NO CODE REQUIRED";
    cp = "";
    // console.log("couponText: "+couponText);

    if(couponText.toUpperCase().split("USING ").length > 1 && (couponText.toUpperCase().split("BANK").length < 2 || couponText.toUpperCase().split("CARD").length < 2) ){
      cp = couponText.toUpperCase().split("USING ");
      cp = cp[1];
      // console.log("cp: "+cp);
      if(cp.split(" ").length > 1){
        cp = cp.split(" ");
        cp = cp[0].trim();
      }
      else if(cp.split(",").length > 1){
        cp = cp.split(",");
        cp = cp[0].trim();
      }
      else if(cp.split(".").length > 1){
        cp = cp.split(".");
        cp = cp[0].trim();
      }
      couponCode = cp;

      if($("#breadCrumbWrapper .bCrumbOmniTrack").length > 0){
        last_bread = $("#breadCrumbWrapper .bCrumbOmniTrack").length - 1; 
        bread_link = $("#breadCrumbWrapper").find(".bCrumbOmniTrack:eq("+last_bread+")").attr("href")+"?sort=bstslr";
        couponUrl = bread_link;

        if(couponUrl.split(".com").length < 2){
          couponUrl = "http://www.snapdeal.com"+couponUrl;
        }
      }

    }
    
    // else if(couponText.toUpperCase().split("COUPON").length > 1){
    //   cp = couponText.toUpperCase().split("COUPON")[1];
    //   if(cp.split(" ").length > 1){
    //     cp = cp.split(" ")[0].trim();
    //   }
    //   else if(cp.split(",").length > 1){
    //     cp = cp.split(",")[0].trim();
    //   }
    //   else if(cp.split(".").length > 1){
    //     cp = cp.split(".")[0].trim();
    //   }
    // }
    // else if(couponText.toUpperCase().split("CART").length > 1){
    //   cp = couponText.toUpperCase().split("CART")[1];
    //   if(cp.split(" ").length > 1){
    //     cp = cp.split(" ")[0].trim();
    //   }
    //   else if(cp.split(",").length > 1){
    //     cp = cp.split(",")[0].trim();
    //   }
    //   else if(cp.split(".").length > 1){
    //     cp = cp.split(".")[0].trim();
    //   }
    //   couponCode = cp;

    // }

    // else if(couponText.toUpperCase().split("EXTRA").length > 1){
    //   cp = couponText.toUpperCase().split("EXTRA")[1];
    //   if(cp.split(" ").length > 1){
    //     cp = cp.split(" ")[0].trim();
    //   }
    //   else if(cp.split(",").length > 1){
    //     cp = cp.split(",")[0].trim();
    //   }
    //   else if(cp.split(".").length > 1){
    //     cp = cp.split(".")[0].trim();
    //   }
    //   couponCode = cp;

    // }

    else if( couponText.toUpperCase().split("PRICE IN CART").length > 1 || couponText.toUpperCase().split("PRICE ON CART").length > 1 || couponText.toUpperCase().split("PRICES IN CART").length > 1 || couponText.toUpperCase().split("PRICES ON CART").length > 1 || couponText.toUpperCase().split("EXTRA").length > 1){

      couponCode = couponText1;
      if($("#breadCrumbWrapper .bCrumbOmniTrack").length > 0){
        last_bread = $("#breadCrumbWrapper .bCrumbOmniTrack").length - 1; 
        bread_link = $("#breadCrumbWrapper").find(".bCrumbOmniTrack:eq("+last_bread+")").attr("href")+"?sort=bstslr";
        couponUrl = bread_link;

        if(couponUrl.split(".com").length < 2){
          couponUrl = "http://www.snapdeal.com"+couponUrl;
        }
      }
    }
    else{
      couponCode = "NO CODE REQUIRED";
    }
    if(couponText.toUpperCase().split("(NO").length > 1){
      couponText = couponText.toUpperCase().split("(NO");
        couponText = couponText[0].trim();
      }
      if(couponText.toUpperCase().split("CLICK").length > 1){
        couponText = couponText.toUpperCase().split("CLICK");
        couponText = couponText[0].trim();
      }
      if(couponText.toUpperCase().split("VIEW ").length > 1){
        couponText = couponText.toUpperCase().split("VIEW ");
        couponText = couponText[0].trim();
      }
      if(couponText.toUpperCase().split("T&C").length > 1){
        couponText = couponText.toUpperCase().split("T&C");
        couponText = couponText[0].trim();
      }
      couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
    }
    couponToSend = JSON.stringify(couponToSend);
    var jsonArr = [{'couponsExt': couponToSend}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 15, doNothing, []);  
  }
  sendCoupon()

/////////////////// WISH TO WATCH LIST STARTS /////////////////

var cur_url = window.location.href;
if(cur_url.split("snapdeal.com/mywishlist").length > 1){
  var importImg = returnResource("import_img.png");
  if($('#internal-content').length>0){
    $('#internal-content').before('<div id="importHatke"> <img src="'+importImg+'" alt="Click to import wishlist" height="50px" width="auto"/> </div>');
  }
}


$("#importHatke").click(function(){
  snapWishList();
});

function snapWishList(){
  wishListSnap = [];
  var slider = $('.product_list_view_cont');
  var sliderLength = slider.length;
  var link = "";
  var url = "";
  var prod = "";
  var image = "";
  var price = "";
  var PID = "";
  var pos = 129;
  if($("#numWishlistItems").length > 0){
    var pages = $("#numWishlistItems").text().trim();
    if(pages.split("(").length > 1){
      pages = pages.split("(");
        if(pages[1].toUpperCase().split("ITEM").length > 1){
          pages = pages[1].toUpperCase().split("ITEM");
          pages = pages[0].trim();
        }
        if(pages.split(")").length > 1){
          pages = pages.split(")");
          pages = pages[0].trim();
        }
        pages = parseInt(pages);
      }
    }
    else{
      var pages = 0; 
    }
    var snapapi = "https://www.snapdeal.com/wishlistNew/getProducts/0/"+pages+"?sort=dhtl&lang=en";
    $.get(snapapi, {}).success(function(data){
      data = JSON.parse(data);
      for(var d=0;d<data.wishlistProductDisplayDTOs.length;d++){
        image = "";
        price = "";
        prod = "";
        link = "";
        url = "";
        PID = "";

        image = data.wishlistProductDisplayDTOs[d].MinProductOfferGroupDTO.image;
        image = "https://n2.sdlcdn.com/" + image;
        price = data.wishlistProductDisplayDTOs[d].MinProductOfferGroupDTO.displayPrice;
          // price = filter_price(price);
          prod = data.wishlistProductDisplayDTOs[d].MinProductOfferGroupDTO.name;
          link = data.wishlistProductDisplayDTOs[d].MinProductOfferGroupDTO.pageUrl;
          if(link.split("snapdeal.com/").length < 2){
            link = "https://www.snapdeal.com/" + link;
          }
          url = link;

          if(link.split("#").length > 1)  {
            link = link.split("#")[0];
          }
          if(link.split("?").length > 1)  {
            link = link.split("?")[0];
          }
          if(link.split("/").length > 1)  {
            link = link.split("/");
            PID = link[link.length -1];
          }

          prod = prod.split("'").join("").trim();
          prod = prod.split('"').join('').trim();


          if(PID != "" && price != ""){
            wishListSnap.push([encodeURIComponent(PID), encodeURIComponent(prod), price, encodeURIComponent(image), pos, encodeURIComponent(url)]);
          }
        }
        wishJson = JSON.stringify(wishListSnap);
        var jsonArr = [{'wishList': wishJson}];
        jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr, 17, doNothing, []);  
        console.log("WishlistJSON: " + wishJson);

      })
.fail(function(data){
  console.log("Something went wrong!");
});
}
/////////////////// WISH TO WATCH LIST ENDS /////////////////

