var counter = 0;

function main() {
    counter++;
    var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
    bg_clr = "#" + ("000000" + bg_clr).slice(-6);
    clr_link = ("000000" + bg_clr).slice(-6);
    document.body.style.backgroundColor = bg_clr;

    window.onblur = function() {
        document.title = "Random Color - " + bg_clr;
    }; //title
    window.onfocus = function() {
        document.title = "Random Color";
    };

    document.getElementById("txt").innerHTML = bg_clr;
    link = "https://www.color-hex.com/color/" + clr_link;
    github = "https://www.github.com/maciekt07";
    document.fgColor = bg_clr;
    document.querySelector('input[type="color"]').setAttribute("value", bg_clr);
    document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", bg_clr);

    //rgb
    String.prototype.convertToRGB = function() {
        var aRgbHex = this.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16),
        ];
        return aRgb;
    };

    const txt1 = document.getElementById("txt").textContent;
    var Str = txt1;
    var StrNew = Str.replace("#", "");

    document.getElementById("divrgb").innerHTML = "RGB " + StrNew.convertToRGB();
    document.getElementById("alertspan").innerHTML =
        "<span class='copy-emoji'>📋</span> Copied to clipboard: " + bg_clr;

    console.log("%c--------- ", "color:#949494; font-size: 20px;");
    console.log(counter)
    console.log("RGB " + clr_link.convertToRGB());
    const top_btn = document.getElementById("h-back-to-top");
    if (counter == 4) {
        top_btn.style.display = "block";
    }
}
main();
setTimeout(() => {
    document
        .getElementById("main")
        .classList.remove("animate__animated", "animate__headShake");
}, 1500);
// add color to history list
function historyl() {
    document.getElementById("historylist").innerHTML +=
        "<li>" +
        document.getElementById("txt").textContent +
        " | " +
        "RGB " +
        clr_link.convertToRGB() +
        "<hr><br></li>";
}

//show history
document.getElementById("history").style.display = "none";

function showh() {
    var x = document.getElementById("history");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// const btn = document.getElementById("hbutton"); //change button text show/hide
// btn.addEventListener("click", () => {
//     if (btn.innerText === "show history") {
//         btn.innerText = "hide history";
//     } else {
//         btn.innerText = "show history";
//     };
// });

document.getElementById("shortcuts").addEventListener("click", () => {
    if (
        document.getElementById("shortcuts-popup").className == "shortcuts-popup"
    ) {
        document.getElementById("shortcuts-popup").classList.add("show");
    } else {
        document.getElementById("shortcuts-popup").classList.remove("show");
    }
});

document.getElementById("s-close").addEventListener("click", () => {
    document.getElementById("shortcuts-popup").classList.remove("show");
});

// document.getElementById("shortcuts-popup").addEventListener('click', () => {
//     document.getElementById("shortcuts-popup").classList.remove("show");
// });

function showa() {
    // show copy alert
    // $("#alert").slideDown("slow").delay(2600).fadeOut(500);
}

function hidea() {
    //hide copy alert
    $("#alert").hide();
}

// copy
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// color picker
function clrpicker() {
    const colorPicker = document.getElementById("color_input");
    colorPicker.addEventListener("input", () => {
        const txt1 = document.getElementById("txt").textContent;
        var Str = txt1;
        var StrNew = Str.replace("#", "");
        hidea();
        document.body.style.backgroundColor = colorPicker.value;
        document.fgColor = colorPicker.value;
        document.getElementById("divrgb").innerHTML =
            "RGB " + StrNew.convertToRGB();
        link = "https://www.color-hex.com/color/" + StrNew;
        document.getElementById("txt").innerHTML = colorPicker.value;
        document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", colorPicker.value);
        document
            .querySelector('input[type="color"]')
            .setAttribute("value", colorPicker.value);
        document.getElementById("alertspan").innerHTML =
            "<span class='copy-emoji'>📋</span> Copied to clipboard: " +
            colorPicker.value;
        window.onblur = function() {
            document.title = "Random Color - " + colorPicker.value;
        };
        window.onfocus = function() {
            document.title = "Random Color";
        };
    });
}

function input_refresh() {
    document.getElementById("color_input").value = document.getElementById("txt").textContent;
}

// darkmode toggle
if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

//local storage
// save last color in local storage
function locals() {
    localStorage.setItem("clr", document.getElementById("txt").textContent);
    console.log('%c%s', "color:#b144e4", localStorage.getItem("clr"));
}

if (localStorage.getItem("clr") != null) {
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
    document.getElementById("txt").innerHTML = clr;
    document.getElementById("alertspan").innerHTML =
        "<span class='copy-emoji'>📋</span> Copied to clipboard: " + clr;
    document.getElementById("historylist").innerHTML +=
        "<li>" +
        document.getElementById("txt").textContent +
        " | " +
        "RGB " +
        clr_link.convertToRGB() +
        "<hr><br></li>";
    link = "https://www.color-hex.com/color/" + clr.replace("#", "");
    window.onblur = function() {
        document.title = "Random Color - " + clr;
    };
} else {
    document.getElementById("historylist").innerHTML +=
        "<li>" +
        document.getElementById("txt").textContent +
        " | " +
        "RGB " +
        clr_link.convertToRGB() +
        "<hr><br></li>";
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
    } else {
        disableDarkMode();
        console.log("%cDarkmode Disabled! ☀️", "color:#bd9ff5;");
    }
});

//buttons
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    hidea();
});

var rpt = 0;

document.getElementById("color_input").addEventListener("click", () => {
    if (rpt == 0) {
        //bug repair
        document.getElementById("color_input").click();
        document.getElementById("db").click();
    }
    rpt++;
    clrpicker();
    locals();
    clr_name();
});

document.getElementById("hbutton").addEventListener("click", () => {
    showh();
});

document.getElementById("moreinfo").addEventListener("click", () => {
    window.open(link);
});

document.getElementById("copy").addEventListener("click", () => {
    copyToClipboard("#txt");
    document.getElementById("history").style.display = "none"

    // showa();
    document.getElementById("alert").style.display = "block";

    const alert = document.querySelector(".alert");
    alert.classList.add('animate__animated', 'animate__fadeInDown');
    alert.addEventListener('animationend', () => {
        alert.classList.remove('animate__animated', 'animate__fadeInDown');
        setTimeout(() => {
            alert.classList.add('animate__animated', 'animate__fadeOut');
        }, 1800);
        setTimeout(() => {
            hidea();
            alert.classList.remove('animate__animated', 'animate__fadeOut');
        }, 2650);
    });
});
document.getElementById("refresh").addEventListener("click", () => {
    main();
    hidea();
    input_refresh();
    locals();
    historyl();
    clr_name();
    // const el = document.querySelector(".div1");
    // el.classList.add('animate__animated', 'animate__headShake');
    // el.addEventListener('animationend', () => {
    //     el.classList.remove('animate__animated', 'animate__headShake');
    //     });
});

document.getElementById("github").addEventListener("click", () => {
    window.open(github);
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

document.getElementById("fullscreen").addEventListener("click", () => {
    if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
            screenfull.exit();
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

// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-4QTNJRWC58");
