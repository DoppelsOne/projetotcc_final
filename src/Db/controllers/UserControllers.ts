import { Request, Response } from "express";
import { prisma } from "../../../prisma/prisma";

export async function findUser(req: any, res: any) {
  try {
    const { id } = req.params;

    const userSearch = await prisma.usuario.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        Postagem: {},
        Endereco: {},
      },
    });
    return res.json(userSearch);
  } catch (error) {
    return res.json({ error });
  }
}

export async function createUser(req: any, res: any) {
  const { login, email, tel, senha, end = {} } = req.body;
  //verificar se o user existe
  console.log(end);
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
    return res.json(user);
  }
}

export async function loginUser(req: any, res: any) {
  const { email, senha } = req.body;
  let id;
  const userExists = await prisma.usuario.findFirst({
    where: {
      email: email,
    },
  });

  if (!userExists) {
    return false;
  } else if (senha == userExists.senha) {
    id = userExists.id;
  }

  if (id) {
    console.log(id);
    return res.json(id);
  } else {
    return console.log("Usuário não encontrado");
  }
}

// export async function listUser(req: any, res: any) {
//   const { login } = req.params;

//   if (login == null) {
//     login = "";
//   }
//   // console.log(login)
//   const userExists = await prisma.usuario.findMany({
//     where: { login: { contains: `${login}` } },
//   });

//   if (userExists) {
//     console.log(userExists);
//   } else {
//     return res.json(userExists);
//   }
// }
