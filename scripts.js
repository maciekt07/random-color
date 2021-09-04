function main() {
  var bg_clr = Math.floor(Math.random() * 16777215).toString(16);
  bg_clr = "#" + ("000000" + bg_clr).slice(-6);
  clr_link = ("000000" + bg_clr).slice(-6);
  
  document.bgColor = bg_clr;
  document.title = bg_clr + " - random color";
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
  
  
  console.log(bg_clr);
  console.log(document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB());
  document.getElementById('divrgb').innerHTML = ('RGB ') + clr_link.convertToRGB();
  document.getElementById('historylist').innerHTML += "<li>" + bg_clr + (" | ") + (" RGB ") + clr_link.convertToRGB() + "<hr><br></li>";
  console.log('%c=-=-=-=-=-=-= ', 'color:#bf66ff; font-size: 18px;');
  
  document.getElementById("alert").style.display = "none";
  document.getElementById('alertspan').innerHTML = "Copied to clipboard: " + bg_clr;
  }
  
main();
  
//show history button
  document.getElementById("history").style.display = "none";
  function showh() {
    var x = document.getElementById("history");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
const btn = document.getElementById("hbutton");
  btn.addEventListener("click", ()=>{
      if(btn.innerText === "show history"){
          btn.innerText = "hide history";
      }else{
          btn.innerText= "show history";
      }
 });
  

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 82) { // r button changes color
        main()
    }
  });
function showa() {
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){ document.getElementById("alert").style.display = "none"; }, 4500);
}


// copy
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
