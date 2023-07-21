import {Movie} from "./Movie";
import { Professional } from "./professional";
const fs = require('fs');
const readlineSync = require('readline-sync');

let name = readlineSync.question("ingrese su nombre:  ")
let age = readlineSync.questionInt("ingrese su edad:  ")
let weight= readlineSync.questionInt("ingrese su peso  ")
let height= readlineSync.questionInt("ingrese su altura:  ")
let isRetired =readlineSync.keyInYN("esta usted retirado:  ")
let nacionality = readlineSync.question("cual es su nacionalidad:  ")
let oscarsNumber = readlineSync.questionInt("tiene algun Oscar:  ")
let profession= readlineSync.question("cual es su profesion:  ")



let professional: Professional = new Professional(name, age, weight, height, isRetired, nacionality, oscarsNumber, profession)



let batman = new Movie("batman",2010,"americana", "acción")

batman.actors = [professional]

console.log(batman);