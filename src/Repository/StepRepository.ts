import { Step } from "../Entity/Step";
import { Connection } from './Connection';

export class StepRepository{

  private conn: any = {};

  constructor(){
    this.conn = new Connection();
  }

  public async getAll(recipeId: number) : Promise<Array<Step>>{
    const client = await this.conn.connect();
    const stepsFound = await client.query('SELECT * FROM steps WHERE recipeId = $1', [recipeId]);
    const steps = new Array<Step>();
    for(let step of stepsFound.rows){
      steps.push(new Step(step[1], step[2], step[3], step[0]));
    }
    client.end();
    return steps;
  }

  public async getById(recipeId: number, stepId: number) : Promise<Step>{
    const client = await this.conn.connect();
    const stepFound = await client.query('SELECT * FROM steps WHERE recipeId = $1 AND id = $2', [recipeId, stepId]);
    const step = new Step(stepFound.rows[0][0], stepFound.rows[0][1], stepFound.rows[0][2], stepFound.rows[0][3]);
    client.end();
    return step;
  }
  public async create(step: Step) : Promise<Step>{
    const client = await this.conn.connect();
    const stepCreated = await client.query('INSERT INTO steps (recipeId, orderindex, command) VALUES ($1, $2, $3) RETURNING *', [step.getRecipeId(), step.getStepNumber(), step.getDescription()]);
    const stepCreatedObject = new Step(stepCreated.rows[0][0], stepCreated.rows[0][1], stepCreated.rows[0][2], stepCreated.rows[0][3]);
    client.end();
    return stepCreatedObject;
  }
  public async update(step: Step) : Promise<Step>{
    return new Step();
  }
  public async delete(recipeId: number, stepId: number) : Promise<void>{
    const client = await this.conn.connect();
    await client.query('DELETE FROM steps WHERE recipeId = $1 AND id = $2', [recipeId, stepId]);
    client.end();
  }
}