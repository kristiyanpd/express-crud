class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  findAll = async (req, res) => {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  findById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  save = async (req, res) => {
    try {
      const user = req.body;
      const userCreated = await this.userService.save(user);
      res.status(200).json(userCreated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  saveById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const userUpdated = await this.userService.saveById(id, user);
      res.status(200).json(userUpdated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.delete(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
}

module.exports = UserController;
