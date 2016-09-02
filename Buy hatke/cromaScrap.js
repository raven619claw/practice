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

function sendCurrent(){
	curData = [];   
	var prod = "";
	var image = "";
	var myPrice = "";
	var cur_url = "";
	var current_status = 0;
	var avail = getAvailability();
	var link = "";
	var PID = "";
	
	prod = getProd();
	if(avail == 0){
		current_status = 1;
	}
	
	myPrice = getPrice();
	image = getImage();
	PID = returnPID(window.location.href);
	var breadcrumbF = getBreadCrumb();
	cur_url = window.location.href;
	curData.push([prod, image, myPrice, cur_url, current_status, PID, breadcrumbF, 1]);
	curData = JSON.stringify(curData);
	var jsonArr = [{'curDataCroma': curData}];
	jsonArr = JSON.stringify(jsonArr);
	if($('.productDetailsPanel').length>0){
		sendMessage(0, jsonArr, 0, doNothing, []);
	}
}

var pollInterval = 1000 * 15;
window.setTimeout(sendCurrent, 5000);
// window.setTimeout(sendPairs, 5000);
// window.setTimeout(sendPairs, pollInterval);


//avail (1 = available, 0 = oos, -1 = permanently disconnected )
var check_prod_pg = "";

function getProd(){
	var prod = "";

	if($(".productDescription h1").length > 0){
		prod = $(".productDescription h1:eq(0)").text().trim();
	}
	if($('.productDetailsPanel').length>0){
		return prod;
	}
	else {
		return "";
	}
}

function getImage(){
	var image = "";
	if($("#imageLink").length > 0 && $("#imageLink img").length > 0){
		image = $("#imageLink img:eq(0)").attr("src");
		if(image.split("croma.com/").length < 2){
			image = "http://www.croma.com/" + image;
		}
	}
	
	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	if($(".cta h2").length > 0)
	{
		price = $(".cta h2").text().trim();
	}
	else{
		price = "";
	}

	price = filter_price(price);
	return price;
}

function getAvailability(){
	var avail = 1;
	if($(".addToCartButton.outOfStock").length > 0){
		avail = 0;
	}
	return avail;

}


function getPID(){
	var link = window.location.href;
	var pid = link;

	if(pid.split("/p/").length > 1){
		pid = pid.split("/p/")[1];

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
			pid = pid.split("/")[0];
		}
	}
	else{
		pid = "";
	}
	return pid;

}

function returnPID(link){
	var pid = link;
	if(pid.split("/p/").length > 1){
		pid = pid.split("/p/")[1];

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
			pid = pid.split("/")[0];
		}
	}
	else{
		pid = "";
	}
	if(link.split('croma.com').length < 2){
		pid = "";
	}
	if(link == ""){
		pid = "";
	}
	return pid;
}


function getBreadCrumb(){
	var breadcrumb = "";
	var bread_final = "Home*~";
	var len_bread = $('#breadcrumb').find('a').length;

	for(i=1;i<len_bread;i++){
		breadcrumb = $('#breadcrumb').find('a:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;
}



// function getModel(){
// 	var model = "";
// 	if($(".SpecificationsDiv .w50p").length > 0){
// 		var spec_len = $(".SpecificationsDiv .w50p").length;
// 		for(var i=0;i<spec_len;i++){
// 			if($(".SpecificationsDiv .w50p:eq("+i+") caption:eq(0)").text().trim().toUpperCase() == "GENERAL"){
// 				var key_len = $(".SpecificationsDiv .w50p:eq("+i+") th").length;

// 				for(var j=1;j<key_len;j++){
// 					if($(".SpecificationsDiv .w50p:eq("+i+") th:eq("+j+")").text().trim().toUpperCase() == "MODEL NO.:"){
// 						var model = $(".SpecificationsDiv .w50p:eq("+i+") td:eq("+j+")").text().trim();
// 					}
// 				}
// 				break;
// 			}
// 		}
// 	}
// 	return model;
// }


// function getIntStorage(){
// 	var intMem = "";
// 	if($(".SpecificationsDiv .w50p").length > 0){
// 		var spec_len = $(".SpecificationsDiv .w50p").length;
// 		for(var i=0;i<spec_len;i++){
// 			if($(".SpecificationsDiv .w50p:eq("+i+") caption:eq(0)").text().trim().toUpperCase() == "MEMORY"){
// 				var key_len = $(".SpecificationsDiv .w50p:eq("+i+") th").length;

// 				for(var j=0;j<key_len;j++){
// 					if($(".SpecificationsDiv .w50p:eq("+i+") th:eq("+j+")").text().trim().toUpperCase() == "INTERNAL MEMORY:"){
// 						var intMem = $(".SpecificationsDiv .w50p:eq("+i+") td:eq("+j+")").text().trim();
// 					}
// 				}
// 				break;
// 			}
// 		}
// 	}
// 	return intMem;
// }

// function sendMobile(){
// 	var breadCrumb = getBreadCrumb();
//   // console.log("getBreadCrumb: " + breadCrumb);
//   if(breadCrumb.split("*~").length > 1 && breadCrumb.split("*~")[2].trim().toUpperCase() == "MOBILE PHONES" && getProd() != ""){
//   	var PID = getPID();
//   	var pos = 71;
//   	var price = getPrice();
//   	var image = getImage();
//   	var avail = getAvailability();
//   	var mainTitle = getProd();
//   	var modelName = getModel();
//   	var color = "";
//   	var intStorage = getIntStorage();
//   	var link = window.location.href;

//   	var jsonArr = [{'PID': encodeURIComponent(PID), 'pos': pos, 'price': price, 'image': image, 'avail': avail, 'mainTitle': encodeURIComponent(mainTitle), 'modelName': encodeURIComponent(modelName), 'color': encodeURIComponent(color), 'intStorage': encodeURIComponent(intStorage), 'link': encodeURIComponent(link) }];
//   	jsonArr = JSON.stringify(jsonArr);
//     // console.log("jsonArr: "+jsonArr);
//     sendMessage(1, jsonArr, 19, doNothing, []);

// }
// }
// sendMobile();