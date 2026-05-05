import express from "express";
import { loginUser } from "../controllers/user.js";
import { verifyUser } from "../controllers/user.js";
import { getProfile } from "../controllers/user.js";
import { isAuth } from "../middleware/isAuth.js";
import { getAllUsers } from "../controllers/user.js";
import { getAUser } from "../controllers/user.js";
import { updateName } from "../controllers/user.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, getProfile);
router.get("/user/all", isAuth, getAllUsers);
router.get("/user/:id", getAUser);
router.post("/update/user", isAuth, updateName);

export default router;
