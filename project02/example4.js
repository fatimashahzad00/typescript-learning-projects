"use strict";
/*         STRUCTURAL TYPING           */
const fullName = { firstname: "Imran", lastname: "Ali" };
let firstname = fullName;
let lastname = fullName;
const hasBoth = {
    firstName: "Lucillie",
    lastName: "Clifton",
};
let withfirstname = hasBoth;
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withlastname = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
