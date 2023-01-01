/*------------------------------ RETURN TYPES ------------------------------------------------------ */

function hello(name = "Alexander") {
    return name;
}
hello();  


// Another Example
// Type: (songs: string[]) => number
function singSongs(songs: string[]) {
    for(const song of songs) {
        console.log(`${song}`);
        
    }
    return songs.length;
}

// Type: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
    return index < songs.length
    ? songs[index]
    :undefined;
}

/*------------------------- Explicit Return Types ------------------------------------------------ */
function person(name = "Alexander") : string {
    return name;
}
person();
function singSongsRecursive(songs: string[], count = 0) : number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRecursive1 = (songs: string[], count = 0) : number {
    return songs.length ? singSongsRecursive1(songs.slice(1), count + 1) : count;
}

function getSongRecordingDate(song: string): Date| undefined {
    switch(song) {
        case "Strange Fruit":
        return new Date('April 1, 1939');

        case "Greensleeves":
        return "unknown";
        // Type 'string' is not assignable to type 'Date'.

        default:
            return undefined;
    }
}

