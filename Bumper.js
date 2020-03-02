// ==UserScript==
// @name         RocketLeague Autobumper - Bump
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rocket-league.com/trade/edit*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
 'use strict';

 setTimeout(function(){$('.rlg-btn-trade-form').click();}, Math.floor(Math.random()*(10324-7523+1)+7523));
})();