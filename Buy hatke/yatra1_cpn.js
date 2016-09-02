$('body').append("<div id='ourSearchKey_superPnr' style='display:none;'></div>")
var scr = document.createElement("script");
scr.type="text/javascript";
var check_json = "document.getElementById('ourSearchKey_superPnr').innerHTML= checkoutOptions.jsonData.superPnr ";
scr.innerHTML = check_json;
document.body.appendChild(scr);

$('body').append("<div id='ourSearchKey_ftype' style='display:none;'></div>")
var scr1 = document.createElement("script");
scr1.type="text/javascript";
var check_json1 = "document.getElementById('ourSearchKey_ftype').innerHTML= checkoutOptions.jsonData.data.ftype ";
scr1.innerHTML = check_json1;
document.body.appendChild(scr1);

$('body').append("<div id='ourSearchKey_pricingId' style='display:none;'></div>")
var scr3 = document.createElement("script");
scr3.type="text/javascript";
var check_json3 = "document.getElementById('ourSearchKey_pricingId').innerHTML= checkoutOptions.jsonData.pricingId ";
scr3.innerHTML = check_json3;
document.body.appendChild(scr3);

$('body').append("<div id='ourSearchKey_totalAmount' style='display:none;'></div>")
var scr4 = document.createElement("script");
scr4.type="text/javascript";
var check_json4 = "document.getElementById('ourSearchKey_totalAmount').innerHTML= checkoutOptions.jsonData.oldPrice ";
scr4.innerHTML = check_json4;
document.body.appendChild(scr4);

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
  }
  return "";
}
var couponAt = 1293;
arrayMsg = [];
var arrayBest = [];
flagArray = [];
var doneTillNow = getCookie("doneTill");
if(doneTillNow==""){
  doneTillNow = 0;
}
for(var fa=0;fa<100;fa++){
  if(doneTillNow > fa){
    flagArray[fa] = 1;
  }
  else {
    flagArray[fa] = 0;
  }
}

var savingsRead = 0;

function startCouponProcessJab(data, passBack){
  var mytext = data;
  if(typeof(mytext) != undefined && mytext!= "undefined"){
   setCookie("couponList", mytext, 1);
   getBestCoupon();
 }
}

function getCoupons(){
  var jsonArr = [{'pos': 17}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcessJab, []);
}

function endCompleteProcess(c){
  var done_c = getCookie('doneTill');
  if(done_c >= c && getCookie("endProcess") != 1){

    couponAt = 1293;
    var j = 0;
    while(getCookie("cpn_msg" + (j+1)) != false || getCookie("cpn_msg" + (j+1)) != ""){
      var coupList = getCookie("cpn_msg"+ (j+1));
      var coup = coupList.split("*~*");
      var cpn = coup[0].trim();
      var cpnMsg = coup[1].trim();
      arrayMsg.push([cpn, encodeURIComponent(cpnMsg), couponAt ]);
      j++;
    }
    if(arrayMsg.length != ""){
      arrayMsg = JSON.stringify(arrayMsg);
      var jsonArr = [{'cpn_msg': arrayMsg}];
      jsonArr = JSON.stringify(jsonArr);
      // console.log("cpn_msg JSON: "+jsonArr);
      sendMessage(1, jsonArr, 12, doNothing, []);
    }
    var k = 0;
    while(getCookie("cpn_msg" + (k+1)) != false || getCookie("cpn_msg" + (k+1)) != ""){
      setCookie("cpn_msg"+(k+1), "", -1);
      k++;
    }
    setTimeout(function(){}, 5000);

    applyBest();
  }
  else {
    setTimeout(function(){ endCompleteProcess(c); }, 500);
  }
}

