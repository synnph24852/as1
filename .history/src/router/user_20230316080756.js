import express from "express";
const router = express.Router();
import { getAll, get, add, update, remove } from "../controllers/user.js";
router.get("/users", getAll);
router.get("/users/:id", get);
router.post("/users", getAll);
router.get("/users", getAll);
router.get("/users", getAll);
export default router;
