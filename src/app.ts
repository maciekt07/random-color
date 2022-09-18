const hexTxt = document.getElementById("txt") as HTMLDivElement;
const rgbTxt = document.getElementById("divrgb") as HTMLDivElement;
const nameTxt = document.getElementById("name") as HTMLDivElement;
const moreInfoBtn = document.getElementById("moreinfo") as HTMLButtonElement;
const copyBtn = document.getElementById("copy") as HTMLButtonElement;
const refreshBtn = document.getElementById("refresh") as HTMLButtonElement;
const githubBtn = document.getElementById("github");
const mainContent = document.getElementById("main") as HTMLDivElement;

const back = document.getElementById("back") as HTMLSpanElement;
const forward = document.getElementById("forward") as HTMLSpanElement;

const colorInput = document.getElementById("color_input") as HTMLInputElement;
const historyBtn = document.getElementById("hbutton") as HTMLButtonElement;
const shortcutsBtn = document.getElementById("shortcuts") as HTMLButtonElement;
const darkModeToggle = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
const likeBtn = document.getElementById("fav") as HTMLButtonElement;
const likeIcon = document.getElementById("like") as HTMLButtonElement;
const fullscreenBtn = document.getElementById("fullscreen") as HTMLButtonElement;
const shareBtn = document.getElementById("share") as HTMLButtonElement;
const shareIcon = document.getElementById("shareIcon");
const themeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

const historyBackToTop = document.getElementById("h-back-to-top") as HTMLButtonElement;
const historyContainer = document.getElementById("h-container") as HTMLDivElement;
const historyDiv = document.getElementById("history") as HTMLDivElement;
const historyList = document.getElementById("historylist") as HTMLOListElement;
const historyClose = document.getElementById("closeHistory") as HTMLSpanElement;

const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
const alertEmoji = document.getElementById("emoji") as HTMLSpanElement;
const alertText = document.getElementById("alertText") as HTMLSpanElement;
const alertHeader = document.getElementById("header") as HTMLSpanElement;
const alertToast = document.getElementById("toast") as HTMLDivElement;
const alertClick = document.getElementById("alertclick") as HTMLDivElement;

const popup = document.getElementById("shortcuts-popup") as HTMLDivElement as HTMLDivElement;
const popupClose = document.getElementById("closeShortcuts") as HTMLButtonElement;
const popupDeleteAll = document.getElementById("s-delete") as HTMLButtonElement;
const modalTxt = document.getElementById("modaltext") as HTMLDivElement;

const db = document.getElementById("db") as HTMLButtonElement;

let counter: number = 0;
let like: number = 0;
let timer1: ReturnType<typeof setTimeout>;
let timer2: ReturnType<typeof setTimeout>;

let likeTimer1: ReturnType<typeof setTimeout>;
let likeTimer2: ReturnType<typeof setTimeout>;

