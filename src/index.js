// inyeccion de dependencias.
const express = require('express');
const mongoose = require('mongoose');
// permite crear llaves, como cuando no se quiere compartir una informacion y se pone en otro archivo
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

// conexion con mongoose, utilizando el archivo .env
mongoose
    .connect(process.env.MONGODB_URI) // la conecta
    .then(()=> console.log('Connected to MongoDB Atlas')) // accion que marca el exito
    .catch((error) => console.log(error)); // en caso de error 'cacha' el error y lo imprime en la terminal


// comprueba que el servidor este arriba y en el puerto en el que esta.
app.listen(port, () => console.log('Server listening on port', port));
