import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/auth", authUser);

export default router;
