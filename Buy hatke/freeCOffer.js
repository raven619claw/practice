function addDefault(){
	// console.log("I was called");
	$('body').append('<div class="hk-dpop hk-dpopVCard animated"><div class="hk-dpop-box"><a href="http://dl.flipkart.com/dl/mobiles/~redmi-note-3/pr?affid=buyhatkegm&sid=tyy%2C4io&affExtParam1=mipage&affExtParam2=ext" target="_blank" class="hk-dpop-wrap"><img src="https://s3.amazonaws.com/kraken.users/56f27515140ba0e46a8b458e/22046500246cef4bffbb0b1dee6fbcad/redmi.jpg" alt="Mi Sale"></a></div><div class="hk-dpop--close">&times;</div></div>');
}

function addSpecial(couponCode, cashAmount, price){
	$('body').append('<div class="fvc-pop animated flipInY fvc-pop-fix-right" style="top:auto;left:auto;right:0;bottom:20px;"><div class="fvc-pop--wrpr"><svg version="1.1" id="cloudLightning" class="climacon climacon_cloudLightning" viewBox="35 52 25 25"><g class="climacon_iconWrap climacon_iconWrap-cloudLightning"><g class="climacon_wrapperComponent climacon_wrapperComponent-lightning"><polygon class="climacon_component climacon_component-stroke climacon_component-stroke_lightning" points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "/></g></g></svg><div class="fvc-pop-close">&times;</div><div class="fvc-pop-hdr">Massive Disount Found!</div><div class="fvc-pop-txt">Get this product for just <strong>&#8377;' + price + '</strong></div><button class="fvc-more fvc-more--alone" id="fvc-vod">View Offer Details</button><div class="fvc-more-dtails fvc-pop-tnc"><div class="fvc-pop-txt">To avail this offer:</div><ol class="fvc-pop-list"><li class="fvc-pop-li">Please go to <a href="https://goo.gl/bTX14L" class="fvc-btn" rel="nofollow" >this link</a> and create a freecharge virtual card</li><li class="fvc-pop-li">Top up the wallet with the amount you want to pay. (Check this amount by going to Cart Page of this site and applying  <strong>' + couponCode + '</strong>)</li><li class="fvc-pop-li">Come back here and pay using Freecharge Go Card and get extra &#8377; ' + cashAmount + ' cashback in your Freecharge Walle at the end of the purchase.</li></ul></div></div></div>');
}

// addDefault();
var cur_url = window.location.href;

if(getCookie('noMI')!=1){
  addDefault();
}
// addSpecial('PRASHANT', 200);

$('#fvc-vod').click(function(){
		$(this).addClass('fvc-hidden').closest('.fvc-pop--wrpr').addClass('fvc-pop--expnd')
	})
	$('.fvc-pop-close').click(function(){
		$(this).closest('.fvc-pop').remove()
	})

$('.hk-dpop--close','.hk-dpopVCard').click(function(){
		setCookie("noMI", 1, 1);
		$(this).parent().removeClass('bounceInRight')
		$(this).parent().addClass('bounceOutRight')
		setTimeout(function(){
			$('.hk-dpop').removeClass('bounceOutRight')
			$('.hk-dpop').removeClass('hk-dpop--open')
		},1000)
		
	})
	
		setTimeout(function(){
			$('.hk-dpopVCard').addClass('hk-dpop--open bounceInRight')
		},3000)
	

	$(window).on("scroll",function(){
		$(".hk-dpopVCard").css({"opacity":".7"});
	})
	$(".hk-dpopVCard").on("mouseover",function(){
		$(".hk-dpopVCard").animate({"opacity":"1"},200);
	})