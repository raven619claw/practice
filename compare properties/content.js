var blue = chrome.extension.getURL("blue.png");
var green = chrome.extension.getURL("green.png");

var btnElm = "<div class='box dldBtn'><label class='rounded-box' role='presentation' id='dldLbl' style='display:none;'><span>Download</span></label><button class='rounded-box' aria-label='Download'> <img src='"+blue+"'/></button>";

$(document).ready(function(){
   	hasLoaded();
	setInterval(addBtn, 1000);
});



function addBtn(){
	$(".sidedock").each(function(){
		if($(this).find(".dldBtn").size() == 0){
			var parent = $(this);
			var v = $(this).parent().parent().find("video");
			if(v && (v = v.attr("src")) && v.indexOf(".mp4") != -1){
				addBtnElm(v, parent);
			}else{
				$("script").each(function(){	
					var m;
					if((m=$(this).html().match(/(" *url *" *: *")( *https:\/\/[^"]+vimeo[^"]+\.mp4[^"]+)/)) && m.length >= 3){
						addBtnElm(m[2], parent);
					}
				});
			}
		}
	});
}


function addBtnElm(link, parent){
	var elm = btnElm+"<div class='videoLink' style='display:none'>"+link+"</div></div>";
	parent.append(elm);
}


function dld(link){
	$("body").append("<a id='dldLnk' href='"+link+"' download='video' target='_blank' style='display:none;'></a>");
	document.getElementById("dldLnk").click();
	$("#dldLnk").remove();
}

function hasLoaded(){
	 addBtn();
	$("body").on("mouseenter",".dldBtn",function(){
		$("#dldLbl").fadeIn();
		$(this).find("img").attr("src",green);
	}).on("mouseleave",".dldBtn",function(){
		$("#dldLbl").fadeOut();
		$(this).find("img").attr("src",blue);
	});
	
	var v = $(".dldBtn").find(".videoLink").text();
	if(v && v.indexOf(".mp4")!=-1){
		dld(v);
	}
	$("body").on("click",".dldBtn", function(){
		var v = $(this).find(".videoLink").text();
		if(v && v.indexOf(".mp4")!=-1){
			dld(v);
		}
	});
	
}
