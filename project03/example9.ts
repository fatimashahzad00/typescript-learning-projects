/*------------------------------- Function Type Parentheses ----------------------------------------------- */
let returnStringsOrUndefined : () => string | undefined;
// // Type is a function that returns a union: string | undefined
let maybeRetuenstring : (() => string) | undefined;
// Type is either undefined or a function that returns a string


// // Case 2
// let returnStringnumbers: (() => string) | number
// returnStringnumbers = 7;


// // CAse 1
// let returnStringnumber: () => string | number
// returnStringnumber = 7;//error so here we need function
// // Type 'number' is not assignable to type '() => string | number'.

// // Case 3
// let returnStringNumber: (() => string | number) | number
// returnStringNumber = function (): number {return 7};
// returnStringNumber = function (): string {return "7"};
// returnStringNumber = 7; //Type 'number' is not assignable to type '() => string | number'.



// let aboutImran: (name: string) => number
// // aboutImran = "Alexander"; //Type 'string' is not assignable to type '(name: string) => number'.

// // aboutImran = (name: string)  => {
// //     return "7"      //Type '(name: string) => string' is not assignable to type '(name: string) => number'.
// //     // Type 'string' is not assignable to type 'number'.
// // }

// aboutImran = (name: string)  => {
//     return 7
// }

let returnStringNumber: () => string | number

returnStringNumber = "Alexander";
returnStringNumber = 7;
returnStringNumber = () => "Alexander";
returnStringNumber = () => 7;