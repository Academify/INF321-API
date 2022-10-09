import { Request, Response } from 'express';

export class LoginController{
  public async login(req: Request, res: Response): Promise<Response>{
    try {
      // Fazer a lgógica de verificação de email e senha
      return res.status(200).json({ jwtToken: '' });
    } catch (error: any) {
      throw Error('Não foi possível realizar login');
    }
  }
}