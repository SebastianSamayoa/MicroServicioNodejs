var Configuraciones = require('../configuraciones/configuracion');
var mongoose = require('mongoose');

var mongourl;
var mongopuerto;
var mongousuario;
var mongocontrasenia;
var datos;

async function RecuperaConfiguraciones(){
    var iniciando = await Configuraciones;
    return iniciando;
}

var app = (async function(){
    try {
        datos = await RecuperaConfiguraciones();
        //console.log(datos);
        mongoose.connection.openUri('mongodb://'+datos.mongousuario+':'+datos.mongocontrasenia+'@'+datos.mongourl+':'+datos.mongopuerto+'/usuario?authSource=admin',(err,res)=>{
            if (err) {
                throw err;
            }
            console.log('Conectado a la base de datos');
        });
    } catch (error) {
        console.log(error);
    }

})();

module.exports = app;