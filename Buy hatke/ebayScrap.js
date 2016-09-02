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
	if($('.collection-gallery .itemThumb').length > 0){
		var slider = $('.collection-gallery .itemThumb');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.collection-gallery .itemThumb:eq('+ i +') a').length > 0){
				link = $('.collection-gallery .itemThumb:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.collection-gallery .itemThumb:eq('+ i +')').find('.itemPrice a').length > 0){

					price = $('.collection-gallery .itemThumb:eq('+ i +')').find('.itemPrice a').text();
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price]);
			}

		} 
	}

	if($('.mcontainer .mitem').length > 0){
		var slider = $('.mcontainer .mitem');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.mcontainer .mitem:eq('+ i +') a').length > 0){
				link = $('.mcontainer .mitem:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.mcontainer .mitem:eq('+ i +')').find('.price').length > 0){
					price = $('.mcontainer .mitem:eq('+ i +')').find('.price').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price]);
			}

		} 

	}

	if($('.product-list-product').length > 0){
		var slider = $('.product-list-product');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('.product-list-product:eq('+ i +') a').length > 0){
				link = $('.product-list-product:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.product-list-product:eq('+ i +')').find('.product-selling-price').length > 0){
					price = $('.product-list-product:eq('+ i +')').find('.product-selling-price').text();
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price]);
			}

		}

	}
	if($('#subCat1Div [itemtype="http://schema.org/Product"]').length > 0){
		var slider = $('#subCat1Div [itemtype="http://schema.org/Product"]');
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
			if($('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +') a').length > 0){
				link = $('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="name"]').length > 0){
					prod = $('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="name"]').text().trim();
					if(prod.split("...").length > 1){
						prod = "";
					}
				}
				if($('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('#topPickImg').length > 0){
					image = $('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('#topPickImg').attr("src").trim();
					if(image.split("imgLoad").length > 1){
						image = "";
					}
				}
				if($('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="price"]').length > 0){
					price = $('#subCat1Div [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="price"]').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} 

	}

	if($('#listingDiv [itemtype="http://schema.org/Product"]').length > 0){
		var slider = $('#listingDiv [itemtype="http://schema.org/Product"]');
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
			if($('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +') a').length > 0){
				link = $('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="name"]').length > 0){
					prod = $('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="name"]').text().trim();
					if(prod.split("...").length > 1){
						prod = "";
					}
				}
				if($('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="image"]').length > 0){
					image = $('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="image"]').attr("src").trim();
					if(image.split("imgLoad").length > 1){
						image = "";
					}
				}
				if($('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="price"]').length > 0){
					price = $('#listingDiv [itemtype="http://schema.org/Product"]:eq('+ i +')').find('[itemprop="price"]').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} 

	}
	if($('.itm').length > 0){
		var slider = $('.itm');
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
			if($('.itm:eq('+ i +') a').length > 0){
				link = $('.itm:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.itm:eq('+ i +')').find('[itemprop="name"]').length > 0){
					prod = $('.itm:eq('+ i +')').find('[itemprop="name"]').attr("title").trim();
				}
				if($('.itm:eq('+ i +')').find('[itemprop="image"]').length > 0){
					image = $('.itm:eq('+ i +')').find('[itemprop="image"]').attr("src").trim();
					if(image.split("imgLoad").length > 1){
						image = "";
					}
				}
				if($('.itm:eq('+ i +')').find('[itemprop="price"]').length > 0){
					price = $('.itm:eq('+ i +')').find('[itemprop="price"]').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} 

	}

	if($('.itm_acc').length > 0){
		var slider = $('.itm_acc');
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
			if($('.itm_acc:eq('+ i +') a').length > 0){
				link = $('.itm_acc:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.itm_acc:eq('+ i +')').find('[itemprop="name"]').length > 0){
					prod = $('.itm_acc:eq('+ i +')').find('[itemprop="name"]').attr("title").trim();
					if(prod.split("...").length > 1){
						prod = "";
					}
				}
				if($('.itm_acc:eq('+ i +')').find('[itemprop="image"]').length > 0){
					image = $('.itm_acc:eq('+ i +')').find('[itemprop="image"]').attr("src").trim();
					if(image.split("imgLoad").length > 1){
						image = "";
					}
				}
				if($('.itm_acc:eq('+ i +')').find('[itemprop="price"]').length > 0){
					price = $('.itm_acc:eq('+ i +')').find('[itemprop="price"]').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} 

	}

	if($('.gl-itm').length > 0){
		var slider = $('.gl-itm');
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
			if($('.gl-itm:eq('+ i +') a').length > 0){
				link = $('.gl-itm:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('.gl-itm:eq('+ i +')').find('.rttl').length > 0){
					prod = $('.gl-itm:eq('+ i +')').find('.rttl:eq(0)').text().trim();
					if(prod.split("...").length > 1){
						prod = "";
					}
					prod.split("&nbsp;").join("");
					prod = prod.trim();
				}
				if($('.gl-itm:eq('+ i +')').find('.rimg img').length > 0){
					image = $('.gl-itm:eq('+ i +')').find('.rimg:eq(0) img').attr("src").trim();
					if(image.split("imgLoad").length > 1){
						image = "";
					}
				}
				if($('.gl-itm:eq('+ i +')').find('.gl-cpr-new').length > 0){
					price = $('.gl-itm:eq('+ i +')').find('.gl-cpr-new:eq(0)').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else if($('.gl-itm:eq('+ i +')').find('.gl-cpr2').length > 0){
					price = $('.gl-itm:eq('+ i +')').find('.gl-cpr2:eq(0)').text();
					if(price.toUpperCase().split('BUY').length > 1){
						price = price.toUpperCase().split("BUY")[0].trim();
					}
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price, prod, image, oos]);
			}

		} 

	}

	if($('#ResultSetItems li').length > 0){
		var slider = $('#ResultSetItems li');
		var sliderLength = slider.length;
		var link;
		var price;
		var PID;

		for(i=0;i<sliderLength;i++){
			price = "";
			PID = "";
			if($('#ResultSetItems li:eq('+ i +') a').length > 0){
				link = $('#ResultSetItems li:eq('+ i +') a:eq(0)').attr("href");
				if(link != ""){
					PID = link;
					if(PID.split("&item=").length > 1){
						PID = PID.split("&item=");
						PID = PID[1];
					}
					if(PID.split("?item=").length > 1){
						PID = PID.split("?item=");
						PID = PID[1];
					}
					if(PID.split("?").length > 1){
						PID = PID.split("?");
						PID = PID[0];
					}
					if(PID.split("&").length > 1){
						PID = PID.split("&");
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
				if($('#ResultSetItems li:eq('+ i +')').find('.lvprice').length > 0){
					price = $('#ResultSetItems li:eq('+ i +')').find('.lvprice').text();
					if(price.split('-').length > 1){
						price = price.split("-")[0].trim();
					}
				}
				else{
					price = "";
				}
				price = filter_price(price);
			}
			else{
				price = "";
			}
			if(PID != "" && price != "" && price != 0 && !isNaN(price)){
				arrayToSend.push([PID, price]);
			}

		} 

	}

	arrayToSend = JSON.stringify(arrayToSend);
	var jsonArr = [{'pairsEbay': arrayToSend}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(0, jsonArr, 0, doNothing, []);  
}


function sendCurrent(){
	curData = []; 
	var prod = getProd();
	var image = getImage();
	var myPrice = getPrice();
	var PID = getPID();
	var cur_url = "";
	var current_status = 0;
	var avail = getAvailability();
	if(avail == 1){
		current_status = 0;
	}
	else if(avail == 0){
		current_status = 1;
	}
	else if(avail == -1){
		current_status = 2;
	}
	cur_url = window.location.href;
	var checkUpdated = 1;
	curData.push([prod, image, myPrice, cur_url, current_status, PID, checkUpdated]);
	curData = JSON.stringify(curData);
	if($('#CenterPanelInternal').length > 0){
		var jsonArr = [{'curDataEbay': curData}];
		jsonArr = JSON.stringify(jsonArr);
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
	if($('.container .pdpTitle h1').length > 0)
	{
		prod = $('.container .pdpTitle:eq(0) h1:eq(0)').text().trim();   
	}
	else if($('#itemTitle').length > 0){
		if(($('#itemTitle').text().split("Details about")).length > 1)
		{
			prod = $('#itemTitle').text().split("about")[1].trim();   
		}
		else
		{
			prod = $('#itemTitle').text().trim();   
		}
		if(prod.split("Deal ").length > 1){
			prod = prod.split(":");
			prod = prod[1].trim();
		}

	}
	else if($('h1').length > 0)
	{
		prod = $("h1:eq(0)").text();

	}
	if($('#CenterPanelInternal').length > 0){
		return prod;
	}
	else{
		return "";
	}
}

function getImage(){
	var image = "";
	if($('img[itemprop="image"]').length > 0)
	{
		image = $('img[itemprop="image"]').attr('src');
	}
	else if($(".img-polaroid").length > 0)
	{
		image = $(".img-polaroid").attr("src");
	}
	else if($('#picPanelInner').length > 0){
		image = $('#picPanelInner img').attr('src');
	}

	// //console.log("image: "+image);
	return image;
}

function getPrice(){
	price = "";
	if($('#prcIsumConv').length > 0){
		price =  $('#prcIsumConv').text().trim();
	}
	else if($("#prcIsum_bidPrice").length > 0){
		if($("#prcIsum").length > 0){
			price = $('#prcIsum').text();
		}
		else{
			price = $('#prcIsum_bidPrice').text();
		}
	}

	else if($('#priceIdTd').length > 0){
		price = $('#priceIdTd').text();
	}
	else if($('[itemprop="price"]').length > 0)
	{
		price = $('[itemprop="price"]:eq(0)').text();
		if(price==""){
			price = $('[itemprop="price"]').attr("content");
			if(price!=""){
				price = price.split(".")[0];
				price = price.split(",").join("");
			}
		}
	}
	else if($(".topPriceRange").length > 0){

		price = $(".topPriceRange:eq(0)").text();
	}
	else if($('#mm-saleDscPrc').length > 0){
		price = $('#mm-saleDscPrc').text();
	}
	
	price = filter_price(price);

	return price;
}

function getAvailability(){
	var avail = 1;
	if($("#SISPivotItemContainer .pivHdr").text().toUpperCase().split("ITEMS FOUND SIMILAR TO").length > 1){
		avail = -1;

	}

	if($("body").text().split("feature you have requested is temporarily unavailable").length > 1){
		avail = 0;
	}

	if($("#Results").text().toUpperCase().split("ACTIVE LISTINGS").length > 1){
		avail = 0;
	}
	if($(".msgPad").length > 0){
		if($(".msgPad").text().toUpperCase().split("LISTING HAS ENDED").length > 1){
			avail = -1;
		}
		else if($(".msgPad").text().toUpperCase().split("ITEM HAS SOLD").length > 1){
			avail = 0;
		}
		else if($(".msgPad").text().toUpperCase().split("NO LONGER AVAILABLE").length > 1){
			avail = -1;
		}
		else if($(".msgPad").text().toUpperCase().split("HAS ENDED").length > 1){
			avail = -1;
		}
		else if($(".msgPad").text().toUpperCase().split("OUT OF STOCK").length > 1){
			avail = 0;
		}
	}

	else if(($('#CenterPanel').length > 0) && ($('#CenterPanel').text().toUpperCase().split('NO LONGER AVAILABLE').length > 1)){

		avail = -1;
	}
	else if(($('.sml-cnt').length > 0) && ($('.sml-cnt').text().toUpperCase().split('HAS BEEN REMOVED').length > 1)){
		avail = -1;
	}
	else if(($('#Body').length > 0) && ($('#Body').text().split('has been removed').length > 1)){
		avail = -1;
	}
	else if(name.toUpperCase().split('STATUS 503').length > 1) {
		avail = -1;
	}
	else if($('#ZeroResultsAndExpansionsContainer').length > 0){
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
	if(pid.split("&item=").length > 1){
		pid = pid.split("&item=")[1];
	}
	if(pid.split("?item=").length > 1){
		pid = pid.split("?item=")[1];
	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0];
	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0];
	}
	if(pid.split("/").length > 1){
		pid = pid.split("/");
		pid = pid[pid.length - 1];
	}

	return pid;
}

function returnPID(link){

	var pid = link;

	if(pid.split("#").length > 1){
		pid = pid.split("#")[0];
	}
	if(pid.split("&item=").length > 1){
		pid = pid.split("&item=")[1];
	}
	if(pid.split("?item=").length > 1){
		pid = pid.split("?item=")[1];
	}
	if(pid.split("&").length > 1){
		pid = pid.split("&")[0];
	}
	if(pid.split("?").length > 1){
		pid = pid.split("?")[0];
	}
	if(pid.split("/").length > 1){
		pid = pid.split("/");
		pid = pid[pid.length - 1];
	}

	return pid;



}

function getBreadCrumb(){
	var breadcrumb = "";
	var bread_final = "";
	var len_bread = $('#vi-VR-brumb-lnkLst .bc-w').length;

	for(i=0;i<len_bread;i++){
		breadcrumb = $('#vi-VR-brumb-lnkLst .bc-w:eq('+ i +')').text().trim();
		bread_final += breadcrumb + "*~";
	}

	return bread_final;


}



function getModel(){
	var model = "";
	if($(".itemAttr td").length > 0){
		var tab_len = $(".itemAttr td").length;
		for(var i=0;i<tab_len;i++){
			if($(".itemAttr td:eq("+i+")").text().trim().toUpperCase() == "MODEL:"){
				model = $(".itemAttr td:eq("+(i+1)+")").text().trim();
				break;
			}
		}

	}
	return model;
}

function getIntStorage(){
	var intMem = "";
	if($(".itemAttr td").length > 0){
		var tab_len = $(".itemAttr td").length;
		for(var i=0;i<tab_len;i++){
			if($(".itemAttr td:eq("+i+")").text().trim().toUpperCase() == "STORAGE CAPACITY (INTERNAL):" || $(".itemAttr td:eq("+i+")").text().trim().toUpperCase() == "CAPACITY:"){
				intMem = $(".itemAttr td:eq("+(i+1)+")").text().trim();
				break;
			}
		}

	}
	return intMem;
}

function getColor(){
	var color = "";
	if($(".itemAttr td").length > 0){
		var tab_len = $(".itemAttr td").length;
		for(var i=0;i<tab_len;i++){
			if($(".itemAttr td:eq("+i+")").text().trim().toUpperCase() == "COLOUR:"){
				color = $(".itemAttr td:eq("+(i+1)+")").text().trim();
				break;
			}
		}

	}
	return color;
}


function sendMobile(){
	var breadCrumb = getBreadCrumb();
  // console.log("getBreadCrumb: " + breadCrumb);
  if( breadCrumb.split("*~").length > 1 && breadCrumb.split("*~")[0].trim().toUpperCase() == "MOBILE PHONES" && getProd() != ""){
  	var PID = getPID();
  	var pos = 1;
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


function sendCoupon(){
	couponToSend = [];
	imageToSend = [];
	var cur_link = window.location.href;
	var couponUrl = "";
	var couponCode = "";
	var couponText = "";
	var couponDesc = "";
	var couponExp = 0;
	var couponAt = 1;
	couponUrl = "http://www.ebay.in/";
	couponCode = "";
	couponText = "";
	couponDesc = "";
	slider = "";
	sliderLength = "";

	if(cur_link.split("/ebaydeals").length > 1){
		couponUrl = "http://www.ebay.in/";
		couponCode = "";
		couponText = "";
		couponDesc = "";
		slider = $("#rightPanel").find(".categoryBlock");
		sliderLength = slider.length;

		for(i=0;i<sliderLength;i++){
			couponUrl = "http://www.ebay.in/";
			couponCode = "";
			couponText = "";
			couponDesc = "";
			couponExp = 0;

			couponCode = "NO CODE REQUIRED";
			couponText = $("#rightPanel").find(".categoryBlock:eq("+i+") a:eq(0)").attr('title').trim();
			couponUrl = $("#rightPanel").find(".categoryBlock:eq("+i+") .categoryViewAll:eq(0) a:eq(0)").attr('href').trim();

			if(couponText.split("(").length > 1){
				couponText = couponText.split("(");
					couponText = couponText[0].trim();
				}
				if(couponUrl.split(".ebay.in").length < 2){
					couponUrl = "http://deals.ebay.in/ebaydeals/"+couponUrl;
				}
				couponUrl = couponUrl.split("/t").join("").trim();
				couponUrl = couponUrl.split("\t").join("").trim();

				if($("#rightPanel").find(".categoryBlock:eq("+i+") .couponCode").length > 1){
					couponCode = $("#rightPanel").find(".categoryBlock:eq("+i+") .couponCode:eq(0) span:eq(1)").text().trim();

					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
				}
				if(couponCode.split("(").length > 1){
					couponCode = couponCode.split("(");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split(")").length > 1){
						couponCode = couponCode.split(")");
						couponCode = couponCode[0].trim();
					}

					if(couponCode != "NO CODE REQUIRED" && couponCode.length != 10){
						couponCode = "";
					}
					
					if(couponCode != ""){
						couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
					}
				}
			}

			if($("#itemTitle").parent().length > 0){
				couponUrl = "http://www.ebay.in/";
				couponCode = "";
				couponText = "";
				couponDesc = "";
				couponExp = 0;

				couponCode1 = "";
				couponCode1 = $('#itemTitle').parent().text().trim();

				if(couponCode1.split("code ").length > 1){
					couponCode = couponCode1.split("code ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}
				else if(couponCode1.split("Code ").length > 1){
					couponCode = couponCode1.split("Code ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}
				else if(couponCode1.split("CODE ").length > 1){
					couponCode = couponCode1.split("CODE ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}
				else if(couponCode1.split("Code: ").length > 1){
					couponCode = couponCode1.split("Code: ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}
				else if(couponCode1.split("CODE-").length > 1){
					couponCode = couponCode1.split("CODE-");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}

				else if(couponCode1.split("Coupon ").length > 1){
					couponCode = couponCode1.split("Coupon ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}

				else if(couponCode1.split("coupon ").length > 1){
					couponCode = couponCode1.split("coupon ");
					couponCode = couponCode[1].trim();
					if(couponCode.split(" ").length > 1){
						couponCode = couponCode.split(" ");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(",").length > 1){
						couponCode = couponCode.split(",");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split(".").length > 1){
						couponCode = couponCode.split(".");
						couponCode = couponCode[0].trim();
					}
					if(couponCode.split("'").length > 1){
						couponCode = couponCode.split("'");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split('"').length > 1){
						couponCode = couponCode.split('"');
						couponCode = couponCode[1].trim();
					}
					if(couponCode != couponCode.toUpperCase()){
						couponCode = "";
					}
					if(couponCode.length < 4){
						couponCode = "";
					}
				}
				if(couponCode.split("(").length > 1){
					couponCode = couponCode.split("(");
						couponCode = couponCode[1].trim();
					}
					if(couponCode.split(")").length > 1){
						couponCode = couponCode.split(")");
						couponCode = couponCode[0].trim();
					}
					if(couponCode != "NO CODE REQUIRED" && couponCode.length != 10){
						couponCode = "";
					}
					if(couponCode != ""){
						couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
					}

				}

		// else if(cur_link.split("/offers").length > 1){
		// 	couponUrl = "http://www.ebay.in/";
		// 	couponCode = "";
		// 	couponText = "";
		// 	couponDesc = "";
		// 	slider = $(".offer-wrapper").find(".item-box");
		// 	sliderLength = slider.length;

		// 	for(i=0;i<sliderLength;i++){
		// 		couponUrl = "http://www.ebay.in/";
		// 		couponCode = "";
		// 		couponText = "";
		// 		couponDesc = "";
		// 		couponExp = 0;
		// 		couponText1 = "";
		// 		couponText2 = "";

		// 		couponCode = "NO CODE REQUIRED";
		// 		couponText1 = $(".offer-wrapper").find(".item-box:eq("+i+") .item_text:eq(0) span:eq(0)").text().trim();
		// 		couponText2 = $(".offer-wrapper").find(".item-box:eq("+i+") .item_text:eq(0) strong:eq(0)").text().trim();
		// 		couponText = couponText1 + " - " + couponText2;
		// 		couponUrl = $(".offer-wrapper").find(".item-box:eq("+i+") a:eq(0)").attr('href').trim();
		// 		couponUrl = couponUrl.split("/t").join("").trim();
		// 		couponUrl = couponUrl.split("\t").join("").trim();

		// 		couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
		// 	}
		// }

		if($(".frames iframe").length > 0){
			frame_id = "";
			frame_id = $('.frames').find("iframe:eq(0)").attr("id");
			// console.log("frame_id: "+frame_id);
			if($('#'+frame_id).contents().find("#google_image_div").length > 0){
				var image = $('#'+frame_id).contents().find('#google_image_div img:eq(0)').attr("src");
				// console.log("image: "+image);
				var image_url = $('#'+frame_id).contents().find('#google_image_div a:eq(0)').attr("href");
				var cur_url = cur_link;

				if(image != "" || image != undefined || image != "undefined" ){
					imageToSend.push([encodeURIComponent(image), encodeURIComponent(image_url), couponExp, encodeURIComponent(cur_url), couponAt]);
				}
			}
		}
		// imageToSend = JSON.stringify(imageToSend);
		// var jsonArr = [{'imgExt': imageToSend}];
		// jsonArr = JSON.stringify(jsonArr);
		// sendMessage(1, jsonArr, 15, doNothing, []);  


		couponToSend = JSON.stringify(couponToSend);
		var jsonArr = [{'couponsExt': couponToSend}];
		jsonArr = JSON.stringify(jsonArr);
		sendMessage(1, jsonArr, 15, doNothing, []);  
	}

	sendCoupon();