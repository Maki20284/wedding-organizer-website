import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProfil() {
  const [profil, setProfil] = useState({
    nama_wo: "",
    deskripsi: "",
    alamat: "",
    telepon: "",
    email: "",
    sosial_media: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Cek login
  useEffect(() => {
    if (!token) {
      navigate("/login-admin");
    }
  }, [token, navigate]);

  // Ambil data profil
  useEffect(() => {
    const fetchProfil = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profil", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.length > 0) {
          setProfil(res.data[0]); // ambil data pertama
        }
      } catch (err) {
        console.error(err);
        alert("Gagal mengambil data profil");
      } finally {
        setLoading(false);
      }
    };
    fetchProfil();
  }, [token]);

  // handle input
  const handleChange = (e) => {
    setProfil({ ...profil, [e.target.name]: e.target.value });
  };

  // simpan perubahan
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/profil/${profil.id_profil}`,
        profil,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profil berhasil diperbarui!");
      window.location.href = "/tentang";
    } catch (err) {
      console.error(err);
      alert("Gagal memperbarui profil");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Profil Website</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-medium">Nama WO</label>
          <input
            type="text"
            name="nama_wo"
            value={profil.nama_wo}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={profil.deskripsi}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={profil.alamat}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Telepon</label>
          <input
            type="text"
            name="telepon"
            value={profil.telepon}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profil.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block font-medium">Sosial Media</label>
          <input
            type="text"
            name="sosial_media"
            value={profil.sosial_media}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}
