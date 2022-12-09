import { Request, Response } from 'express';
import { Step } from '../Entity/Step';
import { StepRepository } from '../Repository/StepRepository';

export class StepController{
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const recipeId: number = Number(req.params.id);
      //Chama o Repository de receitas
      const sr: StepRepository = new StepRepository();
      const steps = await sr.getAll(recipeId);
      return res.json({ steps: steps });
    } catch (error:any) {
      console.log(error);
      throw Error('Não foi possível recuperar os passos da receita');
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try{
      const recipeId: number = Number(req.params.recipeId);
      const stepId: number = Number(req.params.stepId);
      const sr: StepRepository = new StepRepository();
      const step = await sr.getById(recipeId , stepId);
      return res.json({ step: step });
    }catch(error: any){
      throw Error('Não foi possível recuperar o passo da receita');
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try{
      const recipeId: number = Number(req.params.id);
      const sr: StepRepository = new StepRepository();
      console.log(recipeId, req.body.stepNumber, req.body.description);
      const stepObject = new Step(recipeId, req.body.stepNumber, req.body.description);
      const step = await sr.create(stepObject);
      return res.json({ step: step });
    }catch(error: any){
      throw Error('Não foi possível criar o passo da receita');
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try{
      const recipeId: number = Number(req.params.recipeId);
      const stepId: number = Number(req.params.stepId);
      const sr: StepRepository = new StepRepository();
      await sr.delete(recipeId, stepId);
      return res.json({ message: 'Passo da receita excluído com sucesso' });
    }catch(error: any){
      throw Error('Não foi possível excluir o passo da receita');
    }
  }
}