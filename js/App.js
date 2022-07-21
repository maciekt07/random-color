const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.color;
    console.log("%cToday Lucky Color is: " + date, "color:white;padding:8px;border:2px solid yellow;border-radius:12px");
});
 //rgb
 String.prototype.convertToRGB = function () {
  let aRgbHex = this.match(/.{1,2}/g);
  let aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};
let counter = 0;
const txt = document.getElementById("txt");
const main = () => {
  counter++;
  let bg_clr = Math.floor(Math.random() * 16777215).toString(16);
  bg_clr = "#" + ("000000" + bg_clr).slice(-6);
  clr_link = ("000000" + bg_clr).slice(-6);
  document.body.style.backgroundColor = bg_clr;
  txt.innerHTML = bg_clr;
  link = "https://www.color-hex.com/color/" + clr_link;
  github = "https://www.github.com/maciekt07";
  document.fgColor = bg_clr;
  document.querySelector('input[type="color"]').setAttribute("value", bg_clr);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", bg_clr);
  const txt1 = txt.textContent;
  let Str = txt1;
  let StrNew = Str.replace("#", "");
  document.getElementById("divrgb").innerHTML = "RGB " + StrNew.convertToRGB();
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + bg_clr;
  console.log("%c--------- ", "color:#949494; font-size: 20px;");
  console.log(
    counter + ". " + txt.textContent + " " + document.getElementById("name").textContent + " RGB " + clr_link.convertToRGB()
  );
  const top_btn = document.getElementById("h-back-to-top");
  if (counter == 4) {
    top_btn.style.display = "block";
  }
};
main();
document
  .getElementById("main")
  .classList.add("animate__animated", "animate__headShake");
setTimeout(() => {
  document
    .getElementById("main")
    .classList.remove("animate__animated", "animate__headShake");
}, 1000);

window.onblur = () => {
  document.title = "Random Color - " + txt.textContent;
}; //title
window.onfocus = () => {
  document.title = "Random Color";
};




// add color to history list
let hclrx = [];

const historyl = () => {
  const c_link = txt.textContent.replace("#", "");
  document.getElementById("historylist").innerHTML +=
    "<li>" +
    "<span id='historyhex' onclick='hclrx.push(this.textContent);hclr();ifFavClr();hidea();l++'>" +
    "<img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/" +
    c_link +
    "/25x25'/>" +
    txt.textContent +
    "</span>" +
    " | " +
    "RGB " +
    clr_link.convertToRGB() +
    "<hr><br></li>";
};

const hclr = () => {
  const x = hclrx[hclrx.length - 1];
  let x2 = x.replace("#", "");
  txt.textContent = x;
  document.body.style.backgroundColor = x;
  document.fgColor = x;
  document.getElementById("color_input").value = x;
  clr_name();
  document.getElementById("divrgb").textContent = "RGB " + x2.convertToRGB();
  link = "https://www.color-hex.com/color/" + x2;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", x);
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + x;
  locals();
  urlChange();
};

//show history
document.getElementById("history").style.display = "none";

const showh = () => {
  const x = document.getElementById("history");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};
// const btn = document.getElementById("hbutton"); //change button text show/hide
// btn.addEventListener("click", () => {
//     if (btn.innerText === "show history") {
//         btn.innerText = "hide history";
//     } else {
//         btn.innerText = "show history";
//     };
// });

