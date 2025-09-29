import { useEffect, useState } from "react";

export default function TabelPesanan() {
  const [pesanan, setPesanan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Ambil token dari localStorage (sudah login admin)
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPesanan = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pesanan/admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) throw new Error("Gagal ambil data pesanan");
        const data = await res.json();
        setPesanan(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setErrorMessage(err.message);
        setLoading(false);
      }
    };

    fetchPesanan();
  }, [token]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/pesanan/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Gagal update status");

      setPesanan((prev) =>
        prev.map((p) => (p.id_pesanan === id ? { ...p, status: newStatus } : p))
      );
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 font-cormorant">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Daftar Pesanan</h1>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{errorMessage}</div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full max-w-5xl">
          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-burgundy text-ivory">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nama Pemesan</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">No HP</th>
                <th className="px-4 py-2">Tanggal Acara</th>
                <th className="px-4 py-2">Paket</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pesanan.map((p) => (
                <tr key={p.id_pesanan} className="text-center border-b border-gray-200">
                  <td className="px-4 py-2">{p.id_pesanan}</td>
                  <td className="px-4 py-2">{p.nama_pemesan}</td>
                  <td className="px-4 py-2">{p.email_pemesan}</td>
                  <td className="px-4 py-2">{p.no_hp}</td>
                  <td className="px-4 py-2">{new Date(p.tanggal_acara).toLocaleDateString("id-ID")}</td>
                  <td className="px-4 py-2">{p.nama_katalog}</td>
                  <td className="px-4 py-2 font-semibold">{p.status}</td>
                  <td className="px-4 py-2">
                    {p.status !== "approved" && (
                      <button
                        onClick={() => handleStatusChange(p.id_pesanan, "approved")}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
