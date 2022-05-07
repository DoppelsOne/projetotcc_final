import { Router } from "express";
import { CreateUseController } from "./cadastroUser/createController.";
import { LoginUseController } from "./loginUser/loginController.";

const router = Router();

const createUseController = new CreateUseController();
const loginUserController = new LoginUseController();
router.post("/user/cadastro", createUseController.handle);
router.post("/user/login", loginUserController.handle);

export { router };
