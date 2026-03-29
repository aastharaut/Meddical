import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { RegisterData, LoginData } from "../validations/auth";

interface UserInstance {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  toJSON(): UserInstance;
}

const authService = {
  async signup(data: RegisterData) {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured in environment variables");
    }

    const { firstName, lastName, phone, email, password, role } = data;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      role: role ?? "BUYER",
    });

    const userData = user.toJSON() as UserInstance;
    const { password: _, ...userWithoutPassword } = userData;

    const token = jwt.sign(
      {
        id: userData.id,
        role: userData.role,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        email: userData.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return { token, user: userWithoutPassword };
  },

  async login(data: LoginData) {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured in environment variables");
    }

    const { email, password } = data;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const userData = user.toJSON() as UserInstance;
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: userData.id,
        role: userData.role,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        email: userData.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    const { password: _, ...userWithoutPassword } = userData;
    return { token, user: userWithoutPassword };
  },
};

export default authService;
