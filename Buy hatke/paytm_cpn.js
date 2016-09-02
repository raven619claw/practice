$s = jQuery.noConflict();
flagCoupon = [];
savingArr=[];
failArr=[];
arrayMsg = [];
couponAt = 1331;
arrayBest = [];

mytext="";
$s('body').append("<div id='cart_items' style='display:none;'></div>")
var scr = document.createElement("script");
scr.type="text/javascript";
var a = "document.getElementById('cart_items').innerHTML= localStorage.cart";
scr.innerHTML = a;
document.body.appendChild(scr);
coupArray = [];
for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function couponCheck(){
  var curURL = window.location.href;
  // ////console.log("CP Check was called " + window.location.href);
  if(curURL.split('paytm.com/coupons').length>1 || curURL.split('paytm.com/cart').length>1){
    var imgURL = returnResource("apply-coupon.png");       
    // ////console.log("TEst passed");
    if($s('#pc').length > 0){
      if($s('#couponClick').length==0){
        $s("#pc").after("<a id='couponClick' href='javascript:void();'><img style='margin-left:30%;' src='" + imgURL + "'></a>");
        var button = document.getElementById("couponClick");
        button.addEventListener("click", function(){
          getCoupons(0);
        }, false);
      }
    }
    else if($s('#total').length > 0){
      if($s('#couponClick2').length==0){
        $s("#total").before("<a id='couponClick2' href='javascript:void();'><img style='margin-left:30%;' src='" + imgURL + "'></a>");
        var button = document.getElementById("couponClick2");
        button.addEventListener("click", function(){
          pickProdURL();
          getCoupons(1);
        }, false);
      }
    }
    else if($s('#couponsDetails').length > 0){
      if($s('#couponClick2').length==0){
        $s("#couponsDetails .recharge-details").after("<a id='couponClick2' href='javascript:void();'><img style='margin-left:30%;' src='" + imgURL + "'></a>");
        var button = document.getElementById("couponClick2");
        button.addEventListener("click", function(){
          pickProdURL();
          getCoupons(0);
        }, false);
      }
    }
    addToDOM();
//$s('.hatke-discount-cover:eq(0)').css("display", "block");


// ////console.log("TEst passed");
if($s(".F12").length>0){

  addToDOM();
//$s('.hatke-coupons_list-main').css("display", "block");

 //   $(".col-lg-7.col-md-5.col-sm-7.col-xs-6.mobile_fullwidth:eq(0)").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:100px;margin-left:-300px;' src='" + imgURL + "'></a>");
 // $('.discount_section').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:100px;margin-left:-300px;' src='" + imgURL + "'></a>");
  //$('.royality_point').css("margin-top", "-243px");
  //addToDOM();
 /* var button = document.getElementById("couponClick");
  button.addEventListener("click", function(){
  getCoupons();
}, false);*/
}
else {
  // setTimeout(function(){couponCheck();},1000);
}
setTimeout(function(){couponCheck();},5000);
}
else {
  setTimeout(function(){couponCheck();},1000);
}


}

