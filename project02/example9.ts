//      EXPLICIT OBJECT TYPE UNIONS
//       Book Example

type PoemWithPages = { name: string, pages: number }
type PoemWithRymes = { name: string, rhymes: boolean };

type Poem = PoemWithPages | PoemWithRymes   //Union Type

const poem: Poem =
    Math.random() > 0.5
        ? { name: "The Double Image", pages: 7 }
        : { name: "Her Kind", rhymes: true };

poem.name;  //string
poem.pages;        //ERROR
 //Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRymes'.

poem.rhymes;    //ERROR
// Property 'rhymes' does not exist on type 'Poem'.
//   Property 'rhymes' does not exist on type 'PoemWithPages'.