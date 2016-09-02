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
  if($('.item').length > 0){
    var slider = $('.item');
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

      if($('.item:eq('+ i +') a').length > 0){
        link = $('.item:eq('+ i +') a:eq(0)').attr("href");
        if(link.split("javascript:void(0);").length > 1 || link == undefined || link == "") {
          link = $('.item:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link == undefined || link == "" || link.split("javascript:void(0);").length > 1){
          link = "";
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
       if($('.item:eq('+ i +')').find('.tx-b.h34').length > 0){
        prod = $('.item:eq('+ i +')').find('.tx-b.h34:eq(0)').text().trim();
      }
      if($('.item:eq('+ i +')').find('.db.h175 img').length > 0){
        image = $('.item:eq('+ i +')').find('.db.h175 img:eq(0)').attr("src").trim();
        if(image.split("http").length < 2){
          image = "http:" + image;
        }
      }
      if($('.item:eq('+ i +')').find('.pr.l30per').length > 0){
        oos1 = $('.item:eq('+ i +')').find('.pr.l30per:eq(0)').text().trim();
        if(oos1.toUpperCase().split("OUT OF STOCK").length > 1){
          oos = 1;
        }
        else{
          oos = 0;
        }
      }
      
      if($('.item:eq('+ i +')').find('.p-inr.pr').length > 0){
        price_len = $('.item:eq('+ i +')').find('.p-inr.pr').length - 1;
        price = $('.item:eq('+ i +')').find('.p-inr.pr').eq(price_len).parent().text().trim();
        price = filter_price(price);
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


  if($('.tab-pane .product-item').length > 0){
    var slider = $('.tab-pane .product-item');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.tab-pane .product-item:eq('+ i +') a').length > 0){
        link = $('.tab-pane .product-item:eq('+ i +') a:eq(0)').attr("href");
        if(link == undefined || link == ""){
          link = $('.tab-pane .product-item:eq('+ i +') a:eq(1)').attr("href");
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.tab-pane .product-item:eq('+ i +')').find('.price-div').length > 0){

          if($('.tab-pane .product-item:eq('+ i +')').find('.price-div s').length > 0){
            price = $('.tab-pane .product-item:eq('+ i +')').find('.price-div .price').html();
            price = price.split("<s>")[0];
            

            if(price.split("</i>").length > 1){
              price = price.split("</i>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];

              }
              

              price = price.split(",").join("").trim();

            }
          }
          else{
            price = $('.tab-pane .product-item:eq('+ i +')').find('.price-div .price').text();
            
            
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price =price[1];

            }
            price = price.split(",").join("").trim();


          }
        }
      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }
  if($('.products-grid li').length > 0){
    var slider = $('.products-grid li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.products-grid li:eq('+ i +') a').length > 0){
        link = $('.products-grid li:eq('+ i +') a:eq(0)').attr("href");
        if(link == undefined || link == ""){
          link = $('.products-grid li:eq('+ i +') a:eq(1)').attr("href");
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.products-grid li:eq('+ i +')').find('.price-div').length > 0){

          if($('.products-grid li:eq('+ i +')').find('.price-div s').length > 0){
            price = $('.products-grid li:eq('+ i +')').find('.price-div .price').html();
            price = price.split("<s>")[0];
            

            if(price.split("</i>").length > 1){
              price = price.split("</i>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];

              }
              

              price = price.split(",").join("").trim();

            }
          }
          else{
            price = $('.products-grid li:eq('+ i +')').find('.price-div .price').text();
            
            
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price =price[1];

            }
            price = price.split(",").join("").trim();


          }
        }
      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }
  if($('.panel-body .row').length > 0){
    var slider = $('.panel-body .row');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.panel-body .row:eq('+ i +') a').length > 0){
        link = $('.panel-body .row:eq('+ i +') a:eq(0)').attr("href");
        if(link == undefined || link == ""){
          link = $('.item:eq('+ i +') a:eq(1)').attr("href");
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.panel-body .row:eq('+ i +')').find('.normal-price').length > 0){
          price = $('.panel-body .row:eq('+ i +')').find('.normal-price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }
          price = price.split(",").join("").trim();

        }
      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  if($('#rec_rhf .row').length > 0){
    var slider = $('#rec_rhf .row');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('#rec_rhf .row:eq('+ i +') a').length > 0){
        link = $('#rec_rhf .row:eq('+ i +') a:eq(0)').attr("href");
        if(link == undefined || link == ""){
          link = $('.item:eq('+ i +') a:eq(1)').attr("href");
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('#rec_rhf .row:eq('+ i +')').find('.price-details').length > 0){
          if($('#rec_rhf .row:eq('+ i +')').find('.price-details s').length > 0){
            price = $('#rec_rhf .row:eq('+ i +')').find('.price-details .price').html();
            price = price.split("<s>")[0];
            if(price.split("</i>").length > 1){
              price = price.split("</i>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }
          }
          else{
            price = $('#rec_rhf .row:eq('+ i +')').find('.price-details .price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price =price[1];
            }

          }
        }
        
        else{
          price = "";
        }
        
        price = price.split(",").join("").trim();


      }
      else{
        price = "";
      }

      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }

    } // for ends1

  }

  if($('.offer-detail').length > 0){
    var slider = $('.offer-detail');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.offer-detail:eq('+ i +') a').length > 0){
        link = $('.offer-detail:eq('+ i +') a:eq(0)').attr("href");
        if(link == undefined || link == ""){
          link = $('.offer-detail:eq('+ i +') a:eq(1)').attr("href");
        }
        if(link == undefined || link == ""){
          link = $('.offer-detail:eq('+ i +') a:eq(2)').attr("href");
        }
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
          if(PID.split("/product/").length > 1){
            PID = PID.split("/product/");
            PID = PID[1];
          }
        }
        else{
          PID = "";
        }
      }

      if(PID != ""){
        if($('.offer-detail:eq('+ i +')').find('.normal-price').length > 0){
          price = $('.offer-detail:eq('+ i +')').find('.normal-price').text();
          if(price.split("Rs.").length > 1){
            price = price.split("Rs.");
            price =price[1];
          }

        }
        else{
          price = "";
        }
        
        price = price.split(",").join("").trim();


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
  var jsonArr = [{'pairsPur': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  
}

function sendCurrent(){
  curData = [];
  var prod = getProd();
  var image = getImage();
  var myPrice = getPrice();
  var cur_url = "";
  var PID = getPID();
  var current_status = 0;
  if(getAvailability() == 0){
    current_status = 1;
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
    if(PID.split("/product/").length > 1){
      PID = PID.split("/product/");
      PID = PID[1];
    }
  }
  else{
    PID = "";
  }
  if(link.split("/product/").length < 2){
    PID = "";
    myPrice = "";
    prod = "";
    image = "";
    current_status = "";
  }

  cur_url = window.location.href;
  var breadcrumbF = getBreadCrumb();
  curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumbF, 1]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataPur': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if(cur_url.split("/product/").length > 1){
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
  var cur_link = window.location.href;
  prod = $("h1").text().trim();
  if(prod==""){
    prod = $('meta[property="og:title"]').attr('content').trim();
  }
  if(cur_link.split("/product/").length > 1){
    return prod;
  }
  else{
    return "";
  }
}

function getImage(){
  var image = "";
  image = $('meta[property="og:image"]').attr('content').trim(); 
  if(image.split("http").length < 2){
    image = "http:" + image;
  }
  return image;
}

function getPrice(){
  price = "";
  if($('.normal-price').length > 0){
    price = $('.normal-price:eq(0)').text().trim();
  }
  else if($('.price').length > 0){
    price = $('.price:eq(0)').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if(($(".in-stock").length > 0) && ($(".in-stock").text().toUpperCase().split("OUT OF STOCK").length > 1)){
    avail = 0;
  }
  
  if($(".wis-btn").length > 0 && $(".wis-btn").parent().text().trim().toUpperCase().split("SOLD OUT").length > 1){
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
  // if(pid.split("/product/").length > 1){
  //   pid = pid.split("/product/");
  //   pid = pid[1];
  // }
  pid = encodeURIComponent(pid);
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
  if(link.split('purplle.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  // if(pid.split("/product/").length > 1){
  //   pid = pid.split("/product/");
  //   pid = pid[1];
  // }
  return pid;

}


function getBreadCrumb(){
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

  if(cur_link.split("purplle.com/offers").length > 1){

    if($('.offer-block').length > 0){
     var slider = $('.offer-block');
     var sliderLength = slider.length;
     var couponUrl = "";
     var couponCode = "";
     var couponText = "";
     var couponDesc = "";
     var couponExp = 0;
     var couponAt = 900;

     for(i=0;i<sliderLength;i++){
       couponUrl = cur_link;
       couponCode = "";
       couponText = "";
       couponDesc = "";

       if($('.offer-block:eq('+ i +')').find(".offer-detail .offer-title").length > 0){
        couponText = $('.offer-block:eq('+ i +')').find(".offer-detail .offer-title:eq(0)").text().trim();

        if(couponText.split("USE CODE:").length > 1){
          couponCode = couponText.split("USE CODE:")[1].trim();
        }
        else{
          couponCode = "NO CODE REQUIRED";
        }
      }

      if($('.offer-block:eq('+ i +')').find(".offer-detail .o-btn:eq(0)").length > 0){
        couponUrl = $('.offer-block:eq('+ i +')').find(".offer-detail .o-btn:eq(0) a:eq(0)").attr("href").trim();
      }
      else{
        couponUrl = cur_link;
      }

      if(cur_link.split("?").length > 1){
        cur_link = cur_link.split("?");
        cur_link = cur_link[0].trim();
      }

      if(couponCode != ""){
       couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
     }

   }     

 }

}
couponToSend = JSON.stringify(couponToSend);
var jsonArr = [{'couponsExt': couponToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon();


// /////////////// WISH TO WATCH LIST STARTS ///////////////

// var cur_url = window.location.href;
// if(cur_url.split("page=wishlist").length > 1 && (cur_url.split("purplle.com/profile").length > 1)){
//   var importImg = returnResource("import_img.png");
//   if($('#activity_bind').length>0){
//     $('#activity_bind)').before('<div id="importHatke"> <img src="'+importImg+'" alt="Click to import wishlist" height="50px" width="auto"/> </div>');
//   }
// }

// $("#importHatke").click(function(){
//   purpWishList();
// });

// function purpWishList(){
//   wishListPurp = [];
//   var link = "";
//   var url = "";
//   var prod = "";
//   var image = "";
//   var price = "";
//   var PID = "";
//   var pos = 50;
//   var brand = "";

//   if($('#activity_bind li').length > 0) {
//     var slider = $('#activity_bind li');
//     var sliderLength = $('#activity_bind li').length;

//     for(i=0;i<sliderLength;i++){
//       link = "";
//       url = "";
//       prod = "";
//       image = "";
//       price = "";
//       PID = "";
//       if($('#activity_bind li:eq('+ i +')').find('.cart-img-container a').length > 0){
//         link = $('#activity_bind li:eq('+ i +')').find('.cart-img-container a').attr('href');
//         url = link;
//         if(link.split(".html").length > 1){
//           link = link.split(".html")[0];
//           if(link.split("-").length > 1){
//             link = link.split("-");
//             PID = link[link.length - 1];
//           }
//         }
//         else{
//           PID = "";
//         }
//       }
//       else{
//         link = "";
//         PID = "";
//       }
//       if(PID != ""){
//         if($('#activity_bind li:eq('+ i +')').find('.cart-right-main .prod-special-price').length > 0){
//           price = $('#activity_bind li:eq('+ i +')').find('.cart-right-main .prod-special-price:eq(0)').text().trim();
//           price = filter_price(price);
//         }
//         else if($('#activity_bind li:eq('+ i +')').find('.cart-right-main .prod-price').length > 0){
//           price = $('#activity_bind li:eq('+ i +')').find('.cart-right-main .prod-price:eq(0)').text().trim();
//           price = filter_price(price);
//         }
//       }
//       else{
//         price = "";
//       }
//       if(isNaN(price)){
//         price = "";
//       }

//       if($('#activity_bind li:eq('+ i +')').find('.cart-right-main .item-head-main').length > 0){
//         if($('#activity_bind li:eq('+ i +')').find('.cart-right-main .item-head-main').length > 0){
//           brand = $('#activity_bind li:eq('+ i +')').find('.cart-right-main .item-head-main:eq(0) .item-heading:eq(0)').text().trim();
//         }
//         else{
//           brand = "";
//         }
//         prod = brand + " " + $('#activity_bind li:eq('+ i +')').find('.cart-right-main .item-head-main:eq(0) .item-brief:eq(0)').attr('title').trim();
//       }

//       if($('#activity_bind li:eq('+ i +')').find('.cart-img-container  img').length > 0){
//         image = $('#activity_bind li:eq('+ i +')').find('.cart-img-container img:eq(0)').attr('src').trim();
//       }

//       if(PID != "" && price != ""){
//         wishListPurp.push([encodeURIComponent(PID), encodeURIComponent(prod), price, encodeURIComponent(image), pos, encodeURIComponent(url)]);
//       }
//     }

//     console.log("Wishlist: " + wishListPurp);
//     wishJson = JSON.stringify(wishListPurp);
//     var jsonArr = [{'wishList': wishJson}];
//     jsonArr = JSON.stringify(jsonArr);
//     sendMessage(1, jsonArr, 17, doNothing, []);  
//     console.log("WishlistJSON: " + wishJson);
//   }

// }
// /////////////// WISH TO WATCH LIST ENDS ///////////////
