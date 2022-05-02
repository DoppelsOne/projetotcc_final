import { prisma } from "../../../prisma/prisma";
import { Request, Response } from "express";
import { CreateUse } from "./createUse";

class CreateUseController {
  async handle(request: Request, response: Response) {
    const { login, nome, senha } = request.body;

    const createUse = new CreateUse();

    const user = await createUse.execute({
      login,
      nome,
      senha,
    });

    return response.json(user)
  }
}
export { CreateUseController };
