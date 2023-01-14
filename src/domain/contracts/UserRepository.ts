import User from '../entities/User';

export abstract class UserRepository {
  abstract index(): Promise<User[]>;

  abstract show(uuid: string): Promise<User | null>;

  abstract findByEmail(email: string): Promise<User | null>;

  abstract create(user: User): Promise<User | false>
}
