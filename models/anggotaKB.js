const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AnggotaKB = sequelize.define(
  "AnggotaKB",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    umur: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    jumlah_anak: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    jenis: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    klaster: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "anggotakbs",
    timestamps: true,
  },
);

module.exports = AnggotaKB;
