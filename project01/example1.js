"use strict";
// let singer = "Alexander";  //in typescript it will consit alexander as a string by default
//let singer = 7;  //in typescript it will consit 7 as a number by default
// let singer = Math.random() > .5 ? "Alexander" : "Imran" //variable singer infer only string
// let singer = Math.random() > .5 ? "Alexander" : 8; // variable singer infer like this after adding number et singer: string | number
// let singer= // Read
let singer = "Alexander"; //Infer
console.log(singer); // Analyze
singer.charAt; // Notify
// singer.random() //Notify - Property 'random' does not exist on type 'string'
