import { Request, Response } from 'express';
import UserService from '../services/userService';
import getErrorMessage from '../utils/utils';

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  findAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: getErrorMessage(err) });
    }
  };

  findById = async (req: Request<{ id: number }>, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: getErrorMessage(err) });
    }
  };

  save = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const userCreated = await this.userService.save(user);
      res.status(200).json(userCreated);
    } catch (err) {
      res.status(400).json({ error: getErrorMessage(err) });
    }
  };

  saveById = async (req: Request<{ id: number }>, res: Response) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const userUpdated = await this.userService.saveById(id, user);
      res.status(200).json(userUpdated);
    } catch (err) {
      res.status(400).json({ error: getErrorMessage(err) });
    }
  };

  delete = async (req: Request<{ id: number }>, res: Response) => {
    try {
      const { id } = req.params;
      const user = await this.userService.delete(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: getErrorMessage(err) });
    }
  };
}

export default UserController;
