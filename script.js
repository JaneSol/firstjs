'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let persone = {
    name: "Jhon",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[2]);

//alert('Hello world!');

//let answer = confirm('Are you here?');
//console.log(answer);

//let answer = +prompt('Есть ли вам 18?', '');
//console.log(answer);

//console.log("arr"+" - object");
let incr = 10,
    decr = 10;



//console.log(++incr);
//console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed);
