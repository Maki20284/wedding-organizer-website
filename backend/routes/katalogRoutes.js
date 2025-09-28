const express = require("express");
const router = express.Router();
const db = require("../db"); // koneksi MySQL
const multer = require("multer");
const path = require("path");

// Konfigurasi upload gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// ✅ Ambil semua katalog
router.get("/", (req, res) => {
  db.query("SELECT * FROM katalog", (err, results) => {
    if (err) return res.status(500).json({ message: "Error ambil katalog" });
    res.json(results);
  });
});

// ✅ Tambah katalog
router.post("/", upload.single("gambar"), (req, res) => {
  const { nama_katalog, deskripsi, harga } = req.body;
  const gambar = req.file ? `/uploads/${req.file.filename}` : null;

    console.log(req.body);

  if (!nama_katalog || !harga) return res.status(400).json({ message: "Data tidak lengkap" });

  db.query(
    "INSERT INTO katalog (nama_katalog, deskripsi, harga, gambar) VALUES (?, ?, ?, ?)",
    [nama_katalog, deskripsi, harga, gambar],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Gagal tambah katalog" });
      res.json({ message: "Katalog berhasil ditambahkan" });
    }
  );
});

// ✅ Edit katalog
router.put("/:id", upload.single("gambar"), (req, res) => {
  const { nama_katalog, deskripsi, harga } = req.body;
  const gambar = req.file ? `/uploads/${req.file.filename}` : req.body.gambar;

  db.query(
    "UPDATE katalog SET nama_katalog=?, deskripsi=?, harga=?, gambar=? WHERE id_katalog=?",
    [nama_katalog, deskripsi, harga, gambar, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Gagal update katalog" });
      res.json({ message: "Katalog berhasil diperbarui" });
    }
  );
});

// ✅ Hapus katalog
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM katalog WHERE id_katalog=?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal hapus katalog" });
    res.json({ message: "Katalog berhasil dihapus" });
  });
});

module.exports = router;
