/*         DEFAULT PARAMETERS     */
function hello(name = "Alexander") {
    console.log(`Hello, ${name}`);
}
hello();  //Default
hello("Imran")  //Override

// Another Example
function rateSong(song: string, rating = 0) {
    console.log(`This ${song} gets ${rating}/5 rating`);
}
rateSong("Photograph"); //OK
rateSong("Set fire in the Rain", 3); //OK
rateSong("Set fire in the Rain", undefined);
rateSong("Photograph" , "100");
// Argument of type 'string' is not assignable
//  to parameter of type 'number'.ts(2345)
