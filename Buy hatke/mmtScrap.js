

function sendCoupon(){
  couponToSend = [];
  var cur_link = window.location.href;
  var couponUrl = "";
  var couponCode = "";
  var couponText = "";
  var couponDesc = "";
  var couponExp = 0;
  var couponAt = 1288;
  couponUrl = "http://www.makemytrip.com/";
  couponCode = "";
  couponText = "";
  couponDesc = "";
  last_bread = 0;

  if(cur_link.split("/coupons").length > 1){

    slider = $("#block-mmt_commons-coupons_listing .section_box");
    sliderLength = slider.length;

    for(i=0;i<sliderLength;i++){
      couponUrl = "http://www.makemytrip.com/";
      couponCode = "";
      couponText = "";
      couponDesc = "";
      couponExp = 0;

      if( $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .deal_code_left .din-ab").length > 0){
        couponCode = $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .deal_code_left:eq(0) .din-ab:eq(0)").text().trim();
      }
      else{
        couponCode = "";
      }

      if(couponCode.toUpperCase() == "NO DEAL CODE REQUIRED"){
        couponCode = "NO CODE REQUIRED";
      }

      if( $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .deal_code_left .valid_date").length > 0){
        couponExp = $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .deal_code_left:eq(0) .valid_date:eq(0)").text().trim();

        if(couponExp.toUpperCase().split("TILL").length > 1){
          couponExp = couponExp.toUpperCase().split("TILL");
          couponExp = couponExp[1].trim();
        }

        if(couponExp.split("-").length > 1){
          couponExp1 = couponExp.split("-");
          couponExp1 = couponExp1[2].trim();
          couponExp1 = "20"+couponExp1;

          couponExp3 = couponExp.split("-");
          couponExp3 = couponExp3[0].trim();

          couponExp2 = couponExp.split("-");
          couponExp2 = couponExp2[1].trim();

          if(couponExp2.toUpperCase().split("JAN").length > 1){
            couponExp2 = "01";
          }
          else if(couponExp2.toUpperCase().split("FEB").length > 1){
            couponExp2 = "02";
          }
          else if(couponExp2.toUpperCase().split("MAR").length > 1){
            couponExp2 = "03";
          }
          else if(couponExp2.toUpperCase().split("APR").length > 1){
            couponExp2 = "04";
          }
          else if(couponExp2.toUpperCase().split("MAY").length > 1){
            couponExp2 = "05";
          }
          else if(couponExp2.toUpperCase().split("JUN").length > 1){
            couponExp2 = "06";
          }
          else if(couponExp2.toUpperCase().split("JUL").length > 1){
            couponExp2 = "07";
          }
          else if(couponExp2.toUpperCase().split("AUG").length > 1){
            couponExp2 = "08";
          }
          else if(couponExp2.toUpperCase().split("SEP").length > 1){
            couponExp2 = "09";
          }
          else if(couponExp2.toUpperCase().split("OCT").length > 1){
            couponExp2 = "10";
          }
          else if(couponExp2.toUpperCase().split("NOV").length > 1){
            couponExp2 = "11";
          }
          else if(couponExp2.toUpperCase().split("DEC").length > 1){
            couponExp2 = "12";
          }

          couponExp = couponExp1+"-"+couponExp2+"-"+couponExp3+ " 23:59:59";
        }
        else{
          couponExp = 0;
        }
      }

      if($("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right .din-regular a").length > 0){
        couponUrl = $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right:eq(0) .din-regular a:eq(0)").attr('href').trim();
        if(couponUrl.split("javascript:void(0)").length > 1){
          couponUrl = "http://www.makemytrip.com/";
          if($("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right .modal-header").length > 0){
            couponDesc = $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right:eq(0) .modal-header:eq(0)").text().trim();
          }
          if($("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right .modal-body p").length > 0){
            couponDesc = couponDesc + " " +$("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right:eq(0) .modal-body:eq(0) p:eq(0)").text().trim();
          }
          
        }

      }

      if($("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right .din-ab h4").length > 0){
        couponText = $("#block-mmt_commons-coupons_listing .section_box:eq("+i+") .discount_right:eq(0) .din-ab:eq(0) h4:eq(0)").text().trim();
      }

      if(couponCode != ""){
        couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), encodeURIComponent(couponExp), encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
      }
    }
  }
  else  if(cur_link.split("/promotion/includes/").length > 1){

    slider = $(".content table tbody tr");
    sliderLength = slider.length;

    for(i=0;i<sliderLength;i++){
      couponUrl = "http://www.makemytrip.com/";
      couponCode = "";
      couponText = "";
      couponDesc = "";
      couponExp = 0;

      if( $(".content table tbody tr:eq("+i+") td").length > 0){
        couponCode = $(".content table tbody tr:eq("+i+") td strong:eq(0)").text().trim();

        if(couponCode != couponCode.toUpperCase()){
          couponCode = "";
        }
      }
      else{
        couponCode = "";
      }

      if(couponCode.toUpperCase() == "NO DEAL CODE REQUIRED"){
        couponCode = "NO CODE REQUIRED";
      }

      if( $(".content table tbody tr:eq("+i+") .deal_code_left .valid_date").length > 0){
        couponExp = $(".content table tbody tr:eq("+i+") .deal_code_left:eq(0) .valid_date:eq(0)").text().trim();

        if(couponExp.toUpperCase().split("TILL").length > 1){
          couponExp = couponExp.toUpperCase().split("TILL");
          couponExp = couponExp[1].trim();
        }

        if(couponExp.split("-").length > 1){
          couponExp1 = couponExp.split("-");
          couponExp1 = couponExp1[2].trim();
          couponExp1 = "20"+couponExp1;

          couponExp3 = couponExp.split("-");
          couponExp3 = couponExp3[0].trim();

          couponExp2 = couponExp.split("-");
          couponExp2 = couponExp2[1].trim();

          if(couponExp2.toUpperCase().split("JAN").length > 1){
            couponExp2 = "01";
          }
          else if(couponExp2.toUpperCase().split("FEB").length > 1){
            couponExp2 = "02";
          }
          else if(couponExp2.toUpperCase().split("MAR").length > 1){
            couponExp2 = "03";
          }
          else if(couponExp2.toUpperCase().split("APR").length > 1){
            couponExp2 = "04";
          }
          else if(couponExp2.toUpperCase().split("MAY").length > 1){
            couponExp2 = "05";
          }
          else if(couponExp2.toUpperCase().split("JUN").length > 1){
            couponExp2 = "06";
          }
          else if(couponExp2.toUpperCase().split("JUL").length > 1){
            couponExp2 = "07";
          }
          else if(couponExp2.toUpperCase().split("AUG").length > 1){
            couponExp2 = "08";
          }
          else if(couponExp2.toUpperCase().split("SEP").length > 1){
            couponExp2 = "09";
          }
          else if(couponExp2.toUpperCase().split("OCT").length > 1){
            couponExp2 = "10";
          }
          else if(couponExp2.toUpperCase().split("NOV").length > 1){
            couponExp2 = "11";
          }
          else if(couponExp2.toUpperCase().split("DEC").length > 1){
            couponExp2 = "12";
          }

          couponExp = couponExp1+"-"+couponExp2+"-"+couponExp3+ " 23:59:59";
        }
        else{
          couponExp = 0;
        }
      }

      if($(".content table tbody tr:eq("+i+") .discount_right .din-regular a").length > 0){
        couponUrl = $(".content table tbody tr:eq("+i+") .discount_right:eq(0) .din-regular a:eq(0)").attr('href').trim();
        if(couponUrl.split("javascript:void(0)").length > 1){
          couponUrl = "http://www.makemytrip.com/";
          if($(".content table tbody tr:eq("+i+") .discount_right .modal-header").length > 0){
            couponDesc = $(".content table tbody tr:eq("+i+") .discount_right:eq(0) .modal-header:eq(0)").text().trim();
          }
          if($(".content table tbody tr:eq("+i+") .discount_right .modal-body p").length > 0){
            couponDesc = couponDesc + " " +$(".content table tbody tr:eq("+i+") .discount_right:eq(0) .modal-body:eq(0) p:eq(0)").text().trim();
          }
          
        }

      }

      if($(".content table tbody tr:eq("+i+") .discount_right .din-ab h4").length > 0){
        couponText = $(".content table tbody tr:eq("+i+") .discount_right:eq(0) .din-ab:eq(0) h4:eq(0)").text().trim();
      }

      if(couponCode != ""){
        couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), encodeURIComponent(couponExp), encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)]);
      }
    }
  }
  couponToSend = JSON.stringify(couponToSend);
  var jsonArr = [{'couponsExt': couponToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon()
