$ = jQuery.noConflict();
savingsArray = [];
coupArray = [];
bestCouponFound = 0;
removeCalled = 0;
arrayMsg = [];
couponAt = 431;
arrayBest = [];
var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
flagCoupon = [];
for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},1500);
}

function changeFlag2(i, coupon){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  flagCoupon[i] = 0;
  if(bestCouponFound==0 && main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0] != null){
    main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0].click();
    removeCalled = 1;
    setTimeout(function(){}, 100);

  }
}

function postProcessor(coupon, i){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  if(main_frame.getElementsByClassName('order_summary')[0] != null){ 
    savings = 0;
    if(main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('overall_val')[0] != null){ 
      savings = main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('overall_val')[0].innerHTML;
      savings = savings.replace(/<[^>]*>/g, "");
      savings = savings.split(",").join("").trim();
      savings = parseFloat(savings);
      if(isNaN(savings)){
        savings = 0;
      }
    }
    
    cpn_msg = "";
    if(main_frame.getElementsByClassName("cart_rule_wrap")[0].getElementsByClassName("alert-success")[0] != null){
      cpn_msg = main_frame.getElementsByClassName("cart_rule_wrap")[0].getElementsByClassName("alert-success")[0].innerHTML;
      cpn_msg = cpn_msg.replace(/<[^>]*>/g, "");

    }
    else if(main_frame.getElementById("divAppliedCouponErrors").style.display == "block"){
      cpn_msg = main_frame.getElementById("divAppliedCouponErrors").innerHTML;
      cpn_msg = cpn_msg.replace(/<[^>]*>/g, "");
    }
    else {
      cpn_msg = "";
    }

    if(savings > parseFloat($('.hdc-sav-amt:eq(0)').text().trim())){
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
    couponAt = 431;
    arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
    // alert("Savings for " + coupon + " is " + savings);
    // alert("Msg for " + coupon + " is " + cpn_msg);
    if(bestCouponFound==0 && main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0] != null){
     main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0].click();
     removeCalled = 1;
     setTimeout(function(){}, 100);

   }

   setTimeout(function(){changeFlag2(i, coupon);},1500);
 }
 else{
   setTimeout(function(){postProcessor(coupon, i);},1500);

 }
}

function preProcessor(i, coupon){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  if(stopCoupon == 1){
    if(main_frame.getElementById('voucher_coupon_collapse') == null && main_frame.getElementById("voucher_coupon") != null){
     main_frame.getElementById("voucher_coupon").getElementsByTagName('a')[0].click();
   }
   if(main_frame.getElementById("btnApplyCoupon") != null){
     main_frame.getElementById("btnApplyCoupon").removeAttribute("disabled");
   }
   if(main_frame.getElementById("sleCouponCode") != null){
     main_frame.getElementById("sleCouponCode").value = coupon;
   }
   if(main_frame.getElementById("btnApplyCoupon") != null){
     main_frame.getElementById("btnApplyCoupon").click();
   }
   setTimeout(function(){changeFlag(i, coupon);},2500);
 }
 else {

   setTimeout(function(){preProcessor(i, coupon);},1000); 
 }
}

function temp(coupon, i, lenArray){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  if(lenArray==100){
    $('.hdc-loading').html('Automatically applying the best coupon now !');
    $('.hdc-lb-progress').text("100% Complete");
    $('.hdc-lb-fg').css("width", "100%");
    arrayBest.push([coupon, couponAt]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
    setTimeout(function(){}, 3000);
    preProcessor(i, coupon);
  }
  else if(i==0||flagCoupon[i-1]==0){
    $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
    var perDone = i/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    $('.hdc-lb-progress').text(perDone + "% Complete");
    $('.hdc-lb-fg').css("width", perDone + "%");
    setTimeout(function(){}, 3000);
    preProcessor(i, coupon);
  }
  else {
    setTimeout(function(){temp(coupon, i, lenArray);},500);
  }
}

function endProcess(i){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
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
  savings = parseFloat($('.hdc-sav-amt:eq(0)').text().trim());
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
////console.log(savingsArray);
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
}
else {
  setTimeout(function(){endProcess(i);},500);
}
}

function couponInitiate(mytext){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  mytext="HATKE20~"+mytext;     
    //console.log("mytext"+mytext);
    couponsLength = mytext.split("~").length - 1;
    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
    applyCoupons(mytext); 

  }

  function applyCoupons(coupons){
    var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
    if(removeCalled==0){
     couponsArray = coupons.split("~");
     // var savings = [];
     for(var i=0;i<couponsArray.length;i++){
      if(couponsArray[i]!=""&&couponsArray[i]!=" "){
        var cur = couponsArray[i];
        temp(cur, i, couponsArray.length-1);
      }
    }
    endProcess(couponsArray.length-2);
  }
  else {
    removeCalled = 0;
    setTimeout(function(){applyCoupons(coupons);},2500);
  }
}

function getCoupons(){
  if($('#divLoginRegister').css("display") == "none"){
    var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
    for(var i=0;i < 200; i++){
      flagCoupon[i] = 2;
    }
    bestCouponFound = 0;
    if(typeof(main_frame) != undefined){
      if(main_frame.getElementsByClassName('order_summary')[0] != null && main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0] != null && bestCouponFound == 0){
        main_frame.getElementsByClassName('order_summary')[0].getElementsByClassName('promo_del')[0].click();
        removeCalled = 1;
        setTimeout(function(){}, 100);
      }
      if(main_frame.getElementById('voucher_coupon_collapse') == null && main_frame.getElementById("voucher_coupon") != null ){
        main_frame.getElementById("voucher_coupon").getElementsByTagName("a")[0].click();
      }
    }
    $('.hatke-discount-cover:eq(0)').css("display", "block");
    
    var jsonArr = [{'pos': 27}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 7, startCouponProcess, []);
  }
}

function removeTheCover(){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
}

function couponCheck(){
  var main_frame = document.querySelector("#ifrmCheckoutCartRules").contentDocument;
  var curURL = window.location.href;
  if(curURL.split('trendin.com/checkoutsummary').length>1){
    var imgURL = returnResource("apply-coupon.png");
    if($("#divViewApplyCoupon").length > 0 ){
      $("#divViewApplyCoupon").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
      addToDOM();
      var button = document.getElementById("couponClick");
      button.addEventListener("click", function(){
        $('#divViewApplyCoupon').click();
        stopCoupon = 1;
        setTimeout(function(){getCoupons();},1000);
      }, false);
    }
    else {
      setTimeout(function(){couponCheck();},1000);
    }
  }
}

couponCheck();
