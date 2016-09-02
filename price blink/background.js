var retailers = [];
var universal_scrapes = [];
var current_retailer = {};
var coupons = [];
var ver = '5.0';
var uid;
var wishlist_url;
var token = "";
var am_url = "";

var disabled_status;
var NOT_DISABLED = 0;
var TEMP_DISABLED = 1;
var PERM_DISABLED = 2;
// For our new split test where we pause for 24 hours and give no price comp or coupons
var TEMP_DISABLED_NO_PRICE_COMP = 3;

var suppress_toolbar = false;

// Some debug vars
var debugExtensionID="";
var debug_params;
var debug_start;
var debug_g_search_url;
var debug_g_prices_url;

// This stores the ID of the retailer in the currently active tab
// This differs from current_retailer.id in cases where the user switches between tabs with supported retailers
var currently_active_tab_retailer_id;

var BASE_AMAZON_URL = "http://www.amazon.com/exec/obidos/ASIN/";

//For testing purposes, set this to 1 to get the push coupons popup displayed even if the call to the pushCoupons service fails.
defaultHasPushCoupons = false;


// Check for first run and set uid
if(localStorage.uid == undefined) {
	uid = guid();
	chrome.tabs.create({url: "http://tb.priceblink.com/install?uid=" + uid + "&browser=chrome&ver=" + ver});
	localStorage.uid = uid;
	localStorage.version = ver;
// User already has PB installed
} else {
  uid = localStorage.uid;
	var existing_version = localStorage.version;
	if(existing_version == undefined || parseFloat(existing_version) < parseFloat(ver)) {
	    localStorage.version = ver;
	    //chrome.tabs.create({url: "http://blog.priceblink.com/?p=45&uid=" + uid + "&ver=" + ver + "&browser=chrome"});
  }
}

function getParser(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				try{
					var resp = JSON.parse(xhr.responseText);	
					retailers = resp;
				}
				catch(e){
					console.log("parsing retailers failed")
					if (!retailers){
						retailers = [];		
					}
					
				}
				if (callback && (typeof callback) == "function") callback();
				
		  }
		}
		xhr.open("GET", "http://tb.priceblink.com/retailers_0.4.js?uid=" + uid + "&browser=chrome&ver=" + ver + "&n=" + new Date().getMilliseconds(), true);
		xhr.send();
	}
	
	// Get the parser on init
	getParser();
	
	// Let's grab the parser every 8 hours
  var interval = setInterval(function(){
    getParser();
    getUniversalScrapes();
  }, 28800000);

// universal scrapes
function getUniversalScrapes(callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			try{
				var resp = JSON.parse(xhr.responseText);
				universal_scrapes = resp;
				// Set the country pref
				localStorage.country = resp[0].settings.country;
			}
			catch(e){
				console.log("parsing universal scrapes failed")
				if (!universal_scrapes){
					universal_scrapes = [];		
				}
				
			}
			if (callback && (typeof callback) == "function") callback();		
	  }
	}
	xhr.open("GET", "http://tb.priceblink.com/universal_scrapes.php?uid=" + uid + "&browser=chrome&ver=" + ver + "&n=" + new Date().getMilliseconds(), true);
	xhr.send();
}

	// Get the universal scrapes on init
	getUniversalScrapes();


//This function acts as a proxy to ensure retailers and universal_scrapes are loaded properly before trying to process a request
function wrapRequest(request,sender,callback){
		if (! retailers.length>0){
			getParser(function(){
				if (!universal_scrapes.length>=0){
					getUniversalScrapes(function(){
						onRequest(request,sender,callback);
					})
				}
				else{
					onRequest(request,sender,callback);
				}
			})
		}
		else{
			onRequest(request,sender,callback);
		}
}

