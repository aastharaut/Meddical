import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const TimeSlot = sequelize.define(
  "TimeSlot",
  {
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
    tableName: "time_slots",
    underscored: true,
    timestamps: false,
  },
);

export default TimeSlot;
