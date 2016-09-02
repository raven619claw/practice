function getCategory(){
  var categories = getBreadCrumb();
  var index = 2;
  var category = "";
  if(categories != "" && categories != undefined){
    categories = categories.split("*~");
    category = categories[index];
  }
  return category;
}  

  function sendPairs(){
  	arrayToSend = [];
  	if($('.item').length > 0){
  		var slider = $('.item');
  		var sliderLength = slider.length;
  		var link;
  		var price;
  		var PID;

  		for(i=0;i<sliderLength;i++){
  			price = "";
  			PID = "";
  			if($('.item:eq('+ i +') a').length > 0){
  				link = $('.item:eq('+ i +') a:eq(0)').attr("href");
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
  					if(PID.split("/").length > 1){
  						PID = PID.split("/");
  						PID2 = PID[PID.length-1];
  						if(PID2 == ""){
  							PID = PID[PID.length -2];
  						}
  						else {
  							PID = PID2;
  						}
  					}
  				}
  				else{
  					PID = "";
  				}
  			}

  			if(PID != ""){
  				if($('.item:eq('+ i +')').find('.special-price').length > 0){

  					price = $('.item:eq('+ i +')').find('.special-price').text();

  				}
  				else if($('.item:eq('+ i +')').find('.regular-price').length > 0){
  					price = $('.item:eq('+ i +')').find('.regular-price').text();

  				}
  				else if($('.item:eq('+ i +')').find('.price-box').length > 0){
  					price = $('.item:eq('+ i +')').find('.price-box').text();

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

  			if(PID != "" && price != "" && price != 0){
  				arrayToSend.push([PID, price]);
  			}

    } // for ends1

}

arrayToSend = JSON.stringify(arrayToSend);
var jsonArr = [{'pairsFn': arrayToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(0, jsonArr, 0, doNothing, []);  
}

function sendCurrent(){
	curData = [];   
	var prod = getProd();
	var image = getImage();
	var myPrice = getPrice();
	var cur_url = "";
	var PID = getPID();
	var current_status = 0;
	if(getAvailability() == 0){
		current_status = 1;
	}

	cur_url = window.location.href;
	var breadcrumbF = getBreadCrumb();
	curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumbF]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataFn': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('.product-view').length>0){
		sendMessage(0, jsonArr, 0, doNothing, []);
	}
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);


//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;

function getProd(){
	var prod = "";

	if($(".product-name h1").length > 0){
		prod = $(".product-name h1").text().trim();
	}
	if($('.product-view').length>0){
		return prod;
	}
	else {
		return "";
	}
}

function getImage(){
	var image = "";
	if($('.product-img-box #image').length > 0){
		image = $('.product-img-box #image').attr('src');
	}
	else if($('meta[property="og:image"]').attr('content')){

		image = $('meta[property="og:image"]').attr('content');
	}
	else{
		image = $('[itemprop="image"]').attr("src");
	}
	
	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	if($('[itemprop="lowPrice"]').length > 0){
		price = $('[itemprop="lowPrice"]').text().trim();
	}
	else if($('.product-shop .special-price').length > 0)
	{
		price = $('.product-shop .special-price').text().trim();
	}
	else if($('.product-shop .price-box').find('.price').length > 0)
	{
		price = $('.product-shop .price-box').find('.price').text().trim();
	}
	
	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if(($('title').length > 0) && ($('title').text().toUpperCase().split("404 NOT").length > 1)){
		avail = 0;
	}

	if(($('.note-msg').length > 0) && ($('.note-msg').text().toUpperCase().split("NO PRODUCTS MATCHING").length > 1)){
		avail = 0;
	}


	if(($('.out-of-stock').length > 0) && ($('.out-of-stock').text().toUpperCase().split("SOLD OUT").length > 1)){
		avail = 0;
	}
	return avail;

}


function getPID(){
	var link = window.location.href;
	var pid = link;
	if(pid.split("#").length > 1){
		pid = pid.split("#")[0];
	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0];
	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0];
	}
	if(pid.split("/").length > 1){
		pid = pid.split("/");
		pid2 = pid[pid.length-1];
		if(pid2 == ""){
			pid = pid[pid.length -2];
		}
		else {
			pid = pid2;
		}
	}
	
	return pid;

}

function returnPID(link){
	var pid = link;
	if(pid.split("#").length > 1){
		pid = pid.split("#")[0];
	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0];
	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0];
	}
	if(pid.split("/").length > 1){
		pid = pid.split("/");
		pid2 = pid[pid.length-1];
		if(pid2 == ""){
			pid = pid[pid.length -2];
		}
		else {
			pid = pid2;
		}
	}
	if(link.split('fashionara.com').length < 2){
		pid = 0;
	}
	if(link == ""){
		pid = 0;
	}
	
	return pid;

}


function getBreadCrumb(){
	var breadcrumb = "";
	var bread_final = "";
	var len_bread = $('.breadcrumbs').find('a').length;

	for(i=0;i<len_bread;i++){
		breadcrumb = $('.breadcrumbs').find('a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}



function sendCoupon(){
	$ = jQuery.noConflict();
	couponToSend = [];
	var cur_link = window.location.href;
	var couponUrl = "";
	var couponCode = "";
	var couponText = "";
	var couponDesc = "";
	var couponExp = 0;
	var couponAt = 98;
	couponUrl = cur_link;
	couponCode = "";
	couponText = "";
	couponDesc = "";

	if($('.event-collateral .event-subtitle').length > 0){
		couponText = $('.event-collateral .event-subtitle:eq(0)').text().trim();
	}
	if($('.event-collateral .description').length > 0){
		couponDesc = $('.event-collateral .description:eq(0)').text().trim();
		if(couponDesc.split("Use Coupon:").length > 1){
			couponCode = couponDesc.split("Use Coupon:");
			couponCode = couponCode[1].trim();
			if(couponCode != couponCode.toUpperCase()){
				couponCode = "";
			}
		}
		else if(couponDesc.split("Use Coupon").length > 1){
			couponCode = couponDesc.split("Use Coupon");
			couponCode = couponCode[1].trim();
			if(couponCode != couponCode.toUpperCase()){
				couponCode = "";
			}
		}
	}

	if(couponCode != ""){
		couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
	} 


	if($(".product-offer-note .offer-msg").length > 0){
		couponUrl = "http://www.fashionara.com/";
		couponCode = "";
		couponText = "";
		couponDesc = "";
		couponText = $(".product-offer-note .offer-msg:eq(0)").text().trim();
		if($(".product-offer-note .offer-msg a").length > 0){
			couponUrl = $(".product-offer-note .offer-msg:eq(0) a:eq(0)").attr("href").trim();
		}
		if(couponText.split("Use Coupon:").length > 1){
			couponCode = couponText.split("Use Coupon:");
			couponCode = couponCode[1].trim();
			couponCode = couponCode.split(".")[0].trim();

			if(couponCode != couponCode.toUpperCase()){
				couponCode = "";
			}

		}
		if(couponCode != ""){
			couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
		} 
	} 
	couponToSend = JSON.stringify(couponToSend);
	var jsonArr = [{'couponsExt': couponToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(1, jsonArr, 15, doNothing, []);    

}
sendCoupon();