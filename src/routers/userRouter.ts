import express, { Router } from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

class UserRouter {
  router: Router;

  constructor(userController: UserController) {
    router.get('/', userController.findAll);
    router.post('/', userController.save);
    router.get('/:id', userController.findById);
    router.put('/:id', userController.saveById);
    router.delete('/:id', userController.delete);
    this.router = router;
  }
}

export default UserRouter;
