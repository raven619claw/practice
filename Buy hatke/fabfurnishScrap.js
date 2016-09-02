function getCategory(){
  var categories = getBreadCrumb();
  var index = 1;
  var category = "";
  if(categories != "" && categories != undefined){
    categories = categories.split("*~");
    category = categories[index];
  }
  return category;
}

someFlag = 0;
// function sendProdCpn(){
// 	// console.log("sendProdCpn was called");
// 	if(someFlag == 0 && $('#coupon_box_div #code').length > 0){
// 		cpnProd = [];
// 		var couponText = "";
// 		var couponCode = "";
// 		var couponURL = "";
// 		var couponExp = "0000-00-00 00:00:00";
// 		var couponDesc = "";
// 		var couponAt = 1000;
// 		if($('#coupon_box_div #code').length > 0){
// 			couponCode = $('#coupon_box_div #code').attr('value').trim();
// 			// console.log("couponCode: "+couponCode);
// 		}
// 		cpnProd.push([couponCode, couponText, couponExp, couponDesc, couponAt]);
// 		cpnProd = JSON.stringify(cpnProd);
// 		// console.log("cpnData: "+cpnProd);
// 		var jsonArr = [{'cpnData': cpnProd}];
// 		jsonArr = JSON.stringify(jsonArr);
// 		sendMessage(1, jsonArr, 10, doNothing, []);
// 		someFlag = 1;
// 	}
// 	else{
// 		setTimeout(function(){ sendProdCpn(); }, 1000);
// 	}
// }

// sendProdCpn();

function sendPairs(){
	arrayToSend = [];


	if($('.flotImgPriceNew').length > 0){
		var slider = $('.flotImgPriceNew');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;
		var pid1;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			pid1 = "";
			if($('.flotImgPriceNew:eq('+ i +')').length > 0){
				link = $('.flotImgPriceNew:eq('+ i +')').attr("href");
				if(link != ""){
					if(link.split("ct=").length > 1){
						link = decodeURIComponent(link);
						link = link.split("ct=");
						link = link[1];
					}
					if(link.split(".html").length > 1){
						link = link.split(".html");
						pid1 = link[0];
					}
					if(pid1.split("-").length > 1){
						pid1 = pid1.split("-");
						pid1 = pid1[pid1.length - 1];
					}
					if(parseFloat(pid1) != 0){
						PID = pid1;

					}
					else{
						PID = "";
					}
					if(PID.split(".com/").length > 1){
						PID = PID.split(".com/");
						PID = PID[1];
					}
				}
			}

			if(PID != ""){

				if($('.flotImgPriceNew:eq('+ i +')').find('.orngClrTextNew').length > 0){
					price = $('.flotImgPriceNew:eq('+ i +')').find('.orngClrTextNew').text();
					if(price.split("Rs.").length > 1){
						price = price.split("Rs.");
						price =price[1];
					}
					else if(price.split("RS.").length > 1){
						price = price.split("RS.");
						price =price[1];
					}
				}
				else{
					price = "";
				}
				price =price.split(",").join("").trim();


			}
			else{
				price = "";
			}

			if(PID != "" && price != ""){
				arrayToSend.push([PID, price]);
			}
    } // for ends1

}

if($('.topSeller a').length > 0){
	var slider = $('.topSeller a');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	var pid1;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		pid1 = "";
		if($('.topSeller a:eq('+ i +')').length > 0){
			link = $('.topSeller a:eq('+ i +')').attr("href");
			if(link != ""){
				if(link.split("ct=").length > 1){
					link = decodeURIComponent(link);
					link = link.split("ct=");
					link = link[1];
				}
				if(link.split(".html").length > 1){
					link = link.split(".html");
					pid1 = link[0];
				}
				if(pid1.split("-").length > 1){
					pid1 = pid1.split("-");
					pid1 = pid1[pid1.length - 1];
				}
				if(parseFloat(pid1) != 0){
					PID = pid1;

				}
				else{
					PID = "";
				}
				if(PID.split(".com/").length > 1){
					PID = PID.split(".com/");
					PID = PID[1];
				}
			}
		}

		if(PID != ""){

			if($('.topSeller a:eq('+ i +')').find('p').length > 0){
				price = $('.topSeller a:eq('+ i +')').find('p:eq(0)').html();
				price = price.split("<br>")[1];
				price = filter_price(price);
			}
			else{
				price = "";
			}
		}
		else{
			price = "";
		}

		if(PID != "" && price != "" || price == 0){
			arrayToSend.push([PID, price]);
		}
    } // for ends1

}


