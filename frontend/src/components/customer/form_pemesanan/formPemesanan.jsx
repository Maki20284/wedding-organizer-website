import { useState, useEffect } from "react";

export default function FormPemesanan() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    packageId: "", // simpan id_katalog
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [katalogs, setKatalogs] = useState([]); 

  useEffect(() => {
    const fetchKatalog = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/katalog");
        const data = await res.json();
        setKatalogs(data);
      } catch (err) {
        console.error("Gagal fetch katalog:", err);
      }
    };
    fetchKatalog();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // gabungkan nama depan + belakang
    const payload = {
      nama_pemesan: formData.firstName + " " + formData.lastName,
      email_pemesan: formData.email,
      no_hp: formData.phone,
      tanggal_acara: formData.date,
      id_katalog: formData.packageId,
    };

    try {
      const response = await fetch("http://localhost:5000/api/pesanan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Gagal membuat pesanan");
      }

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: "",
        packageId: "",
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6 font-cormorant">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Form Pemesanan
        </h1>

        {errorMessage && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama depan & belakang */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Nama Depan</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Nama Belakang</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0812-3456-7890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contoh@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
              required
            />
          </div>

          {/* Tanggal Acara */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Tanggal Acara</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
              required
            />
          </div>

          {/* Dropdown Paket */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Paket Pernikahan</label>
            <select
              name="packageId"
              value={formData.packageId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
              required
            >
              <option value="">-- Pilih Paket --</option>
              {katalogs.map((k) => (
                <option key={k.id_katalog} value={k.id_katalog}>
                  {k.nama_katalog}
                </option>
              ))}
            </select>
          </div>

          {/* Tombol Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-burgundy text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Pesan Sekarang
            </button>
          </div>
        </form>
      </div>

      {/* Notifikasi sukses */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-fadeIn scale-95">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Pesanan berhasil dibuat!</h2>
            <p className="text-gray-600 text-sm">
              Kami telah mengirimkan email berisi link konfirmasi pembayaran.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
