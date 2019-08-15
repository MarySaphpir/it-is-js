// Напишите функцию, которая будет вызываться у массива
// и будет возвращать новый в виде продублированного

const array = [1, 2, 3, 'I', 'am', 'array'];

function duplicateArray(arr) {
    return arr.concat(arr);
}

duplicateArray(array);

// Написать программу для получения массива объектов состоящего из общих элементов двух массивов

const arrayWithObjects1 = [
    {id:3},
    {id:35},
    {id:38},
    {id:0},
    {id:11}
];
const arrayWithObjects2 = [
    {id:11},
    {id:23},
    {id:53},
    {id:3},
    {id:35}
];

function getEqualId(arrayObjects1, arrayObjects2) {
    return arrayObjects1.filter(objElem => arrayObjects2.some(objEl => objEl.id === objElem.id));
}

getEqualId(arrayWithObjects1, arrayWithObjects2);

// Нужно написать функцию которая принимает массив пОля, где 1 корабль, 0 вода для морского боя.
// Она будет вычислять количество кораблей на поле. Массив линейный

const arrayField = [1, 0, 1, 1, 1, 0, 0, 1, 1];

function shipsOnThefield(arrShips) {
    let sum = 0;
    arrShips.filter((element, index) => element === 1 && arrShips[index - 1] === 0 || index === 0 ? sum++ : sum);
    return sum;
}

shipsOnThefield(arrayField);

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// first version
function sumTwoSmallestNumbers(numbers) {
    let firstSmallNumber = 0
    let secondSmallest = 0;

    firstSmallNumber = Math.min(numbers[0], numbers[1]);
    secondSmallest = Math.max(numbers[0], numbers[1]);
    
    for (let index = 2; index < numbers.length; index++) {
        if (numbers[index] < firstSmallNumber) {
            secondSmallest = firstSmallNumber;
            firstSmallNumber = numbers[index];
        } else if (numbers[index] < secondSmallest) {
            secondSmallest = numbers[index];
        }
    }

    return (firstSmallNumber + secondSmallest);
};

numbers = [19, 5, 42, 2, 77];

sumTwoSmallestNumbers(numbers);

// second version
function sumTwoSmallestNumbers2v(numbers) {  
    numbers.sort(function (first, second) { 
        return first - second;
    });
    return numbers[0] + numbers[1];
};

sumTwoSmallestNumbers2v(numbers);


// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    switch (true) {
         case (exam > 90 || projects > 10):
         return 100
         break;
         case (exam > 75 && projects >= 5):
         return 90;
         break;
         case (exam > 50 && projects >= 2):
         return 75;
         break;
         case (exam <= 55 || projects <= 2):
         return 0;
         break;
        }
    }

    finalGrade(90, 10);