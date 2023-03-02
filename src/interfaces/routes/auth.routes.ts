import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRoutes = Router();

authRoutes.post('/signin', AuthController.signin);
authRoutes.post('/signup', AuthController.signup);

export default authRoutes;
