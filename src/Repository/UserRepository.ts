import { User } from '../Entity/User'

export class UserRepository{
  private async getAll() : Promise<Array<User>>{
    const users = new Array<User>();
    return users;
  }
  
}