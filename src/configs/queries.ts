import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432,
  database: process.env.DB_NAME || 'nodecrud',
});

export default pool;
