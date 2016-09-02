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

	if($('.prodBox').length > 0){
		var slider = $('.prodBox');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.prodBox:eq('+ i +') .product_url').length > 0){
				link = $('.prodBox:eq('+ i +') .product_url').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
				}
				else{
					PID = "";
				}
			}

			if(PID != ""){

				if($('.prodBox:eq('+ i +')').find('.prodPrice').length > 0){
					price = $('.prodBox:eq('+ i +')').find('.prodPrice').text();

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
if($('.outfitProdBox').length > 0){
	var slider = $('.outfitProdBox');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.outfitProdBox:eq('+ i +') a').length > 0){
			link = $('.outfitProdBox:eq('+ i +') a:eq(0)').attr("href");
			if(link != ""){
				PID = link;
				if(PID.split("?").length > 1){
					PID = PID.split("?");
					PID = PID[0];
				}
			}
			else{
				PID = "";
			}
		}

		if(PID != ""){

			if($('.outfitProdBox:eq('+ i +')').find('.prodPrice').length > 0){
				price = $('.outfitProdBox:eq('+ i +')').find('.prodPrice').text();

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

if($('.weRecommendProdBox').length > 0){
	var slider = $('.weRecommendProdBox');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.weRecommendProdBox:eq('+ i +') a').length > 0){
			link = $('.weRecommendProdBox:eq('+ i +') a:eq(0)').attr("href");
			if(link != ""){
				PID = link;
				if(PID.split("?").length > 1){
					PID = PID.split("?");
					PID = PID[0];
				}
			}
			else{
				PID = "";
			}
		}

		if(PID != ""){

			if($('.weRecommendProdBox:eq('+ i +')').find('.prodPrice').length > 0){
				price = $('.weRecommendProdBox:eq('+ i +')').find('.prodPrice').text();

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
var jsonArr = [{'pairsKoovs': arrayToSend}];
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
	var jsonArr = [{'curDataKoovs': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('#detail_product').length>0){
		sendMessage(0, jsonArr, 0, doNothing, []);
	}
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;
if($('.celebrityDetail').length > 0){
	check_prod_pg = 0; //celebrityPage
}
function getProd(){
	var prod = "";
	if($(".no-border").length > 0){
		prod = $(".no-border").text().trim();
	}
	if($('#detail_product').length>0){
		return prod;
	}
	else {
		return "";
	}
}

function getImage(){
	var image = "";
	if($("#finalimage").length > 0){
		image = $("#finalimage").attr("src");
	}
	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	if($(".product-price").length > 0) {
		price = $(".product-price").text().trim();
	}
	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if(($("#out_of_stock_img_layer_div").length > 0) && ($("#out_of_stock_img_layer_div").css("display") == "block")){
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
	if(link.split('koovs.com').length < 2){
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
	var len_bread = $('#breadcrumb').find('a').length;

	for(i=0;i<len_bread;i++){
		breadcrumb = $('#breadcrumb').find('a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}

function sendCoupon(){
	couponToSend = [];
	var cur_link = window.location.href;
	var couponUrl = "";
	var couponCode = "";
	var couponText = "";
	var couponDesc = "";
	var couponExp = 0;
	var couponAt = 22;
	couponUrl = "http://www.koovs.com/";
	couponCode = "";
	couponText = "";
	couponDesc = "";
	last_bread = 0;
	slider = $('.saleBannerSection img');
	sliderLength = slider.length;

	for(i=0;i<sliderLength;i++){
		couponUrl = "http://www.koovs.com/";
		couponCode = "";
		couponText = "";
		couponDesc = "";
		couponExp = 0;

		couponCode = "NO CODE REQUIRED";
		couponText = $('.saleBannerSection img:eq('+i+')').attr("alt").trim();
		couponUrl = $('.saleBannerSection img:eq('+i+')').parent().attr("href").trim();

		couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
	}
	couponToSend = JSON.stringify(couponToSend);
	var jsonArr = [{'couponsExt': couponToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon()


////////// WISH TO WATCH LIST STARTS ///////////
var cur_url = window.location.href;
if(cur_url.split("koovs.com/checkout/wishlist").length > 1){
	var importImg = returnResource("import_img.png");
	if($('#message-box').length>0){
		$('#message-box').after('<div id="importHatke"> <img src="'+importImg+'" alt="Click to import wishlist" height="50px" width="auto"/> </div>');
	}
}

$("#importHatke").click(function(){
	koovsWishList();
});

function koovsWishList(){
	wishListKoovs = [];
	var link = "";
	var prod = "";
	var url = "";
	var image = "";
	var price = "";
	var PID = "";
	var pos = 22;
	var brand = "";

	if($('.saved_items_list .prodBox').length > 0) {
		var slider = $('.saved_items_list .prodBox');
		var sliderLength = $('.saved_items_list .prodBox').length;

		for(i=0;i<sliderLength;i++){
			link = "";
			prod = "";
			image = "";
			price = "";
			url = "";
			PID = "";
			if($('.saved_items_list .prodBox:eq('+ i +')').find('.product_url').length > 0){
				link = $('.saved_items_list .prodBox:eq('+ i +')').find('.product_url').attr('href');
				PID = link;
				url = link;
				if(PID.split("?").length > 1){
					PID = PID.split("?");
					PID = PID[0];
				}

			}
			else{
				link = "";
				PID = "";
			}
			if(PID != ""){
				if($('.saved_items_list .prodBox:eq('+ i +')').find('.saved_item_price').length > 0){
					price = $('.saved_items_list .prodBox:eq('+ i +')').find('.saved_item_price:eq(0)').text().trim();
					price = filter_price(price);
				}
			}
			else{
				price = "";
			}
			if(isNaN(price)){
				price = "";
			}

			if($('.saved_items_list .prodBox:eq('+ i +')').find('.productImage').length > 0){
				
				prod = $('.saved_items_list .prodBox:eq('+ i +')').find('.productImage:eq(0)').attr('title').trim();
			}

			if($('.saved_items_list .prodBox:eq('+ i +')').find('.productImage').length > 0){
				image = $('.saved_items_list .prodBox:eq('+ i +')').find('.productImage:eq(0)').attr('src').trim();
			}
			prod = prod.split("'").join("").trim();
			prod = prod.split('"').join('').trim();
			if(PID != "" && price != ""){
				wishListKoovs.push([encodeURIComponent(PID), encodeURIComponent(prod), price, encodeURIComponent(image), pos, encodeURIComponent(url)]);
			}
		}

		// console.log("Wishlist: " + wishListKoovs);
		wishJson = JSON.stringify(wishListKoovs);
		var jsonArr = [{'wishList': wishJson}];
		jsonArr = JSON.stringify(jsonArr);
		sendMessage(1, jsonArr, 17, doNothing, []);  
		// console.log("WishlistJSON: " + wishJson);
	}

}

////////// WISH TO WATCH LIST ENDS ///////////
