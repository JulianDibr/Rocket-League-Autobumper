// ==UserScript==
// @name         RocketLeague Autobumper - Redirect to My trades
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://rocket-league.com/trade/*
// @exclude      https://rocket-league.com/trade/edit*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){window.location.href = "https://rocket-league.com/trades/JulianDibr";}, Math.floor(Math.random()*(3513-2653+1)+2653));
})();