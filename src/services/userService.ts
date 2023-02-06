import UserRepository from '../repositories/userRepository';
import { User } from '../models/user';

const EMAIL_EXISTING = 'User with such email already exists!';

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  findAll = async () => this.userRepository.findAll();

  findById = async (id: number) => {
    if (Number.isNaN(id)) {
      throw new Error('ID must a number!');
    }

    return this.userRepository.findById(id);
  };

  save = async (user: User) => {
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

  saveById = async (id: number, user: User) => {
    if (user.email && await this.userRepository.existsByEmailDifferent(id, user.email)) {
      throw new Error(EMAIL_EXISTING);
    }

    return this.userRepository.saveById(id, user);
  };

  delete = async (id: number) => {
    if (Number.isNaN(id)) {
      throw new Error('ID must a number!');
    }

    return this.userRepository.delete(id);
  };
}

export default UserService;
