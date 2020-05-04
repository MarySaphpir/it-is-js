let fib = n => (n < 2) ? n : (fib(n-1) + fib(n-2));

function fib(n) {
    let f1 = 0,
        f2 = 1,
        fibResult = 1;

    for (let i = 2; i <= n; i++) {
        fibResult = f1 + f2;
        f1 = f2;
        f2 = fibResult;
    }

    return fibResult
}
