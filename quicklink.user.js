// ==UserScript==
// @name         quicklink
// @namespace    casa.kieran
// @version      0.6
// @description  Adds Google's quicklink to every page
// @author       Kieran Hunt
// @match        https://*/*
// @match        http://*/*
// @require      https://unpkg.com/quicklink
// @require      https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver
// ==/UserScript==

(function() {
    'use strict';

    quicklink({
    	ignores: [

    		// https://news.ycombinator.com/
    		/news\.ycombinator.com\/vote/,
    		/news\.ycombinator.com\/hide/,
    		/news\.ycombinator.com\/logout/

    	]
    });
})();