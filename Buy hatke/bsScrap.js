$ = jQuery.noConflict();
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
				}
				else{
					PID = "";
				}
			}

			if(PID != ""){
				if($('.item:eq('+ i +')').find('.special-price .price').length > 0){

					price = $('.item:eq('+ i +')').find('.special-price .price').text();

				}
				else if($('.item:eq('+ i +')').find('.regular-price .price').length > 0){
					price = $('.item:eq('+ i +')').find('.regular-price .price').text();

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
	var jsonArr = [{'pairsBas': arrayToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []); 


}


function sendCurrent(){
	$ = jQuery.noConflict();
	curData = []; 	
	var prod = "";
	var image = "";
	var myPrice = "";
	var cur_url = "";
	var current_status = 0;
	var PID = "";
	var link = window.location.href;
	
	if($('.product-main-info .product-name h1').length > 0){
		prod = $('.product-main-info .product-name h1').text().trim();
	}

	if($('.product-main-info').find('.special-price .price').length > 0){

		myPrice = $('.product-main-info').find('.special-price .price').text();

	}
	else if($('.product-main-info').find('.regular-price .price').length > 0){
		myPrice = $('.product-main-info').find('.regular-price .price').text();

	}
	else{
		myPrice = "";
	}
	if(myPrice.split("Rs.").length > 1){
		myPrice = myPrice.split("Rs.");
		myPrice =myPrice[myPrice.length - 1];
	}
	
	myPrice = myPrice.split(",").join("").trim();

	if($('.product-view .product-img-box img').length > 0){
		image = $('.product-view .product-img-box img').attr('src');
	}
	
	if($('.discountLabelDetail img').attr('src') == "http://www.moodsofcloe.com/static/images/soldout.png"){
		current_status = 1;
	}
	
	if($('#notifydiv').text().toUpperCase().split("NOTIFY ME WHEN THIS PRODUCT IS IN STOCK").length > 1){
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
	var jsonArr = [{'curDataBas': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('.product-view').length > 0){
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
	if($('.product-main-info .product-name h1').length > 0){
		prod = $('.product-main-info .product-name h1').text().trim();
	}
	if($('.product-view').length > 0){
		return prod;
	}
	else{
		return "";
	}
}

function getImage(){
	var image = "";
	if($('.product-view .product-img-box img').length > 0){
		image = $('.product-view .product-img-box img').attr('src');
	}
	return image;
}

function getPrice(){
	price = "";
	myPrice = "";
	if($('.product-main-info').find('.special-price .price').length > 0){

		myPrice = $('.product-main-info').find('.special-price .price').text();

	}
	else if($('.product-main-info').find('.regular-price .price').length > 0){
		myPrice = $('.product-main-info').find('.regular-price .price').text();
	}
	price = myPrice;
	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if($('.discountLabelDetail img').attr('src') == "http://www.moodsofcloe.com/static/images/soldout.png"){
		avail = 0;
	}
	
	if($('#notifydiv').text().toUpperCase().split("NOTIFY ME WHEN THIS PRODUCT IS IN STOCK").length > 1){
		avail = 0;
	}
	if($('#ql-outofstock').length > 0){
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
	
	if(link.split('basicslife.com').length < 2){
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
	var couponAt = 1578;
	var cur_link = window.location.href;
	couponUrl = cur_link;
	couponCode = "";
	couponText = "";
	couponDesc = "";
	couponExp = 0;
	cp = "";
	last_li = "";
	if(cur_link.split("/fashion-offer").length > 1){


		if($('.limage a').length > 0){
			couponUrl = $('.limage a:eq(0)').attr('href').trim();
		}
		couponDesc = $('.limage li').text().trim();
		if($('.cms_page strong:eq(0)').length > 0){
			couponText = $('.cms_page strong:eq(0)').text().trim();
		}
		else{
			last_li = $('.limage li').length - 1;
			couponText = $('.limage li:eq('+last_li+')').text().trim();
		}
		if(couponDesc.split("Enter ").length > 1){
			cp = couponDesc.split("Enter ");
			cp = cp[1];
			if(cp.split(" ").length > 1){
				cp = cp.split(" ");
				cp = cp[0].trim();
			}
			else if(cp.split(",").length > 1){
				cp = cp.split(",");
				cp = cp[0].trim();
			}
			else if(cp.split(".").length > 1){
				cp = cp.split(".");
				cp = cp[0].trim();
			}
			if(cp == cp.toUpperCase()){
				couponCode = cp;
			}
			else{
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
sendCoupon()
couponToSend
