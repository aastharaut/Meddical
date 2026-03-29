import { Router } from "express";
import authController from "../controllers/auth";
import { validate } from "../middleware/validate";
import { signupSchema, loginSchema } from "../validations/auth";

const router = Router();

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);

export default router;
