import { Request, Response } from "express";
import { includes } from "lodash";
import { prisma } from "../../../prisma/prisma";

export async function getPosts(req: any, res?: any) {
  const { name, cat } = req.params;
  try {
    const postMany = await prisma.postagem.findMany({
      where: { title: { contains: name } },
      include: {
        Usuario: { include: { Endereco: {} } },
        Planta: {
          include: {
            Categoria: {
              include: { category: { select: { categoria: true } } },
            },
          },
        },
      },
    });

    return res.json(postMany);
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
        Planta: { include: { Categoria: { include: { category: true } } } },
      },
    });

    const result = postMany.map((post) => {
      return {
        ...post,
        Categorias: post.Planta.Categoria.map(
          (catt) => catt.category?.categoria
        ),
      };
    });
    // console.log(result);
    return res.json(result);
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

export async function deletePost(req: any, res: any) {
  const { id } = req.params;
  console.log(id);
  const user = await prisma.postagem.delete({ where: { id: Number(id) } });
  res.json(user);
}

export async function alterPost(req: any, res: any) {
  const { idPost } = req.params;
  const { plantId, plantName, image, valor, troca } = req.body;

  const alterPost = await prisma.postagem.update({
    where: { id: Number(idPost) },
    data: {
      plantaId: Number(plantId),
      troca: Boolean(troca),
      valor: Number(valor),
      image: image,
      title: plantName,
    },
  });

  return res.json(alterPost);
}
