[![Netlify Status](https://api.netlify.com/api/v1/badges/6173ec8f-e9f6-471a-86e6-71210349ffe3/deploy-status)](https://app.netlify.com/sites/random-color-tool/deploys)


<h1 align="center"><a href="https://random-color-tool.netlify.app">🔗 https://random-color-tool.netlify.app</a></h1>

<p align="center">
<img alt="icon" width="128px" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/iconLight.png"></img>
</p>



<p align="center">
<img alt="preview" src="https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/preview1.png"></img>
</p
<br>
<h3 align="center">Random color picker made using HTML, CSS, JavaScript and Native Web APIs. All data is stored in LocalStorage</h3>

<br>

# 💡 Features

## 💜 Liked Colors List
![favlist](https://raw.githubusercontent.com/maciekt07/random-color/main/img/favslist.png)

Your liked colors list stored in LocalStorage

## ⌘ Shortcuts
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

## 🔔 Notifications
![notification](https://raw.githubusercontent.com/maciekt07/random-color/main/img/notification.png)

Api: [https://aztro.readthedocs.io/en/latest/](https://aztro.readthedocs.io/en/latest/)

``` js
// Notification
const showNotification = () => {
      const notification = new Notification(`Daily Lucky Color ${json.current_date}`, {
        body: `Today Lucky Color is: ${luckyColor} (${getHexColor(luckyColorHTML)})\r\nMood: ${json.mood}`,
        icon: luckyImage,
        badge: luckyImage,
        lang: "en-US",
        silent: true,
      });
      notification.onclick = (e) => {
        window.open(luckyLink, "_self");
      };
    };
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

## 📱 Progressive Web App (PWA)
You can install this web app on your device like a normall app

![install](https://raw.githubusercontent.com/maciekt07/random-color/main/img/installation.png)

![tasks](https://raw.githubusercontent.com/maciekt07/random-color/main/img/tasks.png)

<img width="300px" alt="android" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/androidapp.jpg">

## 🔗 Changing Color From URL
![url](https://raw.githubusercontent.com/maciekt07/random-color/main/img/link.png)

``` js
window.addEventListener('hashchange', () => {
    urlLoad();
}, false);
```

And many more... 👀

# ⚡ Performance
<img width="650px" alt="performance" src="https://raw.githubusercontent.com/maciekt07/random-color/main/img/Performance.png">

## 👨‍💻 To run this project locally

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



# 💌 Made With ❤ By [maciekt07](https://github.com/maciekt07)

