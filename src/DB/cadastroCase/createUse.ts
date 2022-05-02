import { prisma } from "../../../prisma/prisma";

interface Iuser {
  nome: String;
  login: String[];
  senha: String;
}

class CreateUse {
  async execute({nome,login, senha }: Iuser){

    const userExists = await prisma.usuario.findMany({});


    if(userExists){
      console.log(userExists)
    }
    return userExists


  }
  
}

export { CreateUse }