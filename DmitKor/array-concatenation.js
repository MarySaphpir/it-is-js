let arrFirst = [1, 2, 3, 'string', 4],
    arrSecond = [5, 6, 7, 'string again', 8, 9];

let arrConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(arrConcat(arrFirst, arrSecond));
