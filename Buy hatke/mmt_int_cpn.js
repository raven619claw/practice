savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];

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
  if($('#discountDisplay').css("display")!="none"){
    var msg = $('#discountDisplay').text();
    if(msg.split("-").length>1){
      savings = msg.split("-");
      if(savings.length>1){
        savings = savings[1];
        savings = savings.trim();
        savings = savings.split(",").join("");
        savings = parseFloat(savings);
      }
      else {
        savings = 0;
      }
    }
    else {
      savings = 0;
    }
  }
  else {
    savings = 0;
  }
  savings = parseFloat(savings);

  if(savings!=0&&bestCouponFound==0){
    document.getElementById('deal_code_apply_btn').click();
  }

  if(savings > $('.hdc-sav-amt').text()){
    var currentSavAmt = parseFloat($('.hdc-sav-amt').text()),
    finalSavAmt = savings;
    $({c: currentSavAmt}).animate({c: finalSavAmt}, {
      step: function(now) {
        $('.hdc-sav-amt').text(Math.round(now))
      },
      duration: 1000,
      easing: "linear"
    });
  }

    //console.log("Savings for " + coupon + " is " + savings);
    savingsArray[i] = savings;

    setTimeout(function(){changeFlag2(i, coupon);},1000);
  }

  function preProcessor(i, coupon){
    if(stopCoupon == 1){
      $('#deal_code').val(coupon);
      document.getElementById('deal_code_apply_btn').click();
  //console.log("Coupon Code applied " + coupon);
  setTimeout(function(){changeFlag(i, coupon);},1000);
}
}

function temp(coupon, i, lenArray){
  if(lenArray==100){
    $('.hdc-loading').html('Automatically applying the best coupon now !');
    $('.hdc-lb-progress').text("100% Complete");
    $('.hdc-lb-fg').css("width", "100%");
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
//console.log(savingsArray);
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
 mytext = coupon;
 couponsLength = mytext.split("~").length - 1;
    ////console.log("coupon len"+couponsLength);
    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
    applyCoupons(mytext);
  }

  function getCoupons(){
    for(var i=0;i < 200; i++){
      flagCoupon[i] = 2;
    }
    bestCouponFound = 0;
    var mytext="";
    $('.hatke-discount-cover:eq(0)').css("display", "block");
    if($('#deal_code_remove_btn').length>0){
      document.getElementById('deal_code_remove_btn').click();
    }

    var jsonArr = [{'pos': 11}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 7, startCouponProcess, []);


  }
/*
  var httpq4 = new getXMLHTTPRequest();
  var ext_id, ext_auth;
  chrome.runtime.sendMessage({ext_id: "value"}, function(response) {
    ext_id = response.farewell.split("~")[0];
    ext_auth = response.farewell.split("~")[1];
    var myurl = "http://compare.buyhatke.com/extension/getCoupons.php";
var parameters = "ext_id=" + ext_id + "&auth_val=" + ext_auth + "&pos=11";
httpq4.open("POST", myurl, true);
httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
httpq4.onreadystatechange = function(){
if (httpq4.readyState == 4) {
if(httpq4.status == 200) {
var mytext = httpq4.responseText;
//console.log("Coupons " + mytext);
couponsLength = mytext.split("~").length - 1;
$('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
applyCoupons(mytext);
}
}
};
httpq4.send(parameters);
});
}*/

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
}

function couponCheck(){
  var curURL = window.location.href;
//console.log("CP Check was called");
if(curURL.split('cheapfaresindia.makemytrip.com').length>1){
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  if($('.discount_section').length>0){
    $('.discount_section').after("<a id='couponClick' href='javascript:void();'><img style='margin-left:150px;' src='" + imgURL + "'></a>");
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
