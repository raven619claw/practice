debugger;
import template from 'view.html!text';
Application.addModule('header', function(context) {
	'use strict';
debugger;
	var dummyNotfCount,
		notificationArray = [{
		    name: 'Muskaan Jain',
		    msg: 'posted a photo on your wall'
		}, {
		    name: 'Swati Tripathi',
		    msg: 'posted an item for sale in Flat and Flatmates'
		}, {
		    name: 'Nikita Dubey',
		    msg: 'birthday today'
		}, {
		    name: 'Poornima Agarwal',
		    msg: 'sent you a friend request'
		}, {
		    name: 'Apurv Samaiyar',
		    msg: 'invited you to like Bisons'
		}];

	function getNewNotification() { //mocking an api call
	    return new Promise(
	        function(resolve, reject) {
	            window.setTimeout(
	                function() {
	                    var notificationCount = Math.floor(Math.random() * 6); //varied api response ranging from 0-5 notifications
	                    resolve(notificationCount);
	                }, Math.random() * 1000 + 1000); //api call response to be returned at a varied time interval
	        }
	    );
	}

	function _alertForNewNotf () {
		//show banner for new notf + count
		// 1. Compile template function
		var tempFn = doT.template("<h1>Here is a sample template {{=it.foo}}</h1>");
		// 2. Use template function as many times as you like
		var resultText = tempFn({foo: 'with doT'});
		context.getElement().innerHTML = context.getElement().innerHTML + resultText
	}

	function _fetchNotficationData() {
		return new Promise(
		    function(resolve, reject) {
		        window.setTimeout(
		            function() {
		                var newNotifications = notificationArray.slice(0, dummyNotfCount); //varied api response ranging from 0-5 notifications
		                resolve(newNotifications);
		            }, Math.random() * 1000 + 1000); //api call response to be returned at a varied time interval
		    }
		);
	}

	function _getNewNotifications () {
		var notificationData = _fetchNotficationData();
		notificationData.then(function(response){
			//display new notifications rows
		}, function(error){
			//display error message
		})
	}


	return {
		init: function() {
			console.log('header init');
			(function poll() {
			    setTimeout(function() { //set timeout does not guarentee execution at fixed time interval. but it guarentees previous interval is completed before next call, with minimum gap of 3000 seconds
			        var notificationCount =  getNewNotification();
			        notificationCount.then(function(count) {
			        	dummyNotfCount = count
			            if (count) {
			                _alertForNewNotf(count); //populating html in notification response
			            }
			            poll();
			        });

			    }, 3000);
			})();
		},
		onclick: function(event, element, elementType) {
			switch(elementType) {
				case 'new-notification-banner':
					_getNewNotifications();
					break;
			}
		}
	};

});
