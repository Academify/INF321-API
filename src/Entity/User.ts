export class User{
  private name: string = "";
  private email: string = "";
  private password: string = "";
  private createdAt: Date = new Date();
  private updatedAt: Date = new Date();

  constructor(name?: string, email?: string, password?: string){
    if(name != undefined && email != undefined && password != undefined){
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): void {
    this.password = password;
  }
}