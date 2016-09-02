
var flagCoupons = [];

for(var f=0;f<100;f++){
	flagCoupons[f] = 0;
}
// if(bestSavingsFound == 0){
// 	var maxSavings = -9999999999;
// }

function startCouponProcessRed(data, passBack){
	var mytext = data;
	if(typeof(mytext) != undefined && mytext!= "undefined"){
		getStartedRed(mytext);
	}
}

function getCoupons(){
	var jsonArr = [{'pos': 25}];
	jsonArr = JSON.stringify(jsonArr);
	sendMessage(1, jsonArr, 7, startCouponProcessRed, []);
}


function endProccessRed(c){
	if(tot_cpn <= c+1 && doneAll == 1){
		// alert("Enetered here"+c);
		couponAt = 1290;
		// alert("bestCoupon: "+bestCoupon+" maxSavings: "+maxSavings);
		doneAll = 0;
		if(maxSavings != "" && maxSavings != 0 && maxSavings != -9999999999){
			$(".hatke-discount-cover:eq(0)").css("display", "none");
			$(".hatke-discount-cover:eq(1)").css("display", "none");
			$(".hatke-discount-cover:eq(2)").css("display", "none");
			applyBestRed(bestCoupon);
		}
		else{
			$(".hatke-discount-cover:eq(0)").css("display", "none");
			$(".hatke-discount-cover:eq(1)").css("display", "none");
			$(".hatke-discount-cover:eq(2)").css("display", "block");
		}
	}
	else {
		setTimeout(function(){ endProccessRed(c); }, 500);
	}
}


function applyBestRed(bestCoupon){


	 $('.hdc-button:eq(1)').click(function(){
document.getElementById("applyOffer").click();
});
	if($("#promOfferCode").length > 0){
		$("#promOfferCode").val(bestCoupon);

		// //console.log("maxSavings: "+maxSavings);
		if(maxSavings != 1){
			$('.hatke-discount-cover:eq(1) .hdc-c-line').html('Congratulations! You have saved a total of <div class="hdc-total-savings"><span class="WebRupee">Rs.</span> <span class="hdc-sav-amt"><b>' + maxSavings + '</b></span>!</div> <div> Click Finish to Apply <b>' + bestCoupon + ' </b>and avail the offer!</div>');
		}
		else {
			$('.hatke-discount-cover:eq(1) .hdc-c-line').html('Congratulations! Copy coupon code <b>' + bestCoupon + '</b> to avail best offer!</div>');
              
		}
		$(".hatke-discount-cover:eq(1)").css("display", "block");
		$(".hatke-discount-cover:eq(1)").css("z-index","9999999999");

	
	}
}

