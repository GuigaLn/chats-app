import AppError from '../../infrastructure/config/AppError';

interface Props {
  id: number | null;
  name: string;
}

class Sector {
  private props: Props;

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }

  constructor(props: Props) {
    if(!props.name || props.name.length < 6) {
      throw new AppError('Name is required!', 400);
    }

    this.props = props;
  }
}

export default Sector;
