import User from '../entities/User';

abstract class IUserRepository {
  abstract index(): Promise<User[]>;

  abstract show(uuid: string): Promise<User | null>;

  abstract findByEmail(email: string): Promise<User | null>;
}

export default IUserRepository;
