//append to target parent div
console.log("Text is " + $('.multimedia').find('aside:eq(0)').text());
$('.rightpanel:eq(0)').prepend('<aside><div class="buyhatke_widget"></div></aside>');

$('.storypic').after('<div class="buyhatke_widget"></div>');

var parentDiv="wrap";
const REMOTE_HOST = 'aws1.buyhatke.com';
function initializeWidget(parentDiv, pos){
    var clientWidth=parentDiv.clientWidth;
    var clientHeight=parentDiv.clientHeight;
    if(clientHeight == 0 || clientHeight > 500) {
        clientHeight = 80 * 6;
    }
    if(clientWidth == 0 || clientWidth > 920) {
        clientWidth = 300 * 3;
    }

    var num_rows = clientHeight/80;
    var num_cols = parseInt(clientWidth/260);
    console.log("Height: " + clientHeight + " Width: " + clientWidth + " Rows permitted: " + num_rows + " Cols Permitted: " + num_cols);

    var max_products = num_rows * num_cols;
    if(max_products > 6) {
        max_products = 6;
    }

    var parentDom = parentDiv;
    //document.getElementById("main_container").clientWidth=containerWidth;
    //get product data from API
    var ajax = {};
    ajax.x = function() {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for(var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    };

    ajax.send = function(url, callback, method, data, sync) {
        var x = ajax.x();
        x.open(method, url);
        x.onreadystatechange = function() {
            if (x.readyState == 4) {
                callback(x.responseText)
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    };

    ajax.get = function(url, data, callback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + (data[key]));
        }
        ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, sync)
    };

    ajax.post = function(url, data, callback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url, callback, 'POST', query.join('&'), sync)
    };
    var jsonObject;
    //get for data
    ajax.get('http://' + REMOTE_HOST + '/widgetBack/getKeyNew2.php', {url:document.URL}, function(data) {
        jsonObject=JSON.parse(data);
        console.log("Response Object received: " + jsonObject);
        var productCount = typeof jsonObject.status == 'undefined' ? jsonObject.length : 0;
        console.log("Total items : " + productCount);

        if(productCount === 0) {
            return;
        }

        var child = document.createElement('div');
        var uniqueId = "bh_list_" + pos;
        child.innerHTML =
            '<div class="bh_container">' +
            '<h4 style="border:none;margin-bottom: 5px;color: grey;padding: 5px;">Suggested products</h4>' +
            '<div class="bh_list_container">' +
            '<ul id=' + uniqueId + ' class="clearfix">' +
            '</ul>' +
            '</div>' +
            '</div>';
        parentDom.appendChild(child);

        //populate html
        if(max_products < productCount) {
            productCount = max_products;
        }
        if(productCount % 3 == 0) {
            productCount = productCount - 1;
        }
        for(var i = 0; i < productCount; i++){
            var navItem = jsonObject[i];
            var child1 = document.createElement('li');
            var priceDropInPercent = navItem.priceDrop.toFixed(2);
            var productsList =
                    '<a href="--prodLink--" title="--prodTitle--" target="_blank" class="wrapProduct" data-pid="--pid--">' +
                        '<div class="img_left">' +
                            '<img src="--prodImage--" scale="0">' +
                        '</div>' +
                        '<div class="desc_right">' +
                            '<div class="bh_prod_title">--prodTitle--</div>' +
                            '<div class="bh_prod_price"style="padding-top:.5em">' + "Rs." + navItem.price + " " + '</div>' +
                            '<div class="bh_prod_discount" style="padding-top:.5em">' +
                                '<img src="http://suggest.buyhatke.com/style/drop.png" style="width: 19px">' +
                            '</div>' +
                        '<div class="bh_prod_discount" style="margin-left: 2px;padding-top:.5em">' +
                            '<span>' + priceDropInPercent + '%' + '</span>' +
                        '</div>' +
                        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAMFBMVEXw7EP///8Hmdj60yHz3yfz64D37jL7ywb19N0DjOzO00j0tCNksaby0GWaw3SjiDywG2j3AAABu0lEQVR42u3W0ZKDIAxA0awkERDx//92kxRkXJTq7sO+9E5rW/QMFe1M4esPffA/Yv+mAfYEqDFj6zAC5C+wX+f30RVeFofOOVy2xR3btrJnWS9nXrAcunV4sVe8wp6AX3g5y2nM4DtsFgGKm5eLEBjJ95iApHUcEQFQh73iGlCrGznDgCCxPJgIuASvJ5DtsSPwCltI3o5rMfl1HxljPsNwH9MP7O9jqMe2AWK4h4FX75nbR534NgYUDazetl6X6zZm1USgnEgscmmAWzGSr1FUG7MUeYSbFk4qKYqFnKYpSJl5hBuvAWeFkxQSjHGrUE4mDU9xgLvMGjQc8jOcQ4Xh6cwcg2FxSZcb4AlOxabI2hPMcQp1pUB7hHOdmH+BU5k4MzzFvON4EzO3oJxyYunmzLG2n7Lda2bPsXGGmFNKU83wfrEusUMJULDp8GqnUmaU3Dm2WIsxTV1j3OqxrThq8xme1cQsJa3/1smsO8OoWLXxWsXyNgtE5y6w20NE22D9OWabU7rGXXMqOKp8iN1+c85j7Ho8u3pzure4L4aCD6NHbNEJ3oJ1xM433HRfvWSHQf/5v/3B9/sGcTknbIO2HEYAAAAASUVORK5CYII=" style=" float: right; width: 20px;margin-top: .5em;margin-right: 1em;">'+
                    '</a>';
            if(navItem.prod.length > 24) {
                navItem.showProd = navItem.prod.substr(0, 24);
                if(navItem.showProd.charAt(23) !== '') {
                    navItem.showProd += "..."
                }
            } else {
                navItem.showProd = navItem.prod;
            }
            productsList = productsList.replace(/--showProdTitle--/g, navItem.showProd);
            productsList = productsList.replace(/--prodTitle--/g, navItem.prod);
            productsList = productsList.replace(/--prodImage--/g, navItem.productImage);
            productsList = productsList.replace(/--prodLink--/g, navItem.productLink);
            productsList = productsList.replace(/--pid--/g, navItem.PID);
            child1.innerHTML = productsList;
            var listItem = document.getElementById(uniqueId);
            listItem.appendChild(child1);
        };
        if(productCount != 0) {
            var footerItem = document.createElement('li');
            var footer = '<div style="display: block;">' +
                '<center style="font-size: .8em;">POWERED BY<a href="http://www.buyhatke.com" target="_blank" ' +
                'title="Browse more results of on BuyHatke.com" class="bh_prod_logo">' +
                '<img src="http://compare.buyhatke.com/images/buyhatke_logo_big.png" height="23px;">'
            '</a></center>' +
            '</div>'
            footerItem.innerHTML = footer;
            var listItem = document.getElementById(uniqueId);
            listItem.appendChild(footerItem);
        }
    });

}


var locations = document.querySelectorAll(".buyhatke_widget");
var locationCount = locations.length;
for(var i=0;i<locationCount;i++){
    initializeWidget(locations[i], i);
}

console.log("Initialized");

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var cssId = 'myCss';      // you could encode the css path itself to generate id..
        var locationCount;
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'style/widget.css';
            link.media = 'all';
            head.appendChild(link);
        }
        var locations = document.querySelectorAll(".buyhatke_widget");
        var locationCount = locations.length;
        for(var i=0;i<locationCount;i++){
            initializeWidget(locations[i], i);
        }
    });

})();
