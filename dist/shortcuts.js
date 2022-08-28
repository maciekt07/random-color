"use strict";
var shortcut = function (key, id) {
    return document.addEventListener("keyup", function (e) {
        //@ts-ignore
        if (event.keyCode == key && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            document.getElementById(id).click();
        }
    });
};
var R = 82;
shortcut(R, "refresh");
var C = 67;
shortcut(C, "copy");
var T = 84;
shortcut(T, "dark-mode-toggle");
var M = 77;
shortcut(M, "moreinfo");
var G = 71;
shortcut(G, "github");
var H = 72;
shortcut(H, "hbutton");
var slash = 191;
shortcut(slash, "shortcuts");
var F = 70;
shortcut(F, "fullscreen");
var L = 76;
shortcut(L, "fav");
var O = 79;
shortcut(O, "favlist");
