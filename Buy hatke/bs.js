
$s = jQuery.noConflict();

function sendPairs(){
	arrayToSend = [];
	if($s('.item').length > 0){
		var slider = $s('.item');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($s('.item:eq('+ i +') a').length > 0){
				link = $s('.item:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("#").length > 1){
						PID = PID.split("#");
						PID = PID[0];
					}
				}
				else{
					PID = "";
				}
			}

			if(PID != ""){
				if($s('.item:eq('+ i +')').find('.special-price .price').length > 0){

					price = $s('.item:eq('+ i +')').find('.special-price .price').text();

				}
				else if($s('.item:eq('+ i +')').find('.regular-price .price').length > 0){
					price = $s('.item:eq('+ i +')').find('.regular-price .price').text();

				}
				else{
					price = "";
				}
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.");
					price =price[1];
				}
				price = price.split(",").join("").trim();


			}
			else{
				price = "";
			}

			if(PID != "" && price != ""){
				arrayToSend.push([PID, price]);
			}

		} // for ends1

	}



	arrayToSend = JSON.stringify(arrayToSend);
//	//console.log(arrayToSend);
	chrome.runtime.sendMessage({pairsBas: arrayToSend}, function(response) {
  	});
}


function sendCurrent(){
	curData = []; 	
	var prod = "";
	var image = "";
	var myPrice = "";
	var cur_url = "";
	var current_status = 0;
	var PID = "";
	var link = window.location.href;
	
	if($s('.product-main-info .product-name h1').length > 0){
		prod = $s('.product-main-info .product-name h1').text().trim();
	}

	if($s('.product-main-info').find('.special-price .price').length > 0){

		myPrice = $s('.product-main-info').find('.special-price .price').text();

	}
	else if($s('.product-main-info').find('.regular-price .price').length > 0){
		myPrice = $s('.product-main-info').find('.regular-price .price').text();

	}
	else{
		myPrice = "";
	}
	if(myPrice.split("Rs.").length > 1){
		myPrice = myPrice.split("Rs.");
		myPrice =myPrice[myPrice.length - 1];
	}
	
	myPrice = myPrice.split(",").join("").trim();

	if($s('.product-view .product-img-box img').length > 0){
		image = $s('.product-view .product-img-box img').attr('src');
	}
	
	if($s('.discountLabelDetail img').attr('src') == "http://www.moodsofcloe.com/static/images/soldout.png"){
		current_status = 1;
	}
	
	if($s('#notifydiv').text().toUpperCase().split("NOTIFY ME WHEN THIS PRODUCT IS IN STOCK").length > 1){
		current_status = 1;
	}

	if(link != ""){
		PID = link;
		if(PID.split("?").length > 1){
			PID = PID.split("?");
			PID = PID[0];
		}
		if(PID.split("#").length > 1){
			PID = PID.split("#");
			PID = PID[0];
		}
	}
	else{
		PID = "";
	}


	cur_url = window.location.href;
	curData.push([prod, image, myPrice, cur_url, current_status, PID]);
	curData = JSON.stringify(curData);
	//console.log(curData);

	chrome.runtime.sendMessage({curDataBas: curData}, function(response) {
  });

}


var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);
