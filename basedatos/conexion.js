const mongoose = require("mongoose");
const colors = require("colors");
const url = "mongodb://localhost:27017/mi_blog";

const conexion = async () => {
    try {
        await mongoose.connect(url);
        console.log("Conexion a DB exitosa en : ".yellow + url.green);
        //Solo si falla
        //Parametros mongoose : useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    }
    catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la DB".red);
    }
}   

module.exports = {
    conexion
}