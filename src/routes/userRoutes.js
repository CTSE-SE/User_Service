import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  checkUserExists
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
import {
  registerValidation,
  loginValidation,
  updateProfileValidation
} from "../validation/userValidation.js";

const router = express.Router();

router.post("/register", registerValidation, registerUser);
router.post("/login", loginValidation, loginUser);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfileValidation, updateProfile);
router.get("/exists/:id", checkUserExists);

export default router;