//rgb
String.prototype.convertToRGB = function () {
  const aRgbHex = this.match(/.{1,2}/g);
  const aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
  return aRgb;
};

let counter = 0;
const txt = document.getElementById("txt");
const colorInput = document.getElementById("color_input");
const popup = document.getElementById("shortcuts-popup");

const loadColor = (hex) => {
  document.body.style.backgroundColor = hex;
  txt.innerHTML = hex;
  colorInput.value = hex;
  document.fgColor = hex;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", hex);
  document.getElementById("divrgb").innerHTML = `RGB ${hex.replace("#", "").convertToRGB()}`;
  // document.querySelector(":root").style.setProperty("--color", hex);
};

const main = () => {
  counter++;
  let bg_clr = Math.floor(Math.random() * 16777215).toString(16);
  bg_clr = "#" + ("000000" + bg_clr).slice(-6);
  loadColor(bg_clr);
  setTimeout(() => {
    console.log("%c------------------------------ ", "color:#949494; font-size: 20px;");
    console.log(`${counter}. ${txt.textContent} ${document.getElementById("name").textContent} RGB ${bg_clr.replace("#", "").convertToRGB()}`);
  }, 100);
  if (counter >= 4) {
    document.getElementById("h-back-to-top").style.display = "block";
  }
};
main();
document.getElementById("main").classList.add("animate__animated", "animate__headShake");
setTimeout(() => {
  document.getElementById("main").classList.remove("animate__animated", "animate__headShake");
}, 1000);

window.onblur = () => {
  document.title = `Random Color - ${colorInput.value}`;
}; //title
window.onfocus = () => {
  document.title = "Random Color Tool";
};

// add color to history list
let hclrx = [];
const addToHistoryList = () => {
  const c_link = txt.textContent.replace("#", "");
  document.getElementById("historylist").innerHTML +=
    "<li>" +
    "<span id='historyhex' onclick='hclrx.push(this.textContent);changeColorFromHistory();hideAlert()'>" +
    "<img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/" +
    c_link +
    "/25x25'/>" +
    txt.textContent +
    "</span>" +
    " | " +
    document.getElementById("name").textContent +
    "<hr><br></li>";
};

const changeColorFromHistory = () => {
  loadColor(hclrx[hclrx.length - 1]);
  clr_name();
  locals();
  urlChange();
};

//show history
document.getElementById("history").style.display = "none";

const showHistory = () => {
  const h = document.getElementById("history");
  h.style.display === "none" ? (h.style.display = "block") : (h.style.display = "none");
};

document.getElementById("shortcuts").addEventListener("click", () => {
  document.getElementById("s-delete").style.display = "none";
  popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
  document.getElementById("history").style.display = "none";
  document.getElementById("modaltext").innerHTML =
    '<h1 class="s-header"><i class="twa twa-lg twa-keyboard"></i> Keyboard Shortcuts</h1><br> <table> <tr> <td> <p class="s-p">Generate Random Color </p> </td> <td><span class="key">R</span></td> </tr> <tr> <td> <p class="s-p">Change Theme Color </p> </td> <td><span class="key">T</span></td> </tr> <tr> <td> <p class="s-p">Copy Text </p> </td> <td><span class="key">C</span></td> </tr> <tr> <td> <p class="s-p">Open Eye Dropper </p> </td> <td><span class="key">P</span></td> </tr> <tr> <td> <p class="s-p">Toggle Fullscreen </p> </td> <td><span class="key">F</span></td> </tr> <tr> <td> <p class="s-p">Show More Info </p> </td> <td><span class="key">M</span></td> </tr> <tr> <td> <p class="s-p">Show History List </p> </td> <td><span class="key">H</span></td> </tr> <td> <p class="s-p">Like Color </p> </td> <td><span class="key">L</span></td> </tr><tr> <td> <p class="s-p">Liked Colors List </p> </td> <td><span class="key">O</span></td> </tr><tr> <td> <p class="s-p">Show Shortcuts </p> </td> <td><span class="key">/</span></td><tr></tr></table>';
});

document.getElementById("closeShortcuts").addEventListener("click", () => {
  popup.classList.remove("show");
});

// copy
const copyToClipboard = (txt) => navigator.clipboard.writeText(txt);

// color picker
const colorPicker = colorInput;
const clrpicker = () => {
  colorPicker.addEventListener("input", () => {
    clr_name();
    hideAlert();
    loadColor(colorInput.value);
  });
};

