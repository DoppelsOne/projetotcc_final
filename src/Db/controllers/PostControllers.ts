import { Request, Response } from "express";
import { includes } from "lodash";
import { prisma } from "../../../prisma/prisma";

export async function getPosts(req: any, res: any) {
  try {
    const postMany = await prisma.postagem.findMany({
      include: {
        Usuario: { include: { Endereco: {} } },
        Planta: {include:{Categoria:{include:{category:{select:{categoria:true}}}}}},
      },
    });
    console.log(postMany);
    res.json(postMany);
  } catch (error) {}
}

export async function getPostsUser(req: any, res: any) {
  const { id } = req.params;
  try {
    const postMany = await prisma.postagem.findMany({
      where: {
        Usuario: {
          id: Number(id),
        },
      },
      include: {
        Planta: { include: { Categoria: {} } },
      },
    });
    console.log(postMany);
    res.json(postMany);
  } catch (error) {
    console.log(error);
  }
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
