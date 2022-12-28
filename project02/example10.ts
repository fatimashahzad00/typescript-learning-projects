// Narrowing Object types
//   Book Example

type PoemWithPages = { name: string, pages: number }
type PoemWithRymes = { name: string, rhymes: boolean };

type Poem = PoemWithPages | PoemWithRymes   //Union Type

const poem: Poem =
    Math.random() > 0.5
        ? { name: "The Double Image", pages: 7 }
        : { name: "Her Kind", rhymes: true };

if ("pages" in poem) {
    poem.pages;   // Ok: poem is narrowed to PoemWithPages
} else {
    poem.rhymes;   //Ok: poem is narrowed to PoemWithRhymes
}

// if (poem.pages) { /* ... */ }
// Property 'pages' does not exist on type 'Poem'.
//   Property 'pages' does not exist on type 'PoemWithRymes'.
export {}        