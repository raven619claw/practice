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
function sendPairs(){
	arrayToSend = [];
	if($('#productlist .productbox').length > 0){
		var slider = $('#productlist .productbox');
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
			if($('#productlist .productbox:eq('+ i +') a').length > 0){
				if($('#productlist .productbox:eq('+ i +')').find('img').length > 0){

					image = $('#productlist .productbox:eq('+ i +')').find('img:eq(0)').attr("src");
					if(image.split("(").length > 1){
						link = image.split("(");
							link = link[0].trim();
							if(link.split("/").length > 1){
								link = link.split("/");
								link = link[link.length - 1].trim();

							}
							link = "http://www.americanswan.com/Lazybrook-Green-Multi-Shirt-pd-" + link;
						}
						else{
							link = "";
						}
					}
					if(link != "" && link.split("javascript:void(0)").length > 1){
						link = "";
					}
					else if(link != "" && link.split("www.americanswan.com").length < 2){
						link = "http://www.americanswan.com" + link;
					}
					if(link != "" && link != undefined){
						PID = returnPID(link);
					}
					else{
						PID = "";
					}
				}

				if(PID != ""){
					if($('#productlist .productbox:eq('+ i +') .productinfo h3').length > 0){

						prod = $('#productlist .productbox:eq('+ i +') .productinfo h3:eq(0)').text().trim();

					}
					if($('#productlist .productbox:eq('+ i +') .databox').find('.ig-truncate-related-product').length > 0){

						image = $('#productlist .productbox:eq('+ i +') .databox:eq(0)').find('.ig-truncate-related-product:eq(0)').attr("src");

					}
					if($('#productlist .productbox:eq('+ i +') .productinfo').find('.new-price').length > 0){

						price = $('#productlist .productbox:eq('+ i +') .productinfo').find('.new-price:eq(0)').text();
					}

					price = filter_price(price);

					if(price == "" || price == undefined || price == 0 || isNaN(price)){
						if($('#productlist .productbox:eq('+ i +') .databox').find('.ig-truncate-related-product').length > 0){

							price = $('#productlist .productbox:eq('+ i +') .databox:eq(0)').find('.ig-truncate-related-product:eq(0)').attr("product-price");
							if(price.split("Rs").length > 1){
								price = price.split("Rs");
								price = price[1].trim();
								price = filter_price(price);
							}

						}
					}

				}
				else{
					price = "";
				}

				if(PID != "" && price != ""){
					arrayToSend.push([PID, price, prod, image , oos]);
				}

		} // for ends1

	}
	arrayToSend = JSON.stringify(arrayToSend);
	var jsonArr = [{'pairsAMS': arrayToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []); 
}


function sendCurrent(){
	curData = []; 	
	var prod = getProd();
	var image = getImage();
	var myPrice = getPrice();
	var PID = getPID();
	var current_status = 0;
	var avail = getAvailability();
	if(avail == 1){
		current_status = 0;
	}
	else if(avail == 0){
		current_status = 1;
	}
	var cur_url = window.location.href;
	curData.push([prod, image, myPrice, cur_url, current_status, PID]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataAMS': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('#productdetail').length > 0){
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
	if($('#productdetail h2').length > 0){
		prod = $('#productdetail h2:eq(0)').text().trim();
	}
	if($('#productdetail').length > 0){
		return prod;
	}
	else {
		return "";
	}

  // //console.log("prod: "+prod);
}

function getImage(){
	var image = "";

	if($('#productdetail .proimages img').length > 0){
		image = $('#productdetail .proimages img:eq(0)').attr('src');
	}
	if(image == ""){
		image = $('meta[property="og:image:url"]').attr('content');
	}

	return image;
}

function getPrice(){
	price = "";
	if($('#productdetail .ig-onlySalePriceSize').length > 0){
		price = $('#productdetail .ig-onlySalePriceSize:eq(0)').text().trim();
	}
	else if($('#detailright .rs_icon').length > 0){
		var len = $('#detailright .rs_icon').length - 1;
		price = $('#detailright .rs_icon:eq('+len+')').text().trim();
	}
	price = filter_price(price);
	// if(price == "" || price == undefined || price == 0 || isNaN(price)){
	// 	if($('meta[property="og:price:amount"]').length > 0){
	// 		price = $('meta[property="og:price:amount"]').attr('content').trim();
	// 		price = filter_price(price);
	// 	}
	// }
	return price;
}

function getAvailability(){
	var avail = 1;
	if($('.Product-Detail .soldout-icon ').length > 0){
		avail = 0;
	}


	return avail;

}
function getPID(){

	var link = window.location.href;
	var pid = link;

	if(pid.split("#").length > 1){
		pid = pid.split("#")[0].trim();

	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0].trim();

	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0].trim();

	}
	if(pid.split("-pd-").length > 1){
		pid = pid.split("-pd-");
		pid = pid[1].trim();

	}
	if(pid.split("/").length > 1){
		pid = pid.split("/")[0].trim();

	}
	if(pid != pid.toUpperCase()){
		pid = "";
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
	if(pid.split("-pd-").length > 1){
		pid = pid.split("-pd-");
		pid = pid[1].trim();

	}
	if(pid.split("/").length > 1){
		pid = pid.split("/")[0].trim();

	}
	if(pid != pid.toUpperCase()){
		pid = "";
	}
	if(link.split('americanswan.com').length < 2){
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
	var len_bread = $('.bredcrum').find('a').length;

	for(i=0;i<len_bread-1;i++){
		breadcrumb = $('.bredcrum').find('a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;
}
