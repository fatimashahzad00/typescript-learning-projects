
/*         STRUCTURAL TYPING           */

type firstName = { firstname: string }
type lastName = { lastname: string }

const fullName = {firstname: "Imran", lastname: "Ali"};

let firstname: firstName = fullName;
let lastname: lastName = fullName;


/*  ANOTHER BOOK EXAMPLE  */
type WithfirstName = {
    firstName: string;
}
type WithlastName = {
    lastName: string;
}

const hasBoth = {
    firstName: "Lucillie",
    lastName: "Clifton",
};


let withfirstname: WithfirstName = hasBoth; 
 // Ok: `hasBoth` contains a `firstName` property of type `string`

let withlastname: WithlastName = hasBoth; 
 // Ok: `hasBoth` contains a `lastName` property of type `string`