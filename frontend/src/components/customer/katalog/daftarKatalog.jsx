import { useState, useEffect } from "react";
import CatalogCard from "./cardKatalog";
import DeskripsiKatalog from "./deskripsiKatalog";

export default function DaftarKatalog() {
  const [katalogs, setKatalogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedKatalog, setSelectedKatalog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/katalog")
      .then((res) => res.json())
      .then((data) => setKatalogs(data));
  }, []);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(katalogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = katalogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-cormorant">
      <div className="items-center justify-center text-center border-b pb-6 mb-[36px]">
        <h1 className="text-[36px] font-bold mb-2 text-black">Daftar Katalog</h1>
        <p className="text-lg text-center max-w-2xl px-4">
          Jelajahi berbagai paket pernikahan yang kami tawarkan.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 pb-6">
        {currentItems.map((item) => (
          <div key={item.id_katalog} onClick={() => setSelectedKatalog(item)} className="cursor-pointer">
            <CatalogCard
              image={`http://localhost:5000${item.gambar}`}
              name={item.nama_katalog}
              price={item.harga}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center gap-3 pb-10">
        <p className="text-gray-600">Halaman {currentPage} dari {totalPages}</p>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-sm border transition ${
                currentPage === i + 1
                  ? "bg-burgundy text-ivory border-burgundy"
                  : "bg-white text-burgundy border-burgundy hover:bg-burgundy hover:text-ivory"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Pop up */}
      {selectedKatalog && (
        <DeskripsiKatalog
          katalog={selectedKatalog}
          onClose={() => setSelectedKatalog(null)}
        />
      )}
    </div>
  );
}
