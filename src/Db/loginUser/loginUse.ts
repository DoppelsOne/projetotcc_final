import { response } from "express";
import { prisma } from "../../../prisma/prisma";

interface Iuser {
  email: string;
  senha: string;
}

export class LoginUse {
  async execute({ email, senha }: Iuser) {
    //verificar se o user existe
    const userExists = await prisma.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      return false;
    }
    else if (senha == userExists.senha){
      return userExists.id
    }
  }

  //cria usuário
}
