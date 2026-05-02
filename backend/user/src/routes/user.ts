import express from "express";
import { loginUser } from "../controllers/user.js";
import { verifyUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify",verifyUser);

export default router;
