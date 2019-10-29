function fib1(number) {
    let firstNumber= 1, secondNumber= 1, sumResult = 0;

    for (let i = 3; i <= number; i++) {
        sumResult = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sumResult;
    }

    return secondNumber;
}

function fib2(number) {
    return number <= 2 ? 1 : fib2(number - 1) + fib2(number - 2);
}

function fib3(number) {
    if (number > 2) {
        return fib3(number - 1) + fib3(number - 2);
    }

    return 1;
}

function fib4(number) {
    return Promise.resolve(fib2(number));
}

console.log(fib1(2));
console.log(fib1(3));
console.log(fib1(5));
console.log(fib1(7));

console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(5));
console.log(fib2(7));

console.log(fib3(2));
console.log(fib3(3));
console.log(fib3(5));
console.log(fib3(7));

fib4(2).then(result => console.log(result));
fib4(3).then(result => console.log(result));
fib4(5).then(result => console.log(result));
fib4(7).then(result => console.log(result));
