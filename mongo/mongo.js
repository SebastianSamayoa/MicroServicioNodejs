
var Configuraciones = require('../configuraciones/configuracion');
var request = require ('request');

var mongourl;
var mongopuerto;
var mongousuario;
var mongocontrasenia;

function main() {
    var iniciando = Configuraciones;
    iniciando.then((res) => {
        console.log(res); 
        return res;
    });
}

main();
