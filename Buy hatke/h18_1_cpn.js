//initial variables
// $ = jQuery.noConflict();
savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
arrayMsg = [];
arrayBest = [];
couponAt = 4;

function couponCheck(){
  var curURL = window.location.href;

  if(curURL.split("homeshop18.com/shopping-cart").length > 1){   //check if its the checkout page
    var coupStatus = getCookie("coupInProgress");
    if(coupStatus == "" ){
      setCookie("coupInProgress", 0, 1);
    }
    else if(coupStatus == -1)
    {
      setCookie("coupInProgress", 1, 1);
      window.location.reload();
    }
    else if(coupStatus == 1){
      addToDOM();
      checkSavings();
    }
    if(parseInt(getCookie('removedFirst')) == 1){
      getCoupons();
    }
      //place the apply coupon image
      var imgURL = returnResource("apply-coupon.png");

      if($('#code').length>0){
       $("#code").parent().parent().after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
       addToDOM();
       var button = document.getElementById("couponClick");
       button.addEventListener("click", function(){
        setCookie("removedFirst", 1, 1);
        getCoupons();
      }, false);
     }
     else {
      setTimeout(function(){couponCheck();},1000);
    }
  }
  else {
    setTimeout(function(){couponCheck();},1000);
  }
} //couponCheck Ends
couponCheck();

function getCoupons(){
  actual_cost = $("#netAmountPayableCartPage").text().split("Rs.")[1].trim();
  setCookie("actual_cost", actual_cost, 1);
  if($('#removeCouponAtCart .remove_coupon').length > 0){
    setCookie("coupInProgress", 1, 1);
    setCookie("doneTill", 0, 1);
    setCookie("perSaving", 0, 1);
    setCookie("removedFirst", 1, 1);
    document.getElementById("removeCouponAtCart").getElementsByClassName("remove_coupon")[0].click();
  }
  setCookie("removedFirst", 0, 1);
  bestCouponFound = 0;
  //set all cookies
  setCookie("coupInProgress", 1, 1);
  setCookie("doneTill", 0, 1);
  setCookie("perSaving", 0, 1);

  //show buyhatke modal
  $('.hatke-discount-cover:eq(0)').css("display", "block");

  //startProcess
  var jsonArr = [{'pos': 9}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);

} //getCoupons Ends

