savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
}

function changeFlag(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},1000);
}

function changeFlag2(i, coupon){
  if(bestCouponFound==0){

    if($("#cart_popup_iframe").contents().find("#coupon_success").css("display")=="block"){
      $("#cart_popup_iframe").contents().find(".removeCoupon").get(0).click();

    }
  }
  if(  $('#cart_popup_iframe').contents().find('.use_promo_code.showme').css("display")=="block")
  {
    $('#cart_popup_iframe').contents().find('#success_promo_code_popup')[0].click();    
  }
  flagCoupon[i] = 0;
}


function couponCheck(){
  var curURL = window.location.href;
//console.log("CP Check was called");
if($("#cart_popup_page").css("display")=="block"){
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  $('#cart_popup_iframe').contents().find('.use_promo_code.showme').after("<a id='couponClick' href='javascript:void();'><img style='margin-left:65px;' src='" + imgURL + "'></a>");
  addToDOM();
  var button = $('#cart_popup_iframe').contents().find("#couponClick").get(0);
  button.addEventListener("click", function(){
    stopCoupon = 1;
    getCoupons();
  }, false);
  setTimeout(function(){couponCheck();},1000);
}
else {
  setTimeout(function(){couponCheck();},1000);
}


}

couponCheck();


function postProcessor(coupon, i){
  savings=0;
  if($("#cart_popup_iframe").contents().find("body").text()!==""){

    if($("#cart_popup_iframe").contents().find("#coupon_success").css("display")=="block")
    {
      savings=$("#cart_popup_iframe").contents().find("#promo_code_amount_html").find(".value.right").text().split("Rs.")[1].trim();

    }
    savings=parseFloat(savings);
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
    //console.log("Savings for " + coupon + " is " + savings);
    if(bestCouponFound==0){
     if($("#fancybox-frame").contents().find(".closetip").length>0)
     {
      $("#fancybox-frame").contents().find(".closetip").click();
    }}
    setTimeout(function(){changeFlag2(i, coupon);},1500);
  }
  else {
    setTimeout(function(){postProcessor(coupon, i);},1000);

  }
}



function preProcessor(i, coupon){
  if(stopCoupon == 1){
   if($("#cart_popup_iframe").contents().find("body").text()!==""){
     $("#cart_popup_iframe").contents().find("#promo_code").val(coupon);
     $("#cart_popup_iframe").contents().find(".button.grey-btn.discount-btn").get(0).click();
  //console.log("Coupon Code applied " + coupon);
  setTimeout(function(){changeFlag(i, coupon);},2500);
}
else {
 setTimeout(function(){preProcessor(i, coupon);},100); 
}
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
    setTimeout(function(){temp(coupon, i, lenArray);},500);
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
////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},500);
}
}


function applyCoupons(coupons){
  //console.log("in apply");
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
  var mytext = coupon;
  if(typeof(mytext) != undefined && mytext!= "undefined"){
    mytext+="PREGOSF20~abc~"
    couponsLength = mytext.split("~").length - 1;
    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
    applyCoupons(mytext);
  }
}

function getCoupons(){
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $('#cart_popup_iframe').contents().find('#success_promo_code_popup')[0].click();
  if($("#cart_popup_iframe").contents().find("#coupon_success").css("display")=="block"){
    $("#cart_popup_iframe").contents().find(".removeCoupon").get(0).click()
  }
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 34}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);

}

