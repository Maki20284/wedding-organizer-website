import { useState } from "react";
import CatalogCard from "./cardKatalog";
import DeskripsiKatalog from "./deskripsiKatalog";

export default function DaftarKatalog() {
  const katalogs = [
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Sederhana", 
      price: 5000000,
      rating: 4.5,
      description: [
        "Paket ini dirancang untuk pasangan yang menginginkan acara sederhana namun tetap berkesan.",
        "Dekorasi minimalis namun elegan dengan pelayanan profesional.",
        "Harga terjangkau tanpa mengurangi kualitas acara."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg", 
      name: "Pernikahan Outdoor", 
      price: 15000000,
      rating: 4.8,
      description: [
        "Paket outdoor dengan tema alam yang romantis.",
        "Dekorasi garden party dengan sentuhan modern.",
        "Cocok untuk tamu undangan yang lebih intim."
      ]
    },
    { 
      image: "/kerri-shaver-xepikEyPgmI-unsplash.jpg", 
      name: "Pernikahan Modern", 
      price: 25000000,
      rating: 4.9,
      description: [
        "Konsep modern dengan dekorasi elegan dan stylish.",
        "Paket termasuk dokumentasi foto dan video premium.",
        "Fasilitas lengkap untuk memberikan kenyamanan."
      ]
    },
    { 
      image: "nathan-dumlao-5BB_atDT4oA-unsplash.jpg", 
      name: "Pernikahan Mewah", 
      price: 75000000,
      rating: 5,
      description: [
        "Paket pernikahan dengan kemewahan penuh.",
        "Dekorasi premium dengan layanan kelas atas.",
        "Pilihan terbaik untuk momen tak terlupakan."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Romantis Indoor", 
      price: 12000000,
      rating: 4.6,
      description: [
        "Dekorasi romantis di dalam ruangan dengan nuansa hangat.",
        "Cocok untuk acara dengan undangan keluarga inti.",
        "Pilihan dekorasi bunga segar dan pencahayaan elegan."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Tradisional", 
      price: 10000000,
      rating: 4.7,
      description: [
        "Mengusung adat dan budaya Indonesia.",
        "Paket termasuk busana pengantin tradisional.",
        "Dekorasi khas daerah sesuai permintaan."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Pantai", 
      price: 20000000,
      rating: 4.8,
      description: [
        "Romantis di tepi pantai dengan pemandangan laut.",
        "Dekorasi bernuansa tropis.",
        "Cocok untuk acara dengan tamu terbatas."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Ballroom Mewah", 
      price: 50000000,
      rating: 5,
      description: [
        "Ballroom hotel bintang 5 dengan dekorasi premium.",
        "Sound system dan lighting profesional.",
        "Pilihan menu internasional untuk tamu undangan."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Intimate", 
      price: 8000000,
      rating: 4.4,
      description: [
        "Paket untuk acara pernikahan kecil dan hangat.",
        "Dekorasi sederhana dengan nuansa kekeluargaan.",
        "Cocok untuk pasangan yang menginginkan kesederhanaan."
      ]
    },
    { 
      image: "/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg", 
      name: "Pernikahan Vintage", 
      price: 18000000,
      rating: 4.7,
      description: [
        "Tema klasik vintage dengan dekorasi retro.",
        "Furniture dan aksesoris khas era 70-80an.",
        "Memberikan kesan unik dan memorable."
      ]
    }
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(katalogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = katalogs.slice(startIndex, startIndex + itemsPerPage);

  const [selectedKatalog, setSelectedKatalog] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-cormorant">
      <div className="items-center justify-center text-center border-b pb-6 mb-[36px]">
        <h1 className="text-[36px] font-bold mb-2 text-black">Daftar Katalog</h1>
        <p className="text-lg text-center max-w-2xl px-4">
          Jelajahi berbagai paket pernikahan yang kami tawarkan, mulai dari yang sederhana hingga yang mewah. 
          Setiap paket dirancang untuk memenuhi kebutuhan dan anggaran Anda.
        </p>
      </div>
      
      {/* Grid untuk card */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 pb-6">
        {currentItems.map((item, idx) => (
          <div key={idx} onClick={() => setSelectedKatalog(item)} className="cursor-pointer">
            <CatalogCard
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center gap-3 pb-10">
        <p className="text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </p>
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

      {/* Pop up deskripsi */}
      {selectedKatalog && (
        <DeskripsiKatalog 
          katalog={selectedKatalog} 
          onClose={() => setSelectedKatalog(null)} 
        />
      )}
    </div>
  );
}