if($('.productsCatalog li').length > 0){
	var slider = $('.productsCatalog li');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	var prod = "";
	var image = "";
	var oos = 100;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		prod = "";
		image = "";
		oos = 100;
		if($('.productsCatalog li:eq('+ i +') .itm-link').length > 0){
			link = $('.productsCatalog li:eq('+ i +') .itm-link').attr("href");
			if(link != ""){
				if(link.split("ct=").length > 1){
					link = decodeURIComponent(link);
					link = link.split("ct=");
					link = link[1];
				}
				if(link.split(".html").length > 1){
					link = link.split(".html");
					pid1 = link[0];
				}
				if(pid1.split("-").length > 1){
					pid1 = pid1.split("-");
					pid1 = pid1[pid1.length - 1];
				}
				if(parseFloat(pid1) != 0){
					PID = pid1;

				}
				else{
					PID = "";
				}
				if(PID.split(".com/").length > 1){
					PID = PID.split(".com/");
					PID = PID[1];
				}
			}
		}
		if(PID != ""){

			if($('.productsCatalog li:eq('+ i +') .itmTitleCont').length > 0){
				prod = $('.productsCatalog li:eq('+ i +') .itmTitleCont:eq(0)').text().trim();
			}

			if($('.productsCatalog li:eq('+ i +') .itm-img').length > 0){
				image = $('.productsCatalog li:eq('+ i +') .itm-img:eq(0)').attr("src").trim();
			}
			if(image == ""){
				if($('.productsCatalog li:eq('+ i +') .itm-imageWrapper').length > 0){
					image = $('.productsCatalog li:eq('+ i +') .itm-imageWrapper:eq(0)').attr("id").trim();
				}
			}
			
			if($('.productsCatalog li:eq('+ i +') .soldOutText').length > 0){
				oos = 1;
			}
			else{
				oos = 0;
			}


			if($('.productsCatalog li:eq('+ i +') .itm-price').length > 0){
				if($('.productsCatalog li:eq('+ i +') .catItmPriceBox_orange .itm-priceSpecialnew').length > 0){
					price = $('.productsCatalog li:eq('+ i +') .catItmPriceBox_orange .itm-priceSpecialnew').text().trim();
					if(price.split("Rs.").length > 1){
						price = price.split("Rs.");
						price =price[1];
					}
					else if(price.split("RS.").length > 1){
						price = price.split("RS.");
						price =price[1];
					}

				}
				else if($('.productsCatalog li:eq('+ i +') .itm-priceSpecial').length > 0){
					price = $('.productsCatalog li:eq('+ i +') .itm-priceSpecial:eq(0)').text().trim();
					if(price.split("Rs.").length > 1){
						price = price.split("Rs.");
						price =price[1];
					}
					else if(price.split("RS.").length > 1){
						price = price.split("RS.");
						price =price[1];
					}

				}
				else{

					price = $('.productsCatalog li:eq('+ i +') .itm-price:eq(0)').text().trim();
					if(price.split("Rs.").length > 1){
						price = price.split("Rs.");
						price =price[1];
					}
					else if(price.split("RS.").length > 1){
						price = price.split("RS.");
						price =price[1];
					}
				}
				price = price.split(",").join("").trim();

			}
			else{
				price = "";
			}


    } //PID ends

    else{
    	price = "";
    }

    if(PID != "" && price != ""){
    	arrayToSend.push([PID, price, prod, image, oos]);
    }

    } // for ends1

}

