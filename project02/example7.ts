
  /*                     NESTED OBJECTS                */ 

type Author = {
    firstname: string,
    lastname: string,
}


type Book = {
    author: Author,
    name: string,
    pages?: number,
};


// CASE 1
const book: Book = {
    author: {
        firstname: "Niccolo",
        lastname: "Machevallie",
    },
    name: "The Prince",
    // pages: 23,
};

type book1 = {
    author: Author,
    name: string,
    pages: number,
};

const books: book1 = {
    author: {
        firstname: "Niccolo",
        lastname: "Machevallie",
    },
    name: "The Prince",
    // Property 'pages' is missing in type '{ author: { firstname: string; lastname: string; }; name: string; }' but required in type 'book1'.
    // pages: 23,
};

// CASE 2
const book1: Book = {
       //ERROE       Property 'author' is missing in type '{ name: string; }' but required in type 'Book'.
    name: "The Prince",
};

//CASE 3
const book2: Book = {
    firstname: "Niccolo",
//     Type '{ firstname: string; name: string; }' is not assignable to type 'Book'.
//   Object literal may only specify known properties, and 'firstname' does not exist in type 'Book'.
    // author: {
    //     firstname: "Niccolo",
    //     lastname: "Machevallie",
    // },
    name: "The Prince",
};

//CASE 4
const book5: Book = {
    author: {
        firstname: "Niccolo",
    //    Property 'lastname' is missing in type '{ firstname: string; }' but required in type '{ firstname: string; lastname: string; }'.
    // he expected type comes from property 'author' which is declared here on type 'Book'
    },
    name: "The Prince",
};