import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controllers.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { signInSchema, signUpSchema } from "../schemas/auth.schemas.js";
import { validateSignUp, validateSignIn } from "../middlewares/auth.middlewares.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, signUp);
authRouter.post("/signin", validateSchema(signInSchema), validateSignIn, signIn);

export default authRouter;
