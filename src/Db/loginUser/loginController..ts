import { Request, Response } from "express";
import { LoginUse } from "./loginUse";

export class LoginUseController {
  async handle(request: any, response: Response) {
    const { email, senha } = request.body;
    const loginUse = new LoginUse();
    const id = await loginUse.execute({ email, senha });
    if (id) {
      console.log(id);
      return response.json(id);
    } else {
      return console.log("Usuário não encontrado");
    }
  }
}
