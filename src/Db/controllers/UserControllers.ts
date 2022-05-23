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
        Postagem: {
          include: {
            Planta: {
              include: {
                Categoria: {
                  include: {
                    category: {},
                  },
                },
              },
            },
          },
        },
        Endereco: {},
      },
    });
    return res.json(userSearch);
  } catch (error) {
    return res.json({ error });
  }
}

export async function createUser(req: any, res: any) {
  const { login, email, tel, senha, end } = req.body;
  //verificar se o user existe
  console.log(end);
  const userExists = await prisma.usuario.findFirst({
    where: {
      email: `${email}`,
    },
  });

  const cepExists = await prisma.u_endereco.findFirst({
    where: {
      cep: `${end.cep}`,
    },
  });

  if (userExists) {
    return console.log("usuário Existe");
  } else if (!userExists && cepExists) {
    console.log(cepExists.id);
    const user = await prisma.usuario.create({
      data: {
        login: login,
        email: email,
        senha: senha,
        tel: tel,
        Endereco: {
          connect: {
            id: cepExists.id,
          },
        },
      },
    });
    console.log("Usuário Criado com cep existente");
    return res.json(user);
  } else {
    const user = await prisma.usuario.create({
      data: {
        login: login,
        email: email,
        senha: senha,
        tel: tel,
        Endereco: {
          create: {
            bairro: end.bairro,
            endereco: end.logradouro,
            cidade: end.localidade,
            uf: end.uf,
            cep: end.cep,
          },
        },
      },
    });
    console.log("Usuário Criado");
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
