# [maciekkoks.github.io/random-color/](https://maciekkoks.github.io/random-color/)
A simple random color picker with hex code made by using HTML, CSS, JavaScript, and jQuery,
theme and last color is stored in local storage.
![preview](https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/preview.png)
# Shortcuts
```js
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 82) { // r button changes color
        document.getElementById("refresh").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 84) { // t button changes theme
        document.getElementById("dark-mode-toggle").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 67) { // c button copies text
        document.getElementById("copy").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 77) { // m button shows more info
        document.getElementById("moreinfo").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 71) { // g button opens github profile
        document.getElementById("github").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 72) { // h button shows history list
        document.getElementById("hbutton").click();
    }
});
```
# Page Speed
![pagespeed](https://raw.githubusercontent.com/maciekkoks/random-color/main/img/pagespeed.png)

By [Google PageSpeed](https://pagespeed.web.dev)
