// ==UserScript==
// @name         Expand All Lyrics (for Metal Archives)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Shift + click any "Show lyrics" to expand all track lyrics. Can also close all lyrics.
// @author       Nikoboi
// @match        https://www.metal-archives.com/albums/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(e) {
        const target = e.target;
        if (target.tagName === 'A' && target.id.startsWith('lyricsButton') && e.shiftKey) {
            e.preventDefault(); // prevent normal toggle

            const buttons = document.querySelectorAll('a[id^="lyricsButton"]');

            buttons.forEach((btn, index) => {
                // skip the button that was actually clicked
                if (btn !== target) {
                    setTimeout(() => btn.click(), index * 50);
                }
            });
        }
    }, true);
})();