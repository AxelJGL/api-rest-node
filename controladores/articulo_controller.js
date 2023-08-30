// Imports
const validator = require("validator");
const Articulo = require("../modelos/Articulo");

const createArticle = (req, res) => {

    // get post params
    const params = req.body;

    // Validate data
    try {
        let validateTitle = !validator.isEmpty(params.title) &&
            validator.isLength(params.title, { min: 10, max: 35 });

        let validateContent = !validator.isEmpty(params.content);

        if (!validateTitle || !validateContent) {
            throw new Error("Information not Validated")
        } // if
    } // try
    catch (error) {
        return res.status(400).json({
            status: "error",
            mensaje: "Missing Data"
        });
    } // catch

    // create object and send the params
    const article = new Articulo(params);

    // set object data
    // HardCoded: article.title = params.title;

    // save on db
    article.save((error, savedArticle) => {
        if (error || !savedArticle) {
            return res.status(400).json({
                status: "error",
                mensaje: "Error: data not Saved into DB"
            });
        } // if
        // return result
        return res.status(200).json({
            status: "Success",
            savedArticle: savedArticle,
            mensaje: "Article Saved Succesfuly"
        })
    });

    articulo.save()
        .then((articuloGuardado) => {
            return res.status(200).json({
                status: 'success',
                Articulo: articuloGuardado,
                mensaje: 'Articulo creado con exito'
            });
        })
        .catch((error) => {
            return res.status(400).json({
                status: 'error',
                mensaje: 'No se ha guardado el articulo: ' + error.message
            });
        });

}
module.exports = {
    createArticle
}
