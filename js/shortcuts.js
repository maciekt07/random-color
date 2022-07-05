document.addEventListener("keyup", (event) => {
  if (event.keyCode == 82) {
      // r button changes color
      document.getElementById("refresh").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 67) {
      // c button copies text
      document.getElementById("copy").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 84) {
      // t button changes theme
      document.getElementById("dark-mode-toggle").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 77) {
      // m button shows more info
      document.getElementById("moreinfo").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 71) {
      // g button opens github profile
      document.getElementById("github").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 72) {
      // h button shows history list
      document.getElementById("hbutton").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 191) {
      // / button shows shortucts
      document.getElementById("shortcuts").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 80) {
      // p button opens color picker
      document.getElementById("color_input").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 70) {
      // f button toggles fullscreen
      document.getElementById("fullscreen").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 76) {
      // l adds to favourite list
      document.getElementById("fav").click();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.keyCode == 79) {
      // l adds to favourite list
      document.getElementById("favlist").click();
  }
});


document.addEventListener("keyup", (event) => {
  const n = document.getElementById("name")
  if (event.keyCode == 78) {
      // n button hides color name

      if (n.style.display == "block") {
          n.style.display = "none"
      } else {
          n.style.display = "block"
      }
  }
});
