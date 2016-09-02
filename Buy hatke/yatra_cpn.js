savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
arrayMsg = [];
arrayBest = [];
couponAt = 1293;

function getXMLHTTPRequest() {

  req = new XMLHttpRequest();
  return req;

}

for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},3000);
}

function changeFlag2(i, coupon){
  flagCoupon[i] = 0;
}

function removeCompletely(){
}

function postProcessor(coupon, i){

 var msg = $('#promocodeContainer h3:eq(0)').text().trim();

 if($(".promo-btn-success").length > 0) {
  var savings = $(this).parent().parent().find(".rs").parent().text().trim();
  savings = savings.toUpperCase().split("RS.");
  savings = savings[1].trim();
  savings = savings.toUpperCase().split("REMOVE");
  savings = savings[0].trim();
  savings = savings.split(",").join("").trim();
  savings = parseFloat(savings);
}
else{
  var savings = 0;
}
if(isNaN(savings) == true){
  savings = 0;
}

if(savings > $('.hdc-sav-amt:eq(0)').text().trim()){
  var currentSavAmt = parseFloat($('.hdc-sav-amt:eq(0)').text()),
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
if($('#promocodeContainer').length > 0){
  cpn_msg = $('#promocodeContainer h3:eq(0)').text().trim();
}
// console.log("Savings for " + coupon + " is " + savings);
// console.log("cpn_msg for " + coupon + " is " + cpn_msg);

couponAt = 1293;
arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);

setTimeout(function(){changeFlag2(i, coupon);},100);

}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
    // $('#promoText').val(coupon);
    $('#promocodeContainer input:eq(0)').val(coupon);
    $('#promocodeContainer').find("button:eq(0)").click();
    // console.log("Coupon Code applied " + coupon);
    setTimeout(function(){changeFlag(i, coupon);},100);
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
  // console.log("called with " + i);
  if(flagCoupon[i]==0){
    // console.log("Process terminated");
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
    savings = $('.hdc-sav-amt:eq(0)').text();
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
  // console.log(savingsArray);
  arrayMsg = JSON.stringify(arrayMsg);
  var jsonArr = [{'cpn_msg': arrayMsg}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 12, doNothing, []);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}
function couponInitiate(mytext){
 mytext="HATKE20~FLYOFF~";
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
  var mytext="";
  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 17}];
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
  // console.log("CP Check was called");
  if(curURL.split('secure.yatra.com').length>1){
    var imgURL = returnResource("apply-coupon.png");
    // console.log("TEst passed");
    if($('#promocodeContainer').length>0){
      $('#promocodeContainer').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
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
