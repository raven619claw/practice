savingsArray = [];
coupArray = [];
bestCouponFound = 0;
arrayBest = [];
arrayMsg = [];
couponAt = 0;
$s = jQuery.noConflict();
flagCoupon = [];
for(var i=0;i < 200; i++){
  flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
  flagCoupon[i] = 1;
  setTimeout(function(){postProcessor(coupon, i);},1000);
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
   // $s('#removeMask').find('a:eq(1)').click();
 }

 function postProcessor(coupon, i){
  cpn_msg = "";
  checkPass = 1;
  if(bestCouponFound == 0){
    if($s('.delete-coupon').length>0){
      $s('.delete-coupon').click();
    }
  }
  var savings = $s('.appliedcoupon label span:eq(1)').text().trim();
  savings = parseFloat(savings);
  if(isNaN(savings) == true){
    savings = 0;
  }
  if(savings > $s('.hdc-sav-amt:eq(0)').text().trim()){
    var currentSavAmt = parseFloat($s('.hdc-sav-amt:eq(0)').text().trim()),
    finalSavAmt = savings;
    $s({c: currentSavAmt}).animate({c: finalSavAmt}, {
      step: function(now) {
        $s('.hdc-sav-amt:eq(0)').text(Math.round(now))
      },
      duration: 1000,
      easing: "linear"
    });
  }
  if($s('.couponerror').length > 0){
    cpn_msg = $s('.couponerror').text().trim();
  }
  // console.log("Savings for " + coupon + " is " + savings);
  // console.log("cpn_msg for " + coupon + " is " + cpn_msg);
  savingsArray[i] = savings;
  couponAt = 425;
  arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
  if(bestCouponFound==0){
   if($s('.delete-coupon').length>0){
    $s('.delete-coupon').click();
  }
}
if(checkPass==1)
  setTimeout(function(){changeFlag2(i, coupon);},1000);
else
  setTimeout(function(){postProcessor(coupon, i);},1000);
}

function preProcessor(i, coupon){
  if(stopCoupon == 1){
    if( $s('#popup-container').css("display") == "none"  ){
      $s('#couponcode').find('input').val(coupon);
      $s('#couponcode').find('button').click();
      setTimeout(function(){changeFlag(i, coupon);},3000);
    }
    else {
      $s('#close-popup').click();
      setTimeout(function(){preProcessor(i, coupon);},1000);
    }
  }
}

function temp(coupon, i, lenArray){
  if(lenArray==100){
    $s('.hdc-loading').html('Automatically applying the best coupon now !');
    $s('.hdc-lb-progress').text("100% Complete");
    $s('.hdc-lb-fg').css("width", "100%");
    arrayBest.push([coupon, 425]);
    arrayBest = JSON.stringify(arrayBest);
    var jsonArr = [{'best_cpn': arrayBest}];
    jsonArr = JSON.stringify(jsonArr);
    sendMessage(1, jsonArr, 13, doNothing, []);
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
  ////console.log("called with " + i);
  if(flagCoupon[i]==0){
////console.log("Process terminated");
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
  var jsonArr = [{'savings': max}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(0, jsonArr, 0, doNothing, []);
}
else {
  $s('.hatke-discount-cover').css("display", "none");
  $s('.hatke-discount-cover:eq(2)').css("display", "block");
} 
arrayMsg = JSON.stringify(arrayMsg);
var jsonArr = [{'cpn_msg': arrayMsg}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 12, doNothing, []);
////console.log(savingsArray);
}
else {
  setTimeout(function(){endProcess(i);},1000);
}
}

function applyCoupons(coupons){
 couponsArray = coupons.split("~");
 var savings = [];
 var i;
 for(i=0;i<couponsArray.length-1;i++){
   if($s('.delete-coupon').length>0){
    $s('.delete-coupon').click();
  }
  if(couponsArray[i] != "" && couponsArray[i] != " "){
    var cur = couponsArray[i];
    coupArray[i] = cur;
    temp(cur, i, couponsArray.length-1);
  }
}
endProcess(couponsArray.length-2);
}
function couponInitiate(coupon){
  var mytext = "HATKE20~"+coupon;
  couponsLength = mytext.split("~").length-1;
  $s('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
  applyCoupons(mytext);
}

function getCoupons(){
  for(var i=0;i < 200; i++){
    flagCoupon[i] = 2;
  }
  bestCouponFound = 0;
  $s('.hatke-discount-cover:eq(0)').css("display", "block");
  var jsonArr = [{'pos': 22}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);
}

function removeTheCover(){
  if($s('.hatke-discount-cover').length>0){
    $s('.hatke-discount-cover').css("display", "none"); 
  }
}


function couponCheck(){
  var curURL = window.location.href;
  // console.log("CP Check was called");
  if(curURL.split('zovi.com/buy').length>1){
    var imgURL = returnResource("apply-coupon.png");
    if($s('#couponcode').length>0){
      var link = document.createElement('a');
      link.href = "javascript:void()";
      link.id = "couponClick";

      var img = document.createElement('img');
      img.src = imgURL;
      img.style.marginLeft = "65px";

      link.appendChild(img);

      var inb4 = document.getElementById('couponcode');
      if($s('#couponClick').length == 0){
          // inb4.parentNode.insertBefore(link, inb4);

          //console.log("Process completed");
          $s('#couponcode').after("<a id='couponClick' href='javascript:void();'><img style='margin-left: 270px;width: 64px;' src='" + imgURL + "'></a>");
        }
        addToDOM();
        var button = document.getElementById("couponClick");
        button.addEventListener("click", function(){
          stopCoupon = 1;
          getCoupons();
        //console.log("called getcoupons");
      }, false);
         // setTimeout(function(){couponCheck();},1000);
       }
       else {
        setTimeout(function(){couponCheck();},1000);
      }
    }
  }

  couponCheck();
