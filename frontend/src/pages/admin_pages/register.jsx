import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    nama_admin: "",
    username: "",
    email_admin: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Register gagal");

      setSuccess("Akun berhasil dibuat! Silakan login.");
      setFormData({
        nama_admin: "",
        username: "",
        email_admin: "",
        password: "",
      });

      setTimeout(() => navigate("/login-admin"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center"
        style={{
        backgroundImage: "url('/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg')",
        }}
    >
        <div className="absolute inset-0 bg-black/30 min-h-screen flex-col font-cormorant justify-center items-center p-4 flex">
            <div>
                <h2 className="text-[64px] text-ivory font-allison mb-4">Register Admin</h2>
            </div>
            <div className="p-6 bg-ivory/60 rounded shadow-md w-full max-w-sm">
                {error && <div className="mb-2 text-red-600">{error}</div>}
                {success && <div className="mb-2 text-green-600">{success}</div>}
                Nama Admin
                <input
                type="text"
                name="nama_admin"
                placeholder="Nama Admin"
                value={formData.nama_admin}
                onChange={handleChange}
                className="w-full focus:bg-ivory mb-2 p-2 border rounded"
                />
                Username
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full focus:bg-ivory mb-2 p-2 border rounded"
                />
                Email Admin
                <input
                  type="email"
                  name="email_admin"
                  placeholder="Email Admin"
                  value={formData.email_admin}
                  onChange={handleChange}
                  className="w-full focus:bg-ivory mb-2 p-2 border rounded"
                />
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full focus:bg-ivory mb-4 p-2 border rounded"
                />

                <button
                  onClick={handleRegister}
                  className="w-full bg-burgundy text-ivory py-2 rounded hover:bg-ivory hover:border hover:text-burgundy border-burgundy transition"
                >
                  Register
                </button>

                <div className="mt-4 text-center">
                  Sudah punya akun?{" "}
                  <Link to="/login-admin" className="text-burgundy hover:underline">
                    Login di sini
                  </Link>
                </div>
              </div>
            </div>
        </div>
    );
}