// darkmode toggle
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

//buttons
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  hideAlert();
  popup.classList.remove("show");
});

let rpt = 0;

colorInput.addEventListener("change", () => {
  locals();
  clr_name();
  urlChange();
  isFavColor();
  l = 0;
});

colorInput.addEventListener("click", () => {
  isFavColor();
  l = 0;
  if (rpt == 0) {
    //bug fix for color picker
    colorInput.click();
    document.getElementById("db").click();
  }
  rpt++;
  clrpicker();
  locals();
  clr_name();
  popup.classList.remove("show");
});

document.getElementById("hbutton").addEventListener("click", () => {
  showHistory();
  popup.classList.remove("show");
});

document.getElementById("moreinfo").addEventListener("click", () => {
  window.open(`https://www.color-hex.com/color/${colorInput.value.replace("#", "")}`);
  popup.classList.remove("show");
});
//history back/forward buttons
setTimeout(() => {
  sessionStorage.setItem("firstSessionClr", colorInput.value);
}, 50);

document.getElementById("back").addEventListener("click", () => {
  if (sessionStorage.getItem("firstSessionClr") != colorInput.value) {
    history.go(-1);
  }
});
document.getElementById("forward").addEventListener("click", () => {
  history.go(1);
});

document.getElementById("copy").addEventListener("click", () => {
  copyToClipboard(colorPicker.value);
  console.log(`Copied to clipboard ${colorPicker.value}`);
  document.getElementById("alertspan").innerHTML = `<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: ${colorPicker.value}`;
  // showa();
  showAlert(800, 1300, "<i class='twa twa-lg twa-clipboard'></i>", `Copied to clipboard: ${colorPicker.value}`);
});

const alert = document.querySelector(".alert");
alert.style.setProperty("--animate-duration", "0.6s");
const showAlert = (start, end, emoji, text) => {
  hideAlert();
  document.getElementById("alertspan").innerHTML = `<span class='alert-emoji'>${emoji}</span> ${text}`;
  alert.style.display = "block";
  alert.classList.add("animate__animated", "animate__fadeInDown");
  alert.addEventListener("animationend", () => {
    alert.classList.remove("animate__animated", "animate__fadeInDown");
    setTimeout(() => {
      alert.classList.add("animate__animated", "animate__fadeOut");
    }, start);
    setTimeout(() => {
      hideAlert();
      alert.classList.remove("animate__animated", "animate__fadeOut");
    }, end);
  });
  popup.classList.remove("show");
};

const hideAlert = () => {
  //hide alert
  document.getElementById("alert").style.display = "none";
  document.querySelector(".alert").classList.remove("animate__animated", "animate__fadeInDown", "animate__faster");
  document.querySelector(".alert").classList.remove("animate__animated", "animate__fadeOut");
};
isHexColor = (hex) => typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
const uniqueFavs = (array) => array.filter((currentValue, index, arr) => arr.indexOf(currentValue) === index);
const like = document.getElementById("like");
const addToFavs = () => {
  let new_favs = colorInput.value;
  if (localStorage.getItem("favs") == null) {
    localStorage.setItem("favs", "[]");
  }
  let old_favs = JSON.parse(localStorage.getItem("favs"));
  old_favs.push(new_favs);
  localStorage.setItem("favs", JSON.stringify(uniqueFavs(old_favs)));
};
const isFavColor = () => {
  if (localStorage.getItem("favs") !== null) {
    if (localStorage.getItem("favs").includes(txt.textContent)) {
      document.getElementById("fav").setAttribute("title", "Remove From Favorites");
      like.style.color = "#FF2E78";
      l = 1;
    } else {
      like.style.color = "currentColor";
      document.getElementById("fav").setAttribute("title", "Add To Favorites");
      l = 2;
    }
  }
};
const removeFromFavs = (arr, item) => {
  let newArray = [...arr];
  const index = newArray.findIndex((element) => element === item);
  if (index !== -1) {
    newArray.splice(index, 1);
    return newArray;
  }
};
const removeItemFromFavs = (item) => {
  //remove from favs
  let favsNew = JSON.parse(localStorage.getItem("favs"));
  localStorage.removeItem("favs");
  if (localStorage.getItem("favs") == null) {
    localStorage.setItem("favs", "[]");
  }
  localStorage.setItem("favs", JSON.stringify(removeFromFavs(favsNew, item)));
  isFavColor();
  showAlert(800, 1300, "💔", `Removed from favorites: ${item}`);
};
let l = 0;
document.getElementById("fav").addEventListener("click", () => {
  addToFavs();
  l++;
  navigator.vibrate(150);
  if (l % 2 != 0) {
    like.style.color = "#FF2E78";
    document.getElementById("alertspan").innerHTML = `<span class='alert-emoji'>❤️</span> Added to favorites: ${colorInput.value}`;
    showAlert(800, 1300, "❤️", `Added to favorites: ${colorInput.value}`);
    like.classList.add("fa-beat");
    setTimeout(() => {
      like.classList.remove("fa-beat");
    }, 2050);
  } else {
    removeItemFromFavs(colorInput.value);
    like.classList.remove("fa-beat");
    like.style.color = "currentColor";
    like.classList.add("fa-shake");
    setTimeout(() => {
      like.classList.remove("fa-shake");
    }, 600);
  }
});
//local storage
// save last color in local storage

