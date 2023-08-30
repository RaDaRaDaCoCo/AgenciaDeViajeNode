// const express = require('express');
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"

const app = express();

//Conectar la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

//Definir el puerto 
const port = process.env.PORT || 4000;
//Habilitar pug
app.set('view engine', 'pug');
//optener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreCitio = 'Agencia de Viaje'
    next();
})
//Agregar body parse para leer informacion del formulario
app.use(express.urlencoded({extended: true}));
//Definir la carpeta publica
app.use(express.static('public'))
//agregar Router 
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionado en el puerto ${port}`);
});