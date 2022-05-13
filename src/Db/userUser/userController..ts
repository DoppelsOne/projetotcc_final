import { Request, Response } from "express";
import { UserUse } from "./userUse";

export class UserUseController {
  async handle(request: any, response: Response) {
    const {id} = request.params;
    const userUse = new UserUse();
    const user = await userUse.execute({id});
    return response.json(user)
  }
}
