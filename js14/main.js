// const a = function (first, second) {
//     return first + second;
// }

// let firstEx = a(2, 4)
// console.log(firstEx);

// Замыкание
// function name() {
//     let a = "kairat";
//     function log() {
//         console.log(a)
//     }
//     return log;
// }
// const f = name();
// f()

// function culc(n) {
//     let a = n;
//     return function culc2(m) {
//         a += m;
//         console.log(a);
//     }
// };
// const f1 = culc(100);
// const f2 = culc(1);
// f2(1)
// f2(1)
// f1(1)
// f2(1)
// f2(1)
// f1(23)
function see(el) { console.log(el) };
// рекурсия
const recSum = (num) => {
    if (num === 1) {
        return 1;
    }
    return num + recSum(num - 1);
}
see(recSum(10));

function randomArrNumbers(count) {
    const arr = [];
    for (let i = 0; i < count; i++) arr.push(Math.floor(Math.random() * 100))
    return arr
}

see(randomArrNumbers(10));

const arraySum = (arr) => {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1));
}
see(arraySum(randomArrNumbers(10)));

const pow = (n, d) => {
    if (d === 0 || n === 1) return 1;
    return n * pow(n, d - 1);
}
see(pow(2, 5))

// factorial
see("\n\t\t\t\tFactorial");
const factorial = (n = 0) => {
    if (n < 0) return "Не определено";
    else if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
see(factorial(6));
see(factorial(0));
see(factorial(-89));
see(factorial(1));
