import { X } from "lucide-react"; // ikon close
import { Link } from "react-router-dom";

export default function DeskripsiKatalog({ katalog, onClose }) {
  if (!katalog) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Judul */}
        <h2 className="text-2xl font-cormorant font-bold text-burgundy mb-2">
          {katalog.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-yellow-500 text-xl">★</span>
          <span className="text-gray-400 text-xl">★</span>
          <span className="ml-2 text-sm text-gray-500">(120 reviews)</span>
        </div>

        {/* Harga */}
        <p className="text-xl font-semibold text-burgundy mb-4">
          Rp {katalog.price.toLocaleString("id-ID")}
        </p>

        {/* Deskripsi */}
        <div className="text-gray-700 space-y-3 mb-6">
          <p>
            Paket {katalog.name} dirancang khusus untuk memberikan pengalaman
            pernikahan yang tak terlupakan. Kami menghadirkan nuansa elegan dan
            penuh kehangatan sesuai dengan keinginan Anda.
          </p>
          <p>
            Tim profesional kami akan memastikan bahwa setiap detail berjalan
            sempurna, mulai dari dekorasi, dokumentasi, hingga layanan
            hiburan. Semua disusun agar hari istimewa Anda penuh makna.
          </p>
          <p>
            Dengan harga yang kompetitif, paket ini adalah pilihan tepat bagi
            Anda yang menginginkan kualitas terbaik tanpa kompromi. Jadikan
            momen pernikahan Anda benar-benar berkesan bersama kami.
          </p>
        </div>

        {/* Tombol Pesan */}
        <Link
          to="/form-pemesanan"
          className="bg-burgundy text-ivory px-6 py-3 rounded-full font-semibold hover:bg-ivory hover:text-burgundy border border-burgundy transition"
        >
          Pesan Katalog
        </Link>
      </div>
    </div>
  );
}
