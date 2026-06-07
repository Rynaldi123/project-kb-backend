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

sequelize
  .authenticate()
  .then(() => {
    console.log("Database terkoneksi");
  })
  .catch((error) => {
    console.log("Gagal koneksi:", error);
  });

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
