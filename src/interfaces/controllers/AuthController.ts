import { Request, Response } from 'express';
import SignIn from '../../domain/use_cases/SignIn';
import SignUp from '../../domain/use_cases/SignUp';
import Schema from '../../infrastructure/validator';
import { SignInSchema, SignUpSchema } from '../../infrastructure/validator/schemas';

class UserController {
  async signin(request: Request, response: Response) {
    // VALIDA O SCHEMA
    const validate = new Schema().body(request, SignInSchema);
    if (!validate.success) {
      return response.status(400).send({ message: validate.message });
    }

    // Input
    const { email, password } = request.body;

    // Treatment
    const user = await SignIn.execute({ email, password });

    // Output
    response.json(user);
  }

  async signup(request: Request, response: Response) {
    // VALIDA O SCHEMA
    const validate = new Schema().body(request, SignUpSchema);
    if (!validate.success) {
      return response.status(400).send({ message: validate.message });
    }

    // Input
    const { name, email, password } = request.body;

    // Treatment
    const user = await SignUp.execute({ name, email, password });

    // Output
    response.json({ user });
  }
}

export default new UserController();
