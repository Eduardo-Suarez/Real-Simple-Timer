let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

let mesYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agoust', 'September','October', 'November', 'December'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesYear[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(() => {
    let hora = new Date();
    mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000)