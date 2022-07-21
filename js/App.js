* {
  cursor: crosshair;
  font-family: Arial, Helvetica, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*::selection {
  background: var(--selection);
}

body {
  transition: 0.3s all;
}

html {
  scroll-behavior: smooth;
}

:root {
  --foreground: var(--clr-light);
  --clr-light: white;
  --clr-dark: #0F111A;
  --btn-hover: #cff4fc;
  --button-txt-hover: #63b1ff;
  --font-clr: black;
  --github-fill: #333;
  --selection: #add8e6;
  --a-clr: #0076d7;
  --a-hover: #886ce4;
  --blackwhite: black;
  --shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.24), 0 8px 25px 0 rgba(0, 0, 0, 0.19);
  --bar-clr: rgba(222, 222, 222, 0.5);
  --hr-gradient: linear-gradient(90deg, rgba(108, 209, 228, 1) 24%, rgba(67, 143, 223, 1) 76%);
}

.darkmode {
  --blackwhite: white;
  --foreground: var(--clr-dark);
  --btn-hover: black;
  --button-txt-hover: #6666ff;
  --font-clr: #DFDFDF;
  --github-fill: #b5b5b5;
  --selection: #6666ff;
  --a-clr: #886ce4;
  --a-hover: #0076d7;
  --bar-clr: rgba(45, 45, 45, 0.5);
  --hr-gradient: linear-gradient(90deg, rgba(136, 108, 228, 1) 24%, rgba(142, 60, 228, 1) 76%);
}

.twa-lg {
  cursor: default;
}

.dark-mode-toggle,
.history-btn,
.shortcuts,
.history-btn,
.shortcuts,
.fullscreen,
.fav-list-btn,
.fav-btn {
  color: var(--foreground);
  border: 2px solid currentColor;
  padding: 4px;
  background: transparent;
  border-radius: 5px;
  width: 45px;
  height: 45px;
  transition-duration: 0.5s;
  animation-delay: 5s;
  position: absolute;
  z-index: 100;
  cursor: pointer;
}

.dark-mode-toggle {
  z-index: 100;
  top: 1em;
  right: 1em;
}

.dark-mode-toggle:hover {
  box-shadow: var(--shadow);
}

#color_input {
  position: absolute;
  z-index: 100;
  top: 5.5em;
  right: 1em;
  width: 45px;
  height: 45px;
  border: none;
  background: var(--foreground);
  transition-duration: 0.3s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 5px;
  transition-duration: 0.5s;
  animation-delay: 5s;
  cursor: pointer;
}

#color_input:hover {
  box-shadow: var(--shadow);
}

#color_input::-webkit-color-swatch {
  border-radius: 100%;
  border: none;
}

#color_input::-moz-color-swatch {
  border-radius: 50%;
  border: none;
}

.history-btn {
  top: 10em;
  right: 1em;
  cursor: pointer;
}

.history-btn:hover {
  box-shadow: var(--shadow);
}

.historyicon {
  fill: var(--foreground);
  transition-duration: 0.5s;
  animation-delay: 5s;
}

.shortcuts {
  top: 14.5em;
  right: 1em;
}

.shortcuts:hover {
  box-shadow: var(--shadow);
}

.command {
  fill: var(--foreground);
  transition-duration: 0.5s;
  animation-delay: 5s;
  --animate-duration: 0.6s
}

.shortcuts-popup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3.5px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  cursor: default;
}

.shortcuts-popup.show {
  opacity: 2;
  pointer-events: auto;
}

.modal {
  height: auto;
  max-height: 800px;
  background-color: rgb(31, 31, 31);
  width: 550px;
  max-width: 100%;
  padding: 30px 50px;
  border-radius: 35px;
  box-shadow: var(--shadow);
  cursor: default;
  overflow: auto;
}

table,
tr,
td {
  cursor: default;
}

.s-close {
  outline: none;
  border: 3px solid red;
  padding: 15px;
  background: transparent;
  color: red;
  font-size: 18px;
  border-radius: 15px;
  width: auto;
  transition-duration: 0.2s;
  animation-delay: 0.5s;
  cursor: pointer;
}

.s-close:hover {
  opacity: 0.5;
}


