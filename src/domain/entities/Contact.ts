import AppError from '../../infrastructure/config/AppError';

interface Props {
  id: number | null;
  phone: string;
  name: string;
  avatar: string | null;
}

class Contact {
  private props: Props;

  get id () {
    return this.props.id;
  }

  get phone () {
    return this.props.phone;
  }

  get name () {
    return this.props.name;
  }

  get avatar () {
    return this.props.avatar;
  }

  constructor(props: Props) {
    if(!props.phone) {
      throw new AppError('Phone is required!', 400);
    }

    if(!props.name || props.name.length < 6) {
      throw new AppError('Name is required!', 400);
    }

    this.props = props;
  }
}

export default Contact;
