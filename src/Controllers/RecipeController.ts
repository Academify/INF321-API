import { Request, Response } from 'express';
import { Recipe } from '../Entity/Recipe';
import { RecipeRepository } from '../Repository/RecipeRepository';
export class RecipeController {

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      //Chama o Repository de receitas
      const rr: RecipeRepository = new RecipeRepository();
      const recipes = await rr.getAll();
      let result: Array<Recipe> = new Array<Recipe>();

      recipes.forEach(item => {
        let recipe:Recipe = new Recipe();
        recipe.setId(Number(item[0]));
        recipe.setTitle(item[1]);
        recipe.setDescription(item[2]);
        recipe.setPreparationTime(Number(item[3]));
        recipe.setUserId(Number(item[4]));
        result.push(recipe);
      });

      return res.json(result);
    } catch (error:any) {
      throw Error('Não foi possível recuperar as receitas');
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try{
      //Chama o Repository de receitas
      const rr: RecipeRepository = new RecipeRepository();
      const recipe = await rr.getById((req.params.id as unknown) as number);
      return res.json({ recipe: recipe });
    }catch(error:any){
      throw Error('Não foi possível recuperar a receita');
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try{
      const rr: RecipeRepository = new RecipeRepository();
      const recipe: Recipe = new Recipe(req.body.title, req.body.description, req.body.ingredients, req.body.preparationSteps, req.body.preparationTime, req.body.userId);
      const recipeCreated = await rr.create(recipe);
      return res.status(200).json({recipe: recipeCreated});
    }catch(error:any){
      throw Error('Não foi possível criar a receita');
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      //Chama o Repository de receitas
      const rr: RecipeRepository = new RecipeRepository();
      const recipeId: number = Number(req.params.id);
      const recipe: Recipe = new Recipe(req.body.title, req.body.description, req.body.ingredients, req.body.preparationSteps, req.body.preparationTime);
      const recipeUpdated = await rr.update(recipe, recipeId);
      return res.status(200).json({recipe: recipeUpdated});
    } catch (error: any) {
      console.log(error);
      throw Error('Não foi possível atualizar a receita');
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try{
      //Chama o Repository de receitas
      const rr: RecipeRepository = new RecipeRepository();
      rr.delete((req.params.id as unknown) as number);
      return res.json({ message: 'Recipe deleted' });
    }catch(error: any){
      throw Error('Não foi possível deletar a receita');
    }
  }
}