/*------------------------------------------ Parameter Type Inferences -------------------------------------------------*/
let imran: (name: string) => string;

imran = (name) => `Hello ${name.toUpperCase()}`

let singer: (song: string) => string;

singer = function(song) {
    // Type of song: string
    return `Singing: ${song.toUpperCase()!}`;  //OK
};

const songs = ["Call me", "Jolene", "The chasin"];

songs.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
    
});

export{}