function sendCoupon(){
 $ = jQuery.noConflict();
 couponToSend = [];
 var cur_link = window.location.href;
 var couponUrl = "";
 var couponCode = "";
 var couponText = "";
 var couponDesc = "";
 var couponExp = 0;
 var couponAt = 1294;
 var slider = "";
 var sliderLength = 0;

 if(cur_link.split("/offers/").length > 1){

   if($('.container-fluid table:eq(0) tr').length > 0){
     slider = $('.container-fluid table:eq(0) tr');
     sliderLength = slider.length;
     couponUrl = "";
     couponCode = "";
     couponText = "";
     couponDesc = "";
     couponExp = 0;
     couponAt = 1294;

     for(i=1;i<sliderLength;i++){
       couponUrl = cur_link;
       couponCode = "";
       couponText = "";
       couponDesc = "";

       if($('.container-fluid table:eq(0) tr:eq('+ i +')').find("td").length > 0){
        couponCode = $('.container-fluid table:eq(0) tr:eq('+ i +')').find("td:eq(2)").text().trim();
        if(couponCode != couponCode.toUpperCase()){
          couponCode = "";
        }
        if(!couponCode.match(/^(?![0-9]*$)[a-zA-Z0-9]+$/)){
          couponCode = "";
        }


      }

      if($('.container-fluid table:eq(0) tr:eq('+ i +')').find("td").length > 0){
        couponText = $('.container-fluid table:eq(0) tr:eq('+ i +')').find("td:eq(0)").text().trim();
        if(couponText.toUpperCase() == "CODE"){
          couponCode = "";
        }
        couponText = couponText+" "+$('.container-fluid table:eq(0) tr:eq('+ i +')').find("td:eq(1)").text().trim();
      }
      if(couponText.split("\n").length > 1){
        couponText = couponText.split("\n").join(" ").trim();
      }
      if(couponDesc.split("\n").length > 1){
        couponDesc = couponDesc.split("\n").join(" ").trim();
      }
      if($("#expiry-div").length > 0 && $("#expiry-div").text().toUpperCase().trim().split("OFFER HAS EXPIRED").length > 1){
        couponCode = "";
      }
      if(couponCode != "" && !isNaN(couponCode) == false){
        checkUpdated = 2;
        couponToSend.push([encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link)], checkUpdated);
      }

    }     

  }



//   if($('.bot_bor table:eq(0) tr').length > 0){
//     slider = $('.bot_bor table:eq(0) tr');
//     sliderLength = slider.length;
//     couponUrl = "";
//     couponCode = "";
//     couponText = "";
//     couponDesc = "";
//     couponExp = 0;
//     couponAt = 1294;

//     for(i=1;i<sliderLength;i++){
//      couponUrl = cur_link;
//      couponCode = "";
//      couponText = "";
//      couponDesc = "";

//      if($('.bot_bor table:eq(0) tr:eq('+ i +')').find("td").length > 0){
//       couponCode = $('.bot_bor table:eq(0) tr:eq('+ i +')').find("td:eq(2)").text().trim();
//       if(couponCode != couponCode.toUpperCase()){
//         couponCode = "";
//       }
//     }

//     if($('.bot_bor table:eq(0) tr:eq('+ i +')').find("td").length > 0){
//       couponText = $('.bot_bor table:eq(0) tr:eq('+ i +')').find("td:eq(0)").text().trim();

//       if(couponText.toUpperCase() == "CODE"){
//         couponCode = "";
//       }
//       couponText = couponText+" "+$('.bot_bor table:eq(0) tr:eq('+ i +')').find("td:eq(1)").text().trim();


//     }
//     if(couponText.split("\n").length > 1){
//       couponText = couponText.split("\n").join(" ").trim();
//     }
//     if(couponDesc.split("\n").length > 1){
//       couponDesc = couponDesc.split("\n").join(" ").trim();
//     }
//     if(couponCode != "" && !isNaN(couponCode) == false){
//       couponToSend.push([(couponCode), (couponText), couponExp, (couponUrl), (couponDesc), couponAt, (cur_link)]);
//     }

//   }     

// }

if($('#main-above-content .offers_info').length > 0){
  couponUrl = cur_link;
  couponCode = "";
  couponText = " ";
  couponDesc = "";

  if($('#main-above-content .offers_info').find(".promocode").length > 0){
    couponCode = $('#main-above-content .offers_info').find(".promocode:eq(0)").text().trim();

    if(couponCode == "Not Required"){
      couponCode = "NO CODE REQUIRED";
    }
    else if(couponCode != couponCode.toUpperCase()){
      couponCode = "";
    }
    if(couponCode.toUpperCase() == "SEE BELOW"){
      couponCode = "";
    }
    if(!couponCode.match(/^(?![0-9]*$)[a-zA-Z0-9]+$/)){
      couponCode = "";
    }
  }

  if($(".offer_sub_detail").length > 0){
    for(i=0;i<$(".offer_sub_detail").length;i++){
      couponText = couponText + " " + $(".offer_sub_detail:eq("+ i +")").parent().text().trim();
    }
  }
  if(couponText.split("\n").length > 1){
    couponText = couponText.split("\n").join(" ").trim();
  }
  if(couponDesc.split("\n").length > 1){
    couponDesc = couponDesc.split("\n").join(" ").trim();
  }
  if($("#expiry-div").length > 0 && $("#expiry-div").text().toUpperCase().trim().split("OFFER HAS EXPIRED").length > 1){
    couponCode = "";
  }
  if(couponCode != "" && !isNaN(couponCode) == false){
    checkUpdated = 2;
    couponToSend.push([ encodeURIComponent(couponCode), encodeURIComponent(couponText), couponExp, encodeURIComponent(couponUrl), encodeURIComponent(couponDesc), couponAt, encodeURIComponent(cur_link), checkUpdated]);
  }

}

}
couponToSend = JSON.stringify(couponToSend);
var jsonArr = [{'couponsExt': couponToSend}];
jsonArr = JSON.stringify(jsonArr);
sendMessage(1, jsonArr, 15, doNothing, []); 
}
sendCoupon();
//couponToSend
