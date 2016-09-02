function compare(a,b) {
  if (parseInt(a.price) < parseInt(b.price))
     return -1;
  if (parseInt(a.price) > parseInt(b.price))
    return 1;
  return 0;
}

function reportPurchase(){
  var curURL = window.location.href;
  if(curURL.split('checkoutsummary').length>1){
    chrome.runtime.sendMessage({processDONE: "Trendin"}, function(response) {
    });
  }
}

reportPurchase();

function sendPairs(){
  arrayToSend = [];

  if($('.imgBox').length > 0){
    var slider = $('.imgBox');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.imgBox:eq('+ i +')').find('a').length > 0){
        link = $('.imgBox:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          PID = link;
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.imgBox:eq('+ i +')').find('.salePrice').length > 0){
            price = $('.imgBox:eq('+  i +')').find('.salePrice').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } //1st if ends

  if($('.prodThumb').length > 0){
    var slider = $('.prodThumb');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.prodThumb:eq('+ i +')').find('.foot a').length > 0){
        link = $('.prodThumb:eq('+ i +')').find('.foot a:eq(0)').attr('href');
        if(link != ""){ 
          PID = link;
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.prodThumb:eq('+ i +')').find('.price').length > 0){
            price = $('.prodThumb:eq('+  i +')').find('.price').text();
            if(price.split("Rs.").length > 1){
              price = price.split("Rs.");
              price = price[1];
            }
            
            price = price.split(",").join("").trim();

          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } 

  if($('#bestseller li').length > 0){
    var slider = $('#bestseller li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('#bestseller li:eq('+ i +')').find('a').length > 0){
        link = $('#bestseller li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          PID = link;
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('#bestseller li:eq('+ i +')').find('.price').length > 0){
            if($('#bestseller li:eq('+ i +')').find('.price').html().split("</em>").length > 1){
              price = $('#bestseller li:eq('+ i +')').find('.price').html().split("</em>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }

            else{
              price = $('#bestseller li:eq('+ i +')').find('.price').text();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }
            price =price.split(",").join("").trim();
          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  } 

  if($('#handpicked li').length > 0){
    var slider = $('#handpicked li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('#handpicked li:eq('+ i +')').find('a').length > 0){
        link = $('#handpicked li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          PID = link;
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('#handpicked li:eq('+ i +')').find('.price').length > 0){
            if($('#handpicked li:eq('+ i +')').find('.price').html().split("</em>").length > 1){
              price = $('#handpicked li:eq('+ i +')').find('.price').html().split("</em>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }

            else{
              price = $('#handpicked li:eq('+ i +')').find('.price').text();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }
            price =price.split(",").join("").trim();
          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  }

  if($('.category-products li').length > 0){
    var slider = $('.category-products li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      PID = "";
      price = "";
      if($('.category-products li:eq('+ i +')').find('a').length > 0){
        link = $('.category-products li:eq('+ i +')').find('a:eq(0)').attr('href');
        if(link != ""){ 
          PID = link;
        }
        else{
          PID = "";
        }

        if(PID != ""){
          if($('.category-products li:eq('+ i +')').find('.price').length > 0){
            if($('.category-products li:eq('+ i +')').find('.price').html().split("</em>").length > 1){
              price = $('.category-products li:eq('+ i +')').find('.price').html().split("</em>");
              price = price[1];
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }

            else{
              price = $('.category-products li:eq('+ i +')').find('.price').text();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
            }
            price =price.split(",").join("").trim();
          }
        }

        else{
          price = "";
        }


        //prce ends
      } // if 2 ends
      if(PID != "" && price != ""){
        arrayToSend.push([PID, price]);
      }


    } //for loop ends
    
  }

  arrayToSend = JSON.stringify(arrayToSend);
  ////console.log(arrayToSend);
  chrome.runtime.sendMessage({pairsZoom: arrayToSend}, function(response) {
    });
}


function sendCurrent(){
  curData = [];
  var prod = "";
  var image = "";
  var myPrice = "";
  var PID = "";
  var cur_url = "";
  var current_status = 0;

  if($('.spec h2').length > 0){
    prod = $('.spec h2').text().trim();
  }
  else if($('.product-title').length > 0){
    prod = $('.product-title h1').text().trim();
  }
  else if($("h1").text() != ""){
    prod = $("h1:eq(0)").text().trim();
  }
  
  if($(".outofstock").length > 0){
    current_status = 1;
  }
  else{
    current_status = 0;
  }
  if(current_status == 0){
    if($("#myprice").length > 0){
      myPrice = $("#myprice").attr("value");
    }
    else if($('.amount').text().split("Rs.").length > 1)
    {
      myPrice = $('.amount').text().split("Rs.")[1].split(",").join("").trim();
    }
    else
    {
      myPrice = $('.amount').text().split(",").join("").trim();
    }
  }
  else{
    myPrice = "0";
  }
  image = $('.wrapper').find('img').eq(1).attr('src');
  if(image.split("http").length == 1){
    image = "http:" + image;
  }
  var link = window.location.href;
  if(link != ""){ 
    PID = link;
  }
  else{
    PID = "";
  }
  cur_url = window.location.href;
  curData.push([prod, image, myPrice, cur_url, current_status, PID]);
  curData = JSON.stringify(curData);
  ////console.log(curData);
  chrome.runtime.sendMessage({curDataZoom: curData}, function(response) {
        });
}


var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);


function addToWatchList() {
var myurl = "http://compare.buyhatke.com/addWatchList.php";
var name = $('.spec h2').text().trim();
                if($('.amount').text().split("Rs.").length > 1)
                {
                  var price = $('.amount').text().split("Rs.")[1].split(",").join("").trim();
                }
                else
                {
                  var price = $('.amount').text().split(",").join("").trim();
                }
                var image_url = $('.wrapper').find('img').eq(1).attr('src');
                if(image_url.split("http").length==1){
                  image_url = "http:" + image_url;
                }

var prod = name;
var myPrice = price;
var image2 = image_url;
var url = window.location.href;
var filterURL2 = url.split("?ref=")[0];
   filterURL2 = filterURL2.split("ref=")[0];
   filterURL2 = filterURL2.split("?")[0];
url = filterURL2;
var imgURL2 = chrome.extension.getURL("watch-price1.png");

var parameters =  encodeURIComponent(prod) + "~*~*" + myPrice + "~*~*" + encodeURIComponent(image2) + "~*~*" + encodeURIComponent(url) + "~*~*1005" ;

chrome.runtime.sendMessage({data: parameters}, function(response) {
  ////console.log(response.farewell);
});

chrome.runtime.sendMessage({email: "haiKya"}, function(response) {
  ////console.log(response.farewell)
  if(response.farewell=="No"){
    var msg = '<div id="addEmailBH"><input id="BhEmail" type="text" value="" style="min-height: 20px;margin-right: 6px;"><input id="BhButton" type="button" value="Enter Email" style="padding: 3px;padding-left: 8px;padding-right: 8px;"><br><div class="line fk-font-12" style="margin-bottom: 4px;">Enter your email if you wanna get a mail when the price drops</div></div>';
    $('#addWatchList').after(msg);
    var button = document.getElementById("BhButton");
button.addEventListener("click", function(){
  addEmailID(document.getElementById('BhEmail').value);
  document.getElementById('addEmailBH').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! An email has been sent to ' + document.getElementById('BhEmail').value + '. Please verify to start receiving price drop notifications. Do check your <b>SPAM</b> folder !</div>'
}, false);
  }
  else {
    var msg = '<div id="addEmailBH"><div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! A mail will be sent to ' + response.farewell + ' as soon as price drops. <a href="javascript:void();" id="changeEmail" style="color:blue;">Change Email-ID</a></div></div>';
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
});

document.getElementById('bhWidget').innerHTML = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="http://compare.buyhatke.com/images/rupeeK.png">' + myPrice + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price dec-hatke"><img class="dec_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeR.png">0<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);

}


flagToDisp = 0; strToDisp = ""; clsToUse = ""; diff = 0;
chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
   arrayRes = response.farewell;
   var currentURL = window.location.href;
   var filterURL = currentURL.split("?ref=")[0];
   filterURL = filterURL.split("ref=")[0];
   filterURL = filterURL.split("?")[0];
                if($('.amount').text().split("Rs.").length > 1)
                {
                  var price = $('.amount').text().split("Rs.")[1].split(",").join("").trim();
                }
                else
                {
                  var price = $('.amount').text().split(",").join("").trim();
                }

myPrice = price;
myPrice = parseFloat(myPrice);
  for(i=0;i<response.farewell.length;i++){
    var currentURL2 = response.farewell[i].link;
   var filterURL2 = currentURL2.split("?ref=")[0];
   filterURL2 = filterURL2.split("ref=")[0];
   filterURL2 = filterURL2.split("?")[0];
   ////console.log(filterURL , filterURL2);
   if(filterURL2==filterURL || filterURL2 == filterURL + "?" || filterURL2 == filterURL + "#" || filterURL2 + "?" == filterURL){
    ////console.log("match found");
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
     strToDisp = '<div class="pricealert_hatke"><div class="price_hatke-wrap"><div class="price_hatke-initiated"><span class="price_hatke-type">Set Price:</span><span class="price_hatke-price"><img src="http://compare.buyhatke.com/images/rupeeK.png">' + response.farewell[i].price_added + '</span></div><div class="price_hatke-difference"><span class="price_hatke-type">Price Change:</span><span class="price_hatke-price ' + clsToUse + '"><img class="dec_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeG.png"><img class="inc_rupee-hatke" src="http://compare.buyhatke.com/images/rupeeR.png">' + diff + '<div class="inc_dec-hatke-wrap"><img class="inc_dec-hatke" src="http://compare.buyhatke.com/images/price_change1.png"></div></span></div><a href="javascript:void();" id="removeMe2">Remove</a></div></div><div id="addWatchList"></div>';
    flagToDisp = 1;
    ////console.log("Flag " + flagToDisp);
    if(flagToDisp==1){
    if($('#bhWidget').length>0){
    document.getElementById('bhWidget').innerHTML  = strToDisp;
    var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);
     }
     else {
      if($('.priceInfo').length>0){
      $('.priceInfo').before(strToDisp);
      }
      else if($('.price-box').length>0 && $('.price-box').length == 1){
        $('.price-box').after(strToDisp);
      }
      var button = document.getElementById("removeMe2");
button.addEventListener("click", function(){
  removeAlert();
  document.getElementById('bhWidget').innerHTML = '<div class="line fk-font-12" style="margin-bottom: 4px;">Thank You ! We appreciate your motive to save energy :)</div>';
}, false);
     }
    }
   }
  }
  ////console.log(response.farewell);
});

if(flagToDisp==0){
  var imgURL2 = chrome.extension.getURL("watch-price1.png");
if($('.priceInfo').length>0){
$('.priceInfo').before('<div id="bhWidget" style="margin-left:80px;"><a id="addWatchList" style="margin-top: 4px;" alt="Add to Watch List" title="Add to BuyHatke Watch List and get notifications on price drop" href="javascript:void();" class="fk-inline-block buy-btn fksk-buy-btn"><img style="margin-left:-12px;" src=' + imgURL2 +'></a></div>');
 }
 else if($('.price-box').length>0 && $('.price-box').length == 1){
  $('.price-box').after('<div id="bhWidget" style="margin-left:80px;"><a id="addWatchList" style="margin-top: 4px;" alt="Add to Watch List" title="Add to BuyHatke Watch List and get notifications on price drop" href="javascript:void();" class="fk-inline-block buy-btn fksk-buy-btn"><img style="margin-left:-12px;" src=' + imgURL2 +'></a></div>');
 }

var button = document.getElementById("addWatchList");
if(button != undefined){
button.addEventListener("click", function(){
  addToWatchList();
}, false);
 }
}
else if($('.priceInfo').length>0){
  $('.priceInfo').before(strToDisp);
}
else if($('.price-box').length>0 && $('.price-box').length == 1){
  $('.price-box').after(strToDisp);
}

function removeAlert(){
  var currentURL = window.location.href;
  var filterURL = currentURL.split("?ref=")[0];
  filterURL = filterURL.split("ref=")[0];
  filterURL = filterURL.split("?")[0];
  ////console.log("Filtered URL " + filterURL);
  chrome.runtime.sendMessage({detailArray: "haiKya"}, function(response) {
  for(m=0;m<response.farewell.length;m++){
    var url2 = response.farewell[m].link;
    url2 = url2.split("?ref=")[0];
    url2 = url2.split("ref=")[0];
    url2 = url2.split("?")[0];
    if(url2==filterURL){
      sendId = response.farewell[m].link_id;
      chrome.runtime.sendMessage({removeURL: sendId}, function(response) {
  ////console.log("Removal request sent");
    });
    }
  }
}); 
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




var name = $('.spec h2').text().trim();
                if($('.amount').text().split("Rs.").length > 1)
                {
                  var price = $('.amount').text().split("Rs.")[1].split(",").join("").trim();
                }
                else
                {
                  var price = $('.amount').text().split(",").join("").trim();
                }
                var image_url = $('.wrapper').find('img').eq(1).attr('src');
                if(image_url.split("http").length==1){
                  image_url = "http:" + image_url;
                }


origProd = name;
name = name.split("(")[0];
var nameS = name.split(" ");
if(nameS.length<7){
name = nameS.join("-");
 }
 else {
 	name = nameS[0] + "-" + nameS[1] + "-" + nameS[2] + "-" + nameS[3] + "-" + nameS[4] + "-" + nameS[5] + "-" + nameS[6];
 }
var url = "http://compare.buyhatke.com/products/" + name;



var final2send = url.split("products/");
var msgToSend = final2send[1] + "~*~*" + price;
msgToSend = msgToSend + "moreData=isapparel=1";
chrome.runtime.sendMessage({search: msgToSend}, function(response) {
    });

chrome.runtime.onMessage.addListener(
 function(request, sender) {
  var results = request.results;
  $('body').append(results);
  (function(a){a.tiny=a.tiny||{};a.tiny.carousel={options:{start:1,display:1,axis:"x",controls:true,pager:false,interval:false,intervaltime:3000,rewind:false,animation:true,duration:1000,callback:null}};a.fn.tinycarousel_start=function(){a(this).data("tcl").start()};a.fn.tinycarousel_stop=function(){a(this).data("tcl").stop()};a.fn.tinycarousel_move=function(c){a(this).data("tcl").move(c-1,true)};function b(q,e){var i=this,h=a(".viewport:first",q),g=a(".overview:first",q),k=g.children(),f=a(".ar-next:first",q),d=a(".ar-prev:first",q),l=a(".pager:first",q),w=0,u=0,p=0,j=undefined,o=false,n=true,s=e.axis==="x";function m(){if(e.controls){d.toggleClass("disable",p<=0);f.toggleClass("disable",!(p+1<u))}if(e.pager){var x=a(".pagenum",l);x.removeClass("active");a(x[p]).addClass("active")}}function v(x){if(a(this).hasClass("pagenum")){i.move(parseInt(this.rel,10),true)}return false}function t(){if(e.interval&&!o){clearTimeout(j);j=setTimeout(function(){p=p+1===u?-1:p;n=p+1===u?false:p===0?true:n;i.move(n?1:-1)},e.intervaltime)}}function r(){if(e.controls&&d.length>0&&f.length>0){d.click(function(){i.move(-1);return false});f.click(function(){i.move(1);return false})}if(e.interval){q.hover(i.stop,i.start)}if(e.pager&&l.length>0){a("a",l).click(v)}}this.stop=function(){clearTimeout(j);o=true};this.start=function(){o=false;t()};this.move=function(y,z){p=z?y:p+=y;if(p>-1&&p<u){var x={};x[s?"left":"top"]=-(p*(w*e.display));g.animate(x,{queue:false,duration:e.animation?e.duration:0,complete:function(){if(typeof e.callback==="function"){e.callback.call(this,k[p],p)}}});m();t()}};function c(){w=s?a(k[0]).outerWidth(true):a(k[0]).outerHeight(true);var x=Math.ceil(((s?h.outerWidth():h.outerHeight())/(w*e.display))-1);u=Math.max(1,Math.ceil(k.length/e.display)-x);p=Math.min(u,Math.max(1,e.start))-2;g.css(s?"width":"height",(w*k.length));i.move(1);r();return i}return c()}a.fn.tinycarousel=function(d){var c=a.extend({},a.tiny.carousel.options,d);this.each(function(){a(this).data("tcl",new b(a(this),c))});return this}}(jQuery));


$('#hr-title').click(function(){
 $("#hatke-recommendations").animate({'bottom':0},500);
})

$('#hr-close').click(function(){
 $("#hatke-recommendations").animate({'bottom':-90},500);
})

$(document).ready(function(){

    $('#hatke-reco-cover').tinycarousel({display:4,duration: 700});

});

  });