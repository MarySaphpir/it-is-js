// Task 1

function copyArray(array) {
    return array.slice();
}

console.log(copyArray([4, 7, 9, 10]));

// Task 2 

let dataObjects = [
    { id : 4 },
    { id : 3 },
    { id : 6 },
    { id : 10 },
    { id : 18 },
    { id : 13 },
];

let dataUsers = [
    { id : 4 },
    { id : 3 },
    { id : 7 },
    { id : 10 },
    { id : 15 },
    { id : 19 },
];

function findEqualData(array, data) {
    let equalData = [];

    array.filter(elem => data.filter(el => {
       elem.id === el.id ? equalData.push(elem) : equalData;
    }));

    return equalData;
}

console.log(findEqualData(dataObjects, dataUsers));

// Task 3

const arrayShips = [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1];

function checkShipsNumber(array) {
    let number = 0;

    array.filter((elem =>  elem === 1 && elem - 1 !== 1 ? number : number += 1));
    return number;
}

console.log(checkShipsNumber(arrayShips));

// Task 4

function finalGrade(grade, projects) {
    return (grade >= 100 && projects > 10) ? finalGrade = 100 
        : (grade > 75 && 5 <= projects < 10) ? finalGrade = 90
        : (grade > 100 && 2 <= projects < 5) ? finalGrade = 75 
        : finalGrade = 0;
}

console.log(finalGrade(100, 12));

// Task 5

function findNumbers (array, target) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
       for (let j = 0 + i; j < array.length; j++) {
            target === array[i] + array[j] ? numbers.push(array[i], array[j]) : numbers;
        }
    }

    return numbers;
}
  
console.log(findNumbers([1, 4, 7, 8, 3], 7));