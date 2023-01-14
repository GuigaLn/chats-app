import AppError from '../../infrastructure/config/AppError';

interface Props {
  id: string | null;
  name: string;
  email: string;
  password: string;
}

class User {
  private props: Props;

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }

  get email () {
    return this.props.email;
  }

  get password () {
    return this.props.password;
  }

  constructor(props: Props) {
    if(!props.name || props.name.length < 6) {
      throw new AppError('Name is required!', 400);
    }

    if(!props.email || props.email.length < 6 || !props.email.includes('@')) {
      throw new AppError('E-mail is required!', 400);
    }

    if(!props.password || props.password.length < 6) {
      throw new AppError('Password is required!', 400);
    }

    this.props = props;
  }
}

export default User;
