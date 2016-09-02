savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
cpnTxt="show";
cpn_msg = "";
arrayMsg = [];
arrayBest = [];
couponAt = 921;

for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},1500);
}

function changeFlag2(i, coupon){
  if($(".icon-close.popup-close.cont-rht").length>0)
  {
   $(".icon-close.popup-close.cont-rht").click();
 }
 if(bestCouponFound==0){
   if($("#fancybox-frame").contents().find(".closetip").length>0)
   {
    $("#fancybox-frame").contents().find(".closetip").click();
  }
}
flagCoupon[i] = 0;
}

function postProcessor(coupon, i){
  cpn_msg = "";
  if($(".icon-close.popup-close.cont-rht").length>0)
  {
   $(".icon-close.popup-close.cont-rht").click();
 }
 if($(".add-cpn").length > 0)
 {
   if($(".row.promo-discount").find(".col-xs-4.text-right").text().split("Rs.").length>1)
   {
    savings=$(".row.promo-discount").find(".col-xs-4.text-right").text().split("Rs.")[1].trim();
  }
  else
  {
    savings=$(".row.promo-discount").find(".col-xs-4.text-right").text().trim();
  }
  savings=parseFloat(savings);

  if( ($('.couponStatus:eq(0)').css('display') == "block" || $('.couponStatus:eq(0)').css('display') == "inline-block") && $('.couponStatus:eq(1)').css('display') == "none"){
    cpn_msg = $('.couponStatus:eq(0) div:eq(0)').text().trim();
  }
  else if( ($('.couponStatus:eq(1)').css('display') == "block" || $('.couponStatus:eq(1)').css('display') == "inline-block") && $('.couponStatus:eq(0)').css('display') == "none"){
    cpn_msg = $('.couponStatus:eq(1) div:eq(0)').text().trim();
  }
  else if($('.couponStatus:eq(1)').css('display') == "none" && $('.couponStatus:eq(0)').css('display') == "none"){
    cpn_msg = $('.couponStatus:eq(2) div:eq(0)').text().trim();
  }
  if((cpn_msg.toLowerCase().split("invalid offer").length > 1 || cpn_msg.toLowerCase().split("invalid coupon").length > 1 || cpn_msg.toLowerCase().split("stock is not available for freebies").length > 1) && cpn_msg != ""){
    savings = 0;
  }


  if(savings > $('.hdc-sav-amt:eq(0)').text().trim()){
    var currentSavAmt = parseFloat($('.hdc-sav-amt:eq(0)').text().trim()),
    finalSavAmt = savings;
    $({c: currentSavAmt}).animate({c: finalSavAmt}, {
      step: function(now) {
        $('.hdc-sav-amt').text(Math.round(now))
      },
      duration: 1500,
      easing: "linear"
    });
  }

  savingsArray[i] = savings;
  coupArray[i] = coupon;
  couponAt = 921;
  var checkUpdated = 1;
  arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt, checkUpdated ]);

  // console.log("Savings for " + coupon + " is " + savings + "Msg for " + coupon + " is " + cpn_msg);
  // console.log("Msg for " + coupon + " is " + cpn_msg);
  if(bestCouponFound==0){
   if($(".couponStatus.hide:eq(0)").css("display")=="block")
   {
     $(".remove-coupon.btn.btn-gray.btn-mini.fnt-caps.disp-inln").get(0).click();
   }
 }
 setTimeout(function(){changeFlag2(i, coupon);},1500);
}
else {
  setTimeout(function(){postProcessor(coupon, i);},1000);

}

// // if($(".add-cpn").length > 0)
// // {
// //   if($(".col-sm-4.hidden-xs").length > 0){
// //     savings = $(".col-sm-4.hidden-xs .col-sm-6.text-right:eq(3)").find('span:eq(0)').text().trim();
// //   }
// //   else{
// //     savings = 0;
// //   }
// // }

// savings=parseFloat(savings);
// if(savings > $('.hdc-sav-amt').text()){
//   var currentSavAmt = parseFloat($('.hdc-sav-amt').text()),
//   finalSavAmt = savings;
//   $({c: currentSavAmt}).animate({c: finalSavAmt}, {
//     step: function(now) {
//       $('.hdc-sav-amt').text(Math.round(now))
//     },
//     duration: 1500,
//     easing: "linear"
//   });
// }

