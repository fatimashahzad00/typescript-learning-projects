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
function hello1(name) {
    console.log("Hello ".concat(name));
}
// hello1("Imran")
function singTwo(first, second) {
    console.log("".concat(first, " / ").concat(second));
}
// // Logs: "Ball and Chain / undefined"
// singTwo("Ball and Chain");
// Expected 2 arguments, but got 1.
singTwo("I will survive", "Higher love");
