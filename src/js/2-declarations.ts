// declarations var vs. let, const

// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }
//
//     return x;
// }
//
// f(true);  // returns '10'
// f(false); // returns 'undefined'
// var can be accesed
// var declarations are accessible anywhere within their containing function, module, namespace, or global scope - all which we’ll go over later on - regardless of the containing block.

// for (var i = 0; i < 10; i++) {
//     setTimeout(
//       function() {
//         console.log("1st " + i);
//       },
//       100 * i
//     );
// }
//
// // Every function expression we pass to setTimeout actually refers to the same i from the same scope.
// // Let’s take a minute to consider what that means. setTimeout will run a function after some number of milliseconds, but only after the for loop has stopped executing; By the time the for loop has stopped executing, the value of i is 10. So each time the given function gets called, it will print out 10!
//
// // A common work around is to use an IIFE - an Immediately Invoked Function Expression - to capture i at each iteration:
// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (
//       function(i) {
//           setTimeout(function() { console.log("2nd " + i); }, 100 * i);
//       }
//     )
//     (
//       i
//     );
// }
// // This odd-looking pattern is actually pretty common. The i in the parameter list actually shadows the i declared in the for loop, but since we named them the same, we didn’t have to modify the loop body too much.
//
//
// /*
// *block-scoping
// */
//
//
// for (let i = 0; i < 10 ; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }


// ------------------------- const

// const numLivesForCat = 9;
// const kitty = {
//     name: "Aurora",
//     numLives: numLivesForCat,
// }
//
// // Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };
//
// // all "okay"
// kitty.name = "Rory";
// kitty.name = "Kitty";
// kitty.name = "Cat";
// kitty.numLives--;


// ----------Destructuring
let arr : Array<number> = [1, 2, 3];
let [x, y] = arr;
console.log(x);
console.log(y);
console.log("-------");

[x, y] = [y, x];
console.log(x);
console.log(y);
console.log("-------");

let [x, ...y] = arr;
console.log(x);
console.log(y);
console.log("-------");

let [x:xx = 99, y:yy] = arr;
console.log(xx);
console.log(yy);
console.log(y);
console.log("-------");

// ? => optional!!!!!
function keepWholeObject(wholeObject: { a:string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

//  ------------spread
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
// Then the food property in defaults overwrites food: "rich", which is not what we want in this case.

// Object spread also has a couple of other surprising limits. First, it only includes an objects’ own, enumerable properties. Basically, that means you lose methods when you spread instances of an object:
class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
// clone.m(); // error!
