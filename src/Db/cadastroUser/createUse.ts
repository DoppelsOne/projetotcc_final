import { prisma } from "../../../prisma/prisma";

interface Iuser {
  login: String;
  email: String;
  tel: String;
  senha: String;
  end: {
    localidade: String;
    cep: String;
    logradouro: String;
    uf:String
    bairro: String;
  }
}

class CreateUse {
  async execute({ login, email, tel, senha, end }: Iuser) {
    //verificar se o user existe
    console.log(end.bairro);
    const userExists = await prisma.usuario.findFirst({
      where: {
        email: `${email}`,
      },
    });

    if (userExists) {
      return console.log("usuário Existe");
    } else {
      const user = await prisma.usuario.create({
        data: {
          login: `${login}`,
          email: `${email}`,
          senha: `${senha}`,
          Endereco: {
            create: {
              bairro: `${end.bairro}`,
              endereco: `${end.logradouro}`,
              cidade: `${end.localidade}`,
              uf: `${end.uf}`,
              cep: `${end.cep}`,
              tel: `${tel}`
            },
          },
        },
      });
    }

    //cria usuário
  }
}

export { CreateUse };
