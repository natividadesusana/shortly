import { Router } from "express";
import getRanking from "../controllers/rankings.crontrollers.js";

const rankingRouter = Router();

rankingRouter.get("/ranking", getRanking);

export default rankingRouter;
