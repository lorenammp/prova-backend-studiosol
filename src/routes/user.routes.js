import { Router } from "express";
import { verifyResultController } from "../controllers/verify.controllers";

const userRoutes = Router();

export default userRoutes;

userRoutes.post("", verifyResultController);
