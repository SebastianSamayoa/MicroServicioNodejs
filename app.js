//importando modulos principales
var express = require('express');
var bodyParser = require('body-parser');
var basedatos = require('./mongo/mongo');
var eureka = require('./eureka/eureka');

// importando rutas
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/usuario');

//Iniciando variables
var app = express();

//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

//Definindo puerto
var puertonode = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//levantando el servidor
app.listen(puertonode, (err, res)=>{
    if (err) {
        throw err;
    }
    console.log(basedatos);
    console.log(eureka);
    console.log('Servidor Corriendo');
});

//usando los middelware
app.use('/usuario', userRoutes);
app.use('/', appRoutes);

