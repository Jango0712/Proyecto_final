import { Professional } from "./professional";

export class Movie
{
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;
    public plataforma:string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.nacionality = nacionality;
      
    }

    public printAll()
    {
        console.group(Movie)
            console.log("Title - " + this.title);
            console.log("Release Year - " + this.releaseYear);
            console.log("Nacionality - " + this.nacionality);
            console.log("Genre- " + this.genre);
            console.log("Actors - " + this.actors);
            console.log("Director - " + this.director);
            console.log("Writer - " + this.writer);
            console.log("Language - " + this.language);
            console.log("Plataform - " + this.plataforma);
            console.log("Is MCU? - " + this.isMCU);
            console.log("Main Character Name - " + this.mainCharacterName);
            console.log("Producer - " + this.producer);
            console.log("Distributor - " + this.distributor);
        console.groupEnd();
    }
}
