function sum(a) {

    var currentSum = a;

    function f(b) {
        if (b) {
            currentSum += b;
            return f;
        }
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

console.log( sum(1)(2)(7)() );
console.log( sum(12)(5)(-3)() );
console.log( sum(2)(-5)(-1)() );
