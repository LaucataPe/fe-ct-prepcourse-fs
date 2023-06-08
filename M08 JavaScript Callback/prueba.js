var mostrar = document.querySelector("#mostrar")
var ocultar = document.querySelector("#ocultar")
var parrafo = document.querySelector("#texto")

function mostrarTexto(){
    parrafo.innerHTML = "Soy el parrafo"
}

function ocultarTexto(){
    parrafo.innerHTML = ""
}

mostrar.addEventListener('click', mostrarTexto)
ocultar.addEventListener('click', ocultarTexto)