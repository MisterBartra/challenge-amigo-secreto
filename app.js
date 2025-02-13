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
    if (amigoElement.value !== '' && !encontrarEnAmigos("Existe un amigo con este nombre.")) { // Se descarta el vacío
        amigoLIActual = document.createElement('li'); // Se prepara el elemento
        amigos.push(amigoElement.value); // Enlisto el valor dentro de amigos
        amigoLIActual.innerHTML = amigoElement.value; // Momento dónde se entrega el dato al nuevo elemento <li>
        amigosElement.appendChild(amigoLIActual); // Se agrega el elemento <li> en el elemento <ul>
        amigoElement.value = ''; // Se limpia el input
    } else {
        alert(`Por favor, ingrese ${amigos[0] == undefined ? "un" : "otro"} nombre de amigo.`);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) return alert("La lista de amigos está vacío.");
    let posicionAmigoDeLaLista = Math.floor(Math.random()*amigos.length);
	amigoEncontradoEnLista = encontrarEnAmigos("Exacto!", posicionAmigoDeLaLista);
    if (!amigoEncontradoEnLista) alert(`La persona elegida fue ${amigos[posicionAmigoDeLaLista]}`)
	else alert("Adivinaste!\n" + `${amigoElement.value} fue la persona elegida.`) 
    resultado.innerHTML = `Amigo sorteado: ${amigos[posicionAmigoDeLaLista]}`;
    amigoElement.value = ''; // Se limpia el input
}