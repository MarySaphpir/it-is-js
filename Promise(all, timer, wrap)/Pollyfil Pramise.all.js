// pollyfil Promise.all

const firstPromise = () => {
    return Promise.resolve('First promise is resolved');
}

const secondPromise = () => {
    return Promise.resolve('Second promise is resolved');
}

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const promiseCount = promises.length;
        const resolvedData = [];
        let resolvedCount = 0;

        function checkStatus(data) {
            resolvedData.push(data);
            resolvedCount++;
            
            if (resolvedCount === promiseCount) {
                resolve(resolvedData)
            }
        }
        
        promises.forEach((promise, i) => {
            promise().then((data) => {
                checkStatus(data)
            }).catch((error) => {
                reject(error)
            })
        })
    })
}

promiseAll([firstPromise, secondPromise])
    .then((result) => {
        console.log(result);
    })
    
    .catch((error) => {
        console.log(error);
    })
