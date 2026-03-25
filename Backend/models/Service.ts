import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Service = sequelize.define(
  "Service",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: DataTypes.TEXT,
  },
  {
    tableName: "services",
    underscored: true,
    timestamps: true,
  },
);

export default Service;
