import { Request, Response } from 'express';
import { User } from "../Entity/User";

export class UserController{
  public async index(req: Request, res: Response) : Promise<Response> {
    //Get all users
    const users = new Array<User>();
    return res.status(200).json({users: users});
  }

  public async show(req: Request, res: Response) : Promise<Response> {
    //Get user by id
    const user = new User();
    return res.status(200).json({user: user});
  }

  public async store(req: Request, res: Response) : Promise<Response> {
    //Create user
    return res.status(200).json({message: "User created"});
  }

  public async update(req: Request, res: Response) : Promise<Response> {
    //Update user
    return res.status(200).json({message: "User updated"}); 
  }

  public async delete(req: Request, res: Response) : Promise<Response> {
    //Delete user
    return res.status(200).json({message: "User deleted"});
  }
}