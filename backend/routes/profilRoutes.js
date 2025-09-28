const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// middleware autentikasi
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token tidak valid" });
    req.adminId = decoded.id;
    next();
  });
};

// ambil semua profil website
router.get("/", verifyToken, (req, res) => {
  db.query("SELECT * FROM profil", (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json(results);
  });
});

// tambah profil
router.post("/", verifyToken, (req, res) => {
  const { nama_wo, deskripsi, alamat, telepon, email, sosial_media } = req.body;
  if (!nama_wo || !deskripsi || !alamat || !telepon || !email || !sosial_media) return res.status(400).json({ message: "Data tidak lengkap" });

  const query = "INSERT INTO profil (nama_wo, deskripsi, alamat, telepon, email, sosial_media) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(query, [nama_wo, deskripsi, alamat, telepon, email, sosial_media], (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.status(201).json({ message: "Berhasil ditambahkan", id: result.insertId });
  });
});

// update profil
router.put("/:id", verifyToken, (req, res) => {
  const { nama_wo, deskripsi, alamat, telepon, email, sosial_media } = req.body;
  const { id_profil } = req.params;
  const query = "UPDATE profil SET nama_wo=?, deskripsi=?, alamat=?, telepon=?, email=?, sosial_media=?, WHERE id_profil=?";
  db.query(query, [nama_wo, deskripsi, alamat, telepon, email, sosial_media, id_profil ], (err) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json({ message: "Berhasil diupdate" });
  });
});

// hapus profil
router.delete("/:id_profil", verifyToken, (req, res) => {
  const { id_profil } = req.params;
  const query = "DELETE FROM profil WHERE id_profil=?";
  db.query(query, [id_profil], (err) => {
    if (err) return res.status(500).json({ message: "Server error" });
    res.json({ message: "Berhasil dihapus" });
  });
});

module.exports = router;
