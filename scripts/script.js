const btnFah = document.getElementById('fahid');
const btnCel = document.getElementById('celid');

btnCel.addEventListener('click', () => {
    btnCel.classList.add('active');
    btnFah.classList.remove('active');
});

btnFah.addEventListener('click', () => {
    btnFah.classList.add('active');
    btnCel.classList.remove('active');
});

