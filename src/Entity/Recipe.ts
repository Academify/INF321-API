import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export class Recipe{
  private id: number = 0;
  private title: string = "";
  private description: string = "";
  private ingredients: Array<Ingredient> = [];
  private preparation: Array<Step> = [];
  private preparationTime: number = 0;
  private userId: number = 0;

  constructor(title?: string, description?: string, ingredients?: Array<any>, preparation?: Array<any>, preparationTime?: number, userId?: number){
    if(title != undefined && description != undefined && ingredients != undefined && preparation != undefined && preparationTime != undefined && userId != undefined){
      this.title = title;
      this.description = description;
      this.ingredients = ingredients;
      this.preparation = preparation;
      this.preparationTime = preparationTime;
      this.userId = userId;
    }
    if(ingredients == undefined && preparation == undefined && title != undefined && description != undefined && preparationTime != undefined && userId == undefined){
      this.title = title;
      this.description = description;
      this.preparationTime = preparationTime;
      this.userId = 0;
      this.ingredients = [];
      this.preparation = [];
    }
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getIngredients(): Array<any> {
    return this.ingredients;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number): void {
    this.userId = userId;
  }

  public setIngredients(ingredients: Array<any>): void {
    this.ingredients = ingredients;
  } 

  public getPreparation(): Array<any> {
    return this.preparation;
  }

  public setPreparation(preparation: Array<any>): void {
    this.preparation = preparation;
  }

  public getPreparationTime(): number {
    return this.preparationTime;
  }

  public setPreparationTime(preparationTime: number): void {
    this.preparationTime = preparationTime;
  }

}