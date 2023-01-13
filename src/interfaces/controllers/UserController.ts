import { Request, Response } from 'express';
import CreateUser from '../../application/use_cases/CreateUser';

class UserController {
  async create(request: Request, response: Response) {
    // Input
    const { name, email, password } = request.body;

    // Treatment
    const user = await CreateUser(name, email, password);

    // Output
    response.json({ user });
  }
}

export default new UserController();
