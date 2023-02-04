const express = require('express');

const router = express.Router();

class UserRouter {
  constructor(userController) {
    router.get('/', userController.findAll);
    router.post('/', userController.save);
    router.get('/:id', userController.findById);
    router.put('/:id', userController.saveById);
    router.delete('/:id', userController.delete);
    this.router = router;
  }
}

module.exports = UserRouter;
