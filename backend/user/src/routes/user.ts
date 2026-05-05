import express from "express";
import { loginUser } from "../controllers/user.js";
import { verifyUser } from "../controllers/user.js";
import { getProfile } from "../controllers/user.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, getProfile);

export default router;
