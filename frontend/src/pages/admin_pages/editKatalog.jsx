import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/sideNavbar";

export default function EditKatalog() {
  const [katalogs, setKatalogs] = useState([]);
  const [formData, setFormData] = useState({ nama_katalog: "", deskripsi: "", harga: "", gambar: null });
  const [editingId, setEditingId] = useState(null);

  // Fetch data
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/katalog");
    const data = await res.json();
    setKatalogs(data);
  };

  useEffect(() => { fetchData(); }, []);

  // Tambah / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("nama_katalog", formData.nama_katalog);
    form.append("deskripsi", formData.deskripsi);
    form.append("harga", formData.harga);
    if (formData.gambar) form.append("gambar", formData.gambar);

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/katalog/${editingId}`
      : "http://localhost:5000/api/katalog";

    await fetch(url, { method, body: form });
    setFormData({ nama_katalog: "", deskripsi: "", harga: "", gambar: null });
    setEditingId(null);
    fetchData();
  };

  // Hapus
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/katalog/${id}`, { method: "DELETE" });
    fetchData();
  };

  return (
    <div className="p-6">
      <Sidebar/>
      <h1 className="text-2xl font-bold mb-4">Kelola Katalog</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Nama Katalog"
          value={formData.nama_katalog}
          onChange={(e) => setFormData({ ...formData, nama_katalog: e.target.value })}
          className="border p-2"
        />
        <textarea
          placeholder="Deskripsi"
          value={formData.deskripsi}
          onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Harga"
          value={formData.harga}
          onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
          className="border p-2"
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, gambar: e.target.files[0] })}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update" : "Tambah"}
        </button>
      </form>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {katalogs.map((k) => (
          <div key={k.id_katalog} className="border p-3 rounded flex gap-3">
            <img src={`http://localhost:5000${k.gambar}`} alt={k.nama_katalog} className="w-32 h-32 object-cover" />
            <div>
              <h2 className="text-lg font-bold">{k.nama_katalog}</h2>
              <p>{k.deskripsi}</p>
              <p className="text-green-700 font-semibold">Rp {k.harga}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setEditingId(k.id_katalog);
                    setFormData({ nama_katalog: k.nama_katalog, deskripsi: k.deskripsi, harga: k.harga, gambar: null });
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(k.id_katalog)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
