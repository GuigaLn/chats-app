import User from '../../domain/User';
import UserRepositorySQL from '../../infrastructure/repositories/UserRepositorySQL';

async function CreateUser(name: string, email: string, password: string) {
  const user = new User(null, name, email, password);
  if(!user) {
    return false;
  }

  return await UserRepositorySQL.create(user);
}

export default CreateUser;