isHexColor = (hex) => typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
const locals = () => {
  if (isHexColor(txt.textContent.replace("#", ""))) {
    localStorage.setItem("clr", txt.textContent);
  }
};

if (localStorage.getItem("clr") != null) {
  l = 1;
  loadColor(localStorage.getItem("clr"));
  setTimeout(() => {
    addToHistoryList();
  }, 100);
} else {
  document.getElementById("fav").click();
  hideAlert();
  document.getElementById("s-delete").click();
  document.getElementById("fav").click();
  hideAlert();
  setTimeout(() => {
    addToHistoryList();
  }, 100);
  l++;
}
locals();
//save theme in local storage
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
  enableDarkMode();
  console.log("%cDarkmode Enabled! 🌙", "color:#bd9ff5;");
  // document.querySelector('link[rel="icon"]').setAttribute("href", "img/iconDark.png");
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log("%cDarkmode Enabled! 🌙", "color:#bd9ff5;");
    showAlert(800, 1300, "🌙", "Darkmode Enabled!");
    // document.querySelector('link[rel="icon"]').setAttribute("href", "img/iconDark.png");
  } else {
    disableDarkMode();
    console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
    // document.querySelector('link[rel="icon"]').setAttribute("href", "img/iconLight.png");
    showAlert(800, 1300, "☀️", "Darkmode Disabled!");
    // document.querySelector('link[rel="icon"]').setAttribute("href", "img/iconLight.png");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", colorPicker.value);
  }
});

const delClick = () => {
  setTimeout(() => {
    history.back();
  }, 25);
  setTimeout(() => {
    document.getElementById("favlist").click();
  }, 50);
};

let favsChangeClr = null;
document.getElementById("favlist").addEventListener("click", () => {
  hideAlert();
  document.getElementById("history").style.display = "none";
  const favsarr = JSON.parse(localStorage.getItem("favs"));
  popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
  document.getElementById("modaltext").innerHTML = `<h1 class='favsheader' style=cursor:default><i class='twa twa-1x twa-artist-palette' style='cursor:default'></i> Your Favourite Colors List</h1></br><h1 class='favsheader' style='font-size:20px'>Liked Colors:
    ${favsarr.length}
    </h1>`;
  ul = document.createElement("div");
  ul.setAttribute("style", "cursor:default");
  document.getElementById("modaltext").appendChild(ul);
  favsarr.forEach((item) => {
    let p = document.createElement("p");
    const del = `<i id="delFromFavs" onclick="removeItemFromFavs('${item}');delClick()" title="Delete From Favs: ${item}" class="fa-solid fa-trash-can fa-sm"></i>`;
    const img = `<img loading='lazy' class='favsimg' align='left' src='https://singlecolorimage.com/get/${item.replace("#", "")}/29x44'/>`;
    p.setAttribute("id", "favsli");
    ul.appendChild(p);
    p.innerHTML += `${img}<div style="margin-left:65px">${item}</br>${del} <span class='favsclrname'>${ntc.name(item)[1]}</span></div>`;
    p.setAttribute("onclick", "favsChangeClr = this.textContent.split(' ')[0];ChangeToFav()");
    p.setAttribute("title", `Change Color To: ${item} (${ntc.name(item)[1]})`);
  });
  const delAll = document.getElementById("s-delete");
  favsarr.length > 0 ? (delAll.style.display = "block") : (delAll.style.display = "none");
  delAll.addEventListener("click", () => {
    l = 2;
    popup.classList.remove("show");
    like.style.color = "currentColor";
    localStorage.setItem("favs", "[]");
  });
});

