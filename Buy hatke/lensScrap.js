function getCategory(){
  var category = "";
  return category;
}
$ = jQuery.noConflict();
function sendPairs(){
  arrayToSend = [];
  if($('.saleproducts li').length > 0){
    var slider = $('.saleproducts li');
    var sliderLength = slider.length;
    var link;
    var price;
    var PID;

    for(i=0;i<sliderLength;i++){
      price = "";
      PID = "";
      if($('.saleproducts li:eq('+ i +') a').length > 0){
        link = $('.saleproducts li:eq('+ i +') a:eq(0)').attr("href");
        if(link != ""){
          PID = link;
          if(PID.split("?").length > 1){
            PID = PID.split("?");
            PID = PID[0];
          }
          if(PID.split("#").length > 1){
            PID = PID.split("#");
            PID = PID[0];
          }
          if(PID.split("&").length > 1){
            PID = PID.split("&");
            PID = PID[0];
          }
          if(PID.split(".com/").length > 1){
            PID = PID.split(".com/");
            PID = PID[1];
          }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){

            if($('.saleproducts li:eq('+ i +')').find('[itemprop="price"]').length > 0){
              price = $('.saleproducts li:eq('+ i +')').find('[itemprop="price"]').attr('content');
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else if($('.saleproducts li:eq('+ i +')').find('.prem-price').length > 0){
              price = $('.saleproducts li:eq('+ i +')').find('.prem-price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price]);
          }

          } // for ends1

        }

        if($('#bs .span3').length > 0){
          var slider = $('#bs .span3');
          var sliderLength = slider.length;
          var link;
          var price;
          var PID;

          for(i=0;i<sliderLength;i++){
            price = "";
            PID = "";
            if($('#bs .span3:eq('+ i +') a').length > 0){
              link = $('#bs .span3:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){

            if($('#bs .span3:eq('+ i +')').find('.hm_tm_price').length > 0){
              price = $('#bs .span3:eq('+ i +')').find('.hm_tm_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price]);
          }

          } // for ends1

        }

        if($('#vsims .span4').length > 0){
          var slider = $('#vsims .span4');
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
            if($('#vsims .span4:eq('+ i +') a').length > 0){
              link = $('#vsims .span4:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){
            if($('#vsims .span4:eq('+ i +')').find('.hm_tm_title').length > 0){
              prod = $('#vsims .span4:eq('+ i +')').find('.hm_tm_title:eq(0)').text().trim();
            }
            if($('#vsims .span4:eq('+ i +')').find('.tm_img_par img').length > 0){
              image = $('#vsims .span4:eq('+ i +')').find('.tm_img_par img:eq(0)').attr("src").trim();
            }
            if($('#vsims .span4:eq('+ i +')').find('.hm_tm_price').length > 0){
              price = $('#vsims .span4:eq('+ i +')').find('.hm_tm_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price, prod, image, oos]);
          }

          } // for ends1

        }

        if($('#psims .span4').length > 0){
          var slider = $('#psims .span4');
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
            if($('#psims .span4:eq('+ i +') a').length > 0){
              link = $('#psims .span4:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){
            if($('#psims .span4:eq('+ i +')').find('.hm_tm_title').length > 0){
              prod = $('#psims .span4:eq('+ i +')').find('.hm_tm_title:eq(0)').text().trim();
            }
            if($('#psims .span4:eq('+ i +')').find('.tm_img_par img').length > 0){
              image = $('#psims .span4:eq('+ i +')').find('.tm_img_par img:eq(0)').attr("src").trim();
            }
            if($('#psims .span4:eq('+ i +')').find('.hm_tm_price').length > 0){
              price = $('#psims .span4:eq('+ i +')').find('.hm_tm_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price, prod, image, oos]);
          }

          } // for ends1

        }

        if($('#ic_desk_recommendations_table a').length > 0){
          var slider = $('#ic_desk_recommendations_table a');
          var sliderLength = slider.length;
          var link;
          var price;
          var PID;

          for(i=0;i<sliderLength;i++){
            price = "";
            PID = "";
            if($('#ic_desk_recommendations_table a:eq('+ i +')').length > 0){
              link = $('#ic_desk_recommendations_table a:eq('+ i +')').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){

            if($('#ic_desk_recommendations_table a:eq('+ i +')').parent().find('#ic_lk_price').length > 0){
              price = $('#ic_desk_recommendations_table a:eq('+ i +')').parent().find('#ic_lk_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price]);
          }

          } // for ends1

        }


        if($('.prod_parent').length > 0){
          var slider = $('.prod_parent');
          var sliderLength = slider.length;
          var link;
          var price;
          var PID;

          for(i=0;i<sliderLength;i++){
            price = "";
            PID = "";
            if($('.prod_parent:eq('+ i +') a').length > 0){
              link = $('.prod_parent:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){

            if($('.prod_parent:eq('+ i +')').find('.item_price').length > 0){
              price = $('.prod_parent:eq('+ i +')').find('.item_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price]);
          }

          } // for ends1

        }


        if($('#na .span3').length > 0){
          var slider = $('#na .span3');
          var sliderLength = slider.length;
          var link;
          var price;
          var PID;

          for(i=0;i<sliderLength;i++){
            price = "";
            PID = "";
            if($('#na .span3:eq('+ i +') a').length > 0){
              link = $('#na .span3:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){

            if($('#na .span3:eq('+ i +')').find('.hm_tm_price').length > 0){
              price = $('#na .span3:eq('+ i +')').find('.hm_tm_price').text().trim();
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price]);
          }

          } // for ends1

        }

        if($('.product-list li').length > 0){
          var slider = $('.product-list li');
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
            if($('.product-list li:eq('+ i +') a').length > 0){
              link = $('.product-list li:eq('+ i +') a:eq(0)').attr("href");
              if(link != ""){
                PID = link;
                if(PID.split("?").length > 1){
                  PID = PID.split("?");
                  PID = PID[0];
                }
                if(PID.split("#").length > 1){
                  PID = PID.split("#");
                  PID = PID[0];
                }
                if(PID.split("&").length > 1){
                  PID = PID.split("&");
                  PID = PID[0];
                }
                if(PID.split(".com/").length > 1){
                  PID = PID.split(".com/");
                  PID = PID[1];
                }
            } //link if ends

            else{
              PID = "";
            }
          } //2nd if ends
          else{
            PID = "";
          }
          if(PID != ""){
            if($('.product-list li:eq('+ i +')').find('.lazy:eq(0)').length > 0){
              prod = $('.product-list li:eq('+ i +')').find('.lazy:eq(0)').attr("alt").trim();
            }
            if($('.product-list li:eq('+ i +')').find('.lazy').attr("short-sec").length > 0){
              image = $('.product-list li:eq('+ i +')').find('.lazy:eq(0)').attr("short-sec").trim();
            }
            if(image == ""){
              if($('.product-list li:eq('+ i +')').find('.lazy').attr("src").length > 0){
                image = $('.product-list li:eq('+ i +')').find('.lazy:eq(0)').attr("src").trim();
              }
            }
            if($('.product-list li:eq('+ i +')').find('.price-view').length > 0){
              if($('.product-list li:eq('+ i +')').find('.price-view:eq(1)').length > 0){
                price = $('.product-list li:eq('+ i +')').find('.price-view:eq(1)').text().trim();
              }
              else{
                price = $('.product-list li:eq('+ i +')').find('.price-view:eq(0)').text().trim();

              }
              if(price.split("Rs.").length > 1){
                price = price.split("Rs.");
                price =price[1];
              }
              else if(price.split("nbsp;").length > 1){
                price = price.split("nbsp;");
                price =price[1];
              }
              else if(price.split("Rs").length > 1){
                price = price.split("Rs");
                price =price[1];
              }

              price = price.split(",").join("").trim();

            }
            else{
              price = "";
            }


          } //PID ends

          else{
            price = "";
          }

          if(PID != "" && price != "" && price != 0){
            arrayToSend.push([PID, price, prod, image, oos]);
          }

          } // for ends1

        }
        arrayToSend = JSON.stringify(arrayToSend);
        var jsonArr = [{'pairsLens': arrayToSend}];
        jsonArr = JSON.stringify(jsonArr);
        sendMessage(0, jsonArr, 0, doNothing, []);  
      }

      function sendCurrent(){
        curData = [];   
        var prod = "";
        var image = "";
        var myPrice = "";
        var cur_url = "";
        var current_status = 0;
        var link = window.location.href;
        var PID = "";

        if($('.title .htag').length > 0){
          prod1 = $('.title .htag').text().trim();
          if($('.title p').length > 0){
            prod2 = $('.title p').text().trim();
          }
          prod = prod1+" "+prod2;

        }
        else if($('.title h1').length > 0){
          prod = $('.title h1').text().trim();

        }

        if(($('.product-options').length > 0) && ($('.product-options').text().split("out of stock").length > 1)){
          current_status = 1;
        }
        else if($('.purchase-type').length < 1){
          current_status = 1;
        }
        else
        {
          current_status = 0;
        }

        myPrice = $('meta[itemprop="price"]').attr('content').split(",").join("").trim();

        image = $('img[itemprop="image"]').attr('src');
        PID = link;
        if(PID.split("?").length > 1){
          PID = PID.split("?");
          PID = PID[0];
        }
        if(PID.split("#").length > 1){
          PID = PID.split("#");
          PID = PID[0];
        }
        if(PID.split("&").length > 1){
          PID = PID.split("&");
          PID = PID[0];
        }
        if(PID.split(".com/").length > 1){
          PID = PID.split(".com/");
          PID = PID[1];
        }


        cur_url = window.location.href;
        curData.push([prod, image, myPrice, cur_url, current_status, PID]);
        curData = JSON.stringify(curData);
        var jsonArr = [{'curDataLens': curData}];
        jsonArr = JSON.stringify(jsonArr);
        if($('.product-essential').length>0){
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
  var brand = "";
  if($(".title h1 .htag").length > 0){
    brand = $(".title h1 .htag:eq(0)").text().trim();
  }
  prod = $('.title [itemprop="name"]:eq(0)').text().trim();
  if(prod.split(brand).length > 1){
    prod = prod;
  }
  else{
    prod = brand + " " + prod;
  }
  if(prod.split("\n").length > 1){
    prod = prod.split("\n").join("").trim();
  }
  if(prod.split("    ").length > 1){
    prod = prod.split("    ").join("").trim();
  }

  if($('.product-essential').length>0){
    return prod;
  }
  else {
    return "";
  }
  
}

function getImage(){
  var image = "";

  image = $('img[itemprop="image"]').attr('src');
  
  return image;
}

function getPrice(){
  price = "";
  price = $('meta[itemprop="price"]').attr('content').split(",").join("").trim();
  
  price = filter_price(price);
  return price;
}

function getAvailability(){
  var avail = 1;
  if(($('.product-options').length > 0) && ($('.product-options').text().split("out of stock").length > 1)){
    avail = 0;
  }
  return avail;

}
function getPID(){

  var link = window.location.href;
  //console.log("link: "+link);
  var pid = link;

  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];

  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];

  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];

  }
  if(pid.split(".com/").length > 1){
    pid = pid.split(".com/")[1];
  }

  
  return pid;



}

function returnPID(link){

  var pid = link;
  if(link == ""){
    pid = 0;
  }
  if(pid.split("#").length > 1){
    pid = pid.split("#")[0];
  }
  if(pid.split("&").length > 1){
    pid = pid.split("&")[0];
  }
  if(pid.split("?").length > 1){
    pid = pid.split("?")[0];
  }
  if(pid.split(".com/").length > 1){
    pid = pid.split(".com/")[1];
  }
  if(link.split('lenskart.com').length < 2){
    pid = 0;
  }
  if(link == ""){
    pid = 0;
  }
  
  return pid;



}


function getBreadCrumb(){
  var breadcrumb = "";
  var bread_final = "";
  var len_bread = $('.breadcrumbs').find('a').length;

  for(i=0;i<len_bread;i++){
    breadcrumb = $('.breadcrumbs').find('a:eq('+ i +')').text().trim();
    bread_final += breadcrumb + "*~";
  }

  return bread_final;


}


