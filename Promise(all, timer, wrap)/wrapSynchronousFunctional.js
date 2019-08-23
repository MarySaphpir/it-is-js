// Wrap on any synchronous functional

function sumOfNumbers(number1, number2) {
    return new Promise(function(resolve, reject) {
        let sum = number1 + number2;
        if (sum) {
            resolve(sum);
        } else {
            reject('error');
        }
    })
}

sumOfNumbers(2, 3)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));