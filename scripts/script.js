const btnFahrenheit = document.getElementById('fahid');
const btnCelsius = document.getElementById('celid');

function trocaCelsius() {
    btnCelsius.classList.add('select');
    btnFahrenheit.classList.remove('select');
};

function trocaFahrenheit() {
    btnCelsius.classList.remove('select');
    btnFahrenheit.classList.add('select');
}

btnCelsius.addEventListener('click', trocaCelsius);
btnFahrenheit.addEventListener('click', trocaFahrenheit);