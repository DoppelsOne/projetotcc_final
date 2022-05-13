import { response } from "express";
import { prisma } from "../../../prisma/prisma";

interface Iuser {
  id: number;
}

export class UserUse {
  async execute({ id }: Iuser) {
    //verificar se o user existe
    const userSearch = await prisma.usuario.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        Postagem: {},
        Endereco:{},
      },
    });

    return userSearch;
  }

  //cria usuário
}
