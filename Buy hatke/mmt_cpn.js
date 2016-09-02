savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
mytext="";
savingArr=[];
arrayMsg = [];
arrayBest = [];
couponAt = 1288;

$('body').append("<div id='ourSearchKey' style='display:none;'></div>")
var scr = document.createElement("script");
scr.type="text/javascript";
var a = "document.getElementById('ourSearchKey').innerHTML= window.reviewDetails.searchKey";
scr.innerHTML = a;
document.body.appendChild(scr);

for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function couponInitiate(mytext){
  ////console.log(mytext);
  initiateProcess(mytext);
  couponsLength = mytext.split("~").length - 1;
}


function getCoupons(){ 

  $('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 11}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);

}

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
    $('.hatke-discount-cover').css("display", "none"); 
  }
}

ourSearchKey="";

function calcSavings(){
  savingArr = savingArr.sort(function (a, b){
   return parseFloat(b.disc)-parseFloat(a.disc);
 });

  if(savingArr.length!=0)
  {
    $('.hatke-discount-cover').css("display", "none");
    $('.hatke-discount-cover:eq(1)').css("display", "block");
    $('.hdc-sav-amt').text(savingArr[0].disc);
    $('.hdc-coupon').text("Apply this Coupon Code "+savingArr[0].cpn);
    if(parseInt(savingArr[0].disc) == 1){
      $('.hatke-discount-cover:eq(1) .hdc-c-line').html('Congratulations! You have saved some Cashback! <div> Copy coupon code <b>' + savingArr[0].cpn + '</b> to avail the offer!</div>');
   }
    else if(parseInt(savingArr[0].disc) > 1){
    $('.hatke-discount-cover:eq(1) .hdc-c-line').html('Congratulations! You have saved a total of <div class="hdc-total-savings"><span class="WebRupee">Rs.</span> <span class="hdc-sav-amt"><b>' + savingArr[0].disc + '</b></span>!</div> <div> Copy coupon code <b>' + savingArr[0].cpn + '</b> to avail the offer!</div>');
  }

    // $('.hatke-discount-cover:eq(1)').css("display", "block");
    coupon = savingArr[0].cpn;
    arrayBest.push([coupon, couponAt]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
  }
  else
  {
    $('.hatke-discount-cover').css("display", "none");
    $('.hatke-discount-cover:eq(2)').css("display", "block");

  }
  arrayMsg = JSON.stringify(arrayMsg);
  var jsonArr = [{'cpn_msg': arrayMsg}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 12, doNothing, []);
  setTimeout(function(){}, 5000);
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function initiateProcess(mytext)
{
  //console.log(1);
  // mytext = "HATKE20~MMT200~MMT100~";
  couponsArray = mytext.split("~");
  var cpnIndex=0;
  ourSearchKey= encodeURIComponent(document.getElementById("ourSearchKey").innerHTML);
  var len1=couponsArray.length-1;
  $('.hatke-discount-cover:eq(0)').css("display", "block");
  $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">1</span> of <span class="hdc-load-tot hdc-bold">' + len1 + '</span>');
  for(var cpn=0;cpn<couponsArray.length-1;cpn++)
  {
    // //console.log("applying: "+couponsArray[cpn]);
    $.ajax({
      type: 'GET',
      async: false,
      url: "https://flights.makemytrip.com/makemytrip/validateEcoupon.htm?ecoupon="+couponsArray[cpn]+"&email=&flow=&loggedIn=false&productId=FLT&searchkey="+ourSearchKey,


// url: "http://flights.makemytrip.com/makemytrip/validateEcoupon.htm?ecoupon=INDDF&email=&flow=&loggedIn=false&productId=FLT&searchkey=e7be2c0314%7C4c00%7Cc4a6%7C8340%7C22ac74c8"
beforeSend: function() {

  cpnIndex=cpn;
},
success: function(data) {
  $(".hdc-load-curr.hdc-bold").html(cpnIndex+1);
  if(data.valid=="true"){

    if(data.value!=undefined){
      savingArr.push({cpn: couponsArray[cpn] , disc: data.value});
    }
    else if(data.message!=undefined && data.message.split("Congratulations").length > 1){
      savingArr.push({cpn: couponsArray[cpn] , disc: 1});
    }

  }
  if(data.message!=undefined){
    couponAt = 1288;
          // alert(data.message);
          arrayMsg.push([couponsArray[cpn], encodeURIComponent(data.message), couponAt]);
        }
      },
    });
}
calcSavings();
}

function couponCheck(){

 // //console.log("couponCheck was called");
 var curURL = window.location.href;
  // //console.log("CP Check was called");
  if(curURL.split('makemytrip.com/makemytrip/review').length > 1){
    var imgURL = returnResource("apply-coupon.png");

      if($('.discount_promo_info').length > 0 && $('#couponClick').length == 0){
       $('.discount_promo_info:eq(0)').after("<a id='couponClick' href='javascript:void();'><img style='width: 24%;' src='" + imgURL + "'></a>");
     // else if($(".mobile_fullwidth").length > 0){
     //   $(".mobile_fullwidth:eq(0)").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:100px;margin-left:-300px;' src='" + imgURL + "'></a>");
     // }
     // else if($('#enterPaybackIdentifierForm').length > 0){
     //   $("#enterPaybackIdentifierForm").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:100px;margin-left:-300px;' src='" + imgURL + "'></a>");
     // }
     // $('.discount_section').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:100px;margin-left:-300px;' src='" + imgURL + "'></a>");
     // $('.royality_point').css("margin-top", "-243px");
     addToDOM();
     //newcode
     $('.hd-cover-close').click(function(){
window.location.reload();  
});
     $('.hdc-button').click(function(){
      
window.location.reload();  
});

   
    //newcode

     var button = document.getElementById("couponClick");
     button.addEventListener("click", function(){
      getCoupons();
    }, false);
   }
 }
 else {
  setTimeout(function(){ couponCheck(); },1000);
}
}

couponCheck();

function removeTheCover(){
  if($('.hatke-discount-cover').length>0){
   $('.hatke-discount-cover').css("display", "none"); 
 }
} //removeTheCover Ends
