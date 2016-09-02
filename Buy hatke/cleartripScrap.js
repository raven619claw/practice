
function sendCoupon(){
  $ = jQuery.noConflict();
  couponToSend = [];
  var cur_link = window.location.href;
  var couponUrl = "";
  var couponCode = "";
  var couponText = "";
  var couponDesc = "";
  var couponExp = 0;
  var couponAt = 1289;
  couponUrl = "www.cleartrip.com/";
  couponCode = "";
  couponText = "";
  couponDesc = "";

  if(cur_link.split("/offers").length > 1){
    couponUrl = cur_link;
    couponCode = "";
    couponText = "";
    couponDesc = "";
    if($("#block-system-main table:eq(0) tr:eq(0) .rtecenter:eq(1)").text().toUpperCase().split("CODE").length > 1){

      couponCode = $("#block-system-main table:eq(0) tr:eq(1) .rtecenter:eq(1)").text().trim();
      if(couponCode.toUpperCase() != couponCode){
        couponCode = "";
      }
      couponText = $("#page-title").text().trim();

      if($("#block-system-main .simplebullet").length > 0){
        couponDesc = $("#block-system-main .simplebullet:eq(0)").text().trim();
      }
      else{
        couponDesc = $("#block-system-main ul:eq(0) li").text().trim();
      }
      if(couponDesc.split(couponCode).length < 2){
        couponDesc = "";
      }
      if(couponText.split("\n").length > 1){
        couponText = couponText.split("\n").join(" ").trim();
      }
      if(couponDesc.split("\n").length > 1){
        couponDesc = couponDesc.split("\n").join(" ").trim();
      }
      if($("#block-system-main table:eq(0) tr:eq(0) .rtecenter:eq(2)").text().toUpperCase().split("VALID TILL").length > 1){
        couponExp = $("#block-system-main table:eq(0) tr:eq(1) .rtecenter:eq(2)").text().trim();
        if(couponExp != "" && couponExp != undefined && couponExp.split(" ").length > 2){
          couponExp1 = couponExp.split(" ");
          couponExp1 = couponExp1[0].trim();
          couponExp2 = couponExp.split(" ");
          couponExp2 = couponExp2[1].trim();
          couponExp3 = couponExp.split(" ");
          couponExp3 = couponExp3[2].trim();
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
          else if(couponExp2.toUpperCase().split("OPT").length > 1){
            couponExp2 = "10"; 
          }
          else if(couponExp2.toUpperCase().split("NOV").length > 1){
            couponExp2 = "11"; 
          }
          else if(couponExp2.toUpperCase().split("DEC").length > 1){
            couponExp2 = "12"; 
          }
          couponExp = couponExp3+"-"+couponExp2+"-"+couponExp1+" 23:59:59";
        }
        else{
          couponExp = 0;
        }
      }
      if($(".views-label-field-expiration-date").length > 0){
        var exp_status = $(".views-label-field-expiration-date").text().trim();
        if(exp_status.toUpperCase().split("EXPIRED SINCE").length > 1){
          var expired = 1;
        }
        else if(exp_status.toUpperCase().split("EXPIRES IN").length > 1){
          var expired = 0;
        }
      }
      else{
        var expired = 0;
      }
      if(couponCode != ""){
        couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link), expired]);
      }
    }
    else if($("#block-system-main").length > 0){

      slider = $("#block-system-main ul");
      sliderLength = slider.length;

      for(i=0;i<sliderLength;i++){
        couponUrl = cur_link;
        couponCode = "";
        couponText = "";
        couponDesc = "";
        couponExp = 0;
        cp = "";
        couponDesc = $("#block-system-main ul:eq("+i+")").text().trim();
        couponText = $("#page-title").text().trim();

        if(couponDesc.split("coupon code ").length > 1){
          cp = couponDesc.split("coupon code ");
          cp = cp[1];
          if(cp.split(" ").length > 1){
            cp = cp.split(" ");
            cp = cp[0].trim();
          }
          else if(cp.split(",").length > 1){
            cp = cp.split(",");
            cp = cp[0].trim();
          }
          else if(cp.split(".").length > 1){
            cp = cp.split(".");
            cp = cp[0].trim();
          }
          if(cp == cp.toUpperCase()){
            couponCode = cp;
          }
          else{
            couponCode = "";
          }
        }
        if(couponText.split("\n").length > 1){
          couponText = couponText.split("\n").join(" ").trim();
        }
        if(couponDesc.split("\n").length > 1){
          couponDesc = couponDesc.split("\n").join(" ").trim();
        }

        if($(".views-label-field-expiration-date").length > 0){
          var exp_status = $(".views-label-field-expiration-date").text().trim();
          if(exp_status.toUpperCase().split("EXPIRED SINCE").length > 1){
            var expired = 1;
          }
          else if(exp_status.toUpperCase().split("EXPIRES IN").length > 1){
            var expired = 0;
          }
        }
        else{
          var expired = 0;
        }

        if(couponCode != ""){
          couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link), expired]);
        }
      }
    }


  }
  couponToSend = JSON.stringify(couponToSend);
  var jsonArr = [{'couponsExt': couponToSend}];
  jsonArr = JSON.stringify(jsonArr);
  sendMessage(1, jsonArr, 15, doNothing, []);  
}
sendCoupon()
