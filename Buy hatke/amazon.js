savingsArray = [];
coupArray = [];
bestCouponFound = 0;
if(localStorage.noCount == undefined){
  localStorage.noCount = 1;
}

var isSuccessful = 0;
function clickBuyNow(){
  // //console.log("Trying now");
  setTimeout(function(){ clickBuyNow(); } , 10);
  $ = jQuery.noConflict();
  if(isSuccessful<=25){
  if($('#add-to-cart-button').length > 0){
     isSuccessful = isSuccessful + 1;
      $('#add-to-cart-button').click();
      //console.log("I Clicked " + isSuccessful);
   }
   if($('#dealActionButton').length > 0){
     isSuccessful = isSuccessful + 1;
      $('#dealActionButton').click();
      //console.log("I Clicked " + isSuccessful);
   }
   if($('#dealActionContent').find('img').length > 0){
      isSuccessful = isSuccessful + 1;
      // //console.log("I Clicked " + isSuccessful);
      $('#dealActionContent').find('img:eq(0)').click();
      //console.log("I Clicked " + isSuccessful);
   }
  }
}

// clickBuyNow();



// getCategDeals();



// localStorage.ext_id = 1;
// if(getCookie("graphShown")!=1 || getCookie("graphShown")==undefined || typeof(getCookie("graphShown"))=="undefined" || getCookie("graphShown")==""){
//   if(getCookie("graphShown")!=0){
//      setCookie("graphShown", 0, 1);
//      localStorage.noCount++;
//    }
// }

// if(localStorage.noCount==3 && getCookie("graphShown")==0){
//   setCookie("graphShown", 1, 1000);
//   localStorage.noCount++;
// }

if(getCookie("graphShown")!=0 || getCookie("graphShown")==undefined || typeof(getCookie("graphShown"))=="undefined" || getCookie("graphShown")==""){
  setCookie("graphShown", 1, 1000);
}

if(getCookie("hideDeal") == undefined || getCookie("hideDeal") == ""){
  setCookie("hideDeal", 0, 1);
}
if($("#imageBlock").length > 0 && getCookie("hideDeal") != 1){
  plotHotDeals();
}
$(".hideOne").click(function(){
  setCookie("hideDeal", 1, 1);
  $(".hk-dpop").remove();
  
});

$(".hideFifteen").click(function(){
  setCookie("hideDeal", 1, 1000);
  $(".hk-dpop").remove();
  
});

$('.hk-dpop').click(function(){
  var dealArr = [];
  var pos = 63;
  var PID = getPID();
  if(PID != ""){
    dealArr.push([PID, pos]);
    dealArr = JSON.stringify(dealArr);
    var jsonArr = [{'dealData': dealArr}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 18, hotDeals, []);
  }
});

function hotDeals(resp){
  resp = JSON.parse(resp);
  if(resp[0] != "Hottest Deals"){
    var deal_text = "Checkout our Hand-picked deals in " + resp[0] + " category!";
  }
  else{
    var deal_text = "Checkout our Hand-picked Hottest Deals!";
  }
  //console.log("deal_text: "+deal_text);
  $(".hk-dpop-details--text").text(deal_text);
  $(".hk-dpop-wrap").attr("href", resp[1]);

}

$('.hk-dpop--close').click(function(){
  if($(this).parent().hasClass("hk-dpop--open")){
    $(this).parent().addClass('bounceOutRight')
    setTimeout(function(){
      $('.hk-dpop').removeClass('bounceOutRight')
      $('.hk-dpop').removeClass('hk-dpop--open')
    },1000)
  }
})
$('.hk-dpop-toggle').click(function(){
  if(!$(this).parent().hasClass("hk-dpop--open")){
    $(this).parent().addClass('hk-dpop--open')
    $(this).parent().addClass('bounceInRight')
    setTimeout(function(){
      $('.hk-dpop').removeClass('bounceInRight')
    },1000)
  }
  else{
    $(this).parent().addClass('bounceOutRight')
    setTimeout(function(){
      $('.hk-dpop').removeClass('bounceOutRight')
      $('.hk-dpop').removeClass('hk-dpop--open')
    },1000)
  }
})
setInterval(function(){
  if(!$('.hk-dpop').hasClass("hk-dpop--open"))
  {
    $('.hk-dpop').addClass('bounce');
    setTimeout(function(){
      $('.hk-dpop').removeClass('bounce')
    },1000)
  }

},12000)


// function initiateSale(){
//   //////console.log("I was called");
//   if(document.getElementById('add-to-cart-button') != null){
//       //////console.log("Clicked");
//       document.getElementById('add-to-cart-button').click();
//         chrome.runtime.sendMessage({setSaleVariables: -1354}, function(response){});
//     }
//     else {
//       var pollInterval = 10;
//       window.setTimeout(initiateSale, pollInterval);
//     }
// }

//            if(window.location.href.split("bhSale=1").length > 1){
//            initiateSale();
//            //////console.log("Sale initiated");
//            }

function compare(a,b) {
  if (parseInt(a.price) < parseInt(b.price))
   return -1;
 if (parseInt(a.price) > parseInt(b.price))
  return 1;
return 0;
}

$s = jQuery.noConflict();
var imgLogo = chrome.extension.getURL("logo.png");

function removeSubscription(){
 setCookie("subsHidden", 1, 1);
}

function checkSubscribed(){
  chrome.runtime.sendMessage({subscribedFor: "value"}, function(response) {
   subscribedFor = response.farewell;
   if(subscribedFor.split("5").length==1&&getCookie("subsHidden")!=1){
    $s('#pop-alert').removeClass("hk-green");
    $s('#pop-alert').removeClass("hk-orange");
    $s('#pop-alert').removeClass("hk-red");
    $s('#pop-alert').addClass("hk-orange");
    $s('#pop-alert').css("display", "block");
  }
});
}

checkSubscribed();

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

function hideBar(){
  $s("#detailOutWrap").css({marginTop: '-50px'});
  $s("#navbar").css({marginTop: '0px'});
  $s("#returnHidden").fadeIn();
  setCookie("comparisonHidden", 1, 1);
}
function showBar(){
  $s("#returnHidden").fadeOut();
  $s("#navbar").css({marginTop: '40px'});
  $s("#detailOutWrap").css({marginTop: '0px'});
  setCookie("comparisonHidden", 0, 1);
}

function getXMLHTTPRequest() {

  req = new XMLHttpRequest();
  return req;

}



function removeTags(length2){
  ////////////console.log("Called with " + length2);
  $s('tspan:eq(' + length2 + ')').css("display", "none");
}

function reportPurchase(){
  var curURL = window.location.href;
  if(curURL.split('amazon.in/gp/buy/').length>1){
    chrome.runtime.sendMessage({processDONE: "Amazon"}, function(response) {
    });
  }
}

reportPurchase();

