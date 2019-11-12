'use strict'

//____Задачи с learnJs____//

//____Задача 1____//

// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// alert( rabbit.jumps ); // ?  true
//
// delete rabbit.jumps;
//
// alert( rabbit.jumps ); // ? null
//
// delete animal.jumps;
//
// alert( rabbit.jumps ); // ? undefined


//____Задача 2____//
// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// console.log(pockets.pen);

//____Задача 3____//
//
// let animal = {
//     eat() {
//         this.full = true;
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();
//
// console.log(rabbit.full);

//____Задача 4____//

// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     __proto__: hamster,
//     stomach: []
// };
//
// let lazy = {
//     __proto__: hamster,
//     stomach: []
// };
//
// speedy.eat("apple");
// alert( speedy.stomach );
//
// alert( lazy.stomach );

//____Задача 5____//

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};
// Rabbit.prototype.eats = false;
// delete rabbit.eats;
// delete Rabbit.prototype.eats;

console.log( rabbit.eats ); // ? 1)true 2)false 3)true 4)undefined

//____Задача 6____//

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000);

//____Задача 7____//

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
