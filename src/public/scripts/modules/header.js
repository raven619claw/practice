debugger;

Application.addModule('header', function(context) {
    'use strict';

    var dummyNotfCount =0,
        notificationArray = [{
            name: 'Muskaan Jain',
            profilePic:'../images/twit/user-one.png',
            userName: '@mausi2323',
            twitTime: '5m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                imageUrl: '../images/twit/image1.png'
            }
        }, {
            name: 'kajara',
            profilePic:'../images/twit/user-one.png',
            userName: '@kakaPakka',
            twitTime: '1m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                videoUrl: 'https://www.youtube.com/embed/ndBoS_hLyoY'
            }
        }, {
            name: 'Lallan',
            profilePic:'../images/twit/user-one.png',
            userName: '@ashdi',
            twitTime: '2m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                imageUrl: '../images/twit/image2.png'
            }
        }, {
            name: 'kalpana',
            profilePic:'../images/twit/user-one.png',
            userName: '@kallu',
            twitTime: '8m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'Muskaan Jain',
            profilePic:'../images/twit/user-one.png',
            userName: '@mausi2323',
            twitTime: '10m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                imageUrl: '../images/twit/image1.png'
            }
        }, {
            name: 'kajara',
            profilePic:'../images/twit/user-one.png',
            userName: '@kakaPakka',
            twitTime: '20m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'Lallan1',
            profilePic:'../images/twit/user-one.png',
            userName: '@ashdi',
            twitTime: '15m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                imageUrl: '../images/twit/image1.png'
            }
        }, {
            name: 'kalpana1',
            profilePic:'../images/twit/user-one.png',
            userName: '@kallu',
            twitTime: '2hrs',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'Muskaan Jain1',
            profilePic:'../images/twit/user-one.png',
            userName: '@mausi2323',
            twitTime: '20hrs',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
                imageUrl: '../images/twit/image2.png'
            }
        }, {
            name: 'kajara1',
            profilePic:'../images/twit/user-one.png',
            userName: '@kakaPakka',
            twitTime: '2m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'Lallan2',
            profilePic:'../images/twit/user-one.png',
            userName: '@ashdi',
            twitTime: '2m',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'kalpana2',
            profilePic:'../images/twit/user-one.png',
            userName: '@kallu',
            twitTime: '45sec',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
        }, {
            name: 'Muskaan Jain2',
            profilePic:'../images/twit/user-one.png',
            userName: '@mausi2323',
            twitTime: '45sec',
            content: {
                type:'post',
                msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            }
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

    function _alertForNewNotf (count) {
        //show banner for new notf + count
        // 1. Compile template function
        var tempFn = doT.template("<span>{{=it.count}} new updates</span>");
        // 2. Use template function as many times as you like
        var resultText = tempFn({count: count});
        var elemntInsertLi = $(".js-new-updates");
        $(".js-new-updates").html(resultText);
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
            dummyNotfCount = 0;
            _alertForNewNotf(dummyNotfCount)
            //display new notifications rows
            var template = '{{~it.array :value:index}}<li class="highlight"><div class="twit-wrap clearfix"><div class="sm-col sm-col-1 img-wrap"><img src="{{=value.profilePic}}" /></div><div class="sm-col sm-col-11 detail-wrap"><div class="postTime">{{=value.twitTime}}</div><h2 class="actual-name">{{=value.name}}</h2><span class="username">{{=value.userName}}</span><div class="twit-writ-wrap">{{=value.content.msg}}</div>{{? value.content.videoUrl}}<div class="videoWrap"><iframe width="560" height="315" src="{{=value.content.videoUrl}} frameborder="0" allowfullscreen></iframe></div>{{?}}{{? value.content.imageUrl}}<div class="postImageWrap"><img src="{{=value.content.imageUrl}}" /> </div>{{?}}<div class="option-wrap"><i class="fa fa-mail-forward"></i><i class="fa fa-star"></i><i class="fa fa-refresh"></i><i class="fa fa-ellipsis-h"></i></div></div></div></li>{{~}}'
            $('.js-twit-list').prepend(doT.template(template)({array:response}));
            window.setTimeout(function(){
                $('.highlight').removeClass('highlight')
            },3000)
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
                        dummyNotfCount += count
                        if (count) {
                            _alertForNewNotf(dummyNotfCount); //populating html in notification response
                           // console.log(count);
                        }
                        poll();
                    });

                }, 8000);
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
