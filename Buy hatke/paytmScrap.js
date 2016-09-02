//avail (1 = available, 0 = oos, -1 = permanently disconnected )
$ = jQuery.noConflict();
function sendPairs(){
	$ = jQuery.noConflict();
	arrayToSend = [];
	if($('.recentlyViewedNew .product-listing').length > 0){
		var slider = $('.recentlyViewedNew .product-listing');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.recentlyViewedNew .product-listing:eq('+ i +')').length > 0){
				link = $('.recentlyViewedNew .product-listing:eq('+ i +')').attr("href");
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
				if($('.recentlyViewedNew .product-listing:eq('+ i +')').find('.pro-deta .col1').length > 0){
					price = $('.recentlyViewedNew .product-listing:eq('+ i +')').find('.pro-deta:eq(0) .col1:eq(0)').text();
				}
				price = filter_price(price);

			}
			else{
				price = "";
			}
			if(isNaN(price) == true){
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && PID.split("/shop/p/").length > 1){
				arrayToSend.push([PID, price]);
			}

		} // for ends1

	}

	if($('.GridItems').length > 0){
		var slider = $('.GridItems');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;
		var PID;
		var prod = "";
		var image = "";
		var oos = 100;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			PID;
			prod = "";
			image = "";
			oos = 100;
			if($('.GridItems:eq('+ i +') a').length > 0){
				link = $('.GridItems:eq('+ i +') a:eq(0)').attr("href");
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
				if($('.GridItems:eq('+ i +')').find('img').length > 0){
					prod = $('.GridItems:eq('+ i +')').find('img:eq(0)').attr("alt").trim();
				}
				if($('.GridItems:eq('+ i +')').find('img').attr("ng-src").length > 0){
					image = $('.GridItems:eq('+ i +')').find('img:eq(0)').attr("ng-src");
				}
				else if($('.GridItems:eq('+ i +')').find('img').attr("src").length > 0){
					image = $('.GridItems:eq('+ i +')').find('img:eq(0)').attr("src");
				}
				if($('.GridItems:eq('+ i +')').find('.details li').length > 0){
					price = $('.GridItems:eq('+ i +')').find('.details:eq(0) li:eq(0)').text();
				}
				price = filter_price(price);

			}
			else{
				price = "";
			}
			if(isNaN(price) == true){
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && PID.split("/shop/p/").length > 1){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} // for ends1

	}


	if($('.carousel a').length > 0){
		var slider = $('.carousel a');
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
			if($('.carousel a:eq('+ i +')').length > 0){
				link = $('.carousel a:eq('+ i +')').attr("href");
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
				if($('.carousel a:eq('+ i +')').find('img').length > 0){
					prod = $('.carousel a:eq('+ i +')').find('img:eq(0)').attr("alt").trim();
				}
				if($('.carousel a:eq('+ i +')').find('img').attr("ng-src").length > 0){
					image = $('.carousel a:eq('+ i +')').find('img:eq(0)').attr("ng-src");
				}
				else if($('.carousel a:eq('+ i +')').find('img').attr("src").length > 0){
					image = $('.carousel a:eq('+ i +')').find('img:eq(0)').attr("src");
				}
				if($('.carousel a:eq('+ i +')').find('.details li').length > 0){
					price = $('.carousel a:eq('+ i +')').find('.details:eq(0) li:eq(0)').text();
				}
				price = filter_price(price);

			}
			else{
				price = "";
			}
			if(isNaN(price) == true){
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && PID.split("/shop/p/").length > 1){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} // for ends1

	}

	
	arrayToSend = JSON.stringify(arrayToSend);
	var jsonArr = [{'pairsPaytm': arrayToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []);  
}

