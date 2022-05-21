import { Request, Response } from "express";
import { includes } from "lodash";
import { prisma } from "../../../prisma/prisma";

export async function getPosts(req: any, res: any) {
  try {
    const postMany = await prisma.postagem.findMany({
      include: {
        Usuario: { include: { Endereco: {} } },
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
        Planta: {},
      },
    });
    console.log(postMany);
    res.json(postMany);
  } catch (error) {}
}

export async function createPost(req: any, res: any) {
  const { idUser, plantId, plantName, image, valor, troca } = req.body;
  const createPost = await prisma.postagem.create({
    data: {
      autorId: Number(idUser),
      plantaId: Number(plantId),
      troca: Boolean(troca),
      valor: Number(valor),
      image: image,
      title: plantName,
    },
  });
  return res.json(createPost);
}
