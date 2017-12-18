// before interface
// function printLabel ( labelledObj : { label : string }) {
//   consol.log(labelledObj);
// }
// let myObj = { label : "Size 10 object", size : 10 };
// printLabel(myObj);

// after interface
interface LabelledValue {
  label : string; 
}
function printLabel ( labelledObj : LabelledValue ) {
    console.log(labelledObj);
}
let myObj = { label : "Size 10 object", size : 10 };
printLabel(myObj);


// with Optional properties
interface SquareConfig {
  color? : string;
  width? : number;
}
function createSquare (config : SquareConfig) : {color:string, area:number} {
  let newSquare = {color:"white", area:100};
  if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    // newSquare.color = config.clor;

    newSquare.color = config.color;
  }
  if (config.width) newSquare.area = config.width * config.width;
  return newSquare;
}
let mySquare = createSquare({ color:"black" });



// with ReadOnly properties
interface Point {
  readonly x : number;
  readonly y : number;
}

let p1: Point =  { x:10, y:20 };
// p1.x = 5 // Error cuz of readOnly Property

let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;
// ro[2] = 10;  // Error
// ro.push(5); // Error
// ro.length = 10 // Error

// ReadOnlyArray to Array
a = ro as number[];
a = <number[]>ro;


// check!

function fdefault1 ( { a, b } = { a:"1111tt", b:1111 }) : void {
  console.log(a);
  console.log(b);
}

function fdefault2 ( { a="2222tttt", b } = { b:2222 } ) : void {
  console.log(a);
  console.log(b);
}
function fdefault3 ( { a="333tttt", b, c } = { b:3333 } ) : void {
  console.log(a);
  console.log(b);
  console.log(c);
}

fdefault1();
fdefault1({ a:"wow", b:555 });

fdefault2();
console.log("-----------------------------fdefault3 without b/ c without default");
fdefault3();
console.log("-----------------------------fdefault3 / a is optional cuz it is defaulted left of parameter");
fdefault3({c:15, b:999999});
console.log("-------------------- fdefault3({}) >> error cuz b is required/  fdefault3({c:1111}) error cuz be is required")


// Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);
