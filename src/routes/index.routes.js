import { Router } from "express";
import authRouter from "./auth.routes.js";
import urlsRouter from "./urls.routes.js";
import usersRouter from "./users.routes.js";
import rankingsRouter from "./rankings.routes.js";

const router = Router();

router.use(authRouter);
router.use(urlsRouter);
router.use(usersRouter);
router.use(rankingsRouter);

export default router;