const hexToRgb = (hex: string) => {
  const int = parseInt(hex, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r} ${g} ${b}`;
};

const isHexColor = (hex: string) => typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));

// const changeAttr = (element: Element, atribute: string, content: string) => element.setAttribute(atribute, content);

const loadColor = (hex: string) => {
  if (isHexColor(hex.replace("#", ""))) {
    document.body.style.backgroundColor = hex;
    document.fgColor = hex;
    hexTxt.innerHTML = hex;
    rgbTxt.innerHTML = `RGB ${hexToRgb(hex.replace("#", ""))}`;
    colorInput.value = hex;
    themeColor.setAttribute("content", hex);
    // document.querySelector(":root").style.setProperty("--color", hex);
  } else {
    showAlert("<i class='fa-solid fa-xmark'></i>", "Load Color Error", `Invalid hex color: ${hex}`);
  }
};

const main = () => {
  counter++;
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + ("000000" + randomColor).slice(-6);
  loadColor(randomColor);
  setTimeout(() => {
    console.log(`%c${counter}. | ${hexTxt.textContent} | ${nameTxt.textContent} | RGB ${hexToRgb(hexTxt.textContent.replace("#", ""))}`, `color:${randomColor}`);
  }, 25);
  counter > 3 ? (historyBackToTop.style.display = "block") : (historyBackToTop.style.display = "none");
};

mainContent.classList.add("animate__animated", "animate__headShake");
setTimeout(() => {
  mainContent.classList.remove("animate__animated", "animate__headShake");
}, 1000);

window.onblur = () => {
  document.title = `Random Color - ${colorInput.value}`;
}; //title
window.onfocus = () => {
  document.title = "Random Color Tool";
};

const showAlert = (emoji: string, header: string, text: string, url: string = null, openInNewWindow: boolean = false) => {
  hideAlert();
  setTimeout(() => {
    progress.classList.remove("active");
    alertToast.classList.remove("active");
    clearTimeout(timer1);
    clearTimeout(timer2);

    emoji == "_none" ? (alertEmoji.style.display = "none") : (alertEmoji.style.display = "flex");

    alertEmoji.innerHTML = emoji;
    alertHeader.innerHTML = header;
    alertText.innerHTML = text;
    // alert onclick
    if (url != null) {
      alertClick.style.cursor = "pointer";
      if (openInNewWindow) {
        alertClick.onclick = () => {
          window.open(url, "_blank");
        };
      } else {
        alertClick.onclick = () => {
          (<any>window).location = url;
        };
      }
    } else {
      alertClick.style.cursor = "default";
      alertClick.onclick = null;
    }

    alertToast.style.display = "block";
    //disable scrollbar for 500ms
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);

    setTimeout(() => {
      toast.classList.add("active");
      progress.classList.add("active");
    }, 10);

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
      document.body.style.overflow = "hidden";
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
      document.body.style.overflow = "auto";
      alertToast.style.display = "none";
    }, 5300);

    // popup.classList.remove("show");
  }, 50);
};

const hideAlert = () => {
  toast.classList.remove("active");

  progress.classList.remove("active");

  clearTimeout(timer1);
  clearTimeout(timer2);
  document.getElementById("toast").style.display = "none";
};

closeIcon.addEventListener("click", hideAlert);

let hclrx: Array<string> = [];
const addToHistoryList = () => {
  setTimeout(() => {
    historyList.innerHTML += `<li><span id='historyhex' onclick='hclrx.push(this.textContent);changeColorFromHistory()'><img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/${colorInput.value.replace("#", "")}/25x25'/>${colorInput.value}</span> | ${
      nameTxt.textContent
    }<hr><br></li>`;
  }, 50);
};

const changeColorFromHistory = () => {
  loadColor(hclrx[hclrx.length - 1]);
  saveColor();
  urlChange();
};

historyDiv.style.display = "none";

if (window.matchMedia("(pointer: coarse)").matches) {
  document.getElementById("h").style.overflowY = "auto";
}

const showHistory = () => {
  if (historyDiv.style.display === "none") {
    historyDiv.style.display = "block";
    historyContainer.style.display = "flex";
  } else {
    historyDiv.style.display = "none";
    historyContainer.style.display = "none";
  }
};

shortcutsBtn.addEventListener("click", () => {
  popupDeleteAll.style.display = "none";
  historyDiv.style.display = "none";
  popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
  modalTxt.innerHTML =
    '<h1 class="s-header"><i class="twa twa-lg twa-keyboard"></i> Keyboard Shortcuts</h1><br> <table> <tr> <td> <p class="s-p">Generate Random Color </p> </td> <td><span class="key">R</span></td> </tr> <tr> <td> <p class="s-p">Change Theme Color </p> </td> <td><span class="key">T</span></td> </tr> <tr> <td> <p class="s-p">Copy Text </p> </td> <td><span class="key">C</span></td> </tr> <tr> <td> <p class="s-p">Open Eye Dropper </p> </td> <td><span class="key">P</span></td> </tr> <tr> <td> <p class="s-p">Toggle Fullscreen </p> </td> <td><span class="key">F</span></td> </tr> <tr> <td> <p class="s-p">Show More Info </p> </td> <td><span class="key">M</span></td> </tr> <tr> <td> <p class="s-p">Show History List </p> </td> <td><span class="key">H</span></td> </tr> <td> <p class="s-p">Like Color </p> </td> <td><span class="key">L</span></td> </tr><tr> <td> <p class="s-p">Liked Colors List </p> </td> <td><span class="key">O</span></td> </tr><tr> <td> <p class="s-p">Show Shortcuts </p> </td> <td><span class="key">/</span></td><tr></tr></table>';
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

const copyToClipboard = (txt: string) => navigator.clipboard.writeText(txt);

const clrpicker = () => {
  colorInput.addEventListener("input", () => {
    loadColor(colorInput.value);
  });
};

// if (document.location.search.match(/type=embed/gi)) {
//   window.parent.postMessage("resize", "*");
// }

colorInput.addEventListener("change", () => {
  saveColor();
  urlChange();
  isFavColor();
  like = 0;
});

let rpt: number = 0;

colorInput.addEventListener("click", () => {
  isFavColor();
  like = 0;
  if (rpt == 0) {
    //bug fix for color picker
    colorInput.click();
    db.click();
  }
  rpt++;
  clrpicker();
  saveColor();
  popup.classList.remove("show");
});

historyBtn.addEventListener("click", () => {
  showHistory();
  popup.classList.remove("show");
});

moreInfoBtn.addEventListener("click", () => {
  window.open(`https://www.color-hex.com/color/${colorInput.value.replace("#", "")}`);
  popup.classList.remove("show");
});

