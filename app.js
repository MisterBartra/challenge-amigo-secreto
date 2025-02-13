// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoElement = document.getElementById('amigo')
let amigosElement = document.getElementById('listaAmigos'), amigos = [];
let resultado = document.getElementById('resultado');


function encontrarEnAmigos(mensaje="", idLista = 0) {
    for (var i=idLista; i < amigos.length; i++) { // Comprobar si el valor ya existe en la lista.
        if (amigoElement.value !== amigos[i]) continue;
        else {alert(mensaje); return true;} // Caso: Coinciden palabras
    }
    return false; // Caso: No encontrado
}

function agregarAmigo() {
    if (amigoElement.value !== '' && !encontrarEnAmigos("Existe un amigo con este nombre.")) { // Se descarta el vacio y el nombre repetido
        amigoLIActual = document.createElement('li'); // Se prepara el elemento
        amigos.push(amigoElement.value); // Enlisto el valor dentro de amigos
        amigoLIActual.innerHTML = amigoElement.value; // Momento dónde se entrega el dato al nuevo elemento <li>
        amigosElement.appendChild(amigoLIActual); // Se agrega el elemento <li> en el elemento <ul>
    } else {
        alert(`Por favor, ingrese ${amigos[0] == undefined ? "un" : "otro"} nombre de amigo.`);
    }
    amigoElement.value = ''; // Se limpia el input
}

function sortearAmigo() {
    if (amigos.length === 0) return alert("La lista de amigos está vacío.");
    else if (amigoElement.value === '') return alert("El campo a evaluar se encuentra vacío");
    let posicionAmigoDeLaLista = Math.floor(Math.random() * amigos.length);
	amigoEncontradoEnLista = amigoElement.value !== amigos[posicionAmigoDeLaLista] ? false : true; // Precisión de adivinar el amigo.
    if (amigoEncontradoEnLista) alert("Adivinaste!"); else alert("Intente otra vez!");
    alert(`La persona elegida fue\n  ${amigos[posicionAmigoDeLaLista]}`)
    resultado.innerHTML = `Amigo sorteado: ${amigos[posicionAmigoDeLaLista]}`;
    amigoElement.value = ''; // Se limpia el input
}