function getStartedRed(mytext){
	//console.log(mytext);
	$(".hatke-discount-cover:eq(0)").css("display", "block");
	coupons = "HATKE20~"+mytext;
	coupons = coupons.split("~");
	tot_cpn = coupons.length-1; //4
	doneAll = 0;
	for(var c=0;c<tot_cpn;c++){
		// alert("coupon: "+coupons[c]);
		postReq(coupons[c], c);
	}

	endProccessRed(c);
}
// getStartedRed();
function postReq(coupon, c){
	if(c == 0){
		maxSavings = -9999999999;
	}
	if(c == 0 || flagCoupons[c-1] == 1){

		var operatorId = window.operatorId;
		
		var operatorId_rtd = window.operatorId_rtd;
		var seats = window.onwseats;
		var BoardingPointId = window.b;
		var busType = $(".travType:eq(0)").text().trim();
		var fromId = getCookie("searchResultUrl");
		var toId = getCookie("searchResultUrl");
		var baseFare = $("#fareToBeCharged").text().trim();
		var remFare = parseInt(baseFare) + $("#serviceTaxAmt").text().trim();
		var searchResultUrl = getCookie("searchResultUrl");
		var RouteId = window.RouteId;
		var numSeats = window.numSeats;
		var details=document.getElementById('hdiv').innerText;
		//console.log(details);
		var detarray=details.split('~');
		//console.log(detarray);		

		// searchResultUrl=https://www.redbus.in/Booking/SelectBus.aspx?fromCityId=122&toCityId=210&doj=23-Oct-2015&busType=Any&opId=0;

		if(fromId.split("fromCityId=").length > 1){
			fromId = fromId.split("fromCityId=");
			fromId = fromId[1].trim();
		}

		if(fromId.split("&").length > 1){
			fromId = fromId.split("&");
			fromId = fromId[0].trim();

		}
		if(fromId.split("#").length > 1){
			fromId = fromId.split("#");
			fromId = fromId[0].trim();

		}
		if(toId.split("toCityId=").length > 1){
			toId = toId.split("toCityId=");
			toId = toId[1].trim();
		}

		if(toId.split("&").length > 1){
			toId = toId.split("&");
			toId = toId[0].trim();

		}
		if(toId.split("#").length > 1){
			toId = toId.split("#");
			toId = toId[0].trim();

		}

		if(searchResultUrl.split("&doj=").length > 1){
			searchResultUrl = searchResultUrl.split("&doj=");
			searchResultUrl = searchResultUrl[1].trim();
		}
		else if(searchResultUrl.split("?doj=").length > 1){
			searchResultUrl = searchResultUrl.split("?doj=");
			searchResultUrl = searchResultUrl[1].trim();
		}
		if(searchResultUrl.split("&").length > 1){
			searchResultUrl = searchResultUrl.split("&");
			searchResultUrl = searchResultUrl[0].trim();

		}
		if(searchResultUrl.split("#").length > 1){
			searchResultUrl = searchResultUrl.split("#");
			searchResultUrl = searchResultUrl[0].trim();

		}
		var authtoken1= getCookie("ums").replace(/%2C/g,",");
		//console.log(authtoken1);

		$.ajax({
			url: 'https://www.redbus.in/OfferAPI/ValidateOffers',
			type: 'POST',
			headers: {          
				Accept : "application/json, text/javascript, */*; q=0.01",         
				"Content-Type": "application/json",
				AuthToken:authtoken1   
			},
            
			data: JSON.stringify({"Input":coupon,"sourceId":parseInt(detarray[0]),"destinationId":parseInt(detarray[1]),"dojinlong":0,"dateOfIssueInLong":0,"RouteId":detarray[2],"OperatorId":parseInt(detarray[3]),"DateOfJourney":detarray[4],"Seats":seats,"numOfSeats":parseInt(detarray[5]),"BoardingPointId":BoardingPointId,"RTOperatorId":parseInt(detarray[6]),"PaymentType":"NETBANKING","RemainingFare":parseInt(remFare),"TicketFare":parseInt(baseFare),"mobileNo":detarray[7],"emailId":detarray[8],"salesChannel":"WEBDIRECT","offerCode":"","cashCouponCode":"","BusType":busType,"userId":detarray[9]}),
			accepts: 'application/json',
			contentType: 'application/json; charset=utf-8',
			beforeSend:function(){
				//console.log(operatorId);
				//console.log(RouteId);
				//console.log(JSON.stringify({"Input":coupon,"sourceId":fromId,"destinationId":toId,"dojinlong":0,"dateOfIssueInLong":0,"RouteId":RouteId,"OperatorId":operatorId,"DateOfJourney":searchResultUrl,"Seats":seats,"numOfSeats":numSeats,"BoardingPointId":BoardingPointId,"RTOperatorId":operatorId_rtd,"PaymentType":"NETBANKING","RemainingFare":remFare,"TicketFare":baseFare,"mobileNo":"9090909090","emailId":"hatkeshelly0106@gmail.com","salesChannel":"WEBDIRECT","offerCode":"","cashCouponCode":"","BusType":busType,"userId":""}));
           
             //console.log(c);

              lenArray=tot_cpn;
      $('.hatke-discount-cover:eq(0)').css("display","block");
      $('.hatke-discount-cover:eq(1)').css("display","none");
      $('.hatke-discount-cover:eq(2)').css("display", "none");
   //$s('.hdc-loading').text("Bhuwan"); 
      $('.hatke-discount-cover:eq(0)').css("z-index","999999999999");

   $('.hdc-loading').html('Trying code <span class="hdc-load-curr hdc-bold">' + (c+1) + '</span> of <span class="hdc-load-tot hdc-bold">' + lenArray + '</span>');
   
   var perDone = (c+1)/lenArray;
   perDone = perDone*100;
   perDone = parseInt(perDone);
   $('.hdc-lb-progress').text(perDone + "% Complete");
   $('.hdc-lb-fg').css("width", perDone + "%");
   



//          cpnIndex=cpn;


			},
			success: function(res) {
				// //console.log("coupon: "+coupon);
				// //console.log("res data: "+JSON.stringify(res));
				// //console.log("res Message: "+res.data.Message);
				// //console.log("res value: "+res.data.Value);
				// //console.log("res count: "+c);
				// //console.log("countcoupon : "+ tot_cpn);
				
				var savings = parseInt(res.data.Value);
				if(res.data.Message.trim() == "Please enter passeger details"){
					savings = 1;
				}
				else if(res.data.Message.trim().toUpperCase().split("CONGRATULATIONS").length > 1 && savings == 0){
					savings = 1;
				}
				if(savings > maxSavings && savings != -9999999999){
					maxSavings = savings;
					bestCoupon = coupon;
					bestSavingsFound = 1;
				}
				if(maxSavings == -9999999999 || maxSavings == 0){
					bestCoupon = "";
					maxSavings = 0;
				}
				if(c+1 >= tot_cpn){
					doneAll = 1;
				}
				
				// //console.log("max savings: "+maxSavings);
				// //console.log("max coupons: "+bestCoupon);
				// //console.log("res code: "+res.data.Code);
				flagCoupons[c] = 1;
				//console.log("timing");
			}
		});
}
else {
	setTimeout(function(){ postReq(coupon, c); }, 500);
}
}


