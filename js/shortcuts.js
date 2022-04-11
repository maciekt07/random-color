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

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 191) { // / button shows shortucts
        document.getElementById("shortcuts").click();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 80) { // p button opens color picker
        document.getElementById("color_input").click();
    }
});

