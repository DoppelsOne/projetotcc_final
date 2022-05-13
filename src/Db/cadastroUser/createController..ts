import { prisma } from "../../../prisma/prisma";
import { Request, Response } from "express";
import { CreateUse } from "./createUse";

class CreateUseController {
  async handle(request: any, response: any) {
    const { login, email, tel, senha , end} = request.body;
    const createUse = new CreateUse();
    const user = await createUse.execute({ login, email, tel, senha, end});
    return response.json(user);
  }
}
export { CreateUseController };
