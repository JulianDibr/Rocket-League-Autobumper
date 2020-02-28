 ==UserScript==
 @name         RocketLeague Autobumper - Bump
 @namespace    httptampermonkey.net
 @version      0.1
 @description  try to take over the world!
 @author       You
 @match        httpsrocket-league.comtradeedit
 @grant        none
 @require      httpcode.jquery.comjquery-3.4.1.min.js
 ==UserScript==

(function() {
    'use strict';

    setTimeout(function(){$('.rlg-btn-trade-form').click();}, 8577);
})();