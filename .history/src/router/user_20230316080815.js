import express from "express";
const router = express.Router();
import { getAll, get, add, update, remove } from "../controllers/user.js";
router.get("/users", getAll);
router.get("/users/:id", get);
router.post("/users", add);
router.get("/users/:id", update);
router.get("/users", remove);
export default router;
