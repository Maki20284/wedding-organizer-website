import { useState, useEffect } from "react";
import Sidebar from "../../components/admin/sideNavbar";

export default function EditProfil({ token, setToken }) {
  const [profil, setProfil] = useState([]);
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");

  const fetchProfil = async () => {
    const res = await fetch("http://localhost:5000/api/profil", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setProfil(data);
  };

  useEffect(() => { fetchProfil(); }, []);

  const handleTambah = async () => {
    await fetch("http://localhost:5000/api/profil", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ judul, konten }),
    });
    setJudul(""); setKonten(""); fetchProfil();
  };

  const handleHapus = async (id) => {
    await fetch(`http://localhost:5000/api/profil/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProfil();
  };

  const handleEdit = async (id) => {
    await fetch(`http://localhost:5000/api/profil/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ judul, konten }),
    });
    setJudul(""); setKonten(""); fetchProfil();
  };

  return (
    <div className="flex">
      <Sidebar setToken={setToken} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Kelola Profil Website</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <input
            type="text"
            placeholder="Konten"
            value={konten}
            onChange={(e) => setKonten(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button onClick={handleTambah} className="bg-green-600 text-white px-2 rounded">Tambah</button>
        </div>

        {profil.map((p) => (
          <div key={p.id} className="border p-4 mb-2 flex justify-between items-center">
            <div>
              <h2 className="font-bold">{p.judul}</h2>
              <p>{p.konten}</p>
            </div>
            <div>
              <button onClick={() => { setJudul(p.judul); setKonten(p.konten); handleEdit(p.id); }} className="bg-blue-600 text-white px-2 rounded mr-2">Edit</button>
              <button onClick={() => handleHapus(p.id)} className="bg-red-600 text-white px-2 rounded">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
