/* Topic 1: FUNCTION PARAMETERS  */

function hello1(name1) { //Parameter 'name' implicitly has an 'any' type.
    console.log(`Hello ${name1}`);
}
hello1("Elsa")

function hello(name: string) {
    console.log(`Hello ${name}`);
}
hello("1")  //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

function sing1(song1) {
    console.log(`Singing: ${song1}!`);
}

function sing(song: string) {
    console.log(`Singing: ${song}!`);
}
