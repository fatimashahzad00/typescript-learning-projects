type Alexander = { age: number, name: string };

let alexander: Alexander = { age: 21, name: "Alexander"};

let extratoAlexander: Alexander = {
    age: 21,
    name: "Alexander",
    location: "USA"
//     Type '{ age: number; name: string; location: string; }' is not assignable to type 'Alexander'.
//   Object literal may only specify known properties, and 'location' does not exist in type 'Alexander'.
};




type Ava = { age: number, name: string, location: string };

let ava: Ava = { age: 21, name: "Ava"};   //ERROR
// Property 'location' is missing in type '{ age: number; name: string; }' but required in type 'Ava'.

let extratoava: Ava = {
    age: 21,
    name: "Ava",
    location: "USA"
};

// Excess Property Checking

type Poet = {
    born: number;
    name: string;
}


//  Ok: all fields match what's expected in Poet
const poetMatch: Poet = {
    born: 2006,
    name: "Ava",
};

const extraProperty: Poet = {
    activity: "walking",
    born: 1995,
    name: "Aliya",
};
// ERROR Type '{ activity: string; born: number; name: string; }'
//  is not assignable to type 'Poet'.
//   Object literal may only specify known properties, 
//   and 'activity' does not exist in type 'Poet'.


const existingObject = {
    activity: "walking",
    born: 1995,
    name: "Aliya",
}

const extraPropertyObject: Poet = existingObject