function calDiscount()
{
//console.log(failArr.length);
  if(failArr.length==0)
  {
    // ////console.log("entered");
    savingArr = savingArr.sort(function (a, b) {
      return parseFloat(b.disc)-parseFloat(a.disc);
    });
    // ////console.log(savingArr);
    //console.log(savingArr.length);
    if(savingArr.length!=0 && parseFloat(savingArr[0].disc)!=0)
    {
      $s('.hatke-discount-cover').css("display", "none");
      $s('.hatke-discount-cover:eq(1)').css("display", "block");
      $s('.hatke-discount-cover:eq(0)').css("display","none");
      $s('.hdc-sav-amt').text(savingArr[0].disc);
      $s('.hatke-discount-cover:eq(1) .hdc-c-line').html('Congratulations! You have saved a total of <div class="hdc-total-savings"><span class="WebRupee">Rs.</span> <span class="hdc-sav-amt">' + savingArr[0].disc + '</span>!</div> <br> Apply coupon <b style="font-weight: bold;color: green;">' + savingArr[0].cpn + '</b> to avail the offer.');
      // $s('.hdc-coupon').text(" Apply this Coupon Code "+savingArr[0].cpn);
      //new code
      //console.log(savingArr);
      var finalcoupon={"channel":"web","action":"applypromo","version":2,"promocode":savingArr[0].cpn};
      $s.ajax({
    type: 'POST',
    async: false,
    url: urlTarget,
    contentType : "application/json",
    data:JSON.stringify(finalcoupon),
    beforeSend: function() {
      

//          cpnIndex=cpn;
},
success: function(data) { 
////console.log("bhuwan");
}});    
      var applybtn=document.getElementsByClassName("hdc-button")[1];

      applybtn.addEventListener("click", function(){
          applypromocode();
        });



      $s('.hatke-discount-cover:eq(1)').css("display", "block");
      // alert(savingArr[0].cpn);
      arrayBest.push([savingArr[0].cpn, 1331]);
      arrayBest = JSON.stringify(arrayBest);
      var jsonArr = [{'best_cpn': arrayBest}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(1, jsonArr, 13, doNothing, []);
    }
    else
    {
      $s('.hatke-discount-cover').css("display", "none");
      $s('.hatke-discount-cover:eq(2)').css("display", "block");

    }
  }
  else{
    ////console.log("fail arr is "+failArr);
    initiateProcess(failArr);
  }
}

function removeTheCover(){
  if($s('.hatke-discount-cover').length>0){
    $s('.hatke-discount-cover').css("display", "none"); 
  }
}
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
couponCheck();

var token=getCookie("XSRF-TOKEN");
token=decodeURIComponent(token);
$s( document ).ajaxSend(function( event, jqxhr, settings ) {
  jqxhr.setRequestHeader("X-XSRF-TOKEN", token)
});
function initiateProcess(couponsArray)
{
  // ////console.log(failArr.length);
  // ////console.log(failArr);
  if(failArr.length!=0)
  {
    couponsArray=[];
    couponsArray.length=0;
    couponsArray=failArr;
    failArr=[];
    failArr.length=0;
    // ////console.log("here"+couponsArray);
  }
  // ////console.log("bsdhfbsdhfgsdhf"+couponsArray);


  
  var finaljson={};
  if(getCookie("methodInProgress")==1){
    finaljson["channel"] = "web";
    finaljson['action'] = "applypromo";
    finaljson['version'] = 2;
  }
  else {
    var cartItems=localStorage.cart;
    cartItems1=JSON.parse(cartItems).cart_items;
    finaljson["cart_items"]=cartItems1;
  }
////console.log(cartItems1);
var i=0;
function callapi(){
setTimeout(function(){
  //console.log("coupon"+couponsArray.length)
  if(i<couponsArray.length-1)
  {
    
  var r=Math.floor((Math.random() * 100) + 500);
  // ////console.log("Delay is " + r);
  sleep(r);

  finaljson["promocode"]=couponsArray[i];

  // ////console.log(JSON.stringify(finaljson));  
  if(getCookie("methodInProgress")==1){
    urlTarget = "https://paytm.com/v1/api/cart"; 
  } 
  else {
    urlTarget = "https://paytm.com/papi/v1/expresscart/verify";
  }
  //console.log(JSON.stringify(finaljson));
  $s.ajax({
    type: 'POST',
    async: false,
    url: urlTarget,
    contentType : "application/json",
    data:JSON.stringify(finaljson),

    beforeSend: function() {


      //console.log(i);
      lenArray=couponsArray.length-1;
      $s('.hatke-discount-cover:eq(0)').css("display","block");
      $s('.hatke-discount-cover:eq(1)').css("display","none");
      $s('.hatke-discount-cover:eq(2)').css("display", "none");
   //$s('.hdc-loading').text("Bhuwan"); 
      $s('.hatke-discount-cover:eq(0)').css("z-index","999999999999");

   $s('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
   
   var perDone = (i+1)/lenArray;
   perDone = perDone*100;
   perDone = parseInt(perDone);
   $s('.hdc-lb-progress').text(perDone + "% Complete");
   $s('.hdc-lb-fg').css("width", perDone + "%");
   



//          cpnIndex=cpn;
},
success: function(data) {
   //alert("success");
   //console.log("result at " + data);
   if(getCookie("methodInProgress")==0){
     var ab=data.cart;
   ////console.log(ab['paytm_cashback']);
   status = ab['promostatus'];
   if(status=="failure"){
    failMsg  = ab['promofailuretext'];
  }
  else {
    failMsg = "Success";
  }
  arrayMsg.push([couponsArray[i], failMsg, 1331 ]);
   // ////console.log("Status : " + status + " Message : " + failMsg);
   ab=ab['paytm_cashback'];
 }
 else {
  var ab = data.status['result'];
  if(ab == "success"){
    ab = data.cart['paytm_cashback'];
    failMsg = "Success";
  }
  else {
    ab = 0;
    failMsg = data.error;
  }
  arrayMsg.push([couponsArray[i], failMsg, 1331]);
      // ////console.log("Coupon " + couponsArray[i] + " Cashback " + ab + " Message " + failMsg);
    }

    if(ab==0)
    {
     savingArr.push({cpn: couponsArray[i] , disc: 0});
     // ////console.log("msgCoupon1: "+ab+ " : "+ couponsArray[i]);
     //$('.hatke-discount-cover').css("display", "none");
     //$('.hatke-discount-cover:eq(2)').css("display", "block");
   }
   else
   {
    //console.log(couponsArray[i]);
    //console.log(ab);
     savingArr.push({cpn: couponsArray[i] , disc: ab});
     // ////console.log("msgCoupon: "+ab+ " : "+ couponsArray[i]);
     //$s('.hatke-discount-cover').css("display", "none");
     //$s('.hatke-discount-cover:eq(1)').css("display", "block");
     //$s('.hatke-discount-cover:eq(1)').find('.hdc-sav-amt').html(ab);

   }
   //console.log("i="+i);
   //console.log("length="+couponsArray.length);
if(i==couponsArray.length-2)
{
  //alert("bhuwan");
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
calDiscount(savingArr);
}
   // ////console.log(savingArr);

 },

 error: function (xhr, ajaxOptions, thrownError) {

//console.log("ee coupon llength"+couponsArray.length);
  if(i==couponsArray.length-2)
{
  //alert("bhuwan");
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
calDiscount(savingArr);
}

  if(getCookie("methodInProgress")==1){
    var respo = (xhr.responseText);
    respo = JSON.parse(respo);

    failMsg = respo.error;

    arrayMsg.push([couponsArray[i], encodeURIComponent(failMsg), 1331]);
      // ////console.log("Coupon " + couponsArray[i] + " Message " + failMsg);
    }

  // failArr.push(couponsArray[i]);
  // ////console.log(failArr);
        //alert(xhr.status);
        //alert(thrownError);
      },
    });
//console.log(savingArr.length);
i++;
callapi();
}},500);
}

callapi();
// ////console.log(savingArr);



}

function couponInitiate(coupon){
 var curURL = window.location.href;
 if(curURL.split("paytm.com/cart").length > 1){
   if(flagDoneCpColl ==1){
    // ////console.log("Coupons Found " + couponString);
    mytext = couponString;

    couponsLength = mytext.split("~").length - 1;
    var timeExp = parseFloat(couponsLength) * .9;
    timeExp = parseInt(timeExp);
    $s('.hatke-discount-cover:eq(0) .hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you ! It will take around " + timeExp + " seconds.");
    if(couponsLength > 7){
      alert("We are automatically trying " + couponsLength + " coupon codes for you ! Press OK to continue.");
    }
    // ////console.log("We are automatically trying " + couponsLength + " coupon codes for you !");
    $s('.hatke-discount-cover').css("display", "none");
    $s('.hatke-discount-cover:eq(0)').css("display", "block");

    // ////console.log("Coupons :"+ mytext);
    couponsArray = mytext.split("~");
    //couponsLength = mytext.split("~").length - 1;
    initiateProcess(couponsArray);
  }
  else {
    setTimeout(function(){couponInitiate(coupon);},100); 

  }
}
else if(curURL.split("paytm.com/coupons").length > 1){
  mytext = coupon;
 // ////console.log("Coupons " + mytext);

 couponsLength = mytext.split("~").length - 1;
 var timeExp = parseFloat(couponsLength) * .9;
 timeExp = parseInt(timeExp);
 $s('.hatke-discount-cover:eq(0) .hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you ! It will take around " + timeExp + " seconds.");
 // alert("We are automatically trying " + couponsLength + " coupon codes for you ! Press OK to continue.");
    // ////console.log("We are automatically trying " + couponsLength + " coupon codes for you !");
    $s('.hatke-discount-cover').css("display", "none");
    $s('.hatke-discount-cover:eq(0)').css("display", "block");

    // ////console.log("Coupons :"+ mytext);
    couponsArray = mytext.split("~");
    //couponsLength = mytext.split("~").length - 1;
    initiateProcess(couponsArray);
  }
}

function getCoupons(num){
  // alert(num);
  arrayMsg = [];
  arrayMsg.length = 0;
  savingArr = [];
  savingArr.length = 0;
  setCookie("methodInProgress", num, 1);
  var textString = $s('.name').text().trim();
  if(textString != ""){
    var mytext="";
    for(var i=0;i < 200; i++){
      flagCoupon[i] = 2;
    }
    bestCouponFound = 0;
    $s('.hatke-discount-cover:eq(0)').css("display", "block");

//$s('.hatke-coupons_list-main').css("display", "block");
//$s('.hatke-discount-cover:eq(0)').css("display", "block");
if(num==1){
  posPass = 14;
}
else {
  posPass = 29;
}
var jsonArr = [{'pos': posPass}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 7, startCouponProcess, []);
}
else {
  alert("Please login and click on apply coupons again to apply the best coupon code automatically");
}

//$s('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
}
function applyCoupons(coupons){
  // ////console.log("applyCoupons");
  couponsArray = coupons.split("~");
  
  //console.log(couponsArray);
  // ////console.log(couponsArray.length);
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

function preProcessor(i, coupon){
  if($s(".applying-promo-code.ng-hide")!=null)
  {
    if($s(".input-promo.ng-pristine.ng-valid")!=null){
     // $s('.input-promo.ng-pristine.ng-valid').addClass('input-promo.ng-valid.ng-dirty').removeClass('input-promo.ng-pristine.ng-valid');
     $s('.input-promo.ng-pristine.ng-valid').attr('class', 'input-promo ng-valid ng-dirty');
     $s(".input-promo.ng-valid.ng-dirty").val(coupon);
   }
  ////console.log("Coupon Code applied " + coupon); 
  //document.getElementsByClassName('btn-primary btn-bordered border-radius apply-promo-btn').click();
  //setTimeout(function(){changeFlag(i, coupon);},2500);
  // else
  // {
  //   $s(".input-promo.ng-valid.ng-dirty").val(coupon);
  // }

  $s(".btn-primary.btn-bordered.border-radius.apply-promo-btn").click();
   //document.getElementsByClassName('btn-primary btn-bordered border-radius apply-promo-btn');

 }
 else {
   setTimeout(function(){preProcessor(i, coupon);},100); 
 }
}

function temp(coupon, i, lenArray){
  if(lenArray==100){
    $s('.hdc-loading').html('Automatically applying the best coupon now !');
    $s('.hdc-lb-progress').text("100% Complete");
    $s('.hdc-lb-fg').css("width", "100%");
    arrayBest.push([coupon, 1331]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
    preProcessor(i, coupon);
  }
  else if(i==0||flagCoupon[i-1]==0){
    $s('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
    var perDone = i/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    $s('.hdc-lb-progress').text(perDone + "% Complete");
    $s('.hdc-lb-fg').css("width", perDone + "%");
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
// ////console.log(savingsArray);
// ////console.log(coupArray);
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
  $s('.hatke-discount-cover').css("display", "none");
  savings = $s('.hdc-sav-amt:eq(0)').text();
  $s('.hatke-discount-cover:eq(1)').css("display", "block");
  var currentSavAmt = 0,
  finalSavAmt = max;
  $s({c: currentSavAmt}).animate({c: finalSavAmt}, {
    step: function(now) {
      $s('.hdc-sav-amt').text(Math.round(now))
    },
    duration: 1500,
    easing: "linear"
  });
  var jsonArr = [{'savings': max}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}
else {
  $s('.hatke-discount-cover').css("display", "none");
  $s('.hatke-discount-cover:eq(2)').css("display", "block");
} 
////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},500);
}
}

function postProcessor(coupon, i){

  if($s(".grey-text1.f13.xx-bold.ng-binding").text().split("Rs").trim()[1]!=0 && $s(".applying-promo-code.ng-hide")!=null)
  {
    if($s(".grey-text1.f13.xx-bold.ng-binding").text().split("Rs").trim()[1]==0)
    {
      savings = 0;
    }
    else {
      savings = $s(".grey-text1.f13.xx-bold.ng-binding").text().split("Rs").trim()[1];
      savings = parseFloat(savings);
    }
    savings = parseFloat(savings);
    // ////console.log("Savings for " + coupon + " is " + savings);
    savingsArray[i] = savings;
    if($s(".grey-text1.f13.xx-bold.ng-binding").text().split("Rs").trim()[1]!=0 && $s(".applying-promo-code.ng-hide")!=null){
      if(bestCouponFound==0){
        document.getElementsByClassName('label border-label ng-binding').click();
      }
    }
    setTimeout(function(){changeFlag2(i, coupon);},1000);
  }
  else {
    setTimeout(function(){postProcessor(coupon, i);},1000);
  }
}


function changeFlag(i, coupon){
  flagCoupon[i] = 1;
}

function changeFlag2(i, coupon){
  flagCoupon[i] = 0;
}


function applypromocode()
{
  
window.location.reload();

}



