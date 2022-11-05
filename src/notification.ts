const luckyURL = "https://aztro.sameerkumar.website/?sign=aries&day=today";
fetch(luckyURL, {
  method: "POST",
})
  .then((response) => response.json())
  .then((json) => {
    let luckyColor = json.color;
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
    const getHexColor = (colorStr: string) => {
      const a = document.createElement("div");
      a.style.color = colorStr;
      const colors = window
        .getComputedStyle(document.body.appendChild(a))
        .color.match(/\d+/g)
        .map((a) => parseInt(a, 10));
      document.body.removeChild(a);
      return colors.length >= 3 ? "#" + ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1) : false;
    };

    // Lucky Color Error
    document.getElementById("db").style.color = luckyColorHTML;
    if (document.getElementById("db").style.color == "") {
      console.error(`Lucky Color Error invalid color: ${luckyColor}`);
      luckyColor = "Hot Pink";
      luckyColorHTML = luckyColor.toLowerCase().replace(/\s/g, "");
    }

    const luckyStyle = `color:white;padding:8px;border:4px solid;border-color:${luckyColorHTML};border-radius:10px`;
    const luckyLink = `${appUrl}?${getHexColor(luckyColorHTML)}`;
    const luckyImage = `https://singlecolorimage.com/get/${getHexColor(luckyColorHTML)}/64x64`.replace("#", "");
    const nHeader = `Daily Lucky Color ${json.current_date}`;
    const nBody = `Today Lucky Color is: ${luckyColor} (${getHexColor(luckyColorHTML)})\nMood: ${json.mood}`;
    console.log(`%cToday Lucky Color is: ${luckyColor} (${getHexColor(luckyColorHTML)})`, luckyStyle);

    // desktop notification
    const showNotification = () => {
      const notification = new Notification(nHeader, {
        body: nBody,
        icon: luckyImage,
        badge: luckyImage,
        lang: "en-US",
        silent: true,
        tag: "Daily Random Color",
        // image: luckyImage,
      });
      notification.onclick = (e) => {
        window.focus();
        window.open(luckyLink, "_self");
      };
    };
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setTimeout(() => {
        // @ts-ignore
        Push.create(nHeader, {
          body: nBody,
          icon: luckyImage,
          link: luckyLink,
          tag: "Daily Random Color",
        });
      }, 3000);
    }

    const customNotification = () => {
      notification.Show(
        `<img alt="Lucky Color Image" style="border-radius:8px;cursor:default" src="${`https://singlecolorimage.com/get/${getHexColor(luckyColorHTML)}/48x48`.replace("#", "")}">`,
        "Daily Lucky Color",
        `Today Lucky Color is: <b>${luckyColor} (${getHexColor(luckyColorHTML)})</b><br>Mood: ${json.mood}`,
        luckyLink
      );
    };

    if (Notification.permission === "granted") {
      console.log("We have permission to send you notifications!");
      setTimeout(() => {
        showNotification();
      }, 500);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log(permission);
          showNotification();
          notification.Show("<i class='fa-solid fa-bell'></i>", "Notifications", "We have permission to send you notifications!");
        }
        if (permission === "denied") {
          notification.Show("<i class='fa-solid fa-bell-slash'></i>", "Notifications", "Notifications have been disabled");
          setTimeout(() => {
            customNotification();
          }, 5500);
        }
      });
    }
    if (Notification.permission === "denied") {
      customNotification();
    }
  });
