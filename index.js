const inputText = document.getElementById('inputText'); //Seleccion la entrada de texto
const buttonText = document.getElementById('buttonText'); //Seleccion el boton

buttonText.addEventListener('click', () => { //agrego un evento al boton
    const text = inputText.value; //obtengo el valor de la entrada de texto
    localStorage.setItem('text', text); //guardo el valor en el localStorage
});