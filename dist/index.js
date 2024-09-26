"use strict";
function greet(name) {
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
        element.innerText = greeting;
    }
}
greet("World");
window.addEventListener('DOMContentLoaded', () => {
    let nombres = [];
    const nombreIntro = document.getElementById('name');
    const bttnElement = document.getElementById('bttn');
    const outputElement = document.getElementById('nameList');
    function recogerValor() {
        // Recoger el valor del input
        const name = nombreIntro.value;
        addName(name);
        // Mostrar el valor en el elemento de salida
        outputElement.textContent = `${name}`;
    }
    // Añadir un event listener al botón para ejecutar la función cuando el botón sea clicado
    bttnElement.addEventListener('click', recogerValor);
    function addName(name1) {
        nombres.push(name1);
    }
    function mostrarLista() {
    }
});
