<br><br>
<p align="center">
<img alt="icon" width="128px" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/iconLight.png"></img>
</p>
<h1 align="center">Random Color Tool</h1>
<h1 align="center"><a href="https://random-color-tool.netlify.app">🔗 https://random-color-tool.netlify.app</a></h1>
<h3 align="center">Random color picker made using HTML, CSS, JavaScript and Native Web APIs. All data is stored in LocalStorage</h3>


<div align="center">
<a href="https://app.netlify.com/sites/random-color-tool/deploys"><img src="https://api.netlify.com/api/v1/badges/6173ec8f-e9f6-471a-86e6-71210349ffe3/deploy-status"></a><img src="https://img.shields.io/github/languages/code-size/maciekt07/random-color?color=blue&style=flat-square)"><img src="https://img.shields.io/github/languages/top/maciekt07/random-color?color=blue&style=flat-square)"><img src="https://img.shields.io/github/last-commit/maciekt07/random-color?color=blue&style=flat-square)"><img src="https://img.shields.io/github/license/maciekt07/random-color?color=blue&style=flat-square)">
</div>


<p align="center">
<img alt="preview" src="https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/preview.png"></img>
</p
<br><br>


# 💡 Features


# 💜 Liked Colors List

## Your liked colors list stored in LocalStorage

![favlist](https://raw.githubusercontent.com/maciekt07/random-color/main/img/favslist.png)

# ⌘ Shortcuts
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

# 🔔 Notifications

## Daily notifications about today lucky color (with onclick)

Api: [https://aztro.readthedocs.io/en/latest/](https://aztro.readthedocs.io/en/latest/)

Desktop:

<img src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/notiWindows.png">

``` js
// Desktop
const showNotification = () => {
    const notification = new Notification(nHeader, {
        body: nBody,
        icon: luckyImage,
        badge: luckyImage,
        lang: "en-US",
        silent: true,
    });
    notification.onclick = (e) => {
        window.focus();
        location = luckyLink;
    };
};
console.log(Notification.permission);
if (Notification.permission === "granted") {
    console.log("We have permission to send you push notifications!");
    setTimeout(() => {
        showNotification();
    }, 2000);
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
        // console.log(permission)
        if (permission === "granted") {
            showNotification();
        }
    });
}
```

Mobile:

<img src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/notiAndroid.png">

```js
// Mobile
Push.create(nHeader, {
    body: nBody,
    icon: luckyImage,
    tag: "lucky-color",
    // timeout: 4000,
    link: luckyLink,
    vibrate: [200, 200, 200, 200, 200],
    requireInteraction: false,
    onClick: () => {
        window.focus();
        window.open(luckyLink);
        this.close();
    },
});
```

# 📱 Progressive Web App (PWA)
## You can install this web app on your device like a normall app

![install](https://raw.githubusercontent.com/maciekt07/random-color/main/img/installation.png)

![tasks](https://raw.githubusercontent.com/maciekt07/random-color/main/img/tasks.png)

<img width="300px" alt="android" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/androidapp.jpg">

# 🔗 Changing Color From URL
![url](https://raw.githubusercontent.com/maciekt07/random-color/main/img/link.png)

``` js
window.addEventListener('hashchange', () => {
    urlLoad();
}, false);
```

## And many more... 👀

# ⚡ Performance
<img width="650px" alt="performance" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/Performance.png">

# 👨‍💻 To run this project locally

Download this repository

```bash
git clone https://github.com/maciekt07/random-color.git
```

```bash
cd random-color
```

Install node modules

```bash
npm install
```

Run local server and open ``http://localhost:8888/``

```bash
node js/server.js
```
(or use live server)



# 💌 Made With ❤ By [maciekt07](https://github.com/maciekt07)

## 💸 Donate
<a href="https://www.buymeacoffee.com/maciekt07" target="_blank">
 <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=maciekt07&button_colour=1a1b27&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=FFDD00"></a>
</a>
