import express from "express";
import { HelloWorlds, bonjour } from "../controllers/HelloControllers.js";

const router = express.Router()

router.get('/', HelloWorlds)
router.get('/french', bonjour)

export default router