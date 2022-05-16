import { Router } from "express";
import { findUser, createUser, loginUser } from "./controllers/UserControllers";

const router = Router();

router.post("/user/cadastro", createUser);
router.post("/user/login", loginUser);
router.get("/login/:id", findUser);

// router.get("/user/Error");

export { router };
