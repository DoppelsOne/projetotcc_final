import { Router } from 'express';
import { CreateUseController} from './cadastroCase/createController.';

const router = Router()

const createUseController = new CreateUseController()

router.get("/",createUseController.handle)

export {router}
