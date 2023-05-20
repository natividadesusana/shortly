import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import getUsers from "../controllers/users.controllers.js";

const userRoutes = Router();

userRoutes.get("/users/me", authValidation, getUsers);

export default userRoutes;
