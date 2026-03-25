import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const DoctorSchedule = sequelize.define(
  "DoctorSchedule",
  {
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    dayOfWeek: {
      type: DataTypes.ENUM(
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
      ),
      allowNull: false,
    },

    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "doctor_schedules",
    underscored: true,
    timestamps: false,
  },
);

export default DoctorSchedule;
