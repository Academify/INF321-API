import { Recipe } from '../Entity/Recipe';
import { User } from '../Entity/User';
import { Connection } from './Connection';

export class RecipeRepository{

  private conn: any = {};

  constructor(){
    this.conn = new Connection();
  }

  public async getAll() : Promise<Array<Recipe>>{
    
    const client = await this.conn.connect();
    const recipes = await client.query('SELECT * FROM recipes');
    client.end();
    return recipes.rows;
  }

  public async getById(id: number) : Promise<User>{
    const client = await this.conn.connect();
    const recipes = await client.query('SELECT * FROM recipes WHERE id = $1', [id]);
    client.end();
    return recipes.rows[0];
  }

  public async create(recipe: Recipe) : Promise<Recipe>{  
    const client = await this.conn.connect();
        
    await client.query('INSERT INTO recipes (title, description, preparationtime, userId) VALUES ($1, $2, $3, $4)', [recipe.getTitle(), recipe.getDescription(), recipe.getPreparationTime(), recipe.getUserId()]);
    const recipeCreated = await client.query('SELECT * FROM recipes order by id DESC');

    for(let ingredients of recipe.getIngredients()){
      await client.query('INSERT INTO ingredients (name, quantity, unittype, recipeid) VALUES ($1, $2, $3, $4)', [ingredients.name, ingredients.quantity, ingredients.unittype, recipeCreated.rows[0][0]]);
    }

    for(let steps of recipe.getPreparation()){
      await client.query('INSERT INTO steps (orderIndex, command, recipeid) VALUES ($1, $2, $3)', [steps.orderIndex, steps.command, recipeCreated.rows[0][0]]);
    }

    client.end();

    return recipeCreated.rows[0];
  }
  
  public async update(recipe: Recipe, id: number) : Promise<User>{
    const client = await this.conn.connect();
    await client.query('UPDATE recipes SET title = $1, description = $2, preparationtime = $3 WHERE id = $4', [recipe.getTitle(), recipe.getDescription(), recipe.getPreparationTime(), id]);
    const recipeUpdated = await client.query('SELECT * FROM recipes WHERE id = $1', [id]);
    client.end();
    return recipeUpdated.rows[0];
  }

  public async delete(id: number) : Promise<void>{
    const client = await this.conn.connect();
    await client.query('DELETE FROM ingredients WHERE recipeid = $1', [id]);
    await client.query('DELETE FROM steps WHERE recipeid = $1', [id]);
    await client.query('DELETE FROM recipes WHERE id = $1', [id]);
    client.end();
    return;
  }
}