function sendCurrent(){
	$ = jQuery.noConflict();
	curData = []; 	
	var prod = "";
	var image = "";
	var price = "";
	var cur_url = "";
	var PID = "";
	var current_status = 0;
	if(getAvailability() == 0){
		current_status = 1;
	}
	else if(getAvailability() == 1){
		current_status = 0;
	}
	var link = window.location.href;
	if($(".img-description h1").length > 0){
		prod = $(".img-description h1:eq(0)").text().trim();
	}

	if($('#midd-container-inner .product-details').length > 0){
		if($('#midd-container-inner .product-details').find('[itemprop="price"]').length > 0)
		{
			price = $('#midd-container-inner .product-details').find('[itemprop="price"]:eq(0)').text().trim();   
		}
		if(price != undefined || price != ""){
			price = filter_price(price);
		}
	}

	if(price == "" || price == 0 || price == undefined || isNaN(price)){
		if($('.discraption').length > 0){
			price = $('.discraption:eq(0)').html(); 
			if(price.split("Buy for").length > 1){
				price = price.split("Buy for");
				price = price[1];
				price = price.split("</span>")[0];
			}
		}
		if(price != undefined || price != ""){
			price = filter_price(price);
		}
	}
	if(price == "" || price == 0 ||  price == undefined || isNaN(price)){
		if($(".img-description .buy-bar .effPric").length > 0){
			price = $(".img-description .buy-bar:eq(0) .effPric:eq(0) span:eq(0)").text().trim();
			price = filter_price(price);
		}
		if(price == "" || price == 0 || price == undefined || isNaN(price)){
			if($('meta[property="og:price:amount"]').length > 0){
				price = $('meta[property="og:price:amount"]').attr('content').trim();
				price = filter_price(price);
			}
		}
		if(price == "" || price == 0 || price == undefined || isNaN(price)){
			if($('.img-description .buy-bar').length > 0){
				price = $('.img-description .buy-bar:eq(0) span:eq(0)').html();
				if(price.split("<").length > 1){
					price = price.split("<");
					price = price[0].trim();
				}
				if(price.toUpperCase().split("BUY FOR ").length > 1){
					price = price.toUpperCase().split("BUY FOR ");
					price = price[1].trim();
					;
					price = filter_price(price);
				}
			}
		}
	}
	if(isNaN(price) == true){
		price = "";
	}
	
	if($('.img-display-con .shown-image img').length > 0)
	{
		image = $('.img-display-con:eq(0) .shown-image:eq(0) img:eq(0)').attr('src').trim();
	}
	else if($('meta[property="og:image"]').length > 0)
	{
		image = $('meta[property="og:image"]').attr('content').trim();
	}
	else if($('[itemprop="image"]').length > 0 ){
		image = $('[itemprop="image"]').attr('src');
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
		if(PID.split("paytm.com").length>1){
			PID = PID.split("paytm.com");
			PID = PID[1];
		}
	}
	else{
		PID = "";
	}
	
	cur_url = window.location.href;
	if( PID!="" && PID.split("/shop/p/").length > 1){
		var breadcrumbF = getBreadCrumb();
		curData.push([prod, image, price, cur_url, current_status, PID, breadcrumbF, 1]);
		curData = JSON.stringify(curData);
		var jsonArr = [{'curDataPaytm': curData}];
		jsonArr = JSON.stringify(jsonArr);
		sendMessage(0, jsonArr, 0, doNothing, []);
	}
}




var check_prod_pg = 1;

function getProd(){
	//console.log("iwas called now" + $('#midd-container-inner .product-details').length);
	var prod = "";
	if($('#midd-container-inner .product-details').length > 0){
		if($('#midd-container-inner .product-details').find('[itemprop="name"]').length > 0)
		{
			prod = $('#midd-container-inner .product-details').find('[itemprop="name"]').text().trim(); 
			//console.log("prod1: "+prod);
			

		}

	}
	else if($('h2').length > 0)
	{
		prod = $("h2:eq(0)").text().trim();
		//console.log("prod2: "+prod);


	}
	if($(".img-description h1").length > 0){
		prod = $(".img-description h1:eq(0)").text().trim();
	}
	if($('.product').length>0 || $('meta[property="og:type"]').attr('content') == "product"){
		return prod;
	}
	else {
		return "";
	}
	// if(prod!="" && prod!= undefined && typeof(prod)!="undefined"){
	// 	title = prod;
	// 	return prod;
	// }
}


