// ==UserScript==
// @name         quicklink
// @namespace    casa.kieran
// @version      0.3
// @description  Adds Google's quicklink to every page
// @author       Kieran Hunt
// @match        https://*/*
// @match        http://*/*
// @require      https://unpkg.com/quicklink
// @require      https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver
// ==/UserScript==

(function() {
    'use strict';

    quicklink();
})();