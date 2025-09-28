import React from "react";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-ivory/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Container navbar */}
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="text-xl font-semibold text-black tracking-wide font-cormorant">
            W.O.
          </div>
          {/* Menu di Tengah */}
          <div className="flex-1 flex gap-[30px] justify-center">
            <Link
              to="/"
              className="text-[16px] font-semibold text-black font-cormorant hover:text-burgundy transition"
            >
              Beranda
            </Link>
            <Link
              to="/katalog"
              className="text-[16px] font-semibold text-black font-cormorant hover:text-burgundy transition"
            >
              Katalog
            </Link>
            <Link
              to="/tentang"
              className="text-[16px] font-semibold text-black font-cormorant hover:text-burgundy transition"
            >
              Tentang Kami
            </Link>
            <Link
              to="/kontak"
              className="text-[16px] font-semibold text-black font-cormorant hover:text-burgundy transition"
            >
              Kontak
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
