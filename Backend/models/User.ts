import { DataTypes } from "sequelize";
import sequelize from "../connections/database";
import { ROLES } from "../constants/roles";

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 10,
        max: 100,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.ENUM(...Object.values(ROLES)),
      defaultValue: ROLES.PATIENT,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    tableName: "users",
    underscored: true,
    timestamps: true,
  },
);

export default User;