function onRequest(request, sender, callback) {
	// Is it a supported URL? Get retailer
	if(request.action == 'getRetailer') {
    
    // We want to suppress the toolbar based on CJ filters 
    // Adding caller to both early and main requests since they both call into this action
    // We want to reset just once so that it doesn't get reset prematurely by early.js
    if(suppress_toolbar) { 
      // We still let early pass through so that we can return nothing and not let the blank space get injected
      if(request.caller == 'early') 
        return;
      else if(request.caller == 'main') {
        setTimeout(function() {
          suppress_toolbar = false;
        }, 5000);
        return;
      }
    }
	  
    // Reset this
	  currently_active_tab_retailer_id = null;
		// This will begin the coupons process
		var r = getRetailer(request.url);
		if(r != null) { 
			// Now get the coupons
			getCoupons(callback);
		}

    // Get coupons
    } else if(request.action == 'getPushCoupons') {
        // Check the server to see if there's coupons to push
        getPushCoupons(request.url,callback);
	// Get coupons
	} else if(request.action == 'getCoupons') {
		// If there's an id passed let's set the current retailer (Dell case)
		if (request.retailer_id != null)
			current_retailer = getRetailerByID(request.retailer_id);
		// Now get the coupons
		getCoupons(callback);
	// Get the data we need to crawl
	} else if (request.action == 'step1') {

		// Reset the am_url var
		am_url = "";
		debug_g_search_url = "";
		debug_g_prices_url = "";
		debug_start = new Date();
		debug_params=request.params;
		
		var params = request.params;
		var url = "http://tb.priceblink.com/products?";
		url += "rid=" + current_retailer.id;
		url += "&title=" + escape(params.title);
		url += "&price=" + escape(params.price);
		url += "&model=" + escape(params.model);
		url += "&mpn=" + escape(params.mpn); // Need to address from asana task
		url += "&brand=" + escape(params.brand);
		url += "&upc=" + escape(params.upc);
		url += "&sku=" + escape(params.sku);
		url += "&isbn=" + escape(params.isbn);
		url += "&ship=" + escape(params.ship);
		url += "&rating=" + escape(params.rating);
		url += "&in_stock=" + escape(params.in_stock);
		url += "&c1=" + escape(params.c1);
		url += "&c2=" + escape(params.c2);
		url += "&c3=" + escape(params.c3);
		url += "&c4=" + escape(params.c4);
		url += "&c5=" + escape(params.c5);
		url += "&uid=" + uid;
		url += "&ver=" + ver;
		url += "&browser=chrome&step=1";
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {

				var results = JSON.parse(xhr.responseText);
				
				// This means there's an immediate data response with no scrape info
				if(results.token == undefined) {
					
					callback({retailer: current_retailer, products: results, debug: {"method": "Instant Response", "search_url": "", "prices_url": "", "time": new Date().getTime() - debug_start.getTime()}});
					
				} else {
					token = results.token;
					am_url = results.search1;
				
					// Google scrape
					getGTIN(results.search, callback);
						
				}
		  }
		}
		xhr.open("GET", url, true);
		xhr.send();
		//callback
	} else if (request.action == 'newTab') {
		chrome.tabs.create({url: request.url});
	// For dev purposes
	} else if (request.action == 'setUid') {
		setUid(request.query);
	// For when the popup browser action is triggered. Need to retrieve the proper "view all coupons" url in cases where multiple tabs are loaded
	} else if (request.action == 'getCouponsForSelected') {
	  chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendRequest(tab.id, {action: "getViewAllCouponsLink"}, function(response) {
        callback({url: response.url});
      });
    });
  // For add to wish list popup
	} else if (request.action == 'getWishListURL') {
	  // Return the server-provided wishlist url
    if(wishlist_url != null) {
      callback({url: wishlist_url});
    // Build the wishlist url
    } else {
  	  chrome.tabs.getSelected(null, function(tab) {
        // If it's a chrome:// url then return that so we can disable menu
        if(tab.url.indexOf("chrome://") == 0) {
          // Do nothing yet
          //callback{url: tab.url};
        // Build the wishlist url from current page
        } else {
          chrome.tabs.sendRequest(tab.id, {action: "getPageURL"}, function(response) {
            callback({url: response.url});
          });
        }
      });
    }
  // Minimize and disable coupons
	} else if(request.action == 'disableCoupons') {
    saveRetailerInStorage(request.retailer);
	} else if(request.action == 'restoreCoupons') {
    restoreCouponsForRetailer(request.retailer_id);
  } else if(request.action == 'getCouponsForMultipleURLs') {
    var retailer_ids = getRetailerIdsForMultipleURLs(request.urls).toString();
    
    // There are no supported retailers so don't make the request
    if(retailer_ids.length == 0) return;
    
    var url = "http://tb.priceblink.com/coupons_response_array.php?uid=" + uid + "&browser=chrome&ver=" + ver + "&rid=" + current_retailer.id + "&rids=" + retailer_ids;
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var coupons = JSON.parse(xhr.responseText);
        callback({coupons: coupons[0].coupons});
      }
    }
    xhr.open("GET", url);
    xhr.send();
  } else if(request.action == 'highlightRetailer') {
    var highlight_url = request.coupons[0].coupons[0].url;
    
    if(highlight_url.indexOf("rdr.php?d=4") > -1) {
      var url = highlight_url.split("rdr.php?d=4");
      highlight_url = url[0] + "rdr.php?d=24" + url[1];
    } else if(highlight_url.indexOf("rdr.php?d=11") > -1) {
      var url = highlight_url.split("rdr.php?d=11");
      highlight_url = url[0] + "rdr.php?d=26" + url[1];
    }
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if(xhr.responseText.indexOf("goskim()") != -1) {
          var iframe = xhr.responseText.split("iframe")[1];
          var src = iframe.split("src=\"")[1].split("\"></iframe>")[0];
          var xhr2 = new XMLHttpRequest();
          xhr2.onreadystatechange = function() {
            if (xhr.readyState == 4) {
             // Do nothing 
            }
          }
          xhr2.open("GET", src);
          xhr2.send();
        }
      }
    }
    xhr.open("GET", highlight_url);
    xhr.send();
  // Send from options page when country is changed. We need to reload parser then.
  } else if(request.action == 'reloadParser') {
    getParser();
  }
}

