document.addEventListener('DOMContentLoaded', function() {
    //obtener fecha de hoy
      const fechaHoyElemento = document.getElementById('fechaHoy');
    //creamos un nuevo objeto hoy que es una instancia de la clase Date de JavaScript
      const hoy = new Date();

    //función para indicar nombre del día de la semana 
    function mostrarDiaDeLaSemana(fecha) {
        const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const diaDeLaSemana = fecha.getDay();
        return dias[diaDeLaSemana];
      }

    //Formato de fecha personalizado
        const dia = mostrarDiaDeLaSemana(hoy);
        const formatodia = {year: 'numeric', month: 'long', day: 'numeric' }; 
    
   //toLocaleDateString('es-ES') perdite dar formato local a la fecha
      fechaHoyElemento.textContent = dia + " - " + hoy.toLocaleDateString('es-ES', formatodia);
    });
