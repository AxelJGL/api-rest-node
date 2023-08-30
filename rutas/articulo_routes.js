const express = require("express");
const router = express.Router();

const ArticuloController = require("../controladores/articulo_controller");

// Article Routes

router.post("/createArticle", ArticuloController.createArticle);

module.exports = router;