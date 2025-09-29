const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

// Import routes
const pesananRoutes = require("./routes/pesananRoutes");
const authRoutes = require("./routes/authRoutes");
const katalogRoutes = require("./routes/katalogRoutes");
const profilRoutes = require("./routes/profilRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Pastikan folder uploads bisa diakses via http://localhost:5000/uploads/namafile.jpg
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/pesanan", pesananRoutes); // route customer & admin
app.use("/api/auth", authRoutes);
app.use("/api/katalog", katalogRoutes);
app.use("/api/profil", profilRoutes);

// Error handling sederhana
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
