import AppError from '../../infrastructure/config/AppError';

class User {
  public uuid: string | null;
  public name: string;
  public email: string;
  public password: string;


  constructor(uuid: string | null, name: string, email: string, password: string) {
    if(!name || name.length < 6) {
      throw new AppError('Name is required!', 400);
    }

    if(!email || email.length < 6 || !email.includes('@')) {
      console.log(email);
      throw new AppError('E-mail is required!', 400);
    }

    if(!password || password.length < 6) {
      throw new AppError('Password is required!', 400);
    }

    this.uuid = uuid;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export default User;
