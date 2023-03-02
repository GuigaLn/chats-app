import User from '../entities/User';

abstract class IAuthRepository {
  abstract signIn(email: string): Promise<User>

  abstract signUp(user: User): Promise<User>
}

export default IAuthRepository;
