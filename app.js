const cliente = require("cloud-config-client");
const mysql = require('mysql');

var url;
var puerto;
var usuario;
var contrasenia;

cliente.load({
    endpoint: 'http://192.168.43.18:5010',
    application: "demo",
    context: process.env
}).then((config) => {
    //console.log(config.get("mensaje"));
    url = config.get("mysql.url");
    puerto = config.get("mysql.port");
    usuario = config.get("spring.datasource.username");
    contrasenia = config.get("spring.datasource.password");
    mysqlconect();
    //config.forEach((key, value) => console.log(value));
}).catch(console.error);

function mysqlconect() {
    var conexion = mysql.createConnection({
        host: url,
        user: usuario,
        password: '123456',
        port: puerto

    });

    conexion.connect(function(error) {
        if (error) {
            throw error;
        } else {
            console.log('Conexion correcta.');
        }
    });
    conexion.end();

}