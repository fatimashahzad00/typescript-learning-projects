/*----------------------------- Function Types --------------------------------------- */
var nickName = ["Alexander", "Alex", "Alexander the great"];
var imranName;
function allNicknames(callback) {
    for (var i = 0; i < allNicknames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return "".concat(nickName[index]);
}
allNicknames(getNameAt);
// function logName(name: string) {
//     return `${name};`
// }
// allNicknames(logName)// Error
// Argument of type '(name: string) => string' is not assignable to parameter of type '(index: number) => string'.
//   Types of parameters 'name' and 'index' are incompatible.
//   Type 'number' is not assignable to type 'string'.
