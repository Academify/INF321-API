import { Request, Response } from "express";
import { Ingredient } from "../Entity/Ingredient";
import { IngredientRepository } from "../Repository/IngredientRepository";

export class IngredientController{
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const recipeId: number = Number(req.params.id);
      //Chama o Repository de receitas
      const ir: IngredientRepository = new IngredientRepository();
      const ingredients = await ir.getAll(recipeId);
      return res.json({ ingredients: ingredients });
    } catch (error:any) {
      throw Error('Não foi possível recuperar os ingredientes da receita');
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const recipeId: number = Number(req.params.recipeId);
      const ingredientId: number = Number(req.params.ingredientId);
      //Chama o Repository de receitas
      const ir: IngredientRepository = new IngredientRepository();
      const ingredient = await ir.getById(recipeId, ingredientId);
      return res.json({ ingredient: ingredient });
    } catch (error:any) {
      throw Error('Não foi possível recuperar o ingrediente da receita');
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const recipeId: number = Number(req.params.id);
      const ingredient: Ingredient = new Ingredient(recipeId, req.body.name, req.body.quantity, req.body.unittype);
      //Chama o Repository de receitas
      const ir: IngredientRepository = new IngredientRepository();
      const ingredientStored = await ir.store(ingredient);
      return res.json({ ingredient: ingredientStored });
    } catch (error:any) {
      console.log(error);
      throw Error('Não foi possível salvar o ingrediente da receita');
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const recipeId: number = Number(req.params.recipeId);
      const ingredientId: number = Number(req.params.ingredientId);
      //Chama o Repository de receitas
      const ir: IngredientRepository = new IngredientRepository();
      const ingredientDeleted = await ir.delete(recipeId, ingredientId);
      return res.json({ ingredient: ingredientDeleted });
    } catch (error:any) {
      throw Error('Não foi possível deletar o ingrediente da receita');
    }
  }
}