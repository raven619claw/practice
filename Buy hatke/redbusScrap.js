function sendCoupon(){
 $ = jQuery.noConflict();
 couponToSend = [];
 var cur_link = window.location.href;

 if(cur_link.split("redBus_offers").length > 1){

   if($('.offer-box').length > 0){
     var slider = $('.offer-box');
     var sliderLength = slider.length;
     var couponUrl = "";
     var couponCode = "";
     var couponText = "";
     var couponDesc = "";
     var couponExp = 0;
     var couponAt = 1290;

     for(i=0;i<sliderLength;i++){
       couponUrl = cur_link;
       couponCode = "";
       couponText = "";
       couponDesc = "";

       if($('.offer-box:eq('+ i +')').find(".offer_code").length > 0){
         couponCode = $('.offer-box:eq('+ i +')').find(".offer_code:eq(0)").text().trim();
       }

       if($('.offer-box:eq('+ i +')').length > 0){
         couponText1 = $('.offer-box:eq('+ i +')').find("h2:eq(0)").text().trim();
         couponText = couponText1+ ": " + $('.offer-box:eq('+ i +')').find("h3:eq(0)").text().trim();
       }

       if($('.offer-box:eq('+ i +')').find(".highlight-text").length > 0){
        couponExp1 = $('.offer-box:eq('+ i +')').find(".highlight-text:eq(0)").text().trim();
        if(couponExp1.split("till").length > 1){
          couponExp1 = couponExp1.split("till");
          couponExp1 = couponExp1[1].trim();

          if(couponExp1.split("-").length > 1){
            couponExp2 = couponExp1.split("-");
            couponExp3 = couponExp2[0].trim();
            couponExp4 = couponExp2[1].trim();
            couponExp5 = couponExp2[2].trim();

            if(couponExp4.toUpperCase().split("JAN").length > 1){
              couponExp4 = "01";
            }
            else if(couponExp4.toUpperCase().split("FEB").length > 1){
              couponExp4 = "02";
            }
            else if(couponExp4.toUpperCase().split("MAR").length > 1){
              couponExp4 = "03";
            }
            else if(couponExp4.toUpperCase().split("APR").length > 1){
              couponExp4 = "04";
            }
            else if(couponExp4.toUpperCase().split("MAY").length > 1){
              couponExp4 = "05";
            }
            else if(couponExp4.toUpperCase().split("JUN").length > 1){
              couponExp4 = "06";
            }
            else if(couponExp4.toUpperCase().split("JUL").length > 1){
              couponExp4 = "07";
            }
            else if(couponExp4.toUpperCase().split("AUG").length > 1){
              couponExp4 = "08";
            }
            else if(couponExp4.toUpperCase().split("SEP").length > 1){
              couponExp4 = "09";
            }
            else if(couponExp4.toUpperCase().split("OCT").length > 1){
              couponExp4 = "10";
            }
            else if(couponExp4.toUpperCase().split("NOV").length > 1){
              couponExp4 = "11";
            }
            else if(couponExp4.toUpperCase().split("DEC").length > 1){
              couponExp4 = "12";
            }

            couponExp = couponExp5+"-"+couponExp4+"-"+couponExp3+" 23:59:59";
          }

        }
      }

      if(couponCode != ""){
       couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
     }

   }     

 }

}

if(cur_link.split("redBusHotel_offers").length > 1){
  desc_len = 0;
  couponUrl = cur_link;
  couponCode = "";
  couponText = "";
  couponDesc = "";

  if($("#hoteloffer").length > 0){
    couponText = $("#hoteloffer").text().trim();
  }
  if($(".pOpt li").length > 0){
    desc_len = $(".pOpt li").length;

    for(j=0;j<desc_len-2;j++){
      couponDesc += $(".pOpt li:eq("+j+")").text().trim() + ". ";
    }
    if(couponDesc.split("offer code").length > 1){
      couponCode1 = couponDesc.split("offer code");
      couponCode1 = couponCode1[1].trim();
      if(couponCode1.split(". ").length > 1){
        couponCode1 = couponCode1.split(". ");
        couponCode1 = couponCode1[0].trim();
      }
      if(couponCode1 == couponCode1.toUpperCase()){
        couponCode = couponCode1;
      }
      else{
        couponCode = "";
      }
    }
  }
  if(couponCode != ""){
   couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
 }
}

couponToSend = JSON.stringify(couponToSend);
var jsonArr = [{'couponsExt': couponToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon();