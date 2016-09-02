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

  if($('.nbs-flexisel-item').length > 0){
    var slider = $('.nbs-flexisel-item');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      PID1 = "";
      PID2 = "";
      price = "";
      if($('.nbs-flexisel-item:eq('+ i +')').find('a').length > 0){
        link = $('.nbs-flexisel-item:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){
          PID = returnPID(link);
        }
        if(PID != ""){
          if($('.nbs-flexisel-item:eq('+ i +')').find('.final-price').length > 0){
            price = $('.nbs-flexisel-item:eq('+  i +')').find('.final-price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            price = price.split(",").join("").trim();
            price = parseFloat(price);

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends

      if(PID != "" && price != "" && price != 0){
        arrayToSend.push([getOldPID(link), price, PID]);
      }


    } //for loop ends
    
  } //1st if ends


  if($('.varnt-cont').length > 0){
    var slider = $('.varnt-cont');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.varnt-cont:eq('+ i +')').find('a').length > 0){
        link = $('.varnt-cont:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){
          PID = returnPID(link);
        }

        if(PID != ""){
          if($('.varnt-cont:eq('+ i +')').find('.final-price').length > 0){
            price = $('.varnt-cont:eq('+  i +')').find('.final-price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            price = price.split(",").join("").trim();
            price = parseFloat(price);

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && price != 0){
        arrayToSend.push([getOldPID(link), price, PID]);
      }


    } //for loop ends
    
  } //1st if ends
  if($('.combo-itm').length > 0){
    var slider = $('.combo-itm');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.combo-itm:eq('+ i +')').find('a').length > 0){
        link = $('.combo-itm:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){
          PID = returnPID(link);
        }

        if(PID != ""){
          if($('.combo-itm:eq('+ i +')').find('.final-price').length > 0){
            price = $('.combo-itm:eq('+  i +')').find('.final-price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            price = price.split(",").join("").trim();
            price = parseFloat(price);

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && price != 0){
        arrayToSend.push([getOldPID(link), price, PID]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.auto-cmpr-cont .cmr-item-info').length > 0){
    var slider = $('.auto-cmpr-cont .cmr-item-info');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.auto-cmpr-cont .cmr-item-info:eq('+ i +')').find('a').length > 0){
        link = $('.auto-cmpr-cont .cmr-item-info:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){
          PID = returnPID(link);
        }       
        if(PID != ""){
          if($('.auto-cmpr-cont .cmr-item-info:eq('+ i +')').find('.final-price').length > 0){
            price = $('.auto-cmpr-cont .cmr-item-info:eq('+  i +')').find('.final-price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            price = price.split(",").join("").trim();
            price = parseFloat(price);

          }
        }

        else{
          price = "";
        }
        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && price != 0){
        arrayToSend.push([getOldPID(link), price, PID]);
      }


    } //for loop ends
    
  } //1st if ends



  if($('.variant-tile').length > 0){
    var slider = $('.variant-tile');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      PID2 = "";
      PID1 = "";
      if($('.variant-tile:eq('+ i +')').find('a').length > 0){
        link = $('.variant-tile:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){
          PID = returnPID(link);
        }
        if(PID != ""){
         if($('.variant-tile:eq('+ i +')').find('.vrnt-price').length > 0){
          price = $('.variant-tile:eq('+  i +')').find('.vrnt-price').text();
          price = filter_price(price);
        }
        else if($('.variant-tile:eq('+ i +')').find('.vrnt-price-expTag').length > 0){
          price = $('.variant-tile:eq('+  i +')').find('.vrnt-price-expTag').text();
          price = filter_price(price);
        }
      }

      else{
        price = "";
      }
        //prce ends
      } // if 2 ends
      if(PID != "" && price != "" && price != 0){
        arrayToSend.push([getOldPID(link), price, PID]);
      }


    } //for loop ends
    
  } //1st if ends

  arrayToSend = JSON.stringify(arrayToSend);
  var jsonArr = [{'pairsHk': arrayToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);  
}


function sendCurrent(){
  curData = [];
  var prod = "";
  var image = "";
  var myPrice = "";
  var cur_url = "";
  var current_status = 0;
  var link = window.location.href;
  var link2 = window.location.href;
  var PID = "";
  if($('.variant-name').length > 0){
    prod = $('.variant-name').text().trim();
  }
  else{
    prod = $('h1').text().trim();
  }
  if($('.left-404-msg').length > 0){
    current_status = 1;
  }
  else if(($('.text-right').length > 0) && ($('.text-right').text().toUpperCase().split("OUT OF STOCK").length > 1)){
    current_status = 1;
  }
  else{
    current_status = 0;
  }
  if($('.embedPadding1 .text-right').length > 0){
    var text_sold = 0;
    text_sold = $('.embedPadding1 .text-right').text().trim();
    if(text_sold.toUpperCase().split("SOLD OUT").length > 1){
      current_status = 1;
    }
  }

  if(current_status == 0){

    if($('.variant-price').length > 0){
      myPrice = $('.variant-price').text();
      if(myPrice.split("Rs.").length > 1){
        myPrice = myPrice.split("Rs.");
        myPrice = myPrice[1];
      }
      myPrice = myPrice.split(",").join("").trim();

    }
    else if($("#variant-page .embedPadding1 .prc-svning").length > 0){
      myPrice = $("#variant-page .embedPadding1 .prc-svning").text().trim();
      myPrice = filter_price(myPrice);
    }
    else if($('.sucss-txt').length > 0){
      if($('.sucss-txt').text().split("Rs.").length > 1)
      {
        myPrice = $('.sucss-txt').text().split("Rs.")[1].split(",").join("").trim();
      }
      else
      {
        myPrice = $('.sucss-txt').text().split(",").join("").trim();
      }
    }
  }
  else{
    myPrice = "0";
  }
  myPrice = parseFloat(myPrice);

  if($('.img-box').length > 0){
    image = $('.img-box img').attr("src");
  }

  else if($('.variant-image').length > 0){
    image = $('.variant-image img').attr("src");
  }
  else if($('#variant-page #img_01').length > 0){
    image = $('#variant-page #img_01').attr("src");
  }

  PID = returnPID(link);
  cur_url = window.location.href;
  var breadcrumbF = getBreadCrumb();
  curData.push([prod, image, myPrice, cur_url, current_status, getOldPID(link), breadcrumbF, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataHk': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('.js-product-data').length > 0 || $('#variant-page').length > 0){
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
  var prod1 = "";
  var prod2 = "";
  var prod3 = "";
  var prod4 = "";
  if($('.variant-name').length > 0){
    prod = $('.variant-name').text().trim();
  }
  else{
    prod = $('h1').text().trim();
  }
  if(prod.split("(").length > 1){
    prod1 = prod.split("(")[1].trim();
  }
  if(prod1.split(")").length > 1){
    prod2 = prod1.split(")")[0].trim();
  }
  if(prod.split(prod2).length > 1){
    prod3 = prod.split(prod2).join("");
  }
  if(prod3.split("()").length > 1){
    prod = prod3.split("()").join("").trim();
  }
  if(prod.split("%").length > 1){
    prod = prod.split("%").join("").trim();
  }

  if($('.js-product-data').length>0){
    return prod;
  }
  else if($('#variant-page').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  if($('.variant-image').length > 0){
    image = $('.variant-image img').attr("src");
  }
  else if($('#variant-page #img_01').length > 0){
    image = $('#variant-page #img_01').attr("src");
  }
  return image;
}

function getPrice(){
  price = "";

  if($('.variant-price').length > 0){
   price = $('.variant-price').text();
 }
 else if($("#variant-page .embedPadding1 .prc-svning").length > 0){
  price = $("#variant-page .embedPadding1 .prc-svning").text().trim();
}

price = filter_price(price);
return price;
}

function getAvailability(){
  var avail = 1;
  var loc = window.location.href;
  if($('.left-404-msg').length > 0){
    avail = 0;
  }
  else if(($('.text-right').length > 0) && ($('.text-right').text().toUpperCase().split("OUT OF STOCK").length > 1)){
    avail = 0;
  }
  else if(loc.split("/loyalty/").length > 1){
    avail = -1;
  }
  else if($('.js-product-data').find('.btn-red').attr('disabled') == "disabled"){
    avail = 0;
  }
  else if($('.embedPadding1 .text-right').length > 0){
    var text_sold = 0;
    text_sold = $('.embedPadding1 .text-right').text().trim();
    if(text_sold.toUpperCase().split("SOLD OUT").length > 1){
      avail = 0;
    }
  }
  else if($('.product-details .buy-now-container').find('.btn-red:eq(0)').attr('disabled') == "disabled"){
    avail = 0;
  }
  else if(getProd() == "" && (getPrice() == "" || getPrice() == 0) && $(".right-500-msg").length > 0){
    avail = 0;

  }
  return avail;

}
function getPID(){
  var link2 = window.location.href;
  var link = window.location.href;
  var link1 = window.location.href;
  var PID2 = "";
  var PID = "";
  var pid = window.location.href;
  var PID1 = "";
  var PID3 = "";

  if(link2 != ""){
    if(link2.split("navKey=").length > 1){
      link2 = link2.split("navKey=");
      PID2 = link2[1].trim();
    }
    if(PID2.split("&").length > 1){
      PID2 = PID2.split("&");
      PID2 = PID2[0].trim();
    }

    if(PID2.split("?").length > 1){
      PID2 = PID2.split("?");
      PID2 = PID2[0].trim();
    }
    if(PID2.split("#").length > 1){
      PID2 = PID2.split("#");
      PID2 = PID2[0].trim();
    }
    if(PID2.split("/").length > 1){
      PID2 = PID2.split("/");
      PID2 = PID2[0].trim();
    }

  }

  if(link != ""){

    if(link.split("SP-").length > 1){
      link = link.split("SP-");
      PID1 = link[1].trim();
    }

    if(PID1.split("%3F").length > 1){
      PID1 = PID1.split("%3F");
      PID1 = PID1[0].trim();
    }

    if(PID1.split("?").length > 1){
      PID1 = PID1.split("?");
      PID1 = PID1[0].trim();
    }

    if(PID1.split("&").length > 1){
      PID1 = PID1.split("&");
      PID1 = PID1[0].trim();
    }


    if(PID1.split("#").length > 1){
      PID1 = PID1.split("#");
      PID1 = PID1[0].trim();
    }

    if(PID1.split("/").length > 1){
      PID1 = PID1.split("/");
      PID1 = PID1[0].trim();
    }

  }
  if(link1.split("healthkart.com/").length > 1){
    PID3 = link1.split("healthkart.com/");

    PID3 = PID3[1];
    if(PID3.split("/").length > 1){
      PID3 = PID3.split("/");
      PID3 = PID3[0].trim();
    }
    else if(PID3.split("?").length > 1){
      PID3 = PID3.split("?");
      PID3 = PID3[0].trim();
    }
    else if(PID3.split("&").length > 1){
      PID3 = PID3.split("&");
      PID3 = PID3[0].trim();
    }
  }

  // console.log("PID1: "+PID1);
  // console.log("PID2: "+PID2);
  if(PID3 == "loyalty" && PID2.split("VRNT-").length > 1){
    PID3 = "sv";
  }
  else if(PID3 == "loyalty" && PID2.split("PA-").length > 1){
    PID3 = "pk";
  }
  PID = PID1 + "~" + PID2 + "~" + PID3;
  pid = PID.trim();
  return pid;

}

function returnPID(link){

 var link2 = link;
 var link1 = link;
 var url = link;
 var PID2 = "";
 var PID = "";
 var pid = window.location.href;
 var PID1 = "";
 var PID3 = "";

 if(link2 != ""){
  if(link2.split("navKey=").length > 1){
    link2 = link2.split("navKey=");
    PID2 = link2[1];
  }
  if(PID2.split("&").length > 1){
    PID2 = PID2.split("&");
    PID2 = PID2[0];
  }
  if(PID2.split("?").length > 1){
    PID2 = PID2.split("?");
    PID2 = PID2[0];
  }
  if(PID2.split("#").length > 1){
    PID2 = PID2.split("#");
    PID2 = PID2[0];
  }
  if(PID2.split("/").length > 1){
    PID2 = PID2.split("/");
    PID2 = PID2[0];
  }
}

if(link != ""){
  if(link.split("SP-").length > 1){
    link = link.split("SP-");
    PID1 = link[1];
  }
  if(PID1.split("?").length > 1){
    PID1 = PID1.split("?");
    PID1 = PID1[0];
  }
  if(PID1.split("&").length > 1){
    PID1 = PID1.split("&");
    PID1 = PID1[0];
  }

  if(PID1.split("#").length > 1){
    PID1 = PID1.split("#");
    PID1 = PID1[0];
  }
  if(PID1.split("/").length > 1){
    PID1 = PID1.split("/");
    PID1 = PID1[0];
  }
}

if(link1.split("healthkart.com/").length > 1){
  PID3 = link1.split("healthkart.com/");

  PID3 = PID3[1];
  if(PID3.split("/").length > 1){
    PID3 = PID3.split("/");
    PID3 = PID3[0].trim();
  }
  else if(PID3.split("?").length > 1){
    PID3 = PID3.split("?");
    PID3 = PID3[0].trim();
  }
  else if(PID3.split("&").length > 1){
    PID3 = PID3.split("&");
    PID3 = PID3[0].trim();
  }
}

if(PID3 == "loyalty" && PID2.split("VRNT-").length > 1){
  PID3 = "sv";
}
else if(PID3 == "loyalty" && PID2.split("PA-").length > 1){
  PID3 = "pk";
}
PID = PID1 + "~" + PID2 + "~" + PID3;
pid = PID.trim();
if(url.split('healthkart.com').length < 2){
  pid = 0;
}
if(url == ""){
  pid = 0;
}
return pid;

}

function getOldPID(link){
 var link2 = link;
 var PID2 = "";
 var PID = "";
 var pid = window.location.href;
 var PID1 = "";

 if(link2 != ""){
  if(link2.split("navKey=").length > 1){
    PID2 = link2.split("navKey=");
    PID2 = PID2[1].trim();

    if(PID2.split("-").length > 1){
      PID2 = PID2.split("-");
      PID2 = PID2[1].trim();
    }
    if(PID2.split("&").length > 1){
      PID2 = PID2.split("&");
      PID2 = PID2[0].trim();
    }

    if(PID2.split("?").length > 1){
      PID2 = PID2.split("?");
      PID2 = PID2[0].trim();
    }
    if(PID2.split("#").length > 1){
      PID2 = PID2.split("#");
      PID2 = PID2[0].trim();
    }
    if(PID2.split("/").length > 1){
      PID2 = PID2.split("/");
      PID2 = PID2[0].trim();
    }
  }

}

if(link != ""){

  if(link.split("SP-").length > 1){
    PID1 = link.split("SP-");
    PID1 = PID1[1].trim();


    if(PID1.split("?").length > 1){
      PID1 = PID1.split("?");
      PID1 = PID1[0].trim();
    }

    if(PID1.split("&").length > 1){
      PID1 = PID1.split("&");
      PID1 = PID1[0].trim();
    }


    if(PID1.split("#").length > 1){
      PID1 = PID1.split("#");
      PID1 = PID1[0].trim();
    }

    if(PID1.split("/").length > 1){
      PID1 = PID1.split("/");
      PID1 = PID1[0].trim();
    }
  }

}
  // console.log("PID1: "+PID1);
  // console.log("PID2: "+PID2);
  PID = PID1 + "~" + PID2;
  pid = PID.trim();
  return pid;
}

function getBreadCrumb(){
  var breadcrumb = "";
  var bread_final = "";
  var len_bread = $('.hk-breadcrumb-cntnr').find('a').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('.hk-breadcrumb-cntnr').find('a:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }

  return bread_final;


}
