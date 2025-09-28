import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import Beranda from './pages/beranda';
import Katalog from "./pages/customer_pages/katalog";
import Pemesanan from "./pages/customer_pages/pemesanan";

function App() {
 return (
  <Routes>
    <Route path="/" element={<Navigate to="/beranda" />} />
    <Route path="/beranda" element={<Beranda />} />
    <Route path="/katalog" element={<Katalog />} />
    <Route path="/form-pemesanan" element={<Pemesanan />} />
  </Routes>
  );
}

export default App
