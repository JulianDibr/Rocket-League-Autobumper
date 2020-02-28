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
        var buttons = $('.rlg-btn-secondary');
        var element = buttons.length - 1;
        var container = buttons[element].closest('.rlg-trade-display-container');
        var timeHeader = $(container).find('.rlg-trade-display-added').text();
        timeHeader = timeHeader.replace(/\D/g,'');

        if (timeHeader > 20){
            setTimeout(function(){buttons[element].click();}, 10531);
        } else
        {
            setTimeout(function(){location.reload();}, 120000);
        }
})();