import UserRepository from '../repositories/userRepository';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import UserRouter from '../routers/userRouter';
import Pool from './queries';

const userRepository = new UserRepository(Pool);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export default userRouter;
