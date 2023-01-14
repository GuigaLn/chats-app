import { UserRepository } from '../../domain/contracts/UserRepository';
import User from '../../domain/entities/User';
import AppError from '../../infrastructure/config/AppError';
import UserRepositorySQL from '../../infrastructure/repositories/UserRepository';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string
}

class CreateUser {
  constructor(
    private createUserUseCase: UserRepository,
  ) {}

  async execute({name, email, password}: CreateUserRequest) {
    const user = new User({id: null, name, email, password});

    const findByEmail = await this.createUserUseCase.findByEmail(email);

    if(findByEmail) {
      throw new AppError('This email is already registered!', 400);
    }

    return await this.createUserUseCase.create(user);
  }
}

export default new CreateUser(UserRepositorySQL);
