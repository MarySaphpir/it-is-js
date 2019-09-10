    //  timer using promise

    function printNumbers(from, to) {
        return new Promise(function(resolve, reject) {
            let timerId = setInterval(function() {
                console.log(from);
                if (from == to) {
                    clearInterval(timerId);
                }
                from++;
            }, 1000);
            if (from, to) {
                resolve();
            } else {
                reject('error');
            }
        })
    }

printNumbers(1, 5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));