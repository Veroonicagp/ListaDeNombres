function greet(name: string): void {
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
      element.innerText = greeting;
    }
  }
  
  greet("World");


window.addEventListener('DOMContentLoaded', () => {

    let nombres: string[] = [];
    const nombreIntro = document.getElementById('name') as HTMLIonInputElement;
    const bttnElement = document.getElementById('bttn') as HTMLIonButtonElement;
    const outputElement = document.getElementById('nameList') as HTMLIonTextElement;
  
    function recogerValor():Promise<string> {
      return new Promise((resolve, reject) => {
        const name = nombreIntro.value as string;
        console.log(`Introduciendo ${name}`);
        setTimeout(() => {
          if (name == "" ) {
            reject(`Ese nombre no es valido`);
          } else {
            addName(name)
            outputElement.textContent = `${name}`;
            resolve(`completado exitosamente`);
          }
        }, 2000);
      });
    }


    bttnElement.addEventListener('click', recogerValor);

    function addName(name1:string){
        nombres.push(name1)
      }
    function mostrarLista(){

    }
  });




