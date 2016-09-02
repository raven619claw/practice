<?php
error_reporting(E_ALL);
include '/home/prashant/public/connect_special.php';

  $ext_id = $_GET['ext_id'];
  $link_id = $_GET['link_id'];
  $pr_added = $_GET['price_added'];
  $pr_last = $_GET['price_seen'];
  $email = $_GET['email'];
  $link = $_GET['link'];
  $prod = $_GET['prod'];
  $cur_price = $_GET['cur_price'];
  $image = $_GET['image'];
  $position = $_GET['position'];


      $diff = $pr_last - $cur_price;

      $diff2 = $pr_added - $cur_price;
      $prod_link = explode(' ', $prod);
      $prod_link = implode('-', $prod_link);
      switch ($position) {
        case 2:
          $img_portal = "http://compare.buyhatke.com/images/half/flipkart.jpg";
          break;
        case 3:
          $img_portal = "http://compare.buyhatke.com/images/half/snapdeal.jpg";
          break;
        case 4:
          $img_portal = "http://compare.buyhatke.com/images/half/shopclues.jpg";
          break;
        case 5:
          $img_portal = "http://compare.buyhatke.com/images/half/amazon.in.jpg";
          break;
        case 8:
          $img_portal = "http://compare.buyhatke.com/images/half/infibeam.jpg";
          break;
        case 9:
          $img_portal = "http://compare.buyhatke.com/images/half/jabong.jpg";
          break;
        case 7:
          $img_portal = "http://compare.buyhatke.com/images/half/myntra.jpg";
          break;
        case 12:
          $img_portal = "http://compare.buyhatke.com/images/half/homeshop18.jpg";
          break;
        case 11:
          $img_portal = "http://compare.buyhatke.com/images/half/yebhi.jpg";
          break;
        case 10:
          $img_portal = "http://compare.buyhatke.com/images/half/croma.jpg";
          break;
        case 6:
          $img_portal = "http://compare.buyhatke.com/images/half/tradus.jpg";
          break;
      }
      if($arr3['position']==2){
        $link = $link."&affid=buyhatkegm";
      }
      else if($arr3['position']==5){
        if(count(explode('?', $link))>1){
          $link = $link."&tag=buyhatke-21";
        }
        else {
          $link = $link."?tag=buyhatke-21";
        }
      }
      else if($arr3['position']==3){
        $link = "http://jasper.go2cloud.org/aff_c?offer_id=2&aff_id=3686&source=books_portal&url=".urlencode($link);
      }
      $link = "http://compare.buyhatke.com/tracking3.php?redirect=".urlencode($link);
      $link2 = "http://compare.buyhatke.com/products/".$prod_link;
      if($diff>0&&$diff2>=10){
        echo $diff;
        $linkUnsubscribe = "http://compare.buyhatke.com/unSubscribeProd.php?email=".$email."&id2=".$link_id."&id=".$ext_id;
        $dropPer = ($diff2/$cur_price)*100;
        $dropPer = round($dropPer, 2);
    $message = "Hey,\r\n <br><br> The price for the product you were monitoring, has dropped by Rs. ".$diff2.".  <br><br> Current price of the product is Rs. ".$cur_price." \r\n <br><br><a href='$link'>Click Here to go to the deal</a><br><br><a href='$link2'>View prices for the product from other stores.</a><br><br> Help us improve by writing a feedback by simply just replying to this mail.<br>Happy Shopping :)";
$trick = "Buyhatke".$ext_id."Prashant12-9-92".$email;
    $trick = md5($trick);
    $trick = md5($trick);
    $verLink = "http://compare.buyhatke.com/priceVerify.php?ex_id=".$ext_id."&code=".$trick."&email=".$email;
    if($isVerified==0){
$verification = '<td colspan="3" height="40" width="250" bgcolor="#CC3714" style="text-align:center"><a href="'.$verLink.'" target="_blank" style="color:white;text-decoration:none;font-weight:bold;">Verify Email</a></td>';
}
else {
  $verification = '<td colspan="3" height="40" width="250" style="text-align:center"></td>';
}

   $message = <<<EOD

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Price Drop</title>
    <style type="text/css">
      @media(max-width: 540px){
        #disc-p{
          margin-left: 60px;
          margin-top: 28px;
          //background: black;
        }
      }
    </style>
  </head>

