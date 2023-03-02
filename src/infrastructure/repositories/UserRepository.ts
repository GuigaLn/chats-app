import IUserRepository from '../../domain/contracts/IUserRepository';
import User from '../../domain/entities/User';
import { query } from '../datasorces/PostgreSQLDataSource';

class UserRepository extends IUserRepository {
  async index(): Promise<User[]> {
    const [rows] = await query(`
      SELECT uuid, nome, email from usuarios;
    `, []);

    return rows;
  }

  async show(uuid: string): Promise<User | null> {
    const [rows] = await query(`
      SELECT uuid, nome, email from usuarios
      WHERE uuid = $1;
    `, [uuid]);

    return rows;
  }

  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await query(`
      SELECT uuid, nome, email from usuarios
      WHERE email = $1;
    `, [email]);

    return rows;
  }
}

export default new UserRepository();
