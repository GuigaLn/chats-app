import { v4 } from 'uuid';
import { UserRepository } from '../../domain/contracts/UserRepository';
import User from '../../domain/entities/User';
import { query } from '../datasorces/PostgreSQLDataSource';

class UserRepositorySQL extends UserRepository {
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


  async create(user: User): Promise<User | false> {
    const [rows] = await query(`
      INSERT INTO usuarios(uuid, nome, email, senha)
      VALUES ($1, $2, $3, $4) returning uuid;
    `, [v4() ,user.name, user.email, user.password]);

    if(!rows.uuid) {
      return false;
    }

    return new User({id: rows.id, name: user.name, email: user.email, password: '#######'});
  }
}

export default new UserRepositorySQL();
