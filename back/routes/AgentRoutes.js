import express from "express";
import { getAgents } from "../controllers/AgentController.js";

const router = express.Router()

router.get('/', getAgents)

export default router