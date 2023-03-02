import Joi from 'joi';

export const SignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
}).required();

export const SignUpSchema = Joi.object({
  id: Joi.number().allow(null),
  email: Joi.string().email().required(),
  name: Joi.string().min(6).required(),
  password: Joi.string().min(6).required()
}).required();
