import { useState } from "react";

export default function FormPemesanan() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    package: "",
  });

  // Daftar paket (sesuai katalog)
  const packages = [
    "Pernikahan Sederhana",
    "Pernikahan Outdoor",
    "Pernikahan Modern",
    "Pernikahan Mewah",
    "Pernikahan Romantis Indoor",
    "Pernikahan Tradisional",
    "Pernikahan Pantai",
    "Pernikahan Ballroom Mewah",
    "Pernikahan Intimate",
    "Pernikahan Vintage",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data pemesanan:", formData);
    alert("Pemesanan berhasil disubmit!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6 font-cormorant">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Form Pemesanan
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama depan & belakang */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-semibold">
                Nama Depan
              </label>
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
              <label className="block text-gray-700 mb-2 font-semibold">
                Nama Belakang
              </label>
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

          {/* No. Telepon */}
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">
              Nomor Telepon
            </label>
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
            <label className="block text-gray-700 mb-2 font-semibold">
              Email
            </label>
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
            <label className="block text-gray-700 mb-2 font-semibold">
              Tanggal Acara
            </label>
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
            <label className="block text-gray-700 mb-2 font-semibold">
              Paket Pernikahan
            </label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-burgundy focus:outline-none"
              required
            >
              <option value="">-- Pilih Paket --</option>
              {packages.map((pkg, index) => (
                <option key={index} value={pkg}>
                  {pkg}
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
    </div>
  );
}
