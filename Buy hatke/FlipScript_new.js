alertPosition = 2;
current_pid = "";
current_url = "";

if(getCookie("hideDeal") == undefined || getCookie("hideDeal") == ""){
  setCookie("hideDeal", 0, 1);
}

function checkURL(){
  var url = window.location.href;
  // console.log(url + " " + current_url);
  var now_pid = getPID();
  if(current_url != url){
    // console.log("Successful");
    current_url = url;
    initProcessFlip();
  }
  if(current_pid != now_pid){
    current_pid = now_pid;
    $("#containerBHMain").remove();
    $("#bhWidget").remove();
    $("#ourSpecialLink").remove();
    $("#detailOutWrap").remove();
    $(".offers-info-wrap").remove();
    $(".hk-dpop").remove();
    $('body').css("margin-top", "0px");
    if(current_pid!=""){
      flipCall();
      if(getCookie("hideDeal") != 1){
        plotHotDeals();
        attachListeners();
      }
    }
 }
  
}

function hotDeals(resp){
    resp = JSON.parse(resp);
    if(resp[0] != "Hottest Deals"){
      var deal_text = "Checkout our Hand-picked deals in " + resp[0] + " category!";
    }
    else{
      var deal_text = "Checkout our Hand-picked Hottest Deals!";
    }
    // console.log("deal_text: "+deal_text);
    $(".hk-dpop-details--text").text(deal_text);
    $(".hk-dpop-wrap").attr("href", resp[1]);

}

function attachListeners(){
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
    var pos = 2;
    var PID = getPID();
    if(PID != ""){
      dealArr.push([PID, pos]);
      dealArr = JSON.stringify(dealArr);
      var jsonArr = [{'dealData': dealArr}];
      jsonArr = JSON.stringify(jsonArr);
      sendMessage(1, jsonArr, 18, hotDeals, []);
    }
  });

  

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
}

