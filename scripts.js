var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
clr_link = ("000000" + bg_clr).slice(-6);
bg_clr = "#" + ("000000" + bg_clr).slice(-6);
var clr = bg_clr;
document.bgColor = bg_clr;
setTimeout(() => { console.log(bg_clr) }, 40);
document.title = bg_clr + "- random color generator";
document.getElementById('txt').innerHTML = clr;
document.getElementById('div1').innerHTML = clr;
link = ("https://www.color-hex.com/color/" + clr_link)
document.fgColor = clr;
document.querySelector('meta[name="theme-color"]').setAttribute("content", bg_clr);
// copy
function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }
  //tooltip
  function myFunction() { 
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + bg_clr;
  }
