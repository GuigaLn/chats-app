import { compare } from 'bcryptjs';
import AppError from '../../infrastructure/config/AppError';
import { generateJWT } from '../../infrastructure/config/Auth';
import AuthRepository from '../../infrastructure/security/AuthRepository';
import IAuthRepository from '../contracts/IAuthRepository';
import User from '../entities/User';

interface SignInRequest {
  email: string;
  password: string
}

class SignUp {
  constructor(
    private signInUseCase: IAuthRepository,
  ) {}

  async execute({email, password}: SignInRequest) {
    const response =  await this.signInUseCase.signIn(email);

    if(!response || !response.uuid) {
      throw new AppError('This email or password is invalid!', 401);
    }

    const passwordMatch = await compare(password, response.password);

    if (passwordMatch) {
      const token = generateJWT({
        defaultRole: 'user',
        allowedRoles: ['user'],
        otherClaims: {
          'X-Hasura-User-Id': response.uuid,
        },
      });

      return {
        user: new User(response.uuid, response.name, email, '#######'),
        token
      };
    }

    throw new AppError('This email or password is invalid!', 401);
  }
}

export default new SignUp(AuthRepository);
