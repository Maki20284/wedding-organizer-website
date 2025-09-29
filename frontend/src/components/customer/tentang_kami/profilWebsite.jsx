import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ProfilWebsite() {
  const [profil, setProfil] = useState(null);
  const [loading, setLoading] = useState(true);
    // Fetch profil dari backend
  useEffect(() => {
  const fetchProfil = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/profil");
      if (res.ok) {
        const data = await res.json();
        setProfil(data[0] || null); // kalau kosong → null
      } else {
        // kalau gagal ambil (misal butuh token), biarkan pakai defaultProfil
        setProfil(null);
      }
    } catch (err) {
      console.error("Error ambil profil:", err);
      setProfil(null);
    } finally {
      setLoading(false);
    }
  };

  fetchProfil();
}, []);

  if (loading) return <p className="text-center py-6">Loading...</p>;

  // ✅ Template default jika database kosong
  const defaultProfil = {
    gambar: "/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg",
    nama_wo: "JeWePe Wedding Organizer",
    deskripsi:
      "Kami adalah Wedding Organizer profesional yang siap membantu Anda mewujudkan pernikahan impian dengan pelayanan terbaik.",
    alamat: "Jl. Mawar No. 123, Jakarta",
    telepon: "0812-3456-7890",
    email: "info@jewepewo.com",
    sosial_media: "https://instagram.com/jewepe_wo",
  };

  const p = profil || defaultProfil;

  return (
    <div className="bg-gradient-to-b from-burgundy/30 to-ivory py-12 px-6 font-cormorant">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Foto WO */}
        <motion.img
          src={p.gambar}
          alt={p.nama_wo}
          className="w-40 h-40 object-cover rounded-full border-1 border-burgundy shadow-md mb-6"
          whileHover={{ scale: 1.05 }}
        />

        {/* Nama */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">{p.nama_wo}</h1>

        {/* Deskripsi */}
        <p className="text-gray-600 text-lg mb-6 max-w-2xl leading-relaxed">
          {p.deskripsi}
        </p>

        {/* Info Kontak */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left">
          <div className="flex items-center gap-3">
            <MapPin className="text-burgundy" />
            <span className="text-gray-700">{p.alamat}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-burgundy" />
            <span className="text-gray-700">{p.telepon}</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-burgundy" />
            <span className="text-gray-700">{p.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-burgundy" />
            <a
              href={p.sosial_media}
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:underline"
            >
              {p.sosial_media}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
