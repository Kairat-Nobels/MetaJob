// Задание 1
// Напишите функцию, которая найдёт сумму квадратных корней элементов массива и округлит её до двух знаков после запятой
// [1, 2, 3, 4, 5]-- > 8.382332347441762 -- > 8.38
console.log("\t\t\t\tЗадание №1");
function foo1(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += Math.sqrt(n);
    }
    return sum.toFixed(2);
}
const arr1 = [1, 2, 3, 4, 5];
console.log(foo1(arr1));

// Задание 2
// Напишите функцию на проверку если ли в массиве есть два одинаковых элемента подряд.
// [1, 2, 3, 3, 4, 5]-- > true
//     [1, 2, 3]-- > false
//     ['hello', 'my', 'my', 'friend']-- > true
console.log("\t\t\t\tЗадание №2");
function foo2(arr) {
    let res = false;
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length && arr[i] === arr[i + 1]) res = true;
    }
    return res;
}
console.log(foo2([1, 2, 3, 3, 4, 5]));
console.log(foo2([1, 2, 3]));
console.log(foo2(['hello', 'my', 'my', 'friend']));
// Задание 3
// Напишите функцию, которая принимает в себя строку и посчитает сколько в ней гласных букв.
// В строке будут только русские слова.
// Гласных букв - десять: а, у, о, и, э, ы, я, ю, е, ё
// 'привет' -- > 2
console.log("\t\t\t\tЗадание №3");
function foo3(str) {
    const glas = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"]
    let count = 0;
    for (let i of str) {
        if (glas.includes(i)) count++;
    }
    return count;
}
console.log(foo3('приветики'));
// Задание 4(дополнительно)
// Напишите функцию, которая реализует функциональность метода filter.Функция принимает массив и callback.
// Например если мы фильтруем массив на чётные числа c помощью filter так:
// const arr = [1, 2, 3, 4, 5]
// arr.filter(el => el % 2 === 0)-- > [2, 4]
// То наша функция должна делать то же самое:
// bizdinFilter(arr, callback)-- > [2, 4]
console.log("\t\t\t\tЗадание №4");
function bizdinFilter(arr, callback) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) res.push(arr[i]);
    }
    return res;
}
const arr = [1, 2, 3, 4, 5]
console.log("filter: ", arr.filter(el => el % 2 === 0));
console.log("bizdinFilter: ", bizdinFilter(arr, el => el % 2 === 0));

// Так же пару задач с Codewars(код можете скопировать и вставить к конец кода, но работаем с самом Codewars)
function numberToString(num) {
    return num.toString();
}
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}