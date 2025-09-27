import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Container navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-semibold text-black tracking-wide font-serif">
            W.O.
          </div>

          {/* Menu di Tengah */}
          <div className="flex gap-8">
            <Link
              to="/"
              className="text-base font-semibold text-black font-cormorant hover:text-gray-600 transition px-4"
            >
              Beranda
            </Link>
            <Link
              to="/katalog"
              className="text-base font-semibold text-black font-cormorant hover:text-gray-600 transition px-4"
            >
              Katalog
            </Link>
            <Link
              to="/tentang"
              className="text-base font-semibold text-black font-cormorant hover:text-gray-600 transition px-4"
            >
              Tentang Kami
            </Link>
            <Link
              to="/kontak"
              className="text-base font-semibold text-black font-cormorant hover:text-gray-600 transition px-4"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
