import { hash } from 'bcryptjs';
import { v4 } from 'uuid';
import IAuthRepository from '../../domain/contracts/IAuthRepository';
import User from '../../domain/entities/User';
import { query } from '../datasorces/PostgreSQLDataSource';

class SignUpRepository extends IAuthRepository {
  async signUp(user: User): Promise<User> {
    const hashedPassowrd = await hash(user.password, 10);

    const [rows] = await query(`
      INSERT INTO usuarios(uuid, nome, email, senha)
      VALUES ($1, $2, $3, $4) returning uuid;
    `, [v4() , user.name, user.email, hashedPassowrd]);

    return rows;
  }

  async signIn(email: string): Promise<User> {
    const [rows] = await query(`
      SELECT uuid, nome as name, email, senha as password FROM usuarios
      WHERE email = $1
    `, [email]);

    return rows;
  }
}

export default new SignUpRepository();
