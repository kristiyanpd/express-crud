const express = require('express');
const router = express.Router();

class UserRouter {
    constructor(userController) {
        router.get("/", userController.findAll).post("/", userController.save);
        router.get("/:id", userController.findById).put("/:id", userController.saveById).delete("/:id", userController.delete);
        this.router = router;
    }
}

module.exports = UserRouter;
