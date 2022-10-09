import { Request, Response } from 'express';
import { User } from "../Entity/User";

export class UserController{
  public async index(req: Request, res: Response) : Promise<Response> {
    try {
      //Get all users
      const users = new Array<User>();
      return res.status(200).json({users: users});
    } catch (error: any) {
      throw Error('Não foi possível reucuperar os usuários')
    }
  }

  public async show(req: Request, res: Response) : Promise<Response> {
    try {
      //Get user by id
      const user = new User();
      return res.status(200).json({user: user});
    } catch (error: any) {
      throw Error('Não foi possível reucuperar o usuário')
    }
  }

  public async store(req: Request, res: Response) : Promise<Response> {
    try {
      //Create user
      return res.status(200).json({message: "User created"});
    } catch (error: any) {
      throw new Error("Não foi possível criar o usuário");
      
    }
  }

  public async update(req: Request, res: Response) : Promise<Response> {
    try {
      //Update user
      return res.status(200).json({message: "User updated"}); 
    } catch (error: any) {
      throw new Error("Não foi possível atualizar o usuário");
    }
  }

  public async delete(req: Request, res: Response) : Promise<Response> {
    try {
      //Delete user
      return res.status(200).json({message: "User deleted"}); 
    } catch (error: any) {
      throw new Error("Não foi possível deletar o usuário");
    }  
  }
}