function plotGraph(pid){
  var httpq4 = new getXMLHTTPRequest();
  var ext_id, ext_auth;
  chrome.runtime.sendMessage({ext_id: "value"}, function(response) {
    ext_id = response.farewell.split("~")[0];
    ext_auth = response.farewell.split("~")[1];
    var myurl = "https://compare.buyhatke.com/extension/getPredictedData.php";
    var parameters = "ext_id=" + ext_id + "&auth_val=" + ext_auth + "&pid=" + pid + "&web=amazon";
    httpq4.open("POST", myurl, true);
    httpq4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpq4.onreadystatechange = function(){
      if (httpq4.readyState == 4) {
        if(httpq4.status == 200) {
          var mytext = httpq4.responseText;
////////////console.log(mytext);
var dataString = [];
var flagPrice = 0;
currentPrice = getPrice();
if(currentPrice=="" || currentPrice==0 || currentPrice == undefined){
  flagPrice = 0;
}
else {
  flagPrice = 1;
}
var pointFound = 0;
var predScores = mytext.split("&~&~");
if(mytext.trim()==""){
  predScores[0] = "";
  predScores[1] = 100;
  predScores[2] = 100;
  predScores[3] = 100;
}
var score1 = predScores[1];
if(score1 < 50){
  var class1 = "hatke-pred-no";
  var text1 = "Na ! Wait for some time";
  var extra1 = "Price is expected to drop soon.Set a price drop alert to avail it at lowest price.";
}
else if(score1 < 65 && score1 >=50){
  var class1 = "hatke-pred-ok";
  var text1 = "You can go for it";
  var extra1 = "Price is expected to change minutely within next 2-3 days.";
}
else {
  var class1 = "hatke-pred-yes";
  var text1 = "Go for it";
  var extra1 = "Price is expected to be more or less same within next 2-3 days.";
}
var score2 = predScores[2];
if(score2 < 50){
  var class2 = "hatke-pred-no";
  var text2 = "Na ! Wait for some time";
  var extra2 = "Price is expected to drop within a week.Consider setting a price alert for this product.";
}
else if(score2 < 65 && score2 >=50){
  var class2 = "hatke-pred-ok";
  var text2 = "You can go for it";
  var extra2 = "Price is expected to drop very minutely within a week.";
}
else {
  var class2 = "hatke-pred-yes";
  var text2 = "Go for it !";
  var extra2 = "Price is expected to remain same within a week."
}
var score3 = predScores[3];
if(score3 < 50){
  var class3 = "hatke-pred-no";
  var text3 = "Na ! Wait for some time";
  var extra3 = "Price is expected to drop within a month.Set a price alert to purchase it at right moment.";
}
else if(score3 < 65 && score3 >=50){
  var class3 = "hatke-pred-ok";
  var text3 = "You can go for it";
  var extra3 = "Price is expected to drop very minutely within next 1 month.";
}
else {
  var class3 = "hatke-pred-yes";
  var text3 = "Go for it !";
  var extra3 = "Price is expected to remain more or less same in next 1 month.";
}
if(typeof(score1) != "undefined"){
  document.getElementById('container3').innerHTML = '<div id="hatke-prediction-scores"><ul class="hatke-pred-grid"><li style="width:240px;">Should I purchase it today ?</li><li class="' + class1 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when">Next 2-3 days?</div><div class="hatke-prediction-score">' + score1 + '%</div><div class="hatke-prediction-caption">' + text1 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within next 2-3 days, it\'s ' + score1 + '% favourable to purchase it today. ' + extra1 + '</div></div></div></li><li class="' + class2 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when">Within a week?</div><div class="hatke-prediction-score">' + score2 + '%</div><div class="hatke-prediction-caption ">' + text2 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within a week, it\'s ' + score2 + '% favourable to purchase it today. ' + extra2 + '</div></div></div></li><li class="' + class3 + '"><div class="hatke-pred-wrap"><div class="hatke-prediction-help" title="More Info">?</div><div class="hatke-prediction"><div class="hatke-prediction-when">Within a month?</div><div class="hatke-prediction-score">' + score3 + '%</div><div class="hatke-prediction-caption">' + text3 + '</div></div><div class="hatke-figcaption"><div class="hatke-outer-caption">If you are looking to purchase this product within a month, it\'s ' + score3 + '% favourable to purchase it today. ' + extra3 + '</div></div></div></li></ul></div>';
}
// //console.log("Reached here for graph");
// //console.log(predScores[0]);
var compList = predScores[0].split("~*~*");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); 
var yyyy = today.getFullYear();
var pointFound = 0;
var curDateString = yyyy + "-" + mm + "-" + dd;
for(k=0;k<compList.length-1;k++){
  dateC = compList[k].split("~")[0];
  price = compList[k].split("~")[1];
  dateC2 = dateC.split(" ")[0];
  dateS = dateC2.split("-");
  year = dateS[0];
  month = dateS[1] - 1;
  date = dateS[2];
  if(flagPrice==1 && parseInt(dd)==parseInt(date) && parseInt(mm)==parseInt(month)){
    price = parseInt(currentPrice);
    pointFound = 1;
  }
  if(month==0){
      //month = 12;
    }
    
    dataString.push([Date.UTC(parseInt(year), parseInt(month) , parseInt(date)), parseInt(price)]);
  }

  if(pointFound==0 && flagPrice==1){
    dataString.push([Date.UTC(parseInt(yyyy), parseInt(mm) , parseInt(dd)), parseInt(currentPrice)]);
  }
//dataString = dataString + "]";
prodName = getProd();

  ////////////console.log(dataString);
  $s('#container2').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Should I purchase ' + prodName + " now ?"
    },
    subtitle: {
      text: 'Price Variance of ' + prodName + " at Amazon"
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
              name: 'Amazon Price',
              data: dataString
            }]
          });
  var length2 = $s('tspan').length;
  length2 = length2 - 1;
  setTimeout("removeTags(" + length2 + ")", 4000);



}
}
};
httpq4.send(parameters);

}); 

}

function removeAlert(){
  var currentURL = window.location.href;
  var filterURL = currentURL.split("?ref=")[0];
  filterURL = filterURL.split("ref=")[0];
  filterURL = filterURL.split("?")[0];
  ////////console.log("Filtered URL " + filterURL);
  chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
    for(m=0;m<response.farewell.length;m++){
      var url2 = response.farewell[m].link;
      url2 = url2.split("?ref=")[0];
      url2 = url2.split("ref=")[0];
      url2 = url2.split("?")[0];
      if(url2==filterURL){
        sendId = response.farewell[m].link_id;
        chrome.runtime.sendMessage({removeURL: sendId}, function(response) {
  ////////console.log("Removal request sent");
});
      }
    }
  }); 
}

// if($s('.kmd-section-divider').length>0){
//   $s('.kmd-section-divider:eq(0)').before('<div id="container" style=" min-width: 820px; max-width: 960px; height: auto; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin-left:120px;max-width:960px;"> </div> ');
// }
// else if($s('#ppd').length>0){
//   //console.log(2);
//   $s('#ppd').after('<div id="container" style=" min-width: 820px; max-width: 960px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;"> </div> ');
// }
// else if($s('.bucketDivider').length>1){
//   //console.log(3);
//   $s('.bucketDivider:eq(1)').after('<div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;position: relative;display:block"> </div> ');
// }
// else if($s('#detail_bullets_id').length>0){
//   //console.log(4);
//   ////////console.log("Its case 1");
//   $s('#detail_bullets_id').before('<div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;"> </div> ');
// }
// else if($s('.kmd-title-underline').length>0){
//   //console.log(5);
//   $s('.kmd-title-underline:eq(0)').before('<div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;"> </div> '); 
// }
// else if($s('#feature-bullets-btf').length>0){
//   ////////console.log("Its case 0");
//   //console.log(6);
//   $s('#feature-bullets-btf').before('<div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;"> </div> ');
// }
// else if($s('#moreAboutThisProduct').length>0){
//   //console.log(7);
//   ////////console.log("Its case 1");
//   $s('#moreAboutThisProduct').after('<div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin:0px auto;max-width:960px;"> </div> ');
// }



// if($s('#container').length>0){
//   var button4 = document.getElementById("hideGraph");
//   if(button4 != null){
//     button4.addEventListener("click", function(){
//       setCookie("graphShown", 0, 1000);
//       $s('#container').css("display", "none");
//     }, false);
//   }
// }

pidFlipkart = window.location.href;
pidFlipkart = pidFlipkart.split("?")[0];
pidFlipkart = pidFlipkart.split("/ref=")[0];
pidFlipkart = pidFlipkart.split("/");
pidFlipkart2 = pidFlipkart[pidFlipkart.length-1];
pidFlipkart1 = pidFlipkart[pidFlipkart.length-2];

if(pidFlipkart2==""){
  pidFlipkart = pidFlipkart1;
}
else {
  pidFlipkart = pidFlipkart2;
}


if(pidFlipkart!="" && pidFlipkart == pidFlipkart.toUpperCase()){
  var img22 = chrome.extension.getURL("hk-a-pt.png");

$('body').append('<div class="hk-am_rfix2" id="hk-pt" style="transition:.3s ease-in;position: fixed;z-index: 1000000;right: -1000px;top: 50px;"><a class="hk-m-op" href="#"><img src="' + img22 + '"></a><div class="hk-am_rfix2-closer">&times;</div><div class="pricealert_hatke" style="width: 1000px;height: 705px; top: 0;vertical-align: top; margin: 0 0 0 -4px;;background: white;"><div id="container" style=" min-width: 820px; max-width: 960px; height: 770px; margin: 0 auto; position: relative;"><div id="container" style=" min-width: 820px; max-width: 960px; height: auto; margin: 0 auto; position: relative;"><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div><div id="container2"></div><div id="container3"></div><div id="container4" style="padding: 10px;font-family: Open Sans, Arial, Helvetica, sans-serif;"><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bug-icon.png" style="vertical-align: bottom;height: 15px;top: -2px;position: relative;">Report A Bug</a><a href="http://buyh.tk/16" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/bulb-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Suggest Us Something</a><a href="http://buyh.tk/r5" target="_blank" style="font-size: 13px;text-decoration: none;color: #0d99aa;margin-right: 32px;"><img src="https://compare.buyhatke.com/images/star-icon.png" style="vertical-align: bottom;height: 16px;top: -2px;position: relative;">Rate Us</a><a href="javascript:void();" id="hideGraph">Hide Graph</a></div></div><div id="container10" style="margin-left:120px;max-width:960px;"> </div></div></div></div>');

$(".hk-m-op , .hk-am_rfix2-closer",".hk-am_rfix2").click(function(){
    $(".hk-am_rfix2").toggleClass("hk-am-rfix2-show");
  })

var button4 = document.getElementById("hk-pt");
button4.addEventListener("click", function(){
  plotGraph(pidFlipkart);
}, false);

}

