import { prisma } from "../../../prisma/prisma";
interface Iuser {
  login: string;
  email: string;
  tel: string;
  senha: string;
  end: {
    localidade: string;
    cep: string;
    logradouro: string;
    uf: string;
    bairro: string;
  };
}

class CreateUse {
  async execute({ login, email, tel, senha, end }: Iuser) {
    //verificar se o user existe
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
          login: login,
          email: email,
          senha: senha,
          avatar: '../../../assets/Avatar/avatarStandard.jpg',
          Endereco: {
            create: {
              bairro: end.bairro,
              endereco: end.logradouro,
              cidade: end.localidade,
              uf: end.uf,
              cep: end.cep,
              tel: tel,
            },
          },
        },
      });
    }

    //cria usuário
  }
}

export { CreateUse };
