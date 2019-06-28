function fib1(n) {
    let a = 1, b = 1, c = 0;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function fib2(n) {
    return n <= 2 ? 1 : fib1(n - 1) + fib1(n - 2);
}

function fib3(n) {
    if (n > 2) {
        return fib3(n - 1) + fib3(n - 2);
    }
    return 1;
}

console.log(fib1(2));
console.log(fib1(3));
console.log(fib1(5));
console.log(fib1(7));

console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(5));
console.log(fib2(7));

console.log(fib3(2));
console.log(fib3(3));
console.log(fib3(5));
console.log(fib3(7));