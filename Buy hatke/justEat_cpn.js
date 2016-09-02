savingsArray = [];
coupArray = [];
bestCouponFound = 0;
flagCoupon = [];
arrayMsg = [];
couponAt = 0;
arrayBest = [];
for(var i=0;i < 200; i++){
	flagCoupon[i] = 2;
}

function changeFlag(i, coupon){
	flagCoupon[i] = 1;
	setTimeout(function(){postProcessor(coupon, i);},3000);
}

function changeFlag2(i, coupon){
	if(bestCouponFound==0){
		if($(".couponMessage ").css("display")=="block")
		{
			$(".couponMessage .remove-coupon:eq(0)").click();
		}
	}
	flagCoupon[i] = 0;
}

function postProcessor(coupon, i){
	if($(".remove-coupon").css("display") == "block" && bestCouponFound == 0){
		document.getElementsByClassName("remove-coupon")[0].click();
	}

	if(($(".couponErrorText").length>0 && $(".couponContent").css("display")=="block")|| ($(".couponMessage").css("display")=="block"  && $(".couponErrorText").length==0)){
		if($(".table").find(".discount").css("display")=="none"){
			savings=0;
		}
		else{
			savings=$(".table").find(".discountvalue.font-size-1-3-rem.font-weight-normal.padding-right-20-px").get(0).innerHTML.split("&")[0];
		}
		savings=parseFloat(savings);
		if(savings > $('.hdc-sav-amt:eq(0)').text().trim()){
			var currentSavAmt = parseFloat($('.hdc-sav-amt:eq(0)').text().trim()),
			finalSavAmt = savings;
			$({c: currentSavAmt}).animate({c: finalSavAmt}, {
				step: function(now) {
					$('.hdc-sav-amt').text(Math.round(now))
				},
				duration: 1500,
				easing: "linear"
			});
		}

		cpn_msg = "";
		if($('.couponMessage').css("display") == "block" ){
			$('.modal-close-button').click();
			cpn_msg = $('.couponMessage').text().trim();
		}
		else if($('#couponErrorModal').css("display") != "none"){
			cpn_msg = $('#couponErrorModal').find('.couponErrorText').text().trim();
		}

		savingsArray[i] = savings;
		coupArray[i] = coupon;
		couponAt = 1351;
		arrayMsg.push([coupon, encodeURIComponent(cpn_msg), couponAt ]);
		if(bestCouponFound==0){
			if($(".couponMessage ").css("display")=="block")
			{
				$(".couponMessage .remove-coupon:eq(0)").click();
			}
		}
		setTimeout(function(){changeFlag2(i, coupon);},1500);
	}
	else {
		setTimeout(function(){postProcessor(coupon, i);},1000);

	}
}

function preProcessor(i, coupon){
	if(stopCoupon == 1){
		if($(".col-sm-12.couponHeader.margin-bottom-5-per.padding-left-12-per").css("display")=="none")
		{
			$(".add-coupon-btn.cursor-pointer:eq(0)").get(0).click();
		}
		if($(".couponErrorText").length>0 || $(".couponContent").css("display")=="block"){
			$("#input_coupon_code").val(coupon);
			$(".col-sm-4:eq(2)").find("button").click();
			setTimeout(function(){changeFlag(i, coupon);},2500);
		}
		else {
			setTimeout(function(){preProcessor(i, coupon);},100); 
		}
	}
}

function temp(coupon, i, lenArray){

	if(lenArray==100){
		$('.hdc-loading').html('Automatically applying the best coupon now !');
		$('.hdc-lb-progress').text("100% Complete");
		$('.hdc-lb-fg').css("width", "100%");
		arrayBest.push([coupon, 1351]);
		arrayBest = JSON.stringify(arrayBest);
		var jsonArr = [{'best_cpn': arrayBest}];
		jsonArr = JSON.stringify(jsonArr);
		sendMessage(1, jsonArr, 13, doNothing, []);
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
		setTimeout(function(){temp(coupon, i, lenArray);},500);
	}
}

function endProcess(i){
	if(flagCoupon[i]==0){
		max = -111111;
		ind_req = 1500;
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
				duration: 1500,
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
		arrayMsg = JSON.stringify(arrayMsg);
		var jsonArr = [{'cpn_msg': arrayMsg}];
		jsonArr = JSON.stringify(jsonArr);
		sendMessage(1, jsonArr, 12, doNothing, []);
	}
	else {
		setTimeout(function(){endProcess(i);},500);
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
function couponInitiate (coupon) {
	// var mytext = "PJUN25~KAATI50~PETOO~WEWWW~";
	var mytext = "HATKE~"+coupon;
	couponsLength = mytext.split("~").length - 1;
	$('.hdc-c-line:eq(0)').text("We are automatically trying " + couponsLength + " coupon codes for you !");
	applyCoupons(mytext);
}

function getCoupons(){
	for(var i=0;i < 200; i++){
		flagCoupon[i] = 2;
	}
	bestCouponFound = 0;
	if(bestCouponFound==0){
		if($(".couponMessage ").css("display")=="block")
		{
			$(".couponMessage .remove-coupon:eq(0)").click();
		}
	}


	$('.hatke-discount-cover:eq(0)').css("display", "block");
	if($(".col-sm-12.couponHeader.margin-bottom-5-per.padding-left-12-per").css("display")=="none")
	{
		$(".add-coupon-btn.cursor-pointer:eq(0)").get(0).click();
	}

	var jsonArr = [{'pos': 32}];
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
	// console.log("CP Check was called");
	if(curURL.split('justeat.in/order/checkout').length>1){
		var imgURL = returnResource("apply-coupon.png");
		// console.log("TEst passed");
		if($(".col-sm-12.net-banking.padding-left-12-per.selected").css("display")){
			$(".col-sm-12.net-banking.padding-left-12-per.selected").after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
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
