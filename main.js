var coins = 0
var components = [
   new MainMenuTab("main-menu", 0),
   new SelectLevel("select-level", 0),
   new Level1("level1", 0)
]
let buttonerd = [document.getElementsByClassName("buttonerd")[0]]
var tab = "Main Menu"
var level = 0
var levelDone = [false]
var collects = [0]

function getSwitchLevel(lev) {
	level = lev
    tab = "Level " + lev
}

document.getElementsByClassName("buttonerd")[0].onclick = () => {
	tab = "Select a Level"
}

document.body.style.background = "hsl(150, 50%, 30%)"

document.getElementById("level1").onclick = () => {
	getSwitchLevel(1)
}

document.getElementsByTagName("textarea")[0].onblur = () => {
	document.getElementsByClassName("demo")[0].srcdoc = components[2].html
}

document.getElementsByTagName("textarea")[1].onblur = () => {
	document.getElementsByClassName("demo")[0].srcdoc = components[2].html
}

document.body.type = "margined"

document.getElementsByTagName("textarea")[0].value = `<body>
<h1>Background!</h1>
</body>`

document.getElementsByTagName("textarea")[1].value = `h1 {
  background:none;
}`

setInterval (() => {
 if (tab == "Main Menu") {
 	document.getElementsByClassName("main-menu")[0].style.display = "block"
 } else {
 	document.getElementsByClassName("main-menu")[0].style.display = "none"
 }
  if (tab == "Select a Level") {
 	document.getElementsByClassName("select-level")[0].style.display = "block"
 } else {
 	document.getElementsByClassName("select-level")[0].style.display = "none"
 }
 if (tab == "Level 1") {
 	document.getElementsByClassName("level1")[0].style.display = "block"
 } else {
 	document.getElementsByClassName("level1")[0].style.display = "none"
 }
 components[2].update(0.76)
}, 150)
setInterval(() => {
  document.getElementsByClassName("demo")[0].srcdoc = components[2].html
}, 20000)