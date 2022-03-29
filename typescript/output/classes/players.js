export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.id = a;
        this.country = c;
    }
    play() {
        console.log(`Hello ${this.name} and id is ${this.id} and 
        country is ${this.country}`);
    }
}
