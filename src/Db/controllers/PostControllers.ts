import { Request, Response } from "express";
import { includes } from "lodash";
import { prisma } from "../../../prisma/prisma";

export async function getPosts(req: any, res: any) {
  try {
    const postMany = await prisma.postagem.findMany({
      include: {
        Imagem: {},
        Usuario: {},
        Planta: {},
      },
    });
    console.log(postMany);
    res.json(postMany);
  } catch (error) {}
}

export async function getPostsUser(req: any, res: any) {
  const { id } = req.params;
  try {
    const postMany = await prisma.postagem.findFirst({
      where: {
        Usuario: {
          id: id,
        },
      },
      include: {
        Imagem: {},
        Planta: {},
      },
    });
    console.log(postMany);
    res.json(postMany);
  } catch (error) {}
}
