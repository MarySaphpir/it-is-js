var obj  = {
    property1 : 1,
    property2 : {
        subProperty1 : 2,
        subproperty2: 3,
        subproperty3 : {
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
        subproperty2 : {
            subsSubProperty1 : {
                subSubSubProperty1 : '9',
                subSubSubProperty2 : '10'
            },
            subSubProperty1 : '11',
            subSubProperty2 : '12'
        },
        subproperty3: 13
    }
};

var objL = {
    prop1 : 1,
    prop2 : {
        subProp1 : 2,
        subProp2 : "3"
    },
    prop3 : "4"
}

function objToString(obj) {
    var buffer = '';
    for (key in obj) {
        if ( typeof obj[key] !== 'object' ||  typeof obj[key] === null) {
            buffer += obj[key] + " ";
        } else {
            buffer += objToString(obj[key]);
        }
    }
    return buffer;
}

console.log("Итого: ");
console.log(objToString(obj));
console.log("Итого: ");
console.log(objToString(objL));
