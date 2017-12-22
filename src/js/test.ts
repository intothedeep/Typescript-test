let wow : number;
wow = 10;


interface Human {
  readonly target : string;
}

class Enemy implements Human {
  public hp : number;
  readonly target : string; 

  constructor (public lastName: string, public firstName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public attack ( att : number) : number {
    return 10;
  }


}
