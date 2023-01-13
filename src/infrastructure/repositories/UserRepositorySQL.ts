import User from '../../domain/User';
import { UserRepository } from '../../domain/UserRepository';
import { query } from '../datasorces/PostgreSQLDataSource';

class UserRepositorySQL extends UserRepository {
  async index(): Promise<User[]> {
    return new Promise((resolve) => resolve([]));
  }

  async show(id: string): Promise<User | null> {
    return new Promise((resolve) => resolve(null));
  }

  async create(user: User): Promise<User> {
    const rows = await query('SELECT 1', []);
    console.log(rows);
    return new Promise((resolve) => resolve(user));
  }
}

export default new UserRepositorySQL();
