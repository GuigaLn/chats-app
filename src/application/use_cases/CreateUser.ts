import User from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import UserRepositorySQL from '../../infrastructure/repositories/UserRepositorySQL';

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

    return await this.createUserUseCase.create(user);
  }
}

export default new CreateUser(UserRepositorySQL);
