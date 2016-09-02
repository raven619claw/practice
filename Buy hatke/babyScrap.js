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

    if($('.product_summary').length > 0){
      var slider = $('.product_summary');
      var sliderLength = slider.length;
      var link;
      var price;
      var PID;
      var PID1;

      for(i=0;i<sliderLength;i++){
        price = "";
        PID = "";
        PID1 = "";
        if($('.product_summary:eq('+ i +') a').length > 0){
          link = $('.product_summary:eq('+ i +') a:eq(0)').attr('href');
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

            if(PID.split("/p_").length > 1){
              PID = PID.split("/p_");
              PID = PID[1];

            }
          // if(PID.split("/").length > 1){
          //  PID = PID.split("/");
          //  PID1 = PID[0];

          // }
        }
        else{
          PID = "";
        }
      }
      if(PID != ""){
        if($('.product_summary:eq('+ i +')').find('.big_prodetail_tab_discount').length > 0){

          price = $('.product_summary:eq('+ i +')').find('.big_prodetail_tab_discount').text();
        }
        if(price.split("`").length > 1){
          price = price.split("`");
          price =price[1];
        }

        if(price.split("Rs.").length > 1){
          price = price.split("Rs.");
          price =price[1];
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

  if($('.ca-item').length > 0){
    var slider = $('.ca-item');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;
    var PID1;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      PID1 = "";
      if($('.ca-item:eq('+ i +') a').length > 0){
        link = $('.ca-item:eq('+ i +') a:eq(0)').attr('href');
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

          if(PID.split("/p_").length > 1){
            PID = PID.split("/p_");
            PID = PID[1];

          }
          else if($('.ca-item:eq('+ i +') a:eq(1)').attr('href').length > 0) {

            link = $('.ca-item:eq('+ i +') a:eq(1)').attr('href');
            PID = link;
            if(PID.split("?").length > 1){
              PID = PID.split("?");
              PID = PID[0];
            }
            if(PID.split("#").length > 1){
              PID = PID.split("#");
              PID = PID[0];
            }

            if(PID.split("/p_").length > 1){
              PID = PID.split("/p_");
              PID = PID[1];

            }
          }
// if(PID.split("/").length > 1){
//  PID = PID.split("/");
//  PID1 = PID[0];

// }
}
else{
  PID = "";
}
}
if(PID != ""){
  if($('.ca-item:eq('+ i +')').find('.offer-price').length > 0){

    price = $('.ca-item:eq('+ i +')').find('.offer-price').text();
  }
  if(price.split("`").length > 1){
    price = price.split("`");
    price =price[1];
  }

  if(price.split("Rs.").length > 1){
    price = price.split("Rs.");
    price =price[1];
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
var jsonArr = [{'pairsBaby': arrayToSend}];
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
  
  prod = $('.quickview-inner h1:eq(0)').text().trim();
  

  if(($('.stockDetail').text().toUpperCase().split("OUT OF STOCK")).length > 1){
    current_status = 1;
  }
  
  if($('.quickview-inner #current_product_price').length > 0)
  {
    myPrice = $('.quickview-inner #current_product_price').text();
  }

  if(myPrice.split("`").length > 1){
    myPrice = myPrice.split("`");
    myPrice =myPrice[1];
  }
  if(myPrice.split("Rs.").length > 1){
    myPrice = myPrice.split("Rs.");
    myPrice =myPrice[1];
  }
  else if(myPrice.split("Rs").length > 1){
    myPrice = myPrice.split("Rs");
    myPrice =myPrice[1];
  }

  myPrice = myPrice.split(",").join("").trim();
  
  image = $('.productImageMain img').attr('src');
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

    if(PID.split("/p_").length > 1){
      PID = PID.split("/p_");
      PID = PID[1];

    }
    else{
      PID = "";
    }

  }
  else{
    PID = "";
  }

  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  var jsonArr = [{'curDataBaby': curData}];
  jsonArr = JSON.stringify(jsonArr);
  if($('#productpageConatiner').length>0){
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
  prod = $('.quickview-inner h1:eq(0)').text().trim();
  if($('#productpageConatiner').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  image = $('.productImageMain img').attr('src');
  return image;
}

function getPrice(){
  var price = "";
  var myPrice = "";
  if($('.quickview-inner #current_product_price').length > 0)
  {
    myPrice = $('.quickview-inner #current_product_price').text();
  }

  if(myPrice.split("`").length > 1){
    myPrice = myPrice.split("`");
    myPrice =myPrice[1];
  }
  price = myPrice;
  price = filter_price(price);
  if(isNaN(price)){
    price = "";
  }
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.discontinued_product_section').css('display') == 'block'){
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
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];

  }
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];

  }
  if(pid.split("/p_").length > 1){
    pid = pid.split('/p_');
    pid = pid[1];
  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];

  }
  
  return pid;
}

function returnPID(link){

  var pid = link;
  
  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];

  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];

  }
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];

  }
  if(pid.split("/p_").length > 1){
    pid = pid.split('/p_');
    pid = pid[1];
  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];

  }
  
  if(link.split('babyoye.com').length < 2){
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
  var len_bread = $('.breadcrums').find('a').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('.breadcrums').find('a:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }

  return bread_final;


}
