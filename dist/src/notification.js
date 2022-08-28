"use strict";
var luckyURL = "https://aztro.sameerkumar.website/?sign=aries&day=today";
fetch(luckyURL, {
    method: "POST",
})
    .then(function (response) { return response.json(); })
    .then(function (json) {
    var luckyColor = json.color;
    switch (luckyColor) {
        case "Navy Blue":
            luckyColor = "Navy";
            break;
        case "Peach":
            luckyColor = "PeachPuff";
            break;
        case "Rose Pink":
            luckyColor = "Pink";
            break;
        case "Shadow Black":
            luckyColor = "Black";
            break;
        case "Copper":
            luckyColor = "Orange Red";
            break;
    }
    var luckyColorHTML = luckyColor.toLowerCase().replace(/\s/g, "");
    //get hex color
    var getHexColor = function (colorStr) {
        var a = document.createElement("div");
        a.style.color = colorStr;
        var colors = window
            .getComputedStyle(document.body.appendChild(a))
            .color.match(/\d+/g)
            .map(function (a) {
            return parseInt(a, 10);
        });
        document.body.removeChild(a);
        return colors.length >= 3 ? "#" + ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1) : false;
    };
    //get hex color end
    // Lucky Color Error
    document.getElementById("db").style.color = luckyColorHTML;
    if (document.getElementById("db").style.color == "") {
        console.error("Lucky Color Error invalid color: " + luckyColor);
        luckyColor = "Hot Pink";
        luckyColorHTML = luckyColor.toLowerCase().replace(/\s/g, "");
    }
    var luckyColorHTMLNoHash = luckyColorHTML.replace("#", "");
    console.log(luckyColorHTMLNoHash);
    var luckyStyle = "color:white;padding:8px;border:4px solid;border-color:" + luckyColorHTML + ";border-radius:10px";
    var luckyLink = appUrl + "?" + getHexColor(luckyColorHTML);
    var luckyImage = ("https://singlecolorimage.com/get/" + getHexColor(luckyColorHTML) + "/64x64").replace("#", "");
    var nHeader = "Daily Lucky Color " + json.current_date;
    var nBody = "Today Lucky Color is: " + luckyColor + " (" + getHexColor(luckyColorHTML) + ")\nMood: " + json.mood;
    console.log("%cToday Lucky Color is: " + luckyColor + " (" + getHexColor(luckyColorHTML) + ")", luckyStyle);
    // desktop notification
    var showNotification = function () {
        var notification = new Notification(nHeader, {
            body: nBody,
            icon: luckyImage,
            badge: luckyImage,
            lang: "en-US",
            silent: true,
            // image: luckyImage,
        });
        notification.onclick = function (e) {
            window.focus();
            window.open(luckyLink, "_self");
        };
    };
    // console.log(Notification.permission);
    if (Notification.permission === "granted") {
        console.log("We have permission to send you push notifications!");
        setTimeout(function () {
            showNotification();
        }, 2000);
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // console.log(permission)
            if (permission === "granted") {
                showNotification();
            }
        });
    }
});
