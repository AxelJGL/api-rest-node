// Imports
const { conexion } = require("./basedatos/conexion"); // DB Mongoose
const express = require("express"); // import express
const cors = require("cors"); // import cors
const colors = require("colors"); // import colors dev dep

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
app.use(express.json());

//Crear Rutas
app.get("/", (req, res) => {
    console.log("Main EndPoint Executed Correctly");
    return res.status(200).send(`
        <div>
            <h1>Main End Point Running!!</h1>
        </div>
    `);

});

app.get("/sending", (req, res) => {
    console.log("Sending EndPoint Executed Correctly")
    return res.status(200).json([
        archivo1 = {
            curso: "pruebas",
            autor: "Axel",
            url: "stuff"
        },
        archivo2 = {
            curso: "pruebas2",
            autor: "Axel Javier",
            url: "test"
        },
    ]);
});

//Crear Servidor y Escuchar Peticiones
app.listen(port, () => {
    console.log("Server Runing on: ".yellow + (localHostUrl + port).green);
});

