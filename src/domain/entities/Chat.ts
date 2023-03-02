import AppError from '../../infrastructure/config/AppError';

interface Props {
  id: number | null;
  opened: string | null;
  finished: string | null;
  contactId: number;
  sectorId: number;
}

class Chat {
  private props: Props;

  get id () {
    return this.props.id;
  }

  get opened () {
    return this.props.opened;
  }

  get finished () {
    return this.props.finished;
  }

  get contactId () {
    return this.props.contactId;
  }

  get sectorId () {
    return this.props.sectorId;
  }

  constructor(props: Props) {
    if(!props.contactId || !Number(props.contactId)) {
      throw new AppError('ContactId is required!', 400);
    }

    if(!props.sectorId || !Number(props.sectorId)) {
      throw new AppError('SectorId is required!', 400);
    }

    this.props = props;
  }
}

export default Chat;
