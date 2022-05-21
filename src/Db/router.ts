import { Router } from "express";
import { getPlants, getPlant } from "./controllers/PlantControllers";
import { createPost, getPosts, getPostsUser } from "./controllers/PostControllers";
import { findUser, createUser, loginUser } from "./controllers/UserControllers";

const router = Router();

// Users
router.post("/user/cadastro", createUser);
router.post("/user/login", loginUser);
router.get("/login/:id", findUser);

// Plants
router.get("/plant/", getPlants);
router.get("/plant/:id", getPlant);

// Posts
router.get("/post/", getPosts);
router.get("/post/:id", getPostsUser);
router.post("/post/create", createPost)

// router.get("/user/Error");

export { router };
