if(getCookie("toShowIxigo")==""){
    setCookie("toShowIxigo", 1, 10);
}

(function() {
    var imageUrl = "https://images.ixigo.com/image/upload/q_50/v1454670038/Ixigo_Inspire_Top_Banner_980_Transparent_BG_at2prq.png";
    var backgroundUrl = "https://images.ixigo.com/image/upload/q_50,b_1/v1454669204/Background_Pattern_Tile_xm90dy.png";
    var redirectUrl = "https://www.ixigo.com/chrome-plugin/download?utm_source=topbar&utm_medium=bhk&utm_campaign=plugindownload";
    var hostMap = ["makemytrip", "cleartrip", "musafir", "yatra", "goibibo", "expedia", "easemytrip", "spicejet", "cheapticket", "goindigo", "goair", "via", "airvistara", "jetairways", "airasia", "akbartravels", "tripsta", "booking", "hotels", "oyorooms","indianrail", "trainspnrstatus" , "pnrstatusbuzz", "pnr-status", "erail", "checkpnrstatusirctc", "irctc","trainman", "pnrstatuslive", "confirmtkt", "amtrak","rome2rio", "expedia", "marriott", "hilton","ghumakkar", "carwale", "getmecab", "olacabs", "wiwigo", "taxiguide", "savaari", "clearcar", "bookcab", "cabbooking", "ahataxi", "mytaxi", "delhicab", "instacab", "taxiforsure", "blablacar", "gozocabs", "getmecab", "tripsta", "trivago", "tripadvisor", "lonelyplanet", "kayak", "lonelyplanet", "tripadvisor", "thrillophilia", "trivago", "holiday", "mapsofindia", "wikitravel", "tourism"];
    var inIframe = function() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };


    var _addIxigoBar = function(argument) {
        // body...


        $('body').prepend('<img id="ixigoBarImage" style="position:absolute; width : 1px; height : 1px; top: -1000px; left : -1000px;" src="' + imageUrl + '" />');
        $('body').prepend('<img id="ixigoBarImageBackground" style="position:absolute; width : 1px; height : 1px; top: -1000px; left : -1000px;" src="' + backgroundUrl + '" />');

        $("#ixigoBarImageBackground").one("load", function() {
            $("#ixigoBarImage").one("load", function() {
                $('#ixibar').remove();
                $('body').css('margin-top', 56).prepend('<div id="ixibar" style="background-color: #693563; position: fixed;top: 0;width: 100%;height: 56px;z-index: 2147483645;"><div style="background-image: url(' + backgroundUrl + ')"><a target="_blank" style="display: block; margin: 0 auto; width: 950px;height: 56px;" href="' + redirectUrl + '"><span style="display: block; width: 850px; margin: 0 auto; height: 56px;background-image: url(' + imageUrl + '); background-repeat: no-repeat; background-position-y: 7px;"></span></a></div><div id="ixigoBarClose" style="position: absolute;right: 10px;top: 6px;font-size: 32px;color: #eee;cursor:pointer;text-shadow: 0 1px 4px rgba(0,0,0,0.7);">×</div></div>');
            }).each(function() {
                if (this.complete) $(this).load();
            });
        }).each(function() {
            if (this.complete) $(this).load();
        });

        $(document).on("click", "#ixigoBarClose", function() {
            $('body').css('margin-top', '0');
            $('#ixibar').css('top', '-56px');
            localStorage.ixigo = 0;
            // localStorage.lastTime = Math.floor(Date.now() / 1000);
            sendIxigoVar();
            setCookie("toShowIxigo", 0, 10);
        });
    }


    var _initIxigoBanner = function(argument) {
        var locationHost = window.location.host;
        $.each(hostMap, function(index, val) {
            /* iterate through array or object */
            if (locationHost.indexOf(val) !== -1) { // Looks like a travel site
                if(getCookie("toShowIxigo")==1 && (localStorage.lastTime==0 || (Math.floor(Date.now() / 1000) - localStorage.lastTime > 864000))){
                _addIxigoBar();
                }
                return false
            }
        });

    };



    chrome.runtime.sendMessage("adpjkecnjfmgneijfljandenedleocdo", { // Ask for the ixigo extension
        message: "knockknock" // insert a knock knock joke here.
    }, function function_name(argument) {
        if (typeof argument !== "undefined" && argument.identity === "itsixigohere") { //Yes, ixigo is present.  
            // Do nothing
        } else {
            if (!inIframe()) {
                _initIxigoBanner();
            }
        }
    });
})();
