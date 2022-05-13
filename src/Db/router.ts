import { Router } from "express";
import { CreateUseController } from "./cadastroUser/createController.";
import { LoginUseController } from "./loginUser/loginController.";
import { UserUseController } from "./userUser/userController.";

const router = Router();

const createUseController = new CreateUseController();
const loginUserController = new LoginUseController();
const userUserController = new UserUseController();

router.post("/user/cadastro", createUseController.handle);
router.post("/user/login", loginUserController.handle);
router.get("/login/:id", userUserController.handle);

// router.get("/user/Error");

export { router };
