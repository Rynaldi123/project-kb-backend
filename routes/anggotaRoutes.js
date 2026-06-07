const express = require("express");
const router = express.Router();

const anggotaController = require("../controllers/anggotaController");
const verifyToken = require("../middleware/middleware");

router.get("/", anggotaController.getAll);

router.post("/", anggotaController.create);

router.put("/:id", verifyToken, anggotaController.update);

router.delete("/:id", verifyToken, anggotaController.delete);

module.exports = router;
