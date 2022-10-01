"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const hexTxt = document.getElementById("txt");
const rgbTxt = document.getElementById("divrgb");
const nameTxt = document.getElementById("name");
const moreInfoBtn = document.getElementById("moreinfo");
const copyBtn = document.getElementById("copy");
const refreshBtn = document.getElementById("refresh");
const githubBtn = document.getElementById("github");
const mainContent = document.getElementById("main");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
const colorInput = document.getElementById("color_input");
const historyBtn = document.getElementById("hbutton");
const shortcutsBtn = document.getElementById("shortcuts");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const likeBtn = document.getElementById("fav");
const likeIcon = document.getElementById("like");
const fullscreenBtn = document.getElementById("fullscreen");
const shareBtn = document.getElementById("share");
const shareIcon = document.getElementById("shareIcon");
const newItem = document.getElementById("newitem");
const favList = document.getElementById("favlist");
const themeColor = document.querySelector('meta[name="theme-color"]');
const historyBackToTop = document.getElementById("h-back-to-top");
const historyContainer = document.getElementById("h-container");
const historyDiv = document.getElementById("history");
const historyList = document.getElementById("historylist");
const historyClose = document.getElementById("closeHistory");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
const alertEmoji = document.getElementById("emoji");
const alertText = document.getElementById("alertText");
const alertHeader = document.getElementById("header");
const alertToast = document.getElementById("toast");
const alertClick = document.getElementById("alertclick");
const popup = document.getElementById("shortcuts-popup");
const popupClose = document.getElementById("closeShortcuts");
const popupDeleteAll = document.getElementById("s-delete");
const modalTxt = document.getElementById("modaltext");
const db = document.getElementById("db");
let counter = 0;
let like = 0;
let AlertTimer1;
let AlertTimer2;
let likeTimer1;
let likeTimer2;
const hexToRgb = (hex) => {
    const int = parseInt(hex, 16);
    const r = (int >> 16) & 255;
    const g = (int >> 8) & 255;
    const b = int & 255;
    return `${r} ${g} ${b}`;
};
const isHexColor = (hex) => typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex));
// const changeAttr = (element: Element, atribute: string, content: string) => element.setAttribute(atribute, content);
const loadColor = (hex) => {
    if (isHexColor(hex.replace("#", ""))) {
        document.body.style.backgroundColor = hex;
        document.fgColor = hex;
        hexTxt.innerHTML = hex;
        rgbTxt.innerHTML = `RGB ${hexToRgb(hex.replace("#", ""))}`;
        colorInput.value = hex;
        themeColor.setAttribute("content", hex);
        // document.querySelector(":root").style.setProperty("--color", hex);
    }
    else {
        showAlert("<i class='fa-solid fa-xmark'></i>", "Load Color Error", `Invalid hex color: ${hex}`);
    }
};
const tooltip = (element, content) => {
    element.setAttribute("data-tooltip", content);
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
const showAlert = (emoji, header, text, url = null, openInNewWindow = false) => {
    hideAlert();
    setTimeout(() => {
        progress.classList.remove("active");
        alertToast.classList.remove("active");
        clearTimeout(AlertTimer1);
        clearTimeout(AlertTimer2);
        emoji === null ? (alertEmoji.style.display = "none") : (alertEmoji.style.display = "flex");
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
            }
            else {
                alertClick.onclick = () => {
                    window.location = url;
                };
            }
        }
        else {
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
        AlertTimer1 = setTimeout(() => {
            toast.classList.remove("active");
            document.body.style.overflow = "hidden";
        }, 5000);
        AlertTimer2 = setTimeout(() => {
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
    clearTimeout(AlertTimer1);
    clearTimeout(AlertTimer2);
    document.getElementById("toast").style.display = "none";
};
closeIcon.addEventListener("click", hideAlert);
let hclrx = [];
const addToHistoryList = () => {
    setTimeout(() => {
        historyList.innerHTML += `<li><span id='historyhex' onclick='hclrx.push(this.textContent);changeColorFromHistory()'><img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/${colorInput.value.replace("#", "")}/25x25'/>${colorInput.value}</span> | ${nameTxt.textContent}<hr><br></li>`;
    }, 50);
};
const changeColorFromHistory = () => {
    loadColor(hclrx[hclrx.length - 1]);
    saveColor();
    urlChange();
};
historyDiv.style.display = "none";
tooltip(historyBtn, "Show History");
const showHistory = () => {
    if (historyDiv.style.display === "none") {
        historyDiv.style.display = "block";
        historyContainer.style.display = "flex";
        tooltip(historyBtn, "Hide History");
    }
    else {
        historyDiv.style.display = "none";
        historyContainer.style.display = "none";
        tooltip(historyBtn, "Show History");
    }
};
shortcutsBtn.addEventListener("click", () => {
    popupDeleteAll.style.display = "none";
    historyDiv.style.display = "none";
    popup.className === "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
    modalTxt.innerHTML =
        '<h1 class="s-header"><i class="twa twa-lg twa-keyboard"></i> Keyboard Shortcuts</h1><br> <table> <tr> <td> <p class="s-p">Generate Random Color </p> </td> <td><span class="key">R</span></td> </tr> <tr> <td> <p class="s-p">Change Theme Color </p> </td> <td><span class="key">T</span></td> </tr> <tr> <td> <p class="s-p">Copy Text </p> </td> <td><span class="key">C</span></td> </tr> <tr> <td> <p class="s-p">Open Eye Dropper </p> </td> <td><span class="key">P</span></td> </tr> <tr> <td> <p class="s-p">Toggle Fullscreen </p> </td> <td><span class="key">F</span></td> </tr> <tr> <td> <p class="s-p">Show More Info </p> </td> <td><span class="key">M</span></td> </tr> <tr> <td> <p class="s-p">Show History List </p> </td> <td><span class="key">H</span></td> </tr> <td> <p class="s-p">Like Color </p> </td> <td><span class="key">L</span></td> </tr><tr> <td> <p class="s-p">Liked Colors List </p> </td> <td><span class="key">O</span></td> </tr><tr> <td> <p class="s-p">Show Shortcuts </p> </td> <td><span class="key">/</span></td><tr></tr></table>';
});
tooltip(shortcutsBtn, "Shortcuts");
popupClose.addEventListener("click", () => {
    popup.classList.remove("show");
});
const copyToClipboard = (txt) => navigator.clipboard.writeText(txt);
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
let rpt = 0;
colorInput.addEventListener("click", () => {
    isFavColor();
    like = 0;
    if (rpt === 0) {
        //bug fix for color picker
        colorInput.click();
        db.click();
    }
    rpt++;
    clrpicker();
    saveColor();
    popup.classList.remove("show");
});
colorInput.setAttribute("data-tooltip", "Set Custom Color");
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
    showAlert("<i class='fa-solid fa-clipboard '></i>", "Copy", `Copied to clipboard: <b>${colorInput.value}</b>`);
});
const removeFromFavs = (arr, item) => {
    let newArray = [...arr];
    const index = newArray.findIndex((element) => element === item);
    if (index !== -1) {
        newArray.splice(index, 1);
        return newArray;
    }
};
const uniqueFavs = (array) => array.filter((currentValue, index, arr) => arr.indexOf(currentValue) === index);
//new item badge next to liked colors list icon
const newItemShow = () => {
    newItem.classList.add("animate__animated", "animate__bounceIn");
    newItem.style.display = "flex";
    localStorage.setItem("newItem", "true");
};
const newItemHide = () => {
    newItem.style.display = "none";
    localStorage.setItem("newItem", "false");
};
// newItem.addEventListener("animationend", () => {
//   newItem.classList.remove("animate__animated", "animate__bounceIn");
// });
if (localStorage.getItem("newItem") === "true") {
    newItemShow();
}
else {
    newItemHide();
}
const addToFavs = () => {
    let new_favs = colorInput.value;
    if (localStorage.getItem("favs") === null) {
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
            return true;
        }
        else {
            likeIcon.style.color = "currentColor";
            like = 2;
            return false;
        }
    }
};
// tooltip for like button
likeBtn.addEventListener("mouseover", () => {
    setTimeout(() => {
        tooltip(likeBtn, `${localStorage.getItem("favs").includes(colorInput.value) ? "remove from liked colors" : "add to liked colors"}`);
    }, 50);
});
likeBtn.addEventListener("click", () => {
    setTimeout(() => {
        tooltip(likeBtn, `${localStorage.getItem("favs").includes(colorInput.value) ? "remove from liked colors" : "add to liked colors"}`);
    }, 50);
});
const removeItemFromFavs = (item) => {
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
        newItemShow();
        likeIcon.classList.add("fa-beat");
        likeTimer1 = setTimeout(() => {
            likeIcon.classList.remove("fa-beat");
        }, 2050);
    }
    else {
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
}
else {
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
    hideAlert();
    popup.classList.remove("show");
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log("%cDarkmode Enabled!🌙", "color:#bd9ff5;");
        setTimeout(() => {
            showAlert('<i class="fa-solid fa-moon"></i>', "Darkmode", "Darkmode Enabled");
        }, 320);
    }
    else {
        disableDarkMode();
        console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
        setTimeout(() => {
            showAlert('<i class="fa-solid fa-sun"></i>', "Darkmode", "Darkmode Disabled");
        }, 320);
    }
});
darkModeToggle.addEventListener("mouseover", () => {
    tooltip(darkModeToggle, `${localStorage.getItem("darkMode") == "enabled" ? "Disable Darkmode" : "Enable Darkmode"}`);
});
darkModeToggle.addEventListener("click", () => {
    tooltip(darkModeToggle, `${localStorage.getItem("darkMode") == "enabled" ? "Disable Darkmode" : "Enable Darkmode"}`);
});
const delClick = () => {
    setTimeout(() => {
        history.back();
    }, 30);
    setTimeout(() => {
        favList.click();
    }, 50);
};
const delFavClick = () => {
    setTimeout(() => {
        favList.click();
    }, 25);
};
let favsChangeClr = null;
favList.addEventListener("click", () => {
    hideAlert();
    newItemHide();
    historyDiv.style.display = "none";
    const favsarr = JSON.parse(localStorage.getItem("favs"));
    popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
    modalTxt.innerHTML = `<h1 class='favsheader'><i class='twa twa-1x twa-artist-palette''></i> Your Liked Colors List</h1></br><h1 class='favstext''>
    ${favsarr.length > 0 ? "Liked Colors: " + favsarr.length : "<span class='emptyspacetxt'>Colors you like will appear here. <br> Save colors by tapping the heart icon <i style='color:red' class='fa-solid fa-heart fa-beat'></i></span>"}
    </h1>`;
    const ul = document.createElement("div");
    ul.setAttribute("style", "cursor:default");
    modalTxt.appendChild(ul);
    favsarr.forEach((item) => {
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
// tooltip for liked colors list button
favList.addEventListener("mouseover", () => {
    tooltip(favList, `your liked colors list ${JSON.parse(localStorage.getItem("favs")).length > 0 ? "[" + JSON.parse(localStorage.getItem("favs")).length + "]" : ""}`);
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
tooltip(fullscreenBtn, "Enable Fullscreen");
const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        if (window.screen.width > 1024) {
            showAlert("<i class='fa-solid fa-display'></i>", "Fullscreen", "Fullscreen Enabled!");
            tooltip(fullscreenBtn, "Disable Fullscreen");
            console.log("Fullscreen enabled");
        }
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen();
        if (window.screen.width > 1024) {
            showAlert("<i class='fa-solid fa-display'></i>", "Fullscreen", "Fullscreen Disabled!");
            tooltip(fullscreenBtn, "Enable Fullscreen");
            console.log("Fullscreen disabled");
        }
    }
};
fullscreenBtn.addEventListener("click", toggleFullScreen);
shareBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
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
        yield navigator.share(shareData);
        console.log("Shared color successfully");
    }
    catch (err) {
        console.log(`Share Error: ${err}`);
        if (err != "AbortError: Share canceled") {
            // copy link to clipboard if browser doesn't support sharing
            copyToClipboard(location.toString());
            showAlert("<i class='fa-solid fa-clipboard fa-sm'></i>", "Share", "Copied URL to clipboard!");
        }
    }
}));
shareBtn.addEventListener("mouseover", () => {
    tooltip(shareBtn, `share color: ${colorInput.value}`);
});
const appUrl = `${location.origin}/`;
const urlChange = () => {
    window.location = `${appUrl}?${colorInput.value}`;
};
const urlError = () => {
    //change url to previous
    const errorURL = window.location.hash;
    window.location = `${appUrl}?${localStorage.getItem("clr")}`;
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
    }
    else {
        urlError();
    }
};
urlLoad();
if (window.location != `${appUrl}?${colorInput.value}`) {
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
    showAlert("<img src='https://avatars.githubusercontent.com/u/85953204?v=4'style='border-radius:8px;cursor:default' width='48px'>", "Donate", `If you like this app you can donate me ${localStorage.getItem("darkMode") == "enabled" ? "💜" : "💙"} <br><a target='_blank' href='${donateLink}'>${donateLink}</a>`, donateLink, true);
}, Math.floor(Math.random() * (52000 - 16000 + 1)) + 16000);
window.addEventListener("offline", () => {
    showAlert("📴", "Conection", `You're offline`);
    window.addEventListener("online", () => {
        showAlert("<i class='fa-solid fa-globe'></i>", "Conection", `You're online again`);
    });
});
