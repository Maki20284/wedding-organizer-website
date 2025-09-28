const db = require("../db");

exports.createPesanan = (req, res) => {
  const { namaDepan, namaBelakang, email, noHp, tanggalAcara, idKatalog } = req.body;

  if (!namaDepan || !namaBelakang || !email || !noHp || !tanggalAcara || !idKatalog) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const namaPemesan = `${namaDepan} ${namaBelakang}`;
  const status = "request";
  const tanggalPesan = new Date();

  const sql = `INSERT INTO pesanan 
    (nama_pemesan, email_pemesan, no_hp, tanggal_acara, id_katalog, status, tanggal_pesan) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [namaPemesan, email, noHp, tanggalAcara, idKatalog, status, tanggalPesan],
    (err, result) => {
      if (err) {
        console.error("❌ Error insert pesanan:", err);
        return res.status(500).json({ message: "Gagal membuat pesanan" });
      }
      res.status(201).json({
        message: "Pesanan berhasil dibuat",
        id_pesanan: result.insertId,
      });
    }
  );
};
