function main() {
    var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
    bg_clr = "#" + ("000000" + bg_clr).slice(-6);
    clr_link = ("000000" + bg_clr).slice(-6);
    document.body.style.backgroundColor = bg_clr;

    window.onblur = function() {
        document.title = "Random Color - " + bg_clr;
    }; //title
    window.onfocus = function() {
        document.title = ("Random Color");
    };
    document.getElementById('txt').innerHTML = bg_clr;
    link = ("https://www.color-hex.com/color/" + clr_link);
    link1 = ("https://www.github.com/maciekkoks");
    document.fgColor = bg_clr;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", bg_clr);
    document.querySelector('input[type="color"]').setAttribute("value", bg_clr);
    //rgb
    String.prototype.convertToRGB = function() {
        var aRgbHex = this.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    };
    console.log('%c--------- ', 'color:#949494; font-size: 20px;');
    console.log(bg_clr);
    console.log('RGB ' + clr_link.convertToRGB());
    document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB();
    document.getElementById('historylist').innerHTML += "<li>" + bg_clr + (" | ") + ("RGB ") + clr_link.convertToRGB() + "<hr><br></li>";
    document.getElementById('alertspan').innerHTML = "Copied to clipboard: " + bg_clr;
}
main();

//show history
document.getElementById("history").style.display = "none";

function showh() {
    var x = document.getElementById("history");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    };
};

const btn = document.getElementById("hbutton"); //change button text show/hide
btn.addEventListener("click", () => {
    if (btn.innerText === "show history") {
        btn.innerText = "hide history";
    } else {
        btn.innerText = "show history";
    };
});

function showa() { // show copy alert
    $("#alert").show().delay(4000).fadeOut(500);
};

function hidea() {
    $("#alert").hide();
};

// copy
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
};


if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
};
// local storage
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};
if (darkMode === 'enabled') {
    enableDarkMode();
    console.log('%cDarkmode Enabled! 🌙', 'color:#bd9ff5;');
};
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log('%cDarkmode Enabled! 🌙', 'color:#bd9ff5;');
    } else {
        disableDarkMode();
        console.log('%cDarkmode Disabled! ☀️', 'color:#bd9ff5;');
    };
});

// complicated af zone kinda bugged lol
function clrpicker() {
    const colorPicker = document.getElementById("color_input");
    colorPicker.addEventListener("input", () => {
        hidea();
        document.body.style.backgroundColor = colorPicker.value;
        document.fgColor = colorPicker.value;
        const txt1 = document.getElementById("txt").textContent;
        var Str = txt1;
        var StrNew = Str.replace("#", "");
        document.getElementById('divrgb').innerHTML = ('RGB ') + StrNew.convertToRGB();
        link = ("https://www.color-hex.com/color/" + StrNew);
        document.getElementById('txt').innerHTML = colorPicker.value;
        document.querySelector('meta[name="theme-color"]').setAttribute("content", colorPicker.value);
        document.querySelector('input[type="color"]').setAttribute("value", colorPicker.value);
        document.getElementById('alertspan').innerHTML = "Copied to clipboard: " + colorPicker.value;
        	window.onblur = function() {document.title = "Random Color - " + colorPicker.value;};window.onfocus = function() {document.title = ("Random Color")};
    })
}

function input_refresh() {document.getElementById("color_input").value = document.getElementById("txt").textContent;}


// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
};
gtag('js', new Date());

gtag('config', 'G-4QTNJRWC58');
