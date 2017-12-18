// typescript
let str : string;
let num : number;
let boolean : boolean;

let firstName : string = "victor";
let age : number = 15;
let nameStr : string = `
  ex1) types
  My name is ${ firstName }!

  Nice to Meet you!. I am ${ age + 1 } years old!
`;

document.getElementById('ts').innerHTML = nameStr;


// enum
enum Color {
  r,
  g,
  b
}
let c1 : Color = Color.r;
console.log(c1);
let cs : string = Color[2];
console.log(cs);

// for (let x in Color) console.log(x);
console.log(Color);

// Assertion (casting)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// let strLength: number = (someValue as string).length;
