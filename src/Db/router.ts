import { Router } from "express";
import { getCat } from "./controllers/CategoryControllers";
import { getPlants, getPlant } from "./controllers/PlantControllers";
import {
  alterPost,
  createPost,
  deletePost,
  getPostId,
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
router.get("/post/all/:cat?/:name?", getPosts);
router.get("/post/user/:id", getPostsUser);
router.put("/post/alter/:id", alterPost);
router.get("/post/select/:id", getPostId);
router.post("/post/create", createPost);
router.delete("/post/delete/:id", deletePost);


//Categorias
router.get("/cat/", getCat);

export { router };
