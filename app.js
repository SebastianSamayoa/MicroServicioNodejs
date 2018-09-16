//importando modulos principales
var express = require('express');
var bodyParser = require('body-parser');
var basedatos = require('./mongo/mongo');

// importando rutas
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/usuario');

//Iniciando variables
var app = express();
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
    console.log('Servidor Corriendo');
});

//usando los middelware
app.use('/usuario', userRoutes);
app.use('/', appRoutes);

