import { PrismaClient } from "@prisma/client";
import { router } from "./router";
const express = require("express");

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.use(router);


const server = app.listen(3333, () =>
  console.log(`
🚀 Servidor sendo executado: http://localhost:3333
  `)
);
