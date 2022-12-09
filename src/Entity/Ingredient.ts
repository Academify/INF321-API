export class Ingredient{
  private id: number = 0;
  private recipeId : number = 0;
  private name : string = "";
  private quantity : number = 0;
  private unit : string = "";

  constructor(recipeId?: number, name?: string, quantity?: number, unit?: string, id: number = 0){
    if(id != undefined && recipeId != undefined && name != undefined && quantity != undefined && unit != undefined){
      this.id = id;
      this.recipeId = recipeId;
      this.name = name;
      this.quantity = quantity;
      this.unit = unit;
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

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getQuantity(): number {  
    return this.quantity;
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getUnit(): string {
    return this.unit;
  }

  public setUnit(unit: string): void {
    this.unit = unit;
  }
}