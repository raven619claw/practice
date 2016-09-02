function getCategory(){
  var category = "";
  return category;
}
function sendPairs(){
	arrayToSend = [];
	if($('.unitProduct').length > 0){
		var slider = $('.unitProduct');
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
			if($('.unitProduct:eq('+ i +') a').length > 0){
				link = $('.unitProduct:eq('+ i +') a:eq(0)').attr('href');
				if(link != ""){
					PID = returnPID(link);
				}
			}
			if(PID != ""){
				if($('.unitProduct:eq('+ i +')').find('.prd_title').length > 0){
					prod = $('.unitProduct:eq('+ i +')').find('.prd_title:eq(0)').text().trim(); 
				}
				if($('.unitProduct:eq('+ i +')').find('.productImage img').length > 0){
					image = $('.unitProduct:eq('+ i +')').find('.productImage img').attr("src"); 
				}
				if($('.unitProduct:eq('+ i +')').find('.pricetag .deal_price').length > 0){
					price = $('.unitProduct:eq('+ i +')').find('.pricetag .deal_price').text().trim();
					price = filter_price(price);
				}
			}

			else{
				price = "";
			}
			if(PID != "" && price != ""){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

    } // for ends

}

arrayToSend = JSON.stringify(arrayToSend);
var jsonArr = [{'pairsAMB': arrayToSend}];
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
	var link = "";
	var PID = "";
	var avail = getAvailability();

	prod = getProd();
	if(avail == 0){
		current_status = 1;
	}	
	myPrice = getPrice();
	image = getImage();
	cur_url = window.location.href;
	PID = returnPID(cur_url);
	curData.push([prod, image, myPrice, cur_url, current_status, PID]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataAMB': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('#product').length > 0){
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
	

	if($("#product .productname").length > 0){
		prod1 = $("#product .productname:eq(0)").html();
		prod = prod1.split("<div");
		prod = prod[0].trim();

	}
	if(prod == ""){
		if($("#product .breadcrumb .active").length > 0){
			prod = $("#product .breadcrumb .active:eq(0)").text().trim();
			prod = prod.split("<div");
			prod = prod[0].trim();

		}
	}
	if($('#product').length > 0){
		return prod;
	}
	else{
		return "";
	}
}

function getImage(){
	var image = "";

	if($("#product .pdp_prod_view .pdpBig_img").length > 0){
		image = $("#product .pdp_prod_view .pdpBig_img").attr('href').trim();
	}
	else if($("#slider_pdp img").length > 0){
		image = $("#slider_pdp img:eq(0)").attr("src").trim();
	}
	return image;
}

function getPrice(){
	price = "";
	if($('#product .productpageprice [itemprop="offers"]').length > 0)
	{
		price = $('#product .productpageprice [itemprop="offers"]').html().trim();
		price = price.split("</span>");
		price = price[price.length - 1].trim();
		if(price.split("₹").length > 1){
			price = price.split("₹");
			price= price[1].trim();
		}
	}
	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if($('#product .cart.ofs_button').length > 0){
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
	if(pid.split("-p").length > 1){
		pid = pid.split("-p");
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
	if(pid.split("-p").length > 1){
		pid = pid.split("-p");
		pid = pid[pid.length - 1];
	}
	if(link.split('askmebazaar.com').length < 2){
		pid = 0;
	}
	if(link == ""){
		pid = 0;
	}
	
	return pid;
}