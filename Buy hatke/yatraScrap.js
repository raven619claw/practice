function sendCoupon(){
  $ = jQuery.noConflict();
  couponToSend = [];
  var cur_link = window.location.href;
  var couponAt = 1293;
  var couponUrl = "";
  var couponCode = "";
  var couponText = "";
  var couponDesc = "";
  var couponExp = 0;
  if(cur_link.split("/offer/").length > 1){

    if($('.offer_DealsContainer li').length > 0){
      var slider = $('.offer_DealsContainer li');
      var sliderLength = slider.length;
      couponUrl = "";
      couponCode = "";
      couponText = "";
      couponDesc = "";
      couponExp = 0;

      for(i=0;i<sliderLength;i++){
       couponUrl = cur_link;
       couponCode = "";
       couponText = "";
       couponDesc = "";

       if($('.offer_DealsContainer li:eq('+ i +')').find(".minHTitle").length > 0){
        couponText = $('.offer_DealsContainer li:eq('+ i +')').find(".minHTitle:eq(0)").text().trim();
        if(couponText.split("Use code:").length > 1){
          couponCode = couponText.split("Use code:")[1].trim();
          couponCode = couponCode.split(" ")[0].trim();
        }
        else if(couponText.split("Use code").length > 1){
          couponCode = couponText.split("Use code")[1].trim();
          couponCode = couponCode.split(" ")[0].trim();
        }
        else{
          couponCode = "NO CODE REQUIRED";
        }


        if($('.offer_DealsContainer li:eq('+ i +')').find(".minHTitle:eq(0)").parent().find(".date").length > 0){
          couponExp = $('.offer_DealsContainer li:eq('+ i +')').find(".minHTitle:eq(0)").parent().find(".date").text().trim();

          if(couponExp.split(",").length > 1){
            couponExp1 = couponExp.split(",")[1].trim();
            couponExp4 = couponExp.split(",")[0].trim();
            couponExp2 = couponExp4.split(" ")[1].trim();
            couponExp3 = couponExp4.split(" ")[0].trim();

            if(couponExp3.toUpperCase().split("JAN").length > 1){
              couponExp3 = "01";
            }
            else if(couponExp3.toUpperCase().split("FEB").length > 1){
              couponExp3 = "02";
            }
            else if(couponExp3.toUpperCase().split("MAR").length > 1){
              couponExp3 = "03";
            }
            else if(couponExp3.toUpperCase().split("APR").length > 1){
              couponExp3 = "04";
            }
            else if(couponExp3.toUpperCase().split("MAY").length > 1){
              couponExp3 = "05";
            }
            else if(couponExp3.toUpperCase().split("JUN").length > 1){
              couponExp3 = "06";
            }
            else if(couponExp3.toUpperCase().split("JUL").length > 1){
              couponExp3 = "07";
            }
            else if(couponExp3.toUpperCase().split("AUG").length > 1){
              couponExp3 = "08";
            }
            else if(couponExp3.toUpperCase().split("SEP").length > 1){
              couponExp3 = "09";
            }
            else if(couponExp3.toUpperCase().split("OCT").length > 1){
              couponExp3 = "10";
            }
            else if(couponExp3.toUpperCase().split("NOV").length > 1){
              couponExp3 = "11";
            }
            else if(couponExp3.toUpperCase().split("DEC").length > 1){
              couponExp3 = "12";
            }

            couponExp = couponExp1+"-"+couponExp3+"-"+couponExp2+" 23:59:59";

          }
        }

      }

      if($('.offer_DealsContainer li:eq('+ i +')').attr("data-url").length > 0){
        couponUrl = $('.offer_DealsContainer li:eq('+ i +')').attr("data-url").trim();
      }
      else{
        couponUrl = cur_link;
      }
      if(couponCode != couponCode.toUpperCase()){
        couponCode = "";
      }
      if(couponCode.split(",").length > 1){
        couponCode = couponCode.split(",");
        couponCode = couponCode[0].trim();
      }
      if(couponCode != ""){
        couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
      }

    }     

  }

  if($('.offer-details').length > 0){
   couponUrl = "http://www.yatra.com/";
   couponCode = "";
   couponText = "";
   couponDesc = "";
   couponCode = $('.offer-details .bxs:eq(1) p:eq(1)').text().trim();
   couponUrl = cur_link;

   if($('.offers-wrapper').length > 0){
    couponText = $('.offers-wrapper .details-box:eq(0) .heading:eq(0)').text().trim();
    couponDesc = $('.offers-wrapper .details-box:eq(0) .content:eq(0)').text().trim();
  }

  if($('.offer-details .valid-till').length > 0){
    couponExp = $('.offer-details .valid-till:eq(0) strong:eq(0)').text().trim();
    if(couponExp.split(",").length > 1){
      couponExp1 = couponExp.split(",")[1].trim();
      couponExp4 = couponExp.split(",")[0].trim();
      couponExp2 = couponExp4.split(" ")[1].trim();
      couponExp3 = couponExp4.split(" ")[0].trim();

      if(couponExp3.toUpperCase().split("JAN").length > 1){
        couponExp3 = "01";
      }
      else if(couponExp3.toUpperCase().split("FEB").length > 1){
        couponExp3 = "02";
      }
      else if(couponExp3.toUpperCase().split("MAR").length > 1){
        couponExp3 = "03";
      }
      else if(couponExp3.toUpperCase().split("APR").length > 1){
        couponExp3 = "04";
      }
      else if(couponExp3.toUpperCase().split("MAY").length > 1){
        couponExp3 = "05";
      }
      else if(couponExp3.toUpperCase().split("JUN").length > 1){
        couponExp3 = "06";
      }
      else if(couponExp3.toUpperCase().split("JUL").length > 1){
        couponExp3 = "07";
      }
      else if(couponExp3.toUpperCase().split("AUG").length > 1){
        couponExp3 = "08";
      }
      else if(couponExp3.toUpperCase().split("SEP").length > 1){
        couponExp3 = "09";
      }
      else if(couponExp3.toUpperCase().split("OCT").length > 1){
        couponExp3 = "10";
      }
      else if(couponExp3.toUpperCase().split("NOV").length > 1){
        couponExp3 = "11";
      }
      else if(couponExp3.toUpperCase().split("DEC").length > 1){
        couponExp3 = "12";
      }

      couponExp = couponExp1+"-"+couponExp3+"-"+couponExp2+" 23:59:59";

    }
  }
  if(couponCode != couponCode.toUpperCase()){
    couponCode = "";
  }
  if(couponCode.split(",").length > 1){
    couponCode = couponCode.split(",");
    couponCode = couponCode[0].trim();
  }
  if(couponCode != ""){
    couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
  }

}

}
couponToSend = JSON.stringify(couponToSend);
var jsonArr = [{'couponsExt': couponToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon()