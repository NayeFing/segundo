let boton = document.querySelector("button")
let div = document.querySelector("div");

$("button").click(function () {
    alert("hola naye")
    div.innerHTML = "NAYE"
    div.style.fontSize = "20px"
    div.style.fontFamily = "monospace"
    div.style.color = "purple"
})