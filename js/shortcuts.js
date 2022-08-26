const shortcut = (key, id) => {
  return document.addEventListener("keyup", (event) => {
    if (event.keyCode == key) {
      document.getElementById(id).click();
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
