const EMAIL_EXISTING = 'User with such email already exists!';

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  findAll = async () => this.userRepository.findAll();

  findById = async (id) => {
    if (Number.isNaN(id)) {
      throw new Error('ID must a number!');
    }

    return this.userRepository.findById(id);
  };

  save = async (user) => {
    if (!user.email) {
      throw new Error('User email cannot be empty!');
    }

    if (!user.name) {
      throw new Error('User name cannot be empty!');
    }

    if (await this.userRepository.existsByEmail(user.email)) {
      throw new Error(EMAIL_EXISTING);
    }

    return this.userRepository.save(user);
  };

  saveById = async (id, user) => {
    if (user.email && await this.userRepository.existsByEmailDifferent(id, user.email)) {
      throw new Error(EMAIL_EXISTING);
    }

    return this.userRepository.saveById(id, user);
  };

  delete = async (id) => {
    if (Number.isNaN(id)) {
      throw new Error('ID must a number!');
    }

    return this.userRepository.delete(id);
  };
}

module.exports = UserService;
