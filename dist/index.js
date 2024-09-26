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
        return new Promise((resolve, reject) => {
            const name = nombreIntro.value;
            console.log(`Introduciendo ${name}`);
            setTimeout(() => {
                if (name == "") {
                    reject(`Ese nombre no es valido`);
                }
                else {
                    addName(name);
                    outputElement.textContent = `${name}`;
                    resolve(`completado exitosamente`);
                }
            }, 2000);
        });
    }
    bttnElement.addEventListener('click', recogerValor);
    function addName(name1) {
        nombres.push(name1);
    }
    function mostrarLista() {
    }
});
