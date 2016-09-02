savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
arrayMsg = [];
arrayBest = [];
couponAt = 421;
cpn_msg = "";

for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  flagCoupon[i] = 1;
}

function postProcessor(coupon, i){
  if($('.xo-curtain').css("display")!="block"){
    if($('.xo-r-cpn').text()==""){
      savings = 0;
    }
    else {
      savings = $('.xo-r-cpn').text().trim().split("Rs.")[1].trim().split(".")[0];
      savings = savings.split(",").join("");
      savings = parseFloat(savings);
    }
    savings = parseFloat(savings);
    // if($('.notification-content').length > 0){
    //   cpn_msg = $('.notification-content').text().trim();
    // }
    // else if($('.form_twocolumnwithbutton_fieldabout').length > 0){
    //   cpn_msg = $('.form_twocolumnwithbutton_fieldabout').text().trim();
    // }
    // alert(savings);
    // alert(cpn_msg);
    savingsArray[i] = savings;
    savings = parseFloat(savings);
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
    //if($('#couponRemove').length>0){
      //if(bestCouponFound==0){
      //document.getElementById('couponRemove').click();
    //}
//}
window.location.reload();
//console.log("Reload called");
setTimeout(function(){changeFlag2(i, coupon);},1000);
}
else {
  setTimeout(function(){postProcessor(coupon, i);},1000);
}
}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
    // alert("Stop coupon is " + stopCoupon);
  //console.log("I got " + i + " " + coupon);
  $('#coupon_field').val(coupon);
  document.getElementsByClassName("cm-submit-link")[0].click();
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
  else if(i==parseFloat(getCookie("doneTill"))||bestCouponFound==1){
    document.getElementsByClassName('hdc-loading')[0].innerHTML = 'Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>';
    var perDone = i/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    document.getElementsByClassName('hdc-lb-progress')[0].innerHTML = perDone + "% Complete";
    document.getElementsByClassName('hdc-lb-fg')[0].style.width = perDone + "%";
    preProcessor(i, coupon);
  }
  else {
    setTimeout(function(){temp(coupon, i, lenArray);},1000);
  }
}

