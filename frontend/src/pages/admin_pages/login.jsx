import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginAdmin({ setToken }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Login gagal");
        localStorage.setItem("token", data.token);
        setToken(data.token);
        navigate("/edit-profil");
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
        <h2 className="text-[64px] text-ivory font-allison mb-4">Login Admin</h2>
      </div>
      <div className="p-6 bg-ivory/60 backdrop-blur-md rounded justify-center shadow-md w-full max-w-sm">
        {error && <div className="mb-2 text-red-600">{error}</div>}
        Username atau Email
        <input
          type="text"
          placeholder="Username atau Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full focus:bg-ivory shadow-md mb-2 p-2 border rounded"
          required
        />
        Password
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full focus:bg-ivory shadow-md mb-4 p-2 border rounded"
          required
        />
        <button onClick={handleLogin} className="w-full bg-burgundy text-ivory py-2 rounded hover:bg-ivory hover:border hover:text-burgundy border-burgundy transition">
          Login
        </button>
        <p className="mt-3 font-cormorant text-sm">
          Belum punya akun? <Link to="/register" className="text-burgundy">Daftar di sini</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
