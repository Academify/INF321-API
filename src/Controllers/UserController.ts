import { Request, Response } from 'express';
import {UserRepository} from '../Repository/UserRepository';
import { User } from "../Entity/User";

export class UserController{

  private _userRepository: UserRepository = new UserRepository();

  constructor() {
    this._userRepository = new UserRepository();
  }

  public async index(req: Request, res: Response) : Promise<Response> {
    try {
      //Get all users
      const ur: UserRepository = new UserRepository();

      const users = await ur.getAll();
      
      return res.status(200).json({users: users});
    } catch (error: any) {
      throw Error('Não foi possível reucuperar os usuários')
    }
  }

  public async show(req: Request, res: Response) : Promise<Response> {
    try {
      //Get user by id
      const ur: UserRepository = new UserRepository();
      const user = await ur.getById((req.params.id as unknown) as number);
      return res.status(200).json({user: user});
    } catch (error: any) {
      throw Error('Não foi possível reucuperar o usuário')
    }
  }

  public async store(req: Request, res: Response) : Promise<Response> {
    try {
      //Create user
      const ur: UserRepository = new UserRepository();
      const user = await ur.create(new User(req.body.name, req.body.email, req.body.password));
      return res.status(200).json({user: user});
    } catch (error: any) {
      throw new Error("Não foi possível criar o usuário");
      
    }
  }

  public async update(req: Request, res: Response) : Promise<Response> {
    try {
      //Update user
      const ur: UserRepository = new UserRepository();
      const user = await ur.update(new User(req.body.name, req.body.email, req.body.password, (req.params.id as unknown) as number));
      return res.status(200).json({message: user}); 
    } catch (error: any) {
      throw new Error("Não foi possível atualizar o usuário");
    }
  }

  public async delete(req: Request, res: Response) : Promise<Response> {
    try {
      //Delete user
      const id = (req.params.id as unknown) as number;
      const ur: UserRepository = new UserRepository();
      await ur.delete(id);
      return res.status(200).json({message: "User deleted"}); 
    } catch (error: any) {
      console.log(error);
      throw new Error("Não foi possível deletar o usuário");
    }  
  }
}