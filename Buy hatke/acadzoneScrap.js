function getCategory(){
  var category = "";
  return category;
}    
sendEcomm();

//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;


function getProd(){
  var prod = "";
  prod = $('[itemprop="name"]:eq(0)').text().trim();
  if($('[itemtype="http://schema.org/Product"]').length>0){
    return prod;
  }
  else {
    return "";
  }
}

function getImage(){
  var image = "";

  image = $('[itemprop="image"]:eq(0)').attr("src");
  
  return image;
}

function getPrice(){
  price = "";
  if($('[itemprop="price"]').length > 0)
  {
    price = $('[itemprop="price"]:eq(0)').text().trim();
  }
  
  price = filter_price(price);
  if(isNaN(price)){
    price = 0;
  }
  return price;
}

function getAvailability(){
  var avail = 1;
  if($('[itemprop="availability"]').parent().text().toUpperCase().split("OUT OF STOCK").length > 1){
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
  if(link.split('acadzone.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  
  return pid;
}

// var cur_url = window.location.href;
// if(cur_url.split("acadzone.com/account/view-wishlist").length > 1){
//   var importImg = returnResource("import_img.png");
//   if($('#searchForm').length > 0){
//     $('#searchForm').after('<div id="importHatke"> <img src="'+importImg+'" alt="Click to import wishlist" height="50px" width="auto"/> </div>');
//   }
// }

// $("#importHatke").click(function(){
//   acadWishList();
// });

// function acadWishList(){
//   wishListAcad = [];
//   var link = "";
//   var url = "";
//   var prod = "";
//   var image = "";
//   var price = "";
//   var PID = "";
//   var pos = 1585;
//   var brand = "";

//   if($('.search-result').length > 0) {
//     var slider = $('.search-result');
//     var sliderLength = $('.search-result').length;

//     for(i=0;i<sliderLength;i++){
//       link = "";
//       url = "";
//       prod = "";
//       image = "";
//       price = "";
//       PID = "";
//       price_final = 0;
//       if($('.search-result:eq('+ i +')').find('.ci-info a').length > 0){
//         link = $('.search-result:eq('+ i +')').find('.ci-info:eq(0) a:eq(0)').attr('href');
//         url = link;
//         PID = link;
//         if(PID.split("?").length > 1){
//           PID = PID.split("?");
//           PID = PID[0];
//         }
//         if(PID.split("#").length > 1){
//           PID = PID.split("#");
//           PID = PID[0];
//         }
//         if(PID.split("/p-").length > 1){
//           PID = PID.split("/p-");
//           PID = PID[1];
//         }
//       }
//       else{
//         link = "";
//         PID = "";
//       }
//       if($('.search-result:eq('+ i +')').find('.price span').length > 0){
//         price_final = $('.search-result:eq('+ i +')').find('.price span').length - 1;
//         price = $('.search-result:eq('+ i +')').find('.price span:eq('+price_final+')').text().trim();
//         price = filter_price(price);
//       }
//       if(isNaN(price)){
//         price = "";
//       }

//       if($('.search-result:eq('+ i +')').find('.booktitile a').length > 0){
//         prod = $('.search-result:eq('+ i +')').find('.booktitile:eq(0) a:eq(0)').text().trim();
//       }

//       if($('.search-result:eq('+ i +')').find('.col1 img').length > 0){
//         image = $('.search-result:eq('+ i +')').find('.col1:eq(0) img:eq(0)').attr('src').trim();
//       }

//       if(PID != "" && price != ""){
//         wishListAcad.push([encodeURIComponent(PID), encodeURIComponent(prod), price, encodeURIComponent(image), pos, encodeURIComponent(url)]);
//       }
//     }

//     console.log("Wishlist: " + wishListAcad);
//     wishJson = JSON.stringify(wishListAcad);
//     var jsonArr = [{'wishList': wishJson}];
//     jsonArr = JSON.stringify(jsonArr);
//     sendMessage(1, jsonArr, 17, doNothing, []);  
//     console.log("WishlistJSON: " + wishJson);
//   }

// }