if(pidFlipkart!="" && pidFlipkart == pidFlipkart.toUpperCase()){

  // Commenting out deals part from Amazon completely

  // chrome.runtime.sendMessage({getDeals: pidFlipkart + "~*~*1"}, function(response) {
  // });

 //  Comment part ends here
  chrome.runtime.onMessage.addListener(
    function(request, sender) {
      var mytext = request.deals;
      if(mytext!=""){
        var deals = JSON.parse(mytext);
        var catName  = "this category";
        var dealsText = '<div id="hatke_pricedrops" class="hatke_pricedrops hk-rt-on"><div id="hatke-pd-title"><span>Price Drops in ' +  catName + '</span><a href="#" onclick="return false;" id="hk-pd-close" class="hk-pd-toggle"></a></div> <div id="hatke-pd-wrap"> <div id="hatke-pd-cover"> <nav class="hr-arrows ar-left"> <a onclick="return false;" href="#" class="ar-prev"> <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="16.801px" height="25px" viewBox="394.64 389.25 16.801 25" xml:space="preserve"> <polygon id="arrow-left-25x25" class="hatke-arrow arrow-left" points="399,414.25 394.64,409.91 402.761,401.75 394.64,393.59 399,389.25 411.441,401.75 "/> </svg> </a> </nav> <div id="hatke-pd-main" class=""> <ul id="hatke-pd-carousel" class="clearfix">'; 
        for(k=0;k<deals.length;k++){
      ////////////console.log("I am here " + k + " " + deals.length);
      var saved = parseFloat(parseFloat(deals[k].mrp) - parseFloat(deals[k].price));
      ////////////console.log("savings is " + saved);
      var link1 = "https://compare.buyhatke.com/deals-landing/from-extension/-hatke" + deals[k].PID;
      var link2 = "http://www.amazon.in/buyhatke-deals/dp/" + deals[k].PID2 + "/?tag=buyhatke-21";
      dealsText = dealsText + '<li><div class="hk-drop">' + deals[k].perDrop + '</div> <a href="' + link2 + '" style="text-decoration:none;"> <div class="hk-prod-img"> <img src="' + deals[k].image + '" alt="product"/> </div></a> <div class="hk-prod-details clearfix"> <a style="text-decoration:none;" href="' + link2 + '"> <div class="hk-prod-name"> ' + deals[k].prod + ' </div> <div class="hk-price-details"> <div class="hk-prod-price-orig h_webrupee">' + deals[k].mrp + ' </div> <div class="hk-prod-price h_webrupee"> ' + deals[k].price + ' </div> <div class="hk-price-save "> YOU SAVE <span class="h_webrupee"> ' + saved + '</span> </div> </div> </div></a><a href="' + link2 + '" style="text-decoration:none;margin-left:20px;"> <div class="hk-prod-check" style="min-width:120px;"> Buy </div> </a> </li>';
    }
     ////////////console.log("I am here");
     //dealsText = dealsText + '</ul> </div> <nav class="hr-arrows ar-right" style="margin-top:-310px;"> <a href="#" onclick="return false;" class="ar-next"> <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="16.801px" height="25px" viewBox="394.64 389.25 16.801 25" xml:space="preserve"> <polygon id="arrow-right-25x25" class="hatke-arrow arrow-right" points="399,414.25 394.64,409.91 402.761,401.75 394.64,393.59 399,389.25 411.441,401.75 "/></svg></a></nav></div></div></div><div id="chart-logo" style="position: absolute;bottom: 10px;right: 0;font-size: 13px;z-index: 1">Price Chart Powered by<a target="_blank" href="https://compare.buyhatke.com?utm_source=graph" style="color: #0db2db;"><img src="https://compare.buyhatke.com/images/logo-mini.png" style="vertical-align: middle;margin-left: 5px;margin-top: -6px;"></a></div>';

        ////////////console.log(dealsText);
        document.getElementById('container10').innerHTML = dealsText;
        $s('#hatke-pd-carousel').simplecarousel({
          next: $s('.ar-next'),
          prev: $s('.ar-prev'),
          slidespeed: 700,
          auto: 0,
          width: 180,
          visible:5
        });
        if(getCookie("dealsHide")==1){
          $s('#hatke_pricedrops').toggleClass("hk-rt-on");
        }
        $s('.hk-pd-toggle').click(function(){
          $s(this).parent().parent().toggleClass("hk-rt-on");
          if(!$s('#hatke_pricedrops').hasClass("hk-rt-on")){
            setCookie("dealsHide", 1, 200);
          }
          else {
            setCookie("dealsHide", 0, 200);
          }
        });
      }

    });

if(getCookie("graphShown")!=0){
  plotGraph(pidFlipkart);
}
else {
  // hide the graph !
  if($s('#container').length>0){
    $s('#container').css("display", "none");
  }
}
// var img1 = chrome.extension.getURL("hk-a-pt.png");
// $s('body').append('<div class="hk-am_rfix2" id="hk-pt" style="position: fixed;z-index: 1000000;right: 0px;top: 45%;margin-top: -190px;"><a class="hk-m-op" href="#"><img src="' + img1 + '"></a></div>');

// var button4 = document.getElementById("hk-pt");
// button4.addEventListener("click", function(){
//   setCookie("graphShown", 1, 1000);
//   $s('#container').css("display", "block");
//   $s('html, body').animate({
//     scrollTop: $s("#container").offset().top
//   }, 2000);
//   plotGraph(pidFlipkart);
// }, false);
}

flagCoupon = [];
for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  if($s('#spinner-anchor').length>0){
    var status = $s('#spinner-anchor').attr("style").split("display:");
    if(status.length>1){
      status = status[1].split(";")[0].trim();
    }
    else {
      status = "comeAgain";
    }
  }
  else {
    var status = "comeAgain";
  }
  if(status=="none"){
    flagCoupon[i] = 1;
    setTimeout(function(){postProcessor(coupon, i);},1000);
  }
  else {
    setTimeout(function(){changeFlag(i, coupon);},1000);
  }
}

function changeFlag2(i, coupon){
  if(bestCouponFound==0){
    if($s('.delete-coupon').length>0){
      $s('.delete-coupon').click();
    }
  }
  flagCoupon[i] = 0;
}

function removeCompletely(){
   // $('#removeMask').find('a:eq(1)').click();
 }

 function postProcessor(coupon, i){
  savingsText = $s('.order-summary-unidenfitied-style').text().trim().split("Promotion Applied");
  if(savingsText.length>1){
    savings = savingsText[1].trim().split("Rs.");
    savings = savings[1].trim();
    savings = savings.split(",").join("");
    savings = parseFloat(savings);
  }
  else {
    savings = 0;
  }
  savings = parseFloat(savings);
  if(savings > $s('.hdc-sav-amt').text()){
    var currentSavAmt = parseFloat($s('.hdc-sav-amt').text()),
    finalSavAmt = savings;
    $s({c: currentSavAmt}).animate({c: finalSavAmt}, {
      step: function(now) {
        $s('.hdc-sav-amt').text(Math.round(now))
      },
      duration: 1000,
      easing: "linear"
    });
  }
    ////////console.log("Savings for " + coupon + " is " + savings);
    savingsArray[i] = savings;
    if(bestCouponFound==0){
     if($s('.delete-coupon').length>0){
      $s('.delete-coupon').click();
    }
  }
  setTimeout(function(){changeFlag2(i, coupon);},1000);
}

