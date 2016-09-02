function getCategory(){
  var categories = getBreadCrumb();
  var index = 0;
  var category = "";
  if(categories != "" && categories != undefined){
    categories = categories.split("*~");
    category = categories[index];
  }
  return category;
}  

function sendPairs(){
	var arrayToSend = [];

	if($('.grid-product').length > 0){
		var slider = $('.grid-product');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;
		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.grid-product:eq('+ i +') a').length > 0){
				link = $('.grid-product:eq('+ i +') a:eq(0)').attr('href');
				if(link != ""){
					if(link.split(".html").length > 1){
						link = link.split(".html")[0];
						if(link.split("/").length > 1){
							link = link.split("/");
							PID = link[link.length - 1]+".html";
						}
					}
					else if(link.split(".htm").length > 1){
						link = link.split(".htm")[0];
						if(link.split("/").length > 1){
							link = link.split("/");
							PID = link[link.length - 1]+".htm";
						}
					}
					else{
						PID = "";
					}
				}
				else{
					PID = "";
				}
			}
			if(PID != ""){
				if($('.grid-product:eq('+ i +')').find('.price').length > 0){
					price = $('.grid-product:eq('+ i +')').find('.price').text();
					price = price.split(",").join("").trim();
				}
			}

			else{
				price = "";
			}
			if(PID != "" && price != ""){
				arrayToSend.push([PID, price]);
			}

    } // for ends

}
if($('#recently_viewed_id .content li').length > 0){
	var slider = $('#recently_viewed_id li');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('#recently_viewed_id .content li:eq('+ i +') a').length > 0){
			link = $('#recently_viewed_id .content li:eq('+ i +') a:eq(0)').attr('href');
			if(link != ""){
				if(link.split(".html").length > 1){
					link = link.split(".html")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".html";
					}
				}
				else if(link.split(".htm").length > 1){
					link = link.split(".htm")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".htm";
					}
				}
				else{
					PID = "";
				}
			}
			else{
				PID = "";
			}
		}
		if(PID != ""){
			if($('#recently_viewed_id .content li:eq('+ i +')').find('.price').length > 0){
				price = $('#recently_viewed_id .content li:eq('+ i +')').find('.price').text();
				price = price.split(",").join("").trim();
			}
		}

		else{
			price = "";
		}
		if(PID != "" && price != ""){
			arrayToSend.push([PID, price]);
		}

    } // for ends

}
if($('.prd_info_left_blk').length > 0){
	var slider = $('.prd_info_left_blk');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.prd_info_left_blk:eq('+ i +') a').length > 0){
			link = $('.prd_info_left_blk:eq('+ i +') a:eq(0)').attr('href');
			if(link != ""){
				if(link.split(".html").length > 1){
					link = link.split(".html")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".html";
					}
				}
				else if(link.split(".htm").length > 1){
					link = link.split(".htm")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".htm";
					}
				}
				else{
					PID = "";
				}
			}
			else{
				PID = "";
			}
		}
		if(PID != ""){
			if($('.prd_info_left_blk:eq('+ i +')').find('.bs_main_price_vr').length > 0){
				price = $('.prd_info_left_blk:eq('+ i +')').find('.bs_main_price_vr').text();
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.")[1];
				}
				price = price.split(",").join("").trim();
			}
		}

		else{
			price = "";
		}
		if(PID != "" && price != ""){
			arrayToSend.push([PID, price]);
		}

    } // for ends

}
if($('.bs_cntnr_item').length > 0){
	var slider = $('.bs_cntnr_item');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.bs_cntnr_item:eq('+ i +') a').length > 0){
			link = $('.bs_cntnr_item:eq('+ i +') a:eq(0)').attr('href');
			if(link != ""){
				if(link.split(".html").length > 1){
					link = link.split(".html")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".html";
					}
				}
				else if(link.split(".htm").length > 1){
					link = link.split(".htm")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".htm";
					}
				}
				else{
					PID = "";
				}
			}
			else{
				PID = "";
			}
		}
		if(PID != ""){
			if($('.bs_cntnr_item:eq('+ i +')').find('.bs_main_price').length > 0){
				price = $('.bs_cntnr_item:eq('+ i +')').find('.bs_main_price').text();
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.")[1];
				}
				price = price.split(",").join("").trim();
			}
		}

		else{
			price = "";
		}
		if(PID != "" && price != ""){
			arrayToSend.push([PID, price]);
		}

    } // for ends

}