// Saves retailer in localStorage as string
// Stored in the format of {"retailers":[{'id':1, 'dt':12345},{'id':2}]}
// A dt means temp disable while no dt means permanent disable
function saveRetailerInStorage(retailer) {
  var retailer = JSON.stringify(retailer);

  // Initialize the storage
  if(localStorage.disabled_retailers == undefined) {
    localStorage.disabled_retailers = '{"retailers":[' + retailer + ']}';
  // Append new retailer to disabled_retailers
  } else {
    var disabled_retailers = JSON.parse(localStorage.disabled_retailers).retailers;
    disabled_retailers.push(JSON.parse(retailer));
    localStorage.disabled_retailers = '{"retailers":' + JSON.stringify(disabled_retailers) + '}';
  }
}

// Restore coupons after a retailer has been disabled temporarily
var restoreCouponsForRetailer = function(id) {
  var dr = JSON.parse(localStorage.disabled_retailers).retailers;
  for(var i=0; i<dr.length; i++) {
    if(id == dr[i].id) {
      dr.splice(i, 1);
      localStorage.disabled_retailers = '{"retailers":' + JSON.stringify(dr) + '}';
      return;
    }
  }
}

function getCoupons(callback) {
  // Reset wishlist URL in case wishlist page action has been displayed on a product page. We don't want to cache
  // and have it display on a coupons page
  wishlist_url = null;
  var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
		  var resp = JSON.parse(xhr.responseText);
		  coupons = resp;
		  var promo = {};
      if(resp.promo != undefined) 
        promo = resp.promo;

      // This sets the global status
      disabled_status = checkIfRetailerIsDisabled(current_retailer.id);
      
      // Split test 2, 3, and 4 cells let's stop processing - this doesn't work because for cell 2
      // we need to display the minimized toolbar
      //if(disabled_status == TEMP_DISABLED_NO_PRICE_COMP) return;
      
      // For suggest a coupon link
      currently_active_tab_retailer_id = current_retailer.id;

      
			// Pass coupons and coupon overlay xpath to the content script
			callback({coupons: coupons, retailer: current_retailer, promo: promo, disabled_status: disabled_status, coupon_code_xpath:universal_scrapes[0].coupon_code_xpath, coupon_code_exception_rids: universal_scrapes[0].coupon_code_exception_rids, coupon_overlay_xpath: universal_scrapes[0].coupon_overlay_xpath});
			  
			// Let's trigger the universal scrape after we get coupons
			chrome.tabs.getSelected(null, function(tab) {
              chrome.tabs.sendRequest(tab.id, {action: "universalScrape", data: universal_scrapes}, function(response){
                if(response == undefined) return;
                var url = "http://tb.priceblink.com/universal_scrapes.php?uid=" + uid + "&browser=chrome" + "&ver=" + ver + "&rid=" + response.retailer_id;
                var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
					  // Do nothing here. We just need to make the request and the proper cookie will either get set or not.
				  }
				}
				xhr.open("GET", url, true);
				xhr.send();
              });
            });
	  }
	}
	xhr.open("GET", "http://tb.priceblink.com/coupons?rid=" + current_retailer.id + "&uid=" + uid + "&ver=" + ver, true);
	xhr.send();
}


