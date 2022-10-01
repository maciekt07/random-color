"use strict";
const shortcut = (key, id) => {
    return document.addEventListener("keyup", (e) => {
        //@ts-ignore
        if (event.keyCode == key && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            document.getElementById(id).click();
            console.log(`Clicked: ${id} (${key})`);
        }
    });
};
const R = 82;
shortcut(R, "refresh");
const C = 67;
shortcut(C, "copy");
const T = 84;
shortcut(T, "dark-mode-toggle");
const M = 77;
shortcut(M, "moreinfo");
const G = 71;
shortcut(G, "github");
const H = 72;
shortcut(H, "hbutton");
const slash = 191;
shortcut(slash, "shortcuts");
const F = 70;
shortcut(F, "fullscreen");
const L = 76;
shortcut(L, "fav");
const O = 79;
shortcut(O, "favlist");
//@ts-ignore
const picker = new EyeDropper();
document.addEventListener("keyup", (event) => {
    if (event.keyCode == 80) {
        picker
            .open()
            .then((result) => {
            loadColor(result.sRGBHex);
            urlChange();
        })
            .catch((error) => {
            console.log(error);
            if (!error.toString().includes("EyeDropper is already open")) {
                showAlert("<i class='fa-solid fa-ban fa-xl'></i>", "Eye Dropper Error", `Your browser may not support this feature
        `, "https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper#browser_compatibility", true);
            }
        });
    }
});
