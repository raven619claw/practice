//avail (1 = available, 0 = oos, -1 = permanently disconnected )
function getCategory(){
  var category = "";
  return category;
}
var check_prod_pg = 1;
function getProd(){
  var prod = "";
  prod = $('[itemprop="name"]:eq(0)').text().trim();
  if($('#productpagecontainer').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";

  image = $('[itemprop="image"]:eq(0)').attr("content");
  
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
  if($('#BuyNowSection').css('display') == 'none'){
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
  if(pid.split("/").length > 1){
    pid1 = pid.split("/");
    pid1 = pid1[pid1.length - 1];
    if(pid1 == ""){
      pid = pid.split("/");
      pid = pid[pid.length - 2];
    }
    else{
      pid = pid1;
    }
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
  
  if(pid.split("/").length > 1){
    pid1 = pid.split("/");
    pid1 = pid1[pid1.length - 1];
    if(pid1 == ""){
      pid = pid.split("/");
      pid = pid[pid.length - 2];
    }
    else{
      pid = pid1;
    }
  }
  if(link.split('goodlife.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  
  return pid;

}
