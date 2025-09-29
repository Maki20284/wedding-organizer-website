const db = require("../db");

exports.createPesanan = (req, res) => {
  const { nama_pemesan, email_pemesan, no_hp, tanggal_acara, id_katalog } = req.body;

  if (!nama_pemesan || !email_pemesan || !no_hp || !tanggal_acara || !id_katalog) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const tanggal_pesan = new Date(); // tanggal saat pemesanan
  const status = "request";

  db.query(
    "INSERT INTO pesanan (nama_pemesan, email_pemesan, no_hp, tanggal_acara, id_katalog, status, tanggal_pesan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nama_pemesan, email_pemesan, no_hp, tanggal_acara, id_katalog, status, tanggal_pesan],
    (err, result) => {
      if (err) {
        console.error("Gagal tambah pesanan:", err);
        return res.status(500).json({ message: "Gagal tambah pesanan" });
      }
      res.json({ message: "Pesanan berhasil dibuat", id: result.insertId });
    }
  );
};

// Ambil semua pesanan (untuk admin)
exports.getAllPesanan = (req, res) => {
  db.query(
    `SELECT p.*, k.nama_katalog FROM pesanan p
     JOIN katalog k ON p.id_katalog = k.id_katalog
     ORDER BY p.tanggal_pesan DESC`,
    (err, results) => {
      if (err) return res.status(500).json({ message: "Gagal ambil pesanan" });
      res.json(results);
    }
  );
};

// Update status pesanan (admin)
exports.updateStatus = (req, res) => {
  const { status } = req.body;
  db.query(
    "UPDATE pesanan SET status=? WHERE id_pesanan=?",
    [status, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Gagal update status" });
      res.json({ message: "Status berhasil diperbarui" });
    })};
