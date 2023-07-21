import {Movie} from "./Movie";
import {imdb} from "./imdb";
const fs = require('fs');



let batman = new Movie("batman",2010,"americana","accion");
let cat = new Movie("cat",2010,"europea","drama");
let imdb1 = new imdb([batman, cat]);

// console.log(imdb1);
let imdbStringify = JSON.stringify(imdb1);
fs.writeFileSync("imdbBBDD.json", imdbStringify);
let imdbParse = JSON.parse(fs.readFileSync("imdbBBDD.json"));
console.log(imdbParse)
