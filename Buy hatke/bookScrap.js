$ = jQuery.noConflict();
var check_prod_pg = 1;

function getCategory(){
  var category = "";
  
  return category;
}

function getProd(){
  var prod = "";
  if($('#prdctdetl h1').length > 0){
    prod = $('#prdctdetl h1:eq(0)').text().trim();
  }
  if($('.product_detail_box').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";
  if($('[itemprop="image"]').length > 0){
    image = $('[itemprop="image"]:eq(0)').attr('src').trim();
  }
  return image;
}

function getPrice(){
  price = "";
  if($('[itemprop="price"]').length > 0)
  {
    price = $('[itemprop="price"]:eq(0)').text().trim();
  }
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('.out-of-stock').length > 0){
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
  if(pid.split("-").length > 1){
    pid1 = pid.split("-");
    pid1 = pid1[pid1.length - 1];
    if(pid1 == ""){
      pid = pid.split("-");
      pid = pid[pid.length - 2];
    }
    else{
      pid = pid1;
    }

  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];

  }
  if(isNaN(pid)){
    pid = "";
  }
  if(pid.length != 13){
    pid = "";
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
  if(pid.split("-").length > 1){
    pid1 = pid.split("-");
    pid1 = pid1[pid1.length - 1];
    if(pid1 == ""){
      pid = pid.split("-");
      pid = pid[pid.length - 2];
    }
    else{
      pid = pid1;
    }

  }
  if(pid.split("/").length > 1){
    pid = pid.split("/")[0];

  }
  if(isNaN(pid)){
    pid = "";
  }
  if(pid.length != 13){
    pid = "";
  }
  if(link.split('bookadda.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  return pid;
}
