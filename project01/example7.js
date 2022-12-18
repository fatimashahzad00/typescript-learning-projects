"use strict";
let cher = {
    firstName: "Fatima",
    lastName: "Shahzad"
};
// cher.middleName;  //Property 'middleName' does not exist on type '{ firstName: string; lastName: string; }'
let alexander = {
    location: "USA",
    timeZone: "NYC"
};
alexander.location;
// alexander.country;  //Property 'country' does not exist on type '{ location: string; timeZone: string; }'.
