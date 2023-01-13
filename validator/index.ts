import { Request, Response } from 'express';
import Joi from 'joi';
import { messages } from 'joi-translation-pt-br';

class Validators {
  // USADA PARA VALIDAR O HEADER (RECEBE O SCHEMA COMO PARAMETRO)
  public header(request: Request, response: Response, schema: Joi.Schema): { success: boolean, message: string } {
    const result = schema.validate(request.headers, { abortEarly: true, stripUnknown: true });

    if (result.error) {
      return { success: false, message: result.error.details[0].message };
    }

    return { success: true, message: 'Success in Validation' };
  }

  // USADA PARA VALIDAR O BODY (RECEBE O SCHEMA COMO PARAMETRO)
  public body(request: Request, schema: Joi.Schema): { success: boolean, message: string } {
    const result = schema.validate(request.body, { abortEarly: false, stripUnknown: true, messages });

    if (result.error) {
      return { success: false, message: result.error.details[0].message };
    }

    return { success: true, message: 'Success in Validation' };
  }
}

export default Validators;
