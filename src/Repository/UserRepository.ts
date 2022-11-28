import { User } from '../Entity/User';
import { Connection } from './Connection';

export class UserRepository{

  private conn: any = {};

  constructor(){
    this.conn = new Connection();
  }

  public async getAll() : Promise<Array<User>>{
    
    const client = await this.conn.connect();
    const users = await client.query('SELECT * FROM users');
    client.end();
    return users.rows;
  }

  public async getById(id: number) : Promise<User>{
    const client = await this.conn.connect();
    const user = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    client.end();
    return user.rows[0];
  }

  public async create(user: User) : Promise<User>{  
    const client = await this.conn.connect();    
    await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [user.getName(), user.getEmail(), user.getPassword()]);
    const userCreated = await client.query('SELECT * FROM users WHERE email = $1', [user.getEmail()]);
    client.end();
    return userCreated.rows[0];
  }
  
  public async update(user: User) : Promise<User>{
    const client = await this.conn.connect(); 
    await client.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [user.getName, user.getEmail, user.getPassword, user.getId]);
    client.end();
    return await this.getById(user.getId());
  }

  public async delete(id: number) : Promise<void>{
    this.conn.connect();
    const deletedUser = await this.conn.query('DELETE FROM users WHERE id = $1', [id]);
    this.conn.end();
  }
}