function couponCheck(){


	var curURL = window.location.href;
	if(curURL.split('redbus.in/Booking/').length>1 ){


// $('#killerDIV').after("<script type='text/javascript'>setInterval(function(){//console.log(window.pname);},1000);<\/script>");
var scriptText = "document.getElementById('hdiv').innerText= sourceId+'~'+destinationId+'~'+RouteId+'~'+operatorId+'~'+DateOfJourney+'~'+numSeats+'~'+operatorId_rtd+'~'+pmobile+'~'+pname+'~'+pUserId;";
var rwscript = document.createElement("script");
var hdiv=document.createElement("div");
hdiv.id="hdiv";
document.body.appendChild(hdiv);
rwscript.type = "text/javascript";
rwscript.textContent = scriptText;
document.body.appendChild(rwscript);


		var imgURL = returnResource("apply-coupon.png");
		if($('.custDetails').length>0){
			$('.custDetails').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
			$('#OfferCodeDiv').css("display", "inline");
			addToDOM();
			 $('.hdc-button:eq(2)').click(function(){
//window.location.reload();  
});
			var button = document.getElementById("couponClick");
			button.addEventListener("click", function(){
				var checklogin=document.getElementById("signedIn").style.display;
				if(checklogin=="none")
                {
	                alert("You need to be logged in to apply auto coupons.");

                 }
                else
                {
				stopCoupon = 1;
				getCoupons();
			}
			}, false);
		}
		else {
			setTimeout(function(){couponCheck();},1000);
		}
	}
	else if(curURL.split('hotels/hotels-booking.aspx').length>1 ){
		var imgURL = returnResource("apply-coupon.png");
		if($('.clearfix.travelerDetails.XCN').length>0){
			$('.clearfix.travelerDetails.XCN').after("<a id='couponClick' href='javascript:void();'><img style='margin-top:15px;margin-left:20px;' src='" + imgURL + "'></a>");
			$('#OfferCodeDiv').css("display", "inline");
			addToDOM();
			 $('.hdc-button:eq(2)').click(function(){
window.location.reload();  
});
			var button = document.getElementById("couponClick");
			button.addEventListener("click", function(){
				var checklogin=document.getElementById("signedIn").style.display;
				if(checklogin=="none")
                {
	                alert("You need to be logged in to apply auto coupons.");

                 }
                else
                {
				stopCoupon = 1;
				maxSavings = -9999999999;
				bestCoupon = "";
				getCoupons();
			}



			}, false);
		}
		else {
			setTimeout(function(){couponCheck();},1000);
		}
	}

}



couponCheck();

function removeTheCover(){
	if($('.hatke-discount-cover').length>0){
		$('.hatke-discount-cover').css("display", "none"); 
	}
}
////console.log(window.pname);