function reportPurchase(){
  var curURL = window.location.href;
  if(curURL.split('checkout').length>1){
    var jsonArr = [{'processDONE': "Flipkart"}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(0, jsonArr, 0, doNothing, []);
  }
}

reportPurchase();




window.setInterval(function(){ checkURL(); }, 800);
function plotFlipGraph(){
  if($("#containerBHMain").length == 0){
    // prod = getProd();
    // selectedFlag = 1;
    pidFlipkart = getPID();
    prod = getProd();
    var selector = [];
    selector.push({selector: '.top-section', attr: 'parent', pos: 'after'});
    selector.push({selector: '.mprod-section:eq(0)', attr: 'none', pos: 'after'});
    selector.push({selector: '._2fCBwf._3S6yHr:eq(0)', attr: 'parent', pos: 'after'});
    selector.push({selector: '._1GRhLX:eq(0)', attr: 'none', pos: 'after'});
    selector = JSON.stringify(selector);
    height = "1050px";
    var passBack = [{selectors: selector, height: height}];
    passBack = JSON.stringify(passBack);
    addGraphBase(passBack);
    var passBack1 = [{title: prod, siteName: 'Flipkart', price: getPrice()}];
    passBack1 = JSON.stringify(passBack1);
    prepareGraph(pidFlipkart, passBack1);

  var affRules = []; // Deals
  affRules.push({prePart: '', postPart: '&affid=buyhatkegm&affExtParam1=dealZone'});
  affRules = JSON.stringify(affRules);
  command = 2;
  var passBack2 = [{catName: 'this category', affRules: affRules, command: command}];
  passBack2 = JSON.stringify(passBack2);
  var command = 2;
  prepareDeals(pidFlipkart, passBack2, command);
}
}


function filterResults(data){
  if(getProd() != "" && getProd() != "undefined" && $("#detailOutWrap").length == 0){
    var results2 = JSON.parse(data);
    var results3 = [];
    mustValue2 = ""; mustValue = "";
    if(caseMobiles){
      origProd = origProd.split("-").join(" ");
      origProd = origProd.split(":").join(" ");
      origProd = origProd.split("+").join(" ");
      if($('.clp-breadcrumb').find('li:eq(1)').text().trim() == "Mobiles & Accessories"){
        origProd = origProd.split("(")[0];
      }
      else if($('._1joEet a:eq(1)').text().trim() == "Mobiles & Accessories"){
        origProd = origProd.split("(")[0];
      }
      origProd = origProd.split("(").join("");
        origProd = origProd.split(")").join("");
        origProd = origProd.split(",").join(" ");
        origArray = origProd.split(" ");
        for(l=0;l<results2.length;l++){
          reason = "NO";

          var found = 1;
          tempStart = results2[l].prod.split("-").join(" ");
          tempStart = tempStart.split("+").join(" ");
          results2[l].prod = tempStart.split(":").join(" ");

          for(m=0;m<origArray.length;m++){
            tempProd = " " + results2[l].prod + " ";
            tempProd = tempProd.split("(").join(" ");
              tempProd = tempProd.split(")").join(" ");
              tempProd = tempProd.split(",").join(" ");
              tempProd = tempProd.split("WiFi").join("WiFi Wi Fi");
              tempProd = tempProd.split("wifi").join("WiFi Wi Fi");
              tempMatch = " " + origArray[m] + " ";
              if((tempProd).toUpperCase().indexOf(tempMatch.toUpperCase())!=-1 || origArray[m].toUpperCase()=="TABLET" || origArray[m].toUpperCase()== "EDGE" || origArray[m].toUpperCase()=="MOBILE" || origArray[m].toUpperCase()=="HD" || origArray[m].toUpperCase()=="WITH" || origArray[m].toUpperCase()=="CALLING" || origArray[m].toUpperCase()=="SMART" || origArray[m].toUpperCase()=="PHONE" || origArray[m].toUpperCase()=="AND" || origArray[m]==" " || origArray[m]==""){}
                else {
                  found = 0;
                  reason = origArray[m];
                }
              }
    ////////////console.log(origProd + " " + results2[l].prod + " " + found + " " + reason + " " + results2[l].link);
    if(found==1){
      results3.push({
        prod : results2[l].prod,
        image : results2[l].image,
        price: results2[l].price,
        link: results2[l].link,
        position: results2[l].position
      });
    }
  }
  results2 = results3;
}
  ////console.log(results2);
  if($('._1joEet a').length>3 || $('.clp-breadcrumb').find('li').length>3){
    if($('._1joEet a:eq(3)').text().trim() == "Memory Cards & Readers" || $('.clp-breadcrumb').find('li:eq(3)').text().trim() == "Memory Cards & Readers"){
      origArray = origProd.split(" ");
      for(m=0;m<origArray.length;m++){
        if(origArray[m]=="Class"){
          mustValue = origArray[m+1];
          mustValue2 = "CLASS";
        }
      }
      ////////////console.log("MustValue1 " + mustValue);
      ////////////console.log("MustValue2 " + mustValue2);
      if(mustValue!=""&&mustValue2!=""){
        temp1 = mustValue;
        temp2 = mustValue2;
        mustValue2 = temp2 + " " + temp1;
        mustValue = temp2 + temp1;

        var results5 = [];
        for(k=0;k<results2.length;k++){
          if(results2[k].prod.toUpperCase().indexOf(mustValue)!=-1||results2[k].prod.toUpperCase().indexOf(mustValue2)!=-1){
            results5.push({
              prod : results2[k].prod,
              image : results2[k].image,
              price: results2[k].price,
              link: results2[k].link,
              position: results2[k].position
            });
          }
          else {
      ////////////console.log("Must Have test failed for " + results2[k].prod);
    }

  }
  results2 = results5;
}

}
}

////console.log(results2);

mustValue = "";
mustValue2 = "";

if(mustCheck){
  origArray = origProd.split(" ");
  for(m=0;m<origArray.length;m++){
    if(origArray[m]=="GB"){
      mustValue = origArray[m-1];
      mustValue2 = "GB";
    }
    else if(origArray[m]=="TB"){
      mustValue = origArray[m-1];
      mustValue2 = "TB";
    }
  }
  l = 0;
    ////////////console.log("MustValue1 " + mustValue);
    ////////////console.log("MustValue2 " + mustValue2);
    if(mustValue!=""&&mustValue2!=""){
      temp = mustValue;
      mustValue = mustValue + mustValue2;
      mustValue2 = temp + " " + mustValue2;
      var results = [];
      for(k=0;k<results2.length;k++){
        if(results2[k].prod.toUpperCase().indexOf(mustValue)!=-1||results2[k].prod.toUpperCase().indexOf(mustValue2)!=-1){
          results.push({
            prod : results2[k].prod,
            image : results2[k].image,
            price: results2[k].price,
            link: results2[k].link,
            position: results2[k].position
          });
        }
        else {
      ////////////console.log("Must Have test failed for " + results2[k].prod);
    }

  }
}
else {
  var results = results2;
}
}
else {
  var results = results2;
}
results7 = results;

////console.log(results);

if(uniqueCheck){
  cs = 0;
  mustHaveList2 = [];
  for(k=0;k<mustHaveList.length;k++){
    tempString = mustHaveList[k];
    tempNumber = tempString.match(/\d+/);
    if(tempNumber==null){
      mustHaveList2[cs] = tempString;
      cs = cs + 1;
    }
    else {
      tempNumber = tempNumber[0];
      if(isNaN(parseInt(tempString))){
        tempString2 = tempString.split(tempNumber);
        tempString2 = tempString2[0];
        mustHaveList2[cs] = tempString2;
        cs = cs + 1;
        mustHaveList2[cs] = tempNumber;
        cs = cs + 1;
      }
      else {
        tempString2 = tempString.split(tempNumber);
        tempString2 = tempString2[1];
        mustHaveList2[cs] = tempString2;
        cs = cs + 1;
        mustHaveList2[cs] = tempNumber;
        cs = cs + 1;
      }
    }
  }
  mustHaveList = mustHaveList2;
  ////console.log(mustHaveList);
  l = 0;
  if(results7){
    results = [];
    for(k=0;k<results7.length;k++){
      toInsert = 1;
      for(l=0;l<mustHaveList.length;l++){
        if(results7[k].prod.toUpperCase().indexOf(mustHaveList[l])!=-1 || mustHaveList[l]=="" || mustHaveList[l]==" "){
        }
        else {
          toInsert = 0;
        }
      }
      if(toInsert==1){
       results.push({
        prod : results7[k].prod,
        image : results7[k].image,
        price: results7[k].price,
        link: results7[k].link,
        position: results7[k].position
      });
     }
     else {
        //////////console.log("Rejected " + results7[k].prod + " due to unique test");
      }
    }
  }
}
else {
  results = results7;
}
////console.log(results);
if(results){
  results.sort(compare);
  var origPrice = getPrice();
  ////////////console.log(origProd);
  var countArray = Array();
  for (var i = 0; i <= results.length - 1; i++) {
    var tempLink = results[i].link;
    tempLink = tempLink.split("http://compare.buyhatke.com/tracking.php?redirect=")[1];
    tempLink = decodeURIComponent(tempLink);
    var currentURL = window.location.href;
    var filterURL = currentURL.split("&")[0];
    filterURL = filterURL.split("affid")[0];
    tempLink = tempLink.split("&")[0];
    tempLink = tempLink.split("affid")[0];
    if(filterURL==tempLink || filterURL == tempLink + "?" || tempLink + "?" == filterURL){
      results[i].price = origPrice;
    }
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
  indexSelected = 0;notFound = 0;
  for(k=0; k< results.length; k++){
    if(results[k].score/totalLen > .6){
      indexSelected = k;
      notFound = 0;
      break;
    }
  }
  if(isbn){
    indexSelected = 0;
  }
  var posResults = [];
  posResults.push({selector: 'body', attr: 'none', pos: 'before'});
  posResults = JSON.stringify(posResults);
  if(posResults != "" || posResults != null){
    var hgt = "40px";
  }
  else{
    var hgt = "0px";
  }
  var posSpecs = []; 
  posSpecs.push({selector: 'body', attr: 'none', cssAttr: 'margin-top', preVal: hgt, postVal: '0px'});
  posSpecs.push({selector: '._1Zddhx', attr: 'none', cssAttr: 'margin-top', preVal: hgt, postVal: '0px'});
  posSpecs.push({selector: '.box-shadows', attr: 'none', cssAttr: 'display', preVal: 'none', postVal: 'block'});
  posSpecs = JSON.stringify(posSpecs);
  showResults(results, indexSelected, posSpecs, posResults);
}
}
else{
  setTimeout(function(){ filterResults(data); }, 100);
}
}


function plotQR(){
  if(typeof(getPrice) == "function" && getPrice() != "" && $(".offers-info-wrap").length == 0 ){
    var urlToFrame = "https://dl.flipkart.com/dl/puma-miami-fashion-ii-dp-flip-flops/p/itmegyd4hqruwegs?pid=" + getPID() + "&affid=buyhatkegm&affExtParam1=Extension&affExtParam2=qrCode";
    offerPrice = getPrice();
    if($('._2Cl4hZ ._1MVZfW').length > 0 && $(".offers-info-wrap").length == 0){
      $('._2Cl4hZ ._1MVZfW:eq(0)').after('<div class="offers-info-wrap tmargin15"><div class="offers-info"><div class="offers-header line "><span class="offer-text fk-inline-block">Price on APP - ' + offerPrice + '</span></div><div class="offers"><ul><li class="offer"><span class="offer-text ">Scan the QR code below to open the product in your Flipkart APP directly</span></li></ul></div><div class="padding10"><img src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlToFrame) + '&size=120x120&margin=0"></div></div></div></div>');
    }
    else if($('.offers-info-wrap').length > 0 && $(".offers-info-wrap").length == 0){
      $('.offers-info-wrap:eq(0)').before('<div class="offers-info-wrap tmargin15"><div class="offers-info"><div class="offers-header line "><span class="offer-text fk-inline-block">Price on APP - ' + offerPrice + '</span></div><div class="offers"><ul><li class="offer"><span class="offer-text ">Scan the QR code below to open the product in your Flipkart APP directly</span></li></ul></div><div class="padding10"><img src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlToFrame) + '&size=120x120&margin=0"></div></div></div></div>');
    }
    else if($('.app-offer-wrap').length > 0 && $(".offers-info-wrap").length == 0){
      $('.app-offer-wrap:eq(0)').before('<div class="offers-info-wrap tmargin15" style="width:200px;"><div class="offers-info"><div class="offers-header line "><span class="offer-text fk-inline-block">Price on APP - ' + getPrice() + '</span></div><div class="offers"><ul><li class="offer"><span class="offer-text ">Scan the QR code below to open the product in your Flipkart APP directly</span></li></ul></div><div class="padding10"><img src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(urlToFrame) + '&size=120x120&margin=0"></div></div></div></div>');
    }
  }
  else{
    setTimeout(plotQR, 500);
  }
}


function flipCall(){
  if(typeof(getProd) == "function" && getProd() != ""  && getPrice() != 0){
    selectedFlag = 0;


    if($('.breadcrumb-wrap').find('li').length > 2){
     if($('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Mobiles" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Tablets" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Laptops" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Home Appliances" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Kitchen Appliances" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Personal Care Appliances" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Cameras" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Storage" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Laptop Accessories" || $('.breadcrumb-wrap').find('li:eq(2)').text().trim() == "Desktops"){
      selectedFlag = 1;
    }
  }
  else if($('._1joEet a').length > 2){
    if($('._1joEet a:eq(2)').text().trim() == "Mobiles" || $('._1joEet a:eq(2)').text().trim() == "Tablets" || $('._1joEet a:eq(2)').text().trim() == "Laptops" || $('._1joEet a:eq(2)').text().trim() == "Home Appliances" || $('._1joEet a:eq(2)').text().trim() == "Kitchen Appliances" || $('._1joEet a:eq(2)').text().trim() == "Personal Care Appliances" || $('._1joEet a:eq(2)').text().trim() == "Cameras" || $('._1joEet a:eq(2)').text().trim() == "Storage" || $('._1joEet a:eq(2)').text().trim() == "Laptop Accessories" || $('._1joEet a:eq(2)').text().trim() == "Desktops"){
      selectedFlag = 1;
    }
  }
  if($('.breadcrumb-wrap').find('li').length > 1){
    if($('.breadcrumb-wrap').find('li:eq(1)').text().trim() == "Home Entertainment" || $('.breadcrumb-wrap').find('li:eq(1)').text().trim() == "Computers" || $('.breadcrumb-wrap').find('li:eq(1)').text().trim() == "Wearable Smart Devices" || $('.breadcrumb-wrap').find('li:eq(1)').text().trim() == "Gaming"){
      selectedFlag = 1;
    }
  }
  else if($('._1joEet a').length > 1){
    if($('._1joEet a:eq(1)').text().trim() == "Home Entertainment" || $('._1joEet a:eq(1)').text().trim() == "Computers" || $('._1joEet a:eq(1)').text().trim() == "Wearable Smart Devices" || $('._1joEet a:eq(1)').text().trim() == "Gaming"){
      selectedFlag = 1;
    }
  }

  if($('.breadcrumb-wrap').find('li').length > 3){
    if($('.breadcrumb-wrap').find('li:eq(3)').text().trim() == "Health Care Devices" || $('.breadcrumb-wrap').find('li:eq(3)').text().trim() == "Power Banks" || $('.breadcrumb-wrap').find('li:eq(3)').text().trim() == "Headphones" || $('.breadcrumb-wrap').find('li:eq(3)').text().trim() == "Chargers"){
      selectedFlag = 1;
    }
  }
  else if($('._1joEet a').length > 3){
    if($('._1joEet a:eq(3)').text().trim() == "Health Care Devices" || $('._1joEet a:eq(3)').text().trim() == "Power Banks" || $('._1joEet a:eq(3)').text().trim() == "Headphones" || $('._1joEet a:eq(3)').text().trim() == "Chargers"){
      selectedFlag = 1;
    }
  }



  // console.log("called flipCall");
  alertPosition = 2;
  // console.log("Change detected");
  plotFlipGraph();
  var title = getProd();

  if($('.clp-breadcrumb').find('li').length>3){
   if($('.clp-breadcrumb').find('li:eq(3)').text().trim() == "Graphic Cli"){
    title2 = title.split(" ");
    title = "";
    for(m=0;m<title2.length;m++){
      if(m!=1){
        title = title + title2[m] + " ";
      }
    }
    title = title.split("Graphics").join("Graphic");
  }
}
else  if($('._1joEet a').length>3){
 if($('._1joEet a:eq(3)').text().trim() == "Graphic Cli"){
  title2 = title.split(" ");
  title = "";
  for(m=0;m<title2.length;m++){
    if(m!=1){
      title = title + title2[m] + " ";
    }
  }
  title = title.split("Graphics").join("Graphic");
}
}

if($('.clp-breadcrumb').find('li').length>3){
  if($('.clp-breadcrumb').find('li:eq(3)').text().trim()=="Mouse"){
    title = title.split(" ");
    if(title.length>=3){
      title = title[0] + " " + title[1] + " " + title[2];
    }
    else if(title.length==2){
      title = title[0] + " " + title[1];
    }
    else {
      title = title[0];
    }
  }
}
else if($('._1joEet a').length>3){
  if($('._1joEet a:eq(3)').text().trim()=="Mouse"){
    title = title.split(" ");
    if(title.length>=3){
      title = title[0] + " " + title[1] + " " + title[2];
    }
    else if(title.length==2){
      title = title[0] + " " + title[1];
    }
    else {
      title = title[0];
    }
  }
}
title = title.split("/").join(" ");
origProd = title;
    //watch price
    var selector2 = [];
    selector2.push({selector: '.prices:eq(0)', attr: 'none', pos: 'after'});
    selector2.push({selector: '.price.fk-display-block:eq(0)', attr: 'none', pos: 'after'});
    selector2.push({selector: '._2MUtYG:eq(0)', attr: 'parent', pos: 'after'});
    selector2.push({selector: '._3ZYEWO:eq(0)', attr: 'parent', pos: 'after'});
    selector2.push({selector: '#ourSpecialLink', attr: 'parent', pos: 'after'});
    selector2 = JSON.stringify(selector2);
    if($("#bhWidget").length == 0){
      setTimeout("checkAlertStatus(" + selector2 + ")", 4000);
    }

    //compare button
    var imgURL = returnResource("flipkart.png");

    var url = "https://compare.buyhatke.com/products/";
    if(title.split(" ").length >= 5){
      title = title.split(" ");
      title = title[0]+" "+title[1]+" "+title[2]+" "+title[3]+" "+title[4];
    }
    var urlToFollow = url + title;
    urlToFollow = urlToFollow.split(" ").join("-");
    urlToFollow = urlToFollow.split("(");
    urlToFollow = urlToFollow[0];//
    urlToFollow = urlToFollow.split("'s");
    urlToFollow = urlToFollow.join("");
    var myPrice = getPrice();
    msgToSend = "";
    var final2send = urlToFollow.split("products/");
    msgToSend = final2send[1] + "~*~*" + myPrice;
    var str2Send = "";
    msgToSend = msgToSend + "moreData=" + str2Send;
    var pid = getPID();
    if(pid[0]+pid[1]+pid[2] == "978" && pid.length == 13){
      isbn = pid;
    }
    else{
      isbn = false;
    }

    mustCheck = true;
    caseMobiles = true;

    if($('.clp-breadcrumb').find('li').length>2&&($('.clp-breadcrumb').find('li:eq(2)').text().trim()=="Mobiles"||$('.clp-breadcrumb').find('li:eq(2)').text().trim()=="Tablets")){
      caseMobiles = true;
    }
    else if($('._1joEet a').length>2&&($('._1joEet a:eq(2)').text().trim()=="Mobiles"||$('._1joEet a:eq(2)').text().trim()=="Tablets")){
      caseMobiles = true;
    }
    else {
      caseMobiles = false;
    }

    if($('.clp-breadcrumb').find('li').length>3){
     var checker = $('.clp-breadcrumb').find('li:eq(3)').text().trim();
     if(checker=="External hard disks" || checker == "Pen drives" || checker == "Graphic Cards" || checker == "RAMs"){
      mustCheck = true;
    }
    else {
      mustCheck = false;
    }
  }
  else if($('._1joEet a').length>3){
   var checker = $('._1joEet a:eq(3)').text().trim();
   if(checker=="External hard disks" || checker == "Pen drives" || checker == "Graphic Cards" || checker == "RAMs"){
    mustCheck = true;
  }
  else {
    mustCheck = false;
  }
}
else {
  mustCheck = false;
}

if($('.clp-breadcrumb').find('li:eq(2)').text().trim() == "All-in-One Desktops"){
  uniqueCheck = false;
}
else if($('.clp-breadcrumb').find('li:eq(2)').text().trim() == "Laptops"){
  title = title.split("Notebook").join("");
  title = title.split("Laptop").join("");
  title = title.split("Series").join("");
  uniqueCheck = false;
}
else if($('._1joEet a:eq(2)').text().trim() == "All-in-One Desktops"){
  uniqueCheck = false;
}
else if($('._1joEet a:eq(2)').text().trim() == "Laptops"){
  title = title.split("Notebook").join("");
  title = title.split("Laptop").join("");
  title = title.split("Series").join("");
  uniqueCheck = false;
}
else {
  uniqueCheck = true;
}

if($('.clp-breadcrumb').find('li').length>3){
  if($('.clp-breadcrumb').find('li:eq(3)').text().trim() == "Headphones"){
    title2 = title.split(" ");
    title = "";
    if(title2.length>=3){
      title = title2[0] + " " + title2[1] + " " + title2[2];
    }
    else {
      title = title2.join(" ");
    }
  }
}
else if($('._1joEet a').length>3){
  if($('._1joEet a:eq(3)').text().trim() == "Headphones"){
    title2 = title.split(" ");
    title = "";
    if(title2.length>=3){
      title = title2[0] + " " + title2[1] + " " + title2[2];
    }
    else {
      title = title2.join(" ");
    }
  }
}
if($('.clp-breadcrumb').find('li').length>4){
 if($('.clp-breadcrumb').find('li:eq(4)').text().trim() == "TP-LINK Routers" || $('.clp-breadcrumb').find('li:eq(4)').text().trim() == "Netgear Routers" || $('.clp-breadcrumb').find('li:eq(4)').text().trim() == "D-Link Routers" || $('.clp-breadcrumb').find('li:eq(4)').text().trim() == "Asus Routers"){
  title2 = title.split(" ");
  title = "";
  if(title2.length>=2){
    title = title2[0] + " " + title2[1];
  }
  else {
    title = title2[0];
  }
}
}
else if($('._1joEet a').length>4){
 if($('._1joEet a:eq(4)').text().trim() == "TP-LINK Routers" || $('._1joEet a:eq(4)').text().trim() == "Netgear Routers" || $('._1joEet a:eq(4)').text().trim() == "D-Link Routers" || $('._1joEet a:eq(4)').text().trim() == "Asus Routers"){
  title2 = title.split(" ");
  title = "";
  if(title2.length>=2){
    title = title2[0] + " " + title2[1];
  }
  else {
    title = title2[0];
  }
}
}

if($('.clp-breadcrumb').find('li').length>4){
 if($('.clp-breadcrumb').find('li:eq(4)').text().trim() == "Cisco Linksys Routers"){
  title2 = title.split(" ");
  title = "";
  if(title2.length>=3){
    title = title2[0] + " " + title2[1] + " " + title2[2];
  }
  else {
    title = title2.join(" ");
  }
}
}
else if($('._1joEet a').length>4){
 if($('._1joEet a:eq(4)').text().trim() == "Cisco Linksys Routers"){
  title2 = title.split(" ");
  title = "";
  if(title2.length>=3){
    title = title2[0] + " " + title2[1] + " " + title2[2];
  }
  else {
    title = title2.join(" ");
  }
}
}


isApparel = ($('._1joEet a:eq(1)').text() == ("Clothing")) || ($('._1joEet a:eq(1)').text() == ("Footwear")) || ($('._1joEet a:eq(1)').text() == ("Jewellery")) || ($('._1joEet a:eq(1)').text() == ("Sunglasses") || $('.clp-breadcrumb').find('li:eq(1)').text() == ("Clothing")) || ($('.clp-breadcrumb').find('li:eq(1)').text() == ("Footwear")) || ($('.clp-breadcrumb').find('li:eq(1)').text() == ("Jewellery")) || ($('.clp-breadcrumb').find('li:eq(1)').text() == ("Sunglasses"));

if(isApparel){
  uniqueCheck = false;
}

bookCheck = $('.clp-breadcrumb').find('li:eq(1)').text().split("Books").length > 1 ;

if(isbn){
  if(urlToFollow.split("/products/").length > 1){
    urlToFollow = urlToFollow.split("/products/").join("/books/");
  }
  urlToFollow = urlToFollow + "-hatke" + isbn;
  msgToSend = msgToSend + "isbn=" + isbn;
}

if(!isbn && myPrice!=0){
   myRange = "?range=" + parseInt(.75*myPrice) + "-10000000&pageNo=1";
   urlToFollow = urlToFollow + myRange;
}
if($('._2MUtYG').length>0 && $("#ourSpecialLink").length == 0){
  $('._2MUtYG:eq(0)').append('<a id="ourSpecialLink" style="margin-top: 4px;" target="_blank" alt="Compare via Compare Hatke" title="Compare via Compare Hatke" href='+ (urlToFollow) + ' class="fk-inline-block buy-btn fksk-buy-btn"><img style="width:140px;" src=' + imgURL +'></a><br>');
}
else if($('._3ZYEWO').length>0 && $("#ourSpecialLink").length == 0){
  $('._3ZYEWO:eq(0)').after('<a id="ourSpecialLink" style="margin-top: 4px;" target="_blank" alt="Compare via Compare Hatke" title="Compare via Compare Hatke" href='+ (urlToFollow) + ' class="fk-inline-block buy-btn fksk-buy-btn"><img style="width:140px;" src=' + imgURL +'></a><br>');
}

// console.log("Message to send " + msgToSend);

if(uniqueCheck){
  mustHaveList = [];
  queryName = origProd;
  queryName = queryName.split("/").join(" ");
  queryName = queryName.split("(").join(" ");
    queryName = queryName.split(")").join(" ");
    queryName = queryName.split(",").join(" ");
    queryName = queryName.split("&").join(" ");
    queryName = queryName.split("-").join(" ");
    queryName2 = queryName.toUpperCase();
    queryArray = queryName.split(" ");
    queryArray2 = queryName2.split(" ");
    countSe = 0;

    for(l=0;l<queryArray.length;l++){
     if(queryArray2[l].indexOf(queryArray[l])!=-1&&queryArray2[l]!=""&&queryArray2[l]!=" "){
      mustHaveList[countSe] = queryArray2[l];
      countSe++;
      ////////////console.log(countSe + ". " + queryArray2[l]);
    }
  }
}
sendSearchMessage(msgToSend);
plotQR();

}
else{
  setTimeout(flipCall, 100);
}
}
flipCall();
