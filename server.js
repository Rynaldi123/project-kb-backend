app.get("/", (req, res) => {
  res.send("TEST BERHASIL");
});

app.get("/tes", (req, res) => {
  res.send("Route tes aktif");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
