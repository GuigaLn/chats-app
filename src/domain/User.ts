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
      throw new Error('Name is required!');
    }

    if(!props.email || props.email.length < 6 || !props.email.includes('@')) {
      throw new Error('E-mail is required!');
    }

    if(!props.password || props.password.length < 6) {
      throw new Error('Name is required!');
    }

    this.props = props;
  }
}

export default User;
