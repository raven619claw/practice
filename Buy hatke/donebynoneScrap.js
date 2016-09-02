
$ = jQuery.noConflict();

function getCategory(){
  var category = "";
  return category;
}
function sendPairs(){
	arrayToSend = [];

	if($('.product-category .column').length > 0){
		var slider = $('.product-category .column');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.product-category .column:eq('+ i +') a').length > 0){
				link = $('.product-category .column:eq('+ i +') a:eq(0)').attr("href");
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
				if($('.product-category .column:eq('+ i +')').find('.NewPdName2 .corel-txt').length > 0){

					price = $('.product-category .column:eq('+ i +')').find('.NewPdName2 .corel-txt').text();

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
var jsonArr = [{'pairsDone': arrayToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(0, jsonArr, 0, doNothing, []);  
}


function sendCurrent(){
	curData = [];   
	var prod = "";
	var image = "";
	var myPrice = "";
	var cur_url = "";
	var PID = "";
	var current_status = 0;
	prod = $('meta[property="og:title"]').attr('content');
	if($("#outofstock").length > 0){
		current_status = 1;
	}
	else{
		current_status = 0;
	}
	if($('.brd-bot-small h4').text().split("Rs.").length > 1)
	{
		myPrice = $('.brd-bot-small h4:eq(0)').text().split("Rs.")[1].split(",").join("").trim();
	}
	else
	{
		myPrice = $('.brd-bot-small h4:eq(0)').text().split(",").join("").trim();

	}
	if(myPrice==""){
		myPrice = $('.corel-txt').text().split("Rs.")[1].split(",").join("").trim();
	} 

	image = $('meta[property="og:image"]').attr('content').trim();
	var link = window.location.href;
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
	var jsonArr = [{'curDataDone': curData}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []);
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
window.setTimeout(sendPairs, 5000);
window.setTimeout(sendPairs, pollInterval);

//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = 1;

function filter_price(pr){
	if(pr.split("Rs.").length > 1){
		pr = pr.split("Rs.")[1];
	}
	if(pr.split("Rs").length > 1){
		pr = pr.split("Rs")[1];
	}
	if(pr.split("INR").length > 1){
		pr = pr.split("INR")[1];
	}
	if(pr.split("Inr").length > 1){
		pr = pr.split("Inr")[1];
	}
	if(pr.split("RS.").length > 1){
		pr = pr.split("RS.")[1];
	}
	if(pr.split("RS").length > 1){
		pr = pr.split("RS")[1];
	}
	if(pr.split("R").length > 1){
		pr = pr.split("R")[1];
	}
	if(pr.split("`").length > 1){
		pr = pr.split("`")[1];
	}
	if(pr.split("MRP").length > 1){
		pr = pr.split("MRP")[1];
	}
	if(pr.split("mrp").length > 1){
		pr = pr.split("mrp")[1];
	}
	if(pr.split("/").length > 1){
		pr = pr.split("/")[0];
	}
	if(pr.split("₹").length > 1){
		pr = pr.split("₹")[1].trim();
	}

	pr = pr.split(",").join("").trim();
	pr = parseFloat(pr);
	return pr;

}

function getProd(){
	var prod = "";
	prod = $('meta[property="og:title"]').attr('content');
	// //console.log("prod: "+prod);
	return prod;
}

function getImage(){
	var image = "";
	image = $('meta[property="og:image"]').attr('content').trim();
	return image;
}

function getPrice(){
	price = "";
	if($('.brd-bot-small h4:eq(0)').length > 0){
		price = $('.brd-bot-small h4:eq(0)').text().trim();
	}
	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if($("#outofstock").length > 0){
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
	if(link == ""){
		pid = 0;
	}
	if(pid.split("#").length > 1){
		pid = pid.split("#")[0];
	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0];
	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0];
	}
	if(link.split('donebynone.com').length < 2){
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

	for(i=0;i<len_bread/2;i++){
		breadcrumb = $('.breadcrumbs').find('a:eq('+ i +')').eq(0).text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}