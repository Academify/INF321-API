import { Client } from 'pg';

export default function getConnection() {
    return new Client({
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    }).;
}