if($('.prodVertRecommendLi').length > 0){
	var slider = $('.prodVertRecommendLi');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.prodVertRecommendLi:eq('+ i +') a').length > 0){
			link = $('.prodVertRecommendLi:eq('+ i +') a:eq(0)').attr("href");
			if(link != ""){
				if(link.split("ct=").length > 1){
					link = decodeURIComponent(link);
					link = link.split("ct=");
					link = link[1];
				}
				if(link.split(".html").length > 1){
					link = link.split(".html");
					pid1 = link[0];
				}
				if(pid1.split("-").length > 1){
					pid1 = pid1.split("-");
					pid1 = pid1[pid1.length - 1];
				}
				if(parseFloat(pid1) != 0){
					PID = pid1;

				}
				else{
					PID = "";
				}
				if(PID.split(".com/").length > 1){
					PID = PID.split(".com/");
					PID = PID[1];
				}
			}
		}

		if(PID != ""){

			if($('.prodVertRecommendLi:eq('+ i +') .recommProdPrice').length > 0){
				price = $('.prodVertRecommendLi:eq('+ i +') .recommProdPrice').text().trim();
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.");
					price =price[1];
				}
				else if(price.split("RS.").length > 1){
					price = price.split("RS.");
					price =price[1];
				}

				price = price.split(",").join("").trim();

			}
			else{
				price = "";
			}


    } //PID ends

    else{
    	price = "";
    }

    if(PID != "" && price != ""){
    	arrayToSend.push([PID, price]);
    }

    } // for ends1

}


if($('.longProdRecommendLi').length > 0){
	var slider = $('.longProdRecommendLi');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;

	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.longProdRecommendLi:eq('+ i +') a').length > 0){
			link = $('.longProdRecommendLi:eq('+ i +') a:eq(0)').attr("href");
			if(link != ""){
				if(link.split("ct=").length > 1){
					link = decodeURIComponent(link);
					link = link.split("ct=");
					link = link[1];
				}
				if(link.split(".html").length > 1){
					link = link.split(".html");
					pid1 = link[0];
				}
				if(pid1.split("-").length > 1){
					pid1 = pid1.split("-");
					pid1 = pid1[pid1.length - 1];
				}
				if(parseFloat(pid1) != 0){
					PID = pid1;

				}
				else{
					PID = "";
				}
				if(PID.split(".com/").length > 1){
					PID = PID.split(".com/");
					PID = PID[1];
				}
			}
		}
		if(PID != ""){

			if($('.longProdRecommendLi:eq('+ i +') .recommProdPrice').length > 0){
				price = $('.longProdRecommendLi:eq('+ i +') .recommProdPrice').text().trim();
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.");
					price =price[1];
				}
				else if(price.split("RS.").length > 1){
					price = price.split("RS.");
					price =price[1];
				}

				price = price.split(",").join("").trim();

			}
			else{
				price = "";
			}


    } //PID ends

    else{
    	price = "";
    }

    if(PID != "" && price != ""){
    	arrayToSend.push([PID, price]);
    }

    } // for ends1

}