<body style="margin:0; padding:0;">
  <table width="100%" bgcolor="#f2f2f2" style="font-size:15px; font-family:Arial, Helvetica, sans-serif">
    <tbody>
      <tr>
        <td>
          <table valign="top" style="max-width: 600px;" align="center"  itemscope itemtype="http://schema.org/EmailMessage">
            <tbody>
              <tr>
                <td style="text-align: center; font-size: 11px; color: #999;">Email not displaying correctly? <a href="#" style="color: #0DB2DB; text-decoration: none;"><font color="#0DB2DB">View email in browser</font></a></td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td>
                  <table style="background: white;" width="100%" bgcolor="white"><tbody>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td>
                        <table valign="top" align="left" width="161px">
                          <tbody>
                            <tr>
                              <td><img src="http://compare.buyhatke.com/mailer/v3/img/logo.png" style="outline:none" width="100%" alt="buyhatke.com"></td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" style="text-decoration:none;">
                          <table valign="top" align="right" width="40%" style="border: 2px solid #999; border-radius: 5px; min-width: 125px; max-width: 160px;">
                            <tbody>
                              <tr>
                                <td height="34px" style="text-align: center;"><b><font size="9px" style="color: #999; font-size: 9px; font-family: 'Open Sans', sans-serif;" color="#999">GET ALERTS ON YOUR PHONE</font></b></td>
                              </tr>
                            </tbody>
                          </table>
                        </a>
                      </td>
                    </tr>
                    <tr><td height="28px"></td></tr>
                    <tr><td width="100%"><img src="http://compare.buyhatke.com/mailer/v3/img/bnr-pd.png" width="100%" style="outline:none" alt="Hurray! Price has dropped"/></td></tr>
                    <tr><td height="34px" style="text-align: center;"><font size="14px" style="color: #999; font-size: 14px; font-family: 'Open Sans', sans-serif;" color="#999">Hey, The price for the product that you were monitoring has dropped.</font></td></tr>
                    <tr><td height="18px"></td></tr>
                    <tr><td width="100%" height="215px" style="text-align: center;"><img src="http://n4.sdlcdn.com/imgs/a/d/8/230x258/SDL637384487_1378285223_image1-88b3a.jpg" alt="Product Image | Please allow image viewing." style="max-width: 90%; max-height: 210px; border: 2px solid #E5E5E5; border-radius: 5px;outline:none" /></td></tr>
                    <tr><td height="18px"></td></tr>
                    <tr><td height="34px" style="text-align: center; padding: 0px 5%;"><font size="16px" style="color: #000; font-size: 16px; font-family: 'Open Sans', sans-serif; max-width: 90%;" color="#000"  itemprop="name">HCL ME Sync 1.0 (U3) Tablet (White, 4 GB, Wi-Fi, 3G) / HCL ME Sync 1.0 (U3) Tablet (White, 4 GB, Wi-Fi, 3G) /HCL ME Sync 1.0 (U3) Tablet (White, 4 GB, Wi-Fi, 3G)</font></td></tr>
                    <meta itemprop="description" content="Buyhatke Price drop alert"/>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td>
                        <table valign="top" align="center" width="250">
                          <tbody>
                            <tr>
                              <td style="text-align: left;"><font color="#999" size="15px" style="color: #999; font-size: 15px; font-family: 'Open Sans', sans-serif;">Set Price:</font></td>
                              <td  style="text-align: left;"><font size="17px" style="font-size: 17px; font-family: 'Open Sans', sans-serif;">&#8377; 234400</font></td>
                            </tr>
                            <tr>
                              <td style="text-align: left;"><font size="15px" style="font-size: 15px; font-family: 'Open Sans', sans-serif;">Current Price: </font></td>
                              <td  style="text-align: left;"><font color="#22B372" size="17px" style="color: #22B372; font-size: 17px; font-family: 'Open Sans', sans-serif;">&#8377; 21400</font></td>
                            </tr>
                          </tbody>
                        </table>
                        
                      </td>
                    </tr>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td>
                        <table id="disc-p" valign="top" align="center" width="250px">
                          <tbody>
                            <tr>
                              <td style="text-align: center;"><img src="http://compare.buyhatke.com/mailer/v3/img/sym-pd.png" width="62px" style="vertical-align: top;outline:none"> <font color="#22B372" size="60px" style="vertical-align: top; line-height: 55px; color: #22B372; font-size: 60px; font-family: 'Open Sans', sans-serif;">88%</font></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td itemprop="action" itemscope itemtype="http://schema.org/ViewAction">
                        <meta itemprop="name" content="Check"/>
                        <a style="text-decoration: none;" itemprop="url" href="https://flipkart.com">
                          <table valign="top" width="200px" align="center" style="border: 2px solid #0D9BBF; border-radius: 5px; background: #0DB2DB; max-width: 195px;">
                            <tbody>
                              <tr>
                                <td height="32px" style="text-align: center;"><b><font size="13px" style="color: white; font-size: 11px; font-family: 'Open Sans', sans-serif;" color="white">CHECK IT OUT NOW</font></b></td>
                                <td height="32px" style="text-align: center;"><img alt="site logo" src="http://compare.buyhatke.com/images/site_icons_m/flipkart1.png" width="30px" style="border-radius: 100%;outline:none; border: 2px solid #ccc;"></td>
                              </tr>
                            </tbody>
                          </table>
                        </a>
                      </td>
                    </tr>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td>
                        <a href="#" style="text-decoration: none;">
                          <table valign="top" align="center" style="border: 2px solid #d7d7d7; border-radius: 28px; width: 280px;">
                            <tbody>
                              <tr>
                                <td height="44px" style="text-align: center;"><font size="12px" style="color: #666; font-size: 11px; font-family: 'Open Sans', sans-serif;" color="#666">VIEW MORE PRICES FROM OTHER STORES</font></td>
                              </tr>
                            </tbody>
                          </table>
                        </a>
                      </td>
                    </tr>
                    <tr><td height="28px"></td></tr>
                    <tr><td width="100%"><img alt="Refer and win" src="http://compare.buyhatke.com/mailer/v3/img/bnr-rnw.png" width="100%" style="outline:none"/></td></tr>
                    <tr><td height="28px"></td></tr>
                    <tr><td height="34px" style="text-align: center;"><font size="14px" style="color: #999; font-size: 14px; font-family: 'Open Sans', sans-serif;" color="#999">The joy of saving is multiplied when your friends do it as well.<br> Refer them and also earn if they install the extension.</font></td></tr>
                    <tr><td height="28px"></td></tr>
                    <tr>
                      <td>
                        <a href="#" style="text-decoration: none;">
                          <table valign="top" align="center" style="border: 2px solid #009247; border-radius: 5px; width: 214px; background: #23B574;" bgcolor="#23B574">
                            <tbody>
                              <tr>
                                <td height="44px" style="text-align: center;"><b><font size="14px" style="color: white; font-size: 14px; font-family: 'Open Sans', sans-serif;" color="white">REFER & WIN</font></b></td>
                              </tr>
                            </tbody>
                          </table>
                        </a>
                      </td>
                    </tr>
                    <tr><td height="18px"></td></tr>
                  </tbody></table>
                </td>
              </tr>
              <tr>
                <td>
                  <table style="background: #333;" width="100%" bgcolor="#333"><tbody>
                    <tr>
                      <td>
                        <table valign="top" align="center" style="width: 90%;" width="90%">
                          <tbody>
                            <tr><td height="10px"></td></tr>
                            <tr>
                              <td height="44px" style="text-align: left;"><font size="14px" style="vertical-align: middle; color: white; font-size: 14px; font-family: 'Open Sans', sans-serif;" color="white">Follow us on: </font> <a href="#" style="text-decoration:none;"> <img style="vertical-align: middle;outline:none" alt="facebook" src="http://compare.buyhatke.com/mailer/v3/img/soc-fb.png"> </a> <a href="#" style="text-decoration:none;"> <img alt="gplus" style="vertical-align: middle;outline:none" src="http://compare.buyhatke.com/mailer/v3/img/soc-gplus.png"> </a> <a href="#" style="text-decoration:none;"> <img alt="twitter" style="vertical-align: middle;outline:none" src="http://compare.buyhatke.com/mailer/v3/img/soc-tw.png"> </a></td>
                            </tr>
                            <tr>
                              <td height="44px" style="text-align: left;"><font size="14px" style="vertical-align: middle; color: white; font-size: 14px; font-family: 'Open Sans', sans-serif;" color="white">Copyright &copy; 2013 Bidon Services Private Limited. All rights reserved.</font></td>
                            </tr>
                            <tr><td height="10px"></td></tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
              <tr>
                <td>
                  <table style="background: white;" width="100%" bgcolor="white"><tbody>
                    <tr>
                      <td style="background: white; color: #999; font-size: 10px;">
                        To give a feedback, simply reply to this email and we will fix your issue within 6 hours. This email was meant for <a href="mailto:atiprashant@gmail.com" target="_blank" style="text-decoration:none;color:#0db2db">atiprashant@gmail.com</a>. Unsubscribe me for this product <a href="http://compare.buyhatke.com/unSubscribeProd.php?email=atiprashant@gmail.com&amp;id2=1409&amp;id=11913" target="_blank" style="text-decoration:none;color:#0db2db">here</a>
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>    
    </tbody>
  </table>
</body>
</html>



EOD;
    
    $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Buyhatke Price Alert<wecare@buyhatke.com>' . "\r\n";
    $headers .= 'Reply-To: wecare@buyhatke.com' . "\r\n";
    // mail($email, 'Buyhatke Price Alert for '.$prod, $message, $headers);

    $message = $message."<br> Message sent to ".$email;

    mail("atiprashant@gmail.com", 'Buyhatke Price Alert for '.$prod, $message, $headers);
    echo "Mail sent to ".$email;
    }
  


    

  



?>
