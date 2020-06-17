const arrayFirst = [1, 0, 9, 7, 4, -3];
const arraySecond = [11, 6, -3, 7, 13, 8, 9, 0];

const findCommonElementsInArraysLoopsVariant = (array1, array2) => {
    let commonElementsArray = [];

    for(let i = 0; i < array1.length; ++i) {
        for(let j = 0; j < array2.length; ++j) {
            if(array1[i] === array2[j]) {
                commonElementsArray.push(array1[i]);
            }
        }
    }

    return commonElementsArray;
};

const findCommonElementsInArraysFilterMethod = (array1, array2) => array1.filter(value => array2.includes(value) > 0);

console.log(findCommonElementsInArraysLoopsVariant(arrayFirst, arraySecond));
console.log(findCommonElementsInArraysFilterMethod(arrayFirst, arraySecond));
