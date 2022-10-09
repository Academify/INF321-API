import { Request, Response } from 'express';
export class RecipeController {

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      //Chama o Repository de receitas
      return res.json({ message: 'Index' });
    } catch (error:any) {
      throw Error('Não foi possível recuperar as receitas');
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try{
      //Chama o Repository de receitas
      return res.json({ message: 'Show' });
    }catch(error:any){
      throw Error('Não foi possível recuperar a receita');
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try{
      //Chama o Repository de receitas
      return res.json({ message: 'Store' });
    }catch(error:any){
      throw Error('Não foi possível criar a receita');
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      //Chama o Repository de receitas
      return res.json({ message: 'Update' });
    } catch (error: any) {
      throw Error('Não foi possível atualizar a receita');
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try{
      //Chama o Repository de receitas
      return res.json({ message: 'Delete' });
    }catch(error: any){
      throw Error('Não foi possível deletar a receita');
    }
  }
}