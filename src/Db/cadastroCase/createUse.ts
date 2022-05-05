import { prisma } from "../../../prisma/prisma";

interface Iuser {
  login: String;
}

class CreateUse {
  async execute({login}: Iuser) {
    console.log(login)
    if (login == null){
      login = ""
    }
    // console.log(login)
    const userExists = await prisma.usuario.findMany({
      where: { login: { contains: `${login}` } },
    });
    
    if (userExists) {
      console.log(userExists);
    }
    return userExists;
  }
}

export { CreateUse };
