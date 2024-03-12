// for in

// let user = {
//     name: "Ben",
//     age: 40,
//     isAmerican: true,
// };

// for (let key in user) {
//     console.log("key: ", key, '\nvalue: ', user[key]);
// };

// let cars = {
//     title: "Toyota",
//     year: 2003
// }

// for (let key in cars) {
//     console.log(`key ${key}, value:  ${cars[key]}`);
// }

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// let sum = 0;
// for (let key in obj) {
//     sum += obj[key];
// }
// console.log(sum);

// for of

// const teachers = ["Adilet", "Beka", "Tom", "Kairat"];
// for (user of teachers) console.log(user);

// const numbers = [];

// const evenNumbers = [];

// for (let i = 1; i < 11; i++) numbers.push(i);

// for (let n of numbers) n % 2 === 0 && evenNumbers.push(n);

// console.log(numbers);
// console.log(evenNumbers);

// // matrix
// const matrix1 = [[1, 2, 3], [4, 5, 6]];

// const sumOf = (arr) => {
//     let sum = 0;
//     for (let el of arr) {
//         for (let inner of el) {
//             sum += inner;
//         }
//     }
//     return sum;
// }

// console.log(sumOf(matrix1));

// 1) У вас есть объект const obj = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 30,
//     e: "another string"
// };  Напишите программу, которая перебирает свойства объекта и суммирует числовые значения свойств.
const obj = {
    a: 10,
    b: 20,
    c: "string",
    d: 30,
    e: "another string"
};
let sum1 = 0;
for (let key in obj) {
    if (!isNaN(obj[key])) sum1 += obj[key];
}
console.log("\t\t\t\t#1");
console.log(sum1);

// 2) Работаем с тем же объектом obj.Напишите программу, чтобы она выводила только свойства объекта, значение которых является строкой.
console.log("\t\t\t\t#2");
for (let key in obj) {
    if (typeof (obj[key]) == "string") console.log(key);;
}
// 3) Напишите программу, которая перебирает строки в массиве и выводит их на консоль.
console.log("\t\t\t\t#3");
const strings = ['kairat', 'ales', 'eran', 'kakakak']
for (let el of strings) console.log(el);
// 4) Напишите программу, чтобы она выводила только строки с длиной больше 5 символов.
console.log("\t\t\t\t#4");
for (let el of strings) el.length > 5 && console.log(el);

// 5) Задача: Вывести все ключи и значения объекта, содержащего списки студентов по классам.
const studentsByClass = {
    "1A": ["Alice", "Bob", "Charlie"],
    "2B": ["David", "Emily", "Frank"],
    "3C": ["Grace", "Henry", "Ivy"]
};
// Вывод: Class: 1A - Alice, Bob, Charkie и т.д
console.log("\t\t\t\t#5");
for (let key in studentsByClass) {
    console.log(`Class: ${key} - ${studentsByClass[key].join(', ')}`);
}
