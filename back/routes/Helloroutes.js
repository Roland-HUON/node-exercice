import express from "express";
import { HelloWorlds } from "../controllers/HelloControllers.js";

const router = express.Router()

router.get('/', HelloWorlds)

export default router