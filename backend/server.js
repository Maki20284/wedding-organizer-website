const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

let pesananRoutes = require("./routes/pesananRoutes");
let authRoutes = require("./routes/authRoutes");
let katalogRoutes = require("./routes/katalogRoutes");
let profilRoutes = require("./routes/profilRoutes");

let uploads = express.static("uploads");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/pesanan", pesananRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/katalog", katalogRoutes);
app.use("/uploads", uploads); // biar gambar bisa diakses
app.use("/api/profil", profilRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
