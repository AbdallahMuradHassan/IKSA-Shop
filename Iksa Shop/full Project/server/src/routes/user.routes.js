import express from "express";
import { profile, adminOnly } from "../controllers/userController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, profile);
router.get("/admin-only", protect, authorize("admin"), adminOnly);

export default router;