document.getElementById("shortcuts").addEventListener("click", () => {
  document.getElementById("s-delete").style.display = "none";
  if (
    document.getElementById("shortcuts-popup").className == "shortcuts-popup"
  ) {
    document.getElementById("shortcuts-popup").classList.add("show");
  } else {
    document.getElementById("shortcuts-popup").classList.remove("show");
  }
  document.getElementById("history").style.display = "none";
  document.getElementById("modaltext").innerHTML =
    '<h1 class="s-header"><i class="twa twa-lg twa-keyboard"></i> Keyboard Shortcuts</h1><br> <table> <tr> <td> <p class="s-p">Generate Random Color </p> </td> <td><span class="key">R</span></td> </tr> <tr> <td> <p class="s-p">Change Theme Color </p> </td> <td><span class="key">T</span></td> </tr> <tr> <td> <p class="s-p">Copy Text </p> </td> <td><span class="key">C</span></td> </tr> <tr> <td> <p class="s-p">Open Color Picker </p> </td> <td><span class="key">P</span></td> </tr> <tr> <td> <p class="s-p">Toggle Fullscreen </p> </td> <td><span class="key">F</span></td> </tr> <tr> <td> <p class="s-p">Show More Info </p> </td> <td><span class="key">M</span></td> </tr> <tr> <td> <p class="s-p">Show History List </p> </td> <td><span class="key">H</span></td> </tr> <td> <p class="s-p">Like Color </p> </td> <td><span class="key">L</span></td> </tr><tr> <td> <p class="s-p">Liked Colors List </p> </td> <td><span class="key">O</span></td> </tr><tr> <td> <p class="s-p">Show Shortcuts </p> </td> <td><span class="key">/</span></td><tr></tr></table>';
});

document.getElementById("s-close").addEventListener("click", () => {
  document.getElementById("shortcuts-popup").classList.remove("show");
});

// document.getElementById("shortcuts-popup").addEventListener('click', () => {
//     document.getElementById("shortcuts-popup").classList.remove("show");
// });

// const showa = () => {
//   // show copy alert
//   // $("#alert").slideDown("slow").delay(2600).fadeOut(500);
// };



// copy
const copyToClipboard = (element) => {
  let $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};

// color picker
const colorPicker = document.getElementById("color_input");
const clrpicker = () => {
  colorPicker.addEventListener("input", () => {
    clr_name();
    const txt1 = txt.textContent;
    let Str = txt1;
    let StrNew = Str.replace("#", "");
    hidea();
    document.body.style.backgroundColor = colorPicker.value;
    document.fgColor = colorPicker.value;
    document.getElementById("divrgb").innerHTML =
      "RGB " + StrNew.convertToRGB();
    link = "https://www.color-hex.com/color/" + StrNew;
    txt.innerHTML = colorPicker.value;
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", colorPicker.value);
    document
      .querySelector('input[type="color"]')
      .setAttribute("value", colorPicker.value);
    document.getElementById("alertspan").innerHTML =
      "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " +
      colorPicker.value;
  });
};

const input_refresh = () => {
  document.getElementById("color_input").value =
    document.getElementById("txt").textContent;
};

// darkmode toggle
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

//buttons
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  hidea();
  document.getElementById("shortcuts-popup").classList.remove("show");
});

let rpt = 0;

document.getElementById("color_input").addEventListener("change", () => {
  ifFavClr();
  l = 0;
});

document.getElementById("color_input").addEventListener("click", () => {
  ifFavClr();
  l = 0;
  if (rpt == 0) {
    //bug repair
    document.getElementById("color_input").click();
    document.getElementById("db").click();
  }
  rpt++;
  clrpicker();
  locals();
  clr_name();
  document.getElementById("shortcuts-popup").classList.remove("show");
});

document.getElementById("hbutton").addEventListener("click", () => {
  showh();
  document.getElementById("shortcuts-popup").classList.remove("show");
});

document.getElementById("moreinfo").addEventListener("click", () => {
  window.open(link);
  document.getElementById("shortcuts-popup").classList.remove("show");
});

document.getElementById("copy").addEventListener("click", () => {
  copyToClipboard("#txt");
  console.log("Copied to clipboard " + txt.textContent);
  // document.getElementById("history").style.display = "none"
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " +
    txt.textContent;
  // showa();
  showalert();
});

const alert = document.querySelector(".alert");
alert.style.setProperty("--animate-duration", "0.6s");
const showalert = () => {
  hidea();
  document.getElementById("alert").style.display = "block";
  alert.classList.add("animate__animated", "animate__fadeInDown");
  alert.addEventListener("animationend", () => {
    alert.classList.remove("animate__animated", "animate__fadeInDown");
   setTimeout(() => {
      alert.classList.add("animate__animated", "animate__fadeOut");
    }, 800);
  setTimeout(() => {
      hidea();
      alert.classList.remove("animate__animated", "animate__fadeOut");
    }, 1300);
  });
  document.getElementById("shortcuts-popup").classList.remove("show");
};

