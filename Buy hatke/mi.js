var selectedIndex = -1;
var dataFetched = 0;
chrome.runtime.sendMessage({getMIFlashSale: "haiKya"}, function(response) {
  //////console.log(response.farewell)
  var data = response.farewell;
  console.log(data);
  data = JSON.parse(data);
  for(k=0;k<data.length;k++){
  	 if(data[k].value==1){
  	 	 selectedIndex = k;
  	 	 console.log("Selected " + selectedIndex);
  	 }
  }
  dataFetched = 1;
});
var clickedOnce = 0;


function addAffiliateTag(){
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "http://secure.komli.com/?a=11022&c=12525&p=r&s1=");
	ifrm.style.width = "0px";
	ifrm.style.height = "0px";
	document.body.appendChild(ifrm);
}

addAffiliateTag();

function markOver(){
	chrome.runtime.sendMessage({setSaleVariables: "haiKya"}, function(response) {
  });
}

var timeCountDown = 1000;

function updateCurrentTime(){
setTimeout(function(){updateCurrentTime();},5000);
var stringTime = $('.pro-info').find('.btn:eq(0)').text();
stringTime = stringTime.split(":");
var timeRemaining = parseInt(stringTime[0])*3600 + parseInt(stringTime[1]*60) + parseInt(stringTime[2]);
console.log("Time remaining is " + timeRemaining);
	if(!isNaN(timeRemaining)){
		timeCountDown = timeRemaining;
	}
}

updateCurrentTime();



var success = 0;

var curURL = window.location.href;
var prefVer = 0;
if(curURL.split("#MI5").length>1){
    prefVer = 4;
}
else if(curURL.split("#HM3A").length>1){
	prefVer = 6;
}
else if(curURL.split("#MIPOWER20000").length>1){
	prefVer = 8;
}

// console.log(prefVer);
var flagClicked = 0;
function claimAfterCountDown(){
// console.log(prefVer);
	if(flagClicked==0){
	setTimeout(function(){claimAfterCountDown();},10);

	if(prefVer!=0){
	if(document.getElementsByTagName('a')[prefVer].innerHTML.toUpperCase().trim() == "BUY NOW"){
		// markOver();
		document.getElementsByTagName('a')[prefVer].click();
		flagClicked = 1;
		// markOver();
	}
	else {
		// console.log("Not found " + document.getElementsByTagName('a')[prefVer].innerHTML);
	}
  }
 }
}

claimAfterCountDown();

var statusFlag = 0;
if(window.location.href.split("choosePro").length > 1){
	statusFlag = 1;
}
console.log("statusFlag " + statusFlag);
function buyNow(){
	setTimeout(function(){buyNow();},10);
	// console.log("selectedIndex " + selectedIndex);
	if(statusFlag==1 && selectedIndex!=-1 && document.getElementsByClassName('btn-buy').length>0){
		if(selectedIndex==6){
			document.getElementsByClassName('btn-buy')[4].click();
		}
		else if(selectedIndex == 0 || selectedIndex==5){
			document.getElementsByClassName('btn-buy')[0].click();
		}
		else if(selectedIndex >0 && selectedIndex <=4){
			document.getElementsByClassName('btn-buy')[selectedIndex-1].click();
		}
	}
	else if(statusFlag==1 && document.getElementsByClassName('btn-buy').length>0 && dataFetched==1){
			document.getElementsByClassName('btn-buy')[0].click();
	}
}

buyNow();

var prodName = "";
prodName = $('.item.current').text().trim();
if(prodName!=""){
	prodName = prodName.split("No registration required");
	prodName = prodName[0];
	prodName = prodName.trim();
}
var imgLogo = chrome.extension.getURL("logo.png");
$('body').append('<div id="pop-alert-ams" class="hk-green" style="display:block;height:80px!important;"><div id="p-logo"><img src="' + imgLogo + '"></div><div id="p-msg"><p><a style="text-decoration:none;color:white" href="#">We are ready to book ' + prodName + ' for you.</a></p></div></div></div>');