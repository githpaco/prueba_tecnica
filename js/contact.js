const micheckbox = document.getElementById('privacyPolicy');
const miboton = document.getElementById('myButton');

//evento change para escuchar las modificaciones en el boton submit del formulario
micheckbox.addEventListener('change', function () {
    myButton.disabled = !this.checked;
});