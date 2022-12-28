// OPtional Properties

type Book = {
    author?: string;
    pages: number;
};
// Ok
const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};
const missing: Book = {
    author: "Rita Dove",
};
// Error: Property 'pages' is missing in type
// '{ author: string; }' but required in type 'Book'

type Writers = {
    author: string | undefined;
    editor?: string;
    };
    // Ok: author is provided as undefined
    const hasRequired: Writers = {
    author: undefined,
    };
    const missingRequired: Writers = {};
    // ~~~~~~~~~~~~~~~
    // Error: Property 'author' is missing in type
    // '{}' but required in type 'Writers'.
    

export {}