// ==UserScript==
// @name         RocketLeague Autobumper - Tradeseite
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rocket-league.com/trades/JulianDibr
// @run-at       document-idle
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    var isOld = false;
    var buttons = $('.rlg-btn-secondary');
    var element = buttons.length - 1;
    var container = buttons[element].closest('.rlg-trade-display-container');
    var timeHeader = $(container).find('.rlg-trade-display-added').text();
    if (timeHeader.includes("hour"))
    {
       isOld = true
    }
    else
    {
        isOld = false;
    }


    timeHeader = timeHeader.replace(/\D/g,'');

    //if (true)
    if (timeHeader > Math.floor(Math.random()*(26-20+1)+20) || isOld)
    {
        //if(true){
        setTimeout(function(){buttons[element].click();}, Math.floor(Math.random()*(18304-7928+1)+7928));
    } else
    {
        setTimeout(function(){location.reload();}, Math.floor(Math.random()*(140329-107632+1)+107632));
    }
})();