const ChangeToFav = () => {
  popup.classList.remove("show");
  loadColor(favsChangeClr);
  clr_name();
  locals();
  urlChange();
};

document.getElementById("refresh").addEventListener("click", () => {
  main();
  hideAlert();
  locals();
  clr_name();
  urlChange();
  addToHistoryList();
  popup.classList.remove("show");
  l = 0;
  // const el = document.querySelector(".div1");
  // el.classList.add('animate__animated', 'animate__headShake');
  // el.addEventListener('animationend', () => {
  //     el.classList.remove('animate__animated', 'animate__headShake');
  //     });
});

document.getElementById("github").addEventListener("click", () => {
  window.open("https://github.com/maciekt07", "_blank");
  popup.classList.remove("show");
});

document.getElementById("closeHistory").addEventListener("click", () => {
  showHistory();
});

document.getElementById("h-back-to-top").addEventListener("click", () => {
  // window.open('#history', '_self')
  document.getElementById("h").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById("closeAlert").addEventListener("click", () => {
  hideAlert();
});

// document.getElementById("main").addEventListener("dblclick", () => {
//   document.getElementById("fav").click();
// })
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    if (window.screen.width > 1024) {
      showAlert(800, 1300, "<i class='twa twa-lg twa-desktop-computer'></i>", "Fullscreen Enabled!");
      console.log("Fullscreen enabled");
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    if (window.screen.width > 1024) {
      showAlert(800, 1300, "<i class='twa twa-lg twa-desktop-computer'></i>", "Fullscreen Disabled!");
      console.log("Fullscreen disabled");
    }
  }
};
document.getElementById("fullscreen").addEventListener("click", () => {
  toggleFullScreen();
});

document.getElementById("share").addEventListener("click", async () => {
  navigator.vibrate(150);
  document.querySelector(".fa-share").classList.add("fa-flip");
  document.querySelector(".fa-share").style.color = "#48b4ea";
  setTimeout(() => {
    document.querySelector(".fa-share").classList.remove("fa-flip");
    document.querySelector(".fa-share").style.color = "var(--foreground)";
  }, 2000);

  let shareData = {
    title: "Random Color Tool By maciekt07",
    text: `Check out this cool color: ${colorInput.value}`,
    url: location,
  };
  try {
    await navigator.share(shareData);
    console.log("Shared color successfully");
  } catch (err) {
    console.log(`Share Error: ${err}`);
    if (err != "AbortError: Share canceled") {
      copyToClipboard(location);
      showAlert(800, 1300, "<i class='twa twa-lg twa-clipboard'></i>", "Copied URL to clipboard!");
    }
  }
});

//url
const url = `${location.origin}/`;
const urlChange = () => {
  location = `${url}?${colorInput.value}`;
};
const urlError = () => {
  //change url to previous
  location = `${url}?${localStorage.getItem("clr")}`;
  setTimeout(() => {
    console.error("ERROR: Invalid Color in URL");
    document.getElementById("alertspan").innerHTML = "<span class='alert-emoji'>❌</span> <span style='color:#FF4B56'>ERROR:</span> Invalid Color in URL";
    showAlert(800, 1300);
  }, 300);
};

const urlLoad = () => {
  const urlhex = location.toString().replace(`${url}?`, "").toLowerCase();
  const urlhexnumber = urlhex.replace("#", "").toLowerCase();
  if (isHexColor(urlhexnumber)) {
    loadColor(urlhex);
    locals();
    urlChange();
    isFavColor();
  } else {
    urlError();
  }
};
urlLoad();

if (location != `${url}?${colorInput.value}`) {
  urlError();
}

window.addEventListener("hashchange", () => {
  clr_name();
  urlLoad();
  isFavColor();
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 80) {
    const eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((result) => {
        loadColor(result.sRGBHex);
        urlChange();
      })
      .catch((error) => {
        console.log(error);
        showAlert(800, 1300, "🚫", "Your browser does not support eye dropper.");
      });
  }
});

window.addEventListener("offline", () => {
  showAlert(800, 1300, "📴", `You're offline`);
  window.addEventListener("online", () => {
    showAlert(800, 1300, "🌐", `You're online again`);
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {
      console.log("Service worker installed");
    })
    .catch((error) => {
      console.log(`Service Worker Error: ${error}`);
    });
}

// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-4QTNJRWC58");
