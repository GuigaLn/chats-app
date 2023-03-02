import AppError from '../../infrastructure/config/AppError';
import UserRepository from '../../infrastructure/repositories/UserRepository';
import SignUpRepository from '../../infrastructure/security/AuthRepository';
import IAuthRepository from '../contracts/IAuthRepository';
import IUserRepository from '../contracts/IUserRepository';
import User from '../entities/User';

interface SignUpRequest {
  name: string;
  email: string;
  password: string
}

class SignUp {
  constructor(
    private createUserUseCase: IUserRepository,
    private signUpUseCase: IAuthRepository,
  ) {}

  async execute({name, email, password}: SignUpRequest) {
    const user = new User(null, name, email, password);

    const findByEmail = await this.createUserUseCase.findByEmail(email);

    if(findByEmail) {
      throw new AppError('This email is already registered!', 400);
    }

    const response = await this.signUpUseCase.signUp(user);

    if(!response || !response.uuid) {
      return false;
    }

    return new User(response.uuid, name, email, '#######');
  }
}

export default new SignUp(UserRepository, SignUpRepository);
