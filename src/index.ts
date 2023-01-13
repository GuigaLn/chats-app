import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import app from './app';

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(`### HANDLING ERROR ### ${error}`);
  response.sendStatus(500);
});

app.listen(process.env.PORT || 3001, () => {
  console.log('✅ STARTED ON PORT', process.env.PORT || 3001);
});
