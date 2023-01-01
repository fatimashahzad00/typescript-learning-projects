/* Topic 2: REQUIRED PARAMETERS  */

//Case 1
// function hello(name: string) {
//     console.log(`Hello ${name}`);
// }
// hello(7)
// No overload matches this call.
//   Overload 1 of 2, '(name: string): void', gave the following error.
//     Argument of type 'number' is not assignable to parameter of type 'string'.
//   Overload 2 of 2, '(name: string): void', gave the following error.
//     Argument of type 'number' is not assignable to parameter of type 'string'.

//Case 2
function hello1(name: string) {
    console.log(`Hello ${name}`);
}
// hello1("Imran")


function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
    
}

// // Logs: "Ball and Chain / undefined"
// singTwo("Ball and Chain");
// Expected 2 arguments, but got 1.

// Logs: "I Will Survive / Higher Love"
singTwo("I will survive", "Higher love")  //OK

// Logs: "Go Your Own Way / The Chain"
// singTwo("Go Your Own Way", "The Chain", "Dreams");
// Expected 2 arguments, but got 3.
