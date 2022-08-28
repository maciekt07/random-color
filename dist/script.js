const clr_name = () => {
  const hex = document.getElementById("txt").textContent;
  const divName = document.getElementById("name");
  const matchIcon = '<i class="fa-solid fa-equals"></i>';
  const n_match = ntc.name(hex);
  if (n_match[2]) {
    divName.innerHTML = `${matchIcon}${n_match[1]}${matchIcon}`;
  } else {
    divName.innerHTML = n_match[1];
  }
};
clr_name();
window.addEventListener("hashchange", () => {
  clr_name();
});

document.getElementById("color_input").addEventListener("input", () => {
  clr_name();
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // true for mobile device
  // mobile notification
  Push.close("lucky-color");
  setTimeout(() => {
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
  }, 3000);
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {
      console.log("Service worker installed");
    })
    .catch((error) => {
      console.log(`Service Worker Error: ${error}`);
    });
}
// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-4QTNJRWC58");