.s-delete {
  display: none;
  border: 3px solid rgb(255, 80, 80);
  color: rgb(255, 80, 80);
  cursor: pointer;
}

.s-header {
  font-size: 24px;
  color: white;
  opacity: 0.8;
  text-transform: uppercase;
}

.s-p {
  font-size: 16px;
  color: white;
  opacity: 0.7;
}

#favsli {
  transition: 0.2s;
  opacity: 0.8;
  text-align: center;
  margin-right: 220px;
  padding: 8px;
  border-radius: 15px;
  font-size: 20px;
  color: white;
  text-decoration: underline;
  border: 3px solid rgb(58, 65, 110);
  cursor: pointer;
}

#favsli:hover {
  background-color: rgb(58, 65, 110);
  opacity: 1;
  text-decoration: none;
}

.favsclrname {
  font-size: 17px;
  cursor: pointer;
}

.favsimg {
  position: relative;
  border-radius: 50px;
  margin-right: 6px;
}

.favsheader {
  opacity: 0.8;
  font-size: 30px;
  color: white;
  margin-left: 10px;
  cursor: text;
}

@media (max-width: 700px) {
  .modal {
      width: 450px;
  }

  #favsli {
      margin-right: 125px;
  }
}

.key {
  font-size: 18px;
  margin-left: 100px;
  color: white;
  opacity: 0.6;
  background: #4e4e4e;
  padding: 6px;
  border-radius: 5px;
}

.fullscreen {
  top: 19em;
  right: 1em;
}

.fs-icon {
  fill: var(--foreground);
  transition-duration: 0.5s;
  animation-delay: 5s;
}

.fullscreen:hover {
  box-shadow: var(--shadow);
}


.fav-btn {
  top: 23.5em;
  right: 1em;
}

.fa-solid {
  color: currentColor;
  --fa-animation-duration: 2s;
  cursor: pointer;
}

.fav-btn:hover {
  box-shadow: var(--shadow);
}


.fav-list-btn {
  top: 28em;
  right: 1em;
}

.fav-list-btn:hover {
  box-shadow: var(--shadow);
}

.right-bar {
  z-index: 99;
  backdrop-filter: blur(30px);
  height: 435px;
  width: 75px;
  background: var(--bar-clr);
  display: inline-block;
  position: absolute;
  right: 0em;
  top: 0em;
  border-radius: 18px 0 0 18px;
  transition-duration: 0.5s;
  animation-delay: 5s;
  border-left: 2px solid var(--foreground);
  border-bottom: 2px solid var(--foreground);
  cursor: default;
}

@media (max-width: 550px) {
  .dark-mode-toggle {
      top: 20em;
  }

  #color_input {
      top: 25em;
  }

  .history-btn {
      top: 29.5em;
  }

  .shortcuts {
      top: 34em;
  }

  .fullscreen {
      top: 38.5em;
  }

  .fav-btn {
      top: 43em;
  }

  .fav-list-btn {
      top: 47.5em;
  }

  .right-bar {
      border-top: 2px solid var(--foreground);
      top: 16em;
  }
}

.main {
  text-align: center;
  display: flex;
  justify-content: center;
}

.div1 {
  padding: 12px;
  font-size: 96px;
  height: auto;
  width: 450px;
  border-radius: 60px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  letter-spacing: 1.7px;
  background-color: var(--foreground);
  transition: 0s all;
  -webkit-text-stroke: 1.5px var(--font-clr);
}

.divrgb {
  font-size: 21px;
  color: var(--font-clr);
  -webkit-text-stroke: 0px currentColor;
  margin-bottom: 3px;
}

.divname {
  font-size: 21px;
  text-decoration: none;
  -webkit-text-stroke: 0px;
  color: var(--font-clr);
  margin-bottom: 5px;
  display: block;
}

@media (max-width: 650px) {
  .div1 {
    font-size: 80px;
    width: 400px;
  }
}
.buttons {
  text-align: center;
}

.button1 {
  background-color: var(--foreground);
  padding: 10px 20px;
  font-size: 36px;
  text-align: center;
  border: none;
  border-radius: 20px;
  transition-duration: 0.5s;
  animation-delay: 5s;
  color: var(--font-clr);
  cursor: pointer;
}

.button1:hover {
  box-shadow: var(--shadow);
  background-color: var(--btn-hover);
  color: var(--button-txt-hover);
}

