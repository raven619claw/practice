savingsArray = [];
coupArray = [];
bestCouponFound = 0;
arrayMsg = [];
arrayBest = [];
couponAt = 333;

flagCoupon = [];
for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  //var status = $('.pgLoading').attr("style").split("display:")[1].split(";")[0].trim();
  //if(status=="none"){
    flagCoupon[i] = 1;
    setTimeout(function(){postProcessor(coupon, i);},1000);
  //}
  //else {
   // setTimeout(function(){changeFlag(i, initialamount, coupon);},1000);
  //}
}

function changeFlag2(i, coupon){
  if(bestCouponFound==0){
    if(document.getElementById("cancel_coupon") != undefined){
     document.getElementById('cancel_coupon').click();
   }
 }
 flagCoupon[i] = 0;
}

function removeCompletely(){
   // $('#removeMask').find('a:eq(1)').click();
 }

 function postProcessor(coupon, i){
   if(bestCouponFound==0){
     if(document.getElementById("cancel_coupon") != undefined){
       document.getElementById('cancel_coupon').click();
     }
   }
   if($('#coupon-msg-wrong').css('display') == 'block' || ($('#coupon-msgs').css('display') != 'none' && $('#coupon-msgs').text().trim() != "")){
    if($('#coupon-msg-wrong').css('display') == 'block'){
      savings = 0;
    }
    else{ 
      savings= $("#additional_discount").attr("data-additional-discount-amount").trim();
      savings = filter_price(savings);
    }

    if(savings > $('.hdc-sav-amt:eq(0)').text().trim()){
      var currentSavAmt = parseFloat($('.hdc-sav-amt:eq(0)').text().trim()),
      finalSavAmt = savings;
      $({c: currentSavAmt}).animate({c: finalSavAmt}, {
        step: function(now) {
          $('.hdc-sav-amt').text(Math.round(now))
        },
        duration: 1000,
        easing: "linear"
      });
    }
    savingsArray[i] = savings;
    cpn_msg = "";
    
    if($('#coupon-msg-wrong').css("display") == "none"){
     if($('#coupon-msgs').length > 0){
      cpn_msg = $('#coupon-msgs').text().trim();
    }
  }
  else if($('#coupon-msgs').css("display") == "none"){
   if($('#coupon-msg-wrong').length > 0){
    cpn_msg = $('#coupon-msg-wrong').text().trim();
  }
}
// alert(cpn_msg);
    // console.log("Savings for " + coupon + " is " + savings);
    // console.log("cpn_msg for " + coupon + " is " + cpn_msg);

    couponAt = 333;
    arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
    if(bestCouponFound==0){
     if(document.getElementById("cancel_coupon") != undefined){
       document.getElementById('cancel_coupon').click();
     }
   }
   setTimeout(function(){changeFlag2(i, coupon);},1000);
 }
 else {
  setTimeout(function(){postProcessor(coupon, i);},1000);
}
}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
    $("#coupon_code").val(coupon);
    $("#apply_coupon").get(0).click();

    //console.log("Coupon Code applied " + coupon);
    setTimeout(function(){changeFlag(i, coupon);},1000);
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
  //setTimeout(function(){preProcessor(i, coupon, initialamount);},7000*i);
  //setTimeout(function(){couponApplied(initialamount);},7000*(i) + 3500); 
}

function endProcess(i){
  ////console.log("called with " + i);
  if(flagCoupon[i]==0){
////console.log("Process terminated");
max = -111111;
ind_req = 1000;
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
  savings = $('.hdc-sav-amt:eq(0)').text().trim();
  $('.hatke-discount-cover:eq(1)').css("display", "block");
  var currentSavAmt = 0,
  finalSavAmt = max;
  $({c: currentSavAmt}).animate({c: finalSavAmt}, {
    step: function(now) {
      $('.hdc-sav-amt').text(Math.round(now))
    },
    duration: 1000,
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
sendMessage(1, jsonArr, 12, doNothing, []); 
////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}
function couponInitiate(mytext){
  mytext = "HATKE20~"+mytext;     

    //console.log("mytext"+mytext);
    couponsLength = mytext.split("~").length - 1;
    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
    applyCoupons(mytext); 

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

function getCoupons(){
  var mytext='';
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }

  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 24}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);
}



function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
}
function couponCheck(){
  var curURL = window.location.href;
//console.log("CP Check was called");
if(curURL.split('pepperfry.com/checkout/cart').length>1){
  //console.log("CoupInProgress " + getCookie("coupInProgress"));
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  // if($(".clearfix.s-hidden.mts.couponFormEl").length!=0){
  //   document.getElementById("addCoupon").click();
  // }
  if($(".cart_coupon_fieldset").length>0){
    $(".cart_coupon_fieldset").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
    addToDOM();
    var button = document.getElementById("couponClick");
    button.addEventListener("click", function(){
      stopCoupon = 1;
      getCoupons();
    }, false);
  }
  else if($("#coupon_code").length>0){
    $("#coupon_code").parent().after("<a id='couponClick' href='javascript:void();'><img src='" + imgURL + "'></a>");
    addToDOM();
    var button = document.getElementById("couponClick");
    button.addEventListener("click", function(){
      stopCoupon = 1;
      getCoupons();
    }, false);
  }
  else {
    setTimeout(function(){couponCheck();},1000);
  }
}

}

couponCheck();
