import { useEffect, useState } from "react";

export default function TabelKatalog() {
  const [katalogs, setKatalogs] = useState([]);
  const [formData, setFormData] = useState({
    nama_katalog: "",
    deskripsi: "",
    harga: "",
    gambar: null,
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch data
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/katalog");
    const data = await res.json();
    setKatalogs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <h1 className="text-2xl font-bold mb-4">Kelola Katalog</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Nama Katalog"
          value={formData.nama_katalog}
          onChange={(e) =>
            setFormData({ ...formData, nama_katalog: e.target.value })
          }
          className="border p-2"
        />
        <textarea
          placeholder="Deskripsi"
          value={formData.deskripsi}
          onChange={(e) =>
            setFormData({ ...formData, deskripsi: e.target.value })
          }
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Harga"
          value={formData.harga}
          onChange={(e) =>
            setFormData({ ...formData, harga: e.target.value })
          }
          className="border p-2"
        />
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, gambar: e.target.files[0] })
          }
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update" : "Tambah"}
        </button>
      </form>

      {/* Tabel */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nama Katalog</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {katalogs.map((k) => (
            <tr key={k.id_katalog}>
              <td className="border p-2">{k.nama_katalog}</td>
              <td className="border p-2">Rp {k.harga}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => {
                    setEditingId(k.id_katalog);
                    setFormData({
                      nama_katalog: k.nama_katalog,
                      deskripsi: k.deskripsi,
                      harga: k.harga,
                      gambar: null,
                    });
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
                <button
                  onClick={() => alert(JSON.stringify(k, null, 2))}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
