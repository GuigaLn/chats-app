import cors from 'cors';
import express from 'express';
import routes from './interfaces/routes';

import PostgreSQLDataSource from './infrastructure/datasorces/PostgreSQLDataSource';

require('dotenv/config');

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.middlewares();
    this.router();
    this.database();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private router() {
    this.app.use(routes);
  }

  private database(): void {
    PostgreSQLDataSource.connect((error: Error) => {
      if (error) {
        console.log('❌ DATABASE CONNECT ERROR');
      } else {
        console.log('✅ DATABASE CONNECTED');
      }
    });
  }
}

export default new App().app;