function requestCoupons(couponCode, c,lenArray){

  if(c == 0 || flagArray[c-1] == 1){
    // console.log("Called with " + c + " " + JSON.stringify(flagArray));
    if($("#promocodeContainer").length > 0){
      if($('#ourSearchKey_superPnr').length > 0 && $('#ourSearchKey_superPnr').text().trim() != ""){
       var superPnr = $('#ourSearchKey_superPnr').text().trim();
     }
     if($('#ourSearchKey_ftype').length > 0 && $('#ourSearchKey_ftype').text().trim() != ""){
       var ftype = $('#ourSearchKey_ftype').text().trim();
     }
     if($('#ourSearchKey_pricingId').length > 0 && $('#ourSearchKey_pricingId').text().trim() != ""){
       var pricingId = $('#ourSearchKey_pricingId').text().trim();
     }
     if($('#ourSearchKey_totalAmount').length > 0 && $('#ourSearchKey_totalAmount').text().trim() != ""){
       var totalAmount = $('#ourSearchKey_totalAmount').text().trim();
     }
     // var superPnr = post_para.superPnr;
     // var flightType = post_para.data.ftype;
     // var pricingId = post_para.pricingId;
     // var totalAmount = post_para.oldPrice;

     $.post( "https://secure.yatra.com/air-pay-book-service/dom2/promocode/validateNew",{superPnr: superPnr, flightType: ftype, pricingId: pricingId, totalAmount: totalAmount, promoContext: "REVIEW" ,UserId: "", promoCode: couponCode  } )
     .done(function(data) {

      
      var i=parseInt(c);
      $('.hatke-discount-cover:eq(0)').css("display","block");
      $('.hatke-discount-cover:eq(1)').css("display","none");
      $('.hatke-discount-cover:eq(2)').css("display", "none");
   //$s('.hdc-loading').text("Bhuwan"); 
      $('.hatke-discount-cover:eq(0)').css("z-index","999999999999");

   $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
   
   var perDone = (i+1)/lenArray;
   perDone = perDone*100;
   perDone = parseInt(perDone);
   $('.hdc-lb-progress').text(perDone + "% Complete");
   $('.hdc-lb-fg').css("width", perDone + "%");
   
      // console.log(" NEW UI DATA: success1: "+data );
      // alert("doneTill1 set to " + (c+1));
      setCookie("doneTill", parseInt(c)+1, 1);
      var statusCode = 200;

      if(typeof(data) == "object"){
        var b = data.responseText;
        b = JSON.parse(b);
        if(b.success == "true" || b.success == true){
          var data_sav = b.eCash.discountAmount;
          data_sav = data_sav.split(",").join("").trim();
          data_sav = parseFloat(data_sav);
          var cpn_msg = "success";
          cpn_msg = couponCode+"*~*"+cpn_msg;
          setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
        }
        else{
          var data_sav = 0;
          var cpn_msg = data.failureMessage;
          cpn_msg = couponCode+"*~*"+cpn_msg;
          setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
        }

        if(isNaN(data_sav)){
          data_sav = 0;
        }
        var saving1 = data_sav;
        if(parseFloat(saving1) > getCookie("bestSaving") && (saving1 != 0)){
          setCookie("bestSaving", saving1, 1);
          setCookie("bestCoupon", couponCode, 1);
          setCookie("bestCouponFound", 1, 1);
        }
          // alert("data_sav: "+data_sav);
          var savings_till = getCookie("savings") + data_sav + "~";
          setCookie("savings", savings_till, 1);
          
        // }
      }
      else{

        var data = JSON.parse(data);
        if(data.success == "true" || data.success == true){
          var cpn_msg = data.eCash.messages;
          cpn_msg = couponCode+"*~*"+cpn_msg;
          // alert(cpn_msg + " savings: "+data.eCash.discountAmount);
          savings = data.eCash.discountAmount;
          savings = savings.split(",").join("").trim();
          if(parseFloat(savings) > getCookie("bestSaving") && (savings != 0)){
            setCookie("bestSaving", savings, 1);
            setCookie("bestCoupon", couponCode, 1);
            setCookie("bestCouponFound", 1, 1);
            
             }
          var savings_till = getCookie("savings") + savings + "~";
          setCookie("savings", savings_till, 1);
        }
        else{
          var cpn_msg = data.failureMessage;
          cpn_msg = couponCode+"*~*"+cpn_msg;
          // alert(cpn_msg + " savings: 0");
          var savings_till = getCookie("savings") + "0~";
          setCookie("savings", savings_till, 1);
        }
        setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
      }

      var c_len = getCookie("couponList");
      c_len = c_len.split("~")-1;
      if(c >= c_len){
        flagArray[c] = 1;
        applyBest(c);
      }
      else{
        flagArray[c] = 1;
      }
      // var savings_till = getCookie("savings") +"0~";
      // var msg = JSON.parse(data);
      // var cpn_msg = (msg.message).trim();
      // cpn_msg = cpn_msg.replace(/(&nbsp;|<([^>]+)>)/ig,"");
      // cpn_msg = cpn_msg.replace(/(\r\n|\n|\r)/gm,"");
      // cpn_msg = couponCode+"*~*"+cpn_msg;
      // setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
      // alert("cpn_msg@ : "+ cpn_msg);
      // alert(savings_till + " " + c);
      // setCookie("savings" , savings_till, 1);

    });
}
// else if($(".apply-voucher-sec").length > 0){
//   $.post( "http://www.jabong.com/cart/addvoucher/", {couponcode: couponCode, YII_CSRF_TOKEN:""} )
//   .done(function(data) {
//       // console.log(" Test_HK: success:"+data );
//       // alert("doneTill1 set to " + (c+1));
//       setCookie("doneTill", parseInt(c)+1, 1);
//       var statusCode = 200;
//       var savings_till = getCookie("savings") +"0~";
//       var msg = JSON.parse(data);
//       var cpn_msg = (msg.message).trim();
//       cpn_msg = cpn_msg.replace(/(&nbsp;|<([^>]+)>)/ig,"");
//       cpn_msg = cpn_msg.replace(/(\r\n|\n|\r)/gm,"");
//       cpn_msg = couponCode+"*~*"+cpn_msg;
//       setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
//       // alert("cpn_msg@ : "+ cpn_msg);
//       // alert(savings_till + " " + c);
//       setCookie("savings" , savings_till, 1);
//       flagArray[c] = 1;
//     })
//   .fail(function(jqXHR) {
//       // console.log(" Test_HK: error: "+jqXHR.status );
//       var statusCode = jqXHR.status;
//       if(statusCode == 503){
//         setCookie("doneTill", parseInt(c)+1, 1);
//         var cpn_msg = "success";
//         cpn_msg = couponCode+"*~*"+cpn_msg;
//         setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
//         // console.log("cpn_msg: "+cpn_msg);
//         // flagArray[c] = 1;
//         // alert("doneTill2 set to " + (c+1));
//         window.location.reload();
//       }
//       else {
//         flagArray[c] = 1;
//       }
//     });

// }
}
else {
  setTimeout(function(){ requestCoupons(couponCode, c,lenArray); }, 500);
}
}

