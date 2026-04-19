const score = 100
console.log(score);


const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

 const otherNumber = 123.89666

 console.log(otherNumber.toPrecision(3));

 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));
 
 //**********************Maths***************************** 

 console.log(Math);
 console.log(Math.abs(-4));
 console.log(Math.round(4.6845));
 console.log(Math.ceil(547.567));
 console.log(Math.floor(5.578));
 


 console.log(Math.random()); //gives value between 0 and 1
 console.log((Math.random()*10) + 1); // *by 10 because we are shifting values in left and adding 1 because we need value more than 1
 console.log(Math.floor(Math.random()*10) + 1);
 
 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 
 