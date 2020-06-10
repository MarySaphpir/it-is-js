const arrayFirst = [1, 2, 3, 'string', 4];
const arraySecond = [5, 6, 7, 'string again', 8, 9];

const makeArraysConcatenationConcatMethod = (arr1, arr2) => arr1.concat(arr2);

const makeArraysConcatenationSpreadOperator = (arr1, arr2) => [...arr1, ...arr2];

console.log(makeArraysConcatenationConcatMethod(arrayFirst, arraySecond));
console.log(makeArraysConcatenationSpreadOperator(arrayFirst, arraySecond));