function endProcess(i){
  //console.log("called with " + i);
  //console.log("Current val is " + getCookie("doneTill"));
  if(parseFloat(getCookie("doneTill")) == i){
//console.log("Process terminated");
max = -111111;
ind_req = 1000;
for(i=0;i<getCookie("doneTill");i++){
  varName = "savingsShop" + i;
  curSaving = getCookie(varName);
  curSaving = parseFloat(curSaving);
  //console.log("Savings is " + curSaving);
  if(max < curSaving){
    max = curSaving;
    ind_req = i;
  }
  setCookie(varName ,0,-1);
}

if(max>0){
  bestCouponFound = 1;
  coupArray = getCookie("coupList").split("~");
  coup_req = coupArray[ind_req];
  //console.log("coup final :"+coup_req);
  temp(coup_req, 0, 100);
  setCookie("doneTill", 0, 1);
  setCookie("coupInProgress", 0, 1);
  setCookie("coupList", "", 1);
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
  var jsonArr1 = [{'savings': max}];
  jsonArr1 = JSON.stringify(jsonArr1);
  sendMessage(0, jsonArr1, 0, doNothing, []);
}
else {
  setCookie("doneTill", 0, 1);
  setCookie("coupInProgress", 0, 1);
  setCookie("coupList", "", 1);
  $('.hatke-discount-cover').css("display", "none");
  $('.hatke-discount-cover:eq(2)').css("display", "block");
} 
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}
function couponInitiate(mytext){
  mytext="HATKE20~"+mytext;     
  setCookie("coupList", mytext, 1);
    //console.log("mytext"+mytext);
    mytext= mytext + $(".form_twocolumnwithbutton_fieldabout").text().trim().split("\"")[1] + "~";
    if($('#show_coupan_code').find('span').length>0){
      coupMore = $('#show_coupan_code').find('h2').text().trim();
      coupMore = coupMore.split(",");
      for(k=0;k<coupMore.length;k++){
        mytext = mytext + coupMore[k].trim() + "~";
      }
    }
    mytext = mytext.split("~~").join("~");
    setCookie("removeMode", 0, 1);
    couponsLength = mytext.split("~").length - 1;
    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
    applyCoupons(mytext); 

  }
  function applyCoupons(coupons){
   setCookie("coupList", coupons, 1);
   coupons= coupons + $(".form_twocolumnwithbutton_fieldabout").text().trim().split("\"")[1] + "~";

   if($('#show_coupan_code').find('span').length>0){
    coupMore = $('#show_coupan_code').find('h2').text().trim();
    coupMore = coupMore.split(",");
    for(k=0;k<coupMore.length;k++){
      coupons = coupons + coupMore[k].trim() + "~";
    }
  }
  coupons = coupons.split("~~").join("~");
  setCookie("removeMode", 0, 1);
//iiiiend

if(coupons==""){
  coupons = getCookie("coupList");
}
couponsArray = coupons.split("~");
var savings = [];
var start = parseFloat(getCookie("doneTill"));
if(start==""){
  start = 0;
}
 // console.log("Number of coupons available here are " + couponsArray.length);
 for(var i=start;i<couponsArray.length;i++){
  if(couponsArray[i]!=""&&couponsArray[i]!=" "){

    var cur = couponsArray[i];
    couponsArray[i] = cur;
    temp(cur, i, couponsArray.length);
    // console.log("called with " + cur + " " + i);
  }
}
endProcess(couponsArray.length-1);
}
function examplefunc(){

  var coupStatus1 = getCookie("coponprogress");
  if(coupStatus1==""){
    setCookie("coponprogress", 0, 1);
  }
  else if(coupStatus1==1)
  {
    document.getElementsByClassName('hatke-discount-cover')[0].style.display="block";
    $('.hatke-discount-cover:eq(0)').css("display", "block");
    totLen = $('.box_paymentcalculations_fieldname').length;
    savings = 0;
    for(m=0;m<totLen;m++){
      disVal = $('.box_paymentcalculations_fieldname:eq(' + m + ')').text().trim();
      if(disVal.split("Order Discount").length>1){
        disVal = $('.box_paymentcalculations_field:eq(' + m + ')').text().trim();
        disVal = disVal.split("Rs.")[1].trim();
        disVal = disVal.split(",").join("");
        //console.log("Savings is " + disVal);
        savings = parseFloat(disVal);
      }
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




     // $('.hatke-discount-cover:eq(0)').css("display", "block");
     var mytextDeal="";
      //alert("hello");
      if($('#show_coupan_code').find('span').length>0){
        coupMoreDeal = $('#show_coupan_code').find('h2').text().trim();
        coupMoreDeal = coupMoreDeal.split(",");
        for(k=0;k<coupMoreDeal.length;k++){
          mytextDeal = mytextDeal + coupMoreDeal[k].trim() + "~";
        }
      }
      mytextDeal = mytextDeal.split("~~").join("~");
    //console.log("mytextDeal :"+mytextDeal);  
    couponsLengthDeal = mytextDeal.split("~").length - 1;

    $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLengthDeal + " coupon codes for you !");
    couponsArrayDeal = mytextDeal.split("~");
    k=0;
    preProcessorDeal(k,couponsArrayDeal[0]);
    //console.log($('#show_coupan_code').find('span').length);
    //alert($('#show_coupan_code').find('span').length);
    //applyCouponsDeal(mytextDeal);
    if($('#show_coupan_code').find('span').length==0){
     $('.hatke-discount-cover:eq(1)').css("display", "block");
     setCookie("coponprogress", 0, 1);

   }
 }
}

function getCoupons(){
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
//console.log("here");
//$('.hatke-discount-cover:eq(0)').css("display", "block");
if($(".form_twocolumnwithbutton_fieldabout").find(".cm-ajax").length>1 && $('#show_coupan_code').find('h2').text().trim().split(",")=="")
{ 
  alert("Best coupon already Applied :-) Enjoy :) Happy Shopping :)");
}
else if($(".form_twocolumnwithbutton_fieldabout").find(".cm-ajax").length<=1 && ($('#show_coupan_code').find('h2').text().trim().split(",")=="" || $('#show_coupan_code').find('h2').text().trim().split(",").length==1))
{ 
  bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  setCookie("coupInProgress", 1, 1);
  setCookie("doneTill", 0, 1);
  setCookie("perSaving", 0, 1);

  var jsonArr = [{'pos': 7}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);

}
else if($('#show_coupan_code').find('h2').text().trim().split(",").length>=1)
  { //bestCouponFoundDeal = 0;
    // setCookie("coponprogress",1,1);
    // examplefunc();

    bestCouponFound = 0;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  setCookie("coupInProgress", 1, 1);
  setCookie("doneTill", 0, 1);
  setCookie("perSaving", 0, 1);

    var jsonArr = [{'pos': 7}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 7, startCouponProcess, []);

  }
}


function endProcessDeal(i){
  //console.log("called with " + i);
  setCookie("coponprogress", 0, 1);
  if(i==1){

//console.log("Process terminated");
max = -111111;
ind_req = 1000;
for(m=0;m<totLen;m++){
  disVal = $('.box_paymentcalculations_fieldname:eq(' + m + ')').text().trim();
  if(disVal.split("Order Discount").length>1){
    disVal = $('.box_paymentcalculations_field:eq(' + m + ')').text().trim();
    disVal = disVal.split("Rs.")[1].trim();
    disVal = disVal.split(",").join("");
      //console.log("Savings is " + disVal);
      max = parseFloat(disVal);
    }
  }


  if(max>0){
    bestCouponFound = 1;
  //coup_req = coupArray[ind_req];
  flagCoupon[0] = 2;
  //temp(coup_req, 0, 100);
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
}
else {
  setTimeout(function(){endProcessDeal(i);},1000);
}
}


function applyCouponsDeal(couponDeal)
{

 couponsArrayDeal = couponDeal.split("~");
 var savingsDeal = [];
 for(var i=0;i<couponsArrayDeal.length;i++){
  if(couponsArrayDeal[i]!="" && couponsArrayDeal[i]!=" "){

    var cur = couponsArrayDeal[i];
    couponsArrayDeal[i] = cur;
    tempDeal(cur, i, couponsArrayDeal.length-1);
  }
}
endProcessDeal(couponsArrayDeal.length);
}

function tempDeal(coupon, i, lenArray){

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
   preProcessorDeal(i, coupon);
 }
 else {
  setTimeout(function(){tempDeal(coupon, i, lenArray);},1000);
}
  //setTimeout(function(){preProcessor(i, coupon, initialamount);},7000*i);
  //setTimeout(function(){couponApplied(initialamount);},7000*(i) + 3500); 
}


function preProcessorDeal(i, coupon){
  //console.log("I got " + i + " " + coupon);
  $('#coupon_field').val(coupon);
  document.getElementsByClassName("cm-submit-link")[0].click();
  //console.log("Coupon Code applied " + coupon);
  setTimeout(function(){changeFlagDeal(i, coupon);},1000);
}

function changeFlagDeal(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessorDeal(coupon, i);},1000);
}

