import { Request, Response } from "express";
import { prisma } from "../../../prisma/prisma";
import { map } from "lodash";
import { useEffect } from "react";

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
                    category: true,
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

export async function loginUser(req: any, res: Response) {
  const { email, senha } = req.body;
  let id;
  const userExists = await prisma.usuario.findFirst({
    where: {
      email: email,
    },
  });

  if (!userExists) {
    // console.log("Usuário não encontrado");
    return res.sendStatus(400);
  } else if (senha == userExists.senha) {
    id = userExists.id;
    console.log(id);
    return res.json(id);
  } else {
    // console.log("Senha não encontrado");
    return res.sendStatus(400);
  }
}

export async function alterUser(req: any, res: any) {
  const { id } = req.params;
  const { login, tel, senha, end, avatar } = req.body;

  const alterUser = await prisma.usuario.update({
    where: { id: Number(id) },
    data: {
      login: login,
      tel: tel,
      senha: senha,
      avatar: avatar,
      Endereco: {
        connectOrCreate: {
          where: { cep: end.cep },
          create: {
            bairro: end.bairro,
            endereco: end.logradouro,
            cidade: end.localidade,
            uf: end.uf,
            cep: end.cep,
          },
        },
      },
    },
  });

  return res.json(alterUser);
}

export async function alterUserPass(req: any, res: any) {
  const { id } = req.params;
  const {senha} = req.body;
  try {
    const alterUser = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        senha: senha,
      },
    });

    return res.json(alterUser);
  } catch (error) {
    return res.json(false);
  }
}

export async function findRec(req: any, res: any) {
  const { email, tel } = req.params;
  // console.log(email, tel)
  try {
    const userSearch = await prisma.usuario.findFirst({
      where: {
        email: { equals: email },
        tel: { equals: tel },
      },
    });
    console.log(userSearch);
    return res.json(userSearch);
  } catch (error) {
    return res.json(false);
  }
}
