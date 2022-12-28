/*      Discriminated Unions         */
// Working Example
type ImranInPakistan = { name: string; age: number; type: "Pakistan"; };
type ImranOverseas = {
    name: string;
    age: number;
    type: "Overseas";
    nickName: string;
};

type Imran = ImranInPakistan | ImranOverseas;

const imran: Imran =
    Math.random() > 0.5 
        ? { name: "Imran", age: 30, type: "Pakistan" }
        : {
            name: "Imran",
            age: 18,
            type: "Overseas",
            nickName: "Alexander"
        };

// imran.nickName;
// Property 'nickName' does not exist on type 'Imran'.
//   Property 'nickName' does not exist on type 'ImranInPakistan'.

if(imran.type === "Pakistan"){
    console.log(`He is in Pakistan so we will call him. ${imran.name}` );
} else {
    console.log(`He is not in Pakistan se will call him. ${imran.nickName}`);
    
}
export { }

// type PoemWithPages = {
//     name: string;
//     pages: number;
//     type: 'pages';
//     };
//     type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     type: 'rhymes';
//     };
//     type Poem = PoemWithPages | PoemWithRhymes;
//     const poem: Poem = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7, type: "pages" }
//     : { name: "Her Kind", rhymes: true, type: "rhymes" };
//     if (poem.type === "pages") {
//     console.log(`It's got pages: ${poem.pages}`); // Ok
//     } else {
//     console.log(`It rhymes: ${poem.rhymes}`);
//     }
    // poem.type; // Type: 'pages' | 'rhymes'
    // poem.pages;
    // ~~~~~
    // Error: Property 'pages' does not exist on type 'Poem'.
    // Property 'pages' does not exist on type 'PoemWithRhymes'.