savingsArray = [];
coupArray = [];
bestCouponFound = 0;

flagCoupon = [];
for(var i=0;i < 200; i++){
	flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
	if($('#modal_div').css('display') != "block"){
		var status = "none";
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
		if($('.remove').length>0){
			$('.remove').click();
		}
	}
	flagCoupon[i] = 0;
}

function removeCompletely(){
   // $('#removeMask').find('a:eq(1)').click();
}

function postProcessor(coupon, i){
	console.log("postProcessor is here");
	if(document.getElementsByClassName('ItemDiscountTotal')[0].style.display!="none"){
		savings = $('#disctotal').text().trim();
		savings = savings.split(",").join("");
		savings = parseFloat(savings);
	}
	else {
		savings = 0;
	}
	savings = parseFloat(savings);
	if(savings > $('.hdc-sav-amt').text()){
		var currentSavAmt = parseFloat($('.hdc-sav-amt').text()),
		finalSavAmt = savings;
		$({c: currentSavAmt}).animate({c: finalSavAmt}, {
			step: function(now) {
				$('.hdc-sav-amt').text(Math.round(now))
			},
			duration: 1000,
			easing: "linear"
		});
	}
    //////console.log("Savings for " + coupon + " is " + savings);
    savingsArray[i] = savings;
    if(bestCouponFound==0){
    	if($('.remove').length>0){
    		$('.remove').click();
    	}
    }
    setTimeout(function(){changeFlag2(i, coupon);},1000);
}

function preProcessor(i, coupon){
	if(stopCoupon == 1){

		if($('#modal_div').css('display') != "block"){
			console.log("preProcessor is here");

			$('#input_coupon_code').val(coupon);
			$('#applyCoupon').click();
  //////console.log("Coupon Code applied " + coupon);
  setTimeout(function(){changeFlag(i, coupon);},1000);

}
else {
	setTimeout(function(){preProcessor(i, coupon);},1000);
}
}
}

function temp(coupon, i, lenArray){
	if(lenArray==100){
		$('.hdc-loading').html('Automatically applying the best coupon now !');
		$('.hdc-lb-progress').text("100% Complete");
		$('.hdc-lb-fg').css("width", "100%");
		preProcessor(i, coupon);
	}
	else if(i==0||flagCoupon[i-1]==0){
		$('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (i+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
		var perDone = i/lenArray;
		perDone = perDone*100;
		perDone = parseInt(perDone);
		$('.hdc-lb-progress').text(perDone + "% Complete");
		$('.hdc-lb-fg').css("width", perDone + "%");
		preProcessor(i, coupon);
	}
	else {
		setTimeout(function(){temp(coupon, i, lenArray);},1000);
	}
  //setTimeout(function(){preProcessor(i, coupon, initialamount);},7000*i);
  //setTimeout(function(){couponApplied(initialamount);},7000*(i) + 3500); 
}

function endProcess(i){
  //////console.log("called with " + i);
  if(flagCoupon[i]==0){
//////console.log("Process terminated");
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
	$('.hatke-discount-cover').css("display", "none");
	savings = $('.hdc-sav-amt:eq(0)').text();
	$('.hatke-discount-cover:eq(1)').css("display", "block");
	var currentSavAmt = 0,
	finalSavAmt = max;
	$({c: currentSavAmt}).animate({c: finalSavAmt}, {
		step: function(now) {
			$('.hdc-sav-amt').text(Math.round(now))
		},
		duration: 1000,
		easing: "linear"
	});
	var jsonArr = [{'savings': max}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []);
}
else {
	$('.hatke-discount-cover').css("display", "none");
	$('.hatke-discount-cover:eq(2)').css("display", "block");
} 
//////console.log(savingsArray);
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
function couponInitiate(coupon){
	var mytext = "HATKE20~WEBSITE199~";
	couponsLength = mytext.split("~").length - 1;
	$('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
	applyCoupons(mytext);
}
function getCoupons(){
	for(var i=0;i < 200; i++){
		flagCoupon[i] = 2;
	}
	bestCouponFound = 0;
	$('.hatke-discount-cover:eq(0)').css("display", "block");
	var httpq4 = new getXMLHTTPRequest();
	var ext_id, ext_auth;
	var jsonArr = [{'pos': 21}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(1, jsonArr, 7, startCouponProcess, []);
}

function removeTheCover(){
	if($('.hatke-discount-cover').length>0){
		$('.hatke-discount-cover').css("display", "none"); 
	}
}

function couponCheck(){
	var curURL = window.location.href;
	////console.log("CP Check was called");
	if(curURL.split('bigrock.in/checkout').length>1){
		var imgURL = returnResource("apply-coupon.png");
  //////console.log("TEst passed");
  if($('.cartTotalWrp').length>0){
  	$('.cartTotalWrp:eq(0)').after("<a id='couponClick' href='javascript:void();'><img style='margin-left:65px;' src='" + imgURL + "'></a>");
  	addToDOM();
  	var button = document.getElementById("couponClick");
  	button.addEventListener("click", function(){
  		stopCoupon = 1;
  		getCoupons();
  	}, false);
  }
  else {
  	setTimeout(function(){couponCheck();},1000);
  }
}

}

couponCheck();