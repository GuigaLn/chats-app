import User from './User';

export class UserRepository {
  async index(): Promise<User[]> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  async show(id: string): Promise<User | null> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  async create(user: User): Promise<User> {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}