function getImage(){
	var image = "";
	if($('.img-display-con .shown-image img').length > 0)
	{
		image = $('.img-display-con:eq(0) .shown-image:eq(0) img:eq(0)').attr('src').trim();
	}
	else if($('#midd-container-inner .product-images img').length > 0)
	{
		image = $('#midd-container-inner .product-images img').attr('src');
	}
	else if($('meta[property="og:image"]').length > 0)
	{
		image = $('meta[property="og:image"]').attr('content').trim();
	}
	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	
	if($('#midd-container-inner .product-details').length > 0){
		if($('#midd-container-inner .product-details').find('[itemprop="price"]').length > 0)
		{
			price = $('#midd-container-inner .product-details').find('[itemprop="price"]:eq(0)').text().trim();   
		}
		if(price != undefined || price != ""){
			price = filter_price(price);
		}
	}

	if(price == "" || price == 0 || price == undefined || isNaN(price)){
		if($('.discraption').length > 0){
			price = $('.discraption:eq(0)').html(); 
			if(price.split("Buy for").length > 1){
				price = price.split("Buy for");
				price = price[1];
				price = price.split("</span>")[0];
			}
		}
		if(price != undefined || price != ""){
			price = filter_price(price);
		}
	}
	if(price == "" || price == 0 ||  price == undefined || isNaN(price)){
		if($(".img-description .buy-bar .effPric").length > 0){
			price = $(".img-description .buy-bar:eq(0) .effPric:eq(0) span:eq(0)").text().trim();
			price = filter_price(price);
		}
		if(price == "" || price == 0 || price == undefined || isNaN(price)){
			if($('meta[property="og:price:amount"]').length > 0){
				price = $('meta[property="og:price:amount"]').attr('content').trim();
				price = filter_price(price);
			}
		}
		if(price == "" || price == 0 || price == undefined || isNaN(price)){
			if($('.img-description .buy-bar').length > 0){
				price = $('.img-description .buy-bar:eq(0) span:eq(0)').html();
				if(price.split("<").length > 1){
					price = price.split("<");
					price = price[0].trim();
				}
				if(price.toUpperCase().split("BUY FOR ").length > 1){
					price = price.toUpperCase().split("BUY FOR ");
					price = price[1].trim();
					;
					price = filter_price(price);
				}
			}
		}
	}
	if(isNaN(price) == true){
		price = "";
	}
	return price;
}

