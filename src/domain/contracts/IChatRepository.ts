
abstract class IChatRepository {
  abstract receiveMessage: Promise<void>

  abstract sendMessage: Promise<void>
}

export default IChatRepository;
