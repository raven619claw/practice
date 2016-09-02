var alertPosition = 1556;
//Where the graph will be placed
if(getCookie("showPopAlert") == undefined || getCookie("showPopAlert") == ""){
  setCookie("showPopAlert", 1, 10);
}

sendEcomm();

var imgLogo = chrome.extension.getURL("logo.png");
if(getCookie("showPopAlert") == 1){
  // $('body').append('<div id="pop-alert-ams" class="hk-green" style="display:block;height:80px!important;"><div id="close-pop-alert">x</div><div id="p-logo"><img src="' + imgLogo + '"></div><div id="p-msg"><p><a style="text-decoration:none;color:white" href="http://compare.buyhatke.com/promotions/american-swan/?gclid=extension" target="_blank">Buyhatke Maha Giveaway - Over 1,00,000 Products available for FREE. Click me to check it out</a></p></div></div></div>');
}

$("#close-pop-alert").click(function(){
  setCookie("showPopAlert", 0, 10);
  $(this).parent().css("display","none");
});

pidFlipkart = getPID();
////console.log("PID: "+pidFlipkart);
prod = getProd();
var selector = [];
selector.push({selector: '#productdetail', attr: 'none', pos: 'after'});
selector.push({selector: '#container', attr: 'none', pos: 'after'});
selector.push({selector: '#fb-root', attr: 'none', pos: 'before'});
selector.push({selector: '.cod-avil-section', attr: 'none', pos: 'before'});
selector.push({selector: '.Product-Detail:eq(0)', attr: 'none', pos: 'after'});

selector = JSON.stringify(selector);
var passBack = [{selectors: selector}];
passBack = JSON.stringify(passBack);
addGraphBase(passBack);
var passBack1 = [{title: prod, siteName: 'AmericaSwan', price: getPrice()}];
passBack1 = JSON.stringify(passBack1);
prepareGraph(pidFlipkart, passBack1);

function sendTrack(){
  var prod = getProd();
  var webID = getCurrentPosition(window.location.href);
  var url = window.location.href;
  url = encodeURIComponent(url);
  prod = encodeURIComponent(prod);
  if(prod!=""){
    var jsonArr = [{'prod': prod, 'url': url, 'webID': webID, 'isBook': 0 }];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 11, doNothing, []);
  }
}

sendTrack();

var selector2 = [];
selector2.push({selector: '#productdetail .addtobag:eq(0)', attr: 'none', pos: 'after'});
selector2.push({selector: '.pdpbutton-wrapp', attr: 'none', pos: 'before'});
selector2.push({selector: '.color-pallet-wrap', attr: 'none', pos: 'before'});
selector2 = JSON.stringify(selector2);
setTimeout("checkAlertStatus(" + selector2 + ")", 4000);

var title = getProd();
var url = "http://compare.buyhatke.com/products/";
origProd = title;
title = title.split("(")[0];
  var titleS = title.split(" ");
  if(titleS.length<5){
    title = titleS.join("-");
  }
  else {
    title = titleS[0] + "-" + titleS[1] + "-" + titleS[2] + "-" + titleS[3] + "-" + titleS[4];
  }
  var urlToFollow = url + title;
  var imgURL2 = returnResource("watch-price1.png");
  var imgURL = returnResource("jabong.png");
  // if($("#productdetail .addtobag").length > 0){
  //   $("#addWatchList").css("margin-left", "180px");
  // }

  if($('#productdetail .addtobag').length > 0){
    $('#productdetail .addtobag:eq(0)').after('<a title="Compare price via Compare Hatke" target="_blank" href=' + urlToFollow + '><img src="' + imgURL + '"></a>');
  }

  price = getPrice();
  origPrice = price;
  var final2send = urlToFollow.split("products/");
  var msgToSend = final2send[1] + "~*~*" + price;
  msgToSend = msgToSend + "&moreData=";
  sendSearchMessage(msgToSend);

  function filterResults(data){
    var results2 = JSON.parse(data);
    var message = results2;
    var results = message;
    results.sort(compare);
    var origPrice = getPrice();
    origProd = getProd();
    ////console.log(origProd);
    var countArray = Array();
    for (var i = 0; i <= results.length - 1; i++) {
      var current = results[i].prod;
      countArray[i] = 0;
      currentArray = origProd.split(" ");
      var totalLen = currentArray.length;
      for(var k=0; k< currentArray.length; k++){
        if(current.toUpperCase().indexOf(currentArray[k].toUpperCase())!=-1){
          countArray[i] = countArray[i] + 1;
        }
      }
      results[i].score = countArray[i];
    }
    indexSelected = 0; notFound = 1;
    for(k=0; k< results.length; k++){
      if(results[k].score/totalLen > .5){
        indexSelected = k;
        notFound = 0;
        break;
      }
    }
    var posResults = [];
    posResults.push({selector: 'body', attr: 'none', pos: 'before'});
    posResults = JSON.stringify(posResults);
    var posSpecs = [];
    posSpecs.push({selector: 'body', attr: 'none', cssAttr: 'margin-top', preVal: '0px', postVal: '0px'});
    posSpecs = JSON.stringify(posSpecs);
    showResults(results, indexSelected, posSpecs, posResults);
  }
