import { Router } from "express";
import { getPlants, getPlant } from "./controllers/PlantControllers";
import { getPosts, getPostsUser } from "./controllers/PostControllers";
import { findUser, createUser, loginUser } from "./controllers/UserControllers";

const router = Router();

router.post("/user/cadastro", createUser);
router.post("/user/login", loginUser);
router.get("/login/:id", findUser);
router.get("/plant/", getPlants);
router.get("/plant/:id", getPlant);
router.get("/post/", getPosts);
router.get("/post/:id", getPostsUser);

// router.get("/user/Error");

export { router };
