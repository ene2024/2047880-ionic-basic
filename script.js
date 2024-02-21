var tipoInput = document.getElementById('tipoTXT');
var montoInput = document.getElementById('montoTXT');

var tipo = '';
var monto = 0;


var total = 0;


const seccionGastos = document.getElementById('Gastos');

function agregar() {
    
    tipo = tipoInput.value;

    monto = parseInt(montoInput.value); 

    total = total + monto;


    let elementoGastos = document.createElement('p');

    elementoGastos.innerHTML = tipo + '......... $' + monto;

    seccionGastos.appendChild(elementoGastos);

    
    limpiar();
}

function limpiar() {
    tipoInput.value = '';
    montoInput.value = '';
}