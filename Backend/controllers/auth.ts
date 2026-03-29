import { Request, Response } from "express";
import authService from "../services/authService";
import { ValidatedRequest } from "../middleware/validate";
import { RegisterData, LoginData } from "../validations/auth";

const authController = {
  async signup(req: Request, res: Response) {
    try {
      const validatedReq = req as ValidatedRequest<RegisterData>;

      const { user, token } = await authService.signup(
        validatedReq.validatedBody,
      );

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
        user,
      });
    } catch (error: any) {
      if (error.message === "Email already in use") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      console.error(error); // 👈 important for debugging

      return res.status(500).json({
        success: false,
        message: "Signup failed",
      });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const validatedReq = req as ValidatedRequest<LoginData>;

      const { user, token } = await authService.login(
        validatedReq.validatedBody,
      );

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user,
      });
    } catch (error: any) {
      if (error.message === "Invalid credentials") {
        return res.status(401).json({
          success: false,
          message: error.message,
        });
      }

      console.error(error); // 👈 important

      return res.status(500).json({
        success: false,
        message: "Login failed",
      });
    }
  },
};

export default authController;
