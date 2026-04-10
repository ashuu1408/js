const name = "Ashutosh"
const repoCount = 4

// console.log (name + repoCount + " Value");  old way of writing syntax

console.log(`Hello my name is ${name} and my repo 
    count is ${repoCount}`);

const gameName = new String('Ashutosh-arya')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    Ashutosh    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://ashuu.in/Ashutosh%20Jha"

console.log(url.replace('%20', '-'))


console.log(url.includes('Arya'))

console.log(gameName.split('-'));

