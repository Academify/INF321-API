import { Client } from 'ts-postgres';

export class Connection{
  private client: Client = new Client({
    host: process.env.PGHOST,
    port: (process.env.PGPORT as unknown) as number,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
  });

  public async connect() : Promise<Client>{
    await this.client.connect();
    return this.client;
  }
}