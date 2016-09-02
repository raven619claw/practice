function sendCoupon(){
	$ = jQuery.noConflict();
	couponToSend = [];
	var cur_link = window.location.href;

	if(cur_link.split("/coupons").length > 1){

		if($('#coupons').length > 0){
			var slider = $('#coupons');
			var sliderLength = slider.length;
			var couponUrl = "";
			var couponCode = "";
			var couponText = "";
			var couponDesc = "";
			var couponExp = 0;
			var couponAt = 1351;

			couponUrl = cur_link;
			if($('#coupons').find("p").length > 0){
				couponCode = $('#coupons').find("p:eq(0)").text().trim();
				if(couponCode.split("code :").length > 1){
					couponCode = couponCode.split("code :")[1].trim();
				}
				if(couponCode != couponCode.toUpperCase()){
					couponCode = "";
				}
				couponText = $('#coupons').find("p:eq(1)").text().trim();

			}

			if(couponCode != ""){
				couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
			}


		}
	}
	couponToSend = JSON.stringify(couponToSend);
	var jsonArr = [{'couponsExt': couponToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(1, jsonArr, 15, doNothing, []); 
}
sendCoupon()