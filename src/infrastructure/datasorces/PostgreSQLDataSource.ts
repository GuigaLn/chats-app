import { Pool } from 'pg';

require('dotenv/config');

// USADO PARA DEFINIR A CONEXÃO COM O BANCO DE DADOS
const PostgreSQLDataSource = new Pool({
  max: 20,
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 30000,
  ssl: process.env.NODE_ENV === 'production' && {
    rejectUnauthorized: false,
  },
});

export default PostgreSQLDataSource;

export async function query(sql: string, params: any): Promise<any[]> {
  const { rows } = await PostgreSQLDataSource.query(sql, params);
  return rows;
}

