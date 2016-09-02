!function(){"use strict";function SwfStore(config){function id(){return"SwfStore_"+config.namespace.replace(reId,"_")+"_"+counter++}function div(visible){var d=document.createElement("div");return document.body.appendChild(d),d.id=id(),visible||(d.style.position="absolute",d.style.top="-2000px",d.style.left="-2000px"),d}config=config||{};var key,defaults={swf_url:"storage.swf",namespace:"swfstore",debug:!1,timeout:2,onready:null,onerror:null};for(key in defaults)defaults.hasOwnProperty(key)&&(config.hasOwnProperty(key)||(config[key]=defaults[key]));if(config.namespace=config.namespace.replace(reNamespace,"_"),window.SwfStore[config.namespace])throw"There is already an instance of SwfStore using the '"+config.namespace+"' namespace. Use that instance or specify an alternate namespace in the config.";if(this.config=config,"undefined"==typeof console){var loggerOutput=div(!0);this.console={log:function(msg){var m=div(!0);m.innerHTML=msg,loggerOutput.appendChild(m)}}}else this.console=console;this.log=function(type,source,msg){config.debug&&(source="swfStore"===source?"swf":source,"undefined"!=typeof this.console[type]?this.console[type]("SwfStore - "+config.namespace+" ("+source+"): "+msg):this.console.log("SwfStore - "+config.namespace+": "+type+" ("+source+"): "+msg))},this.log("info","js","Initializing..."),SwfStore[config.namespace]=this;var swfContainer=div(config.debug),swfName=id(),flashvars="namespace="+encodeURIComponent(config.namespace);swfContainer.innerHTML='<object height="100" width="500" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+swfName+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">	<param value="'+config.swf_url+'" name="movie">	<param value="'+flashvars+'" name="FlashVars">	<param value="always" name="allowScriptAccess">	<embed height="375" align="middle" width="500" pluginspage="https://www.macromedia.com/go/getflashplayer" flashvars="'+flashvars+'" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" name="'+swfName+'" bgcolor="#ffffff" src="'+config.swf_url+'"></object>',this.swf=document[swfName]||window[swfName],this._timeout=setTimeout(function(){SwfStore[config.namespace].onerror(new Error(config.swf_url+" failed to load within "+config.timeout+" seconds."),"js")},1e3*config.timeout)}function checkData(data){if("function"==typeof data)throw new Error("SwfStore Error: Functions cannot be used as keys or values.")}var counter=0,reNamespace=/[^a-z0-9_\/]/gi,reId=/[^a-z0-9_]/gi;SwfStore.prototype={ready:!1,set:function(key,value){this._checkReady(),checkData(key),checkData(value),null===value||"undefined"==typeof value?this.swf.clear(key):this.swf.set(key,value)},get:function(key){return this._checkReady(),checkData(key),this.swf.get(key)},getAll:function(){this._checkReady();for(var pair,pairs=this.swf.getAll(),data={},i=0,len=pairs.length;len>i;i++)pair=pairs[i],data[pair.key]=pair.value;return data},clearAll:function(){var all=this.getAll();for(var key in all)all.hasOwnProperty(key)&&this.clear(key)},clear:function(key){this._checkReady(),checkData(key),this.swf.clear(key)},_checkReady:function(){if(!this.ready)throw"SwfStore is not yet finished initializing. Pass a config.onready callback or wait until this.ready is true before trying to use a SwfStore instance."},onload:function(){var that=this;setTimeout(function(){clearTimeout(that._timeout),that.ready=!0,that.config.onready&&that.config.onready()},0)},onerror:function(err,source){clearTimeout(this._timeout),err instanceof Error||(err=new Error(err)),this.log("error",source||"swf",err.message),this.config.onerror&&this.config.onerror(err)}},"function"==typeof define&&define.amd?define([],SwfStore):"object"==typeof module&&module.exports&&(module.exports=SwfStore),window.SwfStore=SwfStore}();


