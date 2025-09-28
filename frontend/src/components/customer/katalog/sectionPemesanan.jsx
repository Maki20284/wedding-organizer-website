import { Link } from "react-router-dom";

export default function SectionPemesanan() {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten */}
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h2 className="text-3xl md:text-4xl mb-4 font-allison">
          Siap Memesan Paket Pernikahan Anda?
        </h2>
        <p className="mb-6 font-cormorant text-lg">
          Klik tombol di bawah untuk melanjutkan ke form pemesanan dan wujudkan
          pernikahan impian Anda bersama kami.
        </p>
        <Link
          to="/form-pemesanan"
          className="bg-burgundy text-ivory px-6 py-3 rounded-sm font-cormorant font-semibold hover:bg-ivory hover:text-burgundy transition"
        >
          Pesan Sekarang
        </Link>
      </div>
    </section>
  );
}
