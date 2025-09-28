const express = require("express");
const router = express.Router();
const { createPesanan } = require("../controllers/pesananController");

router.post("/", createPesanan);

module.exports = router;
