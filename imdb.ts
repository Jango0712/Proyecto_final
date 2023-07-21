import { Movie } from "./Movie"; 
const fs = require('fs');


export class imdb{
    movies: Movie[];
    
    constructor (movies: Movie[]){
        this.movies = movies;
    }
    public escribirEnFicheroJson(nombreFichero:string){
        const contenidoImdb = JSON.stringify(this);
        console.log(contenidoImdb)
        fs.writeFileSync(nombreFichero, contenidoImdb);
    }

    public obtenerInstaciaImdb(nombreFichero:string):imdb{
        const imdbFichero = JSON.parse(fs.readFileSync(nombreFichero, "utf-8"))
        return imdbFichero
    }
}

