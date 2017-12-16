class Person {
  fullName : string;

  constructor (public firstName:string, public lastName:string) {
    this.fullName = firstName + " " + lastName;
  }

  say () : void {
    console.log(this.fullName);
  }

}

let p1 : Person;
p1 = new Person("victor", "ts");
p1.say();
console.log(p1.fullName);
