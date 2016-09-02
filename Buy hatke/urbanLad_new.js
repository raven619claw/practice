var alertPosition = 1827;

pidFlipkart = getPID();
prod = getProd();
var selector = [];
if($('#product-show').length > 0 || $('#mproduct-show').length > 0){
  selector.push({selector: '#product-show .productdetails:eq(0)', attr: 'none', pos: 'after'});
  selector.push({selector: '#mproduct-show .productdetails:eq(0)', attr: 'none', pos: 'after'});
  selector = JSON.stringify(selector);
  height = "auto";
  var passBack = [{selectors: selector, height: height}];
  passBack = JSON.stringify(passBack);
  addGraphBase(passBack);
  var passBack1 = [{title: prod, siteName: 'Urban Ladder', price: getPrice()}];
  passBack1 = JSON.stringify(passBack1);
  prepareGraph(pidFlipkart, passBack1);
}
var selector2 = [];
selector2.push({selector: '.productdetails:eq(0) .buy_details:eq(0)', attr: 'none', pos: 'before'});
selector2.push({selector: '#bundles-teaser', attr: 'none', pos: 'before'});
selector2 = JSON.stringify(selector2);
setTimeout("checkAlertStatus(" + selector2 + ")", 4000);
var title = getProd();
var prod = title;
var price = getPrice();
var myPrice = price;
title = title.split("(")[0];
  var titleS = title.split(" ");
  if(titleS.length<5){
    title = titleS.join("-");
  }
  else {
    title = titleS[0] + "-" + titleS[1] + "-" + titleS[2] + "-" + titleS[3] + "-" + titleS[4];
  }
  var url = "http://compare.buyhatke.com/products/" + title;
  var imgURL = returnResource("jabong.png");
  var imgURL2 = returnResource("watch-price1.png");
  if($('#cart-form .add-to-cart').length > 0){
    $('#cart-form .add-to-cart:eq(0)').after('<a title="Compare price via Compare Hatke" target="_blank" href=' + url + '><img src="' + imgURL + '"></a>');
  }
  else if($('#bundles-teaser').length > 0){
    $('#bundles-teaser').before('<a title="Compare price via Compare Hatke" target="_blank" href=' + url + '><img src="' + imgURL + '"></a>');
  }

  var final2send = url.split("products/");
  var msgToSend = final2send[1] + "~*~*" + price;
  msgToSend = msgToSend + "moreData=";
  sendSearchMessage(msgToSend);

  function filterResults(data){
    var results = JSON.parse(data);
    results.sort(compare);
    var origPrice = getPrice();
    origProd = getProd();
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
    posSpecs.push({selector: 'body', attr: 'none', cssAttr: 'margin-top', preVal: '65px', postVal: '0px'});
    posSpecs.push({selector: '#header_inner', attr: 'none', cssAttr: 'display', preVal: 'none', postVal: 'block'});
    posSpecs = JSON.stringify(posSpecs);
    showResults(results, indexSelected, posSpecs, posResults);
  }

