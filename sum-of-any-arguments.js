function sum(firstArgument) {

    let currentSum = firstArgument;

    function innerSum(nextArgument) {
        if (nextArgument) {
            currentSum += nextArgument;
            return innerSum;
        }
        return innerSum;
    }

    innerSum.toString = function() {
        return currentSum;
    };

    return innerSum;
}

console.log( sum(1)(2)(7)() );
console.log( sum(12)(5)(-3)() );
console.log( sum(2)(-5)(-1)() );
