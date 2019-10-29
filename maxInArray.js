'use strict'

const myArray = [43, 12, 44, 5, 75, 5 , 35, 65];
const myArray2 = [43, 12, 93, 5, 75, 5 , 35, 65];
const myArray3 = [43, 12, 112, 5, 75, 5 , 35, 65];
const myArray4 = [43, 12, 333, 5, 75, 5 , 35, 65];

function getMaxInArray(currentArray) {
    let maxElement = currentArray[0];

    currentArray.forEach(arrayElement => {
        maxElement = ( arrayElement > maxElement ) ? arrayElement : maxElement;
    } );

    return maxElement;
}

function getMaxInArrayWithBind(currentArray) {
    return Math.max.apply(Math, currentArray);
}

console.log(getMaxInArray(myArray));
console.log(getMaxInArray(myArray2));
console.log(getMaxInArray(myArray3));
console.log(getMaxInArray(myArray4));

console.log(getMaxInArrayWithBind(myArray));
console.log(getMaxInArrayWithBind(myArray2));
console.log(getMaxInArrayWithBind(myArray3));
console.log(getMaxInArrayWithBind(myArray4));
