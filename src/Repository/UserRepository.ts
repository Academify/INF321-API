import { User } from '../Entity/User';
import getConnection from './Connection';
import { Client } from 'pg';

export class UserRepository{

  private conn: any = {};

  constructor(){
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.conn = getConnection());
      }, 1000);
    });
  }

  public async getAll() : Promise<Array<User>>{
    this.conn.connect();
    const users = await this.conn.query('SELECT * FROM users');
    this.conn.end();
    return users;
  }

  public async getById(id: number) : Promise<User>{
    this.conn.connect();
    const user = await this.conn.query('SELECT * FROM users WHERE id = $1', [id]);
    this.conn.end();
    return user;
  }

  public async create(user: User) : Promise<User>{
    this.conn.connect();
    const newUser = await this.conn.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.getName, user.getEmail, user.getPassword]).returning('*');
    this.conn.end();
    return newUser;
  }
  
  public async update(user: User) : Promise<User>{
    this.conn.connect();
    const updatedUser = await this.conn.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [user.getName, user.getEmail, user.getPassword, user.getId]).returning('*');
    this.conn.end();
    return updatedUser;
  }

  public async delete(id: number) : Promise<void>{
    this.conn.connect();
    const deletedUser = await this.conn.query('DELETE FROM users WHERE id = $1', [id]);
    this.conn.end();
  }
}