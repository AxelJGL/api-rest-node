// Imports
const { conexion } = require("./basedatos/conexion"); // DB Mongoose
const express = require("express"); // import express
const cors = require("cors"); // import cors
const colors = require("colors"); // import colors dev dep

//Routes import


// Inicializar App
console.log("Initializing Server...".bgBrightGreen);

//Conectar a DB
conexion();

// Crear Servidor Node
const app = express();
const port = "3080";
const localHostUrl = "http://localhost:";

//Configurar Cors
app.use(cors());

//Convertir body a Object JS
app.use(express.json()); // get data from content-type app/json
app.use(express.urlencoded({ extended: true })); // geta data from content-type url-encoded

//Crear Rutas



//Crear Servidor y Escuchar Peticiones
app.listen(port, () => {
    console.log("Server Runing on: ".yellow + (localHostUrl + port).green);
});