arrayToSend = JSON.stringify(arrayToSend);
var jsonArr = [{'pairsFab': arrayToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(0, jsonArr, 0, doNothing, []);  
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
	var pid1 = "";

	prod = $('[itemprop="name"]:eq(0)').text().trim();
	if(($("#SoldOut").length > 0) && ($("#SoldOut").css("display") != "none")){
		current_status = 1; 
	}
	else{
		current_status = 0;
	}
	if(current_status == 0){

		if($('#product_special_price').length > 0){
			myPrice = $('#product_special_price').text();
		}
		if($('#special_price_box').length > 0){
			myPrice = $('#special_price_box').text();
		}
		else if($('#price_box').length > 0){
			myPrice = $('#price_box').text();
		}

		else if($('meta[itemprop="price"]').length > 0){
			myPrice = $('meta[itemprop="price"]').attr('content').trim();
		}

		if($('#coupon_block').length > 0){
			myPrice1 = $('#coupon_block').text();
			if(myPrice1.split("Get it for").length > 1){
				myPrice = myPrice1.split("Get it for")[1].trim();
			}
		}

		myPrice = filter_price(myPrice);
	}
	else{
		myPrice = "0";
	}
	image = $('meta[property="og:image"]').attr('content').trim();

	if(link.split("ct=").length > 1){
		link = decodeURIComponent(link);
		link = link.split("ct=");
		link = link[1];
	}
	if(link.split(".html").length > 1){
		link = link.split(".html");
		pid1 = link[0];
	}
	if(pid1.split("-").length > 1){
		pid1 = pid1.split("-");
		pid1 = pid1[pid1.length - 1];
	}
	if(parseFloat(pid1) != 0){
		PID = pid1;

	}
	else{
		PID = "";
	}
	if(PID.split(".com/").length > 1){
		PID = PID.split(".com/");
		PID = PID[1];
	}

	cur_url = window.location.href;
	curData.push([prod, image, myPrice, cur_url, current_status, PID]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataFab': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('[itemtype="http://schema.org/Product"]').length>0){
		sendMessage(0, jsonArr, 0, doNothing, []);
	}
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);




//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;
if($('[itemtype="http://schema.org/Product"]').length > 0){
	check_prod_pg = 1;
}
function getProd(){
	var prod = "";
	prod = $('[itemprop="name"]:eq(0)').text().trim();
	if($('[itemtype="http://schema.org/Product"]').length>0){
		return prod;
	}
	else {
		return "";
	}
}

function getImage(){
	var image = "";
	image = $('meta[property="og:image"]').attr('content').trim();
	return image;
}

function getPrice(){
	price = "";
	if($('#product_special_price').length > 0){
		price = $('#product_special_price').text().trim();
	}
	else{
		price = $('meta[itemprop="price"]').attr('content').trim();

		if($('#coupon_block').length > 0){
			price1 = $('#coupon_block').text();
			if(price1.split("Get it for").length > 1){
				price = price1.split("Get it for")[1].trim();
			}
		}
	}

	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if($('#SoldOut').css('display') == "block"){
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
	if(pid.split(".htm").length > 1){
		pid = pid.split(".htm")[0];
	}
	if(pid.split("-").length > 1){
		pid = pid.split("-");
		pid = pid[pid.length - 1];
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
	if(pid.split(".htm").length > 1){
		pid = pid.split(".htm")[0];
	}
	if(pid.split("-").length > 1){
		pid = pid.split("-");
		pid = pid[pid.length - 1];
	}
	if(link.split('fabfurnish.com').length < 2){
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
	var len_bread = $('.breadcrumbWideDesign').find('a').length;

	for(i=0;i<len_bread;i++){
		breadcrumb = $('.breadcrumbWideDesign').find('a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}

function sendCoupon(){
	$ = jQuery.noConflict();
	couponToSend = [];
	var cur_link = window.location.href;

	if($('#code').length > 0){
		var couponUrl = "http://www.fabfurnish.com/";
		var couponCode = "";
		var couponText = "";
		var couponDesc = "";
		var couponExp = 0;
		var couponAt = 1000;

		couponCode = $("#code").val();

		if($(".getit_cupon .extra-code").length > 0){
			couponText = $(".getit_cupon .extra-code:eq(0)").text().trim();
		}

		if($(".getit_cupon .show-tooltip li").length > 0){
			couponDesc = $(".getit_cupon .show-tooltip:eq(0) li:eq(0)").text().trim();
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


// var cur_url = window.location.href;

// if(cur_url.split("fabfurnish.com/customer/wishlist").length > 1){
// 	var importImg = returnResource("import_img.png");
// 	if($('#wishlist').length>0){
// 		$('#wishlist').before('<div id="importHatke"> <img src="'+importImg+'" alt="Click to import wishlist" height="50px" width="auto"/> </div>');
// 	}
// }

// $("#importHatke").click(function(){
// 	fabWishList();
// });

// function fabWishList(){
// 	$ = jQuery.noConflict();
// 	wishListFab = [];
// 	var link = "";
// 	var url = "";
// 	var prod = "";
// 	var image = "";
// 	var price = "";
// 	var PID = "";
// 	var pos = 1000;
// 	var brand = "";

// 	if($('.wishlistItems .ui-borderTop').length > 0) {
// 		var slider = $('.wishlistItems .ui-borderTop');
// 		var sliderLength = $('.wishlistItems .ui-borderTop').length;

// 		for(i=0;i<sliderLength;i++){
// 			link = "";
// 			url = "";
// 			prod = "";
// 			image = "";
// 			price = "";
// 			PID = "";
// 			if($('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistDetails a').length > 0){
// 				link = $('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistDetails:eq(0) a:eq(0)').attr('href');
// 				if(link.split("fabfurnish.com").length < 2){
// 					link = "https://www.fabfurnish.com" + link;
// 				}
// 				url = link;

// 				if(link.split("ct=").length > 1){
// 					link = decodeURIComponent(link);
// 					link = link.split("ct=");
// 					link = link[1];
// 				}
// 				if(link.split(".html").length > 1){
// 					link = link.split(".html");
// 					pid1 = link[0];
// 				}
// 				if(pid1.split("-").length > 1){
// 					pid1 = pid1.split("-");
// 					pid1 = pid1[pid1.length - 1];
// 				}
// 				if(parseFloat(pid1) != 0){
// 					PID = pid1;

// 				}
// 				else{
// 					PID = "";
// 				}
// 				if(PID.split(".com/").length > 1){
// 					PID = PID.split(".com/");
// 					PID = PID[1];
// 				}
// 			}
// 			else{
// 				link = "";
// 				PID = "";
// 			}
// 			if(PID != ""){
// 				if($('.wishlistItems .ui-borderTop:eq('+ i +')').find('.wishlistSpecialPrice').length > 0){
// 					price = $('.wishlistItems .ui-borderTop:eq('+ i +')').find('.wishlistSpecialPrice:eq(0)').text().trim();
// 					price = filter_price(price);
// 				}
// 				else if($('.wishlistItems .ui-borderTop:eq('+ i +')').find('.wishlistNormalPrice').length > 0){
// 					price = $('.wishlistItems .ui-borderTop:eq('+ i +')').find('.wishlistNormalPrice:eq(0)').text().trim();
// 					price = filter_price(price);
// 				}

// 			}
// 			else{
// 				price = "";
// 			}
// 			if(isNaN(price)){
// 				price = "";
// 			}

// 			if($('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistDetails a').length > 0){

// 				prod = $('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistDetails:eq(0) a:eq(0)').text().trim();
// 			}

// 			if($('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistImg img').length > 0){
// 				image = $('.wishlistItems .ui-borderTop:eq('+ i +')').find('.itm-wishlistImg img:eq(0)').attr('src').trim();
// 			}

// 			if(PID != "" && price != ""){
// 				wishListFab.push([encodeURIComponent(PID), encodeURIComponent(prod), price, encodeURIComponent(image), pos, encodeURIComponent(url)]);
// 			}
// 		}

//     // console.log("Wishlist: " + wishListFab);
//     wishJson = JSON.stringify(wishListFab);
//     var jsonArr = [{'wishList': wishJson}];
//     jsonArr = JSON.stringify(jsonArr);
//     sendMessage(1, jsonArr, 17, doNothing, []);  
//     // console.log("WishlistJSON: " + wishJson);
// }

// }
