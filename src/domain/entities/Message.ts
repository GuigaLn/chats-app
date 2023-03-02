import AppError from '../../infrastructure/config/AppError';

interface Props {
  id: number | null;
  body: string;
  type: string;
  date: Date | null;
  seen: boolean | null;
  me: boolean | null;
  chatId: number;
}

class Message {
  private props: Props;

  get id () {
    return this.props.id;
  }

  get body () {
    return this.props.body;
  }

  get date () {
    return this.props.date;
  }

  get seen () {
    return this.props.seen;
  }

  get me () {
    return this.props.me;
  }

  get chatId () {
    return this.props.chatId;
  }


  constructor(props: Props) {
    if(!props.body || props.body.length < 1) {
      throw new AppError('Body is required!', 400);
    }

    if(!props.type) {
      throw new AppError('Type is required!', 400);
    }

    if(!props.date) {
      props.date = new Date();
    }

    if(!props.seen) {
      props.seen === false;
    }

    if(!props.me) {
      props.me === false;
    }

    if(!props.chatId) {
      throw new AppError('ChatId is required!', 400);
    }

    this.props = props;
  }
}

export default Message;
