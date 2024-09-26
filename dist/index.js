"use strict";
function greet(name) {
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
        element.innerText = greeting;
    }
}
greet("");
/** DOMContentLoaded = se dispara cuando el documento HTML ha sido completamente cargado y parseado,
  *pero sin esperar a que se hayan cargado todos los recursos externos como imágenes,
  *hojas de estilo o frames. Es útil cuando quieres ejecutar código tan pronto como el DOM esté listo,
  * pero sin esperar a que todos los recursos multimedia se hayan cargado.
  **/
window.addEventListener('DOMContentLoaded', () => {
    let nombres = [];
    const nombreIntro = document.getElementById('name');
    const bttnElement = document.getElementById('bttn');
    const cardContainer = document.getElementById('nameList');
    //mi promesa
    function miPromesa() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Operación completada');
                resolve('Operación completada'); // Mensaje opcional si es necesario
            }, 2000); // 2 segundos de espera
        });
    }
    bttnElement.addEventListener('click', () => {
        var _a;
        //trim() = se utilza para eliminar los espacios en blanco 
        const inputValue = (_a = nombreIntro.value) === null || _a === void 0 ? void 0 : _a.toString().trim();
        if (inputValue) {
            // Esperar a que la promesa (simulada) se complete antes de continuar
            miPromesa().then(() => {
                const card = document.createElement('ion-card');
                const cardContent = document.createElement('ion-card-content');
                cardContent.textContent = inputValue;
                //appendChild() =  para añadir un nodo o contenido a un elemento en el DOM
                card.appendChild(cardContent);
                //añade la tarjeta al contenedor
                cardContainer.appendChild(card);
                nombreIntro.value = '';
            }).catch((error) => {
                console.error('Error', error);
            });
        }
    });
});