const hidea = () => {
  //hide alert
  $("#alert").hide();
  document
    .querySelector(".alert")
    .classList.remove(
      "animate__animated",
      "animate__fadeInDown",
      "animate__faster"
    );
  document
    .querySelector(".alert")
    .classList.remove("animate__animated", "animate__fadeOut");
};

const uniqueFavs = (array) =>
  array.filter(
    (currentValue, index, arr) => arr.indexOf(currentValue) === index
  );
const like = document.getElementById("like");
const addToFavs = () => {
  let new_favs = txt.textContent;
  if (localStorage.getItem("favs") == null) {
    localStorage.setItem("favs", "[]");
  }
  let old_favs = JSON.parse(localStorage.getItem("favs"));
  old_favs.push(new_favs);
  localStorage.setItem("favs", JSON.stringify(uniqueFavs(old_favs)));
};
let ifFavClr = () => {
  if (localStorage.getItem("favs") !== null) {
    if (localStorage.getItem("favs").includes(txt.textContent)) {
      like.style.color = "#FF2E78";
    } else {
      like.style.color = "currentColor";
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
let l = 0;
document.getElementById("fav").addEventListener("click", () => {
  addToFavs();
  l++;
  if (l % 2 != 0) {
    like.style.color = "#FF2E78";
    showalert();
    document.getElementById("alertspan").innerHTML =
      "<span class='alert-emoji'>❤️</span>Added to favorites: " +
      txt.textContent;
    like.classList.add("fa-beat");
    setTimeout(() => {
      like.classList.remove("fa-beat");
    }, 2050);
  } else {
    //remove from favs
    let favsNew = JSON.parse(localStorage.getItem("favs"));
    localStorage.removeItem("favs");
    if (localStorage.getItem("favs") == null) {
      localStorage.setItem("favs", "[]");
    }
    localStorage.setItem(
      "favs",
      JSON.stringify(removeFromFavs(favsNew, txt.textContent))
    );
    ifFavClr();
    like.classList.remove("fa-beat");
    like.style.color = "currentColor";
    showalert();
    document.getElementById("alertspan").innerHTML =
      "<span class='alert-emoji'>💔</span> Removed from favorites: " +
      txt.textContent;
    like.classList.add("fa-shake");
    setTimeout(() => {
      like.classList.remove("fa-shake");
    }, 600);
  }
});
//local storage
// save last color in local storage
const locals = () => {
  localStorage.setItem("clr", txt.textContent);
  // console.log("%c%s", "color:#b144e4", localStorage.getItem("clr"));
};

if (localStorage.getItem("clr") != null) {
  l = 1;
  const clr = localStorage.getItem("clr");
  document.body.style.backgroundColor = clr;
  document.fgColor = clr;
  document.querySelector('input[type="color"]').setAttribute("value", clr);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", clr);
  document.getElementById("color_input").value = clr;
  document.getElementById("divrgb").innerHTML =
    "RGB " + clr.replace("#", "").convertToRGB();
  txt.innerHTML = clr;
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + clr;
  const c_link = txt.textContent.replace("#", "");
  document.getElementById("historylist").innerHTML +=
    "<li>" +
    "<span id='historyhex' onclick='hclrx.push(this.textContent);hclr();ifFavClr();hidea();l++'>" +
    "<img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/" +
    c_link +
    "/25x25'/>" +
    txt.textContent +
    "</span>" +
    " | " +
    "RGB " +
    txt.textContent.replace("#", "").convertToRGB() +
    "<hr><br></li>";
  link = "https://www.color-hex.com/color/" + clr.replace("#", "");
  if (localStorage.getItem("favs").includes(txt.textContent)) {
    like.style.color = "#FF2E78";
  } else {
    like.style.color = "currentColor";
    l++;
  }
} else {
  document.getElementById("fav").click();
  const c_link = txt.textContent.replace("#", "");
  document.getElementById("historylist").innerHTML +=
    "<li>" +
    "<span id='historyhex' onclick='hclrx.push(this.textContent);hclr();ifFavClr();hidea();'>" +
    "<img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/" +
    c_link +
    "/25x25'/>" +
    txt.textContent +
    "</span>" +
    " | " +
    "RGB " +
    clr_link.convertToRGB() +
    "<hr><br></li>";
  ifFavClr();
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
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log("%cDarkmode Enabled! 🌙", "color:#bd9ff5;");
    showalert();
    document.getElementById("alertspan").innerHTML =
      "<span class='alert-emoji'>🌙</span> Darkmode Enabled!";
  } else {
    disableDarkMode();
    console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
    showalert();
    document.getElementById("alertspan").innerHTML =
      "<span class='alert-emoji'>☀️</span> Darkmode Disabled!";
  }
});

let favsChangeClr = null;

document.getElementById("favlist").addEventListener("click", () => {
  hidea();
  document.getElementById("history").style.display = "none";
  let favsarr = JSON.parse(localStorage.getItem("favs"));
  if (
    document.getElementById("shortcuts-popup").className == "shortcuts-popup"
  ) {
    document.getElementById("shortcuts-popup").classList.add("show");
  } else {
    document.getElementById("shortcuts-popup").classList.remove("show");
  }
  document.getElementById("modaltext").innerHTML =
    "<h1 class='favsheader'><i class='twa twa-1x twa-artist-palette'></i> Your Favourite Colors List</h1></br><h1 class='favsheader' style='font-size:20px'>Liked Colors: " +
    favsarr.length +
    "</h1>";
  ul = document.createElement("div");
  ul.setAttribute("style", "cursor:default");
  document.getElementById("modaltext").appendChild(ul);
  favsarr.forEach((item) => {
    let li = document.createElement("p");
    li.setAttribute("id", "favsli");
    ul.appendChild(li);
    li.innerHTML +=
      "<img loading='lazy' class='favsimg' align='left' src='https://singlecolorimage.com/get/" +
      item.replace("#", "") +
      "/29x44'/>" +
      item +
      "</br>" +
      " " +
      "<span class='favsclrname'>" +
      ntc.name(item)[1] +
      "</span>";
    li.setAttribute(
      "onclick",
      "favsChangeClr = this.textContent.split(' ')[0];ChangeToFav();ifFavClr();l++;this.classList.add('animate__animated', 'animate__backOutRight')"
    );
  });
  const del = document.getElementById("s-delete");
  if (favsarr.length > 0) {
    del.style.display = "block";
  } else {
    del.style.display = "none";
  }
  del.addEventListener("click", () => {
    document.getElementById("shortcuts-popup").classList.remove("show");
    like.style.color = "currentColor";
    localStorage.setItem("favs", "[]");
  });
});

const ChangeToFav = () => {
  document.getElementById("shortcuts-popup").classList.remove("show");
  let x2 = favsChangeClr.replace("#", "");
  // console.log("Changed Color to " + favsChangeClr);
  txt.textContent = favsChangeClr;
  document.body.style.backgroundColor = favsChangeClr;
  document.fgColor = favsChangeClr;
  document.getElementById("color_input").value = favsChangeClr;
  clr_name();
  document.getElementById("divrgb").textContent = "RGB " + x2.convertToRGB();
  link = "https://www.color-hex.com/color/" + x2;
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", favsChangeClr);
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + favsChangeClr;
  locals();
  urlChange();
};

document.getElementById("refresh").addEventListener("click", () => {
  main();
  hidea();
  input_refresh();
  locals();
  historyl();
  clr_name();
  ifFavClr();
  urlChange();
  document.getElementById("shortcuts-popup").classList.remove("show");
  l = 0;
  // const el = document.querySelector(".div1");
  // el.classList.add('animate__animated', 'animate__headShake');
  // el.addEventListener('animationend', () => {
  //     el.classList.remove('animate__animated', 'animate__headShake');
  //     });
});

document.getElementById("github").addEventListener("click", () => {
  window.open(github);
  document.getElementById("shortcuts-popup").classList.remove("show");
});

document.getElementById("close1").addEventListener("click", () => {
  showh();
});

document.getElementById("h-back-to-top").addEventListener("click", () => {
  // window.open('#history', '_self')
  document.getElementById("h").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById("a-close2").addEventListener("click", () => {
  hidea();
});

document.getElementById("main").addEventListener("dblclick", () => {
  document.getElementById("fav").click();
})

document.getElementById("fullscreen").addEventListener("click", () => {
  if (screenfull.isEnabled) {
    if (screenfull.isFullscreen) {
      screenfull.exit();
      if (window.screen.width > 1024) {
        showalert();
        document.getElementById("alertspan").innerHTML =
          "<i class='twa twa-lg twa-desktop-computer'></i> Fullscreen Disabled!";
        console.log("Fullscreen disabled");
      }
      // document.getElementById("fullscreen").style.top = "19em";
      document.getElementById("main").style.display = "flex";
      // document.getElementById("dark-mode-toggle").style.display = "block";
      // document.getElementById("shortcuts").style.display = "block";
      document.getElementById("moreinfo").style.visibility = "visible";
      document.getElementById("copy").style.visibility = "visible";
      document.getElementById("refresh").style.visibility = "visible";
      document.getElementById("github").style.display = "flex";
      // document.getElementById("hbutton").style.display = "block";
      // document.getElementById("color_input").style.display = "block";
    } else {
      screenfull.request();
      if (window.screen.width > 1024) {
        showalert();
        document.getElementById("alertspan").innerHTML =
          "<i class='twa twa-lg twa-desktop-computer'></i> Fullscreen Enabled!";
        console.log("Fullscreen enabled");
      }
      // document.getElementById("fullscreen").style.top = "3em";
      document.getElementById("main").style.display = "none";
      // document.getElementById("dark-mode-toggle").style.display = "none";
      // document.getElementById("shortcuts").style.display = "none";
      document.getElementById("moreinfo").style.visibility = "hidden";
      document.getElementById("copy").style.visibility = "hidden";
      document.getElementById("refresh").style.visibility = "hidden";
      document.getElementById("github").style.display = "none";
      // document.getElementById("hbutton").style.display = "none";
      // document.getElementById("color_input").style.display = "none";
    }
  }
});
//url
const url = "https://maciekt07.github.io/random-color" // http://127.0.0.1:5500 https://maciekt07.github.io/random-color
const urlChange = () => {
  location = url + "/?" + txt.textContent
}
const urlError = () => {
  //change url to previous
  location = url + "/?" + localStorage.getItem("clr");
  setTimeout(() => {
    console.error("ERROR: Invalid Color in URL")
    document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-cross-mark'></i> <span style='color:#FF4B56'>ERROR:</span> Invalid Color in URL"
    showalert();
  }, 300);
}

isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
const urlLoad = () => {
  let urlhex = location.toString().replace(url + "/?", "");
  let urlhexnumber = urlhex.replace("#", "")
  let targetLength  = 49; //30 for http://127.0.0.1:5500 49 for https://maciekt07.github.io/random-color
  if (location.toString().length  == targetLength && isHexColor(urlhexnumber)) {
  document.getElementById("shortcuts-popup").classList.remove("show");
  let url2 = urlhex.replace("#", "");
  txt.textContent = urlhex;
  document.body.style.backgroundColor = urlhex;
  document.fgColor = urlhex;
  document.getElementById("color_input").value = urlhex;
  document.getElementById("divrgb").textContent = "RGB " + url2.convertToRGB();
  link = "https://www.color-hex.com/color/" + url2;
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", urlhex);
  document.getElementById("alertspan").innerHTML =
    "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + urlhex;
  locals();
  urlChange();
  ifFavClr();
} else {
  urlError();
  }
}
urlLoad();

window.addEventListener('hashchange', () => {
  urlLoad();
}, false);


// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-4QTNJRWC58");
