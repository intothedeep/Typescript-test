let wow : number;
wow = 10;


interface Wow {
  readonly target : string;
}

class Enemy implements Wow {
  public hp : number;
  readonly target : string;

  constructor ( ) {
  }

  public attack ( att : number) : number {
    return 10;
  }
} 
