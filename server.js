const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const anggotaRoutes = require("./routes/anggotaRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/anggota", anggotaRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Backend Project KB Berjalan");
});

// Test Route
app.get("/tes", (req, res) => {
  res.send("Route tes aktif");
});

// Koneksi Database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database terkoneksi");
  })
  .catch((error) => {
    console.log("Gagal koneksi database:", error);
  });

// Jalankan Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan di port ${PORT}`);
});
