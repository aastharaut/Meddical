import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const DoctorService = sequelize.define(
  "DoctorService",
  {
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "doctor_services",
    timestamps: false,

    indexes: [
      {
        unique: true,
        fields: ["doctor_id", "service_id"],
      },
    ],
  },
);

export default DoctorService;
