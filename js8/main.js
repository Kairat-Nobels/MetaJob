// join
// const arr1 = ["1", "2", "3", "4"];
// const result = arr1.join('');
// console.log("arr1: ", arr1);
// console.log("result: ", result);

// const userName = "Kairat";
// const reversed = userName.split("").reverse().join('')
// console.log(reversed);

// some() - хотябы один элемент
// const letters = ["a", "b", "c", "d", "e"];
// const result = letters.some(i => i === "d");
// console.log("some: ", result);

// every() - все элементы
// const numbers = [2, 4, 5, 6, 7, -5];
// const result1 = numbers.every(i => i > 0);
// console.log("every: ", result1);

// findIndex()
// const users = [
//     { id: 1, name: "Alex" },
//     { id: 3, name: "Gloria" },
//     { id: 4, name: "Marti" },
//     { id: 2, name: "Melman" },
// ]

// const findIndex = users.findIndex(user => user.id === 2);
// console.log("findIndex: ", findIndex, "\nelement: ", users[findIndex]);

// find()
// const penguin = [
//     { id: 1, name: "Shkiper" },
//     { id: 3, name: "Riko" },
//     { id: 4, name: "Prapor" },
//     { id: 2, name: "Kavalski" },
// ]

// const finded = penguin.find(user => user.name === "Riko");
// console.log("finded: ", finded);

// indexOf()
// const numbers1 = [1, 5, 2, 3, 4, 5, 6];
// const res = numbers1.indexOf(5)
// console.log("res by indexOf: ", res, '\nelement: ', numbers1[res]);

// lastIndexOf
// const numbers2 = [1, 2, 3, 4, 5];
// const res2 = numbers2.lastIndexOf(8);
// console.log("res by lastIndexOf: ", res2, '\nelement: ', numbers2[res2]);

// sort()
// const numbers3 = [10, 4, 12, 5, -8, 0, 3];
// const res3 = numbers3.sort((a, b) => a - b);
// console.log("numbers: ", numbers3, "\nsorted numbers: ", res3);

// filter()
// const array = ["smile", null, undefined, 123, "shine", { id: "jkl" }, "life"];
// const resArr = array.filter(i => typeof i === "string");
// console.log("array: ", array, "\nfiltered array: ", resArr);

// reduce()
// const money = [2000, 4000, 300];
// const sum = money.reduce((curr, prev) => prev >= 1000 ? curr + prev : curr, 7000);
// console.log(sum);

// ---------------------------
// 1) Объедините массив в строку с использованием разделителя: "-"
const arr1 = ["first", "second", "third", "fourth", "fifth"];
console.log(arr1.join('-'));
// 2) Напишите код которая будет принимать строку от пользователя(prompt) и выводила все слова в обратном порядке.
const words = prompt("enter something")
console.log(words.split('').reverse().join(''));
let usersRecords = [{ name: 'John', id: 123, marks: 98, pole: "mentor", age: 35 },
{ name: 'Baba', id: 101, marks: 23, pole: "student", age: 12 },
{ name: 'yaga', id: 200, marks: 45, pole: "student", age: 20 },
{ name: 'Wick', id: 115, marks: 75, pole: "mentor", age: 24 }]
// 3) Есть массив пользователей.Вывести несовершенолетнего пользователя
console.log(...usersRecords.filter(el => el.age < 18));
// 4) Из того же массива вернуть пользователя с именем yaga
console.log(usersRecords.find(el => el.name === "yaga"));
// 5) Получить студентов у которых marks больше 44 и age больше 20
console.log(usersRecords.filter(el => el.marks > 44 && el.age > 20));
// 6) Вывести общую сумму marks
// let sum = usersRecords.reduce((a, b) => a.age + b.age);
const sum = usersRecords.reduce((acc, curr) => acc + curr.marks, 0)
console.log(sum);