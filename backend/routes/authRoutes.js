const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// register admin
router.post("/register", async (req, res) => {
  const { username, password, email_admin, nama_admin } = req.body;
  if (!username || !password || !email_admin || !nama_admin) return res.status(400).json({ message: "Data tidak lengkap" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = "INSERT INTO admin (username, password, email_admin, nama_admin) VALUES (?, ?, ?, ?)";
  db.query(query, [username, hashedPassword, email_admin, nama_admin], (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal membuat akun" });
    res.status(201).json({ message: "Akun berhasil dibuat" });
  });
});

// login admin
router.post("/login", (req, res) => {
  const { identifier, password } = req.body; // gunakan identifier
  if (!identifier || !password) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  // cek di database berdasarkan username atau email
  const query = "SELECT * FROM admin WHERE username=? OR email_admin=?";
  db.query(query, [identifier, identifier], async (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });
    if (results.length === 0)
      return res.status(400).json({ message: "Admin tidak ditemukan" });

    const admin = results[0];

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ message: "Password salah" });

    const token = jwt.sign(
      { id: admin.id_admin, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login sukses", token });
  });
});

module.exports = router;
