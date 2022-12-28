/*                             Usage Checking                           */
type Name = { firstName: string, lastName: string};

let fullName: Name = { firstName: "Imran", lastName: "Ali"};

let name: Name = { firstName: "Alexander"}  // ERROR
// 'name' is declared but its value is never read.ts(6133)
// Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Name'.ts(2741)
// example5.ts(2, 34): 'lastName' is declared here.

export {}


type Name1 = { firstName: string, lastName: string};

let fullName1: Name = { lastName: "Ali", firstName: "Imran"};

let name1: Name = { firstName: "Alexander"}  // ERROR
// 'name' is declared but its value is never read.ts(6133)
// Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Name'.ts(2741)
// example5.ts(2, 34): 'lastName' is declared here.

export {}


/*  ANOTHER BOOK EXAMPLE  */
type firstAndlastNames = {
    first: string,
    last: string,
}

const hasBoth: firstAndlastNames = {
    first: "Ava",
    last: "Brown",
};

const hasOnlyOne: firstAndlastNames = {   //ERROR
    first: "Aliya"
}
// Property 'last' is missing in type '{ first: string; }' 
// but required in type 'firstAndlastNames'.


type TimeRange = {
    start: Date;
}

const hasStartString: TimeRange = {
    start: "2022-12-20"
    // Type 'string' is not assignable to type 'Date'.
};