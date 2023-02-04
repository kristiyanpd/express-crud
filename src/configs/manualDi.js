const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");
const UserController = require('../controllers/userController');
const UserRouter = require('../routers/userRouter');
const Pool = require('./queries');

const userRepository = new UserRepository(Pool);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

module.exports = {userRouter};
