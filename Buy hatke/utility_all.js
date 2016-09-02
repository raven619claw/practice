resultsShown = 0;
watchListArray = [];
tabID = 0;
userSetting = "notYet";
check_hover_graph = 0;
check_hover_yellow = 0;
check_hover_pred = 0;
check_click_yellow = 0;
check_click_coupon = 0;
check_hover_deals = 0;
check_click_yellow = 0;
var email = "";
var extName = "";
function returnResource(name){
  return chrome.extension.getURL(name);
}

var urlNow = window.location.href;
var posNow = getCurrentPosition(urlNow);
if(posNow!=0){
  var jsonArr = [{'dp': window.location.hostname}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}


// pidPosArr = [];
// console.log("posAll: "+posAll);
function checkDefine(){
 if(typeof(getPID) == 'function' && typeof(getProd) == 'function'){
   pidAll = getPID();
   prodAll = getProd();
   if(prodAll!=""){
       var posAll = getCurrentPosition(window.location.href);
       // pidPosArr.push([encodeURIComponent(pidAll), posAll]);
       var jsonArr = [{'pid': pidAll, 'pos': posAll}];
       jsonArr = JSON.stringify(jsonArr);
       sendMessage(1, jsonArr, 20, doNothing, []);
    }
 }
 else{
   // console.log("NO SUCH function");
   setTimeout(checkDefine, 5000);
 }
}
checkDefine();

  function getExtName(){
   // Gets all current alerts list
   var jsonArr = [{'extName': 'haiKya'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setExtName, passBack);
 }

 getExtName();

 function setExtName(data, passBack){
     extName = data;
 }

function plotHotDeals(){
    $('body').append('<div class="hk-dpop animated"><div class="hk-dpop-toggle"><svg class="hk-dpop-toggle-arrow hk-dpop--icon " xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 8.2 15.8"><style>.hk-dpop-toggle-arrow0{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path id="XMLID_113_" d="M1.5 1.5L6.7 8l-5.2 6.3" class="hk-dpop-toggle-arrow0"/></svg></div><div class="hk-dpop-box"><a href="#" target="_blank" style="text-decoration:none;" class="hk-dpop-wrap"><div class="hk-dpop-img--wrap"><svg class="hk-dpop-img" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 76.1 71.5"><style>.hk-dpop-img0{fill:url(#XMLID_76_);} .hk-dpop-img1{fill:#FFFFFF;}</style><g id="XMLID_84_"><radialGradient id="XMLID_76_" cx="38.2" cy="35.7" r="32.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#DE1C24"/><stop offset=".4" stop-color="#D91E26"/><stop offset=".8" stop-color="#C9242A"/><stop offset="1" stop-color="#C1272D"/></radialGradient><circle id="XMLID_87_" cx="38.2" cy="35.7" r="32.4" class="hk-dpop-img0"/><g id="XMLID_54_"><path id="XMLID_55_" d="M24.7 32.5H24V32v-.8l.4-2 .3-2.3c0-1 .2-1.8.3-2.6h-.6s-.2 0-.2-.3c0 0 0-.2.2-.3l.6-.4h.2v-.8l.2-.6V21l1-6c0-.2 0-.4.2-.6 0-.2.4-.3 1-.5h.8l-.2 1c0 .7-.2 1.3-.4 2 0 1-.3 1.8-.4 2.8l-.4 3 2.8-.7H31c.4-.2.8-.2 1.2-.2l.3-2.2c0-.7.2-1.4.3-2 0-.6.2-1.2.3-1.6l.3-1c0-.3 0-.5.2-.6 0-.2 0-.3.2-.4l.3-.2h.4s.2 0 .3-.2h1l-1 4-.8 4.2h1c.3 0 .5 0 .6.2v.5l-.2.3-.3.4c-.2 0-.3.3-.5.5h-.3l-.3-.2h-.5c0 .2 0 .5-.2.8v1l-.4 2c-.2.5-.2 1.2-.3 2v2h-.4l-.3.2h-.3-.2-.2-.5v-1.2-1-1-1l-.6-1c0-.5-.4-.8-.6-1l-1-1-1-.2h-.8v1.3l-.2 1c0 1 0 1.6-.2 2.3v2L26 32l-.6.3c-.2 0-.3 0-.5.2 0-.2 0-.2-.3-.2zm7-9.4h-1.4l-1 .2c.2 0 .4.3.6.5 0 .2.4.5.6.7l.6.8.4 1c0-.7 0-1.2.2-1.7 0-.5 0-1 .2-1.5h-.2-.2z" class="hk-dpop-img1"/><path id="XMLID_58_" d="M42.3 24c0 .5-.2 1-.4 1.4l-.8 1.2-1 .8-1.2.4c-.5 0-1 0-1.3-.2l-.8-.8c-.3-.3-.4-.7-.5-1 0-.5 0-1-.2-1.2v-.8c0-.3 0-.6.2-1l.3-1c0-.2.3-.5.5-.8l.3-.6c0-.2.3-.3.5-.5l.8-.4c.2 0 .5 0 .7-.2H40.5l.8.6.7.8.3 1.3v.9l1-.6.8-.6 1-.7.5-.5.3-.2h.2v.4s0 .3-.2.4c0 .2-.2.4-.5.6l-1 1-1 .8-1 .6zm-4.5 1v.6l.3.6.5.4h1.1l.5-.6.5-.6.3-.7h-.3-.3c-.5 0-1 0-1.3-.2-.5-.3-.8-.6-1-1v.8c-.2 0-.2.3-.2.6zm1-3.7v1c0 .2 0 .4.3.6l.6.3H41V23v-.5-.8c0-.3 0-.5-.2-.7 0-.2-.2-.4-.3-.5l-.4-.2s-.4 0-.6.3l-.7.7z" class="hk-dpop-img1"/><path id="XMLID_62_" d="M51.3 21.2l.2-.2h.2V21.6l-1 1.7-1 1.7-1.3 1.4c-.4.4-.8.6-1 .6H46l-.7-.7-.4-.8v-.8-1-2c.2-.7.2-1.5.3-2.3l.3-2.4H45l-.7.2H43c-.3 0-.6 0-.8-.2 0 0-.2 0-.2-.2v-.3c.2 0 .2-.2.3-.3h1.1c.3 0 .6 0 1-.2h.6l.7-.3c0-.6.2-1.2.3-1.7 0-.5.2-.8.3-1l.2-.2h1l.2.8v1.7H51l.4.2.2.2v.3s0 .2-.2.3H51 50.2h-.7c-.3 0-.7 0-1 .2h-.8v.6l-.2.7c0 .5-.3 1-.4 1.8 0 .5-.3 1.2-.5 2l-.7 2.2c0 .6 0 1 .2 1.3 0 .3.3.5.4.6l.6.2c.2 0 .4 0 .7-.3l.8-.7.8-1 .8-1 .7-1 .6-.6z" class="hk-dpop-img1"/><path id="XMLID_64_" d="M20 56c0-.2-.2-.2-.2-.3v-.3s0-.2.2-.3l.3-.6.3-1.4.3-1.8c0-.6 0-1.3.2-2l.2-1.6v-1.2l.2-1.2V44 42l1.6-1h.5v2.2c0 .5 0 1-.2 1.8l-.2 2L23 49l-.3 1.7-.8 4.5c0 .3.5.4 1 .4s1.2-.3 1.8-.8c.7-.5 1.3-1.2 2-2 .5-1 1-2 1.4-3.4s.6-2.8.5-4.5c0-1 0-1.8-.4-2.5-.2-.7-.5-1.2-1-1.7-.3-.4-.7-.7-1.2-1-.4 0-1-.2-1.5 0-1.3 0-2.6.7-4 2l-.2-1.7 1-1c.5 0 1-.3 1.3-.5.4-.2 1-.3 1.3-.3.7 0 1.5 0 2.3.2.8.2 1.5.7 2 1.2S29.6 41 30 42c.3.8.5 2 .6 3.3 0 .8 0 1.6-.2 2.4-.2.8-.4 1.7-.8 2.5l-1.2 2.4-1.6 2c-.6.6-1.3 1-2 1.5s-1.5.7-2.3.8h-.8l-1-.3-.7-.6z" class="hk-dpop-img1"/><path id="XMLID_66_" d="M40.6 47.3L39.4 49c-.4.7-1 1.2-1.4 1.7-.5.5-1 1-1.6 1.2l-1.6.5h-1l-1-.6-.7-1-.2-1.7c0-.5 0-1 .3-1.7l1-1.7 1.3-1.5s1-.6 1.5-.6 1 0 1 .2.5.5.5 1c0 .3 0 .7-.2 1 0 .4-.2.7-.5 1l-.8.8-.8.7-1 .6c0 .2-.4.4-.5.5 0 .3 0 .6.3.8 0 .2.3.4.4.5l.6.3h.6c.4 0 1-.2 1.3-.6.5-.3 1-.7 1.3-1.2l1.2-1.4c.4-.4.6-.8 1-1 0-.2 0-.3.2-.3h.2v.5zm-5.2-2.5c-.2 0-.3 0-.5.3l-.7.8-.5 1-.3 1.6.5-.4c.2 0 .3-.3.5-.5.5-.5 1-1 1-1.2.3-.3.4-.6.4-1 0 0 0-.3-.2-.4l-.4-.2z" class="hk-dpop-img1"/><path id="XMLID_69_" d="M49.2 46.6l-.6 1-.8 1.2c-.3.4-.5.8-.8 1l-.7.8-.4.2h-1.6l-.3-.4-.2-.5c0-.3 0-.6-.2-1-.3.5-.6 1-1 1.3-.2.3-.6.6-1 .7l-1 .4h-.6l-.6-.6-.4-1v-1.5c0-.8.3-1.6.7-2.2.2-.6.6-1.2 1-1.7s.8-1 1.3-1.2l1-.3c.5 0 .8 0 1 .2.2 0 .3.2.4.4 0 .2 0 .6-.2 1h.8V46l-.3 1.4V49.2l.2.4s0 .2.2.3h.4s.3 0 .5-.3l.6-.7.5-1 .6-1 .6-.7.3-.5s0-.2.2-.2h.2v.4c0 .2 0 .4-.2.6zM43.6 48v-1c.2-.3.2-.6.2-1v-.7-.3h-.2s0 .2-.2.2H43c.2 0 .2-.3.2-.4v-.3-.2c-.3 0-.5 0-.8.4-.3.3-.7 1-1 1.8l-.5 1c-.2.5-.2 1-.2 1.2v1l.3.4.6.3c.2 0 .4 0 .5-.2.3 0 .5-.2.6-.3l.5-.5.4-.5.2-.7z" class="hk-dpop-img1"/><path id="XMLID_72_" d="M48 50.3l.8-6 .5-3.3.2-2v-.6-.6-.6l.2-.2h.3c0-.2.3-.2.4-.2h1v1.8L51 41l-.7 3.8-1 6v.2H49h-.3-.3s-.2 0-.3-.2v-.5z" class="hk-dpop-img1"/><path id="XMLID_74_" d="M55.3 49.2h.7c0-.2.2-.2.3-.3l.2-.5V48l-.4-1-.4-.8-.4-.8-.2-.5c0-.2 0-.4-.2-.5v-.3c-.2 0-.3.3-.4.5l-.5.8-.6.8c0 .2-.2.4-.3.5 0 0 0 .2-.2.2h-.2v-.2-.4l.3-.5c0-.3.2-.6.3-.8 0-.3.3-.5.4-.7l.2-.4-.2-.3c0-.2-.2-.4 0-.6l.2-.6.6-.7.7-.5h.7c.2 0 .3 0 .4.2l.2.4v.3c0 .2-.2.3-.3.5 0 .2-.2.4-.4.6v1c.2 0 .3.3.4.5l.3.6c0 .3.3.6.4.8.3.2.4.5.5.7l.3.6v.6c0 .2 0 .5-.2.8l-.6 1c-.3.3-.5.6-1 .8-.2.2-.6.4-1 .4-.3 0-.5 0-.8-.2-.3 0-.5-.3-.7-.5l-.5-.7v-.5l.3-.4s0-.2.3-.3h.2s0-.2.3-.2c.2 0 .3 0 .5-.2l.4 1s0 .3.2.4v.2z" class="hk-dpop-img1"/></g></g></svg></div><div class="hk-dpop-details--wrap"><div class="hk-dpop-details--text">Get upto 50% off for products in this category</div><button class="hk-dpop-btn"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="hk-dpop-btn--img hk-dpop--icon animated tupper" viewBox="0 0 14.9 10.6"><style>.hk-dpop-btn--img0{fill:none;stroke:#333333;stroke-width:2;stroke-miterlimit:10;}</style><g id="XMLID_53_"><path id="XMLID_61_" d="M9.8.6l4 4.7-4 4.7" class="hk-dpop-btn--img0"/><path id="XMLID_55_" d="M13.7 5.3H0" class="hk-dpop-btn--img0"/></g></svg> TAKE ME THERE</button></div></a></div><div class="hk-dpop--close" onclick="event.stopPropagation();"><div style="margin-left:15px;">&times;</div></div><div class="hk-dpop-hide"><button class="hk-dpop-hiders hideOne">1 Day</button><button class="hk-dpop-hiders hideFifteen">15 DAYS</button></div></div>');
  }

function addToDOM(){

  var big_logo = returnResource("buyhatke_logo_big.png");

  if($('.hatke-discount-cover').length < 3){
    $('body').append('<div class="hatke-discount-cover" style="display:none;"><div class="hd-cover-bg"></div><div class="hd-cover-main"><a href="#" class="hd-cover-close">x</a><div class="hd-cover-wrap"><header class="hd-cover-head"><a href="http://compare.buyhatke.com/"><img src="'+big_logo+'"></a></header><div class="hd-cover_content"><h3 class="hdc-head">Finding out the best coupon for you !</h3><div class="hdc-content-main"><div class="hdc-c-line">We are automatically finding out best coupon code for you.</div><div class="hdc-loading_bar"><div class="hdc-lb-bg hdc-lb"><span class="hdc-lb-progress">0% Complete</span><div class="hdc-lb hdc-lb-fg" style="width:0%;"></div></div></div><div class="hdc-c-line hdc-center"><div class="bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div><span class="hdc-loading"></span></div><div class="hdc-savings"><div class="hdc-total-savings"><span class="WebRupee">Rs.</span> <span class="hdc-sav-amt">0</span></div> saved till now</div></div></div></div></div></div>');

    $('body').append('<div class="hatke-discount-cover" style="display:none;"><div class="hd-cover-bg"></div><div class="hd-cover-main"><div class="hd-cover-wrap"><header class="hd-cover-head"><a href="http://compare.buyhatke.com/"><img src="'+big_logo+'"></a></header><div class="hd-cover_content"><h3 class="hdc-head">Yippie!</h3><div class="hdc-content-main"><div class="hdc-c-line">Congratulations! You have saved a total of <div class="hdc-total-savings"><span class="WebRupee">Rs.</span> <span class="hdc-sav-amt">0</span>!</div></div><div class="hdc-button-wrap"><div href="#" class="hdc-button"><div class="hdc-share"><span class="its-title">Share Your Joy:</span> <div class="is-sp is-fb"><a href="https://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=Have%20you%20started%20saving%20via%20Buyhatke%20?&p%5Bsummary%5D=Yippie%20!%20I%20just%20saved%20by%20automatically%20applying%20best%20coupon%20via%20Buyhatke&p%5Burl%5D=http%3A%2F%2Fextension.buyhatke.com&p%5Bimages%5D%5B0%5D=http://compare.buyhatke.com/pricegraph.jpg.pagespeed.ce.DJYFBY26i2.jpg" target="_blank" class="is-logo is-l-fb"></a></div><div class="is-sp is-tw"><a href="http://twitter.com/home?status=Try%20the%20amazing%20CompareHatke%20Chrome%20Extension!+http%3A%2F%2Fextension.buyhatke.com" target="_blank" class="is-logo is-l-tw"></a></div><div class="is-sp is-gp"><a href="https://plus.google.com/share?url=http%3A%2F%2Fextension.buyhatke.com" target="_blank" class="is-logo is-l-gp"></a></div></div></div><a href="javascript:void();" class="hdc-button" style="z-index: 10001;">Finish</a></div><footer class="hdc-footer"><div class="hdc-feedback">Give us a <a href="https://goo.gl/wpYSpE" target="_blank">feedback</a></div></footer></div></div></div></div></div>');

    $('body').append('<div class="hatke-discount-cover" style="display:none;"><div class="hd-cover-bg"></div><div class="hd-cover-main"><a href="#" class="hd-cover-close">x</a><div class="hd-cover-wrap"><header class="hd-cover-head"><a href="http://compare.buyhatke.com/"><img src="'+big_logo+'"></a></header><div class="hd-cover_content"><h3 class="hdc-head">Sorry! No Coupons Found</h3><div class="hdc-content-main"><div class="hdc-c-line">Sorry. We were unable to find any suitable coupons for your product.</div><div class="hdc-c-line"> But still you saved your precious time ! :)</div><div class="hdc-button-wrap"><a href="javascript:void();" class="hdc-button" style="z-index: 10001;">Finish</a></div><footer class="hdc-footer"><div class="hdc-feedback">Give us a <a href="https://goo.gl/wpYSpE" target="_blank">feedback</a></div><div class="hdc-share"><span class="its-title">Share:</span><div class="is-sp is-fb"><a href="https://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=Have%20you%20started%20saving%20via%20Buyhatke%20?&p%5Bsummary%5D=Yippie%20!%20I%20just%20saved%20by%20automatically%20applying%20best%20coupon%20via%20Buyhatke&p%5Burl%5D=http%3A%2F%2Fextension.buyhatke.com&p%5Bimages%5D%5B0%5D=http://compare.buyhatke.com/pricegraph.jpg.pagespeed.ce.DJYFBY26i2.jpg" target="_blank" class="is-logo is-l-fb"></a></div><div class="is-sp is-tw"><a href="http://twitter.com/home?status=Try%20the%20amazing%20CompareHatke%20Chrome%20Extension!+http%3A%2F%2Fextension.buyhatke.com" target="_blank" class="is-logo is-l-tw"></a></div><div class="is-sp is-gp"><a href="https://plus.google.com/share?url=http%3A%2F%2Fextension.buyhatke.com" target="_blank" class="is-logo is-l-gp"></a></div></div></footer></div></div></div></div></div>');

var buttons = document.getElementsByClassName('hd-cover-close');
buttons[0].addEventListener("click", function(){
  removeTheCover();
  stopCoupon = 0;
  setCookie("coupInProgress", 0, 1);

}, false);
buttons[1].addEventListener("click", function(){
  removeTheCover();
  stopCoupon = 0;
  setCookie("coupInProgress", 0, 1);

}, false);

var buttons2 = document.getElementsByClassName('hdc-button'); 
buttons2[1].addEventListener("click", function(){
  removeTheCover();
  stopCoupon = 0;
  setCookie("coupInProgress", 0, 1);

}, false);
buttons2[2].addEventListener("click", function(){
  removeTheCover();
  stopCoupon = 0;
  setCookie("coupInProgress", 0, 1);

}, false);

$(".hd-cover-close").click(function(){
 if(check_click_coupon == 0){
   var jsonArr = [{'act': 4, 'act_text': 'Coupon PopUp Cross'}];
   jsonArr = JSON.stringify(jsonArr);
   sendMessage(1, jsonArr, 9, doNothing, []);
   check_click_coupon = 1;
 }
});
coupontracer();
}}


function setTabID(tabId, passBack){
  ////console.log("Tab ID received is " + tabId);
  tabID = tabId;
}

function getTabID(){
   ////console.log("Tab ID process initiated");
   var jsonArr = [{'sendTabID': 'bhejDE'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setTabID, passBack);
 }

 getTabID();

 function filter_price(pr){
  pr = String(pr);
  if(pr.split("Rs.").length > 1){
    pr = pr.split("Rs.")[1];
  }
  if(pr.split("Rs").length > 1){
    pr = pr.split("Rs")[1];
  }
  if(pr.split("INR").length > 1){
    pr = pr.split("INR")[1];
  }
  if(pr.split("Inr").length > 1){
    pr = pr.split("Inr")[1];
  }
  if(pr.split("RS.").length > 1){
    pr = pr.split("RS.")[1];
  }
  if(pr.split("RS").length > 1){
    pr = pr.split("RS")[1];
  }
  if(pr.split("R").length > 1){
    pr = pr.split("R")[1];
  }
  if(pr.split("`").length > 1){
    pr = pr.split("`")[1];
  }
  if(pr.split("MRP").length > 1){
    pr = pr.split("MRP")[1];
  }
  if(pr.split("mrp").length > 1){
    pr = pr.split("mrp")[1];
  }
  if(pr.split("/").length > 1){
    pr = pr.split("/")[0];
  }
  if(pr.split("₹").length > 1){
    pr = pr.split("₹")[1].trim();
  }
  if(pr.split("र").length > 1){
    pr = pr.split("र")[1].trim();
  }
  pr = pr.split(",").join("").trim();
  pr = parseFloat(pr);
  return pr;

}


function sendMessage(msgType, jsonObj, command, funcName, passBack){
 if (msgType==1){
   if(tabID!=0){
    //console.log("Tab ID is " + tabID);
    var port = chrome.runtime.connect({name: "othersPayloadData" + tabID});
    var strToSend = jsonObj + "~*" + command;
    port.postMessage({messageData: strToSend});
    port.onMessage.addListener(function(data){
    ////console.log("Complete data is " + JSON.stringify(data));
    // console.log("Plot length" + window.location.href.split("paytm").length);
    funcName(data.dataBack, passBack);
    port.onMessage.removeListener();
  });
  }
  else {
    setTimeout(function(){sendMessage(msgType, jsonObj, command, funcName, passBack);}, 100);
  }
}
else {
 var jsonData = JSON.parse(jsonObj);
 var L = jsonData.length;
 for (var i = 0; i < L; i++) {
  var obj = jsonData[i];
  for (var j in obj) {
    var toSendKey = (j);
    var toSendVal = (jsonData[i][j]);
  }
}
var args = {};
args[toSendKey] = toSendVal;
  // console.log(toSendKey + " " + toSendVal);
  chrome.runtime.sendMessage(args, function(response) {
    respoObt = response.farewell;
    funcName(respoObt, passBack);
  });   
}
}

function sendSearchMessage(searchKey){
  // console.log("Called with " + searchKey);
  if(typeof(getPID) == 'function' && typeof(getProd) == 'function'){
  if(userSetting!="notYet"){
    if(tabID!=0){
      if(userSetting[0].value==1 && getProd()!=""){
        var port = chrome.runtime.connect({name: "searchPayloadData" + tabID});
        var strToSend = searchKey;
        port.postMessage({messageData: strToSend});
        port.onMessage.addListener(function(data){
    ////////console.log(data);
         if(data.dataBack=="" || data.dataBack=="null" || data.dataBack=="[]"){
            var jsonArr = [{'dp': window.location.hostname + '-no-search-results'}];
            jsonArr = JSON.stringify(jsonArr);
            sendMessage(0, jsonArr, 0, doNothing, []);
         }
         filterResults(data.dataBack);
         port.onMessage.removeListener();
        });
      }else{
        filterResults("");
      }
    }
    else {
     setTimeout(function(){sendSearchMessage(searchKey);}, 1000);
   }
 }
 else {
   setTimeout(function(){sendSearchMessage(searchKey);}, 1000);
 }
}
else {
  // console.log("Waiting for getPID to be defined");
  setTimeout(function(){sendSearchMessage(searchKey);}, 1000);
}
}

function setWatchListArray(data, passBack){
  watchListArray = data;  
}

function setUserSettings(data, passBack){
  userSetting = JSON.parse(data);

}

function setEmail(data, passBack){
  email = data;
}

function doNothing(data, passBack){
  // Just do nothing !!
}

function getUpdatedAlertList(){
   // Gets all current alerts list
   var jsonArr = [{'detailArray': 'haiKya'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setWatchListArray, passBack);
 }

 getUpdatedAlertList();

 function getIxigoVar(){
   // Gets all current alerts list
   var jsonArr = [{'ixigoVar': 'deDo'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setIxigoVar, passBack);
 }

 function sendEcomm(){
   // Gets all current alerts list
   var jsonArr = [{'eccomVisit': 'logIT'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, doNothing, passBack);
 }

 function sendToken(cl_id){
   // Gets all current alerts list
   var jsonArr = [{'sentClient_Id': cl_id}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, doNothing, passBack);
 }

 function setIxigoVar(data, passBack){
    localStorage.lastTime = data;
 }

 getIxigoVar();

 function sendIxigoVar(){
   // Gets all current alerts list
   var jsonArr = [{'ixigoVarSet': Math.floor(Date.now() / 1000)}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, doNothing, passBack);
 }

 function getUpdatedUserSettings(){
   // Gets all current alerts list
   var jsonArr = [{'userSetting': 'haiKya'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setUserSettings, passBack);
 }

 getUpdatedUserSettings();

 function getEmail(){
   // Gets all current alerts list
   var jsonArr = [{'email': 'haiKya'}];
   jsonArr = JSON.stringify(jsonArr);
   var passBack = [];
   passBack = JSON.stringify(passBack);
   sendMessage(0, jsonArr, 0, setEmail, passBack);
 }

 getEmail();

 function compare(a,b) {
  if (parseInt(a.price) < parseInt(b.price))
   return -1;
 if (parseInt(a.price) > parseInt(b.price))
  return 1;
return 0;
}

function getXMLHTTPRequest() {

  req = new XMLHttpRequest();
  return req;

}

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

// console.log("Cookie is " + getCookie('bhInfV_cl_id'));

function removeTags(length2){
  $('tspan:eq(' + length2 + ')').css("display", "none");
}

function prepareGraph(pid, passBack){
  // console.log("pidPrepare: "+pid);
  if(userSetting!="notYet"){
    if(userSetting[1].value==1){
      var curPosition = getCurrentPosition(window.location.href);
  // console.log("curPostion: "+curPosition);
  var jsonArr = [{'pos': curPosition, 'pid': pid}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 1, plotGraph, passBack);
}
else {
  plotGraph("", []);
}
}
else {
 setTimeout(function(){prepareGraph(pid, passBack);}, 1000);
}
}

function addGraphBase(passBack) {
    if (userSetting != "notYet") {
        if (userSetting[1].value == 0 && userSetting[6].value == 0 && alertPosition != 1331) {

        }
        else {

            var passedData = JSON.parse(passBack);
            var selectors = JSON.parse(passedData[0].selectors);
            if (passedData[0].height != undefined && typeof(passedData[0].height) != "undefined") {
                var height = passedData[0].height;
            }
            else {
                var height = "750px";
            }
            if (height.split("1050").length > 1) {
                height = "1150px";
            }

            var addedToDOM = 0;
            var imgSet = returnResource("settings.png");
            var stringToAdd = '<div style="clear:both"></div><div id="containerBHMain" class="yeHaiUnique full-width" style=" background: #fff; min-width: 820px; max-width: 960px; height: auto; margin: 0 auto; position: relative;padding:2px;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="http://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="http://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2" class="contBHMain"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="https://goo.gl/xHV5Yo" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="http://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="https://goo.gl/xHV5Yo" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="http://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="https://goo.gl/wpYSpE" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="http://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="http://options.buyhatke.com/" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="' + imgSet + '" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Customize Buyhatke</a></div><div id="container10"> </div></div><div style="clear:both">';
            for (n = 0; n < selectors.length; n++) {
                if ($(selectors[n].selector).length > 0 && addedToDOM == 0) {
                    addedToDOM = 1;
                    if (selectors[n].attr == "none") {
                        if (selectors[n].pos == "after") {
                            $(selectors[n].selector).after(stringToAdd);
                        }
                        else {
                            $(selectors[n].selector).before(stringToAdd);
                        }
                    }
                    else if (selectors[n].attr == "parent") {
                        if (selectors[n].pos == "after") {
                            $(selectors[n].selector).parent().after(stringToAdd);
                        }
                        else {
                            $(selectors[n].selector).parent().before(stringToAdd);
                        }
                    }
                }
            }
        }
    }
    else {
        setTimeout(function(){addGraphBase(passBack)},1000);
    }
}
// function escapeHtml(text) {
//   return text
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#039;");
// }

function plotGraph(data, passBack){
  null_data = "~*~*&~&~100&~&~100&~&~100";
  null_data_len = null_data.length;

  null_data2 = "&~&~100&~&~100&~&~100";
  null_data_len2 = null_data2.length;
  //console.log("actual data is-" + data.trim() + "-ends here");
  //console.log(data.trim() == "");
  
  var passedData = JSON.parse(passBack);
  var prodName = passedData[0].title;
  var siteName = passedData[0].siteName;
  var currentPrice = passedData[0].price;
  if(currentPrice=="" || currentPrice==0 || currentPrice == undefined){
    var flagPrice = 0;
  }
  else {
    var flagPrice = 1;
  }
  var mytext = data.trim();
  var dataString = [];
  var predScores = mytext.split("&~&~");
  
  if(flagPrice==0 && ( data == undefined || data.trim() == "" || data.trim().length == null_data_len ) ){
    $(".yeHaiUnique").css("display", "none");
    $('#chart-logo').html("");
    $('#container2').html("");
    $('#container3').html("");
    $('#container4').html("");
  }
  else if(flagPrice==1&& ( data == undefined || data.trim() == "" || data.trim().length == null_data_len || data.trim().length == null_data_len2 )){
    predScores[0] = "";
    predScores[1] = 100;
    predScores[2] = 100;
    predScores[3] = 100;
  }
  var score1 = predScores[1];
  if(score1 < 50){
    var class1 = "hk-pred-low";
    var extra1 = "It is just " + score1 + "% good to go for it today. Price is expected to fall soon. Set a price drop alert to avail it at lowest price";
  }
  else if(score1 < 65 && score1 >=50){
    var class1 = "hk-pred-medium";
    var extra1 = "Price may fall down in next 2-3 days. However, if you need it real hard, you can go for it. You can set a price drop alert otherwise!";
  }
  else {
    var class1 = "hk-pred-high";
    var extra1 = "Price will change very minutely in next 2-3 days. so, you can go for it today!";
  }
  var score2 = predScores[2];
  if(score2 < 50){
    var class2 = "hk-pred-low";
    var extra2 = "It is just " + score2 + "% good to go for it today. Price is expected to fall within 1 week. Set a price drop alert to avail it at lowest price.";
  }
  else if(score2 < 65 && score2 >=50){
    var class2 = "hk-pred-medium";
    var extra2 = "Price may fall down within 1 week. We recommend you to set an alert and wait for price to fall down .However, if you need it real hard, you can go for it!";
  }
  else {
    var class2 = "hk-pred-high";
    var extra2 = "Price will change very minutely in next 1 week. so, you can go for it today!";
  }
  var score3 = predScores[3];
  if(score3 < 50){
    var class3 = "hk-pred-low";
    var extra3 = "It is just " + score3 + "% good to go for it today. Price is expected to fall in one month for sure. Set a price drop alert to avail it at lowest price";
  }
  else if(score3 < 65 && score3 >=50){
    var class3 = "hk-pred-medium";
    var extra3 = "Price may fall down in next 1 month. We recommend you to set an alert and wait for price to fall down!";
  }
  else {
    var class3 = "hk-pred-high";
    var extra3 = "Price will change very minutely in next 1 month as it is already selling at a good price. So, you can go for it today!";
  }

  if(typeof(score1) != "undefined"){

    //document.getElementById('container3').innerHTML = '<div id="hatke-prediction-scores"><ul class="hatke-pred-grid"><li style="width:150px;color: #24A3B2;margin-left: 40px;">Purchase within</li><li class="' + class1 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when">Next 2-3 days?</div><div class="hatke-prediction-score">' + score1 + '%</div><div class="hatke-prediction-caption">' + text1 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within next 2-3 days, it\'s ' + score1 + '% favourable to purchase it today. ' + extra1 + '</div></div></div></li><li class="' + class2 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when"> a week?</div><div class="hatke-prediction-score">' + score2 + '%</div><div class="hatke-prediction-caption ">' + text2 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within a week, it\'s ' + score2 + '% favourable to purchase it today. ' + extra2 + '</div></div></div></li><li class="' + class3 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when"> a month?</div><div class="hatke-prediction-score">' + score3 + '%</div><div class="hatke-prediction-caption">' + text3 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within a month, it\'s ' + score3 + '% favourable to purchase it today. ' + extra3 + '</div></div></div></li></ul></div>';
    document.getElementById('container3').innerHTML = '<div class="pg-prediction"><h3 class="b-sm-header pg-p-header">Willing to have <i>' + prodName + '</i> within next </h3><div class="pred-wrapper"><ul class="pred-list"><li class="pred-item ' +  class1 + '"><div class="pred-li-wrapper"><div class="pred-li-title">2-3 DAYS</div><div class="pred-li-hover">?</div><div class="pred-li-front pred-li-box-wrapper"><div class="pred-li-header">It is</div><div class="pred-li-percent">' + score1 + '%</div><div class="pred-li-footer">good to go for it today</div></div><div class="pred-li-back pred-li-box-wrapper"><p class="pred-content">' + extra1 + ' </p></div></div></li><li class="pred-item ' + class2 + '"><div class="pred-li-wrapper"><div class="pred-li-title">1 WEEK</div><div class="pred-li-hover">?</div><div class="pred-li-front pred-li-box-wrapper"><div class="pred-li-header">It is</div><div class="pred-li-percent">' + score2 + '%</div><div class="pred-li-footer">good to go for it today</div></div><div class="pred-li-back pred-li-box-wrapper"><p class="pred-content">' + extra2 + ' </p></div></div></li><li class="pred-item ' + class3 + '"><div class="pred-li-wrapper"><div class="pred-li-title">1 MONTH</div><div class="pred-li-hover">?</div><div class="pred-li-front pred-li-box-wrapper"><div class="pred-li-header">It is</div><div class="pred-li-percent">' + score3 + '%</div><div class="pred-li-footer">good to go for it today</div></div><div class="pred-li-back pred-li-box-wrapper"><p class="pred-content"> ' + extra3 + ' </p></div></div></li></ul></div></div>';
  }
  // console.log(predScores[0]);
  if(predScores[0].trim()!=""){
    var compList = predScores[0].split("~*~*");
   }
   else {
     var compList = "";
   }
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth(); 
  var yyyy = today.getFullYear();
  var pointFound = 0;
  var curDateString = yyyy + "-" + mm + "-" + dd;
  for(k=0;k<compList.length-1;k++){
    dateC = compList[k].split("~")[0];
    var price = compList[k].split("~")[1];
    // console.log("Place 3 " + price);
    dateC2 = dateC.split(" ")[0];
    dateS = dateC2.split("-");
    year = dateS[0];
    month = dateS[1] - 1;
    date = dateS[2];
    
    if(flagPrice==0){
      currentPrice = getPrice();
      if(currentPrice=="" || currentPrice==0 || currentPrice == undefined){
        flagPrice = 0;
      }
      else {
        flagPrice = 1;
      }
    }
    // console.log("FlagPrice is " + flagPrice);
    // console.log("Place 3 " + price);
    if(flagPrice==1 && parseInt(dd)==parseInt(date) && parseInt(mm)==parseInt(month)){
      price = parseInt(currentPrice);
      pointFound = 1;
    }
    
    if(month==0){
      //month = 12;
    }
    
    dataString.push([Date.UTC(parseInt(year), parseInt(month) , parseInt(date)), parseInt(price)]);
    // console.log("Place 1 " + price);
  }
  if(pointFound==0 && flagPrice==1){
    dataString.push([Date.UTC(parseInt(yyyy), parseInt(mm) , parseInt(dd)), parseInt(currentPrice)]);
    // console.log("Place 2 " + price);
  }
//dataString = dataString + "]";


if($('.contBHMain').length>0){
  //console.log("Plot Container2 was found");
  if(alertPosition == 1331 || alertPosition == 425){
    $ = jQuery.noConflict();
  }
  $('.contBHMain').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Should I purchase ' + prodName + " now ?"
    },
    subtitle: {
      text: 'Price Variance of ' + prodName + " at " + siteName
    },
    xAxis: {
      type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
              }
            },
            yAxis: {
              title: {
                text: 'Price (INR)'
              },
              min: 0
            },
            tooltip: {
              formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                Highcharts.dateFormat('%e. %b', this.x) +': Rs.'+ this.y;
              }
            },
            
            series: [{
              name: siteName + ' Price',
              data: dataString
            }]
          });
}
var length2 = $('tspan').length;
length2 = length2 - 1;
$(".highcharts-series").hover(function(){
  if(check_hover_graph == 0){
    var jsonArr = [{'dp': window.location.hostname +'-graphHover'}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(0, jsonArr, 0, doNothing, []);
   check_hover_graph = 1;
//tracer graph hover
tracer(0,1);

 }
});
$(".pg-prediction").hover(function(){
  if(check_hover_pred == 0){
   var jsonArr = [{'dp': window.location.hostname +'-predHover'}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(0, jsonArr, 0, doNothing, []);
   check_hover_pred = 1;
 }
});
setTimeout("removeTags(" + length2 + ")", 4000);
}

function prepareDeals(pid, passBack, command){
  if(alertPosition!=2){
    var jsonArr = [{'pid': pid}];
  }
  else {
    var jsonArr = [{'pid': pid, 'selectedFlag': selectedFlag}];
  }
  jsonArr = JSON.stringify(jsonArr);
  if(userSetting!="notYet"){
    if(userSetting[6].value==1){
      sendMessage(1, jsonArr, command, addDeals, passBack);
    }
    else {
      addDeals("", []);
    }
  }
  else {
   setTimeout(function(){prepareDeals(pid, passBack, command);}, 1000);
 }
}

function startCouponProcess(data, passBack){
  var mytext = data;
  ////////console.log("mytext"+mytext);
  if(typeof(mytext) != undefined && mytext!= "undefined"){
   couponInitiate(mytext);
 }
}

function addDeals(data, passBack){
  var deals = JSON.parse(data);
  var passedData = JSON.parse(passBack);
  var catName = passedData[0].catName;
  var command = passedData[0].command;
  var linkRules = JSON.parse(passedData[0].affRules);
  var pre = "";
  var post = "";
  switch(command){
    case 2: 
    pre = "http://dl.flipkart.com/dl/buyhatke/p/buyhatke?pid=";
    post = "";
    break;
    case 5: 
    pre = "http://www.myntra.com/buyhatke-deals/price-drop/product/";
    post = "/buy";
    break;
    case 4:
    pre = "http://www.snapdeal.com/product/buyhatke-deals/";
    post = "?utm_source=aff_prog&utm_campaign=afts&offer_id=17&aff_id=3686&source=dealZone";
    break;
    case 3:
    pre = "http://www.amazon.in/buyhatke-deals/dp/";
    post = "/?tag=buyhatke-21";
    break;
    case 6:
    pre = "http://www.jabong.com/buyhatke-deals-";
    post = ".html";
    break;
    default:
    pre = "";
    post = "";
    break;

  }
  ////////console.log("Pre: "+pre);
  ////////console.log("Post: "+post);
  var dealsText = '<div id="hatke_pricedrops" class="hatke_pricedrops hk-rt-on"><div id="hatke-pd-title"><span>Price Drops in ' +  catName + '</span><a href="#" onclick="return false;" id="hk-pd-close" class="hk-pd-toggle"></a></div> <div id="hatke-pd-wrap"> <div id="hatke-pd-cover"> <nav class="hr-arrows ar-left"> <a onclick="return false;" href="#" class="ar-prev"> <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="16.801px" height="25px" viewBox="394.64 389.25 16.801 25" xml:space="preserve"> <polygon id="arrow-left-25x25" class="hatke-arrow arrow-left" points="399,414.25 394.64,409.91 402.761,401.75 394.64,393.59 399,389.25 411.441,401.75 "/> </svg> </a> </nav> <div id="hatke-pd-main" class=""> <ul id="hatke-pd-carousel" class="clearfix">';
  for(k=0;k<deals.length;k++){
    var saved = parseFloat(parseFloat(deals[k].mrp) - parseFloat(deals[k].price));
    var link1 = "http://compare.buyhatke.com/deals-landing/from-extension/-hatke" + deals[k].PID;
    var link3 = pre + deals[k].PID2 + post;
    if(linkRules[0].prePart != ""){
      var link2 = linkRules[0].prePart + encodeURIComponent(link3 + linkRules[0].postPart);
    }
    else{
      var link2 = linkRules[0].prePart + link3 + linkRules[0].postPart;
    }
    dealsText = dealsText + '<li><div class="hk-drop">' + deals[k].perDrop + '</div> <a href="' + link2 + '" style="text-decoration:none;"> <div class="hk-prod-img"> <img src="' + deals[k].image + '" alt="product"/> </div></a> <div class="hk-prod-details clearfix"> <a style="text-decoration:none;" href="' + link2 + '"> <div class="hk-prod-name"> ' + deals[k].prod + ' </div> <div class="hk-price-details"> <div class="hk-prod-price-orig h_webrupee">' + deals[k].mrp + ' </div> <div class="hk-prod-price h_webrupee"> ' + deals[k].price + ' </div> <div class="hk-price-save "> YOU SAVE <span class="h_webrupee"> ' + saved + '</span> </div> </div> </div></a><a href="' + link2 + '" style="text-decoration:none;margin-left:20px;"> <div class="hk-prod-check" style="width: 100px;text-align: center;margin-left: 20px;"> Buy </div> </a> </li>';
  }

  dealsText = dealsText + '</ul> </div> <nav class="hr-arrows ar-right" style="margin-top:-310px;"> <a href="#" onclick="return false;" class="ar-next"> <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="16.801px" height="25px" viewBox="394.64 389.25 16.801 25" xml:space="preserve"> <polygon id="arrow-right-25x25" class="hatke-arrow arrow-right" points="399,414.25 394.64,409.91 402.761,401.75 394.64,393.59 399,389.25 411.441,401.75 "/></svg></a></nav></div></div></div>'; 
  document.getElementById('container10').innerHTML = dealsText;
  $('#hatke-pd-carousel').simplecarousel({
    next: $('.ar-next'),
    prev: $('.ar-prev'),
    slidespeed: 700,
    auto: 0,
    width: 180,
    height: 406,
    visible:5
  });
  if(getCookie("dealsHide")==1){
    $('#hatke_pricedrops').toggleClass("hk-rt-on");
  }
  else {
    $(".hatke-pd-cover").hover(function(){
      if(check_hover_deals == 0){
       var jsonArr = [{'dp': window.location.hostname +'-dealsExtHover'}];
        jsonArr = JSON.stringify(jsonArr);
        sendMessage(0, jsonArr, 0, doNothing, []);
       check_hover_deals = 1;
     }
    });
  }
  $('.hk-pd-toggle').click(function(){
    $(this).parent().parent().toggleClass("hk-rt-on");
    if(!$('#hatke_pricedrops').hasClass("hk-rt-on")){
      setCookie("dealsHide", 1, 200);
      var jsonArr = [{'dp': window.location.hostname +'-dealsDeactivated'}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(0, jsonArr, 0, doNothing, []);
    }
    else {
      setCookie("dealsHide", 0, 200);
      var jsonArr = [{'dp': window.location.hostname +'-dealsActivated'}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(0, jsonArr, 0, doNothing, []);
    }
  });
}

function addToWatchListGen(prod, price, image, url, pos, cat){
 var parameters =  encodeURIComponent(prod) + "~*~*" + price + "~*~*" + encodeURIComponent(image) + "~*~*" + encodeURIComponent(url) + "~*~*" + pos ;
 // var parameters =  encodeURIComponent(prod) + "~*~*" + price + "~*~*" + encodeURIComponent(image) + "~*~*" + encodeURIComponent(url) + "~*~*" + pos + "~*~*" + encodeURIComponent(cat) ;
 var jsonArr = [{data : parameters}];
 jsonArr = JSON.stringify(jsonArr);
 sendMessage(0, jsonArr, 0, doNothing, []);
 setTimeout("getUpdatedAlertList()", 4000);
 var jsonArr = [{'dp': window.location.hostname +'-alertSet'}];
 jsonArr = JSON.stringify(jsonArr);
 sendMessage(0, jsonArr, 0, doNothing, []);
//tracer

tracer(1,0);

}

function removeAlert(){

  var currentURL = window.location.href;
  if(parseInt(alertPosition) == 99){ //infi spcl case
    currentURL = getInfiURL();
  }
  for(m=0;m<watchListArray.length;m++){
    var url2 = watchListArray[m].link;
    if(returnPID(url2)==returnPID(currentURL)&&returnPID(url2)!=0){
      sendId = watchListArray[m].link_id;
      var jsonArr = [{'removeURL': sendId}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(0, jsonArr, 0, doNothing, []);
      setTimeout("getUpdatedAlertList()", 4000);
      var jsonArr = [{'dp': window.location.hostname + '-alert-removed'}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(0, jsonArr, 0, doNothing, []);
    }
  }
}

var callCount = 5;
function sendInt(){
  if(typeof(getProd) == 'function'){
      if(getCookie('bhInfV_cl_id')!=""){
          sendToken(getCookie('bhInfV_cl_id'));
      }
      var prod = getProd();
      var price = getPrice();
      var cat = getBreadCrumb();
      cat = encodeURIComponent(cat);
      var cl_id = getCookie('bhInfV_cl_id');
      if(window.location.href.split('amazon.in').length > 1){
         alertPosition = 63;
      }
      var webPos = alertPosition;
      var url = window.location.href;
      var image = getImage();
      if(cl_id!="" && (prod!='' || cat!='')){
      fetch('https://tracking.buyhatke.com/universalLog/?client_id=' + cl_id + '&type=log&action=pageBrowse&breadcrumb=' + cat + '&prod=' + encodeURIComponent(prod) + '&price=' + price + "&webPos=" + webPos + "&url=" + encodeURIComponent(url) + "&image=" + image).then(function(response) { 
        return response.json();
      }).then(function(j) {
         //console.log(j); 
      });
    }
  }
  else {
     if(callCount >0){
        callCount--;
        setTimeout(function(){sendInt();}, 2000);
     }
  }
}

sendInt();

function addToWatchList() {
 if(typeof(getCategory) == 'function'){
  var category = getCategory();
  if(category == undefined || category == 'undefined'){
    category = "";
  }
 }
 else{
  var category = "";
 }
  var myPrice = getPrice();
  //////console.log("myPrice: "+myPrice);
  var prod = getProd();
  var url = window.location.href;
  var image = "";
  image = getImage();
  if(alertPosition == 99){ //infibeam spcl case
    variantAlert();
    myPrice = price_infi;
    prod = prod_infi;
    image = img_infi;
    url = url_infi;
  } 


  addToWatchListGen(prod, myPrice, image, url, alertPosition);
  // addToWatchListGen(prod, myPrice, image, url, alertPosition, category);

  document.getElementById('bhWidget').innerHTML = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="http://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
  var button = document.getElementById("removeMe2");
  button.addEventListener("click", function(){
    removeAlert();
    document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);

  showSecondaryMessage();
}

function addEmailID(email){
  var jsonArr = [{addEmail: email}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}

function blinker(){
  if (cancel==false) {
    elem1.style.background="linear-gradient(to bottom, #eaefb5 0%,#e1e9a0 100%)";
    elem1.style.borderColor="#6b6";
    setTimeout("elem1.style.background=''", 1200);
    setTimeout("elem1.style.borderColor=''", 1200);
    setTimeout("blinker()",2400);}
    if (cancel==true){elem1.style.backgroundColor="#fbfbfb";elem1.style.borderColor="#ddd";}
  }


  function checkAlertStatus(selector){
    if($('#bhWidget').length > 0){
      $('#bhWidget').remove();
    }
    flagToDisp = 0; strToDisp = ""; clsToUse = ""; diff = 0;
    addedToDOM2 = 0;
    if(userSetting[2].value==1){
     arrayRes = watchListArray;
     var currentURL = window.location.href;
     var filterURL = currentURL.split("&")[0];
     filterURL = filterURL.split("affid")[0];
     myPrice = getPrice();

     if(parseInt(alertPosition) == 99){ //infi spcl case
         currentURL = getInfiURL();
       }


     for(i=0;i<watchListArray.length;i++){
      var currentURL2 = watchListArray[i].link;
      // if(watchListArray[i].position==129){
           // console.log("First " + returnPID(currentURL) + " Second " + returnPID(currentURL2) + "DOM " + addedToDOM2 + " ALert Positio " + alertPosition + " ARray pos " + watchListArray[i].position);
      // }
      if(watchListArray[i].link!="" && addedToDOM2==0 && returnPID(currentURL2) != 0 && (returnPID(currentURL)) == (returnPID(watchListArray[i].link))){
      // console.log("Success");
      addedToDOM2 = 1;
      if(myPrice!=0){
        watchListArray[i].cur_price = myPrice;
      }
      if(watchListArray[i].price_added >= watchListArray[i].cur_price){
       clsToUse = "dec-hatke";
       diff = watchListArray[i].price_added - watchListArray[i].cur_price;
     }
     else {
       clsToUse = "inc-hatke";
       diff = watchListArray[i].cur_price - watchListArray[i].price_added;
     }

     strToDisp = '<div id="bhWidget"><div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="http://compare.buyhatke.com/images/rupeeK.png">' + watchListArray[i].price_added + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div></div>';

     flagToDisp = 1;
     addedToDOM = 0; 

     var selectors = (selector);
      if(typeof(selectors) == "string"){
       selectors = JSON.parse(selectors);
     }

     for(n=0;n<selectors.length;n++){
      if($(selectors[n].selector).length>0 && addedToDOM==0){
        addedToDOM = 1;
        if(selectors[n].attr=="none"){
          if(selectors[n].pos=="after"){
           $(selectors[n].selector).after(strToDisp);
         }
         else {
           $(selectors[n].selector).before(strToDisp);
         }
       }
       else if(selectors[n].attr=="parent"){
        if(selectors[n].pos=="after"){
         $(selectors[n].selector).parent().after(strToDisp);
       }
       else {
         $(selectors[n].selector).parent().before(strToDisp);
       }
     }
   }
 }
 var button = document.getElementById("removeMe2");
 button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);
}
}
if(flagToDisp==0){
  addedToDOM = 0;
  var imgURL2 = chrome.extension.getURL("watch-price1.png");
  var strToDisp = '<div id="bhWidget"><a id="addWatchList" style="margin-top: 4px;" alt="Add to Watch List" title="Add to BuyHatke Watch List and get notifications on price drop" href="javascript:void();" class="fk-inline-block buy-btn fksk-buy-btn"><img style="margin-left:-12px;" src=' + imgURL2 +'></a></div>';
  var selectors = (selector);
   if(typeof(selectors) == "string"){
     selectors = JSON.parse(selectors);
   }
   
  for(n=0;n<selectors.length;n++){
    if($(selectors[n].selector).length>0 && addedToDOM==0){
      addedToDOM = 1;
      if(selectors[n].attr=="none"){
        if(selectors[n].pos=="after"){
         $(selectors[n].selector).after(strToDisp);
       }
       else {
         $(selectors[n].selector).before(strToDisp);
       }
     }
     else if(selectors[n].attr=="parent"){
      if(selectors[n].pos=="after"){
       $(selectors[n].selector).parent().after(strToDisp);
     }
     else {
       $(selectors[n].selector).parent().before(strToDisp);
     }
   }
 }
}
var button = document.getElementById("addWatchList");
if(button!=null){
  button.addEventListener("click", function(){
    addToWatchList();
  }, false);
}
}
}
}

function showSecondaryMessage(){
  if(email=="No"){
    var msg = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
    $('#addWatchList').after(msg);
    var button = document.getElementById("BhButton");
    button.addEventListener("click", function(){
      addEmailID(document.getElementById('BhEmail').value);
      document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'
    }, false);
  }
  else {
    var msg = '<div id="addEmailBH"><div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! A mail will be sent to ' + email + ' as soon as price drops. <a href="javascript:void();" id="changeEmail" style="color:blue;">Change Email-ID</a></div></div>';
    $('#addWatchList').after(msg);
    var button = document.getElementById("changeEmail");
    button.addEventListener("click", function(){
      document.getElementById('addEmailBH').innerHTML = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
      var button = document.getElementById("BhButton");
      button.addEventListener("click", function(){
        addEmailID(document.getElementById('BhEmail').value);
        document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'

      }, false);
    }, false);
  }
}

siteList = [{"position":"1","name":"Ebay","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/ebay2.png"},{"position":"1000","name":"Fabfurnish","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/fabfurnish.png"},{"position":"411","name":"Grabmore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/grabmore.png"},{"position":"1002","name":"Yapaa","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/yapaa.jpg"},{"position":"1003","name":"Fatakk","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/fatakk.jpg"},{"position":"1005","name":"Zoomin","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zoomin.jpg"},{"position":"1008","name":"Happily Unmarried","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/happilyunm.jpg"},{"position":"35","name":"Yebhi","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/yebhi1.png"},{"position":"63","name":"Amazon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/amazon.png"},{"position":"30","name":"IndiaPlaza","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/indiaplaza1.png"},{"position":"31","name":"Bookadda","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bookadda1.png"},{"position":"129","name":"SnapDeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/snapdeal.png"},{"position":"50","name":"Jabong","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/jabong1.png"},{"position":"45","name":"ShopperStop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shpstop1.png"},{"position":"929","name":"BabyOye","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/by.png"},{"position":"911","name":"StrawBerryNet","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/strawberrynet.png"},{"position":"939","name":"Hushbabies","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/hb.png"},{"position":"921","name":"Healthkart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/hk.png"},{"position":"62","name":"Indiarush","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/indiarush.png"},{"position":"2","name":"Flipkart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/flipkart1.png"},{"position":"99","name":"Infibeam","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/infibeam2.png"},{"position":"4","name":"HomeShop18","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/homeshop181.png"},{"position":"7","name":"LandMark","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/landmark1.png"},{"position":"13","name":"Tradus","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/tradus2.png"},{"position":"22","name":"Koovs","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/koovs.png"},{"position":"333","name":"PepperFry","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/pepperfry1.png"},{"position":"11","name":"Ferns n Petals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/fnp1.png"},{"position":"5","name":"Futurebazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/futurebazaar1.png"},{"position":"98","name":"Fashionara","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/fashionara.png"},{"position":"111","name":"Myntra","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/myntra1.png"},{"position":"421","name":"ShopClues","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shopclues.png"},{"position":"441","name":"Naaptol","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/naaptol.png"},{"position":"471","name":"Crossword","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/crossword.png"},{"position":"461","name":"Magazine Mall","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/magmall.png"},{"position":"91","name":"Floralis","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/floralis.png"},{"position":"401","name":"Indiatimes Shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/indtimesshopping.png"},{"position":"393","name":"Adexmart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/adexmart.png"},{"position":"373","name":"Phoolwala","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/phoolwala.png"},{"position":"37","name":"JewelsKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/jewelkart.jpg"},{"position":"57","name":"LensKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/lenskart.jpg"},{"position":"47","name":"BagsKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bagskart.jpg"},{"position":"67","name":"WatchKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/watch.jpeg"},{"position":"69","name":"Next.co.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/next.png"},{"position":"71","name":"Croma","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/croma.png"},{"position":"412","name":"Craftsvilla","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/craftsvilla.png"},{"position":"469","name":"Cilory","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/cilory.png"},{"position":"429","name":"Zivame","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zivame.png"},{"position":"999","name":"ManiacStore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/maniacstore.png"},{"position":"433","name":"Pretty Secrets","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/prettysecrets.png"},{"position":"422","name":"ShopNineteen","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shop19.png"},{"position":"428","name":"DoneByNone","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/donebynone.png"},{"position":"291","name":"Rediff Shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/rediff.png"},{"position":"435","name":"Mirraw","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/mirraw.png"},{"position":"432","name":"StrapsAndStrings","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/strapsnstrings.png"},{"position":"431","name":"Trendin","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/trendin.png"},{"position":"423","name":"CBazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/cbazaar.png"},{"position":"430","name":"N-gal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/ngal.png"},{"position":"424","name":"Limeroad","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/limeroad.png"},{"position":"425","name":"Zovi","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zovi.png"},{"position":"426","name":"BlueStone","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bluestone.png"},{"position":"427","name":"Voylla","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/voylla.png"},{"position":"439","name":"India Emporium","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/indiaemporium.png"},{"position":"451","name":"Sapna Online","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/sapnaonline.png"},{"position":"1010","name":"ItalianoTUCCI","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1011","name":"Bumpersales.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1012","name":"OneRx","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1013","name":"MyMobileMart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1014","name":"Takshu","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1015","name":"Dealtz","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/dealtz.png"},{"position":"1016","name":"HardwareBajaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1019","name":"143shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/143-shop.jpg"},{"position":"1021","name":"India'O'mart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1020","name":"Durga Books Agency","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1022","name":"ShopByChoice","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shopbychoice.jpg"},{"position":"1024","name":"Deal Kya Hai","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/dealkyahai.jpg"},{"position":"1025","name":"Paragon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1026","name":"Kaamastra","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1027","name":"Gobol","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/gobol.png"},{"position":"1029","name":"Peopleskart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1030","name":"sai ram online store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1031","name":"shahid.sales@buyhatke.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1032","name":"Lowprice Online","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1033","name":"BuyDirekt","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1034","name":"Biggcart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/biggcart.png"},{"position":"1036","name":"gopals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1037","name":"books.rediff.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1038","name":"Bookjugad","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bookjugaad.png"},{"position":"1039","name":"SB Equipments","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1040","name":"Specs Retail","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1041","name":"Shopymart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1042","name":"Full2shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1043","name":"www.sugarpie.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1045","name":"SSSCART","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/ssscart.jpg"},{"position":"1046","name":"iBhejo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/ibhejo.png"},{"position":"1047","name":"Retailbunny.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1048","name":"Saifeesons","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1049","name":"Satnam Rice Bhandar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1050","name":"OnlySSD","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1051","name":"ACTIVRPIXEL","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1052","name":"GreenDust","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/greendust.png"},{"position":"1053","name":"Slan Foods","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1054","name":"Printsasia.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/printasia.png"},{"position":"1055","name":"sdk technologies","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1056","name":"shopeyard","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shopeyard.png"},{"position":"1057","name":"Solomon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1058","name":"abcdkey.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1059","name":"Bewakoof","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bewakoof.png"},{"position":"1061","name":"PURSHO","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1062","name":"Urban Dazzle","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/urbandazzle.png"},{"position":"1063","name":"BoonToon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1064","name":"CareerOrbits","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1065","name":"balajishop12","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1066","name":"Bean Bag Online","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1067","name":"RateToRate","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1068","name":"Healthgenie","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/healthgenie.png"},{"position":"1069","name":"Moods Condoms","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1070","name":"SHILPKART","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1071","name":"MONJARDEALS","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1072","name":"BigThela.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1073","name":"Soyng","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/soyng.png"},{"position":"1074","name":"CrazeeMania","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1075","name":"tintinshoppe","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1076","name":"Khantil","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1077","name":"Angel Fragrance","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1078","name":"Suranas Jewelove","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1079","name":"Mozart Singh","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1080","name":"SMART BUY","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1081","name":"Infikart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/infikart.png"},{"position":"1082","name":"Buxsa.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1083","name":"Buytestseries","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/buytest.png"},{"position":"1084","name":"om tex","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1085","name":"grabNwrap","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1086","name":"Popnetic","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/popnetics.png"},{"position":"1087","name":"PortaMart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/portamart.png"},{"position":"1088","name":"Nplabel","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1089","name":"Crasters Inn","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1090","name":"Traditional 2 Trendy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/trad2trend.png"},{"position":"1091","name":"shopperszilla","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1092","name":"ElaboreStore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/elab-store.png"},{"position":"1093","name":"HOTZ FASHION","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1094","name":"zoffio","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zoffio.png"},{"position":"1095","name":"purple tree","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1097","name":"masteringphotoshop.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1098","name":"Cart2India","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/cart2india.png"},{"position":"1099","name":"Wearitin","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/wearitin.png"},{"position":"1101","name":"sheela enterprises","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1102","name":"Eden Overseas","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1103","name":"premiumcollection","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1104","name":"Rv Marketing","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1105","name":"Ibscart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1106","name":"Group-Pharma","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1107","name":"coollingerierajbeer","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1108","name":"v scarves","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1109","name":"jabraat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1110","name":"luxerium","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1111","name":"KARTNBUY","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1112","name":"Stanley Kane","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1113","name":"Teach","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1114","name":"DOOR2DOOR","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1115","name":"Malabar Shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1116","name":"Compuindia.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/compuindia.png"},{"position":"1117","name":"ProteinsIndia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1118","name":"Talash.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/talash.png"},{"position":"1119","name":"BlissBasket","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/blissb.png"},{"position":"1120","name":"SHOPPINGBAAZ","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1121","name":"store503","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/store503.png"},{"position":"1122","name":"Nuttymart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1123","name":"getezee","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/getezee.png"},{"position":"900","name":"Purplle","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"901","name":"FreeCultr","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/freecultr.png"},{"position":"1124","name":"prime time","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1125","name":"Giftease Kart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1126","name":"Provogue","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/provogue.png"},{"position":"1127","name":"Binocolor","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/binocolor.png"},{"position":"1128","name":"yufta.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1129","name":"STYLINER","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/styliner.png"},{"position":"1130","name":"Yepme","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/yepme.png"},{"position":"1131","name":"Socrase","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1132","name":"Sparklejewells","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/sparklefashion.png"},{"position":"1133","name":"Bling4u","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bling4u.png"},{"position":"1134","name":"Shoppinping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shoppingping.png"},{"position":"1135","name":"Trendylicious","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/trendylicious.png"},{"position":"1136","name":"Kakori","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/kakori.png"},{"position":"1137","name":"Keepitclean","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/keepitclean.png"},{"position":"1138","name":"Gadgetshut","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/gadgetshut.png"},{"position":"1139","name":"Lessthantwo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/lessthan2.png"},{"position":"1140","name":"Gamefrog","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/gamefrog.png"},{"position":"1141","name":"Aidalane","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/aidalane.png"},{"position":"1142","name":"YeDeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1143","name":"Floweraura","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/floweraura.png"},{"position":"1144","name":"anzuefashions","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1145","name":"Jabraat.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/jabraat.png"},{"position":"1146","name":"homeshoppi","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/homeshoppi.png"},{"position":"1147","name":"shopcrazydeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1148","name":"Balloonistics","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1149","name":"Smesauda","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1150","name":"DealsOnDth","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1151","name":"My Craft Hub","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1152","name":"Vu LED TV","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1153","name":"Swarajshop.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1154","name":"Clothion","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1155","name":"Shopoj.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1156","name":"GNR INC","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1157","name":"eNetram","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1158","name":"bluegape","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1159","name":"Triveni Fashions","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/triveni.png"},{"position":"1161","name":"Royal Fashion Shop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1160","name":"iKings","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/i-kings.png"},{"position":"1162","name":"Eazyshopping4u","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1163","name":"Vi\u1ec7c bu\u00f4n b\u00e1n - the vietnamese online store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1164","name":"Netshop Retail","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1165","name":"chilisdeals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1168","name":"Mrig Studios","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1169","name":"Sun Fashions","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/sunfashions.png"},{"position":"1170","name":"thefishmaret.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1171","name":"BestPrice","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1174","name":"SyberPlace","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/syberplace.png"},{"position":"1175","name":"Indianroots","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/indianroots.png"},{"position":"1176","name":"Utsav Fashion","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/utsavfashion.png"},{"position":"1177","name":"Bag it today","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bagittoday.png"},{"position":"1178","name":"Stylehoops","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1179","name":"Faballey","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/faballey.png"},{"position":"1180","name":"Starcj","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/starcj.png"},{"position":"1181","name":"Bharatplaza","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bharatplaza.png"},{"position":"1182","name":"Djewels.org","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1183","name":"Krishkare","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1184","name":"BlessingStore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1185","name":"Mindsclick","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1186","name":"Walcart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1187","name":"Smart Buy Deal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1189","name":"ShoppersTech","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1190","name":"Inkflame","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/inkflame.png"},{"position":"1191","name":"SmartShophar.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1192","name":"Shopnova.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/shopnova.png"},{"position":"1193","name":"free samples in india","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/freesamples.png"},{"position":"902","name":"Chumbak","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1194","name":"UNLTDOFFERS","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1195","name":"KnottyKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1196","name":"Gofitindia.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/gofitindia.png"},{"position":"1197","name":"GadgetsDukaan","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1198","name":"WhiteMango.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/whitemango.png"},{"position":"1199","name":"gadgets mafia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1200","name":"Zohraa","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zohraa.png"},{"position":"1201","name":"faverdeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1202","name":"AbhiLelo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1203","name":"Shopgenx","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1204","name":"Sharda Sarees","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1205","name":"seernirai handicraft","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1206","name":"j-admin","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1207","name":"aapnoshop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1208","name":"EndeavorCAreers","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/endeavor.png"},{"position":"1209","name":"Shoppers99","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1210","name":"Frinkytown","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/frinkytown.png"},{"position":"1211","name":"Epicstar Enterprise","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1212","name":"PosterGuy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1213","name":"Led Lighting","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1214","name":"Advancenutratech","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1215","name":"HOPE Entrepreneurs PVT LTD","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1216","name":"Shop Luxury","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1217","name":"vaishnovi jewelery","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1218","name":"OrderVenue.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/ordervenue.png"},{"position":"1219","name":"blogstylo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/blogstylo.png"},{"position":"1220","name":"Dail Shoppers","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1221","name":"Alloykart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1222","name":"Warp And Weft","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1223","name":"Elitify","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/elitify.png"},{"position":"1224","name":"MAZORIA CAFE","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1225","name":"FlipDel","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1226","name":"Zooomberg","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/zooomberg.png"},{"position":"1227","name":"Saurabhbsns","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1228","name":"Sapnaonline.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1229","name":"CustoTee","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1230","name":"Ambara Empire","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1231","name":"Smile N Buy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1232","name":"jmshopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1233","name":"HealthTokri","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/healthtokri.png"},{"position":"1234","name":"Kudos Fashions","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1235","name":"Feyeshoppy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1236","name":"FemNmas","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/femnmas.png"},{"position":"1237","name":"eSmartDeals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1238","name":"Aurangabadkar Saraf","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1239","name":"Socktail","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1240","name":"Dealshott","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1241","name":"AQUA 7X","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1242","name":"Goldencollections","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1243","name":"Shivam Plastics","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1244","name":"FurnishFantasy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/furnishfantasy.png"},{"position":"1245","name":"kharidlay.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1246","name":"PrimeABGB","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1247","name":"Tapyti","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/tapyti.png"},{"position":"1248","name":"Cheer Shopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1249","name":"test","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1250","name":"YoWebby.Com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1251","name":"Veena Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1252","name":"Oh Nine One Fashion & Retail Pvt Ltd","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1253","name":"the furniture store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1254","name":"Overcart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/overcart.png"},{"position":"1255","name":"Shop4Deal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1256","name":"Shopping Experia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1257","name":"Habbana.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1258","name":"Zerel","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1259","name":"iStylefreak","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1260","name":"lawangi.com Buy Diwali FireCrackers Online!","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1261","name":"elec2buy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1262","name":"Myshopbazzar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/myshopbazzar.png"},{"position":"1263","name":"kartbin.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1264","name":"Kota","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1265","name":"uditbhatia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1266","name":"EBC","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1267","name":"Buyers Crush","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1268","name":"CONNECTWIDE","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1269","name":"Knesta Herbals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1270","name":"comwayonline","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1271","name":"Nautanki Fashion Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1272","name":"OnEMi","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1273","name":"Buysimple","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1274","name":"BIG Chemist","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1275","name":"Feerol","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/feerol.png"},{"position":"1277","name":"RB InfoTech","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1278","name":"Acorda Infotech Pvt. Ltd.","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1279","name":"Kumar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1280","name":"Addocart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1282","name":"Naughty Strands","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1283","name":"Indiwear.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1284","name":"Oh Nine One","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1285","name":"Collectabillia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/collectabillia.png"},{"position":"1286","name":"Sports 365","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/sports365.png"},{"position":"1287","name":"Banglewale","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/banglewale.png"},{"position":"1288","name":"Makemytrip","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/makemytrip.png"},{"position":"1289","name":"Cleartrip","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/cleartrip.png"},{"position":"1290","name":"Redbus","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/redbus.png"},{"position":"1291","name":"Travelguru","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/travelguru.png"},{"position":"1292","name":"Ticketgoose","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/tktgoose.png"},{"position":"1293","name":"Yatra","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/yatra.png"},{"position":"1294","name":"Goibibo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/goibibo.png"},{"position":"1295","name":"Expedia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/expedia.png"},{"position":"1296","name":"Musafir","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/musafir.png"},{"position":"1297","name":"Metro Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1298","name":"Books Wagon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/bookswagon.png"},{"position":"1299","name":"BeltKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1300","name":"GetTrek Smart Attendance System","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1301","name":"UniqInfoTechIndia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1302","name":"atisundar.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1303","name":"naturebreed","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1304","name":"SALEBRATIONS","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1305","name":"Zevrr","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1306","name":"Asianbigbazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1307","name":"SchoolPep","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1308","name":"Fyne","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1310","name":"Segment Retails","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1311","name":"arya investment","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1312","name":"HAPPY KIDZ","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1313","name":"Surplus Bazar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1314","name":"xtremeonlinestore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1316","name":"martnext","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1318","name":"Discownt","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1319","name":"Merakapda","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1320","name":"DIVESH","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1321","name":"Ebay.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1323","name":"THE MOBILESTORE","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/themobstore.png"},{"position":"1324","name":"Slimthread","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1325","name":"Diamond Nexus India","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1326","name":"Meridian","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1328","name":"Vidya Books","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1329","name":"Flazee","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1330","name":"Pearl Paradise","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1331","name":"Paytm","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/paytm.png"},{"position":"1332","name":"PeopleEasy.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1333","name":"buybuk","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/buybuk.png"},{"position":"1334","name":"koshimbir","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1335","name":"EMiBazaar.com powered by OnEMi.in","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1336","name":"Mycityflowers","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1337","name":"GameXS","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1338","name":"SparesHub","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1339","name":"Canopies The online Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1340","name":"Sterling Home Innovators Pvt. Ltd.","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1341","name":"Help On Wheels","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1342","name":"Fleaffair","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1343","name":"onlineshop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1344","name":"SG Musical","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1345","name":"handloomdaddy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1346","name":"N\/A","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1347","name":"Stylish Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1348","name":"Freecharge","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/freecharge.png"},{"position":"1349","name":"FoodPanda","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/foodpanda.png"},{"position":"1350","name":"TastyKhana","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/tastykhana.png"},{"position":"1351","name":"JustEat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/justeat.png"},{"position":"1352","name":"Dominos","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/dominos.png"},{"position":"1353","name":"Pizza Hut","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/pizzahut.png"},{"position":"1354","name":"myDigimart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1355","name":"Fashionstyler","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1356","name":"Bholanath Garments","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1357","name":"MELBON","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1358","name":"BazaarCart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1359","name":"1stbuy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1360","name":"OceanHomeStore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1362","name":"Shippme","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1363","name":"JASMINBHAI","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1364","name":"fastindiashop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1365","name":"Shimply","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1366","name":"bigoffershop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1367","name":"Her Choice","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1369","name":"Lab No. 4 - The Quotography Department","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1370","name":"nightingale","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1371","name":"C_Cradle---YouR OnlinE ShoppinG PartneR","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1372","name":"The Pen World","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1373","name":"Befunkies","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1375","name":"kidswids","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1376","name":"Next Dress","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1377","name":"DoorDeals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1378","name":"Zoprix","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1379","name":"Omegakart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1380","name":"AQUIL ENTERPRISES","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1381","name":"TIA Creation","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1382","name":"www.wearwristband.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1383","name":"LoginKART","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1384","name":"AcMahabazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1385","name":"Flipcart,Amazone","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1386","name":"MOBILEWALA","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1387","name":"Baniyababu Retails Pvt. Ltd","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1388","name":"mallforindia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1389","name":"A1 Designer Wear","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1390","name":"Festivalas India","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1391","name":"moOOou","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1392","name":"Abel Estore","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1393","name":"ClassicAccess.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1394","name":"Kaizer Jewelry","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1395","name":"Hashmi Mart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1396","name":"tinydeal.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1397","name":"Shoping Inc","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1398","name":"D Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1399","name":"lapguard","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1400","name":"Jazzmyride","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1401","name":"SimpleSarees","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1402","name":"Unmatched Solutions Pvt Ltd","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1403","name":"npitjunction.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1404","name":"Tv Teleshopping","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1405","name":"robocraze","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1406","name":"nowbestdeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1407","name":"XtraKart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1408","name":"Bags Craze","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1409","name":"Rivera Sarees","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1166","name":"Heustyle","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1410","name":"Fashionove.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1411","name":"Crazekart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1412","name":"OyeKitchen.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1413","name":"Subhdeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1414","name":"Dharavi Market","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1415","name":"YourDeal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1416","name":"Jantabazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1418","name":"SEE-social economic environmental","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1419","name":"Kanico Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1420","name":"V & V Shop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1421","name":"MishreeSaree","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1422","name":"IndiaInMyBag","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1423","name":"Avikart.com","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1424","name":"bigcmobiles pvt ltd","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1425","name":"thetubelights","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1426","name":"Ankit","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1427","name":"Clickedia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1428","name":"Orveno Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1429","name":"https:\/\/paytm.com\/","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1431","name":"Make My Kart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1432","name":"My Novelty Shop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1433","name":"AROMA STORE","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1434","name":"F3 FASION","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1435","name":"Techzone","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1436","name":"ShopForStar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1437","name":"Naughty At9","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1439","name":"Colo Venture","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1440","name":"OrganoNutri","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1441","name":"Sunshine Kitchen Appliances","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1442","name":"twistmart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1443","name":"For Dolly","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1444","name":"Style Lady","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1445","name":"Naisha Boutique","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1446","name":"Thought Road","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1447","name":"Daily Bachat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1448","name":"Tohfah 4 You","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1449","name":"Off and On Shop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1450","name":"The Tube Lights","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1451","name":"Everything Sasta","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1452","name":"Bling It","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1453","name":"Unlike Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1454","name":"French Aura","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1455","name":"Quirky Huts","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1456","name":"Ballonistics","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1457","name":"Craftisthan","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1458","name":"Its A Ruse","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1459","name":"F9 Shoppee","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1461","name":"Orvenotek","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1462","name":"Cart 91","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1463","name":"Wear and Steal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1464","name":"Princess Walk","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1465","name":"Huligans","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1466","name":"Dhrorar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1467","name":"Fashion and Tashan","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1468","name":"Cryptic Voodoo","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1469","name":"Foresight Opticals Ltd.","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1470","name":"TRV Sports","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1471","name":"Villa Lifestyle","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1472","name":"Foodwala","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1473","name":"Kovi Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1474","name":"Komas Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1475","name":"Mezza Luna","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1476","name":"Festivalals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1477","name":"Fabmee","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1478","name":"Poise Collections","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1479","name":"Fasion360","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1480","name":"VSK Graphics","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1481","name":"House of Saffron","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1482","name":"Mulberry Life","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1483","name":"Aanchal Fashions","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1485","name":"Shimoro","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1486","name":"Fashion Square","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1487","name":"Zaras Boutique","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1488","name":"Dancing Girl","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1489","name":"Zylomart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1490","name":"Enquotism","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1492","name":"Sneak Peek Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1493","name":"Fad Attire","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1494","name":"Kivon","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1495","name":"Finery Shop","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1496","name":"Hand Made JUnction","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1497","name":"Vesar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1498","name":"Sweet SHoppy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1499","name":"Fiesta Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1500","name":"Ask For Fashion","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1501","name":"SN Rama","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1502","name":"Artistory","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1503","name":"Gulab London Jewels","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1504","name":"Jean Factory","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1505","name":"Chennai Shop Kart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1506","name":"Shop 4 Special","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1507","name":"Swastik Life","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1508","name":"Gazifab","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1509","name":"Weavers of Magic Threads","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1510","name":"Shoppersfit","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1511","name":"Mycroyance","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1512","name":"DIvine Haat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1513","name":"Brands Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1514","name":"Arush Jewels","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1515","name":"Bolsao Online","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1516","name":"Order My Treat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1517","name":"Chiffony","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1518","name":"Dress 365","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1519","name":"Hal-E-Deals","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1520","name":"Solar Store","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1521","name":"Subh Deal","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1522","name":"Electronyx Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1523","name":"Shop N Rock","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1524","name":"Amafac","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1525","name":"Locked Off","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1526","name":"Grab Me A Bargain","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1527","name":"Spice Lot Retail","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1528","name":"Abuse","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1529","name":"Luxuriat","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1530","name":"Tappories","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1531","name":"Ayesha Creations","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1532","name":"Vearings","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1533","name":"Venetian Designs","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1534","name":"Nutraj","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1535","name":"Bandra Bazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1536","name":"Kahipan","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1537","name":"Peach Affair","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1538","name":"Pep Alley","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1539","name":"The Fashion Hub","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1540","name":"Shoffex","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1541","name":"Perfum Booth","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1542","name":"Schrot Flinte","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1543","name":"Pune Stationery","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1544","name":"The Apple Singhs","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1545","name":"Nino Bambino","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1546","name":"Kashka","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1547","name":"Batie Energy","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1548","name":"Organic Kuteera","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1549","name":"Trendy SOuk","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1550","name":"Nainica Divas","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1551","name":"Window Kart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"},{"position":"1552","name":"Add 2 Kart India","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1830","name":"Nykaa","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1827","name":"Urban Ladder","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1828","name":"AskMeBazaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1819","name":"Fashion And You","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1972","name":"Mebelkart","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1973","name":"Clovia","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1975","name":"Zansaar","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}, {"position":"1850","name":"Abof","image":"http:\/\/compare.buyhatke.com\/images\/site_icons_m\/unavail_logo.png"}];

var siteName = [];
var siteImage = [];

for(k=0;k<siteList.length;k++){
  siteName[siteList[k].position] = siteList[k].name;
  var image_temp = siteList[k].image.split("site_icons_m/").join(""); 
  siteImage[siteList[k].position] = image_temp;
}

function sendClickData(){
  var jsonArr = [{'dp': window.location.hostname +'-comparePrice-cliced'}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
  return true;
}


function showResults(results, indexSelected, positionSpecs, positionResults){
  positionSpecs = JSON.parse(positionSpecs);
  selectors = JSON.parse(positionResults);
  var siteSelected = siteName[results[indexSelected].position];
  if(siteSelected == undefined || typeof(siteSelected) == "undefined"){
    siteSelected = "Others";
  }
  var stringToShow = '<div id="dd_menu_list"><ul>';
  for(i=0;i<results.length;i++){
    image_name = siteImage[results[i].position];
    if(results[i].position==1){
      results[i].link = "http://tracking.buyhatke.com/Navigation/?pos=1&source=search-extension&ext1=ext&link=" + encodeURIComponent(results[i].link);
    }
    stringToShow = stringToShow + '<li><a position="' + results[i].position + '" class="indvResults" style="display:inline!important;" target="_blank" onclick="return sendClickData();" href="' + results[i].link + '"><div class="itemWrap"><div class="imageDiv_wrap"><div class="imageDiv"><img src="' + results[i].image + '"></div></div><div class="prod_right"><div class="prodName">' + results[i].prod + '</div><div class="storeRow"><div class="prodPrice"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + results[i].price + '</div><div class="prodStore"><img src="' + image_name + '"></div></div></div></div></a></li>';
  }
  stringToShow = stringToShow + '</ul></div>';

  string2 = '<footer><div id="dd_menu_footer"><iframe src="http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FBuyHatke&amp;width=450&amp;height=35&amp;colorscheme=light&amp;layout=standard&amp;action=like&amp;show_faces=false&amp;send=false&amp;appId=205177396285577" scrolling="no" frameborder="0" style="border: none;overflow: hidden;width: 230px;height: 30px;float: left;" allowtransparency="true"></iframe> <a href="mailto:wecare@buyhatke.com">Send Feedback</a></div></footer></div></div><div id="share_buttons">Share: <a class="dd_share_buttons" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="http://compare.buyhatke.com/images/fbs.png"></a><a class="dd_share_buttons" href="https://plus.google.com/share?url=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"></a><a class="dd_share_buttons" href="http://twitter.com/home?status=Try the amazing CompareHatke Chrome Extension!+http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="http://compare.buyhatke.com/images/tweet.png"></a></div></div><a href="javascript:void(); return false;" id="detailClose">x</a></div></div>';
  //////console.log("prices are " + parseInt(results[indexSelected].price) + " , " + parseInt(getPrice()));
  if(parseInt(results[indexSelected].price) < parseInt(getPrice())){
    var msgString = "Hurray !  Massive savings found. This product is available for ";
  }
  else if(parseInt(results[indexSelected].price) == parseInt(getPrice())){
    var msgString = "You already seem to be close to it\'s best price at ";
  }
  else {
    var msgString = "Other variants of the product are available starting from ";
  }
  if(results.length>0){
    //console.log("current pos is " + getCurrentPosition(window.location.href));
    if(getCurrentPosition(window.location.href)==2){
      var temp_link = results[indexSelected].link;
      temp_link = temp_link.split("affid%3Dbuyhatkegm")[0];
      temp_link = temp_link + "&force_aff=0";
      results[indexSelected].link = temp_link;
    }
    var stringFinal = '<div class="to_del_det_wrap" id="detailOutWrap"><div id="detailInWrap"><a target="_blank" href="https://compare.buyhatke.com" title="Visit Buyhatke"><img id="details_logo" src="https://compare.buyhatke.com/images/logo_small.png"></a><div id="details">' + msgString + ' <span id="detail_cost"><img src="http://compare.buyhatke.com/images/rupeeK.png"> ' + results[indexSelected].price + '</span> at <span id="detail_store">' + siteSelected + '</span><a style="display:inline!important;" onclick="return sendClickData();" href="' + results[indexSelected].link + '" target="_blank"><input type="button" value=" BUY IT NOW" ></a>or<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><head><div id="dd_menu_header">Showing <span>' + results.length + '</span> results</div></head>' + stringToShow + string2;
    addedToDOM = 0;
    if($('.to_del_det_wrap').length > 1){
      $('.to_del_det_wrap').remove();
    }
    for(n=0;n<selectors.length;n++){
      if($(selectors[n].selector).length>0 && addedToDOM==0){
        addedToDOM = 1;
        if(selectors[n].attr=="none"){
          if(selectors[n].pos=="after"){
           $(selectors[n].selector).after(stringFinal);
         }
         else {
           $(selectors[n].selector).before(stringFinal);
         }
       }
       else if(selectors[n].attr=="parent"){
        if(selectors[n].pos=="after"){
         $(selectors[n].selector).parent().after(stringFinal);
       }
       else {
         $(selectors[n].selector).parent().before(stringFinal);
       }
     }
   }
 }
 for(l=0;l<positionSpecs.length;l++){
   $(positionSpecs[l].selector).css(positionSpecs[l].cssAttr, positionSpecs[l].preVal);
   resultsShown = 1;
 }
 $("#compare_now").hover(function(){
  if(check_hover_yellow == 0){
   // var jsonArr = [{'act': 2, 'act_text': 'YellowBar Hover'}];
   // jsonArr = JSON.stringify(jsonArr);
   // sendMessage(1, jsonArr, 9, doNothing, []);
   var jsonArr = [{'dp': window.location.hostname + '-yellowHover'}];
   jsonArr = JSON.stringify(jsonArr);
   sendMessage(0, jsonArr, 0, doNothing, []);
   check_hover_yellow = 1;
//tracer
tracer(0,2);
 }
});
 $(".indvResults").click(function(event){
  if(check_click_yellow == 0){
   var jsonArr = [{'dp': window.location.hostname + '-yellowCompClick' + $(this).attr("position")}];
   jsonArr = JSON.stringify(jsonArr);
   sendMessage(0, jsonArr, 0, doNothing, []);
   check_click_yellow = 1;
 }
 else {
   var jsonArr = [{'dp': window.location.hostname + '-yellowCompMultiClick' + $(this).attr("position")}];
   jsonArr = JSON.stringify(jsonArr);
   sendMessage(0, jsonArr, 0, doNothing, []);
 }
});
 $("#detailClose").click(function(){
   if(check_click_yellow == 0){
     var jsonArr = [{'dp': window.location.hostname + '-yellowHoverCrossed'}];
     jsonArr = JSON.stringify(jsonArr);
     sendMessage(0, jsonArr, 0, doNothing, []);
     check_click_yellow = 1;
   }
 });
 $("#dd_menu_list").hover(
  function() {
    msg2 = "Results Viewed";
    var port = chrome.runtime.connect({name: "knockknock"});
    port.postMessage({joke: "Knock knock"});
    port.onMessage.addListener(function(msg) {
      if (msg.question == "Product-name")
        port.postMessage({answer: msgToSend});
    });
  }, function() {
  }
  );

 var button = document.getElementById("detailClose");
 button.addEventListener("click", function() {
  for(i=0;i<document.getElementsByClassName('to_del_det_wrap').length;i++){
    document.getElementsByClassName('to_del_det_wrap')[i].remove();
  }
  for(l=0;l<positionSpecs.length;l++){
   $(positionSpecs[l].selector).css(positionSpecs[l].cssAttr, positionSpecs[l].postVal);
   resultsShown = 0;
 }
}, false);


 cancel=false;
 elem1=document.getElementById("compare_now");
 // blinker();
}
}

function coupontracer(){

var button1=document.getElementById("couponClick");
if(button1!=null)
{
 button1.addEventListener("click", function(){
      var host=window.location.host;
        var jsonArr = [{'type': 'button','website':host}];
      jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr,22,doNothing, []);
        console.log("donehere");
            
        }); 
}

var button = document.getElementById("couponClick2");
if(button!=null)
{
        button.addEventListener("click", function(){
          var host=window.location.host;
        var jsonArr = [{'type': 'button','website':host}];
      jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr,22,doNothing, []);
        console.log("donehere");
            
        });
 }
var finish=document.getElementsByClassName("hdc-button");
finish[1].addEventListener("click",function(){
  var host=window.location.host;
  var jsonArr = [{'type': 'finish1','website':host}];
      jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr,22,doNothing, []);
        console.log("donehere2");
        //tracer
       tracer(1,4);
});

finish[2].addEventListener("click",function(){
  var host=window.location.host;
  var jsonArr = [{'type': 'finish2','website':host}];
      jsonArr = JSON.stringify(jsonArr);
        sendMessage(1, jsonArr,22,doNothing, []);
        console.log("donehere3");
        //tracer
        tracer(1,4);

});


    }

function tracer(listener,type)

{


if(type==2)
{
var pid= msgToSend.split("~")[0];
}
else
{
var pid= getPID();  
}


var website=alertPosition;
if (pid=='')
{
  pid="0";
}
if(website=='')
{
  website="0";
}

var jsonArr = [{'mode':0,'listener':listener,'type':type,'pid':pid,'website':website}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr,23,doNothing, []);
    //console.log("type");

}








