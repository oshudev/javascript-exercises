const fibonacci = function (num) {
    let count = typeof num !== "number" ? parseInt(num) : num;
    if (num < 0) return "OOPS";

    let fib = [0, 1];

    for (let i = 2; i <= count; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