function getAvailability(){
	var avail = 1;
	
	// if($('.error:eq(1).ng-hide').length > 0){
	// 	avail = 1;
	// }
	// else if($('.error:eq(1).ng-hide').length == 0){
	// 	avail = 1;
	// }
	if($(".img-description .buy-bar button").attr("disabled") == "disabled"){
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
	if(link.split('paytm.com').length < 2){
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
	var len_bread = $('.breadcrumbs-highlight li').length;

	for(i=0;i<len_bread;i++){
		breadcrumb = $('.breadcrumbs-highlight li:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	if(bread_final == ""){
		len_bread = $('.breadcrum li').length;

		for(i=0;i<len_bread;i++){
			breadcrumb = $('.breadcrum li:eq('+ i +')').text().trim();
			if(breadcrumb.split("/").length > 1){
				breadcrumb = breadcrumb.split("/");
				breadcrumb = breadcrumb[0].trim();
			}

			bread_final += breadcrumb + "*~";
		}
	}
	return bread_final;

}
function getModel(){
	var model = "";
	if($(".ProductDescription .heading").length > 0){
		var head_len = $(".ProductDescription .heading").length;
		for(var i=0;i<head_len;i++){
			if($(".ProductDescription .heading:eq("+i+")").text().trim().toUpperCase() == "GENERAL"){
				var model_len = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1").length;

				for(var j=0;j<model_len;j++){

					if($(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").text().trim().toUpperCase() == "MODEL ID"){

						model = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").parent().find("span:eq(1)").text().trim();
						break;
					}
					else{
						model = "";
					}
				}

			}
		}
	}
	return model;
}

function getColor(){
	var color = "";
	if($(".ProductDescription .heading").length > 0){
		var head_len = $(".ProductDescription .heading").length;
		for(var i=0;i<head_len;i++){
			if($(".ProductDescription .heading:eq("+i+")").text().trim().toUpperCase() == "GENERAL"){
				var color_len = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1").length;

				for(var j=0;j<color_len;j++){

					if($(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").text().trim().toUpperCase() == "COLOR"){

						color = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").parent().find("span:eq(1)").text().trim();
						break;
					}
					else{
						color = "";
					}
				}

			}
		}
	}
	return color;
}

function getIntStorage(){
	var intMem = "";
	if($(".ProductDescription .heading").length > 0){
		var head_len = $(".ProductDescription .heading").length;
		for(var i=0;i<head_len;i++){
			if($(".ProductDescription .heading:eq("+i+")").text().trim().toUpperCase() == "GENERAL"){
				var intMem_len = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1").length;

				for(var j=0;j<intMem_len;j++){

					if($(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").text().trim().toUpperCase() == "INTERNAL MEMORY"){

						intMem = $(".ProductDescription .heading:eq("+i+")").parent().find(".col1:eq("+j+")").parent().find("span:eq(1)").text().trim();
						break;
					}
					else{
						intMem = "";
					}
				}

			}
		}
	}
	return intMem;
}

function sendMobile(){
	var breadCrumb = getBreadCrumb();
	//console.log("getBreadCrumb: " + breadCrumb);
	if(breadCrumb.split("*~").length > 1 && breadCrumb.split("*~")[2].trim().toUpperCase() == "MOBILES" && getProd() != ""){
		var PID = getPID();
		var pos = 1331;
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
		//console.log("jsonArr: "+jsonArr);
		sendMessage(1, jsonArr, 19, doNothing, []);

	}
}
sendMobile();
// function sendCoupon(){
// 	$ = jQuery.noConflict();
// 	couponToSend = [];
// 	var cur_link = window.location.href;

// 	if(cur_link.split("/shop/p/").length > 1){

// 		if($('.product-details .offer-tc').length > 0){
// 			var slider = $('.product-details .offer-tc');
// 			var sliderLength = slider.length;
// 			var couponUrl = "";
// 			var couponCode = "";
// 			var couponText = "";
// 			var couponDesc = "";
// 			var couponExp = 0;
// 			var couponAt = 1331;

// 			for(i=0;i<sliderLength;i++){
// 				couponUrl = cur_link;
// 				couponCode = "";
// 				couponText = "";
// 				couponDesc = "";

// 				if($('.product-details .offer-tc:eq('+ i +')').parent().find(".orangetxt").length > 0){
// 					couponCode = $('.product-details .offer-tc:eq('+ i +')').parent().find(".orangetxt:eq(0)").text().trim();
// 				}

// 				if($('.product-details .offer-tc:eq('+ i +')').parent().find(".grey").length > 0){
// 					couponText = $('.product-details .offer-tc:eq('+ i +')').parent().find(".grey:eq(0)").text().trim();
// 				}

// 				if(couponCode != ""){
// 					couponToSend.push([couponCode, couponText, couponExp, couponUrl, couponDesc, couponAt]);
// 				}

// 			} 		

// 		}

// 	}

// 	if(cur_link.split("offer/termsconditions").length > 1){

// 		if($('#primary .col-md-4').length > 0){
// 			var slider = $('#primary .col-md-4');
// 			var sliderLength = slider.length;
// 			var couponUrl = "";
// 			var couponCode = "";
// 			var couponText = "";
// 			var couponDesc = "";
// 			var couponExp = 0;
// 			var couponAt = 1331;

// 			for(i=0;i<sliderLength;i++){
// 				couponUrl = cur_link;
// 				couponCode = "";
// 				couponText = "";
// 				couponDesc = "";

// 				if($('#primary .col-md-4:eq('+ i +')').find("tr").length > 0){
// 					couponCode = $('#primary .col-md-4:eq('+ i +')').find("tr:eq(1) td:eq(0) span:eq(0)").text().trim();
// 					couponText = $('#primary .col-md-4:eq('+ i +')').find("tr:eq(0) td:eq(0)").text().trim();
// 				}

// 				if(couponCode != ""){
// 					couponToSend.push([couponCode, couponText, couponExp, couponUrl, couponDesc, couponAt]);
// 				}

// 			} 		

// 		}

// 	}
// }

