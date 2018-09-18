var express = require('express');
var Usuario = require('../models/usuario');

var app = express();

//================================================
//Consulta de Usuarios
//================================================
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

//================================================
//Creacion de Usuario
//================================================
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

//================================================
//Actualizacion de Usuario
//================================================
app.put('/:id', (req, res) => {
    var body = req.body;
    var id = req.params.id;
    Usuario.findById(id, (err,usuario)=>{
        if (err){
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al Buscar el Usuario',
                errors: err
            });
        }

        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al Buscar el Usuario',
                errors: { message: 'No existe el usuario buscado'}
            });
        }

        usuario.nombre = body.nombre;
        usuario.contrasena =  body.contrasena;

        usuario.save((err, UserSave)=>{
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al Actualizar el Usuario',
                    errors: err
                });
            }
            return res.status(201).json({
                ok: true,
                mensaje: 'Usuario Actualizado con Exito',
                usuarios: UserSave
            });
        });
    });
});


module.exports = app;