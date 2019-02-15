// ==UserScript==
// @name         quicklink
// @namespace    casa.kieran
// @version      0.2
// @description  Adds Google's quicklink to every page
// @author       Kieran Hunt
// @match        https://*/*
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var scriptElement = document.createElement("script")
    scriptElement.type = "text/javascript";
    scriptElement.src = "//unpkg.com/quicklink";
    scriptElement.onload = () => quicklink();
    document.body.appendChild(scriptElement);
})();