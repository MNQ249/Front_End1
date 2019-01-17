export class User {
  constructor(
  public id: number,
  public nin: number,
  public password: string,
  public firstName: string,
  public lastName: string,
  public age: number,
  public city: string,
  public email: string,
  public gender: string,
  public enable: boolean,
  public phone: string,
  public userName: string,
  public  role: string
  ) {
  }
}
