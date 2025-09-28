import { useState, useEffect } from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import Beranda from './pages/beranda';
import Katalog from "./pages/customer_pages/katalog";
import Pemesanan from "./pages/customer_pages/pemesanan";
import LoginAdmin from "./pages/admin_pages/login";
import EditProfil from "./pages/admin_pages/editProfilWebsite";
import Register from "./pages/admin_pages/register";
import EditKatalog from "./pages/admin_pages/editKatalog";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  // Protected Route
  const ProtectedRoute = ({ children }) => {
    if (!token) return <Navigate to="/login-admin" />;
    return children;
  };

 return (
  <Routes>
    <Route path="/" element={<Navigate to="/beranda" />} />
    <Route path="/beranda" element={<Beranda />} />
    <Route path="/katalog" element={<Katalog />} />
    <Route path="/form-pemesanan" element={<Pemesanan />} />
    <Route path="/login-admin" element={<LoginAdmin setToken={setToken} />} />
    <Route path="/edit-profil" element={
      <ProtectedRoute>
        <EditProfil token={token} setToken={setToken} />
      </ProtectedRoute>
    } />
    <Route path="/register" element={<Register />} />
    <Route path="/kelola-katalog" element={
      <ProtectedRoute>
        <EditKatalog token={token} />
      </ProtectedRoute>
    } />
  </Routes>
  );
}

export default App
