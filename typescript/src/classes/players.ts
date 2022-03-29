export class Player{
    name:string;
    id:number;
    country:string;

    constructor(n:string,a:number,c:string){
        this.name = n;
        this.id = a;
        this.country = c;
    }

    play(){
        console.log(`Hello ${this.name} and id is ${this.id} and 
        country is ${this.country}`);
    }
}