setTimeout(() => {
  sessionStorage.setItem("firstSessionClr", colorInput.value);
}, 50);

back.addEventListener("click", () => {
  if (sessionStorage.getItem("firstSessionClr") != colorInput.value) {
    history.go(-1);
  }
});
forward.addEventListener("click", () => {
  history.go(1);
});

copyBtn.addEventListener("click", () => {
  copyToClipboard(colorInput.value);
  console.log(`Copied to clipboard ${colorInput.value}`);
  showAlert("<i class='fa-solid fa-clipboard'></i>", "Copy", `Copied to clipboard: <b>${colorInput.value}</b>`);
});

const removeFromFavs = (arr: Array<string>, item: string) => {
  let newArray = [...arr];
  const index = newArray.findIndex((element) => element === item);
  if (index !== -1) {
    newArray.splice(index, 1);
    return newArray;
  }
};

const uniqueFavs = (array: Array<string>) => array.filter((currentValue: string, index: number, arr: Array<string>) => arr.indexOf(currentValue) === index);

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
    if (localStorage.getItem("favs").includes(hexTxt.textContent) || localStorage.getItem("favs").includes(colorInput.value)) {
      likeIcon.style.color = "#FF2E78";
      like = 1;
      likeBtn.setAttribute("title", "Remove From Favorites");
      return true;
    } else {
      likeIcon.style.color = "currentColor";
      like = 2;
      likeBtn.setAttribute("title", "Add To Favorites");
      return false;
    }
  }
};

likeBtn.addEventListener("mouseover", isFavColor);

const removeItemFromFavs = (item: string) => {
  //remove from favs
  let favsNew = JSON.parse(localStorage.getItem("favs"));
  localStorage.removeItem("favs");
  if (localStorage.getItem("favs") == null) {
    localStorage.setItem("favs", "[]");
  }
  localStorage.setItem("favs", JSON.stringify(removeFromFavs(favsNew, item)));
  isFavColor();
  showAlert("<i class='fa-solid fa-heart-crack'></i>", "Liked Colors", `Removed from your liked colors: <b>${item}</b>`);
};

likeBtn.addEventListener("click", () => {
  clearTimeout(likeTimer1);
  clearTimeout(likeTimer2);
  popup.classList.add("show");
  popup.classList.remove("show");

  addToFavs();
  like++;
  navigator.vibrate(150);
  if (like % 2 != 0) {
    likeIcon.style.color = "#FF2E78";
    showAlert("<i class='fa-solid fa-heart'></i>", "Liked Colors", `Added to your liked colors: <b>${colorInput.value}</b>`);
    likeIcon.classList.add("fa-beat");
    likeTimer1 = setTimeout(() => {
      likeIcon.classList.remove("fa-beat");
    }, 2050);
  } else {
    removeItemFromFavs(colorInput.value);
    likeIcon.classList.remove("fa-beat");
    likeIcon.style.color = "currentColor";
    likeIcon.classList.add("fa-shake");
    likeTimer2 = setTimeout(() => {
      likeIcon.classList.remove("fa-shake");
    }, 600);
  }
});

const saveColor = () => {
  if (isHexColor(hexTxt.textContent.replace("#", ""))) {
    localStorage.setItem("clr", hexTxt.textContent);
  }
};

