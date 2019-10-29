const obj  = {
    property1 : 1,
    property2 : {
        subProperty1 : 2,
        subProperty2 : 3,
        subProperty3 : {
            subsSubProperty1 : {
                subSubSubProperty1 : 4,
                subSubSubProperty2 : 5
            },
            subSubProperty1 : '6',
            subSubProperty2 : '7'
        }
    },
    property3 : {
        subProperty1 : '8',
        subProperty2 : {
            subsSubProperty1 : {
                subSubSubProperty1 : '9',
                subSubSubProperty2 : '10'
            },
            subSubProperty1 : '11',
            subSubProperty2 : '12'
        },
        subProperty3: 13
    }
};

const objSmall = {
    prop1 : 1,
    prop2 : {
        subProp1 : 2,
        subProp2 : "3"
    },
    prop3 : "4"
};

function objToString(obj) {
    let buffer = '';
    for (key in obj) {
        if ( typeof obj[key] !== 'object' ||  !obj[key] ) {
            buffer += obj[key] + " ";
        } else {
            buffer += objToString(obj[key]);
        }
    }
    return buffer;
}

function objToString1(obj) {
    let buffer = '';

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] !== 'object' || typeof obj[key] === null) {
            buffer += obj[key] + " ";
        } else {
            buffer += objToString(obj[key]);
        }
    });

    return buffer;
}

console.log("Итого: ");
console.log(objToString1(obj));
console.log("Итого: ");
console.log(objToString1(objSmall));
