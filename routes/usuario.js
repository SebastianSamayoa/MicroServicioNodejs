var express = require('express');
var Usuario = require('../models/usuario');

var app = express();

app.get('/', (req, res) => {
    Usuario.find({}, (err, usuarios) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: err
            });
        }
        res.status(200).json({
            ok: true,
            usuarios, usuarios
        });
    });
});

app.post('/', (req, res) => {
    var body = req.body;
    var usuario = new Usuario({
        nombre: body.nombre,
        contrasena: body.contrasena
    });
    
    usuario.save((err, UserSave)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al Crear el Usuario',
                errors: err
            });
        }
        return res.status(201).json({
            ok: true,
            mensaje: 'Usuario Creado con Exito',
            usuarios: UserSave
        });
    });
});

module.exports = app;