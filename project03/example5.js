/*         DEFAULT PARAMETERS     */
function hello(name) {
    if (name === void 0) { name = "Alexander"; }
    console.log("Hello, ".concat(name));
}
hello();
// Another Example
function rateSong(song, rating) {
    if (rating === void 0) { rating = 0; }
    console.log("This ".concat(song, " gets ").concat(rating, "/5 rating"));
}
rateSong("Photograph"); //OK
rateSong("Set fire in the Rain", 3); //OK
rateSong("Set fire in the Rain", undefined);