if (localStorage.getItem("clr") != null) {
  counter++;
  like = 1;
  loadColor(localStorage.getItem("clr"));
  setTimeout(() => {
    console.log(`%c${counter}. | ${hexTxt.textContent} | ${nameTxt.textContent} | RGB ${hexToRgb(hexTxt.textContent.replace("#", ""))}`, `color:${localStorage.getItem("clr")}`);
    addToHistoryList();
  }, 500);
} else {
  likeBtn.click();
  hideAlert();
  document.getElementById("s-delete").click();
  likeBtn.click();
  hideAlert();
  main();
  setTimeout(() => {
    addToHistoryList();
  }, 800);
  like++;
}
saveColor();

let darkMode = localStorage.getItem("darkMode");

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
  likeBtn.style.transition = "0s all";
  setTimeout(() => {
    likeBtn.style.transition = "all 0.4s";
  }, 400);
  hideAlert();
  popup.classList.remove("show");
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log("%cDarkmode Enabled!🌙", "color:#bd9ff5;");
    setTimeout(() => {
      showAlert('<i class="fa-solid fa-moon"></i>', "Darkmode", "Darkmode Enabled");
    }, 320);
  } else {
    disableDarkMode();
    console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
    setTimeout(() => {
      showAlert('<i class="fa-solid fa-sun"></i>', "Darkmode", "Darkmode Disabled");
    }, 320);
  }
});

darkModeToggle.addEventListener("mouseover", () => {
  darkModeToggle.setAttribute("title", `${localStorage.getItem("darkMode") == "enabled" ? "Disable Darkmode" : "Enable Darkmode"}`);
});

const delClick = () => {
  setTimeout(() => {
    history.back();
  }, 30);
  setTimeout(() => {
    document.getElementById("favlist").click();
  }, 50);
};

const delFavClick = () => {
  setTimeout(() => {
    document.getElementById("favlist").click();
  }, 25);
};
let favsChangeClr: any = null;
document.getElementById("favlist").addEventListener("click", () => {
  hideAlert();
  document.getElementById("history").style.display = "none";
  const favsarr = JSON.parse(localStorage.getItem("favs"));
  popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
  modalTxt.innerHTML = `<h1 class='favsheader'><i class='twa twa-1x twa-artist-palette''></i> Your Liked Colors List</h1></br><h1 class='favstext''>
    ${favsarr.length > 0 ? "Liked Colors: " + favsarr.length : "Colors you like will appear here<br><br><span class='favssmalltext'></i>Save colors by tapping the heart icon <i style='color:red' class='fa-solid fa-heart fa-beat'></i></span>"}
    </h1>`;
  const ul = document.createElement("div");
  ul.setAttribute("style", "cursor:default");
  modalTxt.appendChild(ul);
  favsarr.forEach((item: number) => {
    let p = document.createElement("p");
    const del = `<i id="delFromFavs" onclick="removeItemFromFavs('${item}');${isFavColor() ? "delFavClick()" : "delClick()"}" title="Delete From Favs: ${item}" class="fa-solid fa-trash-can fa-sm"></i>`;
    const img = `<img loading='lazy' class='favsimg' align='left' src='https://singlecolorimage.com/get/${item}/29x44'/>`.replace("#", "");
    p.setAttribute("id", "favsli");
    ul.appendChild(p);
    //@ts-ignore
    p.innerHTML += `${img}<div style="margin-left:65px"><span class='favshex'>${item}</span></br>${del} <span class='favsclrname'>${ntc.name(item)[1]}</span></div>`;
    p.setAttribute("onclick", "favsChangeClr = this.textContent.split(' ')[0];ChangeToFav()");
    //@ts-ignore
    p.setAttribute("title", `Change Color To: ${item} (${ntc.name(item)[1]})`);
  });
  favsarr.length > 0 ? (popupDeleteAll.style.display = "block") : (popupDeleteAll.style.display = "none");

  popupDeleteAll.addEventListener("click", () => {
    const deleted = JSON.parse(localStorage.getItem("favs"));
    like = 2;
    popup.classList.remove("show");
    likeIcon.style.color = "currentColor";
    localStorage.setItem("favs", "[]");
    setTimeout(() => {
      showAlert("<i class='fa-solid fa-trash-can'></i>", "Favourite List", "All favourite color have been deleted<br>");
      console.log(`Deleted from favourites: ${deleted.toString()}`);
    }, 200);
  });
});

