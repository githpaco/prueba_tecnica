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
        const formatodia = dia + {year: 'numeric', month: 'long', day: 'numeric' }; // Ejemplo: 7 de mayo de 2025
   //toLocaleDateString('es-ES') perdite dar formato local a la fecha
      fechaHoyElemento.textContent = hoy.toLocaleDateString('es-ES', dia);
    });
