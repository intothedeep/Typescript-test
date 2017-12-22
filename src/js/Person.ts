class Person {
  public fullName: string;

  constructor ( public firstName: string, public lastName: string ) {
    this.fullName = firstName + " " + lastName;
  }

  public say (): void {
    console.log(this.fullName);
  }

}
 
let p123: Person;
p123 = new Person("victor", "ts");
p123.say();
console.log(p123.fullName);
