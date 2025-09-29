const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// Import routes
let pesananRoutes = require("./routes/pesananRoutes");
let authRoutes = require("./routes/authRoutes");
let katalogRoutes = require("./routes/katalogRoutes");
let profilRoutes = require("./routes/profilRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Pastikan folder uploads bisa diakses via http://localhost:5000/uploads/namafile.jpg
console.log("Static files served from:", path.join(__dirname, "uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/pesanan", pesananRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/katalog", katalogRoutes);
app.use("/api/profil", profilRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
