savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
couponAt = 1;
arrayMsg = [];
arrayBest = [];

//newcode
if(localStorage.coupontostartfrom=="undefined")
{
  localStorage.coupontostartfrom=1;
}
if(localStorage.startfrombetween=="undefined")
{
  localStorage.startfrombetween=0;
}



//newcode






function changeFlag(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},1000);
}

function changeFlag2(i, coupon){
  flagCoupon[i] = 0;
}

function removeCompletely(){
}

function postProcessor(coupon, i){
  //console.log("post1");
  cpn_msg = "";
  if($('.xo-curtain').css("display")!="block" && ($(".sm-co.sm-su").length>0 || $(".sm-co.sm-er").length>0 ||$("#coupon_validation_error").css("display")!="block")){
   if(($('#roCouponTable .xo-r-grn').length > 0) && ($('#roCouponTable .xo-r-grn').text().trim() != "")){
    var cpn_msg = $('#roCouponTable .xo-r-grn').text().trim();
  }
  else if(($('#roPageErrorDiv .sm-md:eq(1)').length > 0) && ($('#roPageErrorDiv .sm-md:eq(1)').text().trim() != "")){
    var cpn_msg = $('#roPageErrorDiv .sm-md:eq(1)').text().trim();
  //newcode
if(cpn_msg=="Concurrent modification error")
    {
localStorage.startfrombetween=1;
localStorage.coupontostartfrom=i;
    }


  //newcode
  }
  else if($('#coupon_validation_error .sm-md:eq(1)').length > 0){
    var cpn_msg = $('#coupon_validation_error .sm-md:eq(1)').text().trim();
  }
    //console.log("post2");
    if($('.xo-r-cpn').text()==""){
      //console.log("post3");
      savings = 0;
      //console.log("savings for coupon is  "+ coupon + " : "+ savings);

    }
    else {
      savings = $('.xo-r-cpn').text().trim().split("Rs.")[1].trim().split(".")[0];
      savings = savings.split(",").join("");
      savings = parseFloat(savings);
      //console.log("savings...."+savings);
    }
    savings = parseFloat(savings);
    // console.log("Savings for " + coupon + " is " + savings);
    // alert("savings: "+savings+ "amt:  "+$('.hdc-sav-amt:eq(0)').text().trim());
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
    coupArray[i] = coupon;
    couponAt = 1;
    arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
    // console.log("Savings for " + coupon + " is " + savings);
    // console.log("Msg for " + coupon + " is " + cpn_msg);

    if($('#couponRemove').length>0){
      if(bestCouponFound==0){
        document.getElementById('couponRemove').click();
      }
    }
    setTimeout(function(){changeFlag2(i, coupon);},1000);
  }
  else {
    setTimeout(function(){postProcessor(coupon, i);},1000);
  }
}


function terminateProc(){


}
function preProcessor(i, coupon){
  if(stopCoupon == 1){
    $('#enterCoupon').val(coupon);
    document.getElementById('couponApply').click();

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
}

function endProcess(i){
  //console.log("called with " + i);
  if(flagCoupon[i]==0){
  //console.log("Process terminated");
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
  var jsonArr1 = [{'savings': max}];
  jsonArr1 = JSON.stringify(jsonArr1);
  sendMessage(0, jsonArr1, 0, doNothing, []);
}
else {
  $('.hatke-discount-cover').css("display", "none");
  $('.hatke-discount-cover:eq(2)').css("display", "block");
} 
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
//console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}

function couponInitiate(mytext){
  //new code
  setCookie("mytext",mytext,1);
  console.log(getCookie("mytext"));
  //newcode
  mytext="HATKE20~"+mytext;    
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
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  if($('#couponRemove').length>0){
    document.getElementById('couponRemove').click();

  }
  var jsonArr = [{'pos': 4}];
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
if(curURL.split('ebay.in/_sparkrop').length>1 || curURL.split('ReviewOrder?cartId=').length>1){
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  if($('#roCouponSection').length>0){
    $('#roCouponSection').after("<a id='couponClick' href='javascript:void();'><img style='margin-left: 85px;margin-top: -40px;margin-bottom: 10px;' src='" + imgURL + "'></a>");
    // $('#couponClick').after('<div class="hk-ebay-cb-box" style="position:relative;"><a target="_blank" href="http://compare.buyhatke.com/promotions/ebay-cashback-offer/?utm_source=extension" class="hk-ebay-cb-link"><div class="hk-cb-b-wrap"><div class="hk-b-content"><div class="hk-b-top-txt-wrap" style="font-family: calibri;font-size: 13px;">Get 11% cashback on all products* by using CSFE6QHGDS coupon code. Discount of 0.01 means you are eligible for Cashback ! </div><div class="hk-b-bottom-txt-wrap"><em>Valid till <strong>June 20th</strong></em></div></div><div class="hk-b-button">Know More</div><img style="margin-right:20px;margin-bottom:15px;" src="http://compare.buyhatke.com/images/buyhatke_logo_big.png" class="hk-bh-logo" alt="Buyhatke Logo"></div></a></div>');
    addToDOM();
    var button = document.getElementById("couponClick");
    button.addEventListener("click", function(){
      stopCoupon = 1;
      getCoupons();
    }, false);
  }
  else if($('#roProceed2Pay').length>0){
    $('#roProceed2Pay').after("<a id='couponClick' href='javascript:void();'><img style='margin-left:65px;' src='" + imgURL + "'></a>");
  // $('#couponClick').after('<div class="hk-ebay-cb-box" style="position:relative;"><a target="_blank" href="http://compare.buyhatke.com/promotions/ebay-cashback-offer/?utm_source=extension" class="hk-ebay-cb-link"><div class="hk-cb-b-wrap"><div class="hk-b-content"><div class="hk-b-top-txt-wrap" style="font-family: calibri;font-size: 13px;">Get 11% cashback on all products* by using CSFE6QHGDS coupon code. Discount of 0.01 means you are eligible for Cashback ! </div><div class="hk-b-bottom-txt-wrap"><em>Valid till <strong>June 10th</strong></em></div></div><div class="hk-b-button">Know More</div><img style="margin-right:20px;margin-bottom:15px;" src="http://compare.buyhatke.com/images/buyhatke_logo_big.png" class="hk-bh-logo" alt="Buyhatke Logo"></div></a></div>');
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



console.log(localStorage.coupontostartfrom);
console.log(localStorage.startfrombetween);