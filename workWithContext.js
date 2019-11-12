'use strict'


// #_______1_______# //

// let person = {
//     name: "Sam",
//     hello: function() {
//         console.log(this.name);
//     }
// };
//
// let hello = person.hello;
// let hello = person.hello.bind(person); //right answer
//
// hello(); // Type Error cannot read property 'name' of undefined


// #_______2_______# //

// let fn = {};
// function valueAccessor(value) {
//     let accessor = function(newValue) {
//         if(arguments.length === 0) {
//             return value;
//         }
//         value = newValue;
//     };
//     accessor.__proto__ = fn;
//     return accessor;
// }
// let a = valueAccessor(5);
// fn.incrementValue = function() { this(this() + 1); };
// a.incrementValue();
// console.log(a.incrementValue(5));
// a();
// console.log(a);

// function A() {
//     this.value = 1;
// }
//
// var B = function() {} ;
//
// B.prototype = A.prototype;
//
// var b = new B;
//
// b.value === undefined; // should be true
// b instanceof A; // should be true


//___Задачи от Маши___//
//______Задача 1______//

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i); // 5, 5, 5, 5, 5
//     }, 1);
// }
//
// for (let i = 0; i < 5; i++) {
//     setTimeout(function (arg) {
//         return function () {
//             console.log(arg); // 0, 1, 2, 3, 4
//         }
//     }(i), 1000);
// }

//______Задача 2______//

// let printNumbersInterval = () => {
//     let i = 1;
//     let timerId = setInterval(() => {
//         console.log(i);
//         if (i === 20) clearInterval(timerId);
//         i++;
//     }, 1000);
// };
//
// printNumbersInterval();


//______Задача 3______//

// for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){ console.log(i); });
//     document.body.appendChild(btn);
// };

//______Задача 4_____//

// var obj = {
//     a: function(){
//         console.log(this.prop);
//     },
//     prop: 1
// };
//
// obj.a.prop = 2;
// obj.a(); // 1
// let fn = obj.a;
// fn.call(obj); // TypeError сannot read property 'prop' of undefined

//_____Зачада 5_____//
// function closure() {
//     return (function(){
//         var arr = [];
//         // for(let i = 0; i < 10; i++){ //right answer
//         for(var i = 0; i < 10; i++){
//             arr.push(function(){
//                 return i;
//             });
//         }
//         return arr;
//     })()
// }
//
// console.log(closure()[3]() === 3);  //false

//_____Задача 6____// - Не понял

// function fibonachi(number) {
//     if (n < 0 || Math.round(number) != n) return NaN;
//     return Promise.resolve(iterationFibonachi(n));
// },
