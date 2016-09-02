var flag=0;
var c=0;
var finalSavAmt=0;
var errormsg=[];
var coupontoapply="";


function couponcheck()
{

var imgURL = returnResource("apply-coupon.png");

$(".coupon-section").after("<a id='couponClick' href='javascript:void(0);'><img style='margin-left:30%;' src='" + imgURL + "'></a>")
$('body').after("<div id='parse'><div>");
document.getElementById('parse').style.display="none";
 addToDOM();
var button = document.getElementById("couponClick");
        button.addEventListener("click", function(){
          
          getCoupons();
          //initializing everything
          flag=0;
          c=0;
          finalSavAmt=0;
          errormsg=[]; 
          $('.hdc-sav-amt').text("0");

        }, false);


}

couponcheck();

function getCoupons()
{
 var jsonArr = [{'pos': 2}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 7, startCouponProcess, []);
//sendMessage(1,jsonArr,7,startCouponProcess,[]);


}
function couponInitiate(coupons)
{
applyCoupons(coupons);
}

function applyCoupons(coupons)
{
	//console.log(coupons);
	
	var couponsArray= "MYNTRA10~MYNTRA15~MYNTRA20~MYNTRA25~MYNTRA30~MYNTRA35~MYNTRA40~MYNTRA45~MYNTRA50~MYNTRA55~EXTRA10~EXTRA15~EXTRA20~EXTRA25~EXTRA30~EXTRA35~EXTRA40~EXTRA45~EXTRA50~EXTRA55~EXTRA60~EXTRA65~"+coupons;
	var couponsArray=couponsArray.split("~");
	var lenArray=couponsArray.length;
	
		postReq(couponsArray,c,lenArray);
	

}


function postReq(couponsArray,c,lenArray)
{

	


if(c<lenArray)
{
	var couponcode=couponsArray[c];
	var tokencode=$( "input[name='_token']" )[0].value;
	//console.log(tokencode);

$.ajax({
			url: 'http://www.myntra.com/checkout/cart',
			type: 'POST',
			data: JSON.stringify({token:tokencode , coupon:couponcode, operation: "APPLY_COUPON"}),
			accepts: 'application/json',
			contentType: 'application/json; charset=utf-8',
			beforeSend:function(){
				
            
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
   





			},
			success: function(res) {
              
               if (res.status=="error")
                {
                	var couponAt=111;
                 errormsg.push([couponsArray[c], encodeURIComponent(res.message), couponAt ]);        
             	 //console.log(errormsg);
                }
               else
                {
                	var couponAt=111;
                errormsg.push([couponsArray[c], encodeURIComponent("success"), couponAt ]);
                //errormsg[c]="success";
                //console.log(errormsg);
                }

			
				if(res.status!="error")
			{
				document.getElementById('parse').innerHTML=res;
				var discount =$(".coupon > .greenrupees.c-green")[0].innerText;
				var discountamount=discount.split("- Rs. ")[1];
				if(discountamount.split(",").length>0)
				{
				discountamount=parseInt(discountamount.split(",")[0]+discountamount.split(",")[1]);
				}
				//console.log(discount);
				//console.log(discountamount);
				var savingsamount=discountamount;
				
				if(savingsamount>finalSavAmt)
				
				{
                
                var currentSavAmt = 0
				coupontoapply=couponsArray[c];
				var j=c;
				//console.log(coupontoapply);
				finalSavAmt = savingsamount;

                $({c: currentSavAmt}).animate({c: finalSavAmt}, {
                step: function(now) {
                $('.hdc-sav-amt').text(Math.round(now))
                },
                duration: 1000,
                easing: "linear"
                });
                }
			}



				
				c++;
				postReq(couponsArray,c,lenArray);
				flag=1;


if(c==lenArray)
{


if(finalSavAmt>0)
{

$('.hatke-discount-cover').css("display", "none");
$('.hatke-discount-cover:eq(1)').css("display", "block");
 applyingfinalcoupon(coupontoapply);  

}
else
{
$('.hatke-discount-cover').css("display", "none");
 $('.hatke-discount-cover:eq(2)').css("display", "block");	
}
//console.log(coupontoapply);
document.getElementsByClassName("hdc-button")[1].addEventListener("click",
	function(){
		window.location.reload();

	});

//sending coupon messages

errormsg= JSON.stringify(errormsg);
      var jsonArr = [{'cpn_msg': errormsg}];
      jsonArr = JSON.stringify(jsonArr);

      // console.log("cpn_msg JSON: "+jsonArr);
      sendMessage(1, jsonArr, 12, doNothing, []);

}


				
	    }
	});

}


}

function removeTheCover(){
	if($('.hatke-discount-cover').length>0){
		$('.hatke-discount-cover').css("display", "none"); 
	}
}

function applyingfinalcoupon(couponcode)
{
	
	var tokencode=$( "input[name='_token']" )[0].value;
	

$.ajax({
			url: 'http://www.myntra.com/checkout/cart',
			type: 'POST',
			data: JSON.stringify({token:tokencode , coupon:couponcode, operation: "APPLY_COUPON"}),
			accepts: 'application/json',
			contentType: 'application/json; charset=utf-8'
		});





}

