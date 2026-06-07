const AnggotaKB = require("../models/anggotaKB");

// GET semua data
exports.getAll = async (req, res) => {
  try {
    const data = await AnggotaKB.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST tambah data
exports.create = async (req, res) => {
  try {
    const data = await AnggotaKB.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

// PUT update data
exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    await AnggotaKB.update(req.body, {
      where: { id },
    });

    res.json({
      message: "Data berhasil diupdate",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE data
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    await AnggotaKB.destroy({
      where: { id },
    });

    res.json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