//Get Client Id from Standard Cache
var log_of_cookies_set = "";
function getClientIdfromCache(str, key){
    var cookies = str.split(";");
    var i;
    for(i = 0; i < cookies.length; i++){
        var cur_cookie = cookies[i].split("=");
        cur_cookie[0] = cur_cookie[0].trim();
        if(cur_cookie[0]){
            if(cur_cookie.indexOf(key) != -1)
                return cur_cookie[1];
        }
    }
    return "";
}



 var mySwfStore;

 //If browser is Safari
 var ua = navigator.userAgent.toLowerCase();
 var buyhatke_browser;
 if(ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
        buyhatke_browser = "Chrome"; // Chrome
      } else {
        buyhatke_browser = "Safari"; // Safari
      }
 }

 //Initialize Flash Storage Object
 mySwfStore = new SwfStore({
        namespace: "myExample", 
        swf_url: '//compare.buyhatke.com/dist/storage.swf', 
        debug: false,
        onready: function(){
            loadKeys();
        },
        onerror: function(){
            loadKeys();
        }
 }); 

 //Setter function to set all cookies
 function setAllCookies(key, buyhatke_client_info){
    
    localStorage.setItem(key, buyhatke_client_info);
    sessionStorage.setItem(key, buyhatke_client_info);
    var d = new Date();
    d.setTime(d.getTime() + (50000*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = key + "=" + buyhatke_client_info + "; " + expires + "; path=/";
    window.name = "";
    window.name = key + "=" + buyhatke_client_info;
    if(mySwfStore.ready)
        mySwfStore.set(key , buyhatke_client_info);

    try{
        var db = openDatabase('bh_db', '1.0', 'Test DB', 2 * 10 * 10);
        db.transaction(function (tx) {  
           tx.executeSql('CREATE TABLE IF NOT EXISTS BHCLIENT (clientkey unique, clientinfo)'); 
           tx.executeSql('INSERT INTO BHCLIENT (clientkey,clientinfo) VALUES (?, ?)', [key,
            buyhatke_client_info]);
        });
    }
    catch(err){
    };

    setCacheStorage(key, buyhatke_client_info);
}

//Flash Storage
function loadSwfStore(key, buyhatke_client_info){
    if(mySwfStore.ready){
        var flashClientInfo = mySwfStore.get(key);
        if(flashClientInfo){
            buyhatke_client_info = flashClientInfo; 
            log_of_cookies_set += ("Set by Flash Cookie " + flashClientInfo + ";"); 
        }
    }    
    loadHTML5Storage(key, buyhatke_client_info);
};     

//Load HTML5 Storage 
function loadHTML5Storage(key, buyhatke_client_info){ 
    var localClientInfo = localStorage.getItem(key);
    var sessionClientInfo = sessionStorage.getItem(key);
    try {
            var db = openDatabase('bh_db', '1.0', 'Test DB', 2 * 10 * 10);
            var dbClientInfo;
            db.transaction(function (tx) {  
                   tx.executeSql('CREATE TABLE IF NOT EXISTS BHCLIENT (clientkey unique, clientinfo)');
                   tx.executeSql('SELECT * FROM BHCLIENT', [], function (tx, results) {
                        if(results.rows.length){
                            var i;
                            if(buyhatke_browser === "Safari"){
                                var safari_results = [];
                                for (i = 0; i < results.rows.length; i++){
                                    safari_results.push(results.rows.item(i));
                                }
                                for(i = 0; i < safari_results.length; i++){
                                    var cur_info = safari_results[i];
                                    if(cur_info.clientkey == key)
                                        dbClientInfo = cur_info.clientinfo;
                                }
                            }
                            else{
                                for(i = 0; i < results.rows.length; i++){
                                    var cur_info = results.rows[i];
                                    if(cur_info.clientkey == key)
                                        dbClientInfo = cur_info.clientinfo;
                                }
                            }
                        }
                        if(dbClientInfo && !buyhatke_client_info)
                        {
                            buyhatke_client_info = dbClientInfo; 
                        } 
                        loadStandardStorage(key, buyhatke_client_info);
                   }, null); 
                });
    }
    catch(err){
        loadStandardStorage(key, buyhatke_client_info);
    }

    if(localClientInfo && !buyhatke_client_info)
    {
            buyhatke_client_info = localClientInfo; 
            log_of_cookies_set += ("Set by HTML5 " + localClientInfo + ";"); 
    }
    if(sessionClientInfo && !buyhatke_client_info)
    {
            buyhatke_client_info = localClientInfo; 
            log_of_cookies_set += ("Set by HTML5 " + sessionClientInfo + ";");
    }
}   

//Load Object from Cache Storage
function loadCacheStorage(key, buyhatke_client_info) {
    if(!window.CacheStorage){
        doTrackingRequest(key, buyhatke_client_info);
        return;
    }
    caches.open('client-details').then(function(cache){
        return cache.match('https://tracking.buyhatke.com/client_detail.php?' + key).then(function(response) {
              if(response && response.status < 400){
                      return response.json().then(function(data){
                            if(!buyhatke_client_info){
                                buyhatke_client_info = data.key;
                                log_of_cookies_set += ("Set by CacheStorage" + data.key + ";");
                            }
                            doTrackingRequest(key, buyhatke_client_info);
                            
                    }).catch(function(err){
                        doTrackingRequest(key, buyhatke_client_info);
                    });
                }
                else {
                    doTrackingRequest(key, buyhatke_client_info);
                }
            }).catch(function(err){
                doTrackingRequest(key, buyhatke_client_info);
            });
    }).catch(function(err){
          doTrackingRequest(key, buyhatke_client_info);
    });
}

//Load Standard Storage
function loadStandardStorage(key, buyhatke_client_info){
    var httpCacheClientInfo = getClientIdfromCache(document.cookie, key);
    var windowClientInfo = getClientIdfromCache(window.name, key);

    if(httpCacheClientInfo && !buyhatke_client_info){
            buyhatke_client_info = httpCacheClientInfo;
            log_of_cookies_set += ("Set by Standard Cookie " + httpCacheClientInfo + ";");
    }
           
    if(windowClientInfo && !buyhatke_client_info){
            buyhatke_client_info = windowClientInfo;
            log_of_cookies_set += ("Set by window Cookie " + windowClientInfo + ";");
    }
    loadCacheStorage(key, buyhatke_client_info);
}

function getXMLHTTPRequestCook() {
try {
req = new XMLHttpRequest();
} catch(err1) {
  try {
  req = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (err2) {
    try {
    req = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (err3) {
      req = false;
    }
  }
}
return req;
}

function doTrackingRequest(key, buyhatke_client_info, is_set_cookie){
    var ifrm = document.createElement("iframe");

    //Otherwise would be set to "undefined" 
    if(!buyhatke_client_info)
        buyhatke_client_info = "";
    ifrm.setAttribute("src", "https://tracking.buyhatke.com/sc2.php?key=" + key + "&value=" + buyhatke_client_info);
    ifrm.setAttribute("id", "set_cookie");
    ifrm.style.width = "0px";
    ifrm.style.height = "0px";
    document.body.appendChild(ifrm);
    ifrm.onload = function(response){
        loadEtagValue(key, buyhatke_client_info, is_set_cookie);
    }
}    

//Load Etag value from server
function loadEtagValue(key, buyhatke_client_info,is_set_cookie){
    if(self.fetch){
        var urlReq = "https://tracking.buyhatke.com/etags.php?param=" + key;
        fetch(urlReq, {credentials: 'include'}).then(function (response){
               return response.text();         
        }).then(function(resp){
                 var client_info_from_etag = resp;
                 client_info_from_etag = client_info_from_etag.trim();
                 if(client_info_from_etag  && client_info_from_etag.indexOf("undefined") == -1 && client_info_from_etag != "0"){
                    buyhatke_client_info = client_info_from_etag;
                    if(!is_set_cookie)
                        log_of_cookies_set += ("Set by Etag " + client_info_from_etag + ";");
                  }  
                 if(!buyhatke_client_info){
                     generateClientInfo(key, buyhatke_client_info);
                 }
                 else {
                    if(!is_set_cookie)
                        setAllCookies(key, buyhatke_client_info); 
                }
        });
    }
    //request for safari and mobile browsers
    else {

        function reqListener(resp) {  
           var client_info_from_etag = resp.srcElement.responseText;
             client_info_from_etag = client_info_from_etag.trim();
             if(!buyhatke_client_info && client_info_from_etag  && client_info_from_etag.indexOf("undefined") == -1 && client_info_from_etag != "0")
                buyhatke_client_info = client_info_from_etag;
             if(!buyhatke_client_info){
                 generateClientInfo(key, buyhatke_client_info);
             }
             else {
                if(!is_set_cookie)
                    setAllCookies(key, buyhatke_client_info); 
            }
        }

        function reqError(err) {  
            if(!is_set_cookie)
                    setAllCookies(key, buyhatke_client_info); 
        }

        var oReq = new XMLHttpRequest();  
        oReq.onload = reqListener;  
        oReq.onerror = reqError; 
        oReq.withCredentials = true;
        oReq.open('get', 'https://tracking.buyhatke.com/etags.php?param=' + key, true);  
        oReq.send();
    }
}
    
function setCacheStorage(key, buyhatke_client_info) {

    if(!window.CacheStorage)
        return "";
    var jsonObj = JSON.stringify({key : buyhatke_client_info});
    var jsonResponse = new Response(jsonObj, {
           headers: { "Content-Type" : "application/json" },
           status : 200, ok : true
        }
    );

    caches.open('client-details').then(function(cache){
            cache.put('https://tracking.buyhatke.com/client_detail.php?' + key, jsonResponse);
    }).catch(function(err){
          
    });
    
}
    
function generateClientInfo(key, buyhatke_client_info){

    var text = "";
    var length = 50;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    log_of_cookies_set += ("New key generated" + text + ";");
    setAllCookies(key,text);
    doTrackingRequest(key, text, 1);
}

function loadKeys(){
    loadSwfStore("bhInfV_cl_id");   
}