// coupArray[i] = coupon;
//     console.log("Savings for " + coupon + " is " + savings);
//     if(bestCouponFound==0){
//      if($(".couponStatus.hide:eq(0)").css("display")=="block")
//      {
//        $(".remove-coupon.btn.btn-gray.btn-mini.fnt-caps.disp-inln").get(0).click();
//      }
//    }
//    else{
//     setTimeout(function(){postProcessor(coupon, i);},1000);
//   }

}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
   if($(".add-cpn").length > 0){
    $(".js-coupon-code").val(coupon);
    document.getElementsByClassName("disp-inln apply-coupon btn btn-gray fnt-caps")[0].click(); 
  //console.log("Coupon Code applied " + coupon);
  if($(".icon-close.popup-close.cont-rht").length>0)
  {
   $(".icon-close.popup-close.cont-rht").click();
 }
 setTimeout(function(){changeFlag(i, coupon);},1000);
}
else {
 setTimeout(function(){preProcessor(i, coupon);},1000); 
}
}
}

function temp(coupon, i, lenArray){
  if(lenArray==100){
    $('.hdc-loading').html('Automatically applying the best coupon now !');
    $('.hdc-lb-progress').text("100% Complete");
    $('.hdc-lb-fg').css("width", "100%");
    arrayBest.push([coupon, couponAt]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
    preProcessor(i, coupon);
  }
  else if(i==0||flagCoupon[i-1]==0){
    $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
    var perDone = i/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    $('.hdc-lb-progress').text(perDone + "% Complete");
    $('.hdc-lb-fg').css("width", perDone + "%");
    preProcessor(i, coupon);
  }
  else {
    setTimeout(function(){temp(coupon, i, lenArray);},1000);
  }
}

function endProcess(i){
  ////console.log("called with " + i);
  if(flagCoupon[i]==0){
////console.log("Process terminated");
max = -111111;
ind_req = 1500;
//console.log(savingsArray);
//console.log(coupArray);
for(m=0;m<savingsArray.length;m++){
 if(max < savingsArray[m]){
  max = savingsArray[m];
  ind_req = m;
}
}
if(max>0){
  bestCouponFound = 1;
  coup_req = coupArray[ind_req];
  flagCoupon[0] = 2;
  temp(coup_req, 0, 100);
  $('.hatke-discount-cover').css("display", "none");
  savings = $('.hdc-sav-amt:eq(0)').text();
  $('.hatke-discount-cover:eq(1)').css("display", "block");
  var currentSavAmt = 0,
  finalSavAmt = max;
  $({c: currentSavAmt}).animate({c: finalSavAmt}, {
    step: function(now) {
      $('.hdc-sav-amt').text(Math.round(now))
    },
    duration: 1500,
    easing: "linear"
  });
  var jsonArr = [{'savings': max}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}
else {
  $('.hatke-discount-cover').css("display", "none");
  $('.hatke-discount-cover:eq(2)').css("display", "block");

} 
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
// console.log("jsonArr: "+jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}

function applyCoupons(coupons){
 couponsArray = coupons.split("~");
 var savings = [];
 for(var i=0;i<couponsArray.length;i++){
  if(couponsArray[i]!=""&&couponsArray[i]!=" "){

    var cur = couponsArray[i];
    coupArray[i] = cur;
    temp(cur, i, couponsArray.length-1);
  }
}
endProcess(couponsArray.length-2);
}
function couponInitiate(coupon){
  var mytext="HATKE20~"+coupon;     
  //console.log("Coupons " + mytext);
  couponsLength = mytext.split("~").length - 1;
  $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
  applyCoupons(mytext); 
}
function getCoupons(){
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 30}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);

}

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
    $('#couponClick').css("display", "none"); 
  }
}
function couponCheck(){

  var curURL = window.location.href;
//console.log("CP Check was called");
if(curURL.split('healthkart.com/cart').length>1){
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  if($(".remove-cpn.show").length>0 && cpnTxt!="hide")
  { 
    cpnTxt="hide";
    $(".remove-coupon.btn.btn-gray.btn-mini.fnt-caps.disp-inln").get(0).click();

  }
  // if($("body>div:eq(1)").css("display")=="none" && $('#couponClick').length == 0){
    if($(".add-cpn.row.show").length>0 || $(".add-cpn.row.hide").length>0 ){
      // console.log("i have reached here");

      $('.add-cpn.row.'+cpnTxt).after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
      addToDOM();
      var button = document.getElementById("couponClick");
      button.addEventListener("click", function(){
        stopCoupon = 1;
        getCoupons();
      }, false);
    }
    else {
      // console.log("here");  
      $(".remove-coupon.btn.btn-gray.btn-mini.fnt-caps.disp-inln").get(0).click();
      setTimeout(function(){couponCheck();},1000);
    }
// }
// else{
//  setTimeout(function(){couponCheck();},1000); 
// }
}
}

couponCheck();
