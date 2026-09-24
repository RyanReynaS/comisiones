// Funciones reutilizables: leer inputs del HTML y escribir resultados

// Devuelve el texto escrito en un input (siempre como string)
function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    return componente.value;
}

// Devuelve el valor de un input como número decimal (ej: "125.50" → 125.5)
function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    return parseFloat(valorTexto);
}

// Devuelve el valor de un input como número entero (ej: "8.7" → 8)
function recuperarEntero(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    return parseInt(valorTexto);
}

// Escribe un valor dentro de un elemento del HTML (ej: un <strong>)
function mostrarEnSpan(idComponente, valor) {
    let componente = document.getElementById(idComponente);
    componente.textContent = valor;
}
