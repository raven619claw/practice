var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('link[rel="stylesheet"]');
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes') {
      amsCall();
      
    }
  });
});
observer.observe(list, {
  attributes: true, 
});

function amsCall(){
  $ = jQuery.noConflict();
  var pollInterval = 1000 * 15;
  window.setTimeout(sendCurrent, 5000);
  window.setTimeout(sendPairs, 5000);
  window.setTimeout(sendPairs, pollInterval);
  
  alertPosition = 1556;
  pidFlipkart = getPID();
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

  var selector2 = [];
  selector2.push({selector: '.discraption:eq(0)', attr: 'none', pos: 'before'});
  selector2.push({selector: '.buy-bar:eq(0)', attr: 'none', pos: 'after'});
  selector2 = JSON.stringify(selector2);
  setTimeout("checkAlertStatus(" + selector2 + ")", 4000);
  compareBtn();
  getTitle();

}
function getTitle(){
  title = getProd();
  if(title==""){
    setTimeout(getTitle, 1000);
  }
  else {
    compareBtn();
  }
}
function compareBtn(){
  var title = getTitle();
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
    if($('#productdetail .addtobag').length > 0){
      $('#productdetail .addtobag:eq(0)').after('<a title="Compare price via Compare Hatke" target="_blank" href=' + urlToFollow + '><img src="' + imgURL + '"></a>');
    }
    var price = getPrice();
    var origPrice = price;
    var final2send = urlToFollow.split("products/");
    var msgToSend = final2send[1] + "~*~*" + price;
    msgToSend = msgToSend + "&moreData=";
    sendSearchMessage(msgToSend);
  }

  function getCategory(){
    var categories = getBreadCrumb();
    var index = 1;
    var category = "";
    if(categories != "" && categories != undefined){
      categories = categories.split("*~");
      category = categories[index];
    }
    return category;
  }

  function getBreadCrumb(){
    var breadcrumb = "";
    var bread_final = "";
    var len_bread = $('.breadcrum').find('a').length;

    for(i=0;i<len_bread;i++){
      breadcrumb = $('.breadcrum').find('a:eq('+ i +')').text().trim();
      bread_final += breadcrumb + "*~";
    }

    return bread_final;
  }

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
  amsCall();
  // function addMargin(){
  //   setTimeout(addMargin, 1000);
  //   if(resultsShown == 1){
  //     $('body').css("margin-top" , "45px");
  //   }
  // }
  // addMargin();
