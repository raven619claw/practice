$ = jQuery.noConflict();
var alertPosition = 901;
if(getCookie("showPopAlert") == undefined || getCookie("showPopAlert") == ""){
  setCookie("showPopAlert", 1, 10);
}

var imgLogo = chrome.extension.getURL("logo.png");
if(getCookie("showPopAlert") == 1){
  // $('body').append('<div id="pop-alert-ams" class="hk-green" style="display:block;height:80px!important;"><div id="close-pop-alert">x</div><div id="p-logo"><img src="' + imgLogo + '"></div><div id="p-msg"><p><a style="text-decoration:none;color:white" href="http://compare.buyhatke.com/promotions/american-swan/?gclid=extension" target="_blank">Buyhatke Maha Giveaway - Over 1,00,000 Products available for FREE. Click me to check it out</a></p></div></div></div>');
}

$("#close-pop-alert").click(function(){
  setCookie("showPopAlert", 0, 10);
  $(this).parent().css("display","none");
});

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

function reportPurchase(){
  var curURL = window.location.href;
  if(curURL.split('checkoutsummary').length>1){
    var jsonArr = [{'processDONE': "Freecultr"}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

reportPurchase();

function review_css(){
  //console.log("review_css");
  if($('.no_review_write_review').length == 0){
    setTimeout(review_css, 2000);
  }
  else if($('.no_review_write_review').length > 0){
    $('.no_review_write_review').css('position','static');
  }

}
review_css();

if($('.blocks_02').length>0){
  $('.blocks_02').before("<div id='mySeparator'></div>");
}
//Where the graph will be placed

pidFlipkart = getPID();
//console.log("PID: "+pidFlipkart);
prod = getProd();
if($('.product-view').length > 0 && $('.product-shop').length > 0){
  var selector = [];
  selector.push({selector: '#mySeparator', attr: 'none', pos: 'after'});
  selector.push({selector: '.first_bar:eq(0)', attr: 'none', pos: 'before'});
  selector.push({selector: '.product-view .product-essential:eq(0)', attr: 'none', pos: 'after'});
  selector = JSON.stringify(selector);
  var height = "auto";
  var passBack = [{selectors: selector, height: height}];
  passBack = JSON.stringify(passBack);
  addGraphBase(passBack);
  $('.first_bar').css('padding-top', '20px');
  $('.first_bar').css('background', 'url(http://d35f3iwvuptxj7.cloudfront.net/skin/frontend/purple/default/images/revamp/footer_new_bg_top.jpg) repeat-x left top #fff');
// $('.main-container .loader_landing_pages').css('z-index', 20001);
var passBack1 = [{title: prod, siteName: 'Freecultr', price: getPrice()}];
passBack1 = JSON.stringify(passBack1);
prepareGraph(pidFlipkart, passBack1);
}

var selector2 = [];
// selector2.push({selector: '.select_size:eq(0)', attr: 'none', pos: 'before'});
selector2.push({selector: '.product-view .price-box:eq(0)', attr: 'none', pos: 'after'});
selector2.push({selector: '.product-view .add-to-box-price:eq(0)', attr: 'none', pos: 'after'});
selector2 = JSON.stringify(selector2);
setTimeout("checkAlertStatus(" + selector2 + ")", 4000);

var imgURL2 = returnResource("watch-price1.png");
var name = getProd();
origProd = name;
name = name.split("(")[0];
  var nameS = name.split(" ");
  if(nameS.length<4){
    name = nameS.join("-");
  }
  else {
    name = nameS[0] + "-" + nameS[1] + "-" + nameS[2] + "-" + nameS[3];
  }
  var url = "http://compare.buyhatke.com/products/" + name;

  if(pidFlipkart.split("?design=").length < 2){
    if($('#notify_me_button').length>0){
      $('#notify_me_button:eq(0)').after('<br><br><br><a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy"><span class="big fill" style="background: green;padding: 8px 24px;color: #fff;font-weight: 400;font-size: 15px;border-radius: 2px;margin-left: 110px;"><span class="pdp-sprite icon-plus"></span>Compare Prices</span></div></a>');
    }
    else if($('.product-options').length>0){
      $('.product-options:eq(0)').after('<br><br><br><a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy"><span class="big fill" style="background: green;padding: 8px 24px;color: #fff;font-weight: 400;font-size: 15px;border-radius: 2px;margin-left: 110px;"><span class="pdp-sprite icon-plus"></span>Compare Prices</span></div></a>');
    }
    else if($('.product-view .btn-cart').length>0){
    $('.product-view .btn-cart:eq(0)').after('<br><br><br><a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy"><span class="big fill" style="background: rgb(0, 173, 57);padding: 10px 20px;color: #fff;font-weight: 400;font-size: 15px;border-radius: 6px;"><span class="pdp-sprite icon-plus"></span>Compare Prices</span></div></a>');
  }

  }
  else if($('.product-view .add-to-box-price').length>0){
    $('.product-view .add-to-box-price:eq(0)').after('<br><br><br><a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy"><span class="big fill" style="background: green;padding: 2px 24px;color: #fff;font-weight: 400;font-size: 15px;border-radius: 2px;"><span class="pdp-sprite icon-plus"></span>Compare Prices</span></div></a>');
  }

  myPrice = getPrice();
  price = getPrice();
  origPrice = price;

  var final2send = url.split("products/");
  var msgToSend = final2send[1] + "~*~*" + price;
  msgToSend = msgToSend + "&moreData=";
  sendSearchMessage(msgToSend);

  function filterResults(data){
    var results2 = JSON.parse(data);
    var message = results2;
    var results = message;
    results.sort(compare);
    origProd = getProd();
    var origPrice = getPrice();
    //console.log(origProd);
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
    ////console.log(results[i].prod + " " + results[i].price + " " + countArray[i]);
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
  posSpecs.push({selector: '#navigation', attr: 'none', cssAttr: 'margin-top', preVal: '40px', postVal: '0px'});
  posSpecs = JSON.stringify(posSpecs);
  showResults(results, indexSelected, posSpecs, posResults);
}

