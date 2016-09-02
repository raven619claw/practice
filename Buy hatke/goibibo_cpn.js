savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
cpn_msg = "";
arrayMsg = [];
couponAt = 1294;
arrayBest = [];
// stopCoupon = 0;

function getXMLHTTPRequest() {

  req = new XMLHttpRequest();
  return req;

}

for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

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
  // console.log("postProcessor was called");
  if($('#go_gi_change_fareD.popShow').length > 0){    

    if($('#go_gi_change_fareD.popShow').text().toLowerCase().split("total discount rs.").length > 1){
      savings = $('#go_gi_change_fareD.popShow').text().toLowerCase().split("total discount rs.")[1].trim();
    }
    else if($('#gi_change_fareD.popShow').text().toLowerCase().split("total discount rs.").length > 1){
      savings = $('#gi_change_fareD.popShow').text().toLowerCase().split("total discount rs.")[1].trim();
    }
    else if($('#go_gi_change_fareD.popShow').length > 0){
      savings = $('#go_gi_change_fareD.popShow strong:eq(1)').text().trim();
      if(savings.split("₹").length > 1){
        savings = savings.split("₹")[1];
      }
      savings = savings.split(",").join("").trim();
    }
    else{
      savings = 0;
    }
    savings = parseFloat(savings);
    if(isNaN(savings) == true){
      savings = 0;
    }
    cpn_msg = "";
    if($('#go_gi_change_fareD .popHdr').length > 0){
      cpn_msg = $('#go_gi_change_fareD .popHdr').text().trim();
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
    coupArray[i] = coupon;
    couponAt = 1294;
    arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
    // console.log("Savings for " + coupon + " is " + savings);
    // console.log("Msg for " + coupon + " is " + cpn_msg);
    if($('#go_gi_change_fareD').length > 0){
      document.getElementById("go_gi_change_fareD").getElementsByClassName("popClose")[0].click();
    }
    setTimeout(function(){changeFlag2(i, coupon);},1000);
  }
  else {
    document.getElementById('gi_search_promo').click();
    setTimeout(function(){postProcessor(coupon, i);},1000);
  }
}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
    if($('#go_gi_change_fareD').length > 0){
      document.getElementById("go_gi_change_fareD").getElementsByClassName("popClose")[0].click();
    }
    $('#gi_promocode').val(coupon);
    document.getElementById('gi_search_promo').click();
    setTimeout(function(){changeFlag(i, coupon);},1000);
  }
  // else{
  //   setTimeout(function(){preProcessor(i, coupon);},1000);
  // }
}

function temp(coupon, i, lenArray){
  if(lenArray==100){
    $('.hdc-loading').html('Automatically applying the best coupon now !');
    $('.hdc-lb-progress').text("100% Complete");
    $('.hdc-lb-fg').css("width", "100%");
    stopCoupon = 1;
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
    stopCoupon = 1;
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
  arrayMsg = JSON.stringify(arrayMsg);
  var jsonArr = [{'cpn_msg': arrayMsg}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 12, doNothing, []);
  // console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}
function couponInitiate(mytext){
  mytext = "HATKE20~"+mytext;     
  // GODUCO~GOSCDOM~GET2500GC~
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
  $('#promo_check_box').click();
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  if($('#go_gi_change_fareD').length > 0){
    document.getElementById("go_gi_change_fareD").getElementsByClassName("popClose")[0].click();
  }
  var jsonArr = [{'pos': 12}];
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
  if(curURL.split('goibibo.com/flight-booking/').length>1){
    var imgURL = returnResource("apply-coupon.png");
    // console.log("TEst passed");
    if($('#promo_box').length>0){
      $('#promo_box').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
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