if($('.list-product').length > 0){
	var slider = $('.list-product');
	var sliderLength = slider.length;
	var link;
	var price;
	var PID;
	for(i=0;i<sliderLength;i++){
		price = "";
		PID = "";
		if($('.list-product:eq('+ i +') a').length > 0){
			link = $('.list-product:eq('+ i +') a:eq(0)').attr('href');
			if(link != ""){
				if(link.split(".html").length > 1){
					link = link.split(".html")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".html";
					}
				}
				else if(link.split(".htm").length > 1){
					link = link.split(".htm")[0];
					if(link.split("/").length > 1){
						link = link.split("/");
						PID = link[link.length - 1]+".htm";
					}
				}
				else{
					PID = "";
				}
			}
			else{
				PID = "";
			}
		}
		if(PID != ""){
			if($('.list-product:eq('+ i +')').find('.details .product-price .price').length > 0){
				price = $('.list-product:eq('+ i +')').find('.details .product-price .price').text();
				if(price.split("Rs.").length > 1){
					price = price.split("Rs.")[1];
				}
				price = price.split(",").join("").trim();
			}
		}

		else{
			price = "";
		}
		if(PID != "" && price != ""){
			arrayToSend.push([PID, price]);
		}

    } // for ends

}
arrayToSend = JSON.stringify(arrayToSend);
var jsonArr = [{'pairsShopClues': arrayToSend}];
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
	var link = window.location.href;
	var PID = "";
	var breadcrumb_str = getBreadCrumb();

	// var breadcrumb = "";
	// var breadcrumb_str = "";
	// var breadcrumb_len = $('.breadcrumb-pages li').length - 1;

	// for(i=0;i<breadcrumb_len;i++){
	// 	breadcrumb = $('.breadcrumb-pages li:eq('+ i +')').text().trim();
	// 	breadcrumb_str += breadcrumb + "*~";
	// }

	if($(".mainbox-title").length > 0){
		prod = $(".mainbox-title").text().trim();
	}
	else if($('.mid_con h2').length > 0){
		prod = $('.mid_con h2').text();
	}
	else if($('.product .product-about h1').length > 0){
		prod = $('.product .product-about h1').text().trim();
	}
	else{
		prod = "";
	}
	if($('.out-of-stock').length > 0){
		var current_status = 1;
	}
	else{
		var current_status = 0;
	}
	var count = $(".mobile-prc-table").find(".price").length;
	var prod_price = $(".mobile-prc-table .price").eq(count-1).text();
	var deal_check = prod_price.split("Deal");
	if (deal_check.length > 1) 
	{
		var split_str = prod_price.split(',').join("");
		if(split_str.split("Rs.").length > 1)
		{
			myPrice = split_str.split("Rs.")[1];
		}
		else
		{
			myPrice = split_str;
		}

	}
	else if($('.product .product-pricing .price').length > 0){
		price1 = $('.product .product-pricing .price').html();
		if(price1.split("</label>").length > 1){
			myPrice = price1.split("</label>")[1];
		}

		if(myPrice.split('">').length > 1){
			myPrice = myPrice.split('">')[1];
		}
		if(myPrice.split('<').length > 1){
			myPrice = myPrice.split('<')[0];
		}
		if(myPrice.split("Rs.").length > 1)
		{
			myPrice = myPrice.split("Rs.")[1];
		}
		if(myPrice.split("/").length > 1)
		{
			myPrice = myPrice.split("/")[0];
		}
		myPrice = myPrice.split(",").join("").trim();
		//console.log("price is " + myPrice);
	}
	else
	{
		var split_str = prod_price.split(',').join("");
		if(split_str.split("Rs.").length > 1)
		{
			myPrice = split_str.split("Rs.")[0];
		}
		else
		{
			myPrice = split_str;
		}

	}
	
	if(isNaN(myPrice)){
		myPrice = "";
	}
	if($(".jqzoom").length > 0){
		image = $(".jqzoom").attr("href");
	}
	else if($('.mid_con img').length > 0){
		image = $('.mid_con img').attr("src");
	}
	else{
		image = "";
	}

	if(link.split(".html").length > 1){
		link = link.split(".html")[0];
		if(link.split("/").length > 1){
			link = link.split("/");
			PID = link[link.length - 1]+".html";
		}
	}
	else if(link.split(".htm").length > 1){
		link = link.split(".htm")[0];
		if(link.split("/").length > 1){
			link = link.split("/");
			PID = link[link.length - 1]+".htm";
		}
	}
	else{
		PID = "";
	}

	cur_url = window.location.href;
	curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumb_str]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataShopClues': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('.product').length>0){
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

	if($('.name h1').length > 0){
		prod = $('.name h1').text().trim();
	}
	if($('.product').length>0){
		return prod;
	}
	else {
		return "";
	}
	// //console.log("prod: "+prod);
}