function getBestCoupon(){
  if($('#promocodeContainer').length > 0 && savingsRead==0){
    savingsRead = 1;
    getSavings();
    return;
  }
  // else if($('.remove-coupon').length > 0 && savingsRead==0){
  //   savingsRead = 1;
  //   getSavings();
  //   return;
  // }
  // var coupons_list = "HATKE20~SALE30~ICICV500JG~";
  // var coupons_list = "HATKE20~FLYOFF~SOME~";
  var coupons_list = getCookie("couponList");
  setCookie("couponList", coupons_list, 1);
  coupons_list = coupons_list.split("~");
  if(getCookie("doneTill") == ""){
    setCookie("doneTill", 0, 1);
  }
  if(getCookie("savings") == ""){
    setCookie("savings", "", 1);
  }
  if(getCookie("bestCouponFound") == "" || getCookie("bestCouponFound") != 1){
    setCookie("bestCouponFound", 0, 1);
  }
  if(getCookie("bestSaving") == ""){
    setCookie("bestSaving", 0, 1);
  }
  if(getCookie("endProcess") == ""){
    setCookie("endProcess", 0, 1);
  }
  if(getCookie("bestCoupon") == ""){
    setCookie("bestCoupon", "", 1);
  }
  // if(getCookie("cpn_msg") == ""){
  //   setCookie("cpn_msg", "", 1);
  // }
  var startFrom = getCookie("doneTill");
  // console.log("Text_HK startFrom: "+startFrom);
  // console.log("Text_HK Length is " + coupons_list.length);
  if(parseInt(startFrom)==coupons_list.length-1 && getCookie("endProcess") != 1){
   applyBest();
 }
 for(var c=parseInt(startFrom);c<coupons_list.length-1;c++){
  var couponCode = coupons_list[c];
  // console.log("Applied Coupon: "+couponCode);
  var lenArray=coupons_list.length;
  requestCoupons(couponCode, c,lenArray);
}
endCompleteProcess(c);
}

