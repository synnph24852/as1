import express from "express";
const router = express.Router();
import { getAll,get,add,u } from "../controllers/user.js";
router.get("/users", getAll);
export default router;
