import { Router } from "express";
import { getPlants, getPlant } from "./controllers/PlantControllers";
import {
  alterPost,
  createPost,
  deletePost,
  getPosts,
  getPostsUser,
} from "./controllers/PostControllers";
import {
  findUser,
  createUser,
  loginUser,
  alterUser,
} from "./controllers/UserControllers";

const router = Router();

// Users
router.post("/user/cadastro", createUser);
router.post("/user/login", loginUser);
router.get("/login/:id", findUser);
router.put("/user/alter/:id", alterUser);

// Plants
router.get("/plant/", getPlants);
router.get("/plant/:id", getPlant);

// Posts
router.get("/post/:name?", getPosts);
router.get("/post/user/:id", getPostsUser);
router.post("/post/create", createPost);
router.delete("/post/delete/:id", deletePost);
router.put("/post/alter/:id", alterPost);

export { router };
