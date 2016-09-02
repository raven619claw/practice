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
  if($('.productlist .product').length > 0){
    var slider = $('.productlist .product');
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
      PID1 = "";
      oos = 100;
      if($('.productlist .product:eq('+ i +') a').length > 0){
        link = $('.productlist .product:eq('+ i +') a:eq(0)').attr('href');
        if(link != ""){
          if(link.split("urbanladder.com").length < 2){
            link = "www.urbanladder.com/"+link;
          }
          PID = link;
          if(link.split("sku=").length > 1){
            PID1 = link.split("sku=");
            PID1 = PID1[1];
            if(PID1.split("#").length > 1){
              PID1 = PID1.split("#")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("&").length > 1){
              PID1 = PID1.split("&")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("?").length > 1){
              PID1 = PID1.split("?")[0];
              PID1 = PID1.trim();

            }
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#")[0];
            PID = PID.trim();
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&")[0];
            PID = PID.trim();

          }
          if(PID.split("?").length > 1){
            PID = PID.split("?")[0];
            PID = PID.trim();

          }
          if(PID.split("/products/").length > 1){
            PID = PID.split("/products/")[1];
            PID = PID.trim();
          }
          if(PID1 != undefined && PID1 != ""){
            PID = PID.trim() + "~" + PID1.trim();
          }
          if(PID.split("~").length < 2){
            if($('.productlist .product:eq('+ i +')').attr("data-sku").length > 1){
              PID1 = $('.productlist .product:eq('+ i +')').attr("data-sku").trim();
              PID = PID+"~"+PID1;
            }
            else{
              PID = "";
            }
          }
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.productlist .product:eq('+ i +')').find('.product-img img').length > 0){
          image = $('.productlist .product:eq('+ i +')').find('.product-img:eq(0) img:eq(0)').attr("src");
          
        }
        if(image.split("/loader-").length > 1){
          image = "";
        }
        if($('.productlist .product:eq('+ i +')').find('.product-title').length > 0){
          prod = $('.productlist .product:eq('+ i +')').find('.product-title:eq(0)').text().trim();
          prod = prod.split("↵").join(" ").trim();
          
        }
        if($('.productlist .product:eq('+ i +')').find('.price strike').length > 0){
          price = $('.productlist .product:eq('+ i +')').find('.price:eq(0)').html();
          price = price.split("</strike>");
          price = price[1].trim();
        }
        else if($('.productlist .product:eq('+ i +')').find('.price').length > 0){
          price = $('.productlist .product:eq('+ i +')').find('.price:eq(0)').text().trim();
        }
        price = filter_price(price);
      }
      if(PID != "" && price != "" && !isNaN(price)){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends

  }


  if($('.product-block-wrapper').length > 0){
    var slider = $('.product-block-wrapper');
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
      PID1 = "";
      prod = "";
      image = "";
      oos = 100;
      if($('.product-block-wrapper:eq('+ i +') a').length > 0){
        link = $('.product-block-wrapper:eq('+ i +') a:eq(0)').attr('href');
        if(link != ""){
          if(link.split("urbanladder.com").length < 2){
            link = "www.urbanladder.com/"+link;
          }
          PID = link;
          if(link.split("sku=").length > 1){
            PID1 = link.split("sku=");
            PID1 = PID1[1];
            if(PID1.split("#").length > 1){
              PID1 = PID1.split("#")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("&").length > 1){
              PID1 = PID1.split("&")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("?").length > 1){
              PID1 = PID1.split("?")[0];
              PID1 = PID1.trim();

            }
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#")[0];
            PID = PID.trim();
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&")[0];
            PID = PID.trim();

          }
          if(PID.split("?").length > 1){
            PID = PID.split("?")[0];
            PID = PID.trim();

          }
          if(PID.split("/products/").length > 1){
            PID = PID.split("/products/")[1];
            PID = PID.trim();
          }
          if(PID1 != undefined && PID1 != ""){
            PID = PID.trim() + "~" + PID1.trim();
          }
          if(PID.split("~").length < 2){
            if($('roduct-block-wrapper:eq('+ i +')').attr("data-sku").length > 1){
              PID1 = $('roduct-block-wrapper:eq('+ i +')').attr("data-sku").trim();
              PID = PID+"~"+PID1;
            }
            else{
              PID = "";
            }
          }
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.product-block-wrapper:eq('+ i +')').find('.product-img img').length > 0){
          image = $('.product-block-wrapper:eq('+ i +')').find('.product-img:eq(0) img:eq(0)').attr("src");
          
        }
        if($('.product-block-wrapper:eq('+ i +')').find('.product-title').length > 0){
          prod = $('.product-block-wrapper:eq('+ i +')').find('.product-title:eq(0)').text().trim();
          prod = prod.split("↵").join(" ").trim();
        }
        if($('.product-block-wrapper:eq('+ i +')').find('.price strike').length > 0){
          price = $('.product-block-wrapper:eq('+ i +')').find('.price:eq(0)').html();
          price = price.split("</strike>");
          price = price[1].trim();
        }
        else if($('.product-block-wrapper:eq('+ i +')').find('.price').length > 0){
          price = $('.product-block-wrapper:eq('+ i +')').find('.price:eq(0)').text().trim();
        }
        price = filter_price(price);
      }
      if(PID != "" && price != "" && !isNaN(price)){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends

  }


  if($('.grid-item.product').length > 0){
    var slider = $('.grid-item.product');
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
      if($('.grid-item.product:eq('+ i +') a').length > 0){
        link = $('.grid-item.product:eq('+ i +') a:eq(0)').attr('href');
        if(link != ""){
          if(link.split("urbanladder.com").length < 2){
            link = "http://www.urbanladder.com/"+link;
          }
          PID = link;
          if(link.split("sku=").length > 1){
            PID1 = link.split("sku=");
            PID1 = PID1[1];
            if(PID1.split("#").length > 1){
              PID1 = PID1.split("#")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("&").length > 1){
              PID1 = PID1.split("&")[0];
              PID1 = PID1.trim();

            }
            if(PID1.split("?").length > 1){
              PID1 = PID1.split("?")[0];
              PID1 = PID1.trim();

            }
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#")[0];
            PID = PID.trim();
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&")[0];
            PID = PID.trim();

          }
          if(PID.split("?").length > 1){
            PID = PID.split("?")[0];
            PID = PID.trim();

          }
          if(PID.split("/products/").length > 1){
            PID = PID.split("/products/")[1];
            PID = PID.trim();
          }
          if(PID1 != undefined && PID1 != ""){
            PID = PID.trim() + "~" + PID1.trim();
          }
          if(PID.split("~").length < 2){
            if($('.grid-item.product:eq('+ i +')').attr("data-sku").length > 1){
              PID1 = $('.grid-item.product:eq('+ i +')').attr("data-sku").trim();
              PID = PID+"~"+PID1;
            }
            else{
              PID = "";
            }
          }
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.grid-item.product:eq('+ i +')').find('.product-img img').length > 0){
          image = $('.grid-item.product:eq('+ i +')').find('.product-img:eq(0) img:eq(0)').attr("src");
          
        }
        if($('.grid-item.product:eq('+ i +')').find('.product-title .product-details').length > 0){
          prod = $('.grid-item.product:eq('+ i +')').find('.product-title .product-details:eq(0)').text().trim();
        }
        if($('.grid-item.product:eq('+ i +')').find('.product-title .variant-details').length > 0){
          prod = prod + " " + $('.grid-item.product:eq('+ i +')').find('.product-title .variant-details:eq(0)').text().trim();
          prod = prod.split("↵").join(" ").trim();
        }
        prod = prod.trim();
        if($('.grid-item.product:eq('+ i +')').find('.price.selling').length > 0){
          price = $('.grid-item.product:eq('+ i +')').find('.price.selling:eq(0)').text().trim();
        }
        price = filter_price(price);
      }
      if(PID != "" && price != "" && !isNaN(price)){
        arrayToSend.push([PID, price, prod, image, oos]);
      }

    } // for ends

  }

  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsUrbanLad': arrayToSend}];
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
  var jsonArr = [{'curDataUrbanLad': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#product-show').length > 0){
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
  if($('#product-show .product-title').length > 0){
    prod = $('#product-show .product-title:eq(0)').text().trim();
  }
  else if($('#mproduct-show .prodtitle').length > 0){
    prod = $('#mproduct-show .prodtitle:eq(0)').text().trim();
  }
  if($('#product-show').length > 0 || $('#mproduct-show').length > 0){
    return prod;
  }
  else{
    return "";
  }
}

function getImage(){
  var image = "";
  if($('.productdetails .orbit-container li img').length > 0){
    image = $('.productdetails .orbit-container:eq(0) li:eq(0) img').attr('src');
  }
  else if($('#product-left-part .imageslider img').length > 0){
    image = $('#product-left-part .imageslider:eq(0) .slick-slide.slick-active img:eq(0)').attr('src');
  }
  
  return image;
}

function getPrice(){
  price = "";
  if($('#inside-product-cart-form .buy_details.current .product-price [itemprop="price"]').length > 0)
  {
    price = $('#inside-product-cart-form .buy_details.current .product-price:eq(0) [itemprop="price"]:eq(0)').text().trim();
  }
  else if($('#inside-product-cart-form .product-price [itemprop="price"]').length > 0)
  {
    price = $('#inside-product-cart-form .product-price:eq(0) [itemprop="price"]:eq(0)').text().trim();
  }
  else if($('.product-pricing [itemprop="price"]').length > 0)
  {
    price = $('.product-pricing:eq(0) [itemprop="price"]:eq(0)').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($("#inside-product-cart-form .sold-out").length > 0){
    avail = 0;
  }
  return avail;

}
function getPID(){

  var link = window.location.href;
  //console.log("link: "+link);
  var pid = link;
  var pid1 = "";

  if(link.split("sku=").length > 1){
    pid1 = link.split("sku=");
    pid1 = pid1[1];
    if(pid1.split("#").length > 1){
      pid1 = pid1.split("#")[0];
      pid1 = pid1.trim();

    }
    if(pid1.split("&").length > 1){
      pid1 = pid1.split("&")[0];
      pid1 = pid1.trim();

    }
    if(pid1.split("?").length > 1){
      pid1 = pid1.split("?")[0];
      pid1 = pid1.trim();

    }
  }

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
    pid = pid.trim();
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
    pid = pid.trim();

  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];
    pid = pid.trim();

  }
  if(pid.split("/products/").length > 1){
    pid = pid.split("/products/")[1];
    pid = pid.trim();
  }
  if(pid1 != undefined && pid1 != ""){
    pid = pid.trim() + "~" + pid1.trim();
  }
  else {
    if($("#product-properties").find('[itemprop="sku"]').length == 1){
      pid1 = $("#product-properties").find('[itemprop="sku"]').text().trim();
      pid = pid.trim() + "~" + pid1.trim();
    }
  }
  return pid;



}

function returnPID(link){

  var pid = link;
  var pid1 = "";
  if(link == ""){
    pid = 0;
  }
  if(link.split("sku=").length > 1){
    pid1 = link.split("sku=");
    pid1 = pid1[1];
    if(pid1.split("#").length > 1){
      pid1 = pid1.split("#")[0];
      pid1 = pid1.trim();

    }
    if(pid1.split("&").length > 1){
      pid1 = pid1.split("&")[0];
      pid1 = pid1.trim();

    }
    if(pid1.split("?").length > 1){
      pid1 = pid1.split("?")[0];
      pid1 = pid1.trim();

    }
  }

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
    pid = pid.trim();
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
    pid = pid.trim();

  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];
    pid = pid.trim();

  }
  if(pid.split("/products/").length > 1){
    pid = pid.split("/products/")[1];
    pid = pid.trim();
  }
  if(pid1 != undefined && pid1 != ""){
    pid = pid.trim() + "~" + pid1.trim();
  }
  else {
    if($("#product-properties").find('[itemprop="sku"]').length == 1){
      pid1 = $("#product-properties").find('[itemprop="sku"]').text().trim();
      pid = pid.trim() + "~" + pid1.trim();
    }
  }

  if(link.split('urbanladder.com').length < 2){
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
  if($('#breadcrumbs').length > 0){
    var len_bread = $('#breadcrumbs').find('a').length;

    for(i=0;i<len_bread;i++){
      breadcrumb = $('#breadcrumbs').find('a:eq('+ i +')').text().trim();
      bread_final += breadcrumb + "*~";
    }
  }
  return bread_final;
}
