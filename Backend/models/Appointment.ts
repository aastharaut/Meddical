import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Appointment = sequelize.define(
  "Appointment",
  {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    appointmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    timeSlotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"),
      defaultValue: "PENDING",
    },

    notes: DataTypes.TEXT,
  },
  {
    tableName: "appointments",
    underscored: true,
    timestamps: true,

    indexes: [
      {
        unique: true,
        fields: ["doctor_id", "appointment_date", "time_slot_id"],
      },
    ],
  },
);

export default Appointment;