const ChangeToFav = () => {
  popup.classList.remove("show");
  loadColor(favsChangeClr);
  saveColor();
  urlChange();
};

refreshBtn.addEventListener("click", () => {
  setTimeout(() => {
    addToHistoryList();
  }, 10);
  main();
  saveColor();
  urlChange();
  popup.classList.remove("show");
  like = 0;
});

githubBtn.addEventListener("click", () => {
  window.open("https://github.com/maciekt07", "_blank");
  popup.classList.remove("show");
});

historyClose.addEventListener("click", showHistory);

historyBackToTop.addEventListener("click", () => {
  document.getElementById("h").scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    if (window.screen.width > 1024) {
      showAlert("<i class='fa-solid fa-display'></i>", "Fullscreen", "Fullscreen Enabled!");
      console.log("Fullscreen enabled");
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    if (window.screen.width > 1024) {
      showAlert("<i class='fa-solid fa-display'></i>", "Fullscreen", "Fullscreen Disabled!");
      console.log("Fullscreen disabled");
    }
  }
};
fullscreenBtn.addEventListener("click", toggleFullScreen);

shareBtn.addEventListener("click", async () => {
  navigator.vibrate(150);
  shareIcon.classList.add("fa-flip");
  shareIcon.style.color = "#48b4ea";
  setTimeout(() => {
    shareIcon.classList.remove("fa-flip");
    shareIcon.style.color = "var(--foreground)";
  }, 2000);

  let shareData = {
    title: "Random Color Tool By maciekt07",
    text: `Check out this cool color: ${colorInput.value}`,
    url: location.toString(),
  };
  try {
    await navigator.share(shareData);
    console.log("Shared color successfully");
  } catch (err) {
    console.log(`Share Error: ${err}`);
    if (err != "AbortError: Share canceled") {
      // copy link to clipboard if browser doesn't support sharing
      copyToClipboard(location.toString());
      showAlert("<i class='fa-solid fa-clipboard fa-sm'></i>", "Share", "Copied URL to clipboard!");
    }
  }
});
const appUrl = `${location.origin}/`;
const urlChange = () => {
  (<any>window).location = `${appUrl}?${colorInput.value}`;
};
const urlError = () => {
  //change url to previous
  const errorURL: string = (<any>window).location.hash;
  (<any>window).location = `${appUrl}?${localStorage.getItem("clr")}`;
  setTimeout(() => {
    console.error("ERROR: Invalid Color in URL");
    showAlert("<i class='fa-solid fa-xmark'></i>", "URL", `Invalid Color in URL:<b> ${errorURL}</b>`);
  }, 300);
};

const urlLoad = () => {
  const urlhex = location.toString().replace(`${appUrl}?`, "").toLowerCase();
  const urlhexnumber = urlhex.replace("#", "").toLowerCase();
  if (isHexColor(urlhexnumber)) {
    loadColor(urlhex);
    saveColor();
    urlChange();
    isFavColor();
  } else {
    urlError();
  }
};
urlLoad();

if ((<any>window).location != `${appUrl}?${colorInput.value}`) {
  urlError();
}

window.addEventListener("hashchange", () => {
  urlLoad();
  isFavColor();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => console.log("Service Worker: Registered"))
      .catch((err) => console.log(`Service Worker: Error ${err}`));
  });
}

const donateLink = "https://www.buymeacoffee.com/maciekt07";

setTimeout(() => {
  showAlert(
    "<img src='https://avatars.githubusercontent.com/u/85953204?v=4'style='border-radius:8px;cursor:default' width='48px'>",
    "Donate",
    `If you like this app you can donate me ${localStorage.getItem("darkMode") == "enabled" ? "💜" : "💙"} <br><a target='_blank' href='${donateLink}'>${donateLink}</a>`,
    donateLink,
    true
  );
}, Math.floor(Math.random() * (52000 - 16000 + 1)) + 16000);

window.addEventListener("offline", () => {
  showAlert("📴", "Conection", `You're offline`);
  window.addEventListener("online", () => {
    showAlert("<i class='fa-solid fa-globe'></i>", "Conection", `You're online again`);
  });
});
