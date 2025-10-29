// ==UserScript==
// @name         Metal Archives - Hide Elements
// @namespace    https://github.com/NikoboiNFTB/Metal-Archives-Tweaks/
// @version      1.1
// @description  Hide specific elements by ID and style login inputs on Metal Archives + style news box width
// @author       Nikoboi
// @match        https://www.metal-archives.com/
// @grant        none
// @run-at       document-idle
// @icon         https://www.metal-archives.com/favicon.ico
// ==/UserScript==

(function () {
    'use strict';

    // === CONFIGURATION ===
    const idsToHide = [
        'topStats',
        'latest',
        // Add more IDs here if needed
    ];

    function hideElementsById() {
        idsToHide.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.display = 'none';
                console.log(`[HideElements] Hid element with ID: ${id}`);
            } else {
                console.warn(`[HideElements] No element found with ID: ${id}`);
            }
        });
    }

    function styleLoginInputs() {
        const usernameInput = document.querySelector('input[name="loginUsername"]');
        const passwordInput = document.querySelector('input[name="loginPassword"]');

        if (usernameInput) {
            usernameInput.style.width = '128px';
            console.log('[StyleInputs] Styled loginUsername');
        }

        if (passwordInput) {
            passwordInput.style.width = '128px';
            console.log('[StyleInputs] Styled loginPassword');
        }
    }

    function styleNewsBox() {
        const newsBox = document.getElementById('news');
        if (newsBox) {
            newsBox.style.width = '1024px';
            console.log('[StyleNewsBox] Set width of #news to 1024px');
        } else {
            console.warn('[StyleNewsBox] No element found with ID: news');
        }
    }

    function init() {
        hideElementsById();
        styleLoginInputs();
        styleNewsBox();
    }

    // Wait for DOM to be fully loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
