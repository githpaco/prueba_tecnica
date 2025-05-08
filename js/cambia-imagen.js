//cambia la imagen al hacer check sobre el boton input
const imagen = document.getElementById('miImagen');
  //evento click sobre la imagen
imagen.addEventListener('click', function() {
  if (imagen.src.includes('img/ninos.jpg')) {
    imagen.src = 'img/cuidado.jpg';
  } else {
    imagen.src = 'img/ninos.jpg';
  }
});