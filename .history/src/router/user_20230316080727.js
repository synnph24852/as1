import express from "express";
const router = express.Router();
import { getAll,get,a } from "../controllers/user.js";
router.get("/users", getAll);
export default router;