function changeFlag2Deal(i, coupon){
  flagCoupon[i] = 0;
}
function postProcessorDeal(coupon, i){
  // alert("postProcessorDeal");

  if($(".box_paymentcalculations_row").length==4){
    savings = 0;
  }
  else {
    savings = $('.xo-r-cpn').text().trim().split("Rs.")[1].trim().split(".")[0];
    savings = savings.split(",").join("");
    savings = parseFloat(savings);
  }
  savings = parseFloat(savings);
    //console.log("Savings for " + coupon + " is " + savings);
    savingsArray[i] = savings;
    savings = parseFloat(savings);
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
    //if($('#couponRemove').length>0){
      //if(bestCouponFound==0){
      //document.getElementById('couponRemove').click();
    //}
//}
window.location.reload();
setTimeout(function(){changeFlag2Deal(i, coupon);},1000);
  /*}
  else {
    setTimeout(function(){postProcessorDeal(coupon, i);},1000);
  }*/
}

function checkSavings(){
  document.getElementsByClassName('hatke-discount-cover')[0].style.display="block";
  $('.hatke-discount-cover:eq(0)').css("display", "block");

  if($('#show_coupan_code').find('h2').text().trim().split(",").length>1)
  {
  //console.log("hiii");
  setCookie("coupInProgress", 0, 1);
  setCookie("coponprogress", 1, 1);
  window.location.reload();
}
else {
  stopCoupon = 1;
}


totLen = $('.box_paymentcalculations_fieldname').length;
savings = 0;
for(m=0;m<totLen;m++){
  disVal = $('.box_paymentcalculations_fieldname:eq(' + m + ')').text().trim();
  if(disVal.split("Order Discount").length>1){
    disVal = $('.box_paymentcalculations_field:eq(' + m + ')').text().trim();
    disVal = disVal.split("Rs.")[1].trim();
    disVal = disVal.split(",").join("");
      //console.log("Savings is " + disVal);
      savings = parseFloat(disVal);
    }
    if($('.notification-content').length > 0){
      cpn_msg = $('.notification-content').text().trim();
    }
    else if($('.form_twocolumnwithbutton_fieldabout').length > 0){
      cpn_msg = $('.form_twocolumnwithbutton_fieldabout').text().trim();
    }
  }
  if(savings > getCookie("perSaving")){
    setCookie("perSaving", savings, 1);
  }

  // alert(savings);
  // alert(cpn_msg);
  var currentSavAmt = parseFloat($('.hdc-sav-amt').text());
  finalSavAmt = getCookie("perSaving");
  $({c: currentSavAmt}).animate({c: finalSavAmt}, {
    step: function(now) {
      $('.hdc-sav-amt').text(Math.round(now))
    },
    duration: 1000,
    easing: "linear"
  });
  //console.log("Savings is " + savings);
  removeMode = getCookie("removeMode");
  if(savings == 0 && removeMode == 0){
    varName = "savingsShop" + getCookie("doneTill");
    setCookie(varName, savings, 1);
    setCookie("removeMode", 0, 1);
    setCookie("doneTill", parseFloat(getCookie("doneTill")) + 1 , 1);
    stopCoupon = 1;
    applyCoupons(getCookie("coupList"));
    //console.log("savings is " + savings);
  }
  else if(bestCouponFound == 0 && removeMode == 0){
    varName = "savingsShop" + getCookie("doneTill");
    setCookie(varName, savings, 1);
    setCookie("removeMode", 1, 1);
    // $('.form_twocolumnwithbutton_fieldabout .cm-ajax:eq(0)').click();
    setCookie("doneTill", parseFloat(getCookie("doneTill")) + 1 , 1);
    document.getElementsByClassName('cm-ajax')[0].click();
    //console.log("savings is " + savings);
    stopCoupon = 1;
    applyCoupons(getCookie("coupList"));
  }
  else {
    setCookie("removeMode", 0, 1);
    setCookie("doneTill", parseFloat(getCookie("doneTill")) + 1 , 1);
    stopCoupon= 1;
    applyCoupons(getCookie("coupList"));
  }
}

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
  return false;
}

function couponCheck(){
  var curURL = window.location.href;
//console.log("CP Check was called");
if(curURL.split('dispatch=checkout.checkout').length>1 && ($('#coupon_field').length>0)){
  var coupStatus = getCookie("coupInProgress");
  if(coupStatus==""){
    setCookie("coupInProgress", 0, 1);
  }
  else if(coupStatus==1){
    addToDOM();
    checkSavings();
    
  }
  //console.log("CoupInProgress " + getCookie("coupInProgress"));
  var imgURL = returnResource("apply-coupon.png");
  //console.log("TEst passed");
  if($('.coupon-code-container .form_twocolumnwithbutton_row').length>0){
    $('.coupon-code-container .form_twocolumnwithbutton_row:eq(0)').after("<a id='couponClick' href='javascript:void();'><img style='margin-left:65px;' src='" + imgURL + "'></a>");
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
examplefunc();

