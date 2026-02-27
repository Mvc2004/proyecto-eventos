import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bd_eventos',
  password: 'Eventos123',
  port: 5432,
});