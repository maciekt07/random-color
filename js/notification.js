const luckyURL = "https://aztro.sameerkumar.website/?sign=aries&day=today";
fetch(luckyURL, {
  method: "POST",
})
  .then((response) => response.json())
  .then((json) => {
    let luckyColor = json.color;
    console.log(luckyColor);
    switch (luckyColor) {
      case "Navy Blue":
        luckyColor = "Navy";
        break;
      case "Peach":
        luckyColor = "PeachPuff";
        break;
      case "Rose Pink":
        luckyColor = "Pink";
        break;
      case "Shadow Black":
        luckyColor = "Black";
        break;
      case "Copper":
        luckyColor = "Orange Red";
        break;
    }
    let luckyColorHTML = luckyColor.toLowerCase().replace(/\s/g, "");
    //get hex color
    const getHexColor = (colorStr) => {
      const a = document.createElement("div");
      a.style.color = colorStr;
      const colors = window
        .getComputedStyle(document.body.appendChild(a))
        .color.match(/\d+/g)
        .map(function (a) {
          return parseInt(a, 10);
        });
      document.body.removeChild(a);
      return colors.length >= 3 ? "#" + ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1) : false;
    };
    //get hex color end

    // Lucky Color Error
    document.getElementById("db").style.color = luckyColorHTML;
    if (document.getElementById("db").style.color == "") {
      console.error(`Lucky Color Error invalid color: ${luckyColor}`);
      luckyColor = "Hot Pink";
      luckyColorHTML = luckyColor.toLowerCase().replace(/\s/g, "");
    }
    const luckyStyle = `color:white;padding:8px;border:4px solid;border-color:${luckyColorHTML};border-radius:10px`;
    const luckyLink = `${url}?${getHexColor(luckyColorHTML)}`;
    const luckyImage = `https://singlecolorimage.com/get/${getHexColor(luckyColorHTML).replace("#", "")}/64x64`;
    const nHeader = `Daily Lucky Color ${json.current_date}`;
    const nBody = `Today Lucky Color is: ${luckyColor} (${getHexColor(luckyColorHTML)})\nMood: ${json.mood}`;
    console.log(`%cToday Lucky Color is: ${luckyColor} (${getHexColor(luckyColorHTML)})`, luckyStyle);

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
    } else {
      // desktop notification
      const showNotification = () => {
        const notification = new Notification(nHeader, {
          body: nBody,
          icon: luckyImage,
          badge: luckyImage,
          lang: "en-US",
          silent: true,
          // image: luckyImage,
        });
        notification.onclick = (e) => {
          window.focus();
          location = luckyLink;
        };
      };
      // console.log(Notification.permission);
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
    }
  });
