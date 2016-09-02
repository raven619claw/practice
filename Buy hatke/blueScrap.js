//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;
 
function getCategory(){
  var category = "";
  return category;
}

function getProd(){
  var prod = "";
  if($('#details-top  h1').length > 0){
    prod = $('#details-top  h1:eq(0)').text().trim();
  }
  if($('#designContent').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";

  if($('#wrap_outer img').length > 0){
    image = $('#wrap_outer img:eq(0)').attr('src').trim();
  }
  
  return image;
}

function getPrice(){
  price = "";
  if($('#discountedPriceSpan').length > 0){
    price = $('#discountedPriceSpan').text().trim();
  }
  else if($('#details-top .our_price_display').length > 0){
    price = $('#details-top .our_price_display').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('#add_to_cart').css('display') == 'none'){
    avail = 0;
  }
  else if($('#add_to_cart').length == 0){
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
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];

  }
  if(pid.split("~").length > 1){
    pid = pid.split("~")[1];

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
  if(pid.split(".htm").length > 1){
    pid = pid.split(".htm")[0];

  }
  if(pid.split("~").length > 1){
    pid = pid.split("~")[1];

  }
  if(link.split('bluestone.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  
  return pid;



}


// function getBreadCrumb(){
//   var breadcrumb = "";
//   var bread_final = "";
//   var len_bread = $('.header-links').find('a').length;

//   for(i=0;i<len_bread;i++){
//     breadcrumb = $('.header-links').find('a:eq('+ i +')').text().trim();
//     bread_final += breadcrumb + "*~";
//   }

//   return bread_final;


// }
