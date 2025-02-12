// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoElement = getElementById('amigo')
let amigosElement = getElementById('listaAmigos'), amigos = [];
let resultado = getElementById('resultado');


function asignarTextoElemento(HTMLelemento, texto) {
    let elementoHTML = document.querySelector(HTMLelemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    if (amigoElement.innerHTML !== '') {
        amigoLIActual = document.createElement('li');
        amigos.push(amigoElement.innerHTML);
        amigoLIActual.innerHTML = amigoElement.innerHTML; // Momento dónde el dato se cede al nuevo elemento li
        amigosElement.appendChild(amigoLIActual); // Se agrega el elemento <li> en la carpeta
        amigoElement.innerHTML = ''; // Se limpia el input
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function sortearAmigo() {
    if (amigos.length === 0) return alert("La lista de amigos está vacío.");
    let posicionAmigoDeLaLista = Math.floor(Math.random()*amigos.length);
    if (amigoElement.innerHTML !== amigos[posicionAmigoDeLaLista]) {
        alert("Intenta otra vez.")
    }
    resultado.innerHTML = `Amigo sorteado: ${amigos[posicionAmigoDeLaLista]}`;
}