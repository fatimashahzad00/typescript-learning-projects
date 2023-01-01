/*   Optional Parameters   */
// function hello(name: string, aka?:string) {  //(parameter) aka: string | undefined
//     console.log(`Hello ${name}, ${aka}`);
// }
// hello("Imran", "aka Alexander");
// function announceSong(song: string, singer?:string) {
//     console.log(`Song: ${song}`);
//     if(singer) {
//         console.log(`Singer: ${singer}`);
//     }
// }
// announceSong("Greensleeves");  //OK
// announceSong("Greensleeves" , undefined);   //OK
// announceSong("Greensleeves" , "Sia");   //OK
function announceSongby(song, singer) {
    /* ........................ */
}
// announceSongby("Greensleeves");  //Expected 2 arguments, but got 1.
announceSongby("Greensleeves", undefined);
