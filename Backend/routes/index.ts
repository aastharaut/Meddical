import { Router } from "express";
import authRoutes from "./auth";
import doctorRoutes from "./doctors";
import serviceRoutes from "./services";
import appointmentRoutes from "./appointments";
import blogRoutes from "./blog";
import contactRoutes from "./contacts";

const router = Router();

router.use("/auth", authRoutes);
router.use("/doctors", doctorRoutes);
router.use("/services", serviceRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/blogs", blogRoutes);
router.use("/contacts", contactRoutes);

export default router;
