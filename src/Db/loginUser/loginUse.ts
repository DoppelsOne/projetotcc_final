import { prisma } from "../../../prisma/prisma";

interface Iuser {
  email: String;
  senha: String;
}

export class LoginUse {
  async execute({ email, senha }: Iuser) {
    //verificar se o user existe
    const userExists = await prisma.usuario.findFirst({
      where: {
        email: `${email}`,
      },
    });

    if (!userExists) {
      console.log("Usuário ou Senha Incorreta ");
    }
    else if (senha == userExists.senha){
      
    }
  }

  //cria usuário
}
