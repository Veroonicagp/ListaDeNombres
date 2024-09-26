function greet(name: string): void {
    const greeting = `Lista, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
      element.innerText = greeting;
    }
  }
  
  greet("Nombres");

/** DOMContentLoaded = se dispara cuando el documento HTML ha sido completamente cargado y parseado, 
  *pero sin esperar a que se hayan cargado todos los recursos externos como imágenes, 
  *hojas de estilo o frames. Es útil cuando quieres ejecutar código tan pronto como el DOM esté listo,
  * pero sin esperar a que todos los recursos multimedia se hayan cargado.
  **/
window.addEventListener('DOMContentLoaded', () => {

  let nombres: string[] = [];
  const nombreIntro = document.getElementById('name') as HTMLIonInputElement;
  const bttnElement = document.getElementById('bttn') as HTMLIonButtonElement;
  const cardContainer = document.getElementById('nameList') as HTMLIonTextElement;

  //mi promesa
  function miPromesa(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Operación completada');
        resolve('Operación completada');  // Mensaje opcional si es necesario
      }, 2000);  // 2 segundos de espera
    });
  }


  bttnElement.addEventListener('click', () => {
    //trim() = se utilza para eliminar los espacios en blanco 
    const inputValue = nombreIntro.value?.toString().trim();

    if(inputValue){
      // Esperar a que la promesa (simulada) se complete antes de continuar
      miPromesa().then(() => {
      const card = document.createElement('ion-card')
      const cardContent = document.createElement('ion-card-content')

      cardContent.textContent = inputValue
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




