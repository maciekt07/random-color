# [maciekkoks.github.io/random-color/](https://maciekkoks.github.io/random-color/)
A simple random color website with their hex code by using HTML CSS and JavaScript.
Theme is stored in local storage.
![previev](https://raw.githubusercontent.com/maciekkoks/random-colors/main/img/previev.png)
# Shortcuts
```js
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 82) { // r button changes color
        main()
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