if(getCookie("endProcess") == 1){
  setCookie("doneTill", 0, -1);
  // setCookie("savings", "", -1);
  // setCookie("bestCouponFound", 0, -1);
  setCookie("bestSaving", 0, -1);
  setCookie("endProcess", 0, -1);
  setCookie("startProcess", 0, -1);
  // setCookie("bestCoupon", "", -1);
  if($('#promocodeContainer').length == 0){
    // window.location.reload();
    setCookie("endProcess", 0, -1);
  }
  $(".hatke-discount-cover:eq(0)").css("display", "none");
  $(".hatke-discount-cover:eq(1)").css("display", "block");
}
else{
  var curURL = window.location.href;
  if(curURL.split('.yatra.com/checkout').length>1){
    var imgURL = returnResource("apply-coupon.png");
    if($('#promocodeContainer').length>0){
      $('#checkoutBase > div:nth-child(2) > main > div > div > form > div.center-block.text-center.mt-1.mb-1.sticky-sm-bottom.hide-under-overlay').before("<a id='couponClick' href='javascript:void(0);'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
    }
    addToDOM();
    if(getCookie("doneTill") != ""){
      var dt1 = parseInt(getCookie("doneTill")-1);
    }
    else {
      var dt1 = 0;
    }
    if(getCookie("couponList") != ""){
      var lenArray = getCookie("couponList");
      lenArray = lenArray.split("~");
      lenArray = lenArray.length-1;
    }
    else {
      var lenArray = 0;
    }
    if(getCookie("startProcess") == 1){
      $(".hatke-discount-cover:eq(0)").css("display", "block");
      if(dt1 != 0 && lenArray != 0){
        $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (dt1+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
        var perDone = dt1/lenArray;
        perDone = perDone*100;
        perDone = parseInt(perDone);
        $('.hdc-lb-progress').text(perDone + "% Complete");
        $('.hdc-lb-fg').css("width", perDone + "%");
      }
      getBestCoupon();
    }
    var button = document.getElementById("couponClick");
    button.addEventListener("click", function(){
     if($('#promocodeContainer').length > 0 && getCookie("startProcess") != 1){
      setCookie("startProcess", 1, 1);
      //document.getElementById("promocodeContainer").getElementsByTagName("button")[0].click();
    }
    else if($('#promocodeContainer a.ng-hide').length > 0 && getCookie("startProcess") != 1){
      setCookie("startProcess", 1, 1);
      document.getElementById("promocodeContainer").getElementsByTagName("a")[0].click();
    }

    $(".hatke-discount-cover:eq(0)").css("display", "block");
    if(dt1 != 0 && lenArray != 0){
      $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (dt1+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
      var perDone = dt1/lenArray;
      perDone = perDone*100;
      perDone = parseInt(perDone);
      $('.hdc-lb-progress').text(perDone + "% Complete");
      $('.hdc-lb-fg').css("width", perDone + "%");
    }
    getCoupons();
    setCookie("startProcess", 1, 1);
  }, false);


}
}

function getSavings(){
//  if($('#promocodeContainer').length > 1){
//   if($("#couponDiscount").length > 0){
//     var msg = $('.fs-base.normal.gray-dark.mt-1.ng-binding').text().trim();
//   // var cpn_msg = $('#promocodeContainer #common_succ_msg').text().trim();
//   msg = msg.split("Rs.");
//   if(msg.length>1){
//     msg = msg[1];
//     msg = msg.trim();
//     savings = parseFloat(msg);
//   }
//   else {
//     msg = msg[0];
//     msg = msg.split("Rs");
//     if(msg.length>1){
//       msg = msg[1];
//       msg = msg.trim();
//       savings = parseFloat(msg);
//     }
//     else {
//       savings = 0;
//     }
//   }
// }
// else {
//   var cpn_msg = $('.fs-base.normal.gray-dark.mt-1.ng-binding').text().trim()
//   savings = 0;
// }
// }
// else if($(".summary-content").length > 0 && $('.remove-coupon').length > 0 ){
//   var msg = $('.remove-coupon:eq(0) span:eq(0)').text();

//   savings_read = $(".summary-content:eq(0) .standard-price").length-1;
//   savings = $(".summary-content:eq(0) .standard-price:eq("+ savings_read +")").text().trim();
//   savings = savings.split(",").join("").trim();
//   savings = parseFloat(savings);
//   if(isNaN(savings)){
//     savings = 0;
//   }

// }
// else {
//   var cpn_msg = $('#resultErrMessage').text().trim();
//   savings = 0;
//   var cpn_msg = "";

// }
// var saving1 = savings;
// console.log("savings: "+savings);
// if($('#promocodeContainer a.ng-hide').length > 0){
//   savings = getCookie("savings")+  savings+"~";
//   setCookie("savings", savings, 1);
// }

// if(parseFloat(saving1) > getCookie("bestSaving") && (saving1 != 0)){
//   setCookie("bestSaving", saving1, 1);
//   var cup = getCookie('couponList');
//   cup = cup.split("~");
//   setCookie("bestCoupon", cup[getCookie("doneTill")-1], 1);
// }
getBestCoupon();
}

function applyBest(){
  // alert("apply best was called");
  var bestCpn = getCookie("bestCoupon");
  if(bestCpn != ""){
    if($("#promocodeContainer").length > 0 && getCookie("bestCoupon") != ""){
     if($('#ourSearchKey_superPnr').length > 0 && $('#ourSearchKey_superPnr').text().trim() != ""){
       var superPnr = $('#ourSearchKey_superPnr').text().trim();
     }
     if($('#ourSearchKey_ftype').length > 0 && $('#ourSearchKey_ftype').text().trim() != ""){
       var ftype = $('#ourSearchKey_ftype').text().trim();
     }
     if($('#ourSearchKey_pricingId').length > 0 && $('#ourSearchKey_pricingId').text().trim() != ""){
       var pricingId = $('#ourSearchKey_pricingId').text().trim();
     }
     if($('#ourSearchKey_totalAmount').length > 0 && $('#ourSearchKey_totalAmount').text().trim() != ""){
       var totalAmount = $('#ourSearchKey_totalAmount').text().trim();
     }
    // var superPnr = post_para.superPnr;
    // var flightType = post_para.data.ftype;
    // var pricingId = post_para.pricingId;
    // var totalAmount = post_para.oldPrice;

    $.post( "https://secure.yatra.com/air-pay-book-service/dom2/promocode/validateNew",{superPnr: superPnr, flightType: ftype, pricingId: pricingId, totalAmount: totalAmount, promoContext: "REVIEW" ,UserId: "", promoCode: bestCpn  } )
    .done(function(data) {
      // console.log(" NEW UI DATA: success2: "+data );

      //$("input.upper-case").val(bestCpn);
      $("#couponClick").css("display","none");
      $(".hatke-discount-cover:eq(0)").css("display", "none");
      $(".hatke-discount-cover:eq(1)").css("display", "block");
      $(".hatke-discount-cover:eq(1)").find(".hdc-c-line").html("Apply Coupon Code <b> "+bestCpn+"</b> to avail the offer.<br> Congratulation! You have saved a total of <b> "+getCookie('bestSaving')+"!</b>");
      
      $(".hatke-discount-cover:eq(2)").css("display", "none");
      setCookie("doneTill", 0, -1);
      setCookie("savings", "", -1);
      setCookie("bestCouponFound", 0, -1);
      setCookie("bestSaving", 0, -1);
      setCookie("endProcess", 0, -1);
      setCookie("startProcess", 0, -1);
      setCookie("bestCoupon", "", -1);
      // alert("Sorry1");
    })
    .fail(function(jqXHR) {
      var statusCode = jqXHR.status;
      if(statusCode == 503){


        arrayBest.push([bestCpn, couponAt]);
        arrayBest = JSON.stringify(arrayBest);
        var jsonArr = [{'best_cpn': arrayBest}];
        jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr, 13, doNothing, []);

        setCookie("endProcess", 1, 1);
        // window.location.reload();
      }
    });
  }
  else {
    setCookie("doneTill", 0, -1);
    setCookie("savings", "", -1);
    setCookie("bestCouponFound", 0, -1);
    setCookie("bestSaving", 0, -1);
    setCookie("endProcess", 0, -1);
    setCookie("startProcess", 0, -1);
    setCookie("bestCoupon", "", -1);
    $(".hatke-discount-cover:eq(0)").css("display", "none");
    $(".hatke-discount-cover:eq(1)").css("display", "none");
    $(".hatke-discount-cover:eq(2)").css("display", "block");
  }
}
else{
 setCookie("doneTill", 0, -1);
 setCookie("savings", "", -1);
 setCookie("bestCouponFound", 0, -1);
 setCookie("bestSaving", 0, -1);
 setCookie("endProcess", 0, -1);
 setCookie("startProcess", 0, -1);
 setCookie("bestCoupon", "", -1);
 $(".hatke-discount-cover:eq(0)").css("display", "none");
 $(".hatke-discount-cover:eq(1)").css("display", "none");
 $(".hatke-discount-cover:eq(2)").css("display", "block");
   // alert("Sorry2");
 }
    // return;
  }

  function removeTheCover(){
    if($('.hatke-discount-cover').length>0){
      $('.hatke-discount-cover').css("display", "none"); 
    }
  }
