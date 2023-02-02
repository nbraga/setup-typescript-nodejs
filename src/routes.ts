import { Router } from "express";
import { isAuthenticated } from "@middlewares/isAuthenticated";
import LoginController from "@controllers/LoginController";

const router = Router();

//USERS
router.post("/register", LoginController.register);
router.post("/login", LoginController.signIn);
router.get("/getUser", isAuthenticated, LoginController.getUser);

export { router };
