sendEcomm();
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('link[rel="canonical"]');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes') {
      paytmCall();
      
    }
  });
});
observer.observe(list, {
  attributes: true, 
});

function paytmCall(){
  $ = jQuery.noConflict();

  var pollInterval = 1000 * 15;
  window.setTimeout(sendCurrent, 5000);
  window.setTimeout(sendPairs, 5000);
  window.setTimeout(sendPairs, pollInterval);
  
  alertPosition = 1331;
  //console.log("Alert: "+alertPosition);
  function reportPurchase(){
    var curURL = window.location.href;

    if(curURL.split('paytm.com/cart').length>1){
      var jsonArr = [{'processDONE': "Paytm"}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(0, jsonArr, 0, doNothing, []);
    }
  }

  reportPurchase();

//Where the graph will be placed

pidFlipkart = getPID();
// cururl = window.location.href;
// //console.log("PIDDDD: "+pidFlipkart);
// //console.log("cururl: "+cururl);

// if(returnPID(cururl) != pidFlipkart){
//   //console.log("hey");
// }

//console.log("PID: "+pidFlipkart);
prod = getProd();
// var prod = getProd();

var selector = [];
selector.push({selector: '#midd-container-inner', attr: 'none', pos: 'after'});
selector.push({selector: '.bigContainer-pro:eq(0)', attr: 'none', pos: 'after'});
selector = JSON.stringify(selector);
height = "auto";
var passBack = [{selectors: selector, height: height}];
passBack = JSON.stringify(passBack);
addGraphBase(passBack);
var passBack1 = [{title: prod, siteName: 'Paytm', price: getPrice()}];
passBack1 = JSON.stringify(passBack1);
pidFlipkart = encodeURIComponent(pidFlipkart);
setTimeout(function(){prepareGraph(pidFlipkart, passBack1);},4000);
//setTimeout('prepareGraph(' + pidFlipkart + ', ' + passBack1 + ')', 4000);
//prepareGraph(pidFlipkart, passBack1);


var selector2 = [];
selector2.push({selector: '.discraption:eq(0)', attr: 'none', pos: 'before'});
selector2.push({selector: '.buy-bar:eq(0)', attr: 'none', pos: 'after'});
selector2 = JSON.stringify(selector2);
setTimeout("checkAlertStatus(" + selector2 + ")", 4000);
// var findIsbn = $('.panel-group #double .ng-scope').length;

// for(i=0;i<findIsbn;i++){
//   if($('.panel-group #double .ng-scope:eq('+ i +')').text().toUpperCase().split("ISBN 13").length > 1){
//     isbn = $('.panel-group #double .ng-scope:eq('+ i +') span:eq(1)').text().trim();
//   }
// }
isbn = window.location.href;

if(isbn.split("#").length > 1){
  isbn = isbn.split("#")[0];
}
if(isbn.split("?").length > 1){
  isbn = isbn.split("?")[0];
}
if(isbn.split("&").length > 1){
  isbn = isbn.split("&")[0];
}
if(isbn.split("978").length > 1){
  isbn = isbn.split("978")[1];
  isbn = "978" + isbn;
}
else{
  isbn = "";
}
if(isbn.split("/").length > 1){
  isbn = isbn.split("/")[0];
}
if(isbn.split("_").length > 1){
  isbn = isbn.split("_")[0];
}
if(isNaN(isbn) || isbn.trim() == 978 || isbn.trim().length != 13){
  isbn = "";
}

function compareBtn(){
  origProd = title;
  var prod = title;
  var webID = getCurrentPosition(window.location.href);
  var url = window.location.href;
  url = encodeURIComponent(url);
  prod = encodeURIComponent(prod);
  if(isbn != ""){
    var jsonArr = [{'prod': isbn, 'url': url, 'webID': webID, 'isBook': 1 }];
  }
  else if(prod!=""){
    var jsonArr = [{'prod': prod, 'url': url, 'webID': webID, 'isBook': 0 }];
  }
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 11, doNothing, []);
  var imgURL2 = returnResource("watch-price1.png");
  title = title.split("(")[0];
    var titleS = title.split(" ");
    if(titleS.length<5){
      title = titleS.join("-");
    }
    else {
      title = titleS[0] + "-" + titleS[1] + "-" + titleS[2] + "-" + titleS[3] + "-" + titleS[4];
    }
    if(isbn != ""){
      url = "http://compare.buyhatke.com/books/" + title + "-hatke" + isbn;
    }
    else{
      url = "http://compare.buyhatke.com/products/" + title;
    }
    if($('#mycompare').length == 0){
      if($('.btn-buy').length>0){
        $('.btn-buy:eq(0)').after('<a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy" id="mycompare"><button class="btn-buy btn-lg btn" style="margin-top:10px; width:240px;"><span class="pdp-sprite icon-plus" style="margin-bottom: 0px;"></span>Compare Prices</button></div></a>');
      }
      if($('.buy-bar').length>0){
        $('.buy-bar:eq(0)').before('<a target="_blank" title="Compare via Compare Hatke" href="' + url + '" ><div class="buy" id="mycompare"><button class="btn-buy btn-lg btn" style="margin-top:10px; width: 143px;background-color: #FF4200;color: #fff;"><span class="pdp-sprite icon-plus" style="margin-bottom: 0px;"></span>Compare Prices</button></div></a>');
      }
    }

    price = getPrice();
    if(url.split("/products/").length > 1){
      var final2send = url.split("/products/");
    }
    else if(url.split("/books/").length > 1){
      var final2send = url.split("/books/");
    }
    if(isbn != ""){
      var msgToSend = final2send[1] + "~*~*" + price + "moreData=isbn=" + isbn;
    }
    else{
      var msgToSend = final2send[1] + "~*~*" + price;
    }
    sendSearchMessage(msgToSend);
  }

  function getTitle(){
    //console.log("getTitle was called");
    title = getProd();
    if(title==""){
      setTimeout(getTitle, 1000);
    }
    else {
      compareBtn();
    }
  }

  var curURL = window.location.href;
  // //console.log("CP Check was called " + window.location.href);
  if(curURL.split('paytm.com/coupons').length==1 && curURL.split('paytm.com/cart').length==1){
      getTitle();
    }

function filterResults(data){
  if(data == null || data == "" || data == "null"){
    resultsShown = 0;
    // //console.log("Reached with zero results");
    if($('#detailOutWrap').length > 0){
      $('#detailOutWrap').remove();
    }
  }
  // //console.log("Reached ouside 0 results " + data);
  var results2 = JSON.parse(data);
  var message = results2;
  var results = message;
  results.sort(compare);
  var origPrice = getPrice();
  origProd = title;
  origProd = origProd.split("-").join(" ").trim();
  var countArray = Array();

  for (var i = 0; i <= results.length - 1; i++) {
    countArray[k] = 0;
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
  //console.log(results);
  indexSelected = 0; notFound = 1;
  for(k=0; k< results.length; k++){
    if(results[k].score/totalLen > .5){
      indexSelected = k;
      notFound = 0;
      break;
    }
  }
  if(isbn != ""){
    indexSelected = 0;
  }
  var posResults = [];
  posResults.push({selector: 'body', attr: 'none', pos: 'before'});
  posResults = JSON.stringify(posResults);
  var posSpecs = [];
  posSpecs.push({selector: 'body', attr: 'none', cssAttr: 'margin-top', preVal: '45px', postVal: '0px'});
  posSpecs = JSON.stringify(posSpecs);
  var p_name = getProd();
  if(p_name != undefined && p_name.trim() != ""){
    showResults(results, indexSelected, posSpecs, posResults);
  }
}
}
paytmCall();


function addMargin(){
  setTimeout(addMargin, 1000);
  if(resultsShown == 1){
    $('body').css("margin-top" , "45px");
  }
}
addMargin();