function getPushCoupons(url , callback) {
    var r = getRetailer(url);
    if(r != null) { 
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (resp!=null){
                var resp = JSON.parse(xhr.responseText);      
                // Pass push coupons and user id to caller (typically early.js)
                callback({hasPushCoupons: resp.hasPushCoupons, uid:uid});              
              }
              else{
                //This is for testing purposes only.
                callback({hasPushCoupons: defaultHasPushCoupons, uid:'79252cdd-6c84-c686-8107-0c01f75bf9d3'});               
              }  
            }              
        }
        xhr.open("GET", "http://tb.priceblink.com/pushCoupons?uid=" + uid + "&ver=" + ver, true);
        xhr.send();
    }
    else{
        console.log("Not a PB enabled site");
        callback({hasPushCoupons: false, uid:uid});
    }
}


function getAmazon(scraped_retailers_arr, callback, method) {
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var doc = document.implementation.createHTMLDocument("");
      doc.documentElement.innerHTML = xhr.responseText;

			var href = BASE_AMAZON_URL + getXPathString(doc, universal_scrapes[0].a_asin_xpath);
			var price = getXPathString(doc, universal_scrapes[0].a_price_xpath);
			var title = getXPathString(doc, universal_scrapes[0].a_title_xpath);
			var name = "Amazon.com";
			
			// Don't set the URL unless a valid one exists
			if(href.length > BASE_AMAZON_URL.length)
				scraped_retailers_arr.push({name: name, url: href, price: price, title: title});
			
			postScrapedData(scraped_retailers_arr, callback, method);
			
    }
  }
  xhr.open("GET", unescape(am_url), true);
  xhr.send();
}

