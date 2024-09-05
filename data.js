const dataGuardada = localStorage.getItem('text'); //obtengo el valor guardado en localStorage

if (dataGuardada) {
    document.getElementById('data').textContent = dataGuardada; //muestro el valor en el html
} else {
    document.getElementById('data').textContent = 'No hay datos guardados'; //muestro un mensaje si no hay datos guardados
}