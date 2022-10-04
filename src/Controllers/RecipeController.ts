import { Request, Response } from 'express';
export class RecipeController {

  public async index(req: Request, res: Response): Promise<Response> {
    //Chama o Repository de receitas
    return res.json({ message: 'Index' });
  }

  public async show(req: Request, res: Response): Promise<Response> {
    //Chama o Repository de receitas
    return res.json({ message: 'Show' });
  }

  public async store(req: Request, res: Response): Promise<Response> {
    //Chama o Repository de receitas
    return res.json({ message: 'Store' });
  }

  public async update(req: Request, res: Response): Promise<Response> {
    //Chama o Repository de receitas
    return res.json({ message: 'Update' });
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    //Chama o Repository de receitas
    return res.json({ message: 'Delete' });
  }

}