function couponInitiate(coupons){
  //coupons
  var mytext = "HATKE20~"+coupons;
  setCookie("coupList", mytext, 1);
  couponsLength = mytext.split("~").length - 1; //coupon count
  $('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
  applyCoupons(mytext);
} //couponInitiate Ends

function applyCoupons(coupons){
  if(coupons == ""){
    coupons = getCookie("coupList");
  }
  coupons = coupons.split("~");
  start = parseInt(getCookie("doneTill"));
  if(start == ""){
    start = 0;
  } 
  for(i=start;i<coupons.length-1;i++)
  {
    coupon = coupons[i];
    if(coupon != "" && coupon != " "){
      coupArray[i] = coupon;
      temp(coupon, i, coupons.length-1);
    }
  }
  endProcess(coupons.length-1);
} //applyCoupons Ends

function temp(coupon, i, lenArray){
  if(lenArray == 100){
    $('.hdc-loading').html('Automatically applying the best coupon now !');
    $('.hdc-lb-progress').text("100% Complete");
    $('.hdc-lb-fg').css("width", "100%");
    arrayBest.push([coupon, 4]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
    // alert(coupon+"  "+i);
    preProcessor(i, coupon);
  }
  else if(i == parseInt(getCookie("doneTill")) || bestCouponFound == 1){
    $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
    var perDone = i/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    $('.hdc-lb-progress').text(perDone + "% Complete");
    $('.hdc-lb-fg').css("width", perDone + "%");
    preProcessor(i, coupon);
  }
  else{
    setTimeout(function(){temp(coupon, i, lenArray);},1000);
  }
} // temp Ends

function preProcessor(i, coupon){
  // alert(coupon+ " applied!");
  $("#code").val(coupon);
  document.getElementById("show-gcdc-form").getElementsByClassName("cssbtn-orange")[0].click();
} //preProcessor Ends

function checkSavings(){
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  coupons = getCookie("coupList");
  index_till = parseInt(getCookie("doneTill"));
  cpn = coupons.split("~");
  cpn_msg = "";
  if($('.message_box:eq(0) h5').length > 0){
    cpn_msg = $('.message_box:eq(0) h5').text().trim();
  }
  else if($('.message_box:eq(1) h5').length > 0){
    cpn_msg = $('.message_box:eq(1) h5').text().trim();
  }
  setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
  // alert("cpn_msg: "+cpn_msg);
  if($('#removeCouponAtCart .remove_coupon').length > 0){ 
    if($(".message_box.successmsg").length > 0){
      savings= $(".message_box.successmsg").text().split("Rs.")[1].trim();
      savings = savings.split(" ")[0].trim();
      savings = parseFloat(savings);
    }
    else if($("#netAmountPayableCartPage").length > 0){
      savings_diff= $("#netAmountPayableCartPage").text().split("Rs.")[1].trim();
      savings_diff = savings_diff.split(" ")[0].trim();
      savings_diff = parseFloat(savings_diff);
      savings = parseFloat(getCookie("actual_cost")) - savings_diff;
      savings_diff = parseFloat(savings_diff);
    }
    if(savings > parseFloat(getCookie("perSaving"))){
      setCookie("perSaving", savings, 1);
    }
    // alert("savings: "+savings);
    // alert("doneTill1: "+getCookie("doneTill"));
    setCookie("savingsBlue" + parseInt(getCookie('doneTill')), parseFloat(savings), 1);
    setCookie("doneTill", parseInt(getCookie("doneTill")) + 1 , 1);
    var currentSavAmt = parseFloat($('.hdc-sav-amt').text().trim());
    finalSavAmt = parseFloat(getCookie("perSaving"));
    $({c: currentSavAmt}).animate({c: finalSavAmt}, {
      step: function(now) {
        $('.hdc-sav-amt').text(Math.round(now))
      },
      duration: 1000,
      easing: "linear"
    });

  // }
  // else
  // {     
  //   savings = 0;
  //   alert("savings2: "+savings);
  //   alert("doneTill2: "+getCookie("doneTill"));
  //   setCookie("savingsBlue" + parseInt(getCookie('doneTill')), parseFloat(savings), 1);
  //   setCookie("doneTill", parseInt(getCookie("doneTill")) + 1 , 1);
  // }
  if(bestCouponFound == 0){
   document.getElementById("removeCouponAtCart").getElementsByClassName("remove_coupon")[0].click();
   applyCoupons(coupons);
 }
}
else{
  savings = 0;
    // alert("savings3: "+savings);
    // alert("doneTill3: "+getCookie("doneTill"));
    setCookie("savingsBlue"  + parseInt(getCookie('doneTill')), parseFloat(savings), 1);
    setCookie("doneTill", parseInt(getCookie("doneTill")) + 1 , 1);
    applyCoupons(coupons);
  }
}   //checkSavings Ends

function endProcess(i){
  if(parseInt(getCookie('doneTill')) == i){
      // alert("entered endProcess");
      max = -111111;
      index_req = 1000;
      savingsBlue = getCookie("savingsBlue");

      for(i=0;i<parseInt(getCookie('doneTill'));i++){
        varName = "savingsBlue" + i;
        curSaving = getCookie(varName);
        curSaving = parseFloat(curSaving);
        //calculate max saving
        if(max < curSaving){
          max = curSaving;
          index_req = i;
        }
        // setCookie(varName , 0, -1);
      }

      if(max > 0){
        bestCouponFound = 1;
        setCookie("removedFirst", 0, 1);
        coupArray = getCookie("coupList").split("~");
        coupon_req = coupArray[index_req];
        // Finally Applying the best Coupon
        setCookie("coupInProgress", 0, 1);
        temp(coupon_req, index_req, 100); 
        // setCookie("coupList", "", 1);
        setCookie("doneTill", 0, 1);

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
      else{
       setCookie("doneTill", 0, 1);
       setCookie("coupInProgress", 0, 1);
       // setCookie("coupList", "", 1);
       $('.hatke-discount-cover').css("display", "none");
       $('.hatke-discount-cover:eq(2)').css("display", "block");
     }
     coupList = getCookie("coupList");
     couponAt = 4;
     coup = coupList.split("~");
     for(i=0;i<coup.length-1;i++){
      if(getCookie("cpn_msg"+ i) != undefined || getCookie("cpn_msg" + i) != 'undefined'){
        arrayMsg.push([coup[i], encodeURIComponent(getCookie('cpn_msg'+i)), couponAt ]);
      }
      setCookie("cpn_msg"+i, "", -1);
    }
    arrayMsg = JSON.stringify(arrayMsg);
    var jsonArr = [{'cpn_msg': arrayMsg}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 12, doNothing, []);
    setTimeout(function(){}, 5000);
  }
  else{
    setTimeout(function(){endProcess(i);},1000);
  }
} //endProcess Ends

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
   $('.hatke-discount-cover').css("display", "none"); 
 }
} //removeTheCover Ends

