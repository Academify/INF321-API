import { Ingredient } from "../Entity/Ingredient";
import { Connection } from "./Connection";

export class IngredientRepository{

  private conn: any = {};

  constructor(){
    this.conn = new Connection();
  }

  public async getAll(recipeId: number): Promise<Ingredient[]> {
    const client = await this.conn.connect();
    const ingredientsFound = await client.query('SELECT * FROM ingredients WHERE recipeId = $1', [recipeId]);
    const ingredients = new Array<Ingredient>();
    for(let ingredient of ingredientsFound.rows){
      ingredients.push(new Ingredient(ingredient[1], ingredient[2], ingredient[3], ingredient[4], ingredient[0]));
    }
    client.end();
    return ingredients;
  }

  public async getById(recipeId: number, ingredientId: number): Promise<Ingredient> {
    const client = await this.conn.connect();
    const ingredientFound = await client.query('SELECT * FROM ingredients WHERE recipeId = $1 AND id = $2', [recipeId, ingredientId]);
    const ingredient = new Ingredient(ingredientFound.rows[0][1], ingredientFound.rows[0][2], ingredientFound.rows[0][3], ingredientFound.rows[0][4], ingredientFound.rows[0][0]);
    client.end();
    return ingredient;
  }

  public async store(ingredient: Ingredient): Promise<Ingredient> {
    const client = await this.conn.connect();
    const ingredientStored = await client.query('INSERT INTO ingredients (recipeId, name, quantity, unittype) VALUES ($1, $2, $3, $4) RETURNING *', [ingredient.getRecipeId(), ingredient.getName(), ingredient.getQuantity(), ingredient.getUnit()]);
    const ingredientInserted = new Ingredient(ingredientStored.rows[0][1], ingredientStored.rows[0][2], ingredientStored.rows[0][3], ingredientStored.rows[0][4], ingredientStored.rows[0][0]);
    client.end();
    return ingredientInserted;
  }

  public async delete(recipeId: number, ingredientId: number): Promise<boolean> {
    const client = await this.conn.connect();
    await client.query('DELETE FROM ingredients WHERE recipeId = $1 AND id = $2', [recipeId, ingredientId]);
    client.end();
    return true;
  }
}