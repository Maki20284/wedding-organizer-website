import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ setToken }) {
  return (
    <div className="bg-ivory top-0 left-0 w-64 min-h-screen flex flex-col justify-between p-4">
      <div>
        <h1 className="text-lg font-black font-cormorant font-bold mb-6">W.O.</h1>
        <ul>
          <li className="mb-2"><Link to="/edit-profil">Kelola Profil Website</Link></li>
          <li className="mb-2"><Link to="/kelola-katalog">Kelola Katalog</Link></li>
          <li className="mb-2"><Link to="/kelola-pesanan">Kelola Pesanan</Link></li>
        </ul>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
        }}
        className="bg-red-600 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
