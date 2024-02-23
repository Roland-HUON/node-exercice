import express from "express";
import AgentRoutes from "./routes/AgentRoutes.js";
import HelloRoutes from "./routes/Helloroutes.js";
import auth from './routes/AuthRoutes.js';
import user from './routes/UserRoutes.js';

const router = express.Router()

router
    .use('/agents', AgentRoutes)
    .use('/hello', HelloRoutes)
    .use('/auth', auth)
    .use('/user', user)
    
export default router