  

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

var couponAt = 50;
var arrayMsg = [];
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
 // alert("bhuwan");
  
  if(typeof(mytext) != undefined && mytext!= "undefined"){
   setCookie("couponList", mytext, 1);
   getBestCoupon();
 }
}

function getCoupons(){
  var jsonArr = [{'pos': 1}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcessJab, []);
}

function endCompleteProcess(c){
  var done_c = getCookie('doneTill');
  if(done_c >= c && getCookie("endProcess") != 1){

    couponAt = 50;
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

function requestCoupons(couponCode, c){
  if(c == 0 || flagArray[c-1] == 1){
    // console.log("Called with " + c + " " + JSON.stringify(flagArray));
    if($(".have-a-coupon").length > 0 || $(".remove-coupon").length > 0){
      var csrf = $("input[name='_csrf']").val();
      $.post( "http://www.jabong.com/cart/applycoupon/", {couponcode: couponCode, _csrf: csrf} )
      .done(function(data) {
        // console.log(" NEW UI DATA: success: "+data );
      // alert("doneTill1 set to " + (c+1));
//newcode
$(".hd-cover-close").click(function()
{

  setCookie("endProcess", 1, 1);
   setCookie('newsavingscompare',0,1);
});
//newcode

      
      setCookie("doneTill", parseInt(c)+1, 1);
      var statusCode = 200;

      if(typeof(data) != "object"){
        data = data.replace(/(&nbsp;|<([^>]+)>)/ig,"*~~*");
        data = data.replace(/(\r\n|\n|\r)/gm,"*~~*");
        // alert("data: "+typeof(data)+" : "+ data);
        if(data.toUpperCase().split("COUPON DISCOUNT").length > 0){
          var data_sav = data.toUpperCase().split("COUPON DISCOUNT");
          data_sav = data_sav[1].toUpperCase().split("*~~**~~*- *~~*");
          data_sav = data_sav[1].toUpperCase().split("*~~*");
          data_sav = data_sav[0].split(">");
          data_sav = data_sav[data_sav.length-1].trim();
          data_sav = data_sav.split(",").join("").trim();
          data_sav = parseFloat(data_sav);

          if(isNaN(data_sav)){
            data_sav = 0;
          }
          var saving1 = data_sav;
          if(parseFloat(saving1) > getCookie("bestSaving") && (saving1 != 0)){
            setCookie("bestSaving", saving1, 1);
            setCookie("bestCoupon", couponCode, 1);
          }
          // alert("data_sav: "+data_sav);
          var savings_till = getCookie("savings") + data_sav + "~";
          setCookie("savings", savings_till, 1);
          var cpn_msg = "success";
          cpn_msg = couponCode+"*~*"+cpn_msg;
          setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
        }
      }
      else{
        var savings_till = getCookie("savings") +"0~";
        setCookie("savings", savings_till, 1);
        var cpn_msg = data.msg.error;
        cpn_msg = couponCode+"*~*"+cpn_msg;
        // alert("cpn_msg: "+cpn_msg);
        setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
      }

      var c_len = getCookie("couponList");
      c_len = c_len.split("~").length-1;
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

      window.location.reload();
    });
}
else if($(".apply-voucher-sec").length > 0){
  $.post( "http://www.jabong.com/cart/addvoucher/", {couponcode: couponCode, YII_CSRF_TOKEN:""} )
  .done(function(data) {
    
      // console.log(" Test_HK: success:"+data );
      // alert("doneTill1 set to " + (c+1));
      setCookie("doneTill", parseInt(c)+1, 1);
      var statusCode = 200;
      var savings_till = getCookie("savings") +"0~";
      var msg = JSON.parse(data);
      var cpn_msg = (msg.message).trim();
      cpn_msg = cpn_msg.replace(/(&nbsp;|<([^>]+)>)/ig,"");
      cpn_msg = cpn_msg.replace(/(\r\n|\n|\r)/gm,"");
      cpn_msg = couponCode+"*~*"+cpn_msg;
      setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
      // alert("cpn_msg@ : "+ cpn_msg);
      // alert(savings_till + " " + c);
      setCookie("savings" , savings_till, 1);
      flagArray[c] = 1;
    })
  .fail(function(jqXHR) {
      // console.log(" Test_HK: error: "+jqXHR.status );
      var statusCode = jqXHR.status;
      if(statusCode == 503){
        setCookie("doneTill", parseInt(c)+1, 1);
        var cpn_msg = "success";
        cpn_msg = couponCode+"*~*"+cpn_msg;
        setCookie("cpn_msg" + parseInt(getCookie("doneTill")), cpn_msg, 1);
        // console.log("cpn_msg: "+cpn_msg);
        // flagArray[c] = 1;
        // alert("doneTill2 set to " + (c+1));
        window.location.reload();
      }
      else {
        flagArray[c] = 1;
      }
    });

}
}
else {
  setTimeout(function(){ requestCoupons(couponCode, c); }, 1000);
}
}

function getBestCoupon(){
  if($('#resultSuccMessage').css("display") == "block" && savingsRead==0){
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
  // var coupons_list = "HATKE20~EXTRA20~SOME~";
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


  
  if(getCookie("newsavingscompare")=="")
  {
    setCookie("newsavingscompare",0,1);
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
  requestCoupons(couponCode, c);

}
endCompleteProcess(c);

}

if(getCookie("endProcess") == 1){
  setCookie("doneTill", 0, -1);
  // setCookie("savings", "", -1);
  setCookie("bestCouponFound", 0, -1);
  setCookie("bestSaving", 0, -1);
  setCookie("endProcess", 0, -1);
  setCookie("startProcess", 0, -1);
  setCookie("bestCoupon", "", -1);
  if($('#resultSuccMessage').css("display") == "none"){
    window.location.reload();
    setCookie("endProcess", 0, -1);
  }
  $(".hatke-discount-cover:eq(0)").css("display", "none");
  $(".hatke-discount-cover:eq(1)").css("display", "block");
}
else{
  var curURL = window.location.href;
  if(curURL.split('jabong.com/cart').length>1){
    var imgURL = returnResource("apply-coupon.png");
    if($(".apply-voucher-sec").length > 0){
      $('.check-info(0)').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:5px;' src='" + imgURL + "'></a>");
    }
    else if($(".have-a-coupon").length > 0){
      $('.check-info:eq(0)').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:5px;' src='" + imgURL + "'></a>");
    }
    else if($(".remove-coupon").length > 0){
      $('.check-info:eq(0)').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:5px;' src='" + imgURL + "'></a>");
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
      //alert("bhuwan");

      //alert($('span.standard-price:eq(1)').text());
      var price1= $('span.standard-price:eq(1)').text();
      //alert($('span.rupee:eq(1)').text());
      var price2=$('span.rupee:eq(1)').text();
      var difference=parseInt(price1)-parseInt(price2);

      //alert(difference);
      if (difference<0)
      {
        difference=0;
      }
     
      
      if(difference>0||difference>getCookie('newsavingscompare'))
      {
        setCookie('newsavingscompare',difference,1);

        var arrayvar = getCookie('newsavingscompare');
        arrayvar=arrayvar+"~";
     

       }
var arrayvar1=getCookie('newsavingscompare');
      //$('.hdc-sav-amt:eq(0)').text(getCookie('newsavingscompare'));

          if(arrayvar1> $('.hdc-sav-amt:eq(0)').text().trim()){
      var currentSavAmt = parseFloat($('.hdc-sav-amt:eq(0)').text().trim()),
      finalSavAmt = arrayvar1;
      $({c: currentSavAmt}).animate({c: finalSavAmt}, {
        step: function(now) {
          $('.hdc-sav-amt:eq(0)').text(Math.round(now))
        },
        duration: 300,
        easing: "linear"
      });
    }
      //alert(newsav);
      
      
      //alert(getCookie('newsavings')); 
     



    }
    getBestCoupon();
  }
  var button = document.getElementById("couponClick");
  button.addEventListener("click", function(){
   if($('#resultSuccMessage').length > 0 && $('#resultSuccMessage').css("display") == "block" && getCookie("startProcess") != 1){
    setCookie("startProcess", 1, 1);
    document.getElementById("resultSuccMessage").getElementsByTagName("a")[0].click();
  }
  else if($('.remove-coupon').length > 0 && getCookie("startProcess") != 1){
    setCookie("startProcess", 1, 1);
    document.getElementsByClassName("remove-coupon")[0].click();
  }

  $(".hatke-discount-cover:eq(0)").css("display", "block");
  if(dt1 != 0 && lenArray != 0){
    $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (dt1+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
    var perDone = dt1/lenArray;
    perDone = perDone*100;
    perDone = parseInt(perDone);
    $('.hdc-lb-progress').text(perDone + "% Complete");
    $('.hdc-lb-fg').css("width", perDone + "%");
    alert("bhuwan1");
    alert($('span.standard-price:eq(0)').text());
  }
  getCoupons();
  setCookie("startProcess", 1, 1);
}, false);


}
}

function getSavings(){
 if($('#resultSuccMessage').css("display") == "block"){
  if($("#couponDiscount").length > 0){
    var msg = $('#couponDiscount').text();
  // var cpn_msg = $('#resultSuccMessage #common_succ_msg').text().trim();
  msg = msg.split("Rs.");
  if(msg.length>1){
    msg = msg[1];
    msg = msg.trim();
    savings = parseFloat(msg);
  }
  else {
    msg = msg[0];
    msg = msg.split("Rs");
    if(msg.length>1){
      msg = msg[1];
      msg = msg.trim();
      savings = parseFloat(msg);
    }
    else {
      savings = 0;
    }
  }
}
else {
  var cpn_msg = $('#resultErrMessage').text().trim();
  savings = 0;
}
}
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
else {
  var cpn_msg = $('#resultErrMessage').text().trim();
  savings = 0;
  var cpn_msg = "";

}
var saving1 = savings;
// console.log("savings: "+savings);
if($('.remove-coupon').length > 0){
  savings = getCookie("savings")+  savings+"~";
  setCookie("savings", savings, 1);
}

if(parseFloat(saving1) > getCookie("bestSaving") && (saving1 != 0)){
  setCookie("bestSaving", saving1, 1);
  var cup = getCookie('couponList');
  cup = cup.split("~");
  setCookie("bestCoupon", cup[getCookie("doneTill")-1], 1);
}
getBestCoupon();
}

function applyBest(){

  var bestCpn = getCookie("bestCoupon");
  if(bestCpn != ""){
    if($(".apply-voucher-sec").length > 0){
      $.post( "http://www.jabong.com/cart/addvoucher/", {couponcode: bestCpn, YII_CSRF_TOKEN:""} )
      .done(function(data) {
        setCookie("doneTill", 0, -1);
      setCookie("savings", "", -1);
      setCookie("bestCouponFound", 0, -1);
      setCookie("bestSaving", 0, -1);
      setCookie("endProcess", 0, -1);
      setCookie("startProcess", 0, -1);
      setCookie("bestCoupon", "", -1);
      setCookie('newsavingscompare',0,1);
      alert("bhuwan");
      $(".hatke-discount-cover:eq(0)").css("display", "none");
      $(".hatke-discount-cover:eq(1)").css("display", "none");
      $(".hatke-discount-cover:eq(2)").css("display", "block");
      // alert("Sorry1");
    })
      .fail(function(jqXHR) {
        var statusCode = jqXHR.status;
        if(statusCode == 503){
          alert("bhuwan123");


          arrayBest.push([bestCpn, couponAt]);
          arrayBest = JSON.stringify(arrayBest);
          var jsonArr = [{'best_cpn': arrayBest}];
          jsonArr = JSON.stringify(jsonArr);
          sendMessage(1, jsonArr, 13, doNothing, []);

          setCookie("endProcess", 1, 1);
          window.location.reload();
        }
      });
    }
    else if($(".have-a-coupon").length > 0 || $(".remove-coupon").length > 0){
      var csrf = $("input[name='_csrf']").val();
      $.post( "http://www.jabong.com/cart/applycoupon/", {couponcode: bestCpn, _csrf: csrf} )
      .done(function(data) {
        setCookie("endProcess", 1, 1);
        //alert("bhuwan1222");
        setCookie('newsavingscompare',0,1);

        window.location.reload();
      });
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
   //alert("bhuwan12345");
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

  if(parseInt(getCookie("endProcess"))==1)
  {
    $("hd-cover-close").click();
  }
  

