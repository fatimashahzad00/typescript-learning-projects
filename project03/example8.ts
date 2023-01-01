/*----------------------------- Function Types --------------------------------------- */
const  nickName = ["Alexander", "Alex", "Alexander the great"]
let imranName: (name: string, nickName?: string) => string;

function allNicknames(callback: (index: number) => string) {
    for (let i = 0; i < allNicknames.length; i++) {
        console.log(callback(i));
        
    }
}
function getNameAt(index: number) {
    return `${nickName[index]}`
}

allNicknames(getNameAt)

// function logName(name: string) {
//     return `${name};`
// }
// allNicknames(logName)// Error
// Argument of type '(name: string) => string' is not assignable to parameter of type '(index: number) => string'.
//   Types of parameters 'name' and 'index' are incompatible.
//   Type 'number' is not assignable to type 'string'.


/*----------------------------------------- Book Example ----------------------------------------*/
let nothingGInGivesString: () => string;

let inputOroutput: (songs: string[], count?: number) => number;

const songs = ["Juics", "Shake it Off", "Whats up"];

function runOnSong(getSongAt: (index: number) => string) {
    for(let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt(i));
        
    }
}

function getSongAt(index: number) {
    return `${songs[index]}`
}

runOnSong(getSongAt); //OK

function logSong(name: string) {
    return `${songs}`;
}
runOnSong(logSong);
// Error: Argument of type '(song: string) => string' is not
// assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.