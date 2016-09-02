var myDiv = "<div id='helloSaysPrashant'></div>";
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + "; path=.buyhatke.com" ;
}

function setExtNameCook(){
	if(extName==''){
		setTimeout(function(){setExtNameCook();}, 1000);
	}
	else {
		setCookie("ext_name", extName, 100000);
	}
}


setExtNameCook();

$('#footer').after(myDiv);

