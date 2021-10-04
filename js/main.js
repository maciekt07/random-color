function main() {
    var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
    bg_clr = "#" + ("000000" + bg_clr).slice(-6);
    clr_link = ("000000" + bg_clr).slice(-6);
    document.bgColor = bg_clr;

    window.onblur = function() {
        document.title = "Random Color - " + bg_clr;
    }; //title
    window.onfocus = function() {
        document.title = ("Random Color")
    };

    document.getElementById('txt').innerHTML = bg_clr;
    link = ("https://www.color-hex.com/color/" + clr_link)
    link1 = ("https://www.github.com/maciekkoks")
    document.fgColor = bg_clr;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", bg_clr);
    //rgb
    String.prototype.convertToRGB = function() {
        var aRgbHex = this.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    }
    console.log(bg_clr);
    console.log(document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB());
    document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB();
    document.getElementById('historylist').innerHTML += "<li>" + bg_clr + (" | ") + ("RGB ") + clr_link.convertToRGB() + "<hr><br></li>";
    console.log('%c=-=-=-=-=-=-= ', 'color:#9c64f5; font-size: 18px;');

    document.getElementById("alert").style.display = "none";
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
    }
}

const btn = document.getElementById("hbutton"); //change button text show/hide
btn.addEventListener("click", () => {
    if (btn.innerText === "show history") {
        btn.innerText = "hide history";
    } else {
        btn.innerText = "show history";
    }
});


function showa() { // show copy alert
    document.getElementById("alert").style.display = "block";
    setTimeout(function() {
        $('#alert').fadeOut('slow');
    }, 3000);
}

// copy
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}


if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
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
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-4QTNJRWC58');
