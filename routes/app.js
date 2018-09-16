var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'consultando con exito'
    });
});

module.exports = app;