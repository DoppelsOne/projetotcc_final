import { prisma } from "../../../prisma/prisma";
import { Request, Response } from "express";
import { LoginUse } from "./loginUse";

export class LoginUseController {
  async handle(request: any, response: any) {
    const { email, senha } = request.body;
    console.log(email, senha);
    const loginUse = new LoginUse();
    const user = await loginUse.execute({ email, senha });
    return response.json(user);
  }
}