// 1 step scrape
function getGTIN(query, callback) {
	if(localStorage.country == "uk")
		var url = "https://www.google.co.uk/";
	else
		var url = "https://www.google.com/";
	
	url += "search?tbm=shop&tbs=vw:l,new:1&q=" + query;
	debug_g_search_url = url;
	
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var doc = document.implementation.createHTMLDocument("");
      doc.documentElement.innerHTML = xhr.responseText;
			
			// This handles the case where there are no matching results
			// We don't want to proceed with any scrapes
			var no_results = getXPathString(doc, universal_scrapes[0].g_step1_no_results_xpath);
			if(parseInt(no_results)) {
				basicScrape(callback);
				return;
			}
			
			var href = getXPathString(doc, universal_scrapes[0].g_step1_href_xpath);

			// There's no catalog link from above so let's grab from the search page
			if(href.length == 0) {
				var urls = getXPathArray(doc, universal_scrapes[0].g_step1_url_xpath);
				var node = urls.iterateNext();

				// If there are no urls in the results then let's do a basic scrape
				if(node == null) {
					basicScrape(callback);
					return;
				}

				var urls_arr = [];
	      while(node) {
	        var url = node.getAttribute("href").split("adurl=")[1];
					urls_arr.push(url);
					node = urls.iterateNext();
				}
				
				var prices = getXPathArray(doc, universal_scrapes[0].g_step1_price_xpath);
				var prices_arr = [];
				
				var node = prices.iterateNext();
				while(node) {
					prices_arr.push(node.textContent);
					node = prices.iterateNext();
				}
				
				// Getting cite node without hyperlink, which would be the reviews
				var retailers = getXPathArray(doc, universal_scrapes[0].g_step1_retailer_xpath);
				var retailers_arr = [];
				
				var node = retailers.iterateNext();
				while(node) {
					retailers_arr.push(node.textContent);
					node = retailers.iterateNext();
				}
				
				var titles = getXPathArray(doc, universal_scrapes[0].g_step1_title_xpath);
				var titles_arr = [];
				
				var node = titles.iterateNext();
				
				while(node) {
					titles_arr.push(node.textContent);
					node = titles.iterateNext();					
				}
				
				var ships = getXPathArray(doc, universal_scrapes[0].g_step1_ship_xpath);
				var ships_arr = [];
				
				var node = ships.iterateNext();
				while(node) {
					var ship = node.textContent;
					ships_arr.push(ship);
					node = ships.iterateNext();
				}

			  var scraped_retailers_arr = [];
			  for(var i=0; i < retailers_arr.length; i++) {
				  var obj = {name: clean(retailers_arr[i]), url: urls_arr[i], price: clean(prices_arr[i]), ship: clean(ships_arr[i]), title: titles_arr[i]};
				  scraped_retailers_arr.push(obj);
			  }
				
				if(am_url != "") {
					getAmazon(scraped_retailers_arr, callback, "Google 1 Step Scrape");
				} else {
					postScrapedData(scraped_retailers_arr, callback, "Google 1 Step Scrape");
				}
				
			} else {
				// Let's go to the catalog page and get the retailers there
      	var id = href.split("product/")[1].split("?")[0];
      	getPrices(id, callback);
			}
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

// 2 step scrape
function getPrices(id, callback) {
	if(localStorage.country == "uk")
		var url = "https://www.google.co.uk/";
	else
		var url = "https://www.google.com/";
		
  url += "shopping/product/" + id + "/online";
	debug_g_prices_url = url;
	
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var doc = document.implementation.createHTMLDocument("");
      doc.documentElement.innerHTML = xhr.responseText;
      
      var retailers_arr = [];
      var urls_arr = [];
      var prices_arr = [];
			var ships_arr = [];
			var totals_arr = [];
      
      var links = getXPathArray(doc, universal_scrapes[0].g_step2_href_xpath);
      var node = links.iterateNext();
      while(node) {
        var href = node.getAttribute("href");
        var retailer = node.textContent;
        retailers_arr.push(retailer);
        urls_arr.push(href);
        node = links.iterateNext();
      }
      
      var prices = getXPathArray(doc, universal_scrapes[0].g_step2_price_xpath);
      var node = prices.iterateNext();
      while(node) {
        var price = node.textContent;
        prices_arr.push(price);
        node = prices.iterateNext();
      }
			
			var totals = getXPathArray(doc, universal_scrapes[0].g_step2_total_price_xpath);
			var node = totals.iterateNext();
			while(node) {
				var total = node.textContent;
				totals_arr.push(total);
				node = totals.iterateNext();
			}
			
			var i = 0;
			var ships = getXPathArray(doc, universal_scrapes[0].g_step2_ship_xpath);
			var node = ships.iterateNext();
			while(node) {
				var ship = node.textContent;
				var total = totals_arr[i];
				i = i+1;
				
				if(clean(total).length == 0 && clean(ship).length == 0) {
					ship = "plus shipping";
				}
				
				ships_arr.push(ship);
				node = ships.iterateNext();
			}
						
			// Get the main title listing
			var title = getXPathString(doc, universal_scrapes[0].g_step2_title_xpath);
			
	  	// Now ship to server
	  	var scraped_retailers_arr = [];
	  	for(var i=0; i < retailers_arr.length; i++) {
		 	 var obj = {name: clean(retailers_arr[i]), url: extractGURL(urls_arr[i]), price: clean(prices_arr[i]), ship: clean(ships_arr[i]), title: title};
		  	scraped_retailers_arr.push(obj);
	  	}
			
			if(am_url != "") {
				getAmazon(scraped_retailers_arr, callback, "Google 2 Step Scrape");
			} else {
				postScrapedData(scraped_retailers_arr, callback, "Google 2 Step Scrape");
			}
		
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

function basicScrape(callback) {
	postScrapedData("", callback, "No Scraped Data");
}

function postScrapedData(data, callback, method) {
  var xhr = new XMLHttpRequest();
  	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var results = JSON.parse(xhr.responseText);
			var end = new Date().getTime() - debug_start.getTime();
			callback({retailer: current_retailer, products: results, debug: {"method": method, "search_url": debug_g_search_url, "prices_url": debug_g_prices_url, "time": end}});
		}
  }

  var cur_url="http://tb.priceblink.com/get_prices.php?n=" + new Date().getMilliseconds();
  if (debugExtensionID!=""){
  	chrome.runtime.sendMessage(debugExtensionID, {extension:"PriceBlink" ,get_prices: cur_url,data:data,token:token, params:debug_params, retailer:current_retailer})	
  }
  	
  xhr.open("POST", cur_url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("retailers=" +  encodeURIComponent(JSON.stringify(data)).replace(/'/g,"%27").replace(/"/g,"%22") + "&token=" + token);
}

function extractGURL(url) {
  var adurl = url.split("adurl=");
  
  // Check that adurl exists
  if(adurl.length > 1) {
    // Check that adurl is not empty
    if(adurl[1].length > 0)
      return adurl[1];
    else
      return url
  } else {
    return url;
  }

}

// Matches retailer based on URL
function getRetailer(url) {
	url = "/" + url.split("/")[2];
	
	for (var i=0; i< retailers.length; i++) {
		var index = url.indexOf("/" + retailers[i].url);
		if(index != -1) {
			current_retailer = retailers[i];
			return current_retailer;
		}
		index = url.indexOf("." + retailers[i].url);
		if(index != -1) {
			current_retailer = retailers[i];
			return current_retailer;
		}
	}
	return null;
}

// For coupon injection functionality 
// return an array of supported retailers
var getRetailerIdsForMultipleURLs = function(urls) {
  var arr = [];
  for(var i=0; i<urls.length; i++) {
    var url = urls[i];
    var r = checkRetailerExistsInParser(url);
    if(r != null) {
      // If retailer already exists in array then don't add it
      var exists = false;
      for(var j=0; j<arr.length; j++) {
        if(arr[j].name == r.name) {
          exists = true;
          break;
        }
      }
      
      if(!exists)
        arr.push(r.id);
    }
  }
  return arr;
}

// Based on url let's see if the retailer exists in our parser
function checkRetailerExistsInParser(url) {
  url = "/" + url.split("/")[2];
  for (var i=0; i< retailers.length; i++) {
		var index = url.indexOf("/" + retailers[i].url);
		if(index != -1) {
			return retailers[i];
		}
		index = url.indexOf("." + retailers[i].url);
		if(index != -1) {
			return retailers[i];
		}
	}
	return null;
}

var checkIfRetailerIsDisabled = function(id) {
  if(localStorage.disabled_retailers == undefined) return NOT_DISABLED;

  var dr = JSON.parse(localStorage.disabled_retailers).retailers;

  for(var i=0; i<dr.length; i++) {
    // First check that this retailer is in the disabled array
    if(id == dr[i].id) {
      // Let's check to see if there's a date/time which means it's temporarily disabled
      if(dr[i].dt != null) {
        // Check to see if temporary disabling has expired (1 hr)
        var offset = 1 * 60 * 60 * 1000; // 1 hour
        //var offset = 1 * 60 * 1 * 1000; // 1 min
        var nowDT = new Date().getTime();
        var disabledDT = parseInt(dr[i].dt);

        if(disabledDT + offset < nowDT) {
          restoreCouponsForRetailer(id);
          return NOT_DISABLED;
        // This has become the new default user minimized state
        // It was cell 2 in the test where coupons and price comp are disabled for 24 hours
        } else {
          return TEMP_DISABLED_NO_PRICE_COMP;
        }
      // The retailer is permanently disabled
      } else {
        return PERM_DISABLED;
      }
    }
  }
  return NOT_DISABLED;
}

function getRetailerByID(id) {
		for (var i=0; i<retailers.length;i++) {
			if(retailers[i].id == id) {
				return retailers[i];
			}
		}		
}

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function guid() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function setUid(query) {
	alert(query);
	alert(localStorage.uid);
}

// Called from coupons popup and passed to content script
function enableCouponsForRetailer() {
  chrome.tabs.getSelected(null, function(tab) {
    restoreCouponsForRetailer(current_retailer.id);
    chrome.tabs.sendRequest(tab.id, {action: "turnCouponsBackOn"}, null);
    disabled_status = NOT_DISABLED;
  });
}

function getXPathString(doc,xpath) {
  if(xpath == undefined || xpath == "") return "";
	var xpath = "normalize-space(" + xpath + ")";
	var result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
	return clean(result.stringValue);
}

function getXPathArray(doc,xpath) {
  if(xpath == undefined || xpath == "") return "";
	var result = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);
	return result;
}
// Trip spaces and remove html entities
function clean(str) {
	return str.replace(/&nbsp;/g,'').replace(/&amp;/g,'').replace(/^\s+|\s+$/g,"");
}

// Listen for any messages
chrome.extension.onRequest.addListener(wrapRequest);

// Tab change event to set wishlist_url
chrome.tabs.onActivated.addListener(function(tab) {
  
  // Don't do anything for Chrome URLs and reset globals for toolbar button
  chrome.tabs.get(tab.tabId, function(tab){
    if(tab.url.indexOf("chrome://") == 0) {
      currently_active_tab_retailer_id = null;
      wishlist_url = null;
      return;
    }
    
    // Get wishlist URL    
    chrome.tabs.sendRequest(tab.id, {action: "getWishlistURL"}, function(response) {
      if(response == undefined) return;

      // We have a server-provided wishlist url
      if(response.url != null) {
        wishlist_url = response.url;
      // No server-provided wishlist url so let's build one from the page url
      } else {
        chrome.tabs.sendRequest(tab.id, {action: "getPageURL"}, function(response) {
          wishlist_url = response.url;
          
        });
      }
      
      // Handle the suggest a coupon global retailer id
      if(response.retailer != null)
        currently_active_tab_retailer_id = response.retailer.id;
      else
        currently_active_tab_retailer_id = null;
      
       
    });
    
  });
  
});


// Listen for the debug extension
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.message=="DebugExtension"){
      console.log("Attach to debug extension: "+sender.id);
      debugExtensionID=sender.id;
    }
});

// Setup the uninstall listener
chrome.runtime.setUninstallURL("http://www.priceblink.com/uninstall?browser=chrome&uid=" + uid);

// Look for afsrc on all link clicks so we can suppress our toolbar
chrome.webNavigation.onBeforeNavigate.addListener(function(details){
  suppress_toolbar = true;
}, {url: [{queryContains : 'afsrc='},{hostSuffix: 'jdoqocy.com'},{hostSuffix: 'kqzyfj.com'},{hostSuffix: 'tkqlhce.com'},{hostSuffix: 'anrdoezrs.net'},{hostSuffix: 'dpbolvw.net'}]});