.button1:active {
  transition-duration: 0s;
  animation-delay: 0s;
}

.body1,
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  cursor: pointer;
}

.social-links {
  display: flex;
}

.social-btn {
  height: 50px;
  width: 50px;
  font-size: 20px;
  color: var(--font-clr);
  border-radius: 10px;
  background: var(--foreground);
  margin: 5px;
  transition: 1s;
  cursor: pointer;
}

.social-btn span {
  width: 0px;
  overflow: hidden;
  transition: 1s;
  text-align: center;
  cursor: pointer;
}

.social-btn:hover {
  width: 150px;
  border-radius: 15px;
  box-shadow: var(--shadow);
  background-color: var(--btn-hover);
  color: var(--button-txt-hover);
}

.social-btn:hover span {
  padding: 2px;
  width: max-content;
  background-color: var(--btn-hover);
  color: var(--button-txt-hover);
}

#github {
  fill: var(--github-fill);
}

.history {
  height: 300px;
  overflow: auto;
}

#historyhex {
  transition: 0.1s;
  padding: 7px;
  border-radius: 10px;
  text-decoration: underline;
  cursor: pointer;
}

#historyhex:hover {
  color: white;
  background: rgb(58, 65, 110);
  text-decoration: none;
}

.hclrimg {
  border-radius: 7px;
  position: relative;
  bottom: -10px;
  margin: 4px;
}

.h-close-btn {
  margin-top: 5px;
  margin-right: 10px;
  color: var(--font-clr);
  font-weight: bold;
  float: right;
  font-size: 28px;
  line-height: 20px;
  transition: 0.3s;
  cursor: default;
}

.h-top {
  fill: white;
  align-items: center;
}

#h-back-to-top {
  display: none;
  margin-bottom: 10px;
  width: 50px;
  height: 50px;
  background-color: #1d1f28;
  padding: 14px;
  text-align: center;
  border: none;
  border-radius: 13px;
  transition-duration: 0.5s;
  animation-delay: 5s;
  color: var(--font-clr);
  cursor: pointer;
}

#h-back-to-top:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  background: rgb(58, 65, 110);
}

#history {
  padding: 10px;
  color: var(--font-clr);
  background-color: var(--foreground);
  width: 380px;
  min-height: 350px;
  height: auto;
  border-radius: 30px;
  font-size: 20px;
  margin-left: 17px;
}

li {
  margin: 6px;
  text-align: left;
}

.history-header {
  margin-top: 40px;
  margin-left: 20px;
  font-size: 27px;
  cursor: text;
}

hr {
  height: 2px;
  border: none;
  /* background: var(--hr-gradient); */
  background-color: rgba(114, 114, 114, 0.5);
  border-radius: 100px;
}

.fa-chevron-up {
  color: white;
}

.alertbox {
  display: flex;
  align-items: center;
  justify-content: center;

}

.alert {
  display: none;
  position: absolute;
  bottom: 2em;
  padding: 30px;
  background-color: var(--foreground);
  backdrop-filter: blur(80px);
  width: auto;
  border-radius: 30px;
  font-size: 16px;
  cursor: default;
  font-weight: 600;
}

#alertspan {
  color: var(--font-clr);
  cursor: default;
  text-align: center;
}

.alert-emoji {
  font-size: 18px;
  cursor: default;
}

.closebtn {
  margin-top: 3px;
  margin-left: 15px;
  color: var(--font-clr);
  font-weight: bold;
  float: right;
  font-size: 26px;
  line-height: 20px;
  transition: 0.3s;
  cursor: default;
}

.closebtn:hover,
.h-close-btn:hover {
  color: red;
  cursor: pointer;
}

#db {
  display: none;
}

noscript {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 30000000;
  height: 100%;
  width: 100%;
  background-color: black;
  font-size: 32px;
  color: white;
  text-align: center;
}

.key,
.s-p,
.s-header,
ol,
li,
hr,
h2,
.divtxt,
.span1,
.divrgb,
.div1,
#history,
.divname {
  cursor: text;
}

img,
svg,
path,
#bmc-wbtn
{
  cursor: pointer;
}

br,
.button1,
.social-btn,
.closebtn,
.dark-mode-toggle,
.h-close-btn {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
