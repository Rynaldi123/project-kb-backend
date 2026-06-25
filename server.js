const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const anggotaRoutes = require("./routes/anggotaRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/anggota", anggotaRoutes);

app.get("/", (req, res) => {
  res.send("Backend Project KB Berjalan");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database terkoneksi");
  })
  .catch((error) => {
    console.log("Gagal koneksi:", error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