function getImage(){
	var image = "";
	if($('.img').length > 0){
		image = $('.img').attr('src'); 
	}
	else if($('.zoomPup img').length > 0){
		image = $('.zoomPup img:eq(0)').attr('src');
	}
	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	if($('.product-pricing .price').length > 0){
		price = $('.product-pricing .price').text().trim();
		price = filter_price(price);
	}
	return price;
}

function getAvailability(){
	var avail = 1;
	if($('.price-hldr .o-stock').length > 0){
		avail = 0;
	}
	else if($('.out-of-stock').length > 0){
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

	// if(pid.split("/").length > 1){
	// 	pid = pid.split("/");
	// 	pid = pid[pid.length - 1];
	// }

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
	if(link.split('shopclues.com').length < 2){
		pid = 0;
	}
	if(link == ""){
		pid = 0;
	}

	// if(pid.split("/").length > 1){
	// 	pid = pid.split("/");
	// 	pid = pid[pid.length - 1];
	// }

	return pid;



}

function getBreadCrumb(){
	var breadcrumb = "";
	var bread_final = "";
	var len_bread = $('.breadcrumb-pages a').length;

	for(i=1;i<len_bread;i++){
		breadcrumb = $('.breadcrumb-pages a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}


function getModel(){
	var model = "";
	if($(".product-details-list .MsoNormalTable").length > 0){
		var tab_len = $(".product-details-list .MsoNormalTable").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-details-list .MsoNormalTable:eq("+i+") strong").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") strong:eq(0) span:eq(0)").text().trim().toUpperCase() == "GENERAL"){

				var lab_len = $(".product-details-list .MsoNormalTable:eq("+i+") tr").length;

				for(var j=1;j<lab_len;j++){
					if($(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "MODEL"){
						model = $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
					}
				}
				break;
			}
		}
	}
	else if($(".product-features-list label").length > 0){
		var tab_len = $(".product-features-list label").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-features-list label:eq("+i+")").text().trim().toUpperCase() == "MODEL ID:"){
				model = $(".product-features-list span:eq("+i+")").text().trim();
				break;
			}
		}
	}
	if(model == ""){
		if($(".specTable .specsKey").length > 0){
			var tab_len = $(".specTable .specsKey").length;
			for(var t=0;t<tab_len;t++){
				if($(".specTable .specsKey:eq("+t+")").text().trim().toUpperCase() == "MODEL NAME"){
					model = $(".specTable .specsValue:eq("+t+")").text().trim();
				}
			}

		}
	}
	return model;
}


function getIntStorage(){
	var intMem = "";
	if($(".product-details-list .MsoNormalTable").length > 0){
		var tab_len = $(".product-details-list .MsoNormalTable").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-details-list .MsoNormalTable:eq("+i+") strong").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") strong:eq(0) span:eq(0)").text().trim().toUpperCase() == "MEMORY & STORAGE"){

				var lab_len = $(".product-details-list .MsoNormalTable:eq("+i+") tr").length;

				for(var j=1;j<lab_len;j++){
					if($(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "INTERNAL MEMORY"){
						intMem = $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
					}
				}
				break;
			}
		}
	}
	else if($(".product-features-list label").length > 0){
		var tab_len = $(".product-features-list label").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-features-list label:eq("+i+")").text().trim().toUpperCase() == "INCLUDED MEMORY CARD:"){
				intMem = $(".product-features-list span:eq("+i+")").text().trim();
				break;
			}
		}
	}
	if(intMem == ""){
		if($(".product-details-list p").length > 0){

			var tab_len = $(".product-details-list p").length;
			for(var i=0;i<tab_len;i++){
				if($(".product-details-list p:eq("+i+")").text().trim().toUpperCase().split("BUILT-IN MEMORY:").length > 1){
					intMem = $(".product-details-list p:eq("+i+")").text().trim().toUpperCase().split("BUILT-IN MEMORY:");
					intMem = intMem[1].trim();
					if(intMem.length > 7 && intMem.toUpperCase().split("GB").length < 2 && intMem.toUpperCase().split("MB").length < 2){
						intMem = "";
					}
				}
			}

		}
	}
	if(intMem == ""){
		if($(".specTable .specsKey").length > 0){
			var tab_len = $(".specTable .specsKey").length;
			for(var t=0;t<tab_len;t++){
				if($(".specTable .specsKey:eq("+t+")").text().trim().toUpperCase() == "INTERNAL"){
					intMem = $(".specTable .specsValue:eq("+t+")").text().trim();
				}
			}

		}
	}
	return intMem;
}

