const express = require("express");
const router = express.Router();
const pdfController = require("../controller/pdfController.js");

router.post("/get", pdfController.generatePDF);

module.exports = router;
