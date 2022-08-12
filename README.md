[![Netlify Status](https://api.netlify.com/api/v1/badges/6173ec8f-e9f6-471a-86e6-71210349ffe3/deploy-status)](https://app.netlify.com/sites/random-color-tool/deploys)
# [maciekt07.github.io/random-color/](https://maciekt07.github.io/random-color/)
Random color picker made using HTML, CSS, JavaScript and Native Web APIs. All data is stored in LocalStorage
![preview](https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/preview1.png)

# Icons

<img width="128px" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/iconLight.png"></img>
<img width="128px" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/iconDark.png"></img>

Made by me in figma

# Features
# Liked Colors List
![favlist](https://raw.githubusercontent.com/maciekt07/random-color/main/img/favslist.png)

Your liked colors list stored in LocalStorage

# Shortcuts
![shortcuts](https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/shortcuts.png)

``` js
const shortcut = (key, id) => {
  return document.addEventListener("keyup", (event) => {
    if (event.keyCode == key) {
      document.getElementById(id).click();
    }
  });
}
const r = 82
shortcut(r, "refresh")
```

# Notifications
![notification](https://raw.githubusercontent.com/maciekt07/random-color/main/img/notification.png)

Api: [https://aztro.readthedocs.io/en/latest/](https://aztro.readthedocs.io/en/latest/)

``` js
// Notification
const showNotification = () => {
    const notification = new Notification("Daily Lucky Color " + json.current_date, {
        body: "Today Lucky Color is: " + luckyColor + " " + "(" + getHexColor(luckyColorHTML) + ")" +
        "\r\n" + "Mood: " + json.mood,
        icon: luckyImage,
        badge: luckyImage,
        lang: 'en-US',
        silent: true,
        // image: luckyImage
    });
    // Change color to lucky color on click
    notification.onclick = (e) => {
        location = luckyLink
    }
}
// Permissions
if (Notification.permission === "granted") {
    console.log("We have permission to send you push notifications!")
    showNotification()
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification()
        }
    })
}
});
 ```
Daily notifications about today lucky color (with onclick)

# Changing Color From URL
![url](https://raw.githubusercontent.com/maciekt07/random-color/main/img/url.png)

``` js
window.addEventListener('hashchange', () => {
    urlLoad();
}, false);
```

### URL error 
![urlerror](https://raw.githubusercontent.com/maciekt07/random-color/main/img/urlerror.png)

``` js 
const urlError = () => {
  //change url to previous
  location = url + "/?" + localStorage.getItem("clr");
  setTimeout(() => {
    console.error("ERROR: Invalid Color in URL");
    document.getElementById("alertspan").innerHTML =
      "<span class='alert-emoji'>❌</span> <span style='color:#FF4B56'>ERROR:</span> Invalid Color in URL";
    showalert();
  }, 300);
};
```

# History
![history](https://raw.githubusercontent.com/maciekt07/random-color/main/img/history.png)

Session history of random colors

# Page Speed
![pagespeed](https://raw.githubusercontent.com/maciekkoks/random-color/main/img/pagespeed.png)

By [Google PageSpeed](https://pagespeed.web.dev)

## Made With ❤ By [maciekt07](https://github.com/maciekt07)