function getColor(){
	var color = "";
	if($(".product-details-list .MsoNormalTable").length > 0){
		var tab_len = $(".product-details-list .MsoNormalTable").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-details-list .MsoNormalTable:eq("+i+") strong").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") strong:eq(0) span:eq(0)").text().trim().toUpperCase() == "GENERAL"){

				var lab_len = $(".product-details-list .MsoNormalTable:eq("+i+") tr").length;

				for(var j=1;j<lab_len;j++){
					if($(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td").length > 0 && $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(0)").text().trim().toUpperCase() == "COLOR"){
						color = $(".product-details-list .MsoNormalTable:eq("+i+") tr:eq("+j+") td:eq(1)").text().trim();
					}
				}
				break;
			}
		}
	}
	else if($(".product-features-list label").length > 0){
		var tab_len = $(".product-features-list label").length;
		for(var i=0;i<tab_len;i++){
			if($(".product-features-list label:eq("+i+")").text().trim().toUpperCase() == "COLORS:"){
				color = $(".product-features-list span:eq("+i+")").text().trim();
				if(color.split(" - ").length > 1){
					color = color.split(" - ");
					color = color[0].trim();
				}
				break;
			}
		}
	}
	if(color == ""){
		if($(".specTable .specsKey").length > 0){
			var tab_len = $(".specTable .specsKey").length;
			for(var t=0;t<tab_len;t++){
				if($(".specTable .specsKey:eq("+t+")").text().trim().toUpperCase() == "HANDSET COLOR"){
					color = $(".specTable .specsValue:eq("+t+")").text().trim();
				}
			}

		}
	}
	return color;
}

function sendMobile(){
	var breadCrumb = getBreadCrumb();
	// console.log("getBreadCrumb: " + breadCrumb);
	if( breadCrumb.split("*~").length > 1 && (breadCrumb.split("*~")[1].trim().toUpperCase() == "MOBILE PHONES" || breadCrumb.split("*~")[1].trim().toUpperCase() == "MOBILES (SELLER CERTIFIED)") && getProd() != ""){
		var PID = getPID();
		var pos = 421;
		var price = getPrice();
		var image = getImage();
		var avail = getAvailability();
		var mainTitle = getProd();
		var modelName = getModel();
		var color = getColor();
		var intStorage = getIntStorage();
		var link = window.location.href;
		
		var jsonArr = [{'PID': encodeURIComponent(PID), 'pos': pos, 'price': price, 'image': image, 'avail': avail, 'mainTitle': encodeURIComponent(mainTitle), 'modelName': encodeURIComponent(modelName), 'color': encodeURIComponent(color), 'intStorage': encodeURIComponent(intStorage), 'link': encodeURIComponent(link) }];
		jsonArr = JSON.stringify(jsonArr);
		// console.log("jsonArr: "+jsonArr);
		sendMessage(1, jsonArr, 19, doNothing, []);
	}
}
sendMobile();

// function sendCoupon(){
//   couponToSend = [];
//   var cur_link = window.location.href;
//   var couponUrl = "";
//   var couponCode = "";
//   var couponText = "";
//   var couponDesc = "";
//   var couponExp = 0;
//   var couponAt = 421;
//   couponUrl = "http://www.shopclues.com/";
//   couponCode = "";
//   couponText = "";
//   couponDesc = "";
//   slider = $("#offersWrap").find(".offer-data");
//   sliderLength = slider.length;

//   for(i=0;i<sliderLength;i++){
//     couponUrl = "http://www.shopclues.com/";
//     couponCode = "";
//     couponText = "";
//     couponDesc = "";
//     couponExp = 0;

//     couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
//   }
//   couponToSend = JSON.stringify(couponToSend);
//   var jsonArr = [{'couponsExt': couponToSend}];
//   jsonArr = JSON.stringify(jsonArr);
//   // sendMessage(1, jsonArr, 14, doNothing, []);  
// }
// // sendCoupon()
