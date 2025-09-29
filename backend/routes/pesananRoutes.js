const express = require("express");
const router = express.Router();
const { createPesanan, getAllPesanan, updateStatus } = require("../controllers/pesananController");

// Route untuk customer
router.post("/", createPesanan);

// Route untuk admin melihat semua pesanan
router.get("/admin", getAllPesanan);

// Route untuk admin update status
router.put("/:id/status", updateStatus);

module.exports = router;
