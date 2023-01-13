import User from './User';

export abstract class UserRepository {
  abstract index(): Promise<User[]>;

  abstract show(id: string): Promise<User | null>;

  abstract create(user: User): Promise<User>
}
