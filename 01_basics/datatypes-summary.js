
// # Primitive data type
// there are 7 types of primitive data type and these are called call by value
/* String , Number , Boolean , Null, Undefined, Symbol , BigInt */

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmai;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 654564165465461645646n //adding n at the end makes it bigInt



// # Non Primitive data type (Reference)
// Array , Objects, Functions these comes under non primitive data type


const heros = ["shaktiman","naagraj","doga"] //arrary representation/syntax


let myObj = {         //object representation/syntax
    name: "Ashutosh",
    age: 20,
}

const myFunction = function(){ // function representation/syntax 
console.log("Hello World");
}

