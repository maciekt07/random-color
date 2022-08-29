if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
}
