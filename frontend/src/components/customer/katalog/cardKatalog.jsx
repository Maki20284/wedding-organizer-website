import React from "react";

export default function CardKatalog({ image, name, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Gambar katalog */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = "/fallback.jpg"; // fallback kalau gambar gagal dimuat
        }}
      />

      {/* Konten katalog */}
      <div className="align-left p-4">
        <h3 className="text-lg font-cormorant font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-burgundy text-[16px] mt-[11px]">
          Rp {Number(price).toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
