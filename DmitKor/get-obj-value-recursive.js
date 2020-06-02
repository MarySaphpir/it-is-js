let someObj = {
    key1: 1,
    key2: 2,
    keyObj: {
        key3: 3,
        key4: '4',
        keyObj: {
            key5: 5,
            key6: '6',
        }
    },
    key7: '7',
    key8: 8,
}

let getObjValue = obj => {
    let getValue = currentObj => {
        for(let value in currentObj) {
            if(typeof(currentObj[value]) === 'object') {
                getValue(currentObj[value]);
            } else {
                console.log(currentObj[value].toString())
            }
        }
    }

    getValue(obj);
}

getObjValue(someObj);
