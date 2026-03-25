import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Doctor = sequelize.define(
  "Doctor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    qualification: DataTypes.STRING,

    experienceYears: {
      type: DataTypes.INTEGER,
    },

    bio: DataTypes.TEXT,

    profilePicture: DataTypes.STRING,
  },
  {
    tableName: "doctors",
    underscored: true,
    timestamps: true,
  },
);

export default Doctor;
