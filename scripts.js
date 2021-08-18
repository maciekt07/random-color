function main() {
var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
bg_clr = "#" + ("000000" + bg_clr).slice(-6);
clr_link = ("000000" + bg_clr).slice(-6);
document.bgColor = bg_clr;
setTimeout(() => { console.log(bg_clr) }, 40);
document.title = bg_clr + "- random color";
document.getElementById('txt').innerHTML = bg_clr;
document.getElementById('div1').innerHTML = bg_clr;
link = ("https://www.color-hex.com/color/" + clr_link)
link1 = ("https://www.github.com/maciekkoks")
document.fgColor = bg_clr;
document.querySelector('meta[name="theme-color"]').setAttribute("content", bg_clr);
document.querySelector('input[type="color"]').setAttribute("value", bg_clr);
//rgb
String.prototype.convertToRGB = function(){
  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
}
document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB();
}
main();
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
