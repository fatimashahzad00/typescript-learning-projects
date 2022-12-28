/*      UNIONS OF OBJECT TYPES        */

// IMPLICIT / INFERRED Object-Type Unions
          //Book Example

  const poem = Math.random() > 0.5 
  ? { name:"The Double Image", pages: 7 }
  : { name: "Her Kind", rhymes: true };

// Type:{
//     name: string;
//     pages: number;
//     rhymes?: undefined;
// }
// |
// {
//     name: string;
//     pages?: number;
//     rhymes: boolean;
// }

poem.name;  //string
poem.pages;  //number | undefined
poem.rhymes;  //boolean | undefined



//    Another Example

// all these book variable types are inferred types
const book = Math.random() > 0.5 
? { name: "The Prince", origin: "Italy", pages: 5 }
: { name: "The Secret of the Self", origin: "Pakistan", words: 500 };
// Type book: {
//     name: string;
//     origin: string;
//     pages: number;
//     words?: undefined;
// } | {
//     name: string;
//     origin: string;
//     words: number;
//     pages?: undefined;
// }

book.name;   //string
book.origin;  //string
book.pages;  //number | undefined
book.words;  //number | undefined
export{}