function preProcessor(i, coupon){
  $s('#spc-gcpromoinput').val(coupon);
  $s('.redeem-gc-right').find('input').click();
  ////////console.log("Coupon Code applied " + coupon);
  setTimeout(function(){changeFlag(i, coupon);},2000);
}

function temp(coupon, i, lenArray){

  if(lenArray==100){
    $s('.hdc-loading').html('Automatically applying the best coupon now !');
    $s('.hdc-lb-progress').text("100% Complete");
    $s('.hdc-lb-fg').css("width", "100%");
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
  setTimeout(function(){temp(coupon, i, lenArray);},1000);
}
  //setTimeout(function(){preProcessor(i, coupon, initialamount);},7000*i);
  //setTimeout(function(){couponApplied(initialamount);},7000*(i) + 3500); 
}

function endProcess(i){
  ////////console.log("called with " + i);
  if(flagCoupon[i]==0){
////////console.log("Process terminated");
max = -111111;
ind_req = 1000;
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
    duration: 1000,
    easing: "linear"
  });
  chrome.runtime.sendMessage({savings: max}, function(response) {});
}
else {
  $s('.hatke-discount-cover').css("display", "none");
  $s('.hatke-discount-cover:eq(2)').css("display", "block");
} 
////////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}

function applyCoupons(coupons){
 couponsArray = coupons.split("~");
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
function getCoupons(){
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $s('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 18}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startAmazCpn, []);
}

function startAmazCpn(data, passBack){
  var mytext = data;
      //////console.log("Coupons " + mytext);

      couponsLength = mytext.split("~").length - 1;
      $s('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
      applyCoupons(mytext); 
}

function removeTheCover(){
  if($s('.hatke-discount-cover').length>0){
    $s('.hatke-discount-cover').css("display", "none"); 
  }
}


function couponCheck(){
  var curURL = window.location.href;
////////console.log("CP Check was called");
if(curURL.split('handlers/display.html').length>1){
  var imgURL = chrome.extension.getURL("apply-coupon.png");
  ////////console.log("TEst passed");
  if($s('#gc-error').length>0){
    $s('#gc-error').before("<a id='couponClick' href='javascript:void();'><img style='margin-left:65px;' src='" + imgURL + "'></a>");
    addToDOM();
    //newcode
    $s('.hd-cover-close').click(function(){
window.location.reload();  
});
    $s('.hdc-button:eq(2)').click(function(){
window.location.reload();  
});
    //newcode
    var button = document.getElementById("couponClick");
    button.addEventListener("click", function(){
      getCoupons();
    }, false);
  }
  else {
    setTimeout(function(){couponCheck();},1000);
  }
}

}

couponCheck();

flagToDisp = 0; strToDisp = ""; clsToUse = ""; diff = 0;
chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
 arrayRes = response.farewell;
 var currentURL = window.location.href;
 var filterURL = currentURL.split("?ref=")[0];
 filterURL = filterURL.split("ref=")[0];
 filterURL = filterURL.split("?")[0];

 myPrice = getPrice();
 if(typeof(response.farewell) == "undefined" || !(response.farewell) || response.farewell=="null" || response.farewell==null){
  response.farewell = "";
}
for(i=0;i<response.farewell.length;i++){
  var currentURL2 = response.farewell[i].link;
  var filterURL2 = currentURL2.split("?ref=")[0];
  filterURL2 = filterURL2.split("ref=")[0];
  filterURL2 = filterURL2.split("?")[0];
   ////////console.log(filterURL , filterURL2);
   if(filterURL2==filterURL || filterURL2 == filterURL + "?" || filterURL2 + "?" == filterURL){
    ////////console.log("match found");
    if(myPrice!=0){
      response.farewell[i].cur_price = myPrice;
    }
    if(response.farewell[i].price_added >= response.farewell[i].cur_price){
     clsToUse = "dec-hatke";
     diff = response.farewell[i].price_added - response.farewell[i].cur_price;
   }
   else {
     clsToUse = "inc-hatke";
     diff = response.farewell[i].cur_price - response.farewell[i].price_added;
   }


   chrome.runtime.sendMessage({email: "haiKya"}, function(response) {
  ////////console.log(response.farewell)
  if(response.farewell=="No"){
    displayCSS = "block";
    emailMsg = "Please enter your email if you want to receive a mail on price drops";
  }
  else {
    displayCSS = "none";
    emailMsg = "An email will be sent to " + response.farewell + " as soon as the price drops ! <a href='javascript:void();' id='changeEmail' style='color:blue;'>Change Email-ID</a>";
  }
  ////////console.log("case 840");
  ////////console.log("Current length1 is " + $s('.hk-am_rfix').length);
  var imgg = chrome.extension.getURL("hk-a-wp-1.png");
  var imgg2 = chrome.extension.getURL("hk-a-wp-2.png");
  strToDisp = '<div class="hk-am_rfix hk-wp-set" id="hk-wp" style="position: fixed;z-index: 1000000;right: -220px;top: 65%;margin-top: 10px;"><a id="toggleEffect" class="hk-a-op" href="#" style="position: relative;display: inline-block;"><img src="' + imgg + '"><img src="' + imgg2 + '" style="position: absolute;left: 0;z-index: -1;top:0"></a><div class="pricealert_hatke" style="width: 220px;min-height: 145px; top: 0;vertical-align: top; margin: 0;"><div class="price_hatke-wrap" style="padding-top:20px;"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a id="removeMe2" href="#">Remove</a><div id="addEmailBH" style="text-align: center;margin-top:10px;"><input style="display:' + displayCSS + '" id="BhEmail" type="text" value="" style="padding: 5px;border-radius: 3px;border: 1px solid #ccc;"><input style="display:' + displayCSS + '" id="BhButton" type="button" value="Enter Email" style="padding: 6px;margin: 7px auto;cursor: pointer;display: block;width: 90%;background: #0db2db;color: white;border: 1px solid #0d99cc;border-radius: 3px;"><br><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;">' + emailMsg + '</div></div></div></div></div>';

  flagToDisp = 1;
    ////////console.log("Set flag to 1");
    $s('body').append(strToDisp);

    if(displayCSS=="block"){
      var button4 = document.getElementById("BhButton");
      button4.addEventListener("click", function(){
        addEmailID(document.getElementById('BhEmail').value);
        document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>'
      }, false);
    }
    else if(displayCSS=="none"){
      var button5 = document.getElementById("changeEmail");
      button5.addEventListener("click", function(){
        document.getElementById('addEmailBH').innerHTML = '<input id="BhEmail" type="text" value="" style="padding: 5px;border-radius: 3px;border: 1px solid #ccc;"><input id="BhButton" type="button" value="Enter Email" style="padding: 6px;margin: 7px auto;cursor: pointer;display: block;width: 90%;background: #0db2db;color: white;border: 1px solid #0d99cc;border-radius: 3px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you want to get a mail when the price drops</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>';
        var button6 = document.getElementById("BhButton");
        button6.addEventListener("click", function(){
          addEmailID(document.getElementById('BhEmail').value);
          document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>'

        }, false);
      }, false);
}
var button2 = document.getElementById("toggleEffect");
   //alert(button2);
   button2.addEventListener("click", function(){
    //////console.log("Current val is " + button2.parentNode.style.right);
    if(button2.parentNode.style.right == "0px"){
      button2.parentNode.style.right = "-220px";
    }
    else {
      button2.parentNode.style.right = "0px";
    }
  }, false);

   var button = document.getElementById("removeMe2");
   button.addEventListener("click", function(){
    removeAlert();
    document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
   $s('.hk-am_rfix').removeClass("hk-wp-set");
   $s('.hk-am_rfix').addClass("hk-wp");
 }, false);

 });

    //strToDisp = '<div class="hk-am_rfix hk-wp-set" id="#hk-wp" style="position: fixed;z-index: 1000000;right: -220;top: 50%;margin-top: 10px;"><img src="https://compare.buyhatke.com/images/hk-a-wp-i.png" style="display:none" class="hk-am_ri"><a class="hk-a-op" href="#" style="margin-right: -4px;position: relative;display: inline-block;"><img src="https://compare.buyhatke.com/images/hk-a-wp-1.png"><img src="https://compare.buyhatke.com/images/hk-a-wp-2.png" style="position: absolute;left: 0;z-index: -1;top:0"></a><div class="pricealert_hatke" style="width: 220px;height: 145px; top: 0;vertical-align: top; margin: 0;"><a href="#" class="hk-a-cl" style="position: absolute;right: 12px;top: 5px;color: #666;">x</a><div class="price_hatke-wrap" style="padding-top:53px;"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + response.farewell[i].price_added + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div></div>';
     //strToDisp = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + response.farewell[i].price_added + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';

   }
 }
  ////////console.log("Flag curr value is " + flagToDisp);
  if(flagToDisp==0){
    if($s('.product').length>0 || $s('#price_feature_div').length>0 || $s('#centerCol').length>0){
      chrome.runtime.sendMessage({email: "haiKya"}, function(response) {
  ////////console.log(response.farewell)
  if(response.farewell=="No"){
    displayCSS = "block";
    emailMsg = "Please enter your email if you want to receive a mail on price drops";
  }
  else {
    displayCSS = "none";
    emailMsg = "An email will be sent to " + response.farewell + " as soon as the price drops ! <a href='javascript:void();' id='changeEmail' style='color:blue;'>Change Email-ID</a>";
  }
  ////////console.log("case 890 " + flagToDisp);
  ////////console.log("Current length2 is " + $s('.hk-am_rfix').length);
  if(flagToDisp==0 && $s('.hk-am_rfix').length==0){
  //$s('body').append('<div class="hk-am_rfix hk-wp" id="#hk-wp" style="position: fixed;z-index: 1000000;right: -220px;top: 50%;margin-top: 10px;"><a class="hk-a-op" href="#" id="addWatchList" style="position: relative;display: inline-block;"><img src="https://compare.buyhatke.com/images/hk-a-wp-1.png"><img src="https://compare.buyhatke.com/images/hk-a-wp-2.png" style="position: absolute;left: 0;z-index: -1;top:0"></a><div class="pricealert_hatke" style="width: 220px;min-height: 145px; top: 0;vertical-align: top; margin: 0;"><a href="#" class="hk-a-cl" style="position: absolute;right: 12px;top: 5px;color: #666;">x</a><div class="price_hatke-wrap" style="padding-top:40px;"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="#">Remove</a><div id="addEmailBH" style="text-align: center;margin-top:10px;"><input style="display:' + displayCSS + '" id="BhEmail" type="text" value="" style="padding: 5px;margin-right: 6px;border-radius: 3px;border: 1px solid #ccc;"><input style="display:' + displayCSS + '" id="BhButton" type="button" value="Enter Email" style="padding: 3px 8px 3px 8px;margin: 7px"><br><div class="line fk-font-12" style="margin-bottom: 4px;">' + emailMsg + '</div></div></div></div></div>');

  $s('body').append('<div class="hk-am_rfix hk-wp" id="hk-wp" style="position: fixed;z-index: 1000000;right: -220px;top: 65%;margin-top: 10px;"><a id="toggleEffect" class="hk-a-op" href="#" style="position: relative;display: inline-block;"><img id="addWatchList" src="https://compare.buyhatke.com/images/hk-a-wp-1.png"><img src="https://compare.buyhatke.com/images/hk-a-wp-2.png" style="position: absolute;left: 0;z-index: -1;top:0"></a><div class="pricealert_hatke" style="width: 220px;min-height: 145px; top: 0;vertical-align: top; margin: 0;"><div class="price_hatke-wrap" style="padding-top:20px;"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a id="removeMe2" href="#">Remove</a><div id="addEmailBH" style="text-align: center;margin-top:10px;"><input style="display:' + displayCSS + '" id="BhEmail" type="text" value="" style="padding: 5px;border-radius: 3px;border: 1px solid #ccc;"><input style="display:' + displayCSS + '" id="BhButton" type="button" value="Enter Email" style="padding: 6px;margin: 7px auto;cursor: pointer;display: block;width: 90%;background: #0db2db;color: white;border: 1px solid #0d99cc;border-radius: 3px;"><br><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;">' + emailMsg + '</div></div></div></div></div>');

  if(displayCSS=="block"){
    var button4 = document.getElementById("BhButton");
    button4.addEventListener("click", function(){
      addEmailID(document.getElementById('BhEmail').value);
      document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>'
    }, false);
  }
  else if(displayCSS=="none"){
    var button5 = document.getElementById("changeEmail");
    button5.addEventListener("click", function(){
      document.getElementById('addEmailBH').innerHTML = '<input id="BhEmail" type="text" value="" style="padding: 5px;border-radius: 3px;border: 1px solid #ccc;"><input id="BhButton" type="button" value="Enter Email" style="padding: 6px;margin: 7px auto;cursor: pointer;display: block;width: 90%;background: #0db2db;color: white;border: 1px solid #0d99cc;border-radius: 3px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you want to get a mail when the price drops</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>';
      var button6 = document.getElementById("BhButton");
      button6.addEventListener("click", function(){
        addEmailID(document.getElementById('BhEmail').value);
        document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div><div id="bhWidget" class="line fk-font-12" style="margin-bottom: 4px;"></div>'

      }, false);
    }, false);
}

var button = document.getElementById("addWatchList");
    //alert(button);
    if(button != undefined){
      button.addEventListener("click", function(){
      //alert("Added click handler");
      addToWatchList();
      $s('.hk-am_rfix').removeClass("hk-wp");
      $s('.hk-am_rfix').addClass("hk-wp-set");
    }, false);
    }

    var button2 = document.getElementById("toggleEffect");
   //alert(button2);
   button2.addEventListener("click", function(){
    //////console.log("Current val is " + button2.parentNode.style.right);
    if(button2.parentNode.style.right == "0px"){
      button2.parentNode.style.right = "-220px";
    }
    else {
      button2.parentNode.style.right = "0px";
    }
  }, false);

   var button = document.getElementById("removeMe2");
   button.addEventListener("click", function(){
    removeAlert();
    document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
   $s('.hk-am_rfix').removeClass("hk-wp-set");
   $s('.hk-am_rfix').addClass("hk-wp");
 }, false);


 }

});
}


}

  ////////console.log(response.farewell);
});


function blinker(){
  if (cancel==false) {
    elem1.style.background="linear-gradient(to bottom, #eaefb5 0%,#e1e9a0 100%)";
    elem1.style.borderColor="#6b6";
    setTimeout("elem1.style.background=''", 1200);
    setTimeout("elem1.style.borderColor=''", 1200);
    setTimeout("blinker()",2400);}
    if (cancel==true){elem1.style.backgroundColor="#fbfbfb";elem1.style.borderColor="#ddd";}
  }

  $s = jQuery.noConflict();

  var imgURL2 = chrome.extension.getURL("watch-price1.png");

  function addEmailID(email){
    chrome.runtime.sendMessage({addEmail: email}, function(response) {
  ////////console.log("Email Added");
});
  }

  function addToWatchList() {
   // alert("Trying to set an alert");
   var myurl = "https://compare.buyhatke.com/addWatchList.php";

   myPrice = getPrice();
   prodName = getProd();
   var prod = prodName;
   var url = window.location.href;
   var filterURL2 = url.split("?ref=")[0];
   filterURL2 = filterURL2.split("ref=")[0];
   filterURL2 = filterURL2.split("?")[0];
   url = filterURL2;
   var image2 = getImage();

   var PID = getPID();

   var parameters =  encodeURIComponent(prod) + "~*~*" + myPrice + "~*~*" + encodeURIComponent(image2) + "~*~*" + encodeURIComponent(url) + "~*~*5" ;

////////console.log(parameters);

chrome.runtime.sendMessage({data: parameters}, function(response) {
  ////////console.log(response.farewell);
});

/*
chrome.runtime.sendMessage({email: "haiKya"}, function(response) {
  ////////console.log(response.farewell)
  if(response.farewell=="No"){
    var msg = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
    $s('#addWatchList').after(msg);
    var button = document.getElementById("BhButton");
button.addEventListener("click", function(){
  addEmailID(document.getElementById('BhEmail').value);
  document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'
}, false);
  }
  else {
    var msg = '<div id="addEmailBH"><div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! A mail will be sent to ' + response.farewell + ' as soon as price drops. <a href="javascript:void();" id="changeEmail" style="color:blue;">Change Email-ID</a></div></div>';
    $s('#addWatchList').after(msg);
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
});  */

//document.getElementById('bhWidget').innerHTML = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="https://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="https://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
/* var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false); */

}


prodName = getProd();
var name = prodName;
name = name.split("(")[0];
  name = name.split("[")[0];
  origProd = name;
  var nameS = name.split(" ");
  if(nameS.length<7){
    name = nameS.join("-");
  }
  else {
    name = nameS[0] + "-" + nameS[1] + "-" + nameS[2] + "-" + nameS[3] + "-" + nameS[4] + "-" + nameS[5] + "-" + nameS[6];
  }
  var url = "https://compare.buyhatke.com/products/" + name;



  var img_url = chrome.extension.getURL("amazon.png");

  var price = getPrice();
  var final2send = url.split("products/");
  var msgToSend = final2send[1] + "~*~*" + price;

  if($s('#nav-subnav').text().trim().split('Fashion Jewellery').length > 1 || $s('#nav-subnav').text().trim().split('Watches').length > 1){
    isApparels = true;
  }
  else {
    isApparels = false;
  }
  isApparels = false;
  var a = $s('body').text();
  if(a.split("ISBN-13:").length>1){
    isbn = a.split("ISBN-13:")[1].trim().split(" ")[0].trim().split("-").join("");
  ////////console.log(isbn);
}
else {
  isbn = false;
  ////////console.log("ISBN not found");
}

if(isbn){
  msgToSend = msgToSend + "moreData=null&isbn=" + isbn;
}

if(isApparels){
  msgToSend = msgToSend + "moreData=null";
  isApparels = false;
}

if(getProd()!=""){
    chrome.runtime.sendMessage({search: msgToSend}, function(response) {
    });
}

chrome.runtime.onMessage.addListener(
 function(request, sender) {
  ////////console.log(isApparels);
  if(isApparels){
    var results = request.results;
    $s('body').append(results);
    (function(a){a.tiny=a.tiny||{};a.tiny.carousel={options:{start:1,display:1,axis:"x",controls:true,pager:false,interval:false,intervaltime:3000,rewind:false,animation:true,duration:1000,callback:null}};a.fn.tinycarousel_start=function(){a(this).data("tcl").start()};a.fn.tinycarousel_stop=function(){a(this).data("tcl").stop()};a.fn.tinycarousel_move=function(c){a(this).data("tcl").move(c-1,true)};function b(q,e){var i=this,h=a(".viewport:first",q),g=a(".overview:first",q),k=g.children(),f=a(".ar-next:first",q),d=a(".ar-prev:first",q),l=a(".pager:first",q),w=0,u=0,p=0,j=undefined,o=false,n=true,s=e.axis==="x";function m(){if(e.controls){d.toggleClass("disable",p<=0);f.toggleClass("disable",!(p+1<u))}if(e.pager){var x=a(".pagenum",l);x.removeClass("active");a(x[p]).addClass("active")}}function v(x){if(a(this).hasClass("pagenum")){i.move(parseInt(this.rel,10),true)}return false}function t(){if(e.interval&&!o){clearTimeout(j);j=setTimeout(function(){p=p+1===u?-1:p;n=p+1===u?false:p===0?true:n;i.move(n?1:-1)},e.intervaltime)}}function r(){if(e.controls&&d.length>0&&f.length>0){d.click(function(){i.move(-1);return false});f.click(function(){i.move(1);return false})}if(e.interval){q.hover(i.stop,i.start)}if(e.pager&&l.length>0){a("a",l).click(v)}}this.stop=function(){clearTimeout(j);o=true};this.start=function(){o=false;t()};this.move=function(y,z){p=z?y:p+=y;if(p>-1&&p<u){var x={};x[s?"left":"top"]=-(p*(w*e.display));g.animate(x,{queue:false,duration:e.animation?e.duration:0,complete:function(){if(typeof e.callback==="function"){e.callback.call(this,k[p],p)}}});m();t()}};function c(){w=s?a(k[0]).outerWidth(true):a(k[0]).outerHeight(true);var x=Math.ceil(((s?h.outerWidth():h.outerHeight())/(w*e.display))-1);u=Math.max(1,Math.ceil(k.length/e.display)-x);p=Math.min(u,Math.max(1,e.start))-2;g.css(s?"width":"height",(w*k.length));i.move(1);r();return i}return c()}a.fn.tinycarousel=function(d){var c=a.extend({},a.tiny.carousel.options,d);this.each(function(){a(this).data("tcl",new b(a(this),c))});return this}}(jQuery));


    $s('#hr-title').click(function(){
     $s("#hatke-recommendations").animate({'bottom':0},500);
   })

    $s('#hr-close').click(function(){
     $s("#hatke-recommendations").animate({'bottom':-90},500);
   })

    $s(document).ready(function(){

      $s('#hatke-reco-cover').tinycarousel({display:4,duration: 700});

    });

  }
  else {
    var message = request.results;
    var results = JSON.parse(message);
    results.sort(compare);
    var origPrice = getPrice();
  ////////console.log(origProd);
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
    ////////console.log(results[i].prod + " " + results[i].price + " " + countArray[i]);
  }
  indexSelected = 0; notFound = 1;
  for(k=0; k< results.length; k++){
    if(results[k].score/totalLen > .5){
      indexSelected = k;
      notFound = 0;
      break;
    }
  }

  //console.log(" Final product " + results[indexSelected].prod + " " + results[indexSelected].price);

  if(isbn){
    indexSelected = 0;
  }

  results[indexSelected].link.split("buyhatke-21").join("");

  if(results[indexSelected].position==1){
    class_assigned = "class_ebay";
    image_var = "images/ebay2.png";
    siteName2 = "Ebay";
    if(results[indexSelected].link.split("rover").length==1){
     results[indexSelected]["link"]= "http://rover.ebay.com/rover/1/4686-127726-2357-24/2?&site=Partnership_MSP&mpre=" + encodeURIComponent(results[indexSelected]["link"]);
   }
 }
 else if(results[indexSelected].position==35){
  class_assigned = "class_ebay";
  image_var = "images/yebhi1.png";
  siteName2 = "Yebhi";
}
else if(results[indexSelected].position==63){
  class_assigned = "class_ebay";
  image_var = "images/amazon.png";
  siteName2 = "Amazon";
}
else if(results[indexSelected].position==30){
  class_assigned = "class_ebay";
  image_var = "images/indiaplaza1.png";
  siteName2 = "Indiaplaza";
}
else if(results[indexSelected].position==31){
  class_assigned = "class_ebay";
  image_var = "images/bookadda1.png";
  siteName2 = "Bookadda";
}
else if(results[indexSelected].position==129){
  class_assigned = "class_ebay";
  image_var = "images/snapdeal.png";
  siteName2 = "Snapdeal";
}
else if(results[indexSelected].position==50){
  class_assigned = "class_ebay";
  image_var = "images/jabong1.png";
  siteName2 = "Ebay";
}
else if(results[indexSelected].position==45){
  class_assigned = "class_ebay";
  image_var = "images/shpstop1.png";
  siteName2 = "ShoppersStop";
}
else if(results[indexSelected].position==929){
  class_assigned = "class_ebay";
  image_var = "images/by.png";
  siteName2 = "BabyOye";
}
else if(results[indexSelected].position==911){
  class_assigned = "class_ebay";
  image_var = "images/strawberrynet.png";
  siteName2 = "StrawBerryNet";
}
else if(results[indexSelected].position==939){
  class_assigned = "class_ebay";
  image_var = "images/hb.png";
  siteName2 = "Hushbabies";
}
else if(results[indexSelected].position==921){
  class_assigned = "class_ebay";
  image_var = "images/hk.png";
  siteName2 = "Healthkart";
}
else if(results[indexSelected].position==62){
  class_assigned = "class_ebay";
  image_var = "images/indiarush.png";
  siteName2 = "IndiaRush";
}
else if(results[indexSelected].position==2){
  class_assigned = "class_flip";
  image_var = "images/flipkart1.png";
  siteName2 = "Flipkart";
}
else if(results[indexSelected].position==99){
  class_assigned = "class_naap";
  image_var = "images/infibeam2.png";
  results[indexSelected].prod = (results[indexSelected].prod);
  siteName2 = "Infibeam";
}
else if(results[indexSelected].position==4){
  class_assigned = "class_naap";
  image_var = "images/homeshop181.png";
  siteName2 = "HomeShop18";
}
else if(results[indexSelected].position==7){
  class_assigned = "class_naap";
  image_var = "images/landmark1.png";
  siteName2 = "Landmark";
}
else if(results[indexSelected].position==13){
  class_assigned = "class_naap";
  image_var = "images/tradus2.png";
  siteName2 = "Tradus";

}
else if(results[indexSelected].position==22){
  class_assigned = "class_naap";
  image_var = "images/koovs1.png";
  siteName2 = "Koovs";
}
else if(results[indexSelected].position==333){
  class_assigned = "class_naap";
  image_var = "images/pepperfry1.png";
  siteName2 = "Pepperfry";
}
else if(results[indexSelected].position==11){
  class_assigned = "class_naap";
  image_var = "images/fnp1.png";
  siteName2 = "Flowers n Petals";
}
else if(results[indexSelected].position==5){
  class_assigned = "class_naap";
  image_var = "images/futurebazaar1.png";
  siteName2 = "FutureBazaar";
}
else if(results[indexSelected].position==98){
  class_assigned = "class_naap";
  image_var = "images/fashionara.png";
  siteName2 = "Fashionara";
}
else if(results[indexSelected].position==111){
  class_assigned = "class_naap";
  image_var = "images/myntra2.png";
  siteName2 = "Myntra";
}
else if(results[indexSelected].position==411){
  class_assigned = "class_naap";
  image_var = "images/grabmore.png";
  siteName2 = "GrabMore";
}
else if(results[indexSelected].position==421){
  class_assigned = "class_naap";
  image_var = "images/shopclues.png";
  siteName2 = "ShopClues";
}
else if(results[indexSelected].position==441){
  class_assigned = "class_naap";
  image_var = "images/naaptol.png";
  siteName2 = "Naaptol";
}
else if(results[indexSelected].position==471){
  class_assigned = "class_naap";
  image_var = "images/crossword.png";
  siteName2 = "Crossword";
}
else if(results[indexSelected].position==461){
  class_assigned = "class_naap";
  image_var = "images/magmall.png";
  siteName2 = "Magazine Mall";
}
else if(results[indexSelected].position==91){
  class_assigned = "class_naap";
  image_var = "images/floralis.png";
  siteName2 = "Ebay";
}
else if(results[indexSelected].position==401){
  class_assigned = "class_naap";
  image_var = "images/indtimesshopping.png";
  siteName2 = "IndiaTimes Shopping";
}
else if(results[indexSelected].position==393){
  class_assigned = "class_naap";
  image_var = "images/adexmart.png";
  siteName2 = "Adexmart";
}
else if(results[indexSelected].position==373){
  class_assigned = "class_naap";
  image_var = "images/phoolwala.png";
  siteName2 = "PhoolWala";
}
else if(results[indexSelected].position==73){
  class_assigned = "class_naap";
  image_var = "images/goodlife.png";
  siteName2 = "GoodLife";
}
else if(results[indexSelected].position==37){
  class_assigned = "class_naap";
  image_var = "images/jewelkart.jpg";
  siteName2 = "JewelsKart";
}
else if(results[indexSelected].position==57){
  class_assigned = "class_naap";
  image_var = "images/lenskart.jpg";
  siteName2 = "LensKart";
}
else if(results[indexSelected].position==47){
  class_assigned = "class_naap";
  image_var = "images/bagskart.jpg";
  siteName2 = "BagsKart";
}
else if(results[indexSelected].position==67){
  class_assigned = "class_naap";
  image_var = "images/watch.jpeg";
  siteName2 = "WatchKart";
}
else if(results[indexSelected].position==69){
  class_assigned = "class_naap";
  image_var = "images/next.png";
  siteName2 = "Next.co.in";
}
else if(results[indexSelected].position==71){
  class_assigned = "class_naap";
  image_var = "images/croma.png";
  siteName2 = "CromaRetail";
}
else if(results[indexSelected].position==412){
  class_assigned = "class_naap";
  image_var = "images/craftsvilla.png";
  siteName2 = "Craftsvilla";
}
else if(results[indexSelected].position==469){
  class_assigned = "class_naap";
  image_var = "images/cilory.png";
  siteName2 = "Cilory";
}
else if(results[indexSelected].position==429){
  class_assigned = "class_naap";
  image_var = "images/zivame.png";
  siteName2 = "Zivame";
}
else if(results[indexSelected].position==151){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/uread.png";
  siteName2 = "Uread";
}
else if(results[indexSelected].position==291){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/rediffbooks.png";
  siteName2 = "Rediff";
}
else if(results[indexSelected].position==331){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/acadzone.png";
  siteName2 = "AcadZone";
}
else {
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/unavail_logo.png";
  siteName2 = "Others";
}

string = '<div id="dd_menu_list"><ul>';

for(i=0;i<results.length;i++){

  if(results[i].position==1){
    class_assigned = "class_ebay";
    image_name = "https://compare.buyhatke.com/images/ebay2.png";
    siteName = "Ebay";
    if(results[i].link.split("rover").length==1){
     results[i]["link"]= "http://rover.ebay.com/rover/1/4686-127726-2357-24/2?&site=Partnership_MSP&mpre=" + encodeURIComponent(results[i]["link"]);
   }
 }
 else if(results[i].position==35){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/yebhi1.png";
  siteName = "Yebhi";
}
else if(results[i].position==63){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/amazon.png";
  siteName = "Amazon";
}
else if(results[i].position==30){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/indiaplaza1.png";
  siteName = "Indiaplaza";
}
else if(results[i].position==31){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/bookadda1.png";
  siteName = "Bookadda";
}
else if(results[i].position==129){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/snapdeal.png";
  siteName = "Snapdeal";
}
else if(results[i].position==50){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/jabong1.png";
  siteName = "Ebay";
}
else if(results[i].position==45){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/shpstop1.png";
  siteName = "ShoppersStop";
}
else if(results[i].position==929){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/by.png";
  siteName = "BabyOye";
}
else if(results[i].position==911){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/strawberrynet.png";
  siteName = "StrawBerryNet";
}
else if(results[i].position==939){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/hb.png";
  siteName = "Hushbabies";
}
else if(results[i].position==921){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/hk.png";
  siteName = "Healthkart";
}
else if(results[i].position==62){
  class_assigned = "class_ebay";
  image_name = "https://compare.buyhatke.com/images/indiarush.png";
  siteName = "IndiaRush";
}
else if(results[i].position==2){
  class_assigned = "class_flip";
  image_name = "https://compare.buyhatke.com/images/flipkart1.png";
  siteName = "Flipkart";
}
else if(results[i].position==99){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/infibeam2.png";
  results[i].prod = (results[i].prod);
  siteName = "Infibeam";
}
else if(results[i].position==4){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/homeshop181.png";
  siteName = "HomeShop18";
}
else if(results[i].position==7){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/landmark1.png";
  siteName = "Landmark";
}
else if(results[i].position==13){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/tradus2.png";
  siteName = "Tradus";

}
else if(results[i].position==22){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/koovs1.png";
  siteName = "Koovs";
}
else if(results[i].position==333){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/pepperfry1.png";
  siteName = "Pepperfry";
}
else if(results[i].position==11){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/fnp1.png";
  siteName = "Flowers n Petals";
}
else if(results[i].position==5){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/futurebazaar1.png";
  siteName = "FutureBazaar";
}
else if(results[i].position==98){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/fashionara.png";
  siteName = "Fashionara";
}
else if(results[i].position==111){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/myntra2.png";
  siteName = "Myntra";
}
else if(results[i].position==411){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/grabmore.png";
  siteName = "GrabMore";
}
else if(results[i].position==421){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/shopclues.png";
  siteName = "ShopClues";
}
else if(results[i].position==441){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/naaptol.png";
  siteName = "Naaptol";
}
else if(results[i].position==471){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/crossword.png";
  siteName = "Crossword";
}
else if(results[i].position==461){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/magmall.png";
  siteName = "Magazine Mall";
}
else if(results[i].position==91){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/floralis.png";
  siteName = "Ebay";
}
else if(results[i].position==401){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/indtimesshopping.png";
  siteName = "IndiaTimes Shopping";
}
else if(results[i].position==393){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/adexmart.png";
  siteName = "Adexmart";
}
else if(results[i].position==373){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/phoolwala.png";
  siteName = "PhoolWala";
}
else if(results[i].position==73){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/goodlife.png";
  siteName = "GoodLife";
}
else if(results[i].position==37){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/jewelkart.jpg";
  siteName = "JewelsKart";
}
else if(results[i].position==57){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/lenskart.jpg";
  siteName = "LensKart";
}
else if(results[i].position==47){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/bagskart.jpg";
  siteName = "BagsKart";
}
else if(results[i].position==67){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/watch.jpeg";
  siteName = "WatchKart";
}
else if(results[i].position==69){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/next.png";
  siteName = "Next.co.in";
}
else if(results[i].position==71){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/croma.png";
  siteName = "CromaRetail";
}
else if(results[i].position==412){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/craftsvilla.png";
  siteName = "Craftsvilla";
}
else if(results[i].position==469){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/cilory.png";
  siteName = "Cilory";
}
else if(results[i].position==429){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/zivame.png";
  siteName = "Zivame";
}
else if(results[i].position==151){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/uread.png";
  siteName = "Uread";
}
else if(results[i].position==291){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/rediffbooks.png";
  siteName = "Rediff";
}
else if(results[i].position==331){
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/acadzone.png";
  siteName = "AcadZone";
}
else {
  class_assigned = "class_naap";
  image_name = "https://compare.buyhatke.com/images/unavail_logo.png";
  siteName = "Others";
}

if(i==0){
var temp_link = results[i].link;
  temp_link = temp_link.split("tag%3Dbuyhatke-21")[0]; 
  temp_link = temp_link + "&force_aff=0";
  results[i].link = temp_link;
}

string = string + '<li><a target="_blank" href="' + results[i].link + '"><div class="itemWrap"><div class="imageDiv_wrap"><div class="imageDiv"><img src="' + results[i].image + '"></div></div><div class="prod_right"><div class="prodName">' + results[i].prod + '</div><div class="storeRow"><div class="prodPrice"><img src="https://compare.buyhatke.com/images/rupeeK.png">' + results[i].price + '</div><div class="prodStore"><img src="' + image_name + '"></div></div></div></div></a></li>';
}

string = string + '</ul></div>';

string2 = '<footer><div id="dd_menu_footer"><iframe src="http://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FBuyHatke&amp;width=450&amp;height=35&amp;colorscheme=light&amp;layout=standard&amp;action=like&amp;show_faces=false&amp;send=false&amp;appId=205177396285577" scrolling="no" style="border: none;overflow: hidden;width: 230px;height: 30px;float: left;" allowtransparency="true" frameborder="0"></iframe> <a href="mailto:wecare@buyhatke.com">Send Feedback</a></div></footer></div></div><div id="share_buttons">Share: <a class="dd_share_buttons" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="https://compare.buyhatke.com/images/fbs.png"></a><a class="dd_share_buttons" href="https://plus.google.com/share?url=http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"></a><a class="dd_share_buttons" href="http://twitter.com/home?status=Try the amazing CompareHatke Chrome Extension!+http%3A%2F%2Fextension.buyhatke.com" target="_blank"><img src="https://compare.buyhatke.com/images/tweet.png"></a></div></div><a href="#" id="detailClose">&#x25B2; hide</a></div></div>';

if(parseInt(results[indexSelected].price)<=parseInt(origPrice)&&notFound==0&&document.getElementById('detailOutWrap') == null) {
  var temp_link = results[indexSelected].link;
  temp_link = temp_link.split("tag%3Dbuyhatke-21")[0]; 
  temp_link = temp_link + "&force_aff=0";
  results[indexSelected].link = temp_link;
  //console.log("Link now is " + results[indexSelected].link);
  $s('body').before('<div id="returnHidden" title="Bring back Buyhatke Price Comparison Bar"><span>&#x25BC;</span><img id="details_logo" src="https://compare.buyhatke.com/images/logo_small.png"></div><div id="detailOutWrap"><div id="detailInWrap"><a target="_blank" href="https://compare.buyhatke.com" title="Visit Buyhatke"><img id="details_logo" src="https://compare.buyhatke.com/images/logo_small.png"></a><div id="details">Hurray !  Massive savings found. This product is available for <span id="detail_cost"><img src="https://compare.buyhatke.com/images/rupeeK.png"> ' + results[indexSelected].price + '</span> at <span id="detail_store">' + siteName2 + '</span><a style="display:inline!important;" href="' + results[indexSelected].link + '" target="_blank"><input type="button" value=" BUY IT NOW" ></a>or<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><head><div id="dd_menu_header">Showing <span>' + results.length + '</span> results</div></head>' + string + string2);

  $s('header').css("margin-top", "45px");
  $s('#navbar').css("margin-top", "45px");
  $s('#navbar').css("margin-top", "45px!important");
  $s('body').css("padding-top", "45px!important");
  $s("#dd_menu_list").hover(
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
    hideBar();
    $s('header').css("margin-top", "0px");
    $s('#navbar').css("margin-top", "0px");
    $s('body').css("padding-top", "0px!important");
  }, false);

  var button2 = document.getElementById("returnHidden");
  button2.addEventListener("click", function() {
    showBar();
    $s('header').css("margin-top", "45px");
    $s('#navbar').css("margin-top", "45px");
    $s('#navbar').css("margin-top", "45px!important");
    $s('body').css("padding-top", "45px!important");
  }, false);



  cancel=false;
  elem1=document.getElementById("compare_now");
  blinker();

}

else if(results.length>0&&document.getElementById('detailOutWrap') == null){
  var temp_link = results[indexSelected].link;
  temp_link = temp_link.split("tag%3Dbuyhatke-21")[0]; 
  temp_link = temp_link + "&force_aff=0";
  results[indexSelected].link = temp_link;
  //console.log("Link now is " + results[indexSelected].link);
  $s('body').before('<div id="returnHidden" title="Bring back Buyhatke Price Comparison Bar"><span>&#x25BC;</span><img id="details_logo" src="https://compare.buyhatke.com/images/logo_small.png"></div><div id="detailOutWrap"><div id="detailInWrap"><a target="_blank" href="https://compare.buyhatke.com" title="Visit Buyhatke"><img id="details_logo" src="https://compare.buyhatke.com/images/logo_small.png"></a><div id="details">Hurray !  Other variants for this product is available for <span id="detail_cost"><img src="https://compare.buyhatke.com/images/rupeeK.png"> ' + results[indexSelected].price + '</span> at <span id="detail_store">' + siteName2 + '</span><a style="display:inline!important;" href="' + results[indexSelected].link + '" target="_blank"><input type="button" value=" BUY IT NOW" ></a>or<div class="drop_down" id="compare_now" onmouseover="cancel=true;">COMPARE PRICES<div class="drop_down_symbol"></div><div id="dd_menu"><head><div id="dd_menu_header">Showing <span>' + results.length + '</span> results</div></head>' + string + string2);
  $s('header').css("margin-top", "45px");
  $s('#navbar').css("margin-top", "45px");
  $s('#navbar').css("margin-top", "45px!important");
  $s('body').css("padding-top", "45px!important");
  $s("#dd_menu_list").hover(
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
    hideBar();
    $s('header').css("margin-top", "0px");
    $s('#navbar').css("margin-top", "0px");
    $s('body').css("padding-top", "0px!important");
  }, false);

  var button2 = document.getElementById("returnHidden");
  button2.addEventListener("click", function() {
    showBar();
    $s('header').css("margin-top", "45px");
    $s('#navbar').css("margin-top", "45px");
    $s('#navbar').css("margin-top", "45px!important");
    $s('body').css("padding-top", "45px!important");
  }, false);

  cancel=false;
  elem1=document.getElementById("compare_now");
  blinker();

}

else if(document.getElementById('detailOutWrap') == null){



 $s('body').before('<div id="detailOutWrap"><div id="detailInWrap"><div id="details">Hurray !  Massive savings found. Click to know more <a href="' + url + '" target="_blank"><input type="button" value=" COMPARE PRICES"></a><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fextension.buyhatke.com" id="notify_fshare"></a></div><a href="#" id="detailClose" >x</a></div></div>');
 $s('header').css("margin-top", "45px");
 $s('#navbar').css("margin-top", "45px");
 $s('#navbar').css("margin-top", "45px!important");
 $s('body').css("padding-top", "45px!important");



 var button = document.getElementById("detailClose");
 button.addEventListener("click", function() {
  document.getElementById('detailOutWrap').style.display = "none";
  $s('header').css("margin-top", "0px");
  $s('#navbar').css("margin-top", "0px");
  $s('body').css("padding-top", "0px!important");
}, false);

}

var check = getCookie("comparisonHidden");
////////console.log("Check value is " + check);
if(check==1){
  hideBar();
}

}

});

