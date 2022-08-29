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

window.addEventListener("hashchange", () => clr_name());
document.getElementById("color_input").addEventListener("input", () => clr_name());
document.getElementById("refresh").addEventListener("click", () => clr_name());

// true for mobile device

// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-4QTNJRWC58");
