export class Step{
  private id: number = 0;
  private recipeId : number = 0;
  private stepNumber : number = 0;
  private description : string = "";

  constructor(recipeId?: number, stepNumber?: number, description?: string, id: number = 0){
    if(id != undefined && recipeId != undefined && stepNumber != undefined && description != undefined){
      this.id = id;
      this.recipeId = recipeId;
      this.stepNumber = stepNumber;
      this.description = description;
    }
  }

  public getId(): number {
    return this.id;
  }

  public getRecipeId(): number {
    return this.recipeId;
  }

  public setRecipeId(recipeId: number): void {
    this.recipeId = recipeId;
  }

  public getStepNumber(): number {
    return this.stepNumber;
  }

  public setStepNumber(stepNumber: number): void {
    this.stepNumber = stepNumber;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }


}