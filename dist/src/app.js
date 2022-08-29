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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hexTxt = document.getElementById("txt");
var rgbTxt = document.getElementById("divrgb");
var nameTxt = document.getElementById("name");
var moreInfoBtn = document.getElementById("moreinfo");
var copyBtn = document.getElementById("copy");
var refreshBtn = document.getElementById("refresh");
var githubBtn = document.getElementById("github");
var mainContent = document.getElementById("main");
var back = document.getElementById("back");
var forward = document.getElementById("forward");
var colorInput = document.getElementById("color_input");
var historyBtn = document.getElementById("hbutton");
var shortcutsBtn = document.getElementById("shortcuts");
var darkModeToggle = document.getElementById("dark-mode-toggle");
var likeBtn = document.getElementById("fav");
var likeIcon = document.getElementById("like");
var fullscreenBtn = document.getElementById("fullscreen");
var shareBtn = document.getElementById("share");
var shareIcon = document.getElementById("shareIcon");
var themeColor = document.querySelector('meta[name="theme-color"]');
var historyBackToTop = document.getElementById("h-back-to-top");
var historyDiv = document.getElementById("history");
var historyList = document.getElementById("historylist");
var historyClose = document.getElementById("closeHistory");
var popup = document.getElementById("shortcuts-popup");
var popupClose = document.getElementById("closeShortcuts");
var popupDeleteAll = document.getElementById("s-delete");
var modalTxt = document.getElementById("modaltext");
var messageAlert = document.getElementById("alert");
var alertClose = document.getElementById("closeAlert");
var counter = 0;
var like = 0;
var hexToRgb = function (hex) {
    var int = parseInt(hex, 16);
    var r = (int >> 16) & 255;
    var g = (int >> 8) & 255;
    var b = int & 255;
    return r + " " + g + " " + b;
};
var isHexColor = function (hex) { return typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex)); };
var loadColor = function (hex) {
    document.body.style.backgroundColor = hex;
    document.fgColor = hex;
    hexTxt.innerHTML = hex;
    rgbTxt.innerHTML = "RGB " + hexToRgb(hex.replace("#", ""));
    colorInput.value = hex;
    themeColor.setAttribute("content", hex);
    // document.querySelector(":root").style.setProperty("--color", hex);
};
var main = function () {
    counter++;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = "#" + ("000000" + randomColor).slice(-6);
    loadColor(randomColor);
    console.log("%c" + counter + ". | " + hexTxt.textContent + " | " + nameTxt.textContent + " | RGB " + hexToRgb(hexTxt.textContent.replace("#", "")), "color:" + randomColor);
    if (counter > 3) {
        historyBackToTop.style.display = "block";
    }
};
mainContent.classList.add("animate__animated", "animate__headShake");
setTimeout(function () {
    mainContent.classList.remove("animate__animated", "animate__headShake");
}, 1000);
window.onblur = function () {
    document.title = "Random Color - " + colorInput.value;
}; //title
window.onfocus = function () {
    document.title = "Random Color Tool";
};
messageAlert.style.setProperty("--animate-duration", "0.6s");
var showAlert = function (start, end, emoji, text) {
    hideAlert();
    document.getElementById("alertspan").innerHTML = "<span class='alert-emoji'>" + emoji + "</span> " + text;
    messageAlert.style.display = "block";
    messageAlert.classList.add("animate__animated", "animate__fadeInDown");
    messageAlert.addEventListener("animationend", function () {
        messageAlert.classList.remove("animate__animated", "animate__fadeInDown");
        setTimeout(function () {
            messageAlert.classList.add("animate__animated", "animate__fadeOut");
        }, start);
        setTimeout(function () {
            hideAlert();
            messageAlert.classList.remove("animate__animated", "animate__fadeOut");
        }, end);
    });
    popup.classList.remove("show");
};
var hideAlert = function () {
    //hide alert
    messageAlert.style.display = "none";
    messageAlert.classList.remove("animate__animated", "animate__fadeInDown", "animate__faster");
    messageAlert.classList.remove("animate__animated", "animate__fadeOut");
};
var hclrx = [];
var addToHistoryList = function () {
    document.getElementById("historylist").innerHTML +=
        "<li>" +
            "<span id='historyhex' onclick='hclrx.push(this.textContent);changeColorFromHistory();hideAlert()'>" +
            "<img loading=lazy class='hclrimg' src='https://singlecolorimage.com/get/" +
            hexTxt.textContent.replace("#", "") +
            "/25x25'/>" +
            hexTxt.textContent +
            "</span>" +
            " | " +
            nameTxt.textContent +
            "<hr><br></li>";
};
var changeColorFromHistory = function () {
    loadColor(hclrx[hclrx.length - 1]);
    locals();
    urlChange();
};
historyDiv.style.display = "none";
var showHistory = function () {
    historyDiv.style.display === "none" ? (historyDiv.style.display = "block") : (historyDiv.style.display = "none");
};
shortcutsBtn.addEventListener("click", function () {
    popupDeleteAll.style.display = "none";
    historyDiv.style.display = "none";
    popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
    modalTxt.innerHTML =
        '<h1 class="s-header"><i class="twa twa-lg twa-keyboard"></i> Keyboard Shortcuts</h1><br> <table> <tr> <td> <p class="s-p">Generate Random Color </p> </td> <td><span class="key">R</span></td> </tr> <tr> <td> <p class="s-p">Change Theme Color </p> </td> <td><span class="key">T</span></td> </tr> <tr> <td> <p class="s-p">Copy Text </p> </td> <td><span class="key">C</span></td> </tr> <tr> <td> <p class="s-p">Open Eye Dropper </p> </td> <td><span class="key">P</span></td> </tr> <tr> <td> <p class="s-p">Toggle Fullscreen </p> </td> <td><span class="key">F</span></td> </tr> <tr> <td> <p class="s-p">Show More Info </p> </td> <td><span class="key">M</span></td> </tr> <tr> <td> <p class="s-p">Show History List </p> </td> <td><span class="key">H</span></td> </tr> <td> <p class="s-p">Like Color </p> </td> <td><span class="key">L</span></td> </tr><tr> <td> <p class="s-p">Liked Colors List </p> </td> <td><span class="key">O</span></td> </tr><tr> <td> <p class="s-p">Show Shortcuts </p> </td> <td><span class="key">/</span></td><tr></tr></table>';
});
popupClose.addEventListener("click", function () {
    popup.classList.remove("show");
});
var copyToClipboard = function (txt) { return navigator.clipboard.writeText(txt); };
var clrpicker = function () {
    colorInput.addEventListener("input", function () {
        hideAlert();
        loadColor(colorInput.value);
    });
};
if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
darkModeToggle.addEventListener("click", function () {
    hideAlert();
    popup.classList.remove("show");
});
var rpt = 0;
colorInput.addEventListener("change", function () {
    locals();
    urlChange();
    isFavColor();
    like = 0;
});
colorInput.addEventListener("click", function () {
    isFavColor();
    like = 0;
    if (rpt == 0) {
        //bug fix for color picker
        colorInput.click();
        document.getElementById("db").click();
    }
    rpt++;
    clrpicker();
    locals();
    popup.classList.remove("show");
});
historyBtn.addEventListener("click", function () {
    showHistory();
    popup.classList.remove("show");
});
moreInfoBtn.addEventListener("click", function () {
    window.open("https://www.color-hex.com/color/" + colorInput.value.replace("#", ""));
    popup.classList.remove("show");
});
setTimeout(function () {
    sessionStorage.setItem("firstSessionClr", colorInput.value);
}, 50);
back.addEventListener("click", function () {
    if (sessionStorage.getItem("firstSessionClr") != colorInput.value) {
        history.go(-1);
        isFavColor();
    }
});
forward.addEventListener("click", function () {
    history.go(1);
    isFavColor();
});
copyBtn.addEventListener("click", function () {
    copyToClipboard(colorInput.value);
    console.log("Copied to clipboard " + colorInput.value);
    document.getElementById("alertspan").innerHTML = "<i class='twa twa-lg twa-clipboard'></i> Copied to clipboard: " + colorInput.value;
    showAlert(800, 1300, "<i class='twa twa-lg twa-clipboard'></i>", "Copied to clipboard: " + colorInput.value);
});
var removeFromFavs = function (arr, item) {
    var newArray = __spreadArray([], arr, true);
    var index = newArray.findIndex(function (element) { return element === item; });
    if (index !== -1) {
        newArray.splice(index, 1);
        return newArray;
    }
};
var uniqueFavs = function (array) { return array.filter(function (currentValue, index, arr) { return arr.indexOf(currentValue) === index; }); };
var addToFavs = function () {
    var new_favs = colorInput.value;
    if (localStorage.getItem("favs") == null) {
        localStorage.setItem("favs", "[]");
    }
    var old_favs = JSON.parse(localStorage.getItem("favs"));
    old_favs.push(new_favs);
    localStorage.setItem("favs", JSON.stringify(uniqueFavs(old_favs)));
};
var isFavColor = function () {
    if (localStorage.getItem("favs") !== null) {
        if (localStorage.getItem("favs").includes(hexTxt.textContent)) {
            likeIcon.style.color = "#FF2E78";
            like = 1;
            likeBtn.setAttribute("title", "Remove From Favorites");
        }
        else {
            likeIcon.style.color = "currentColor";
            like = 2;
            likeBtn.setAttribute("title", "Add To Favorites");
        }
    }
};
var removeItemFromFavs = function (item) {
    //remove from favs
    var favsNew = JSON.parse(localStorage.getItem("favs"));
    localStorage.removeItem("favs");
    if (localStorage.getItem("favs") == null) {
        localStorage.setItem("favs", "[]");
    }
    localStorage.setItem("favs", JSON.stringify(removeFromFavs(favsNew, item)));
    isFavColor();
    showAlert(800, 1300, "💔", "Removed from favorites: " + item);
};
likeBtn.addEventListener("click", function () {
    addToFavs();
    like++;
    navigator.vibrate(150);
    if (like % 2 != 0) {
        likeIcon.style.color = "#FF2E78";
        document.getElementById("alertspan").innerHTML = "<span class='alert-emoji'>\u2764\uFE0F</span> Added to favorites: " + colorInput.value;
        showAlert(800, 1300, "❤️", "Added to favorites: " + colorInput.value);
        likeIcon.classList.add("fa-beat");
        setTimeout(function () {
            likeIcon.classList.remove("fa-beat");
        }, 2050);
    }
    else {
        removeItemFromFavs(colorInput.value);
        likeIcon.classList.remove("fa-beat");
        likeIcon.style.color = "currentColor";
        likeIcon.classList.add("fa-shake");
        setTimeout(function () {
            likeIcon.classList.remove("fa-shake");
        }, 600);
    }
});
var locals = function () {
    if (isHexColor(hexTxt.textContent.replace("#", ""))) {
        localStorage.setItem("clr", hexTxt.textContent);
    }
};
if (localStorage.getItem("clr") != null) {
    counter++;
    like = 1;
    loadColor(localStorage.getItem("clr"));
    setTimeout(function () {
        console.log("%c" + counter + ". | " + hexTxt.textContent + " | " + nameTxt.textContent + " | RGB " + hexToRgb(hexTxt.textContent.replace("#", "")), "color:" + localStorage.getItem("clr"));
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
    setTimeout(function () {
        addToHistoryList();
    }, 800);
    like++;
}
locals();
var darkMode = localStorage.getItem("darkMode");
var enableDarkMode = function () {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};
var disableDarkMode = function () {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
    enableDarkMode();
    console.log("%cDarkmode Enabled! 🌙", "color:#bd9ff5;");
}
darkModeToggle.addEventListener("click", function () {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log("%cDarkmode Enabled! 🌙", "color:#bd9ff5;");
        showAlert(800, 1300, "🌙", "Darkmode Enabled!");
    }
    else {
        disableDarkMode();
        console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
        showAlert(800, 1300, "☀️", "Darkmode Disabled!");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", colorInput.value);
    }
});
var delClick = function () {
    setTimeout(function () {
        history.back();
    }, 25);
    setTimeout(function () {
        document.getElementById("favlist").click();
    }, 50);
};
var favsChangeClr = null;
document.getElementById("favlist").addEventListener("click", function () {
    hideAlert();
    document.getElementById("history").style.display = "none";
    var favsarr = JSON.parse(localStorage.getItem("favs"));
    popup.className == "shortcuts-popup" ? popup.classList.add("show") : popup.classList.remove("show");
    document.getElementById("modaltext").innerHTML = "<h1 class='favsheader' style=cursor:default><i class='twa twa-1x twa-artist-palette' style='cursor:default'></i> Your Favourite Colors List</h1></br><h1 class='favsheader' style='font-size:20px'>Liked Colors:\n    " + favsarr.length + "\n    </h1>";
    var ul = document.createElement("div");
    ul.setAttribute("style", "cursor:default");
    document.getElementById("modaltext").appendChild(ul);
    favsarr.forEach(function (item) {
        var p = document.createElement("p");
        var del = "<i id=\"delFromFavs\" onclick=\"removeItemFromFavs('" + item + "');delClick()\" title=\"Delete From Favs: " + item + "\" class=\"fa-solid fa-trash-can fa-sm\"></i>";
        var img = ("<img loading='lazy' class='favsimg' align='left' src='https://singlecolorimage.com/get/" + item + "/29x44'/>").replace("#", "");
        p.setAttribute("id", "favsli");
        ul.appendChild(p);
        //@ts-ignore
        p.innerHTML += img + "<div style=\"margin-left:65px\">" + item + "</br>" + del + " <span class='favsclrname'>" + ntc.name(item)[1] + "</span></div>";
        p.setAttribute("onclick", "favsChangeClr = this.textContent.split(' ')[0];ChangeToFav()");
        //@ts-ignore
        p.setAttribute("title", "Change Color To: " + item + " (" + ntc.name(item)[1] + ")");
    });
    var delAll = document.getElementById("s-delete");
    favsarr.length > 0 ? (delAll.style.display = "block") : (delAll.style.display = "none");
    delAll.addEventListener("click", function () {
        like = 2;
        popup.classList.remove("show");
        likeIcon.style.color = "currentColor";
        localStorage.setItem("favs", "[]");
    });
});
var ChangeToFav = function () {
    popup.classList.remove("show");
    loadColor(favsChangeClr);
    locals();
    urlChange();
};
refreshBtn.addEventListener("click", function () {
    setTimeout(function () {
        addToHistoryList();
    }, 100);
    main();
    hideAlert();
    locals();
    urlChange();
    popup.classList.remove("show");
    like = 0;
});
githubBtn.addEventListener("click", function () {
    window.open("https://github.com/maciekt07", "_blank");
    popup.classList.remove("show");
});
historyClose.addEventListener("click", function () {
    showHistory();
});
historyBackToTop.addEventListener("click", function () {
    document.getElementById("h").scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
alertClose.addEventListener("click", function () {
    hideAlert();
});
var toggleFullScreen = function () {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        if (window.screen.width > 1024) {
            showAlert(800, 1300, "<i class='twa twa-lg twa-desktop-computer'></i>", "Fullscreen Enabled!");
            console.log("Fullscreen enabled");
        }
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen();
        if (window.screen.width > 1024) {
            showAlert(800, 1300, "<i class='twa twa-lg twa-desktop-computer'></i>", "Fullscreen Disabled!");
            console.log("Fullscreen disabled");
        }
    }
};
fullscreenBtn.addEventListener("click", function () {
    toggleFullScreen();
});
shareBtn.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
    var shareData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                navigator.vibrate(150);
                shareIcon.classList.add("fa-flip");
                shareIcon.style.color = "#48b4ea";
                setTimeout(function () {
                    shareIcon.classList.remove("fa-flip");
                    shareIcon.style.color = "var(--foreground)";
                }, 2000);
                shareData = {
                    title: "Random Color Tool By maciekt07",
                    text: "Check out this cool color: " + colorInput.value,
                    url: location.toString(),
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, navigator.share(shareData)];
            case 2:
                _a.sent();
                console.log("Shared color successfully");
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log("Share Error: " + err_1);
                if (err_1 != "AbortError: Share canceled") {
                    copyToClipboard(location.toString());
                    showAlert(800, 1300, "<i class='twa twa-lg twa-clipboard'></i>", "Copied URL to clipboard!");
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var appUrl = location.origin + "/";
var urlChange = function () {
    window.location = appUrl + "?" + colorInput.value;
};
var urlError = function () {
    //change url to previous
    window.location = appUrl + "?" + localStorage.getItem("clr");
    setTimeout(function () {
        console.error("ERROR: Invalid Color in URL");
        showAlert(800, 1300, "❌", "Invalid Color in URL");
    }, 300);
};
var urlLoad = function () {
    var urlhex = location.toString().replace(appUrl + "?", "").toLowerCase();
    var urlhexnumber = urlhex.replace("#", "").toLowerCase();
    if (isHexColor(urlhexnumber)) {
        loadColor(urlhex);
        locals();
        urlChange();
        isFavColor();
    }
    else {
        urlError();
    }
};
urlLoad();
if (window.location != appUrl + "?" + colorInput.value) {
    urlError();
}
window.addEventListener("hashchange", function () {
    urlLoad();
    isFavColor();
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 80) {
        //@ts-ignore
        var picker = new EyeDropper();
        picker
            .open()
            .then(function (result) {
            loadColor(result.sRGBHex);
            urlChange();
        })
            .catch(function (error) {
            console.log(error);
            showAlert(800, 1300, "🚫", "Your browser does not support eye dropper.");
        });
    }
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(function (reg) { return console.log("Service Worker: Registered"); })
            .catch(function (err) { return console.log("Service Worker: Error " + err); });
    });
}
window.addEventListener("offline", function () {
    showAlert(800, 1300, "📴", "You're offline");
    window.addEventListener("online", function () {
        showAlert(800, 1300, "🌐", "You're online again");
    });
});
