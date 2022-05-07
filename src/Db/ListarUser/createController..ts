import { prisma } from "../../../prisma/prisma";
import { Request, Response } from "express";
import { CreateUse } from "./createUse";

class CreateUseController {
  async handle(request: any, response:any) {
    const {login} = request.params
    const createUse = new CreateUse();
    
    const user = await createUse.execute({login});
    return response.json(user)
  }
}
export { CreateUseController };
