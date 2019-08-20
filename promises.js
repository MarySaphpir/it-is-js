// Task 1 Promise.all 

function promiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(value => {
                result.push(value);
                if (result.length === promises.length) {
                    resolve(result);
                }
            }).catch(error => reject(error))
    });
})};

// Task 2 

function timer(num) {
    return new Promise(function(resolve) {
        let count = num;
        let intervalId = setInterval(log, 1000);
        function log() {
            console.log(count--);
            if(count < 0) {
                intervalID = clearInterval(intervalId);
                resolve(count);
            }
        }
    });
}

//timer(15);

// Task 3

function checkSum(sum, price) {
    return new Promise(function(resolve, reject){
        sum > price ? resolve("Success") : reject("Error");
    })
 };
 
 checkSum(20, 2).then(value => console.log(value));
 