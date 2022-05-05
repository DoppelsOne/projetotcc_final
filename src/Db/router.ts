import { Router } from 'express';
import { CreateUseController} from './cadastroCase/createController.';

const router = Router()

const createUseController = new CreateUseController()

const login = " "

router.get("/:login?/:senha?", createUseController.handle)

export {router}
