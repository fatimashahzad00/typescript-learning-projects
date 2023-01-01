/*   Optional Parameters   */
function hello(name: string, aka?:string) {  //(parameter) aka: string | undefined
    console.log(`Hello ${name}, ${aka}`);
}
hello("Imran", "aka Alexander");

function announceSong(song: string, singer?:string) {
    console.log(`Song: ${song}`);
    
    if(singer) {
        console.log(`Singer: ${singer}`);
        
    }
}

announceSong("Greensleeves");  //OK
announceSong("Greensleeves" , undefined);   //OK
announceSong("Greensleeves" , "Sia");   //OK


function announceSongby(song: string, singer: string | undefined) {
    /* ........................ */
}

announceSongby("Greensleeves");  //Expected 2 arguments, but got 1.
announceSongby("Greensleeves", undefined);  //Ok
announceSongby("Greensleeves" , "Sia");   //OK


function announceSinger(singer?: string, song: string) {}
// 'song' is declared but its value is never read.ts(6133)
// A required parameter cannot follow an optional parameter.