
const shortcut = (key, id) => {
  return document.addEventListener("keyup", (event) => {
    if (event.keyCode == key) {
      document.getElementById(id).click();
    }
  });
}
const r = 82
shortcut(r, "refresh")

const c = 67
shortcut(c, "copy")

const t = 84
shortcut(t, "dark-mode-toggle")

const m = 77
shortcut(m, "moreinfo")

const g = 71
shortcut(g, "github")

const h = 72
shortcut(h, "hbutton")

const slash = 191
shortcut(slash, "shortcuts")

const p = 80
shortcut(p, "color_input")

const f = 70
shortcut(70, "fullscreen")

const L = 76
shortcut(L, "fav")

const o = 79
shortcut(o, "favlist")


// document.addEventListener("keyup", (event) => {
//   const n = document.getElementById("name");
//   if (event.keyCode == 78) {
//     // n button hides color name

//     if (n.style.display == "block") {
//       n.style.display = "none";
//     } else {
//       n.style.display = "block";
//     }
//   }
// });
