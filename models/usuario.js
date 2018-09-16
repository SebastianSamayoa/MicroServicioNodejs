var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Usuario = new Schema({
    nombre: { type: String, required: [true, 'El nombre es Requerido']},
    contrasena: { type: String, required: [true, 'La contrasena es Requerida']}
});

module.exports= mongoose.model('Usuario', Usuario);