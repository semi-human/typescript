console.log("Hello");
const country = "Bangladesh";
console.log(country);
const newFunc = () => {
    console.log("Hello Worlds!");
};
newFunc();
let names = "sakib"; //string
console.log(names);
// names = 23;   //number so this is not assignable
// console.log(names);
//array
let fruits = ['mango', 'orange'];
fruits.push('pineapple');
console.log(fruits);
// fruits.push(23) //wii give error as ts thinks it is a string array
let mixed = ['mango', true, 23];
console.log(mixed);
mixed.push(234);
mixed.push("Hello");
console.log(mixed); //will give to error any other types besides these 3
//object
const person = {
    name: "Rahim",
    age: 45,
    isRetired: false
};
console.log(person.name);
// person.country ="Beangldaesh"; //will give error as it is not in the object
//explicit 
//normal value
let a;
a = "Hello";
a = true;
console.log(a);
//array
let ab = [];
ab.push(34);
ab.push('XYZ');
console.log(ab);
//object
let obj;
obj = {
    name: 'karim',
    age: 25,
    adult: true
};
console.log(obj.name, obj.age, obj.adult);
let arr;
arr = [1, 2, 3];
console.log(arr);
//dynamic
let ac;
ac = 23;
console.log(ac);
let d;
d = 45;
d = "Rahim";
console.log(d);
//function
let myFunc; //function type in ts
// myFunc = 5 // will give an error
myFunc = () => {
    console.log("Hello from function");
};
myFunc();
//parameters
const myFunc1 = (a, b, c = "Multiply") => {
    console.log("hello from another");
    console.log(c);
    return a * b;
};
console.log(myFunc1(2, 2));
const userDetails = (id, user) => {
    console.log(`User id is ${id} and name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userDetails(1, { name: 'Rakib', age: 36 });
sayHello({ name: "Van", age: 31 });
//function signature
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else if (c === "minus") {
        return a - b;
    }
    else if (c === "mul") {
        return a * b;
    }
    else if (c === 'div') {
        if (b !== 0) {
            return a / b;
        }
        else {
            return "Not a number";
        }
    }
    else {
        return "not valid opearation";
    }
};
console.log(calculation(2, 2, "div"));
//class
import { Player } from './classes/players.js';
const player1 = new Player('Rabib', 2, 'Ghana');
console.log(player1);
const player2 = new Player('Rabiba', 12, 'Ghana');
console.log(player2);
const players = []; //class type
players.push(player1);
players.push(player2);
console.log(players);
player1.play();
console.log(player1.name);
//access modifier
class Football {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    plays() {
        console.log(`${this.name} is ${this.age} years old and from ${this.country}`);
    }
}
const foot = new Football('Pele', 40, 'Brazil');
foot.plays();
/// access modifier explicitly given then this format of constructor can be done
// if access modifier is private propertry can not be read or accessed but with readOnly you can read but no access
//generic
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: 'X',
    age: 40
});
console.log(user.id);
console.log(user.name);
//tuples
let abc = []; //array
let b = [4, 'world', { p: 2 }]; //no need of push
